# Tur 2 — 11 Kasım 2026, 22:06: şehir sayfaları + Kurucu Kâşif rozeti

## Biten (doğrulanmış)

1. **Şehir sayfaları** (`/sehir/tokyo/`, `/en/cities/tokyo/`, `/es/ciudades/tokio…`, `/de/staedte/…`).
   - Build anında Supabase'den çekiliyor (`src/lib/roam-data.ts`). Yeni görev, bir sonraki deploy'da sitede.
   - Yalnızca `is_active` + `is_curated` görevler. Test görevi "market" ve diğer 5 küratörlüğü işaretlenmemiş İstanbul görevi dışarıda.
   - Bir dilde çevirisi olmayan görev o dilin sayfasına girmez. O dilde 5'ten az görevi olan şehrin sayfası üretilmez (Cinque Terre).
   - Yapay zekâ metni yok: sayfa yalnızca uygulamadaki elle yazılmış görev içeriğini düzenliyor.
   - Her sayfada hreflang (x-default: EN), ItemList + Breadcrumb şeması, kategori kısayolları (12+ görevde), "Haritada aç" linki, bekleme listesi.
   - Ana sayfadaki şehir çipleri, menüdeki "Şehirler" ve footer'daki şehir listesi sayfalara link veriyor.
   - Şehir sayfasından gelen kayıt `waitlist.source = city-tokyo` gibi işaretleniyor.
   - Doğrulama: sentetik test verisiyle build (33 sayfa), eşik ve eksik çeviri senaryoları, masaüstü/mobil ekran görüntüsü.
   - Supabase'e ulaşılamazsa build bilerek duruyor (yayındaki sürüm değişmez). Env yoksa şehir sayfasız derleniyor.
2. **Rozet metni:** "ilk 100 / Sadakat Rozeti" → "ilk 50 / numaralı Kurucu Kâşif (#01–#50)", 4 dilde (hero, kayıt bölümü, şehir sayfaları, SSS ve SSS şeması).
3. **Dürüst sayaç** (`FounderBadge.astro`): veritabanından gerçek kalan sayıyı okur. Yalnızca 33 ve altındayken "Son N rozet kaldı" yazar, 0'da "hepsi sahibini buldu" der. Okuyamazsa hiç görünmez. 40 / 20 / 0 / hata durumlarında test edildi.

## Senin onayını bekleyen

- **Veritabanı migration'ı uygulanmadı.** İzin sistemi canlı veritabanına yazmayı engelledi. Dosya hazır: `docs/supabase/20261111_founding_explorer_badge.sql`. Rozet şu an veritabanında hiç yok; site vaat ediyor ama uygulama vermiyor. **Lansmandan önce mutlaka uygulanmalı.** Ne yaptığı dosyanın başında yazıyor. Supabase SQL Editor'a yapıştırman ya da bana "uygula" demen yeterli.
- **Uygulama ekranı:** rozet numarasını göstermek için uygulamanın rozet ekranı `get_badge_progress` sonucundaki yeni `serial` alanını okumalı (ör. `#07`). Bu kod `F:\My Works\roam` içinde; o klasöre erişim verirsen yaparım.
- **Test hesapları:** migration'dan sonra açılan her hesap bir numara alır. Lansman öncesi kendi test hesaplarını sil ya da numaralarını sıfırla.
- **İstanbul'un 6 görevi `is_curated = false`** (simit, Belgrad Ormanı, Galata Merdivenleri, Pierre Loti, cam atölyesi, market). "market" hariç diğerleri gerçek içerikse `is_curated = true` yap; İstanbul sayfası 6'dan 11 göreve çıkar.
- Görevlerin hiçbirinde kapak fotoğrafı yok; kartlar kategori ikonuyla çıkıyor. Fotoğraf eklendikçe karta koyabilirim.

## Yeni / değişen dosyalar (tur 2)

Yeni: `src/lib/roam-data.ts`, `src/components/CityPage.astro`, `src/components/FounderBadge.astro`, `src/pages/sehir/[city].astro`, `src/pages/en/cities/[city].astro`, `src/pages/es/ciudades/[city].astro`, `src/pages/de/staedte/[city].astro`, `docs/supabase/20261111_founding_explorer_badge.sql`
Değişen: `src/consts.js`, `src/i18n/ui.ts`, `src/components/Landing.astro`, `Header.astro`, `Footer.astro`, `Waitlist.astro`

