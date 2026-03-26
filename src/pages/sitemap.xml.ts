import { client } from '../data/client';
import { servicePages } from '../data/services';

export function GET() {
  const siteUrl = `https://${client.websiteDomain}`;
  const urls = [
    '/',
    '/services',
    '/about',
    '/contact',
    ...Object.values(servicePages).map((service) => `/${service.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => `  <url><loc>${new URL(path, siteUrl).toString()}</loc></url>`)
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
