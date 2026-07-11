# Kullanım Rehberi — Roam Web Sitesi

Bu doküman üç soruyu cevaplar: **ne yapıldı**, **hangi teknolojiler neden seçildi**
ve **sen bu siteyi günlük hayatta nasıl yürüteceksin**. Baştan sona bir kez okuman
yeterli; sonrasında ilgili bölüme dönüp bakarsın.

---

## 1. Ne yapıldı?

Roam (Questly) mobil uygulaması için **tanıtım sitesi + SEO blog'u** kuruldu.
Amaç: uygulama yayınlanmadan önce Google'dan trafik çekmek, bu trafiği
**bekleme listesine (waitlist)** e-posta kaydına çevirmek, lansmanda da bu
listeye "uygulama çıktı" demek.

Somut olarak sitede şunlar var:

| Parça | Açıklama |
| --- | --- |
| Ana sayfa (TR/EN/ES/DE) | Uygulama tanıtımı, telefon mockup'ı, SSS, waitlist formu |
| Blog | 3 TR + 2 EN + 2 ES + 2 DE yazıyla açıldı; yenisini eklemek tek `.md` dosyası |
| Gizlilik sayfası | `/gizlilik`, `/en/privacy`, `/es/privacidad`, `/de/datenschutz` |
| Waitlist formu | E-postaları Supabase'deki `waitlist` tablosuna yazar |
| SEO altyapısı | canonical, hreflang, JSON-LD, sitemap, robots.txt, RSS — hepsi otomatik |
| 404 sayfası | Kayıp linkler için |

### Bu kurulumda ayrıca tamamlananlar (11 Temmuz 2026)

- Proje GitHub'a push'landı: `github.com/olcaykaplan/roam-website`
- Build doğrulandı (12 sayfa üretiliyor), tüm sayfalar ve SEO etiketleri test edildi
- Supabase'de `waitlist` tablosu oluşturuldu (migration uygulandı ve geçmişe işlendi)
- Form uçtan uca test edildi: kayıt çalışıyor (201), aynı e-posta ikinci kez
  eklenemiyor (409), e-posta listesi dışarıdan **okunamıyor** (güvenlik politikası).
  Test kaydı silindi, tablo temiz durumda.

---

## 2. Hangi teknolojiler, neden?

| Teknoloji | Ne işe yarıyor | Neden bu seçildi |
| --- | --- | --- |
| **Astro 7** | Site üretici (framework) | Sayfaları build anında düz HTML'e çevirir → site çok hızlı, SEO için ideal, sunucu gerektirmez |
| **Tailwind CSS 4** | Tasarım/stil | CSS dosyalarıyla boğuşmadan hızlı ve tutarlı tasarım |
| **Astro Content Collections** | Blog sistemi | Yazılar `.md` dosyası; panel yok, veritabanı yok, her şey git'te |
| **Astro i18n** | Çok dillilik | TR kökte (`/`); EN, ES ve DE kendi önekinde; hreflang otomatik |
| **@astrojs/sitemap + rss** | SEO | Sitemap ve RSS her build'de kendiliğinden üretilir |
| **Supabase** | Waitlist veritabanı | Mobil uygulama zaten Supabase kullanıyor; aynı projeye tek tablo eklendi, ekstra maliyet yok |
| **Cloudflare Pages** | Barındırma (hosting) | Tamamen ücretsiz, sınırsız trafik; her `git push` sonrası otomatik yayınlar |

**Maliyet:** Barındırma 0 TL. Tek masraf istersen alacağın domain (~350–600 TL/yıl).
Domain önerileri için: [SEO-STRATEJI.md](SEO-STRATEJI.md)

### Statik site ne demek, neden önemli?

Sitenin sunucusu yok. `npm run build` çalışınca tüm sayfalar hazır HTML dosyası
olarak `dist/` klasörüne yazılır ve Cloudflare bunları dünyaya dağıtır. Bu yüzden:

- Site kırılmaz, hacklenecek bir sunucu yok, bakım gerektirmez.
- "Siteyi güncellemek" = dosya değiştirip `git push` yapmak. Hepsi bu.
- Tek dinamik parça waitlist formudur; o da tarayıcıdan doğrudan Supabase'e yazar.

---

## 3. Süreci nasıl yürüteceksin?

### A) Siteyi localde çalıştırmak (değişiklikleri denemek için)

```bash
cd ~/Desktop/my_file/roam-website
npm run dev
```