## Dokunulmayanlar

Push, deploy, silme ve veritabanına yazma yapılmadı (migration denemesi izin sisteminde durdu). Supabase'de yalnızca okuma sorguları çalıştı.

---

# Otomode özeti — 11 Kasım 2026 (roam-website: SEO + pazarlama düzenlemesi)

## Biten (doğrulanmış)

Hepsi `npm run build` (22 sayfa, hatasız) + 4 dilde masaüstü/mobil ekran görüntüsü ile doğrulandı.

1. **Yönlendirme zinciri düzeltildi.** hreflang, dil değiştirici, menü, footer ve blog içi linkler `/en`, `/blog` gibi sonda "/" olmadan yazılıyordu; canonical ve sitemap ise `/en/` diyordu. Her tıklama ve her bot isteği fazladan bir yönlendirme yiyordu, hreflang da canonical olmayan adrese işaret ediyordu. Artık hepsi tek biçimde (`withSlash` yardımcı fonksiyonu, `src/i18n/ui.ts`). Build çıktısında "/"sız iç link kalmadı.
2. **x-default artık İngilizce** (`/en/`). Önceden Türkçe ana sayfaydı; dili eşleşmeyen (ör. Japon, İtalyan) ziyaretçi Türkçe sayfaya düşüyordu. İngilizcesi olmayan sayfada (Kadıköy yazısı) Türkçeye düşer.
3. **Başlık ve açıklamalar 4 dilde yeniden yazıldı.** Başlıklar 53–57 karakter, açıklamalar 154–161 karakter; "şehir keşif uygulaması / city exploration app" kategorisi ve gerçek şehir adları içeriyor.
4. **Hero yeniden yazıldı.** "Turist rotasının dışına çık. Şehri görev görev keşfet." + elle seçilmiş mekân ve fotoğraflı check-in vurgusu. Form altı güven satırı: "Ücretsiz · Spam yok · Yalnızca lansman haberi".
5. **Rakam şeridi eklendi:** 130+ görev · 9 destinasyon · 5 ülke · 10 kategori. Rakamlar Supabase'den okundu (132 aktif görev, 9 aktif şehir), `src/consts.js → STATS` içinde.
6. **"Lansman şehirleri" bölümü eklendi** (Tokyo, İstanbul, Bali, Kyoto, Roma, Bangkok, Floransa, Phuket, Cinque Terre) — `src/consts.js → CITIES`.
7. **SSS düzeltildi.** "Türkiye'nin büyük şehirlerinden başlıyoruz" cevabı yanlıştı (görevlerin 70'i Tokyo'da); gerçek şehir listesiyle değiştirildi. FAQPage şeması da otomatik güncellendi.
8. **İki yeni özellik kartı:** "Elle seçilmiş görevler" ve "Konum ve fotoğrafla doğrulanan check-in" (rakiplerden ayrıştığın iki nokta).
9. **Mobil düzeltmeler:** telefon maketi mobilde gizliydi → artık görünüyor; üst menüdeki buton mobilde gizliydi → görünüyor; e-posta kutusu mobilde ezik çıkıyordu (yükseklik hatası) → düzeltildi; masaüstünde form sola hizalandı.
10. **Buton metni:** "Katıl" → "Erken erişim" (4 dilde).
11. **Head eklemeleri:** WebSite şeması, og:image boyut/alt, og:locale:alternate, theme-color; blog yazılarında BlogPosting'e görsel + yayıncı logosu.
12. **Kaynak takibi:** `?utm_source=instagram` ile gelen kayıt `waitlist.source` kolonuna "instagram" yazılır (yoksa "website"). Tabloda kısıt yok, kontrol edildi.

## Yarım kalan / duran

- **Yok.** Planlanan her şey bitti. `astro check` çalıştırılmadı: yeni bağımlılık (`@astrojs/check`) kurmak istiyor, yasak listesinde.

## Sorulacaklar — senin kararın

