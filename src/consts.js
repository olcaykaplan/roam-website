// Site geneli sabitler — TEK yerden yönetilir.
// Domain alındığında SADECE SITE_URL'i değiştir; canonical, sitemap,
// robots.txt, RSS ve hreflang etiketlerinin tamamı buradan türetilir.

/** Canlı site adresi (sonda / olmadan). Domain alınınca güncelle. */
export const SITE_URL = 'https://getroams.com';

export const SITE_NAME = 'Roam';

/** Varsayılan sosyal paylaşım görseli (public/ altına göre). */
export const OG_IMAGE = '/og-image.png';

/**
 * Google Play linki — uygulama yayınlanınca doldur.
 * iOS planda yok, o yüzden App Store sabiti bilerek tutulmuyor.
 * NOT: bu sabit henüz hiçbir bileşende kullanılmıyor; mağaza butonu
 * eklenirken waitlist ile değişim mantığı da yazılmalı.
 */
export const PLAY_STORE_URL = '';

/** Sosyal hesaplar — açtıkça doldur (boş olanlar render edilmez). */
export const SOCIAL = {
  instagram: '',
  x: '',
  tiktok: '',
};

export const CONTACT_EMAIL = 'hello@getroams.com';

/**
 * Ana sayfadaki rakamlar — Supabase'deki gerçek veriden (11 Kasım 2026:
 * 132 aktif görev, 9 aktif şehir, 5 ülke). Görev/şehir ekledikçe güncelle;
 * i18n/ui.ts içindeki "130+" ve "9" geçen metinler (meta.description,
 * cities.title, faq.a3) de aynı rakamları kullanır.
 */
export const STATS = { quests: '130+', cities: '9', countries: '5', categories: '10' };

/**
 * Lansman şehirleri — ad her dilde ayrı; sıra görev sayısına göre.
 * `id` = Supabase'deki cities.id (şehir sayfasının URL'i de budur: /sehir/tokyo/).
 * Veritabanına yeni şehir eklenince buraya da ekle; eklenmezse sayfa yine üretilir
 * ama şehir adı her dilde İngilizce görünür.
 */
export const CITIES = [
  { id: 'tokyo', flag: '🇯🇵', tr: 'Tokyo', en: 'Tokyo', es: 'Tokio', de: 'Tokio' },
  { id: 'istanbul', flag: '🇹🇷', tr: 'İstanbul', en: 'Istanbul', es: 'Estambul', de: 'Istanbul' },
  { id: 'bali', flag: '🇮🇩', tr: 'Bali', en: 'Bali', es: 'Bali', de: 'Bali' },
  { id: 'kyoto', flag: '🇯🇵', tr: 'Kyoto', en: 'Kyoto', es: 'Kioto', de: 'Kyoto' },
  { id: 'rome', flag: '🇮🇹', tr: 'Roma', en: 'Rome', es: 'Roma', de: 'Rom' },
  { id: 'bangkok', flag: '🇹🇭', tr: 'Bangkok', en: 'Bangkok', es: 'Bangkok', de: 'Bangkok' },
  { id: 'florence', flag: '🇮🇹', tr: 'Floransa', en: 'Florence', es: 'Florencia', de: 'Florenz' },
  { id: 'phuket', flag: '🇹🇭', tr: 'Phuket', en: 'Phuket', es: 'Phuket', de: 'Phuket' },
  { id: 'cinque-terre', flag: '🇮🇹', tr: 'Cinque Terre', en: 'Cinque Terre', es: 'Cinque Terre', de: 'Cinque Terre' },
];

/**
 * Bir şehrin web sayfası için gereken en az görev sayısı (o dilde).
 * Altındaki şehirlerin sayfası hiç üretilmez — ince sayfa Google'da zarar verir.
 */
export const MIN_CITY_QUESTS = 5;

/**
 * Kurucu Kâşif rozeti — uygulamaya katılan ilk 50 kişiye numaralı (#01–#50).
 * Gerçek limit veritabanında: app_settings.founder_badge_limit (bkz. docs/supabase/).
 * i18n/ui.ts içindeki "50" geçen metinler bu sayıyla aynı olmalı.
 *
 * Sayaç: "Son N rozet kaldı" yalnızca GERÇEK kalan sayı bu eşiğin altına inince görünür.
 * Kalan sayı veritabanındaki founder_badges_remaining() fonksiyonundan canlı okunur.
 */
export const FOUNDER_COUNTER_SHOW_AT = 50;
