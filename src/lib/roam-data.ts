// Şehir sayfalarının veri katmanı — görevler build anında Roam'un Supabase'inden çekilir.
//
// Neden build anında: uygulamaya eklenen her görev, bir sonraki deploy'da web'de de
// görünür; elle kopyalama yok. Kaynak, uygulamanın kendi editoryal içeriği (elle
// seçilmiş görevler + 4 dil çevirisi); yapay zekâ ile sıfırdan metin üretilmez.
//
// Kurallar:
// - Yalnızca is_active = true VE is_curated = true görevler web'e çıkar
//   (test görevleri ve henüz onaylanmamış öneriler dışarıda kalır).
// - Bir dilde çevirisi olmayan görev o dilin sayfasına girmez (karışık dil yok).
// - O dilde MIN_CITY_QUESTS'ten az görevi olan şehrin sayfası hiç üretilmez
//   (zayıf/ince sayfa = Google'da "değer katmayan toplu sayfa" riski).
// - Supabase'e ulaşılamazsa build HATA verir; Cloudflare eski sürümü yayında tutar.
//   Böylece şehir sayfaları sessizce kaybolmaz.
import { readFile } from 'node:fs/promises';
import { type Locale, type UIKey, localePath } from '../i18n/ui';
import { CITIES, MIN_CITY_QUESTS } from '../consts.js';

interface TranslationRow {
  lang: string;
  title: string;
  short: string | null;
  description: string | null;
  best_time_note: string | null;
  duration_label: string | null;
}

interface QuestRow {
  id: string;
  city_id: string;
  title: string;
  short: string | null;
  description: string | null;
  difficulty: string | null;
  base_points: number | null;
  duration_label: string | null;
  best_time_note: string | null;
  lat: number | null;
  lng: number | null;
  start_lat: number | null;
  start_lng: number | null;
  neighborhood_id: string | null;
  categories: { category_id: string; is_primary: boolean }[];
  translations: TranslationRow[];
}

interface CityRow {
  id: string;
  name: string;
  lat: number;
  lng: number;
  sort_order: number | null;
  country: { id: string; name: string; emoji_flag: string | null } | null;
}

interface NeighborhoodRow {
  id: string;
  name: string;
  city_id: string;
}

interface RoamData {
  cities: CityRow[];
  neighborhoods: NeighborhoodRow[];
  quests: QuestRow[];
}

/** Uygulamadaki kategoriler → sitedeki etiket anahtarı, ikon ve renk. */
export const CATEGORY_META: Record<string, { label: UIKey; icon: string; color: string }> = {
  gastronomy: { label: 'categories.gastronomy', icon: '/gastronomy.svg', color: '#E2725B' },
  scenery: { label: 'categories.scenery', icon: '/scenery.svg', color: '#F4A261' },
  nature: { label: 'categories.nature', icon: '/nature.svg', color: '#2A9D8F' },
  craft: { label: 'categories.craft', icon: '/craft.svg', color: '#A0522D' },
  nightlife: { label: 'categories.nightlife', icon: '/nightlife.svg', color: '#6A0DAD' },
  hidden: { label: 'categories.hidden', icon: '/hidden.svg', color: '#3D5A80' },
  heritage: { label: 'categories.heritage', icon: '/famous.svg', color: '#B08968' },
  adventure: { label: 'categories.adventure', icon: '/adventure.svg', color: '#D62828' },
  movie: { label: 'categories.movie', icon: '/movie.svg', color: '#264653' },
  'holy-route': { label: 'categories.holyroute', icon: '/holyroute.svg', color: '#8D99AE' },
};

/** Kategorisi olmayan görevler bu gruba düşer. */
export const OTHER_CATEGORY = 'other';

export interface LocalQuest {
  id: string;
  title: string;
  short: string;
  description: string;
  bestTime: string | null;
  duration: string | null;
  difficulty: 'easy' | 'mid' | 'hard' | null;
  points: number | null;
  lat: number | null;
  lng: number | null;
  neighborhood: string | null;
  category: string;
}

export interface CityPageData {
  slug: string;
  /** Şehrin bu dildeki adı (Tokio, Estambul…) */
  name: string;
  /** Türkçe bulunma hâli (İstanbul'da, Bangkok'ta); diğer dillerde ad ile aynı. */
  inCity: string;
  flag: string;
  quests: LocalQuest[];
  /** Kategoriye göre gruplanmış görevler, kalabalıktan aza. */
  groups: { category: string; quests: LocalQuest[] }[];
}