Tarayıcıda **http://localhost:4321** aç. Dosya kaydettiğin anda sayfa kendini
yeniler. Durdurmak için terminalde `Ctrl+C`.

> Not: Localdeki form da **gerçek** Supabase tablosuna yazar. Denemek serbest;
> test e-postalarını sonra Supabase panelinden silebilirsin.

### B) Blog yazısı yayınlamak (en sık yapacağın iş)

1. `src/content/blog/tr/` içine `yazi-slugi.md` dosyası aç (diğer diller için `en/`, `es/`, `de/`).
2. En üste frontmatter (başlık, açıklama, tarih), altına Markdown ile yazını yaz.
3. Kaydet, push'la:

```bash
git add . && git commit -m "yeni yazı: yazı başlığı" && git push
```

Site 1-2 dakika içinde otomatik güncellenir (Cloudflare bağlandıktan sonra).
Frontmatter şablonu ve SEO yazım kuralları: **[BLOG-REHBERI.md](BLOG-REHBERI.md)**

### C) Waitlist kayıtlarını görmek

[supabase.com/dashboard](https://supabase.com/dashboard) → projen →
**Table Editor** → `waitlist` tablosu. E-posta, dil ve kayıt tarihi orada.
Bu listeyi yalnızca sen görebilirsin; sitedeki anon anahtar sadece kayıt ekleyebilir.

### D) Sitede metin/tasarım değişikliği

- Metinlerin çoğu **dört dilde (TR/EN/ES/DE)** şuradadır: [src/i18n/ui.ts](../src/i18n/ui.ts)
- Ana sayfa bölümleri: [src/components/Landing.astro](../src/components/Landing.astro)
- Marka/iletişim/mağaza linkleri — **tek dosya**: [src/consts.js](../src/consts.js)

Değiştir → localde bak (`npm run dev`) → commit + push.

### E) Uygulama App Store / Play Store'a çıkınca

[src/consts.js](../src/consts.js) içindeki `APP_STORE_URL` ve `PLAY_STORE_URL`
alanlarını doldur. (Waitlist formu yerine mağaza butonlarını gösterme işi bu
alanlar dolunca yapılacak — şimdilik bilinçli olarak waitlist öncelikli.)

---

## 4. Kalan kurulum adımları (bir kerelik, ~5 dakika)

Kod tarafı bitti; siteyi canlıya almak için senin panel erişimin gereken adımlar:

- [ ] **Cloudflare Pages'i bağla** → [dash.cloudflare.com](https://dash.cloudflare.com)
      → Workers & Pages → Create → Pages → Connect to Git → `roam-website` seç.
      Preset: **Astro**, build: `npm run build`, output: `dist`.
      **Environment variables**'a `.env` dosyandaki iki değeri ekle:
      `PUBLIC_SUPABASE_URL` ve `PUBLIC_SUPABASE_ANON_KEY`.
      → Site `https://roam-website.pages.dev` adresinde yayına girer.
- [ ] **Google Search Console** → siteyi ekle, `sitemap-index.xml` gönder
      (adım adım: [DEPLOY.md](DEPLOY.md)).
- [ ] **(İstersen) domain al** → Cloudflare Pages'e bağla ve
      [src/consts.js](../src/consts.js) içinde `SITE_URL`'i değiştir.
      Tüm SEO etiketleri kendiliğinden yeni domain'e döner.

---

## 5. Sorun giderme

| Belirti | Çözüm |
| --- | --- |
| `npm run dev` hata veriyor | `npm install` çalıştır (Node ≥ 22.12 gerekli) |
| Yazı sitede görünmüyor | Frontmatter'da `draft: true` kalmış olabilir; `pubDate` gelecekte olabilir |
| Form "hata" diyor | Cloudflare'daki env değişkenleri eksik/yanlış olabilir; localde `.env` dosyasını kontrol et |
| Build kırıldı | Terminaldeki hata mesajı hangi dosya/satır olduğunu söyler; çoğunlukla frontmatter'da eksik alan vardır |

## Dokümanların haritası

| Doküman | Ne zaman bakarsın |
| --- | --- |
| **Bu dosya** | Genel resim ve günlük akışlar |
| [BLOG-REHBERI.md](BLOG-REHBERI.md) | Yazı yayınlarken (frontmatter + SEO kuralları) |
| [DEPLOY.md](DEPLOY.md) | Cloudflare kurulumu, domain bağlama, Search Console |
| [SEO-STRATEJI.md](SEO-STRATEJI.md) | Domain seçimi, içerik ve tanıtım stratejisi |
