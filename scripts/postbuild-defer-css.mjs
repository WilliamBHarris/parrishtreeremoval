import { readdir, readFile, writeFile } from 'node:fs/promises';

const distDir = new URL('../dist/', import.meta.url);

async function collectHtmlFiles(dirUrl, collected = []) {
  const entries = await readdir(dirUrl, { withFileTypes: true });
  for (const entry of entries) {
    const entryUrl = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, dirUrl);
    if (entry.isDirectory()) {
      await collectHtmlFiles(entryUrl, collected);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      collected.push(entryUrl);
    }
  }
  return collected;
}

function deferStylesheets(html) {
  const noscriptBlocks = [];
  const protectedHtml = html.replace(/<noscript>[\s\S]*?<\/noscript>/g, (block) => {
    const token = `__NOSCRIPT_BLOCK_${noscriptBlocks.length}__`;
    noscriptBlocks.push(block);
    return token;
  });

  const deferredHtml = protectedHtml.replace(
    /<link rel="stylesheet" href="([^"]+)"(?![^>]*media=)(?![^>]*onload=)\s*>/g,
    (_match, href) =>
      `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`
  );

  return deferredHtml.replace(/__NOSCRIPT_BLOCK_(\d+)__/g, (_match, index) => noscriptBlocks[Number(index)] ?? '');
}

const htmlFiles = await collectHtmlFiles(distDir);

await Promise.all(
  htmlFiles.map(async (fileUrl) => {
    const html = await readFile(fileUrl, 'utf8');
    const updated = deferStylesheets(html);
    if (updated !== html) {
      await writeFile(fileUrl, updated, 'utf8');
    }
  })
);

console.log(`Deferred non-critical stylesheets in ${htmlFiles.length} HTML files.`);
