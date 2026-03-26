import { getImage } from 'astro:assets';
import { brand } from '../../data/brand';
import { heroImageTransform } from '../../data/heroMedia';
import { resolveConfiguredImageAsset } from '../template/runtime-assets';

export async function getHeroCriticalImage() {
  const heroImage = resolveConfiguredImageAsset(brand.assets.heroImage);
  const transformed = await getImage({
    src: heroImage,
    width: 800,
    height: 480,
    format: heroImageTransform.format,
    quality: heroImageTransform.quality,
    widths: heroImageTransform.widths,
    sizes: heroImageTransform.sizes,
  });

  return {
    src: transformed.src,
    srcSet: transformed.srcSet.attribute,
    sizes: heroImageTransform.sizes,
    type: 'image/avif',
  };
}
