import type { APIContext } from 'astro';

// robots.txt — sitemap adresi SITE_URL'den türetilir; domain değişince otomatik güncellenir.
export function GET(context: APIContext) {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', context.site)}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
