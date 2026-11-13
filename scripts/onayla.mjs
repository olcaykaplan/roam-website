#!/usr/bin/env node
// Onay kapısı: `reviewed: false` olan yazıları OKUDUKTAN sonra yayın kuyruğuna alır.
//
//   npm run onayla                      → bekleyen tüm konuları onayla, yarından başlayıp günde 1 konu yayınla
//   npm run onayla -- --per-day 2       → günde 2 konu
//   npm run onayla -- --start 2026-12-01
//   npm run onayla -- --only kyoto-erken-saatler,roma-30-dakika   (translationKey listesi)
//   npm run onayla -- --dry             → hiçbir şey yazmadan planı göster
//
// "Konu" = aynı translationKey'e sahip tüm dil dosyaları (TR/EN/ES/DE aynı gün çıkar → hreflang düzgün çalışır).
// Yayın tarihi gelince site, günlük otomatik yeniden derlemede (.github/workflows/gunluk-yayin.yml) yazıyı kendiliğinden gösterir.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../src/content/blog/', import.meta.url));
const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? def : args[i + 1];
};
const dry = args.includes('--dry');
const perDay = Math.max(1, parseInt(opt('per-day', '1'), 10) || 1);
const only = opt('only', '')?.split(',').map((s) => s.trim()).filter(Boolean);

const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
const start = new Date(`${opt('start', tomorrow)}T00:00:00Z`);
if (Number.isNaN(start.valueOf())) {
  console.error('Geçersiz --start tarihi. Biçim: YYYY-MM-DD');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(md|mdx)$/.test(f) ? [p] : [];
  });
}

const field = (fm, key) => fm.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'))?.[1]?.replace(/^["']|["']$/g, '');

const pending = [];
for (const file of walk(ROOT)) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m || field(m[1], 'reviewed') !== 'false') continue;
  const key = field(m[1], 'translationKey') ?? relative(ROOT, file);
  if (only.length && !only.includes(key)) continue;
  pending.push({ file, raw, key, date: field(m[1], 'pubDate') ?? '' });
}

if (!pending.length) {
  console.log('Onay bekleyen yazı yok.');
  process.exit(0);
}

const groups = new Map();
for (const p of pending) groups.set(p.key, [...(groups.get(p.key) ?? []), p]);
const ordered = [...groups.entries()].sort(
  (a, b) => (a[1][0].date + a[0]).localeCompare(b[1][0].date + b[0]),
);

ordered.forEach(([key, files], i) => {
  const day = new Date(start.valueOf() + Math.floor(i / perDay) * 86400000).toISOString().slice(0, 10);
  console.log(`${day}  ${key}  (${files.length} dil)`);
  if (dry) return;
  for (const f of files) {
    const next = f.raw
      .replace(/^reviewed:\s*false\s*$/m, 'reviewed: true')
      .replace(/^pubDate:\s*.+$/m, `pubDate: ${day}`);
    writeFileSync(f.file, next);
  }
});
console.log(dry ? '\n(--dry: dosyalara dokunulmadı)' : '\nTamam. Commit + push yap; her gün tarihi gelen konu kendiliğinden yayına çıkar.');
