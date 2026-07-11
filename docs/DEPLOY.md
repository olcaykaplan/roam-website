# Yayınlama (Deploy) Rehberi

Toplam maliyet hedefi: **sadece domain (~350-600 TL/yıl)**. Barındırma tamamen ücretsiz.

## Önerilen: Cloudflare Pages (ücretsiz, sınırsız trafik)

1. Repo'yu GitHub'a it (`gh repo create roam-website --private --source=. --push`).
2. [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → Create → Pages →
   Connect to Git → `roam-website` repo'sunu seç.
3. Build ayarları:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Environment variables** bölümüne ekle (`.env` dosyasındaki değerler):
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
5. Deploy → siten `https://<proje-adi>.pages.dev` adresinde yayında.
6. Her `git push` sonrası otomatik yeniden yayınlanır. Blog yazısı yayınlamak = push.

> Alternatif: Vercel veya Netlify de aynı şekilde ücretsiz çalışır; Cloudflare'i
> sınırsız bant genişliği için öneriyorum.

## Domain bağlanınca (2 dakikalık iş)

1. Cloudflare Pages → Custom domains → domainini ekle.
2. Bu repoda **tek satır** değiştir: `src/consts.js` → `SITE_URL = 'https://yenidomain.com'`
3. Commit + push. Canonical, sitemap, robots.txt, RSS ve hreflang otomatik güncellenir.

## Supabase waitlist tablosu (bir kere)

Migration dosyası mobil repo'da hazır: `roam/supabase/migrations/20260711000017_website_waitlist.sql`

Uygulamak için iki seçenek:

- **CLI:** `cd ../roam && supabase db push`
- **Panel:** Supabase Dashboard → SQL Editor → dosyanın içeriğini yapıştır → Run.

Kayıtları görmek: Dashboard → Table Editor → `waitlist`.
(Anon key yalnızca INSERT yapabilir; listeyi yalnızca sen görebilirsin.)

## Yayın sonrası ilk gün yapılacaklar (SEO)

1. **Google Search Console** → [search.google.com/search-console](https://search.google.com/search-console)
   → domainini ekle → Sitemaps bölümüne `sitemap-index.xml` gönder.
2. **Bing Webmaster Tools** → Search Console'dan içe aktar (1 tık, Yandex/DuckDuckGo trafiği için).
3. (İsteğe bağlı, ücretsiz) **Cloudflare Web Analytics**'i aç — çerezsiz, KVKK dostu,
   script'ini `src/layouts/Base.astro` içine `</head>`'den önce ekle.
