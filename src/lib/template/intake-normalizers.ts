import {
  estimateDisplayMap,
  faqDisplayMap,
  heroBackgroundMap,
  includedItemsDisplayMap,
  presetBaselineDisplayLabels,
  presetStyleMap,
  processDisplayMap,
  relatedServicesDisplayMap,
  serviceAreaDisplayMap,
  serviceDisplayMap,
  siteStylePresets,
  whenNeededDisplayMap,
  whyChooseDisplayMap,
} from './intake-option-maps';
import type {
  AnyDisplayLabel,
  ClientIntake,
  HeroVariant,
  IntakeSectionPlan,
  LayoutSectionEntry,
  SectionTone,
  ServicePageData,
  SiteStylePresetDefinition,
  SiteStylePresetId,
} from './intake-types';

export const DEFAULT_SITE_PRESET_ID: SiteStylePresetId = 'preset-a-baseline';

const sectionComponentMap: Record<string, string> = {
  hero: 'HeroSection',
  trustBadges: 'TrustBadges',
  services: 'ServicesSection',
  whyChooseUs: 'WhyChooseSection',
  process: 'ProcessSection',
  serviceArea: 'ServiceAreaSection',
  faq: 'FaqSection',
  estimate: 'EstimateCtaSection',
  servicesOverview: 'ServicesSection',
  compareServices: 'CardGridSection',
  whenYouNeedThis: 'ServiceInfoSection',
  whatsIncluded: 'ServiceInfoSection',
  relatedServices: 'RelatedServicesSection',
  beforeYouSubmit: 'CardGridSection',
  companyStory: 'InfoListSection',
  whatHomeownersNeed: 'CardGridSection',
};

export const createIntakeSection = (
  id: string,
  label: string,
  order: number,
  options: Omit<IntakeSectionPlan, 'id' | 'label' | 'order' | 'component'> = { enabled: true },
): IntakeSectionPlan => ({
  id,
  label,
  component: sectionComponentMap[id] ?? 'PageSection',
  order,
  enabled: options.enabled ?? true,
  displayStyle: options.displayStyle,
  contentKey: options.contentKey,
  surfaceTone: options.surfaceTone,
  notes: options.notes,
});

export function resolveSiteStylePreset(intake: ClientIntake): SiteStylePresetDefinition {
  const selectedPresetId = presetStyleMap[intake.brandDirection.presetStyle] ?? DEFAULT_SITE_PRESET_ID;
  return siteStylePresets[selectedPresetId];
}

export function filterSectionOrder(
  sectionOrder: string[],
  sections: Record<string, { enabled: boolean }>,
): string[] {
  return sectionOrder.filter((id) => sections[id]?.enabled !== false);
}

export function normalizeLayout(
  route: string,
  sectionOrder: string[],
  sections: Record<string, { enabled: boolean; displayStyle?: AnyDisplayLabel; intro?: string; heading?: string; supportingText?: string }>,
  surfaceToneById: Record<string, SectionTone | undefined> = {},
): LayoutSectionEntry[] {
  return filterSectionOrder(sectionOrder, sections).map((id, index) => ({
    key: id,
    label: id,
    component: sectionComponentMap[id] ?? 'PageSection',
    enabled: sections[id]?.enabled ?? true,
    required: id === 'hero',
    route,
    order: index + 1,
    prompt: id,
    whyThisMatters: sections[id]?.intro ?? sections[id]?.supportingText,
    affects: sectionComponentMap[id] ?? 'PageSection',
    preset: sections[id]?.displayStyle,
    contentSource: id,
    surfaceTone: surfaceToneById[id],
  }));
}

export function resolveHeroVariant(label?: string): HeroVariant {
  return heroBackgroundMap[label as keyof typeof heroBackgroundMap] ?? 'split-image';
}

export function resolveSectionVariant(label?: AnyDisplayLabel) {
  return {
    services: serviceDisplayMap[label as keyof typeof serviceDisplayMap] ?? 'grid-cards',
    faq: faqDisplayMap[label as keyof typeof faqDisplayMap] ?? 'clean-list',
    process: processDisplayMap[label as keyof typeof processDisplayMap] ?? 'stacked-steps',
    serviceArea: serviceAreaDisplayMap[label as keyof typeof serviceAreaDisplayMap] ?? 'map-card',
    estimate: estimateDisplayMap[label as keyof typeof estimateDisplayMap] ?? 'single-panel',
    relatedServices:
      relatedServicesDisplayMap[label as keyof typeof relatedServicesDisplayMap] ?? 'stacked-buttons',
    whyChoose: whyChooseDisplayMap[label as keyof typeof whyChooseDisplayMap] ?? 'icon-grid',
    whenNeeded: whenNeededDisplayMap[label as keyof typeof whenNeededDisplayMap] ?? 'list',
    included: includedItemsDisplayMap[label as keyof typeof includedItemsDisplayMap] ?? 'stack',
  } as const;
}

export function resolvePresetVariantOverride<TVariant extends string>(
  presetVariant: TVariant,
  intakeLabel: string | undefined,
  baselineLabel: string,
  resolvedVariant: TVariant,
): TVariant {
  if (!intakeLabel || intakeLabel === baselineLabel) {
    return presetVariant;
  }

  return resolvedVariant;
}

export { presetBaselineDisplayLabels };

export function createServicePageData(
  pageId: string,
  slug: string,
  source: {
    cardTitle: string;
    seoTitle: string;
    seoDescription: string;
    heroTitle: string;
    heroIntro: string;
    estimateHeading: string;
    estimateIntro: string;
    servicesOverviewSummary: string;
    includedLayout?: 'stack' | 'grid';
    whenLayout?: 'list' | 'cards';
    whenYouNeedThisService: string[];
    whatsIncluded: Array<string | { title: string; description: string }>;
    processSteps: string[];
    relatedServices: { href: string; label: string }[];
    faq: { question: string; answer: string }[];
    serviceCardSummary: string;
    icon: string;
  },
): ServicePageData {
  return {
    pageId,
    slug,
    cardTitle: source.cardTitle,
    title: source.seoTitle,
    description: source.seoDescription,
    heroTitle: source.heroTitle,
    heroOutlineWords: source.heroTitle.split(' '),
    heroIntro: source.heroIntro,
    estimateHeading: source.estimateHeading,
    estimateIntro: source.estimateIntro,
    servicesOverviewSummary: source.servicesOverviewSummary,
    includedLayout: source.includedLayout,
    whenLayout: source.whenLayout,
    whenYouNeedThisService: [...source.whenYouNeedThisService],
    whatsIncluded: [...source.whatsIncluded],
    processSteps: [...source.processSteps],
    relatedServices: [...source.relatedServices],
    faqs: [...source.faq],
    serviceCardSummary: source.serviceCardSummary,
    icon: source.icon,
  };
}
