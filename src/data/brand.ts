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
    colorTemplate: templateConfig.branding.colorTemplate,
    typography: templateConfig.branding.typographyPreset,
    border: templateConfig.branding.borderPreset,
    headerVariant: templateConfig.presets.header,
    headingTypography: templateConfig.branding.headingTypography,
    bodyTypography: templateConfig.branding.bodyTypography,
    sectionTitleStyle: templateConfig.branding.sectionTitleStyle,
    cardSurface: templateConfig.branding.cardSurface,
    cardBorderStyle: templateConfig.branding.cardBorderStyle,
    buttonBorderStyle: templateConfig.branding.buttonBorderStyle,
    sectionFrameStyle: templateConfig.branding.sectionFrameStyle,
  },
  styleControls: templateConfig.branding.styleControls,
} as const;
