# Blog otomasyonu: günlük yayın + onay kapısı

Kısaca: yazılar **önceden yazılır ve okunup onaylanır**; yayın ise **her gün kendiliğinden** olur.
Yayını otomatikleştiriyoruz, yazıyı denetimsiz üretmiyoruz.

## Neden onay kapısı var?

Google'ın "ölçekli içerik istismarı" politikası yapay zekâyı değil, **değer katmayan toplu içeriği** hedefler.
Okunmadan, kontrol edilmeden günde onlarca yazı basan bir sistem tam bu kalıba girer ve tüm siteyi
(şehir sayfaları dahil) aşağı çekebilir. Bu yüzden her yazı `reviewed: false` ile gelir ve sen onaylamadan çıkmaz.
Yazılar uygulamadaki gerçek, seçilmiş görevlerden (Supabase) türetilir; uydurma bilgi koymamak kuralı bundandır.

## Akış

1. Yeni yazılar `src/content/blog/<dil>/` altına `reviewed: false` olarak eklenir (4 dil, aynı `translationKey`).
2. Sen okursun. Yanlış/eksik bilgi, ton, çeviri sorunu varsa düzeltirsin (dosyayı doğrudan düzenle).
3. `npm run onayla` → onay bekleyen **konuları** (4 dili birlikte) onaylar ve yayın tarihlerini günlere dağıtır.
4. `git add . && git commit -m "blog onay" && git push`
5. Her sabah 08:00'de (İstanbul) GitHub Actions, Cloudflare'de siteyi yeniden derletir; tarihi gelen konu yayına çıkar.

### `npm run onayla` seçenekleri

| Komut | Ne yapar |
| --- | --- |
| `npm run onayla -- --dry` | Hiçbir şey yazmaz, planı gösterir |
| `npm run onayla` | Bekleyen tüm konuları yarından başlayıp günde **1 konu** (= 4 dil) yayınlayacak şekilde ayarlar |
| `npm run onayla -- --per-day 2` | Günde 2 konu |
| `npm run onayla -- --start 2026-12-01` | Belirli bir tarihten başla |
| `npm run onayla -- --only kyoto-early-morning` | Yalnızca o `translationKey`'i onayla |

Tavsiye edilen tempo: **günde 1 konu** (4 dilde 4 yazı), haftada en fazla 3-5 konu. Daha hızlısı hem kaliteyi
hem de Google'ın "doğal yayın" algısını bozar. Yeni site için haftada 2-3 konu bile yeterli.

## Senin bir kere yapman gerekenler (5 dk)

1. **Cloudflare Pages → projen → Settings → Builds & deployments → Deploy hooks → Add deploy hook.**
   Ad: `gunluk-yayin`, branch: `main`. Çıkan URL'yi kopyala.
2. **GitHub → repo → Settings → Secrets and variables → Actions → New repository secret.**
   Ad: `CF_PAGES_DEPLOY_HOOK`, değer: kopyaladığın URL.
3. **Actions** sekmesinde "Günlük yayın" iş akışını bir kere elle çalıştır ("Run workflow") ve yeşil olduğunu gör.
4. Cloudflare ortam değişkenlerinde `PUBLIC_SUPABASE_URL` ve `PUBLIC_SUPABASE_ANON_KEY` dolu olmalı (şehir sayfaları için).

> Deploy hook URL'si bir parola gibidir; koda ya da repoya yazma, yalnızca GitHub Secret olarak tut.

## Bir yazının yayında olma koşulu

`draft: false` **ve** `reviewed: true` **ve** `pubDate` ≤ derleme günü. Üçünden biri eksikse yazı sitede,
sitemap'te, RSS'te ve ilgili yazılarda görünmez (`src/lib/blog.ts → isLive`).

## Sıradaki konu kuyruğu (gerçek veriden, henüz yazılmadı)

Veritabanındaki seçilmiş görev sayıları: Tokyo 70, Bali 11, Kyoto 10, Roma 9, Bangkok 7, Floransa 6, Phuket 6, İstanbul 6.
Her konu yalnızca o şehrin gerçek görevlerinden yazılmalı:

- Tokyo: en çok görevi olan şehir; 4-5 ayrı konu çıkar (yemek, semt rotaları, gece, tek günlük plan).
- Bali: 11 görevden 2 konu (doğa/tapınak, yemek).
- Kyoto: çay kültürü (Gion çay töreni + Uji matcha), yavaş gezi (Ryōan-ji, Ninna-ji, Nijō).
- Roma: tarih rotası (Kolezyum + Aventino + Trastevere akşam yürüyüşü).
- Bangkok, Phuket: görev sayısı arttıkça.
- İstanbul: 6 seçilmiş görev var; kalan 5 görev `is_curated=true` yapılınca 11'e çıkar, o zaman 2 yazı daha.

İstersen bir sonraki partiyi yine aynı yöntemle (gerçek görevler → 4 dil → `reviewed: false`) hazırlarım.

## Geri alma

Bir yazıyı yayından çekmek için `draft: true` yaz ya da `reviewed: false` yap, push et. Ertesi derlemede kalkar.
