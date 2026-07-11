import { getCollection, type CollectionEntry } from 'astro:content';
import { type Locale, locales, defaultLocale, localePath } from '../i18n/ui';

export type BlogPost = CollectionEntry<'blog'>;

/** Yazının dili — dosya yolundan (tr/..., en/..., es/..., de/...) türetilir. */
export function postLocale(post: BlogPost): Locale {
  const prefix = post.id.split('/')[0] as Locale;
  return locales.includes(prefix) ? prefix : defaultLocale;
}

/** URL slug'ı: id'den dil önekini at. Örn 'tr/istanbul-rotasi' → 'istanbul-rotasi' */
export function postSlug(post: BlogPost): string {
  return post.id.replace(new RegExp(`^(${locales.join('|')})/`), '');
}

/** Yazının tam yolu. TR: /blog/slug — EN: /en/blog/slug */
export function postPath(post: BlogPost): string {
  return localePath(postLocale(post), `/blog/${postSlug(post)}`);
}

/** Bir dilin yayımlanmış yazıları, yeniden eskiye sıralı. */
export async function getPublishedPosts(locale: Locale): Promise<BlogPost[]> {
  const posts = await getCollection(
    'blog',
    (post) => postLocale(post) === locale && !post.data.draft,
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** translationKey üzerinden yazının diğer dillerdeki karşılıklarını bulur (hreflang için). */
export async function findTranslations(post: BlogPost): Promise<BlogPost[]> {
  if (!post.data.translationKey) return [];
  const own = postLocale(post);
  const all = await getCollection(
    'blog',
    (p) =>
      !p.data.draft &&
      p.data.translationKey === post.data.translationKey &&
      postLocale(p) !== own,
  );
  return all;
}

/** Kaba okuma süresi (dk) — 200 kelime/dk. */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Tarihi locale'e göre biçimlendirir. */
const dateLocales: Record<Locale, string> = {
  tr: 'tr-TR',
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
};

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(dateLocales[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