1. **x-default'un İngilizce olması** uygun mu? Türkiye öncelikli kalmak istersen `src/layouts/Base.astro` içindeki `xDefault` satırını geri al.
2. **Fotoğraf iddiası:** "fotoğrafın profilinde anı olarak kalır" yazdım. Uygulamada kanıt fotoğrafı profilde görünmüyorsa `features.proof.desc` metnini düzelt.
3. **Bali ve Cinque Terre** şehir değil bölge; bu yüzden "destinasyon" dedim. Cinque Terre'de tek görev var — listede kalsın mı?
4. **Blog yazıları kısa** (~450 kelime; kendi rehberin 700+ diyor). Mekân bilgisi uydurma riski olduğu için dokunmadım. İstersen Supabase'deki gerçek görev verisinden genişleteyim.
5. **Bekleme listesinde 2 kayıt var.** Sayı büyüyene kadar sitede göstermiyorum.

## Senin yapman gerekenler

- [ ] Değişiklikleri gözden geçir (`git diff`), `npm run dev` ile bak, sonra commit + push (yayına alma sende).
- [ ] Yayından sonra Google Rich Results Test ile ana sayfayı dene (SSS + uygulama şeması).
- [ ] Search Console: siteyi doğrula, `sitemap-index.xml` gönder.
- [ ] Uygulamadan 4–5 gerçek ekran görüntüsü ver → çizim maketin yerine koyayım (en büyük dönüşüm kazancı).
- [ ] Instagram/TikTok hesabı aç, `src/consts.js → SOCIAL` içine yaz (footer ve Organization şemasına kendiliğinden girer).
- [ ] Paylaşım linklerinde `?utm_source=...` kullan (instagram, reddit, tiktok…).
- [ ] Görev/şehir ekledikçe `STATS` ve "130+" geçen metinleri güncelle.

## Fikirler (yapılmadı — onayına bağlı)

- **Şehir sayfaları** (`/tokyo/`, `/istanbul/` …): Supabase'deki görevlerden build anında üretilir, 9 şehir × 4 dil = 36 yeni sayfa. Tokyo'da 70 görev var; en güçlü SEO varlığın bu, şu an sitede hiç görünmüyor.
- **Film mekânları sayfaları:** "X nerede çekildi" aramaları; rakiplerde yok.
- **Örnek görev vitrini:** ana sayfada 6 gerçek görev kartı (kapak fotoğrafı, puan, en iyi saat notu).
- **Dile özel OG görseli:** şimdiki görselde TR + EN slogan birlikte ve eski slogan yazıyor.
- **Kayıtta şehir sorusu** (`waitlist.city` kolonu, migration gerekir) → hangi şehre talep var görürsün.
- **Davet mekanizması:** "3 arkadaş getir, Sadakat Rozeti garantile".
- **Sadakat Rozeti sayacı:** "100 rozetten N tanesi kaldı" (gerçek veriye bağlanmalı).

## Danışma sayaçları: Sonnet 0, Opus 0, Fable 0/10

## Dokunulmayanlar

Yasak listesinden hiçbir şey yapılmadı: deploy yok, push/commit yok, silme yok, yeni bağımlılık yok, e-posta/mesaj yok. Supabase'de yalnızca okuma sorgusu çalıştırıldı (görev/şehir sayıları, waitlist tablo yapısı). `.env` okunmadı.

---

## İlerleme kaydı

- 21:11 Klasör izni penceresi yanıtsız kapandı; canlı site (getroams.com) incelendi.
- 21:21 İzin verildi. 74 dosya çalışma alanına alındı (`.env` hariç).
- 21:23 Temel build: 22 sayfa, hatasız. Kaynakta hreflang + JSON-LD'nin zaten var olduğu görüldü — ilk mesajımdaki "hreflang ve JSON-LD yok" tespiti yanlıştı (sayfa okuma aracım `<head>` içindeki bu etiketleri göstermemişti).
- 21:24 Supabase okuma: 132 aktif görev, 9 şehir, 5 ülke, waitlist 2 kayıt, `source` kolonunda kısıt yok.
- 21:25 Metinler, şehir bölümü, rakam şeridi, head ve link düzeltmeleri uygulandı.
- 21:31 Build + ekran görüntüleri; mobil e-posta kutusu ve form hizası düzeltildi; Almanca açıklama kısaltıldı.
- 21:33 Son build temiz; değişen dosyalar klasöre yazıldı.

## Değişen dosyalar

`src/consts.js`, `src/i18n/ui.ts`, `src/layouts/Base.astro`, `src/layouts/BlogPost.astro`, `src/components/Landing.astro`, `Header.astro`, `Footer.astro`, `Waitlist.astro`, `PhoneMockup.astro`, 8 blog yazısı (yalnızca iç link sonuna "/"), `OTOMODE.md` (yeni).
