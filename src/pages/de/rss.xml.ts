import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_NAME } from '../../consts.js';
import { ui } from '../../i18n/ui';
import { getPublishedPosts, postPath } from '../../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts('de');
  return rss({
    title: `${SITE_NAME} Blog`,
    description: ui.de['blog.description'],
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
    })),
    customData: '<language>de</language>',
  });
}