// ── Veri yükleme ────────────────────────────────────────────────────────────

let cache: Promise<RoamData | null> | undefined;

function loadRoamData(): Promise<RoamData | null> {
  return (cache ??= fetchRoamData());
}

async function fetchRoamData(): Promise<RoamData | null> {
  // Yalnızca yerel test için: gerçek ağ yerine JSON dosyasından oku.
  const fixture = process.env.ROAM_DATA_FIXTURE;
  if (fixture) return JSON.parse(await readFile(fixture, 'utf-8')) as RoamData;

  try {
    return await fetchFromSupabase();
  } catch (err) {
    // `npm run dev` sırasında internet/ayar sorunu tüm siteyi kilitlemesin:
    // uyarı ver, şehir sayfaları olmadan devam et. Build'de (Cloudflare) ise dur.
    if (import.meta.env.DEV) {
      console.warn(`${(err as Error).message}\n[roam] Geliştirme modu: şehir sayfaları olmadan devam ediliyor.`);
      return null;
    }
    throw err;
  }
}

async function fetchFromSupabase(): Promise<RoamData | null> {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn('[roam] PUBLIC_SUPABASE_URL / ANON_KEY yok — şehir sayfaları üretilmedi.');
    return null;
  }
  if (/X{3,}/.test(url) || /X{3,}/.test(key)) {
    throw new Error(
      '[roam] .env içindeki PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY hâlâ .env.example\'daki ' +
        'örnek değer (XXXX). Gerçek proje adresini ve anahtarını yaz.',
    );
  }

  const get = async <T>(path: string): Promise<T> => {
    let res: Response;
    try {
      res = await fetch(`${url}/rest/v1/${path}`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
      });
    } catch (err) {
      // Node'un "fetch failed" mesajı tek başına bir şey söylemez; asıl neden cause içinde
      // (ENOTFOUND = adres yanlış, ECONNREFUSED/ETIMEDOUT = ağ, *CERT* = antivirüs/proxy sertifikası).
      const cause = (err as { cause?: { code?: string; message?: string } }).cause;
      const reason = cause?.code ?? cause?.message ?? (err as Error).message;
      throw new Error(
        `[roam] Supabase'e ulaşılamadı: ${new URL(url).host} (${reason}). ` +
          'Build bilerek durduruldu; yayındaki sürüm değişmez.',
      );
    }
    if (!res.ok) {
      throw new Error(
        `[roam] Supabase isteği başarısız (${res.status}) — ${path.split('?')[0]}. ` +
          'Proje duraklatılmış olabilir; build bilerek durduruldu.',
      );
    }
    return (await res.json()) as T;
  };

  const [cities, neighborhoods, quests] = await Promise.all([
    get<CityRow[]>(
      'cities?select=id,name,lat,lng,sort_order,country:countries(id,name,emoji_flag)' +
        '&is_active=eq.true&order=sort_order.asc',
    ),
    get<NeighborhoodRow[]>('neighborhoods?select=id,name,city_id'),
    get<QuestRow[]>(
      'quests?select=id,city_id,title,short,description,difficulty,base_points,duration_label,' +
        'best_time_note,lat,lng,start_lat,start_lng,neighborhood_id,' +
        'categories:quest_categories(category_id,is_primary),' +
        'translations:quest_translations(lang,title,short,description,best_time_note,duration_label)' +
        '&is_active=eq.true&is_curated=eq.true&order=created_at.asc,id.asc',
    ),
  ]);

  return { cities, neighborhoods, quests };
}

// ── Yardımcılar ─────────────────────────────────────────────────────────────

const SEGMENTS: Record<Locale, string> = {
  tr: 'sehir',
  en: 'cities',
  es: 'ciudades',
  de: 'staedte',
};

/** Şehir sayfasının yolu: /sehir/tokyo/, /en/cities/tokyo/ … */
export function cityPath(locale: Locale, slug: string): string {
  return localePath(locale, `/${SEGMENTS[locale]}/${slug}/`);
}

