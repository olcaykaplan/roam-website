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

    'hero.badge': 'Yakında Google Play’de',
    'hero.title': 'Şehri keşfet, görevleri tamamla, anıları biriktir.',
    'hero.subtitle':
      'Roam, bulunduğun şehri oyunlaştırılmış görevlerle keşfettiren mobil uygulama. Haritada görevleri gör, konuma git, check-in yap — puan, rozet ve koleksiyonlar kazan.',
    'hero.cta': 'Bekleme listesine katıl',
    'hero.social_proof': 'Lansmanda ilk denecekler arasında ol.',
    'hero.card.badge.title': 'Rozet açıldı!',
    'hero.card.badge.desc': 'Lezzet Avcısı',
    'hero.card.nearby': 'Yakınında 3 görev var',

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
    'waitlist.first100':
      'Uygulamadaki ilk 100 kişiye özel Sadakat Rozeti — başka hiç kimseye verilmeyecek.',
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
      'Lansmanda Türkiye’nin büyük şehirlerinden başlıyoruz; yeni şehirler ve ülkeler hızla eklenecek. Görev ağı her hafta büyüyor.',
    'faq.q4': 'Roam’u kimler için tasarladınız?',
    'faq.a4':
      'Yaşadığı şehri daha derin tanımak isteyenler ve gittiği şehirde turist rotasının dışına çıkmak isteyen gezginler için.',
    'faq.q5': 'Konum verilerim ne için kullanılıyor?',
    'faq.a5':
      'Konumun yalnızca yakınındaki görevleri göstermek ve check-in doğrulamak için kullanılır. Detaylar için gizlilik politikamıza bakabilirsin.',
    'faq.q6': 'Sadakat Rozeti nedir?',
    'faq.a6':
      'Roam’a katılan ilk 100 kişi, profilinde ömür boyu taşıyacağı özel Sadakat Rozeti’ni kazanır. Bu rozet yalnızca ilk 100 kullanıcıya verilir; sonradan hiçbir şekilde kazanılamaz. Erken haberdar olmak için bekleme listesine katıl.',

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

    'notfound.title': 'Sayfa bulunamadı',
    'notfound.desc': 'Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.',
    'notfound.home': 'Ana sayfaya dön',
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

    'hero.badge': 'Coming soon to Google Play',
    'hero.title': 'Explore the city, complete quests, collect memories.',
    'hero.subtitle':
      'Roam is a mobile app that turns city exploration into a game. See quests on the map, walk to the location, check in — earn points, badges and collections.',
    'hero.cta': 'Join the waitlist',
    'hero.social_proof': 'Be among the first to try it at launch.',
    'hero.card.badge.title': 'Badge unlocked!',
    'hero.card.badge.desc': 'Flavor Hunter',
    'hero.card.nearby': '3 quests near you',

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
    'waitlist.first100':
      'The first 100 people in the app earn an exclusive Loyalty Badge — it will never be given to anyone else.',
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
      'We’re starting with major cities in Türkiye; new cities and countries are added fast. The quest network grows every week.',
    'faq.q4': 'Who is Roam designed for?',
    'faq.a4':
      'For locals who want to know their city deeper, and travelers who want to step off the tourist trail.',
    'faq.q5': 'How is my location data used?',
    'faq.a5':
      'Your location is only used to show nearby quests and verify check-ins. See our privacy policy for details.',
    'faq.q6': 'What is the Loyalty Badge?',
    'faq.a6':
      'The first 100 people to join Roam earn an exclusive Loyalty Badge they keep on their profile forever. Only the first 100 users will ever get it — it can never be earned afterwards. Join the waitlist to be early.',

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

    'notfound.title': 'Page not found',
    'notfound.desc': 'The page you’re looking for may have moved or never existed.',
    'notfound.home': 'Back to home',
  },
  es: {
    'meta.title': 'Roam — Explora la Ciudad, Completa Misiones',
    'meta.description':
      'Roam es una app móvil que convierte la exploración urbana en un juego. Encuentra misiones en el mapa, camina hasta el lugar, haz check-in — gana puntos, insignias y colecciones. ¡Únete a la lista de espera!',

    'nav.features': 'Funciones',
    'nav.how': 'Cómo Funciona',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Únete',

    'hero.badge': 'Muy pronto en Google Play',
    'hero.title': 'Explora la ciudad, completa misiones, colecciona recuerdos.',
    'hero.subtitle':
      'Roam es una app móvil que convierte la exploración urbana en un juego. Mira las misiones en el mapa, camina hasta el lugar, haz check-in — gana puntos, insignias y colecciones.',
    'hero.cta': 'Únete a la lista de espera',
    'hero.social_proof': 'Sé de los primeros en probarla en el lanzamiento.',
    'hero.card.badge.title': '¡Insignia desbloqueada!',
    'hero.card.badge.desc': 'Cazador de Sabores',
    'hero.card.nearby': '3 misiones cerca de ti',

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
      'Haz check-in en el lugar; suma puntos, desbloquea insignias y amplía tu colección.',

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
    'waitlist.first100':
      'Las primeras 100 personas en la app ganan una Insignia de Lealtad exclusiva — nunca se dará a nadie más.',
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
      'Empezamos por las grandes ciudades de Türkiye; nuevas ciudades y países se añaden rápidamente. La red de misiones crece cada semana.',
    'faq.q4': '¿Para quién está diseñada Roam?',
    'faq.a4':
      'Para quienes quieren conocer más a fondo su ciudad y para viajeros que quieren salirse de la ruta turística.',
    'faq.q5': '¿Para qué se usan mis datos de ubicación?',
    'faq.a5':
      'Tu ubicación solo se usa para mostrar misiones cercanas y verificar los check-ins. Consulta nuestra política de privacidad para más detalles.',
    'faq.q6': '¿Qué es la Insignia de Lealtad?',
    'faq.a6':
      'Las primeras 100 personas en unirse a Roam ganan una Insignia de Lealtad exclusiva que lucirán en su perfil para siempre. Solo la recibirán los primeros 100 usuarios; después no podrá conseguirse de ninguna manera. Únete a la lista de espera para llegar pronto.',

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

    'notfound.title': 'Página no encontrada',
    'notfound.desc': 'La página que buscas puede haberse movido o no haber existido nunca.',
    'notfound.home': 'Volver al inicio',
  },
  de: {
    'meta.title': 'Roam — Entdecke die Stadt, Meistere Quests',
    'meta.description':
      'Roam ist eine mobile App, die Stadterkundung in ein Spiel verwandelt. Finde Quests auf der Karte, geh zum Ort, checke ein — sammle Punkte, Abzeichen und Sammlungen. Trag dich auf die Warteliste ein!',

    'nav.features': 'Funktionen',
    'nav.how': 'So Funktioniert’s',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Mitmachen',

    'hero.badge': 'Bald bei Google Play',
    'hero.title': 'Entdecke die Stadt, meistere Quests, sammle Erinnerungen.',
    'hero.subtitle':
      'Roam ist eine mobile App, die Stadterkundung in ein Spiel verwandelt. Sieh Quests auf der Karte, geh zum Ort, checke ein — sammle Punkte, Abzeichen und Sammlungen.',
    'hero.cta': 'Auf die Warteliste',
    'hero.social_proof': 'Sei beim Launch unter den Ersten.',
    'hero.card.badge.title': 'Abzeichen freigeschaltet!',
    'hero.card.badge.desc': 'Geschmacksjäger',
    'hero.card.nearby': '3 Quests in deiner Nähe',

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
      'Checke vor Ort ein; sammle Punkte, schalte Abzeichen frei und erweitere deine Sammlung.',

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
    'waitlist.first100':
      'Die ersten 100 Personen in der App erhalten ein exklusives Treue-Abzeichen — es wird nie an jemand anderen vergeben.',
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
      'Wir starten mit den großen Städten der Türkei; neue Städte und Länder kommen schnell dazu. Das Quest-Netzwerk wächst jede Woche.',
    'faq.q4': 'Für wen ist Roam gedacht?',
    'faq.a4':
      'Für alle, die ihre eigene Stadt tiefer kennenlernen wollen, und für Reisende, die abseits der Touristenpfade unterwegs sein möchten.',
    'faq.q5': 'Wofür werden meine Standortdaten verwendet?',
    'faq.a5':
      'Dein Standort wird nur genutzt, um Quests in deiner Nähe anzuzeigen und Check-ins zu bestätigen. Details findest du in unserer Datenschutzerklärung.',
    'faq.q6': 'Was ist das Treue-Abzeichen?',
    'faq.a6':
      'Die ersten 100 Personen, die Roam beitreten, erhalten ein exklusives Treue-Abzeichen, das für immer in ihrem Profil bleibt. Nur die ersten 100 Nutzer bekommen es — danach ist es auf keinem Weg mehr erhältlich. Trag dich auf die Warteliste ein, um früh dabei zu sein.',

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

    'notfound.title': 'Seite nicht gefunden',
    'notfound.desc': 'Die gesuchte Seite wurde vielleicht verschoben oder hat nie existiert.',
    'notfound.home': 'Zur Startseite',
  },
} as const;

export type UIKey = keyof (typeof ui)['tr'];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}
