/**
 * THIN EXPORT / COMPATIBILITY LAYER
 *
 * Do not start new client setup here.
 * Edit `src/data/client-intake.ts` first.
 */
import { templateConfig } from './client-questionnaire';

export const brand = {
  identity: templateConfig.branding.identity,
  assets: templateConfig.branding.assets,
  colors: templateConfig.branding.colors,
  presets: {
    palette: templateConfig.branding.palettePreset,
    typography: templateConfig.branding.typographyPreset,
    border: templateConfig.branding.borderPreset,
  },
  styleControls: templateConfig.branding.styleControls,
} as const;
