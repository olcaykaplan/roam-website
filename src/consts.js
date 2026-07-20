// Site geneli sabitler — TEK yerden yönetilir.
// Domain alındığında SADECE SITE_URL'i değiştir; canonical, sitemap,
// robots.txt, RSS ve hreflang etiketlerinin tamamı buradan türetilir.

/** Canlı site adresi (sonda / olmadan). Domain alınınca güncelle. */
export const SITE_URL = 'https://roam-website.pages.dev';

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
