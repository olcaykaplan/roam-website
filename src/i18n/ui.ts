// Arayüz metinleri — TR varsayılan dil, EN /en/ altında.
// Blog İÇERİKLERİ burada değil, src/content/blog/{tr,en}/ altında Markdown olarak durur.

export const locales = ['tr', 'en', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'tr';

/** Dil değiştiricide gösterilen yerel adlar. */
export const localeNames: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
};

/** Locale'e göre URL öneki: TR kökte, EN /en altında. */
export function localePath(locale: Locale, path = '/'): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return withSlash(locale === defaultLocale ? p : `/${locale}${p === '/' ? '' : p}`);
}

/**
 * Sayfa yollarını sonda "/" ile bitirir (dosya uzantılı yollar hariç).
 * Canonical ve sitemap adresleri "/en/" biçiminde; hreflang ve iç linkler
 * "/en" kalırsa her tıklama ve her bot isteği fazladan bir yönlendirme yer.
 */
export function withSlash(path: string): string {
  if (path.endsWith('/') || /\.[a-z0-9]+$/i.test(path)) return path;
  return `${path}/`;
}

export const ui = {
  tr: {
    'meta.title': 'Roam — Şehir Keşif Uygulaması: Görev Tamamla, Rozet Kazan',
    'meta.description':
      'Roam, şehirleri görev görev keşfettiren ücretsiz gezi uygulaması. Tokyo, İstanbul, Roma dahil 9 destinasyonda 130+ görev: konuma git, check-in yap, rozet kazan.',

    'nav.features': 'Özellikler',
    'nav.how': 'Nasıl Çalışır',
    'nav.faq': 'SSS',
    'nav.blog': 'Blog',
    'nav.join': 'Erken erişim',
    'nav.cities': 'Şehirler',

    'hero.badge': 'Yakında Google Play’de',
    'hero.title': 'Turist rotasının dışına çık. Şehri görev görev keşfet.',
    'hero.subtitle':
      'Roam, elle seçilmiş gerçek mekânları haritada göreve çeviren şehir keşif uygulaması. Konuma git, fotoğrafınla check-in yap; puan, rozet ve koleksiyon kazan.',
    'hero.cta': 'Bekleme listesine katıl',
    'hero.social_proof': 'Ücretsiz · Spam yok · Yalnızca lansman haberi',
    'hero.card.badge.title': 'Rozet açıldı!',
    'hero.card.badge.desc': 'Lezzet Avcısı',
    'hero.card.nearby': 'Yakınında 3 görev var',
    'stats.quests': 'görev',
    'stats.cities': 'destinasyon',
    'stats.countries': 'ülke',
    'stats.categories': 'kategori',

    'cities.eyebrow': 'Lansman şehirleri',
    'cities.title': 'Tokyo’dan İstanbul’a: 9 destinasyonda 130+ görev',
    'cities.subtitle':
      'Her görev tek tek seçildi ve gerçek bir konuma bağlı. Şehrin bilinen yüzünü de, bir sokak arkasındaki hâlini de bulursun.',
    'cities.more': 'Yeni şehirler yolda — şehrin listede yoksa bekleme listesine katıl, açıldığında haber verelim.',

    'features.curated.title': 'Elle seçilmiş görevler',
    'features.curated.desc':
      'Otomatik üretilmiş mekân listesi değil. Her görev tek tek seçilir; en iyi saat ve kalabalık notuyla birlikte gelir.',
    'features.proof.title': 'Konum ve fotoğrafla doğrulanan check-in',
    'features.proof.desc':
      'Puan yalnızca gerçekten oraya gidince gelir: check-in konumunla doğrulanır, fotoğrafın profilinde anı olarak kalır.',

    'how.title': 'Nasıl çalışır?',
    'how.subtitle': 'Üç adımda şehir kâşifi ol.',
    'how.step1.title': 'Haritayı aç',
    'how.step1.desc':
      'Çevrendeki görevleri haritada gör: gastronomiden maceraya, film mekânlarından saklı köşelere 10 kategori.',
    'how.step2.title': 'Göreve git',
    'how.step2.desc':
      'Seçtiğin görevin konumuna git. Her görev, şehrin bir hikâyesini ya da saklı bir köşesini gösterir.',
    'how.step3.title': 'Check-in yap, kazan',
    'how.step3.desc':
      'Konuma varınca fotoğrafınla check-in yap; puan topla, rozetler aç, koleksiyonunu büyüt.',

    'features.title': 'Gezmeyi oyuna dönüştüren özellikler',
    'features.subtitle':
      'Turist rehberi değil, keşif oyunu. Şehri gerçekten tanımak isteyenler için.',
    'features.map.title': 'Konum tabanlı görev haritası',
    'features.map.desc':
      'Görevler gerçek konumlara bağlı. Yakınındakileri keşfet, rotanı kendin çiz.',
    'features.badges.title': 'Puan, rozet ve koleksiyonlar',
    'features.badges.desc':
      'Her tamamlanan görev puan kazandırır. Rozetleri aç, şehir koleksiyonlarını tamamla.',
    'features.categories.title': '10 keşif kategorisi',
    'features.categories.desc':
      'Gastronomiden maceraya, kutsal rotalardan film mekânlarına — ilgi alanına göre keşfet.',
    'features.i18n.title': '4 dilde kullanılabilir',
    'features.i18n.desc': 'Türkçe, İngilizce, İspanyolca ve Almanca desteğiyle her gezgine uygun.',

    'categories.eyebrow': 'Moduna göre keşfet',
    'categories.title': '10 kategori, 10 farklı şehir hâli',
    'categories.subtitle':
      'Her görev bir kategoriye ait. Bugün canın ne istiyorsa haritayı ona göre filtrele — gerisi şehrin işi.',
    'categories.gastronomy': 'Gastronomi',
    'categories.gastronomy.desc':
      'Sokak lezzetleri, pazar tezgâhları ve yerel tatlar — şehir ne yiyorsa onu yediğin görevler.',
    'categories.scenery': 'Manzara',
    'categories.scenery.desc':
      'Seyir tepeleri, panoramalar ve gün batımı noktaları — manzarayla biten görevler.',
    'categories.nature': 'Doğa',
    'categories.nature.desc':
      'Ormanlar, şelaleler, adalar ve patikalar — seni yeşile çıkaran görevler.',
    'categories.craft': 'Zanaat',
    'categories.craft.desc':
      'Ustalar, atölyeler ve yaşayan gelenekler — el emeğini yerinde izlediğin görevler.',
    'categories.nightlife': 'Gece Hayatı',
    'categories.nightlife.desc':
      'Barlar, canlı müzik ve gece pazarları — hava karardıktan sonra başlayan görevler.',
    'categories.hidden': 'Saklı Köşeler',
    'categories.hidden.desc':
      'Ara sokaklar ve sadece yerlilerin bildiği köşeler — hiçbir rehberde yazmayan yerler.',
    'categories.heritage': 'Miras',
    'categories.heritage.desc':
      'Tapınaklar, saraylar ve eski mahalleler — şehrin tarihinde yürüten görevler.',
    'categories.adventure': 'Macera',
    'categories.adventure.desc':
      'Yürüyüş, tırmanış, sörf ve spor — nabzını yükselten görevler.',
    'categories.movie': 'Film',
    'categories.movie.desc':
      'Film ve dizi mekânları — ikonik sahnelerin çekildiği noktada durduğun görevler.',
    'categories.holyroute': 'Kutsal Rota',
    'categories.holyroute.desc':
      'Kutsal mekânlar ve hac yolları — türbeler, kiliseler ve ritüeller boyunca görevler.',

    'waitlist.title': 'Lansmandan ilk sen haberdar ol',
    'waitlist.subtitle':
      'Roam yakında Google Play’de. E-postanı bırak, çıkar çıkmaz haber verelim — spam yok, sadece lansman haberi.',
    'waitlist.founder':
      'Uygulamaya katılan ilk 50 kişiye numaralı Kurucu Kâşif rozeti (#01–#50) — bir daha asla verilmeyecek.',
    'founder.left': 'Son {left} Kurucu Kâşif rozeti kaldı.',
    'founder.gone': '50 Kurucu Kâşif rozetinin hepsi sahibini buldu.',
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
      'Roam ilk olarak Android’de (Google Play) yayınlanacak. Bekleme listesine katılırsan çıktığı gün haber veririz.',
    'faq.q3': 'Hangi şehirlerde görev var?',
    'faq.a3':
      'Lansmanda 5 ülkede 9 destinasyon var: Tokyo, Kyoto, İstanbul, Roma, Floransa, Cinque Terre, Bangkok, Phuket ve Bali. Toplam 130’dan fazla görev hazır; yeni şehirler düzenli olarak ekleniyor.',
    'faq.q4': 'Roam’u kimler için tasarladınız?',
    'faq.a4':
      'Yaşadığı şehri daha derin tanımak isteyenler ve gittiği şehirde turist rotasının dışına çıkmak isteyen gezginler için.',
    'faq.q5': 'Konum verilerim ne için kullanılıyor?',
    'faq.a5':
      'Konumun yalnızca yakınındaki görevleri göstermek ve check-in doğrulamak için kullanılır. Detaylar için gizlilik politikamıza bakabilirsin.',
    'faq.q6': 'Kurucu Kâşif rozeti nedir?',
    'faq.a6':
      'Roam’a katılan ilk 50 kişi, profilinde ömür boyu taşıyacağı numaralı Kurucu Kâşif rozetini kazanır: ilk katılan #01, ellinci katılan #50 olur. Rozet yalnızca bu 50 kişiye verilir; sonradan hiçbir şekilde kazanılamaz. Bekleme listesindekiler lansmanı herkesten önce öğrenir.',

    'city.eyebrow': 'Şehir rehberi',
    'city.meta.title': '{inCity} Gezilecek Yerler: {n} Elle Seçilmiş Görev | Roam',
    'city.meta.description':
      '{inCity} turist rotasının dışında {n} görev: {cats}. Her biri süre ve zorluk bilgisiyle; Roam ile konuma git, check-in yap, rozet kazan.',
    'city.h1': '{inCity} gezilecek yerler: {n} elle seçilmiş görev',
    'city.intro':
      'Bu liste Roam uygulamasındaki {city} görevlerinden oluşuyor. Her görev gerçek bir konuma bağlı ve tek tek seçildi; ağırlıklı kategoriler: {cats}. Gezerken uygulamada check-in yaparak puan ve rozet toplayabilirsin.',
    'city.jump': 'Kategoriler',
    'city.besttime': 'En iyi zaman',
    'city.duration': 'Süre',
    'city.points': 'puan',
    'city.difficulty.easy': 'Kolay',
    'city.difficulty.mid': 'Orta',
    'city.difficulty.hard': 'Zor',
    'city.map': 'Haritada aç',
    'city.cta.title': '{city} görevlerini oyuna çevir',
    'city.cta.desc':
      'Roam’da bu görevler haritada seni bekliyor: konuma git, fotoğrafınla check-in yap, rozet kazan. Lansmandan haberdar olmak için bekleme listesine katıl.',
    'city.others': 'Diğer şehirler',
    'city.other': 'Diğer',

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
    'blog.related': 'Keşfe devam et',

    'footer.tagline': 'Şehri keşfet, görevleri tamamla.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.blog': 'Blog',
    'footer.contact': 'İletişim',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.cities': 'Şehirler',

    'notfound.title': 'Sayfa bulunamadı',
    'notfound.desc': 'Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.',
    'notfound.home': 'Ana sayfaya dön',
  },
  en: {
    'meta.title': 'Roam — City Exploration App: Complete Quests, Earn Badges',
    'meta.description':
      'Roam is a free app that turns city trips into quests. 130+ hand-picked quests in Tokyo, Istanbul, Rome and 6 more places: go there, check in, earn badges.',

    'nav.features': 'Features',
    'nav.how': 'How It Works',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Get early access',
    'nav.cities': 'Cities',

    'hero.badge': 'Coming soon to Google Play',
    'hero.title': 'Step off the tourist trail. Explore cities one quest at a time.',
    'hero.subtitle':
      'Roam turns hand-picked real places into quests on a map. Go there, check in with a photo, and earn points, badges and collections.',
    'hero.cta': 'Join the waitlist',
    'hero.social_proof': 'Free · No spam · Launch news only',
    'hero.card.badge.title': 'Badge unlocked!',
    'hero.card.badge.desc': 'Flavor Hunter',
    'hero.card.nearby': '3 quests near you',
    'stats.quests': 'quests',
    'stats.cities': 'destinations',
    'stats.countries': 'countries',
    'stats.categories': 'categories',

    'cities.eyebrow': 'Launch cities',
    'cities.title': 'From Tokyo to Istanbul: 130+ quests in 9 destinations',
    'cities.subtitle':
      'Every quest is hand-picked and tied to a real place. You get the famous side of the city and the one a street behind it.',
    'cities.more': 'More cities are on the way — if yours is missing, join the waitlist and we’ll tell you when it opens.',

    'features.curated.title': 'Hand-picked quests',
    'features.curated.desc':
      'Not an auto-generated list of places. Each quest is chosen one by one and comes with a best-time and crowd note.',
    'features.proof.title': 'Check-ins verified by location and photo',
    'features.proof.desc':
      'Points only count when you actually go: your check-in is verified by location, and your photo stays on your profile as a memory.',

    'how.title': 'How it works',
    'how.subtitle': 'Become a city explorer in three steps.',
    'how.step1.title': 'Open the map',
    'how.step1.desc':
      'See quests around you: 10 categories, from food to adventure, movie locations to hidden gems.',
    'how.step2.title': 'Walk to the quest',
    'how.step2.desc':
      'Head to the quest location. Every quest reveals a story or a hidden corner of the city.',
    'how.step3.title': 'Check in & earn',
    'how.step3.desc':
      'Check in with a photo once you arrive; collect points, unlock badges, grow your collection.',

    'features.title': 'Features that turn travel into play',
    'features.subtitle':
      'Not a tourist guide — an exploration game. For people who want to truly know a city.',
    'features.map.title': 'Location-based quest map',
    'features.map.desc':
      'Quests are tied to real places. Discover what’s nearby and draw your own route.',
    'features.badges.title': 'Points, badges & collections',
    'features.badges.desc':
      'Every completed quest earns points. Unlock badges and complete city collections.',
    'features.categories.title': '10 exploration categories',
    'features.categories.desc':
      'From food to adventure, holy routes to movie locations — explore what you love.',
    'features.i18n.title': 'Available in 4 languages',
    'features.i18n.desc': 'Turkish, English, Spanish and German — ready for every traveler.',

    'categories.eyebrow': 'Explore by mood',
    'categories.title': '10 categories, 10 sides of the city',
    'categories.subtitle':
      'Every quest belongs to a category. Filter the map by whatever you feel like today — the city does the rest.',
    'categories.gastronomy': 'Gastronomy',
    'categories.gastronomy.desc':
      'Street food, market stalls and local dishes — quests where you eat what the city eats.',
    'categories.scenery': 'Scenery',
    'categories.scenery.desc':
      'Viewpoints, panoramas and golden-hour spots — quests that end with a view.',
    'categories.nature': 'Nature',
    'categories.nature.desc':
      'Forests, waterfalls, islands and trails — quests that take you into the green.',
    'categories.craft': 'Craft',
    'categories.craft.desc':
      'Artisans, workshops and living traditions — quests where you watch things made by hand.',
    'categories.nightlife': 'Nightlife',
    'categories.nightlife.desc':
      'Bars, live music and night markets — quests that start after dark.',
    'categories.hidden': 'Hidden Gems',
    'categories.hidden.desc':
      'Back alleys and locals-only corners — quests to places no guidebook lists.',
    'categories.heritage': 'Heritage',
    'categories.heritage.desc':
      'Temples, palaces and old quarters — quests that walk you through the city’s history.',
    'categories.adventure': 'Adventure',
    'categories.adventure.desc':
      'Hikes, climbs, surf and sport — quests that get your heart rate up.',
    'categories.movie': 'Movie',
    'categories.movie.desc':
      'Film and series locations — quests to stand where iconic scenes were shot.',
    'categories.holyroute': 'Holy Route',
    'categories.holyroute.desc':
      'Sacred sites and pilgrimage paths — quests along shrines, churches and rituals.',

    'waitlist.title': 'Be the first to know at launch',
    'waitlist.subtitle':
      'Roam is coming soon to Google Play. Leave your email and we’ll ping you the moment it’s live — no spam, launch news only.',
    'waitlist.founder':
      'The first 50 people to join the app get a numbered Founding Explorer badge (#01–#50) — it will never be given out again.',
    'founder.left': 'Only {left} Founding Explorer badges left.',
    'founder.gone': 'All 50 Founding Explorer badges have been claimed.',
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
      'Roam is launching on Android (Google Play) first. Join the waitlist and we’ll tell you the day it ships.',
    'faq.q3': 'Which cities have quests?',
    'faq.a3':
      'At launch there are 9 destinations in 5 countries: Tokyo, Kyoto, Istanbul, Rome, Florence, Cinque Terre, Bangkok, Phuket and Bali. More than 130 quests are ready, and new cities are added regularly.',
    'faq.q4': 'Who is Roam designed for?',
    'faq.a4':
      'For locals who want to know their city deeper, and travelers who want to step off the tourist trail.',
    'faq.q5': 'How is my location data used?',
    'faq.a5':
      'Your location is only used to show nearby quests and verify check-ins. See our privacy policy for details.',
    'faq.q6': 'What is the Founding Explorer badge?',
    'faq.a6':
      'The first 50 people to sign up for Roam earn a numbered Founding Explorer badge they keep on their profile forever: the first gets #01, the fiftieth #50. Only those 50 people will ever have it. Waitlist members hear about the launch before anyone else.',

    'city.eyebrow': 'City guide',
    'city.meta.title': 'Things to Do in {city}: {n} Hand-Picked Quests | Roam',
    'city.meta.description':
      '{n} things to do in {city} beyond the tourist trail: {cats}. Each comes with duration and difficulty — go there, check in with Roam, earn badges.',
    'city.h1': 'Things to do in {city}: {n} hand-picked quests',
    'city.intro':
      'This list comes from the {city} quests in the Roam app. Every quest is tied to a real place and was chosen one by one; the main categories are {cats}. As you explore, check in on the app to collect points and badges.',
    'city.jump': 'Categories',
    'city.besttime': 'Best time',
    'city.duration': 'Duration',
    'city.points': 'pts',
    'city.difficulty.easy': 'Easy',
    'city.difficulty.mid': 'Medium',
    'city.difficulty.hard': 'Hard',
    'city.map': 'Open in Maps',
    'city.cta.title': 'Turn {city} into a game',
    'city.cta.desc':
      'In Roam these quests wait for you on the map: go there, check in with a photo, earn badges. Join the waitlist to hear about the launch.',
    'city.others': 'More cities',
    'city.other': 'More',

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
    'blog.related': 'Keep exploring',

    'footer.tagline': 'Explore the city, complete quests.',
    'footer.privacy': 'Privacy Policy',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.cities': 'Cities',

    'notfound.title': 'Page not found',
    'notfound.desc': 'The page you’re looking for may have moved or never existed.',
    'notfound.home': 'Back to home',
  },
  es: {
    'meta.title': 'Roam — App para Explorar Ciudades: Misiones e Insignias',
    'meta.description':
      'Roam es una app gratuita que convierte tus viajes en misiones. Más de 130 misiones en Tokio, Estambul, Roma y 6 destinos más: ve, haz check-in y gana insignias.',

    'nav.features': 'Funciones',
    'nav.how': 'Cómo Funciona',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Acceso anticipado',
    'nav.cities': 'Ciudades',

    'hero.badge': 'Muy pronto en Google Play',
    'hero.title': 'Sal de la ruta turística. Explora la ciudad misión a misión.',
    'hero.subtitle':
      'Roam convierte lugares reales, elegidos a mano, en misiones sobre el mapa. Ve hasta allí, haz check-in con una foto y gana puntos, insignias y colecciones.',
    'hero.cta': 'Únete a la lista de espera',
    'hero.social_proof': 'Gratis · Sin spam · Solo la noticia del lanzamiento',
    'hero.card.badge.title': '¡Insignia desbloqueada!',
    'hero.card.badge.desc': 'Cazador de Sabores',
    'hero.card.nearby': '3 misiones cerca de ti',
    'stats.quests': 'misiones',
    'stats.cities': 'destinos',
    'stats.countries': 'países',
    'stats.categories': 'categorías',

    'cities.eyebrow': 'Ciudades de lanzamiento',
    'cities.title': 'De Tokio a Estambul: más de 130 misiones en 9 destinos',
    'cities.subtitle':
      'Cada misión está elegida a mano y ligada a un lugar real. Encuentras la cara famosa de la ciudad y la que está una calle más atrás.',
    'cities.more': 'Vienen más ciudades — si la tuya no está, únete a la lista de espera y te avisamos cuando se abra.',

    'features.curated.title': 'Misiones elegidas a mano',
    'features.curated.desc':
      'No es una lista de lugares generada automáticamente. Cada misión se elige una a una e incluye la mejor hora y una nota sobre la afluencia.',
    'features.proof.title': 'Check-in verificado por ubicación y foto',
    'features.proof.desc':
      'Los puntos solo cuentan si vas de verdad: el check-in se verifica con tu ubicación y tu foto queda en tu perfil como recuerdo.',

    'how.title': 'Cómo funciona',
    'how.subtitle': 'Conviértete en explorador urbano en tres pasos.',
    'how.step1.title': 'Abre el mapa',
    'how.step1.desc':
      'Descubre las misiones a tu alrededor: 10 categorías, de la gastronomía a la aventura, de localizaciones de cine a rincones ocultos.',
    'how.step2.title': 'Ve a la misión',
    'how.step2.desc':
      'Dirígete al lugar de la misión. Cada misión revela una historia o un rincón oculto de la ciudad.',
    'how.step3.title': 'Haz check-in y gana',
    'how.step3.desc':
      'Al llegar, haz check-in con una foto; suma puntos, desbloquea insignias y amplía tu colección.',

    'features.title': 'Funciones que convierten el viaje en juego',
    'features.subtitle':
      'No es una guía turística — es un juego de exploración. Para quienes quieren conocer la ciudad de verdad.',
    'features.map.title': 'Mapa de misiones geolocalizado',
    'features.map.desc':
      'Las misiones están ligadas a lugares reales. Descubre lo que tienes cerca y traza tu propia ruta.',
    'features.badges.title': 'Puntos, insignias y colecciones',
    'features.badges.desc':
      'Cada misión completada suma puntos. Desbloquea insignias y completa colecciones de ciudades.',
    'features.categories.title': '10 categorías de exploración',
    'features.categories.desc':
      'De la gastronomía a la aventura, de rutas sagradas a localizaciones de cine — explora lo que te gusta.',
    'features.i18n.title': 'Disponible en 4 idiomas',
    'features.i18n.desc': 'Turco, inglés, español y alemán — lista para cualquier viajero.',

    'categories.eyebrow': 'Explora a tu manera',
    'categories.title': '10 categorías, 10 caras de la ciudad',
    'categories.subtitle':
      'Cada misión pertenece a una categoría. Filtra el mapa según lo que te apetezca hoy — la ciudad hace el resto.',
    'categories.gastronomy': 'Gastronomía',
    'categories.gastronomy.desc':
      'Comida callejera, puestos de mercado y platos locales — misiones donde comes lo que come la ciudad.',
    'categories.scenery': 'Paisajes',
    'categories.scenery.desc':
      'Miradores, panorámicas y rincones de hora dorada — misiones que terminan con vistas.',
    'categories.nature': 'Naturaleza',
    'categories.nature.desc':
      'Bosques, cascadas, islas y senderos — misiones que te llevan al verde.',
    'categories.craft': 'Artesanía',
    'categories.craft.desc':
      'Artesanos, talleres y tradiciones vivas — misiones donde ves crear a mano.',
    'categories.nightlife': 'Vida Nocturna',
    'categories.nightlife.desc':
      'Bares, música en vivo y mercados nocturnos — misiones que empiezan al caer la noche.',
    'categories.hidden': 'Rincones Ocultos',
    'categories.hidden.desc':
      'Callejones y rincones que solo conocen los locales — lugares que no salen en las guías.',
    'categories.heritage': 'Patrimonio',
    'categories.heritage.desc':
      'Templos, palacios y barrios antiguos — misiones que recorren la historia de la ciudad.',
    'categories.adventure': 'Aventura',
    'categories.adventure.desc':
      'Senderismo, escalada, surf y deporte — misiones que aceleran tu pulso.',
    'categories.movie': 'Cine',
    'categories.movie.desc':
      'Localizaciones de cine y series — misiones para pisar donde se rodaron escenas icónicas.',
    'categories.holyroute': 'Ruta Sagrada',
    'categories.holyroute.desc':
      'Lugares sagrados y caminos de peregrinación — misiones entre santuarios, iglesias y rituales.',

    'waitlist.title': 'Entérate del lanzamiento antes que nadie',
    'waitlist.subtitle':
      'Roam llegará muy pronto a Google Play. Deja tu correo y te avisaremos en cuanto esté disponible — sin spam, solo la noticia del lanzamiento.',
    'waitlist.founder':
      'Las primeras 50 personas en unirse a la app reciben una insignia numerada de Explorador Fundador (#01–#50); nunca se volverá a otorgar.',
    'founder.left': 'Solo quedan {left} insignias de Explorador Fundador.',
    'founder.gone': 'Las 50 insignias de Explorador Fundador ya tienen dueño.',
    'waitlist.placeholder': 'Tu correo electrónico',
    'waitlist.button': 'Unirme a la lista',
    'waitlist.success': '¡Genial! Estás en la lista — te avisaremos en el lanzamiento. 🎉',
    'waitlist.duplicate': 'Este correo ya está en la lista. ¡Hasta pronto! 👋',
    'waitlist.invalid': 'Introduce un correo electrónico válido.',
    'waitlist.error': 'Algo salió mal. Inténtalo de nuevo.',

    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '¿Roam es gratis?',
    'faq.a1': 'Sí. Descargar Roam y completar misiones será gratis.',
    'faq.q2': '¿En qué plataformas saldrá?',
    'faq.a2':
      'Roam se lanzará primero en Android (Google Play). Únete a la lista de espera y te avisaremos el día que salga.',
    'faq.q3': '¿En qué ciudades hay misiones?',
    'faq.a3':
      'En el lanzamiento hay 9 destinos en 5 países: Tokio, Kioto, Estambul, Roma, Florencia, Cinque Terre, Bangkok, Phuket y Bali. Hay más de 130 misiones listas y se añaden nuevas ciudades con regularidad.',
    'faq.q4': '¿Para quién está diseñada Roam?',
    'faq.a4':
      'Para quienes quieren conocer más a fondo su ciudad y para viajeros que quieren salirse de la ruta turística.',
    'faq.q5': '¿Para qué se usan mis datos de ubicación?',
    'faq.a5':
      'Tu ubicación solo se usa para mostrar misiones cercanas y verificar los check-ins. Consulta nuestra política de privacidad para más detalles.',
    'faq.q6': '¿Qué es la insignia de Explorador Fundador?',
    'faq.a6':
      'Las primeras 50 personas que se registren en Roam ganan una insignia numerada de Explorador Fundador que lucirán para siempre en su perfil: la primera recibe la #01 y la quincuagésima, la #50. Solo esas 50 personas la tendrán. Quienes están en la lista de espera se enteran del lanzamiento antes que nadie.',

    'city.eyebrow': 'Guía de ciudad',
    'city.meta.title': 'Qué Hacer en {city}: {n} Misiones Elegidas a Mano | Roam',
    'city.meta.description':
      '{n} planes en {city} fuera de la ruta turística: {cats}. Cada uno con duración y dificultad; ve, haz check-in con Roam y gana insignias.',
    'city.h1': 'Qué hacer en {city}: {n} misiones elegidas a mano',
    'city.intro':
      'Esta lista sale de las misiones de {city} en la app Roam. Cada misión está ligada a un lugar real y se eligió una a una; las categorías principales son {cats}. Mientras exploras, haz check-in en la app para sumar puntos e insignias.',
    'city.jump': 'Categorías',
    'city.besttime': 'Mejor momento',
    'city.duration': 'Duración',
    'city.points': 'pts',
    'city.difficulty.easy': 'Fácil',
    'city.difficulty.mid': 'Media',
    'city.difficulty.hard': 'Difícil',
    'city.map': 'Abrir en el mapa',
    'city.cta.title': 'Convierte {city} en un juego',
    'city.cta.desc':
      'En Roam estas misiones te esperan en el mapa: ve, haz check-in con una foto y gana insignias. Únete a la lista de espera para enterarte del lanzamiento.',
    'city.others': 'Más ciudades',
    'city.other': 'Otros',

    'blog.title': 'Roam Blog — Guías de Exploración Urbana',
    'blog.description':
      'Rutas a pie, rincones ocultos y consejos que convierten la exploración en un juego. Guías para viajeros del equipo de Roam.',
    'blog.heading': 'Blog',
    'blog.subheading': 'Guías de exploración urbana, rutas y rincones ocultos.',
    'blog.readmore': 'Leer más',
    'blog.published': 'Publicado',
    'blog.backtoblog': '← Todos los artículos',
    'blog.minread': 'min de lectura',
    'blog.cta.title': 'Convierte esta ruta en un juego',
    'blog.cta.desc':
      'Con Roam estos lugares se convierten en misiones: ve, haz check-in, gana insignias. Únete a la lista de espera para el lanzamiento.',
    'blog.related': 'Sigue explorando',

    'footer.tagline': 'Explora la ciudad, completa misiones.',
    'footer.privacy': 'Política de Privacidad',
    'footer.blog': 'Blog',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.cities': 'Ciudades',

    'notfound.title': 'Página no encontrada',
    'notfound.desc': 'La página que buscas puede haberse movido o no haber existido nunca.',
    'notfound.home': 'Volver al inicio',
  },
  de: {
    'meta.title': 'Roam — Die App für Stadterkundung: Quests & Abzeichen',
    'meta.description':
      'Roam ist die kostenlose App, die Städtereisen in Quests verwandelt. Über 130 Quests in Tokio, Istanbul, Rom und 6 weiteren Zielen: hingehen, einchecken, sammeln.',

    'nav.features': 'Funktionen',
    'nav.how': 'So Funktioniert’s',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Früher Zugang',
    'nav.cities': 'Städte',

    'hero.badge': 'Bald bei Google Play',
    'hero.title': 'Runter vom Touristenpfad. Entdecke Städte Quest für Quest.',
    'hero.subtitle':
      'Roam macht handverlesene, echte Orte zu Quests auf der Karte. Geh hin, checke mit einem Foto ein und sammle Punkte, Abzeichen und Sammlungen.',
    'hero.cta': 'Auf die Warteliste',
    'hero.social_proof': 'Kostenlos · Kein Spam · Nur die Launch-News',
    'hero.card.badge.title': 'Abzeichen freigeschaltet!',
    'hero.card.badge.desc': 'Geschmacksjäger',
    'hero.card.nearby': '3 Quests in deiner Nähe',
    'stats.quests': 'Quests',
    'stats.cities': 'Reiseziele',
    'stats.countries': 'Länder',
    'stats.categories': 'Kategorien',

    'cities.eyebrow': 'Städte zum Launch',
    'cities.title': 'Von Tokio bis Istanbul: über 130 Quests an 9 Reisezielen',
    'cities.subtitle':
      'Jede Quest ist handverlesen und an einen echten Ort gebunden. Du findest die bekannte Seite der Stadt und die eine Straße dahinter.',
    'cities.more': 'Weitere Städte folgen — fehlt deine, trag dich auf die Warteliste ein und wir melden uns, sobald sie startet.',

    'features.curated.title': 'Handverlesene Quests',
    'features.curated.desc':
      'Keine automatisch erzeugte Ortsliste. Jede Quest wird einzeln ausgewählt und kommt mit einem Hinweis zur besten Zeit und zum Andrang.',
    'features.proof.title': 'Check-in per Standort und Foto bestätigt',
    'features.proof.desc':
      'Punkte gibt es nur, wenn du wirklich dort bist: Der Check-in wird über deinen Standort bestätigt, dein Foto bleibt als Erinnerung im Profil.',

    'how.title': 'So funktioniert’s',
    'how.subtitle': 'In drei Schritten zum Stadtentdecker.',
    'how.step1.title': 'Öffne die Karte',
    'how.step1.desc':
      'Sieh Quests in deiner Nähe: 10 Kategorien, von Gastronomie bis Abenteuer, von Filmkulissen bis zu versteckten Ecken.',
    'how.step2.title': 'Geh zur Quest',
    'how.step2.desc':
      'Mach dich auf den Weg zum Quest-Ort. Jede Quest zeigt dir eine Geschichte oder eine versteckte Ecke der Stadt.',
    'how.step3.title': 'Einchecken & gewinnen',
    'how.step3.desc':
      'Checke vor Ort mit einem Foto ein; sammle Punkte, schalte Abzeichen frei und erweitere deine Sammlung.',

    'features.title': 'Funktionen, die Reisen zum Spiel machen',
    'features.subtitle':
      'Kein Reiseführer — ein Entdeckungsspiel. Für alle, die eine Stadt wirklich kennenlernen wollen.',
    'features.map.title': 'Standortbasierte Quest-Karte',
    'features.map.desc':
      'Quests sind an echte Orte gebunden. Entdecke, was in deiner Nähe ist, und plane deine eigene Route.',
    'features.badges.title': 'Punkte, Abzeichen & Sammlungen',
    'features.badges.desc':
      'Jede abgeschlossene Quest bringt Punkte. Schalte Abzeichen frei und vervollständige Stadt-Sammlungen.',
    'features.categories.title': '10 Entdeckungskategorien',
    'features.categories.desc':
      'Von Gastronomie bis Abenteuer, von heiligen Routen bis zu Filmkulissen — entdecke, was dich begeistert.',
    'features.i18n.title': 'In 4 Sprachen verfügbar',
    'features.i18n.desc': 'Türkisch, Englisch, Spanisch und Deutsch — bereit für alle Reisenden.',

    'categories.eyebrow': 'Entdecke nach Laune',
    'categories.title': '10 Kategorien, 10 Gesichter der Stadt',
    'categories.subtitle':
      'Jede Quest gehört zu einer Kategorie. Filtere die Karte nach dem, worauf du heute Lust hast — den Rest erledigt die Stadt.',
    'categories.gastronomy': 'Gastronomie',
    'categories.gastronomy.desc':
      'Streetfood, Marktstände und lokale Gerichte — Quests, bei denen du isst, was die Stadt isst.',
    'categories.scenery': 'Aussichten',
    'categories.scenery.desc':
      'Aussichtspunkte, Panoramen und Golden-Hour-Spots — Quests, die mit einem Ausblick enden.',
    'categories.nature': 'Natur',
    'categories.nature.desc':
      'Wälder, Wasserfälle, Inseln und Pfade — Quests, die dich ins Grüne führen.',
    'categories.craft': 'Handwerk',
    'categories.craft.desc':
      'Kunsthandwerk, Werkstätten und lebendige Traditionen — Quests, bei denen Handarbeit entsteht.',
    'categories.nightlife': 'Nachtleben',
    'categories.nightlife.desc':
      'Bars, Livemusik und Nachtmärkte — Quests, die nach Einbruch der Dunkelheit beginnen.',
    'categories.hidden': 'Versteckte Ecken',
    'categories.hidden.desc':
      'Gassen und Ecken, die nur Einheimische kennen — Orte, die in keinem Reiseführer stehen.',
    'categories.heritage': 'Kulturerbe',
    'categories.heritage.desc':
      'Tempel, Paläste und Altstadtviertel — Quests durch die Geschichte der Stadt.',
    'categories.adventure': 'Abenteuer',
    'categories.adventure.desc':
      'Wandern, Klettern, Surfen und Sport — Quests, die deinen Puls hochtreiben.',
    'categories.movie': 'Film',
    'categories.movie.desc':
      'Film- und Seriendrehorte — Quests dorthin, wo ikonische Szenen entstanden.',
    'categories.holyroute': 'Heilige Route',
    'categories.holyroute.desc':
      'Heilige Stätten und Pilgerwege — Quests entlang von Schreinen, Kirchen und Ritualen.',

    'waitlist.title': 'Erfahre als Erster vom Launch',
    'waitlist.subtitle':
      'Roam kommt bald zu Google Play. Hinterlass deine E-Mail und wir melden uns, sobald es losgeht — kein Spam, nur die Launch-News.',
    'waitlist.founder':
      'Die ersten 50 Personen in der App erhalten ein nummeriertes Gründungs-Entdecker-Abzeichen (#01–#50) — es wird nie wieder vergeben.',
    'founder.left': 'Nur noch {left} Gründungs-Entdecker-Abzeichen übrig.',
    'founder.gone': 'Alle 50 Gründungs-Entdecker-Abzeichen sind vergeben.',
    'waitlist.placeholder': 'Deine E-Mail-Adresse',
    'waitlist.button': 'Eintragen',
    'waitlist.success': 'Super! Du bist auf der Liste — wir melden uns zum Launch. 🎉',
    'waitlist.duplicate': 'Diese E-Mail ist schon auf der Liste. Bis bald! 👋',
    'waitlist.invalid': 'Bitte gib eine gültige E-Mail-Adresse ein.',
    'waitlist.error': 'Etwas ist schiefgelaufen. Bitte versuch es erneut.',

    'faq.title': 'Häufige Fragen',
    'faq.q1': 'Ist Roam kostenlos?',
    'faq.a1': 'Ja. Roam herunterzuladen und Quests abzuschließen wird kostenlos sein.',
    'faq.q2': 'Auf welchen Plattformen erscheint es?',
    'faq.a2':
      'Roam erscheint zuerst für Android (Google Play). Trag dich auf die Warteliste ein und wir sagen dir Bescheid, sobald es verfügbar ist.',
    'faq.q3': 'In welchen Städten gibt es Quests?',
    'faq.a3':
      'Zum Launch gibt es 9 Reiseziele in 5 Ländern: Tokio, Kyoto, Istanbul, Rom, Florenz, Cinque Terre, Bangkok, Phuket und Bali. Über 130 Quests sind fertig, neue Städte kommen regelmäßig dazu.',
    'faq.q4': 'Für wen ist Roam gedacht?',
    'faq.a4':
      'Für alle, die ihre eigene Stadt tiefer kennenlernen wollen, und für Reisende, die abseits der Touristenpfade unterwegs sein möchten.',
    'faq.q5': 'Wofür werden meine Standortdaten verwendet?',
    'faq.a5':
      'Dein Standort wird nur genutzt, um Quests in deiner Nähe anzuzeigen und Check-ins zu bestätigen. Details findest du in unserer Datenschutzerklärung.',
    'faq.q6': 'Was ist das Gründungs-Entdecker-Abzeichen?',
    'faq.a6':
      'Die ersten 50 Personen, die sich bei Roam registrieren, erhalten ein nummeriertes Gründungs-Entdecker-Abzeichen, das für immer in ihrem Profil bleibt: die erste Person bekommt #01, die fünfzigste #50. Nur diese 50 Personen werden es je besitzen. Wer auf der Warteliste steht, erfährt als Erstes vom Launch.',

    'city.eyebrow': 'Stadtführer',
    'city.meta.title': '{city} Sehenswürdigkeiten: {n} handverlesene Quests | Roam',
    'city.meta.description':
      '{n} Tipps für {city} abseits der Touristenpfade: {cats}. Mit Dauer und Schwierigkeit — hingehen, mit Roam einchecken, Abzeichen sammeln.',
    'city.h1': '{city} entdecken: {n} handverlesene Quests',
    'city.intro':
      'Diese Liste stammt aus den {city}-Quests der Roam-App. Jede Quest ist an einen echten Ort gebunden und wurde einzeln ausgewählt; die wichtigsten Kategorien: {cats}. Unterwegs checkst du in der App ein und sammelst Punkte und Abzeichen.',
    'city.jump': 'Kategorien',
    'city.besttime': 'Beste Zeit',
    'city.duration': 'Dauer',
    'city.points': 'Pkt.',
    'city.difficulty.easy': 'Leicht',
    'city.difficulty.mid': 'Mittel',
    'city.difficulty.hard': 'Schwer',
    'city.map': 'In Karten öffnen',
    'city.cta.title': 'Mach {city} zum Spiel',
    'city.cta.desc':
      'In Roam warten diese Quests auf der Karte auf dich: hingehen, mit Foto einchecken, Abzeichen sammeln. Trag dich auf die Warteliste ein, um vom Launch zu erfahren.',
    'city.others': 'Weitere Städte',
    'city.other': 'Weitere',

    'blog.title': 'Roam Blog — Guides zur Stadterkundung',
    'blog.description':
      'Stadtrouten zu Fuß, versteckte Ecken und Tipps, die Erkundung in ein Spiel verwandeln. Guides für Reisende vom Roam-Team.',
    'blog.heading': 'Blog',
    'blog.subheading': 'Guides zur Stadterkundung, Routen und versteckte Ecken.',
    'blog.readmore': 'Weiterlesen',
    'blog.published': 'Veröffentlicht',
    'blog.backtoblog': '← Alle Artikel',
    'blog.minread': 'Min. Lesezeit',
    'blog.cta.title': 'Mach aus dieser Route ein Spiel',
    'blog.cta.desc':
      'Mit Roam werden diese Orte zu Quests: hingehen, einchecken, Abzeichen sammeln. Trag dich für den Launch auf die Warteliste ein.',
    'blog.related': 'Weiter entdecken',

    'footer.tagline': 'Entdecke die Stadt, meistere Quests.',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.blog': 'Blog',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.cities': 'Städte',

    'notfound.title': 'Seite nicht gefunden',
    'notfound.desc': 'Die gesuchte Seite wurde vielleicht verschoben oder hat nie existiert.',
    'notfound.home': 'Zur Startseite',
  },
} as const;

export type UIKey = keyof (typeof ui)['tr'];

/** Şablon doldurma: fill('{n} görev', { n: 5 }) → '5 görev' */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}
