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

/**
 * SSS'nin gösterim sırası (sayfa + FAQPage JSON-LD aynı listeyi kullanır).
 * Konumlanmayı anlatan sorular (7: görevler nasıl seçiliyor, 8: yer önerme) öne alındı.
 */
export const FAQ_ORDER = [1, 7, 8, 3, 4, 2, 5, 6] as const;

export const ui = {
  tr: {
    'meta.title': 'Roam — Şehri Yerlisi Gibi Keşfet: Görev Tamamla, Rozet Kazan',
    'meta.description':
      'Ünlü yerlerin yanında yerlisinin sevdiği yeri gösteren şehir keşif uygulaması. 9 destinasyonda 130+ elle seçilmiş görev: git, check-in yap, rozet kazan.',

    'nav.features': 'Özellikler',
    'nav.how': 'Nasıl Çalışır',
    'nav.faq': 'SSS',
    'nav.blog': 'Blog',
    'nav.join': 'Erken erişim',
    'nav.cities': 'Şehirler',

    'hero.badge': 'Yakında Google Play’de',
    'hero.title': 'Turist rotasının dışına çık. Şehri yerlisi gibi keşfet.',
    'hero.subtitle':
      'Her şehirde, orada yaşayanların “asıl şuraya git” dediği yerler vardır. Roam bunları ünlü klasiklerin yanında haritaya koyar ve her birini bir göreve çevirir: oraya git, fotoğrafınla check-in yap, rozet kazan.',
    'hero.cta': 'Bekleme listesine katıl',
    'hero.social_proof': 'Ücretsiz · Spam yok · Yalnızca lansman haberi',
    'hero.card.badge.title': 'Rozet açıldı!',
    'hero.card.badge.desc': 'Lezzet Avcısı',
    'hero.card.nearby': 'Yakınında 3 görev var',
    'stats.quests': 'elle seçilmiş görev',
    'stats.cities': 'destinasyon',
    'stats.countries': 'ülke',
    'stats.categories': 'kategori',
    'why.eyebrow': 'Neden Roam?',
    'why.title': 'Asıl güzel yer çoğu zaman bir sokak ötede',
    'why.body':
      'Gezi listelerinde hep aynı yerleri görürsün. Oysa her şehirde, orada yaşayanların seve seve tarif ettiği bir tapınak, bir esnaf lokantası, bir manzara vardır. Roam klasikleri atlamaz; ama yanlarına, çoğu gezginin hiç duymadığı bu yerleri koyar.',
    'why.p1.title': 'Yerel favoriler',
    'why.p1.desc':
      'Mahalle hamamı, sabahın simitçisi, öğrencilerin pizzacısı: yerlilerin sevdiği, listelerde çıkmayan yerler.',
    'why.p2.title': 'Klasikler de var, etiketli',
    'why.p2.desc':
      'Ünlü yerleri atlamıyoruz. Hangi görevin “Klasik”, hangisinin “Yerel favori” olduğunu etiketinden anlarsın.',
    'why.p3.title': 'Birlikte büyüyen harita',
    'why.p3.desc':
      'Yakında bildiğin yerleri sen de önerebileceksin. Her öneri gözden geçirilir, onaylanınca adınla haritaya eklenir.',
    'pick.local': 'Yerel favori',
    'pick.classic': 'Klasik',

    'cities.eyebrow': 'Lansman şehirleri',
    'cities.title': 'Tokyo’dan İstanbul’a: 9 destinasyonda 130+ görev',
    'cities.subtitle':
      'Her görev tek tek seçildi ve gerçek bir konuma bağlı. Şehrin bilinen yüzünü de, bir sokak arkasındaki hâlini de bulursun.',
    'cities.more': 'Yeni şehirler yolda — şehrin listede yoksa bekleme listesine katıl, açıldığında haber verelim.',

    'features.proof.title': 'Konum ve fotoğrafla doğrulanan check-in',
    'features.proof.desc':
      'Puan yalnızca gerçekten oraya gidince gelir: check-in konumunla doğrulanır, fotoğrafın profilinde anı olarak kalır.',

    'how.title': 'Nasıl çalışır?',
    'how.subtitle': 'Üç adımda şehir kâşifi ol.',
    'how.step1.title': 'Haritayı aç',
    'how.step1.desc':
      'Çevrendeki görevleri haritada gör: klasiklerin yanında yerel favoriler, gastronomiden film mekânlarına 10 kategori.',
    'how.step2.title': 'Göreve git',
    'how.step2.desc':
      'Seçtiğin görevin konumuna git. Her görev, şehrin bir hikâyesini ya da saklı bir köşesini gösterir.',
    'how.step3.title': 'Check-in yap, kazan',
    'how.step3.desc':
      'Konuma varınca fotoğrafınla check-in yap; puan topla, rozetler aç, koleksiyonunu büyüt.',

    'features.title': 'Keşfin eğlenceli tarafı',
    'features.subtitle':
      'Görevler keşfi oyuna çevirir: gittiğin her yer puan, rozet ve anı olarak profilinde kalır.',
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
    'features.lists.title': 'Kendi listelerin',
    'features.lists.desc':
      'Gitmek istediğin görevleri kaydet, şehir şehir listeler oluştur, rotanı önceden planla.',

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
      'Ara sokaklar ve çoğu gezginin kaçırdığı köşeler — bir sokak arkadaki şehir.',
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
    'founder.left': '50 Kurucu Kâşif rozetinden {left} tanesi kaldı.',
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
      'Gittiği şehirde yalnızca turist rotasını değil, orada yaşayanların sevdiği yerleri de görmek isteyen gezginler için. Yaşadığı şehri daha yakından tanımak isteyenler için de.',
    'faq.q5': 'Konum verilerim ne için kullanılıyor?',
    'faq.a5':
      'Konumun yalnızca yakınındaki görevleri göstermek ve check-in doğrulamak için kullanılır. Detaylar için gizlilik politikamıza bakabilirsin.',
    'faq.q6': 'Kurucu Kâşif rozeti nedir?',
    'faq.a6':
      'Roam’a katılan ilk 50 kişi, profilinde ömür boyu taşıyacağı numaralı Kurucu Kâşif rozetini kazanır: ilk katılan #01, ellinci katılan #50 olur. Rozet yalnızca bu 50 kişiye verilir; sonradan hiçbir şekilde kazanılamaz. Bekleme listesindekiler lansmanı herkesten önce öğrenir.',
    'faq.q7': 'Görevler nasıl seçiliyor?',
    'faq.a7':
      'Her görev tek tek seçiliyor; otomatik üretilmiş bir mekân listesi yok. Şehrin herkesin bildiği klasiklerini de koyuyoruz, ama asıl amacımız onların yanında, orada yaşayanların sevdiği az bilinen yerleri göstermek. Uygulamada hangisinin hangisi olduğunu “Klasik” ve “Yerel favori” etiketleri gösterir.',
    'faq.q8': 'Ben de yer önerebilir miyim?',
    'faq.a8':
      'Evet. Öneri özelliği hazır ve yakında açılacak: bildiğin bir yeri önerirsin, gözden geçirildikten sonra görev olarak haritaya eklenir ve adınla anılır. Açıldığında haber almak için bekleme listesine katıl.',

    'city.eyebrow': 'Şehir rehberi',
    'city.meta.title': '{inCity} Gezilecek Yerler: {n} Elle Seçilmiş Görev | Roam',
    'city.meta.description':
      '{inCity} {n} elle seçilmiş görev: ünlü klasiklerin yanında yerlilerin sevdiği az bilinen yerler ({cats}). Her biri süre ve zorluk bilgisiyle.',
    'city.h1': '{inCity} gezilecek yerler: {n} elle seçilmiş görev',
    'city.intro':
      'Bu liste Roam uygulamasındaki {city} görevlerinden oluşuyor. Her görev gerçek bir konuma bağlı ve tek tek seçildi; ağırlıklı kategoriler: {cats}. Gezerken uygulamada check-in yaparak puan ve rozet toplayabilirsin.',
    'city.pick.note':
      'Yıldızlı “Yerel favori” etiketi, yerlilerin sevdiği az bilinen yerleri gösterir.',
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
    'meta.title': 'Roam — Explore Cities Like a Local: Complete Quests, Earn Badges',
    'meta.description':
      'The city exploration app that shows the places locals love next to the famous ones. 130+ hand-picked quests in 9 destinations: go, check in, earn badges.',

    'nav.features': 'Features',
    'nav.how': 'How It Works',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Get early access',
    'nav.cities': 'Cities',

    'hero.badge': 'Coming soon to Google Play',
    'hero.title': 'Step off the tourist trail. Explore the city like a local.',
    'hero.subtitle':
      'Every city has places its people would point you to: “sure, see the famous one, but really, go here.” Roam puts them on the map next to the classics and turns each one into a quest: go there, check in with a photo, earn badges.',
    'hero.cta': 'Join the waitlist',
    'hero.social_proof': 'Free · No spam · Launch news only',
    'hero.card.badge.title': 'Badge unlocked!',
    'hero.card.badge.desc': 'Flavor Hunter',
    'hero.card.nearby': '3 quests near you',
    'stats.quests': 'hand-picked quests',
    'stats.cities': 'destinations',
    'stats.countries': 'countries',
    'stats.categories': 'categories',
    'why.eyebrow': 'Why Roam?',
    'why.title': 'The best spot is often one street over',
    'why.body':
      'Travel lists keep showing the same places. Yet every city has a temple, a family-run diner or a view that locals happily send you to. Roam doesn’t skip the classics, but it puts these places right next to them, the ones most travelers never hear about.',
    'why.p1.title': 'Local favorites',
    'why.p1.desc':
      'The neighborhood bathhouse, the morning simit seller, the students’ pizza place: spots locals love that never make the lists.',
    'why.p2.title': 'Classics too, clearly labeled',
    'why.p2.desc':
      'We don’t skip the famous sights. Each quest’s label tells you whether it’s a “Classic” or a “Local favorite”.',
    'why.p3.title': 'A map that grows with you',
    'why.p3.desc':
      'Soon you’ll be able to suggest places you know. Every suggestion is reviewed, and once approved it goes on the map with your name.',
    'pick.local': 'Local favorite',
    'pick.classic': 'Classic',

    'cities.eyebrow': 'Launch cities',
    'cities.title': 'From Tokyo to Istanbul: 130+ quests in 9 destinations',
    'cities.subtitle':
      'Every quest is hand-picked and tied to a real place. You get the famous side of the city and the one a street behind it.',
    'cities.more': 'More cities are on the way — if yours is missing, join the waitlist and we’ll tell you when it opens.',

    'features.proof.title': 'Check-ins verified by location and photo',
    'features.proof.desc':
      'Points only count when you actually go: your check-in is verified by location, and your photo stays on your profile as a memory.',

    'how.title': 'How it works',
    'how.subtitle': 'Become a city explorer in three steps.',
    'how.step1.title': 'Open the map',
    'how.step1.desc':
      'See the quests around you on the map: local favorites next to the classics, across 10 categories from food to film locations.',
    'how.step2.title': 'Walk to the quest',
    'how.step2.desc':
      'Head to the quest location. Every quest reveals a story or a hidden corner of the city.',
    'how.step3.title': 'Check in & earn',
    'how.step3.desc':
      'Check in with a photo once you arrive; collect points, unlock badges, grow your collection.',

    'features.title': 'The fun side of exploring',
    'features.subtitle':
      'Quests turn exploring into a game: every place you visit stays on your profile as points, badges and memories.',
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
    'features.lists.title': 'Your own lists',
    'features.lists.desc':
      'Save the quests you want to do, build lists city by city and plan your route ahead.',

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
      'Back streets and corners most travelers miss — the city one street over.',
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
    'founder.left': '{left} of 50 Founding Explorer badges left.',
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
      'For travelers who want more than the tourist trail and want to see the places locals love, and for anyone who wants to know their own city better.',
    'faq.q5': 'How is my location data used?',
    'faq.a5':
      'Your location is only used to show nearby quests and verify check-ins. See our privacy policy for details.',
    'faq.q6': 'What is the Founding Explorer badge?',
    'faq.a6':
      'The first 50 people to sign up for Roam earn a numbered Founding Explorer badge they keep on their profile forever: the first gets #01, the fiftieth #50. Only those 50 people will ever have it. Waitlist members hear about the launch before anyone else.',
    'faq.q7': 'How are quests chosen?',
    'faq.a7':
      'Every quest is picked one by one; there’s no auto-generated list of venues. We include the classics everyone knows, but our real aim is to show, right next to them, the lesser-known places the people who live there love. In the app, the “Classic” and “Local favorite” labels tell you which is which.',
    'faq.q8': 'Can I suggest a place?',
    'faq.a8':
      'Yes. Suggestions are built and opening soon: you suggest a place you know, and once it’s reviewed it’s added to the map as a quest, credited to you. Join the waitlist to hear when it opens.',

    'city.eyebrow': 'City guide',
    'city.meta.title': 'Things to Do in {city}: {n} Hand-Picked Quests | Roam',
    'city.meta.description':
      '{n} hand-picked things to do in {city}: famous classics plus lesser-known places locals love ({cats}). Each with duration and difficulty.',
    'city.h1': 'Things to do in {city}: {n} hand-picked quests',
    'city.intro':
      'This list comes from the {city} quests in the Roam app. Every quest is tied to a real place and was chosen one by one; the main categories are {cats}. As you explore, check in on the app to collect points and badges.',
    'city.pick.note':
      'The starred “Local favorite” label marks lesser-known places that locals love.',
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
    'meta.title': 'Roam — Explora la ciudad como un local: misiones e insignias',
    'meta.description':
      'La app para explorar ciudades que te muestra, junto a los lugares famosos, los que aman los locales. Más de 130 misiones elegidas a mano en 9 destinos.',

    'nav.features': 'Funciones',
    'nav.how': 'Cómo Funciona',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Acceso anticipado',
    'nav.cities': 'Ciudades',

    'hero.badge': 'Muy pronto en Google Play',
    'hero.title': 'Sal de la ruta turística. Explora la ciudad como un local.',
    'hero.subtitle':
      'En cada ciudad hay lugares a los que su gente te mandaría: “sí, ve a ver el famoso, pero de verdad, ve aquí”. Roam los pone en el mapa junto a los clásicos y convierte cada uno en una misión: ve, haz check-in con una foto y gana insignias.',
    'hero.cta': 'Únete a la lista de espera',
    'hero.social_proof': 'Gratis · Sin spam · Solo la noticia del lanzamiento',
    'hero.card.badge.title': '¡Insignia desbloqueada!',
    'hero.card.badge.desc': 'Cazador de Sabores',
    'hero.card.nearby': '3 misiones cerca de ti',
    'stats.quests': 'misiones elegidas a mano',
    'stats.cities': 'destinos',
    'stats.countries': 'países',
    'stats.categories': 'categorías',
    'why.eyebrow': '¿Por qué Roam?',
    'why.title': 'El mejor sitio suele estar a una calle',
    'why.body':
      'Las listas de viaje repiten siempre los mismos lugares. Pero en cada ciudad hay un templo, una casa de comidas o un mirador al que los locales te mandan encantados. Roam no se salta los clásicos, pero pone a su lado estos lugares que la mayoría de viajeros nunca conoce.',
    'why.p1.title': 'Favoritos locales',
    'why.p1.desc':
      'El baño público del barrio, el vendedor de simit de la mañana, la pizzería de los estudiantes: sitios que los locales adoran y que nunca salen en las listas.',
    'why.p2.title': 'También clásicos, bien señalados',
    'why.p2.desc':
      'No nos saltamos los lugares famosos. La etiqueta de cada misión te dice si es un “Clásico” o un “Favorito local”.',
    'why.p3.title': 'Un mapa que crece contigo',
    'why.p3.desc':
      'Pronto podrás proponer los lugares que conoces. Cada propuesta se revisa y, una vez aprobada, entra en el mapa con tu nombre.',
    'pick.local': 'Favorito local',
    'pick.classic': 'Clásico',

    'cities.eyebrow': 'Ciudades de lanzamiento',
    'cities.title': 'De Tokio a Estambul: más de 130 misiones en 9 destinos',
    'cities.subtitle':
      'Cada misión está elegida a mano y ligada a un lugar real. Encuentras la cara famosa de la ciudad y la que está una calle más atrás.',
    'cities.more': 'Vienen más ciudades — si la tuya no está, únete a la lista de espera y te avisamos cuando se abra.',

    'features.proof.title': 'Check-in verificado por ubicación y foto',
    'features.proof.desc':
      'Los puntos solo cuentan si vas de verdad: el check-in se verifica con tu ubicación y tu foto queda en tu perfil como recuerdo.',

    'how.title': 'Cómo funciona',
    'how.subtitle': 'Conviértete en explorador urbano en tres pasos.',
    'how.step1.title': 'Abre el mapa',
    'how.step1.desc':
      'Mira en el mapa las misiones a tu alrededor: favoritos locales junto a los clásicos, en 10 categorías, de la gastronomía a los lugares de rodaje.',
    'how.step2.title': 'Ve a la misión',
    'how.step2.desc':
      'Dirígete al lugar de la misión. Cada misión revela una historia o un rincón oculto de la ciudad.',
    'how.step3.title': 'Haz check-in y gana',
    'how.step3.desc':
      'Al llegar, haz check-in con una foto; suma puntos, desbloquea insignias y amplía tu colección.',

    'features.title': 'El lado divertido de explorar',
    'features.subtitle':
      'Las misiones convierten la exploración en un juego: cada lugar que visitas queda en tu perfil como puntos, insignias y recuerdos.',
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
    'features.lists.title': 'Tus propias listas',
    'features.lists.desc':
      'Guarda las misiones que quieres hacer, crea listas por ciudad y planifica tu ruta.',

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
      'Callejuelas y rincones que la mayoría de viajeros pasa por alto — la ciudad a una calle de distancia.',
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
    'founder.left': 'Quedan {left} de 50 insignias de Explorador Fundador.',
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
      'Para viajeros que quieren algo más que la ruta turística y ver los lugares que aman los locales, y para quien quiere conocer mejor su propia ciudad.',
    'faq.q5': '¿Para qué se usan mis datos de ubicación?',
    'faq.a5':
      'Tu ubicación solo se usa para mostrar misiones cercanas y verificar los check-ins. Consulta nuestra política de privacidad para más detalles.',
    'faq.q6': '¿Qué es la insignia de Explorador Fundador?',
    'faq.a6':
      'Las primeras 50 personas que se registren en Roam ganan una insignia numerada de Explorador Fundador que lucirán para siempre en su perfil: la primera recibe la #01 y la quincuagésima, la #50. Solo esas 50 personas la tendrán. Quienes están en la lista de espera se enteran del lanzamiento antes que nadie.',
    'faq.q7': '¿Cómo se eligen las misiones?',
    'faq.a7':
      'Cada misión se elige una por una; no hay listas de lugares generadas automáticamente. Incluimos los clásicos que todos conocen, pero nuestro objetivo real es mostrar, justo a su lado, los lugares menos conocidos que adoran quienes viven allí. En la app, las etiquetas “Clásico” y “Favorito local” te dicen cuál es cuál.',
    'faq.q8': '¿Puedo proponer un lugar?',
    'faq.a8':
      'Sí. La función de propuestas ya está lista y se abrirá pronto: propones un lugar que conoces y, tras revisarlo, se añade al mapa como misión con tu nombre. Únete a la lista de espera para enterarte cuando se abra.',

    'city.eyebrow': 'Guía de ciudad',
    'city.meta.title': 'Qué Hacer en {city}: {n} Misiones Elegidas a Mano | Roam',
    'city.meta.description':
      '{n} planes elegidos a mano en {city}: clásicos famosos y lugares menos conocidos que adoran los locales ({cats}). Cada uno con duración y dificultad.',
    'city.h1': 'Qué hacer en {city}: {n} misiones elegidas a mano',
    'city.intro':
      'Esta lista sale de las misiones de {city} en la app Roam. Cada misión está ligada a un lugar real y se eligió una a una; las categorías principales son {cats}. Mientras exploras, haz check-in en la app para sumar puntos e insignias.',
    'city.pick.note':
      'La etiqueta “Favorito local” con estrella señala lugares menos conocidos que adoran los locales.',
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
    'meta.title': 'Roam — Entdecke Städte wie Einheimische: Quests und Abzeichen',
    'meta.description':
      'Die App zur Stadterkundung, die dir neben den berühmten Orten die Lieblingsplätze der Einheimischen zeigt. Über 130 handverlesene Quests in 9 Zielen.',

    'nav.features': 'Funktionen',
    'nav.how': 'So Funktioniert’s',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.join': 'Früher Zugang',
    'nav.cities': 'Städte',

    'hero.badge': 'Bald bei Google Play',
    'hero.title': 'Raus aus der Touristenroute. Entdecke die Stadt wie Einheimische.',
    'hero.subtitle':
      'In jeder Stadt gibt es Orte, zu denen dich die Menschen dort schicken würden: „Klar, schau dir das Berühmte an, aber geh vor allem hierhin.“ Roam setzt sie neben die Klassiker auf die Karte und macht aus jedem eine Quest: hingehen, mit Foto einchecken, Abzeichen sammeln.',
    'hero.cta': 'Auf die Warteliste',
    'hero.social_proof': 'Kostenlos · Kein Spam · Nur die Launch-News',
    'hero.card.badge.title': 'Abzeichen freigeschaltet!',
    'hero.card.badge.desc': 'Geschmacksjäger',
    'hero.card.nearby': '3 Quests in deiner Nähe',
    'stats.quests': 'handverlesene Quests',
    'stats.cities': 'Reiseziele',
    'stats.countries': 'Länder',
    'stats.categories': 'Kategorien',
    'why.eyebrow': 'Warum Roam?',
    'why.title': 'Der schönste Ort liegt oft eine Straße weiter',
    'why.body':
      'Reiselisten zeigen immer dieselben Orte. Dabei hat jede Stadt einen Tempel, ein einfaches Lokal oder einen Ausblick, zu dem Einheimische dich gern schicken. Roam lässt die Klassiker nicht weg, stellt ihnen aber diese Orte zur Seite, von denen die meisten Reisenden nie hören.',
    'why.p1.title': 'Lokale Favoriten',
    'why.p1.desc':
      'Das Badehaus im Viertel, der Simit-Verkäufer am Morgen, die Pizzeria der Studierenden: Orte, die Einheimische lieben und die in keiner Liste stehen.',
    'why.p2.title': 'Auch Klassiker, klar gekennzeichnet',
    'why.p2.desc':
      'Berühmte Orte lassen wir nicht weg. Am Label jeder Quest erkennst du, ob sie ein „Klassiker“ oder ein „Lokaler Favorit“ ist.',
    'why.p3.title': 'Eine Karte, die mitwächst',
    'why.p3.desc':
      'Bald kannst du selbst Orte vorschlagen, die du kennst. Jeder Vorschlag wird geprüft und landet nach der Freigabe mit deinem Namen auf der Karte.',
    'pick.local': 'Lokaler Favorit',
    'pick.classic': 'Klassiker',

    'cities.eyebrow': 'Städte zum Launch',
    'cities.title': 'Von Tokio bis Istanbul: über 130 Quests an 9 Reisezielen',
    'cities.subtitle':
      'Jede Quest ist handverlesen und an einen echten Ort gebunden. Du findest die bekannte Seite der Stadt und die eine Straße dahinter.',
    'cities.more': 'Weitere Städte folgen — fehlt deine, trag dich auf die Warteliste ein und wir melden uns, sobald sie startet.',

    'features.proof.title': 'Check-in per Standort und Foto bestätigt',
    'features.proof.desc':
      'Punkte gibt es nur, wenn du wirklich dort bist: Der Check-in wird über deinen Standort bestätigt, dein Foto bleibt als Erinnerung im Profil.',

    'how.title': 'So funktioniert’s',
    'how.subtitle': 'In drei Schritten zum Stadtentdecker.',
    'how.step1.title': 'Öffne die Karte',
    'how.step1.desc':
      'Sieh die Quests um dich herum auf der Karte: lokale Favoriten neben den Klassikern, in 10 Kategorien von Essen bis Drehorten.',
    'how.step2.title': 'Geh zur Quest',
    'how.step2.desc':
      'Mach dich auf den Weg zum Quest-Ort. Jede Quest zeigt dir eine Geschichte oder eine versteckte Ecke der Stadt.',
    'how.step3.title': 'Einchecken & gewinnen',
    'how.step3.desc':
      'Checke vor Ort mit einem Foto ein; sammle Punkte, schalte Abzeichen frei und erweitere deine Sammlung.',

    'features.title': 'Die spielerische Seite des Entdeckens',
    'features.subtitle':
      'Quests machen das Entdecken zum Spiel: Jeder Ort, den du besuchst, bleibt als Punkte, Abzeichen und Erinnerung in deinem Profil.',
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
    'features.lists.title': 'Deine eigenen Listen',
    'features.lists.desc':
      'Speichere die Quests, die du machen willst, lege Listen für jede Stadt an und plane deine Route.',

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
      'Seitengassen und Ecken, die die meisten Reisenden übersehen — die Stadt eine Straße weiter.',
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
    'founder.left': 'Noch {left} von 50 Gründungs-Entdecker-Abzeichen übrig.',
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
      'Für Reisende, die mehr wollen als die Touristenroute und die Lieblingsorte der Einheimischen sehen möchten, und für alle, die ihre eigene Stadt besser kennenlernen wollen.',
    'faq.q5': 'Wofür werden meine Standortdaten verwendet?',
    'faq.a5':
      'Dein Standort wird nur genutzt, um Quests in deiner Nähe anzuzeigen und Check-ins zu bestätigen. Details findest du in unserer Datenschutzerklärung.',
    'faq.q6': 'Was ist das Gründungs-Entdecker-Abzeichen?',
    'faq.a6':
      'Die ersten 50 Personen, die sich bei Roam registrieren, erhalten ein nummeriertes Gründungs-Entdecker-Abzeichen, das für immer in ihrem Profil bleibt: die erste Person bekommt #01, die fünfzigste #50. Nur diese 50 Personen werden es je besitzen. Wer auf der Warteliste steht, erfährt als Erstes vom Launch.',
    'faq.q7': 'Wie werden die Quests ausgewählt?',
    'faq.a7':
      'Jede Quest wird einzeln ausgewählt; es gibt keine automatisch erzeugten Ortslisten. Wir nehmen die Klassiker auf, die alle kennen, aber unser eigentliches Ziel ist, gleich daneben die weniger bekannten Orte zu zeigen, die die Menschen vor Ort lieben. In der App zeigen die Labels „Klassiker“ und „Lokaler Favorit“, was was ist.',
    'faq.q8': 'Kann ich selbst einen Ort vorschlagen?',
    'faq.a8':
      'Ja. Die Vorschlagsfunktion ist fertig und startet bald: Du schlägst einen Ort vor, den du kennst, und nach der Prüfung kommt er als Quest mit deinem Namen auf die Karte. Trag dich in die Warteliste ein, um zu erfahren, wann es losgeht.',

    'city.eyebrow': 'Stadtführer',
    'city.meta.title': '{city} Sehenswürdigkeiten: {n} handverlesene Quests | Roam',
    'city.meta.description':
      '{n} handverlesene Tipps für {city}: berühmte Klassiker und weniger bekannte Lieblingsorte der Einheimischen ({cats}). Jeweils mit Dauer und Schwierigkeit.',
    'city.h1': '{city} entdecken: {n} handverlesene Quests',
    'city.intro':
      'Diese Liste stammt aus den {city}-Quests der Roam-App. Jede Quest ist an einen echten Ort gebunden und wurde einzeln ausgewählt; die wichtigsten Kategorien: {cats}. Unterwegs checkst du in der App ein und sammelst Punkte und Abzeichen.',
    'city.pick.note':
      'Das Label „Lokaler Favorit“ mit Stern markiert weniger bekannte Orte, die Einheimische lieben.',
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