/**
 * Türkçe bulunma eki: Tokyo'da, İstanbul'da, Bali'de, Bangkok'ta, Phuket'te.
 * Son ünlüye göre -da/-de, sert ünsüzle bitiyorsa -ta/-te.
 */
export function trLocative(name: string): string {
  const lower = name.toLocaleLowerCase('tr');
  const vowels = [...lower].filter((ch) => 'aıoueiöü'.includes(ch));
  const last = vowels.at(-1) ?? 'a';
  const back = 'aıou'.includes(last);
  const hard = 'çfhkpsşt'.includes(lower.at(-1) ?? '');
  return `${name}'${hard ? 't' : 'd'}${back ? 'a' : 'e'}`;
}

function localizeQuest(
  q: QuestRow,
  locale: Locale,
  neighborhoods: Map<string, string>,
): LocalQuest | null {
  // Ana metin İngilizce; diğer dillerde çeviri yoksa görev o sayfaya girmez.
  const tr = q.translations.find((t) => t.lang === locale);
  if (locale !== 'en' && !tr) return null;
  const src = tr ?? q;
  if (!src.title || !src.short) return null;

  const primary = q.categories.find((c) => c.is_primary) ?? q.categories[0];
  const category = primary && CATEGORY_META[primary.category_id] ? primary.category_id : OTHER_CATEGORY;
  const difficulty = (['easy', 'mid', 'hard'] as const).find((d) => d === q.difficulty) ?? null;

  return {
    id: q.id,
    title: src.title,
    short: src.short,
    description: src.description ?? '',
    bestTime: src.best_time_note || null,
    duration: src.duration_label || q.duration_label || null,
    difficulty,
    points: q.base_points,
    lat: q.lat ?? q.start_lat,
    lng: q.lng ?? q.start_lng,
    neighborhood: q.neighborhood_id ? (neighborhoods.get(q.neighborhood_id) ?? null) : null,
    category,
  };
}

const pageCache = new Map<Locale, Promise<CityPageData[]>>();

/** Bir dilde sayfası üretilecek şehirler, görev sayısına göre çoktan aza. */
export function getCityPages(locale: Locale): Promise<CityPageData[]> {
  let pages = pageCache.get(locale);
  if (!pages) {
    pages = buildCityPages(locale);
    pageCache.set(locale, pages);
  }
  return pages;
}

async function buildCityPages(locale: Locale): Promise<CityPageData[]> {
  const data = await loadRoamData();
  if (!data) return [];

  const neighborhoods = new Map(data.neighborhoods.map((n) => [n.id, n.name]));
  const categoryOrder = Object.keys(CATEGORY_META);
  const pages: CityPageData[] = [];

  for (const city of data.cities) {
    const quests = data.quests
      .filter((q) => q.city_id === city.id)
      .map((q) => localizeQuest(q, locale, neighborhoods))
      .filter((q): q is LocalQuest => q !== null);
    if (quests.length < MIN_CITY_QUESTS) continue;

    const byCategory = new Map<string, LocalQuest[]>();
    for (const q of quests) byCategory.set(q.category, [...(byCategory.get(q.category) ?? []), q]);
    const groups = [...byCategory.entries()]
      .map(([category, list]) => ({ category, quests: list }))
      .sort(
        (a, b) =>
          Number(a.category === OTHER_CATEGORY) - Number(b.category === OTHER_CATEGORY) ||
          b.quests.length - a.quests.length ||
          categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category),
      );

    const meta = CITIES.find((c) => c.id === city.id);
    const name = meta?.[locale] ?? city.name;
    pages.push({
      slug: city.id,
      name,
      inCity: locale === 'tr' ? trLocative(name) : name,
      flag: city.country?.emoji_flag ?? meta?.flag ?? '',
      quests,
      groups,
    });
  }

  return pages.sort((a, b) => b.quests.length - a.quests.length);
}

/** Bir şehrin sayfası olan dillerdeki karşılıkları (hreflang + dil değiştirici). */
export async function cityTranslations(slug: string): Promise<Partial<Record<Locale, string>>> {
  const result: Partial<Record<Locale, string>> = {};
  for (const locale of Object.keys(SEGMENTS) as Locale[]) {
    const pages = await getCityPages(locale);
    if (pages.some((p) => p.slug === slug)) result[locale] = cityPath(locale, slug);
  }
  return result;
}
