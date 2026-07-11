import { getCollection, type CollectionEntry } from 'astro:content';
import { type Locale, localePath } from '../i18n/ui';

export type BlogPost = CollectionEntry<'blog'>;

/** Yazının dili — dosya yolundan (tr/... veya en/...) türetilir. */
export function postLocale(post: BlogPost): Locale {
  return post.id.startsWith('en/') ? 'en' : 'tr';
}

/** URL slug'ı: id'den dil önekini at. Örn 'tr/istanbul-rotasi' → 'istanbul-rotasi' */
export function postSlug(post: BlogPost): string {
  return post.id.replace(/^(tr|en)\//, '');
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

/** translationKey üzerinden yazının diğer dildeki karşılığını bulur (hreflang için). */
export async function findTranslation(post: BlogPost): Promise<BlogPost | undefined> {
  if (!post.data.translationKey) return undefined;
  const other: Locale = postLocale(post) === 'tr' ? 'en' : 'tr';
  const candidates = await getPublishedPosts(other);
  return candidates.find((p) => p.data.translationKey === post.data.translationKey);
}

/** Kaba okuma süresi (dk) — 200 kelime/dk. */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Tarihi locale'e göre biçimlendirir. */
export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
