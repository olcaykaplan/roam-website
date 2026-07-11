// Site geneli sabitler — TEK yerden yönetilir.
// Domain alındığında SADECE SITE_URL'i değiştir; canonical, sitemap,
// robots.txt, RSS ve hreflang etiketlerinin tamamı buradan türetilir.

/** Canlı site adresi (sonda / olmadan). Domain alınınca güncelle. */
export const SITE_URL = 'https://roam-website.pages.dev';

export const SITE_NAME = 'Roam';

/** Varsayılan sosyal paylaşım görseli (public/ altına göre). */
export const OG_IMAGE = '/og-image.png';

/** Uygulama mağaza linkleri — yayınlanınca doldur, boşken waitlist gösterilir. */
export const APP_STORE_URL = '';
export const PLAY_STORE_URL = '';

/** Sosyal hesaplar — açtıkça doldur (boş olanlar render edilmez). */
export const SOCIAL = {
  instagram: '',
  x: '',
  tiktok: '',
};

export const CONTACT_EMAIL = 'olcaykaplan62@gmail.com';
