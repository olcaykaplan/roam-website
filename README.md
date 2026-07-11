# Roam Web Sitesi

[Roam](../roam) mobil uygulamasının tanıtım sitesi + SEO blog'u.
**Astro** ile statik üretilir; barındırma ücretsizdir (Cloudflare Pages).

## Hızlı başlangıç

```bash
npm install
cp .env.example .env   # Supabase değerlerini doldur (roam/.env.local ile aynı)
npm run dev            # http://localhost:4321
```

## En sık yapılacak iş: blog yazısı yayınlamak

`src/content/blog/tr/` (veya `en/`) klasörüne bir `.md` dosyası ekle, push'la. Bitti.
Ayrıntı: **[docs/BLOG-REHBERI.md](docs/BLOG-REHBERI.md)**

## Dokümanlar

| Doküman | İçerik |
| --- | --- |
| [docs/BLOG-REHBERI.md](docs/BLOG-REHBERI.md) | Yazı yayınlama + SEO yazım kuralları |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Cloudflare Pages kurulumu, domain bağlama, Search Console |
| [docs/SEO-STRATEJI.md](docs/SEO-STRATEJI.md) | Domain önerileri, içerik stratejisi, tanıtım kanalları |

## Mimari özet

- **TR varsayılan dil** (`/`), EN `/en/` altında; hreflang etiketleri otomatik.
- Domain/marka **tek dosyadan** yönetilir: `src/consts.js`.
- Bekleme listesi formu, mobil uygulamanın Supabase projesindeki `waitlist`
  tablosuna yazar (migration: `roam/supabase/migrations/20260711000017_website_waitlist.sql`).
  Anon key yalnızca INSERT yapabilir; liste dışarıdan okunamaz.
- SEO: canonical, hreflang, JSON-LD (Organization, MobileApplication, FAQPage,
  BlogPosting), sitemap, robots.txt, RSS — hepsi build'de otomatik üretilir.

## Uygulama yayınlanınca

`src/consts.js` içindeki `APP_STORE_URL` / `PLAY_STORE_URL` doldurulduğunda
hero'daki waitlist formu yerine mağaza butonları gösterme işi yapılacak
(şimdilik bilinçli olarak waitlist-öncelikli).
