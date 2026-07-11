// Arayüz metinleri — TR varsayılan dil, EN /en/ altında.
// Blog İÇERİKLERİ burada değil, src/content/blog/{tr,en}/ altında Markdown olarak durur.

export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';

/** Locale'e göre URL öneki: TR kökte, EN /en altında. */
export function localePath(locale: Locale, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? p : `/${locale}${p === '/' ? '' : p}`;
}

export const ui = {
  tr: {
    'meta.title': 'Roam — Şehri Keşfet, Görevleri Tamamla',
    'meta.description':
      'Roam, şehirleri oyunlaştırılmış görevlerle keşfettiren mobil uygulama. Haritada görevleri bul, konuma git, check-in yap; puan, rozet ve koleksiyon kazan. Bekleme listesine katıl!',

    'nav.features': 'Özellikler',
    'nav.how': 'Nasıl Çalışır',
    'nav.faq': 'SSS',
    'nav.blog': 'Blog',
    'nav.join': 'Katıl',

    'hero.badge': 'Yakında iOS ve Android’de',
    'hero.title': 'Şehri keşfet, görevleri tamamla, anıları biriktir.',
    'hero.subtitle':
      'Roam, bulunduğun şehri oyunlaştırılmış görevlerle keşfettiren mobil uygulama. Haritada görevleri gör, konuma git, check-in yap — puan, rozet ve koleksiyonlar kazan.',
    'hero.cta': 'Bekleme listesine katıl',
    'hero.social_proof': 'Lansmanda ilk denecekler arasında ol.',

    'how.title': 'Nasıl çalışır?',
    'how.subtitle': 'Üç adımda şehir kâşifi ol.',
    'how.step1.title': 'Haritayı aç',
    'how.step1.desc':
      'Çevrendeki görevleri haritada gör: kültür, gastronomi, manzara, doğa, zanaat, gece ve saklı noktalar.',
    'how.step2.title': 'Göreve git',
    'how.step2.desc':
      'Seçtiğin görevin konumuna git. Her görev, şehrin bir hikâyesini ya da saklı bir köşesini gösterir.',
    'how.step3.title': 'Check-in yap, kazan',
    'how.step3.desc':
      'Konumdayken check-in yap; puan topla, rozetler aç, koleksiyonunu büyüt.',

    'features.title': 'Gezmeyi oyuna dönüştüren özellikler',
    'features.subtitle':
      'Turist rehberi değil, keşif oyunu. Şehri gerçekten tanımak isteyenler için.',
    'features.map.title': 'Konum tabanlı görev haritası',
    'features.map.desc':
      'Görevler gerçek konumlara bağlı. Yakınındakileri keşfet, rotanı kendin çiz.',
    'features.badges.title': 'Puan, rozet ve koleksiyonlar',
    'features.badges.desc':
      'Her tamamlanan görev puan kazandırır. Rozetleri aç, şehir koleksiyonlarını tamamla.',
    'features.categories.title': '7 keşif kategorisi',
    'features.categories.desc':
      'Kültürden gastronomiye, saklı noktalardan gece hayatına — ilgi alanına göre keşfet.',
    'features.i18n.title': '4 dilde kullanılabilir',
    'features.i18n.desc': 'Türkçe, İngilizce, İspanyolca ve Almanca desteğiyle her gezgine uygun.',

    'categories.title': 'Görev kategorileri',
    'categories.kultur': 'Kültür',
    'categories.gastronomi': 'Gastronomi',
    'categories.manzara': 'Manzara',
    'categories.doga': 'Doğa',
    'categories.zanaat': 'Zanaat',
    'categories.gece': 'Gece',
    'categories.sakli': 'Saklı',

    'waitlist.title': 'Lansmandan ilk sen haberdar ol',
    'waitlist.subtitle':
      'Roam yakında App Store ve Google Play’de. E-postanı bırak, çıkar çıkmaz haber verelim — spam yok, sadece lansman haberi.',
    'waitlist.placeholder': 'E-posta adresin',
    'waitlist.button': 'Listeye katıl',
    'waitlist.success': 'Harika! Listedesin — lansmanda haber vereceğiz. 🎉',
    'waitlist.duplicate': 'Bu e-posta zaten listede. Yakında görüşürüz! 👋',
    'waitlist.invalid': 'Geçerli bir e-posta adresi gir.',
    'waitlist.error': 'Bir şeyler ters gitti. Lütfen tekrar dene.',

    'faq.title': 'Sık sorulan sorular',
    'faq.q1': 'Roam ücretsiz mi?',
    'faq.a1':
      'Evet. Roam’u indirmek ve görevleri tamamlamak ücretsiz olacak.',
    'faq.q2': 'Hangi platformlarda çıkacak?',
    'faq.a2':
      'Roam, iOS (App Store) ve Android (Google Play) için aynı anda yayınlanacak. Bekleme listesine katılırsan çıktığı gün haber veririz.',
    'faq.q3': 'Hangi şehirlerde görev var?',
    'faq.a3':
      'Lansmanda Türkiye’nin büyük şehirlerinden başlıyoruz; yeni şehirler ve ülkeler hızla eklenecek. Görev ağı her hafta büyüyor.',
    'faq.q4': 'Roam’u kimler için tasarladınız?',
    'faq.a4':
      'Yaşadığı şehri daha derin tanımak isteyenler ve gittiği şehirde turist rotasının dışına çıkmak isteyen gezginler için.',
    'faq.q5': 'Konum verilerim ne için kullanılıyor?',
    'faq.a5':
      'Konumun yalnızca yakınındaki görevleri göstermek ve check-in doğrulamak için kullanılır. Detaylar için gizlilik politikamıza bakabilirsin.',

    'blog.title': 'Roam Blog — Şehir Keşif Rehberleri',
    'blog.description':
      'Şehir gezme rotaları, saklı yerler ve keşfi oyuna dönüştüren ipuçları. Roam ekibinden gezginlere rehberler.',
    'blog.heading': 'Blog',
    'blog.subheading': 'Şehir keşif rehberleri, rotalar ve saklı yerler.',
    'blog.readmore': 'Devamını oku',
    'blog.published': 'Yayın tarihi',
    'blog.backtoblog': '← Tüm yazılar',
    'blog.minread': 'dk okuma',
    'blog.cta.title': 'Bu rotayı oyuna çevir',
    'blog.cta.desc':
      'Roam ile bu yerler birer göreve dönüşüyor: git, check-in yap, rozet kazan. Lansman için bekleme listesine katıl.',

    'footer.tagline': 'Şehri keşfet, görevleri tamamla.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.blog': 'Blog',
    'footer.contact': 'İletişim',
    'footer.rights': 'Tüm hakları saklıdır.',

    'notfound.title': 'Sayfa bulunamadı',
    'notfound.desc': 'Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.',
    'notfound.home': 'Ana sayfaya dön',

    'lang.switch': 'English',
  },
  en: {
    'meta.title': 'Roam — Explore the City, Complete Quests',
    'meta.description':
      'Roam is a mobile app that turns city exploration into a game. Find quests on the map, walk to the spot, check in — earn points, badges and collections. Join the waitlist!',

    'nav.features': 'Features',
    'nav.how': 'How It Works',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Join',

    'hero.badge': 'Coming soon to iOS & Android',
    'hero.title': 'Explore the city, complete quests, collect memories.',
    'hero.subtitle':
      'Roam is a mobile app that turns city exploration into a game. See quests on the map, walk to the location, check in — earn points, badges and collections.',
    'hero.cta': 'Join the waitlist',
    'hero.social_proof': 'Be among the first to try it at launch.',

    'how.title': 'How it works',
    'how.subtitle': 'Become a city explorer in three steps.',
    'how.step1.title': 'Open the map',
    'how.step1.desc':
      'See quests around you: culture, food, viewpoints, nature, crafts, nightlife and hidden gems.',
    'how.step2.title': 'Walk to the quest',
    'how.step2.desc':
      'Head to the quest location. Every quest reveals a story or a hidden corner of the city.',
    'how.step3.title': 'Check in & earn',
    'how.step3.desc':
      'Check in on location; collect points, unlock badges, grow your collection.',

    'features.title': 'Features that turn travel into play',
    'features.subtitle':
      'Not a tourist guide — an exploration game. For people who want to truly know a city.',
    'features.map.title': 'Location-based quest map',
    'features.map.desc':
      'Quests are tied to real places. Discover what’s nearby and draw your own route.',
    'features.badges.title': 'Points, badges & collections',
    'features.badges.desc':
      'Every completed quest earns points. Unlock badges and complete city collections.',
    'features.categories.title': '7 exploration categories',
    'features.categories.desc':
      'From culture to food, hidden gems to nightlife — explore what you love.',
    'features.i18n.title': 'Available in 4 languages',
    'features.i18n.desc': 'Turkish, English, Spanish and German — ready for every traveler.',

    'categories.title': 'Quest categories',
    'categories.kultur': 'Culture',
    'categories.gastronomi': 'Food',
    'categories.manzara': 'Views',
    'categories.doga': 'Nature',
    'categories.zanaat': 'Crafts',
    'categories.gece': 'Nightlife',
    'categories.sakli': 'Hidden',

    'waitlist.title': 'Be the first to know at launch',
    'waitlist.subtitle':
      'Roam is coming soon to the App Store and Google Play. Leave your email and we’ll ping you the moment it’s live — no spam, launch news only.',
    'waitlist.placeholder': 'Your email address',
    'waitlist.button': 'Join the waitlist',
    'waitlist.success': 'Awesome! You’re on the list — we’ll let you know at launch. 🎉',
    'waitlist.duplicate': 'This email is already on the list. See you soon! 👋',
    'waitlist.invalid': 'Please enter a valid email address.',
    'waitlist.error': 'Something went wrong. Please try again.',

    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Is Roam free?',
    'faq.a1': 'Yes. Downloading Roam and completing quests will be free.',
    'faq.q2': 'Which platforms will it launch on?',
    'faq.a2':
      'Roam will launch on iOS (App Store) and Android (Google Play) at the same time. Join the waitlist and we’ll tell you the day it ships.',
    'faq.q3': 'Which cities have quests?',
    'faq.a3':
      'We’re starting with major cities in Türkiye; new cities and countries are added fast. The quest network grows every week.',
    'faq.q4': 'Who is Roam designed for?',
    'faq.a4':
      'For locals who want to know their city deeper, and travelers who want to step off the tourist trail.',
    'faq.q5': 'How is my location data used?',
    'faq.a5':
      'Your location is only used to show nearby quests and verify check-ins. See our privacy policy for details.',

    'blog.title': 'Roam Blog — City Exploration Guides',
    'blog.description':
      'City walking routes, hidden gems, and tips that turn exploration into a game. Guides for travelers from the Roam team.',
    'blog.heading': 'Blog',
    'blog.subheading': 'City exploration guides, routes and hidden gems.',
    'blog.readmore': 'Read more',
    'blog.published': 'Published',
    'blog.backtoblog': '← All posts',
    'blog.minread': 'min read',
    'blog.cta.title': 'Turn this route into a game',
    'blog.cta.desc':
      'With Roam these places become quests: go there, check in, earn badges. Join the waitlist for launch.',

    'footer.tagline': 'Explore the city, complete quests.',
    'footer.privacy': 'Privacy Policy',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    'notfound.title': 'Page not found',
    'notfound.desc': 'The page you’re looking for may have moved or never existed.',
    'notfound.home': 'Back to home',

    'lang.switch': 'Türkçe',
  },
} as const;

export type UIKey = keyof (typeof ui)['tr'];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}
