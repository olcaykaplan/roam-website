# SEO ve Büyüme Stratejisi

Amaç: Blog trafiği → bekleme listesi → lansmanda uygulama indirmesi.

## Domain önerileri

`roam` tek başına İngilizce'de çok rekabetli bir kelime (Roam Research, roaming vb.),
o yüzden **marka + niyet** içeren bir domain daha güçlü. Uygunluğunu kontrol et
(alfabetik değil, öneri sırasına göre):

| Domain | Not |
| --- | --- |
| `getroam.app` | "get + uygulama adı" kalıbı, app landing'lerin klasiği |
| `roamquest.app` | Uygulamanın özünü (quest) markaya taşır |
| `joinroam.app` | Waitlist dönemine çok uyar |
| `roamcity.app` | "şehir keşfi" niyetini taşır |
| `roam.com.tr` | TR pazarı birincil hedefse güçlü ve güvenilir görünür |

Notlar:
- `.app` domain'leri Google'a ait ve zorunlu HTTPS — uygulamalar için ideal, yıllık ~600 TL.
- Karar verince `src/consts.js` → `SITE_URL` güncelle, `docs/DEPLOY.md`'deki adımı izle.
- App Store'da isim çakışması yaşarsan (PROJECT.md'de "Questly" alternatifi geçiyor)
  domain'i markayla birlikte düşün — site adı tek satırdan değişir (`SITE_NAME`).

## İçerik stratejisi: hub & spoke

Blogun görevi tek başına "trafik" değil — **uygulamanın çözdüğü niyeti yakalamak**:
"X şehrinde ne yapılır?" diye arayan kişi, Roam'un tam hedef kullanıcısı.

1. **Spoke (trafik çeken):** Şehir/semt rehberleri — "İstanbul'da bir günde",
   "Kadıköy saklı yerler". Uzun kuyruklu, rekabeti düşük, niyeti yüksek.
2. **Hub (dönüştüren):** Kavram yazıları — "oyunlaştırılmış şehir keşfi".
   Spoke'lardan hub'a, hub'dan landing'e link ver.
3. **Ritim:** Haftada 1 yazı, düzenli. 3 ayda ~12 yazı → Google yeni domain'e
   güvenmeye başlar. Tutarlılık > hacim.
4. **Uygulama-blog döngüsü:** Yeni şehir görev paketi → o şehrin rehber yazısı →
   yazıdan uygulamaya link. Uygulama içinden de bloga link (app'in "hakkında"
   ekranına site linki ekle).

## Anahtar kelime öncelikleri (TR — düşük rekabet, yüksek niyet)

- `{semt} gezilecek yerler` (Kadıköy, Balat, Moda, Karaköy...) — semtler şehirlerden
  çok daha az rekabetli, önce bunları hedefle
- `{şehir} yürüyüş rotası`
- `{şehir} bir günde gezilir mi`
- `gezilecek yerler oyunu`, `şehir keşif uygulaması` — marka kategorisi, mutlaka al

EN tarafında rekabet yüksek; oradaki strateji uzun kuyruk: "hidden gems in
{district} istanbul", "self-guided walking tour istanbul" gibi spesifik ifadeler.

## Teknik SEO — hazır olanlar (dokunma, çalışıyor)

- ✅ Statik HTML (JS'siz içerik), Lighthouse-dostu sistem fontu
- ✅ Canonical + hreflang (TR/EN) + x-default
- ✅ JSON-LD: Organization, MobileApplication, FAQPage, BlogPosting, BreadcrumbList
- ✅ sitemap-index.xml + robots.txt (SITE_URL'den otomatik)
- ✅ RSS: `/rss.xml` (TR) ve `/en/rss.xml`
- ✅ OG/Twitter kartları + 1200×630 paylaşım görseli

## Ücretsiz tanıtım kanalları (lansman öncesi)

1. **Reddit:** r/istanbul, r/Turkey, r/travel — rehber yazılarını (reklamsız,
   değer odaklı) paylaş; yorumlarda uygulamadan bahset.
2. **Ekşi Sözlük / DonanımHaber:** "şehir keşif uygulamaları" tarzı başlıklar.
3. **Instagram/TikTok:** Blog rehberlerini 30 saniyelik "rota" video'larına çevir —
   aynı içerik, üç kanal.
4. **Product Hunt:** Lansman günü için şimdiden "upcoming" sayfası aç (ücretsiz).
5. **App Store Optimization:** Lansmanda store açıklamasında blog'daki anahtar
   kelimeleri kullan; site ↔ store birbirine link versin.

## Ölçüm

- Search Console: hangi sorgudan geliyorlar → o temada yazı çoğalt.
- `waitlist` tablosundaki `source` ve `locale` kolonları hangi dilin/kanalın
  dönüştürdüğünü gösterir (UTM eklemek istersen formdaki `source` değerini
  sayfa parametresinden doldurmak 5 dakikalık iş).
