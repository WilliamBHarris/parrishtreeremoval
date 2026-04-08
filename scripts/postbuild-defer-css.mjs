import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));

function walk(dir, matcher) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, matcher);
      continue;
    }
    matcher(fullPath);
  }
}

const stylesheetPattern = /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g;

walk(distDir, (filePath) => {
  if (!filePath.endsWith('.html')) return;
  const html = fs.readFileSync(filePath, 'utf8');
  const rewritten = html.replace(stylesheetPattern, (_match, href) => {
    return `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
  });
  if (rewritten !== html) {
    fs.writeFileSync(filePath, rewritten);
  }
});
