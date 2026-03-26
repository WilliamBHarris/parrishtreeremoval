import { client } from '../data/client';

export function GET() {
  const siteUrl = `https://${client.websiteDomain}`;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
