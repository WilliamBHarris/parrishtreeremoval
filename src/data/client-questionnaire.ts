/**
 * INTERNAL NORMALIZED TEMPLATE CONFIG
 *
 * Do not start future client work in this file.
 * Edit `src/data/client-intake.ts` first.
 *
 * This file now acts as the stable compatibility layer between the human-facing
 * intake worksheet and the reusable components that still import
 * `templateConfig` and related types from here.
 */

import { buildSiteConfig } from '../lib/template/build-site-config';
import { siteStylePresets, variantOptions } from '../lib/template/intake-option-maps';
import { clientIntake } from './client-intake';

export type {
  BorderPreset,
  ButtonStylePreset,
  EstimateCtaVariant,
  FaqItem,
  FaqVariant,
  HeroVariant,
  IconStylePreset,
  IncludedItem,
  LayoutSectionEntry,
  ProcessVariant,
  RelatedServicesVariant,
  SectionTone,
  ServiceAreaVariant,
  ServiceLink,
  ServicePageData,
  ServicesVariant,
  SiteStylePresetDefinition,
  SiteStylePresetId,
  TemplateConfig,
  ThemePalettePreset,
  TypographyPreset,
  VariantOption,
  WhyChooseVariant,
} from '../lib/template/intake-types';

export { siteStylePresets, variantOptions };

export const clientQuestionnaire = buildSiteConfig(clientIntake);
export const templateConfig = clientQuestionnaire;
