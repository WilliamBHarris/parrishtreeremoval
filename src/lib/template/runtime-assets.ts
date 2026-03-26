import type { ImageMetadata } from 'astro';

const assetModules = import.meta.glob('../../assets/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF,svg,SVG}', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

const assetByBasename = new Map<string, ImageMetadata>();

for (const [modulePath, asset] of Object.entries(assetModules)) {
  const basename = modulePath.split('/').pop()?.toLowerCase();
  if (basename) {
    assetByBasename.set(basename, asset);
  }
}

export function resolveConfiguredAsset(assetPath: string): ImageMetadata | string {
  if (assetPath.startsWith('/')) {
    return assetPath;
  }

  const basename = assetPath.split('/').pop()?.toLowerCase();
  if (!basename) {
    return assetPath;
  }

  return assetByBasename.get(basename) ?? assetPath;
}

export function resolveConfiguredImageAsset(assetPath: string): ImageMetadata {
  const resolved = resolveConfiguredAsset(assetPath);

  if (typeof resolved === 'string') {
    throw new Error(`Expected an image asset import for "${assetPath}", but resolved to a string path.`);
  }

  return resolved;
}
