/**
 * INTERNAL NORMALIZED TEMPLATE CONFIG
 *
 * Do not start future client work in this file.
 * Edit `src/data/client-intake.ts` first.
 *
 * This file converts the plain-language intake answers into the normalized
 * structure used by the reusable components, thin export layers, and preset system.
 */

import { clientIntake } from './client-intake';

export type ThemePalettePreset = 'parrish-classic' | 'evergreen-premium' | 'coastal-clean';
export type TypographyPreset = 'parrish-default' | 'modern-sans' | 'heritage-serif';
export type BorderPreset = 'layered-angled' | 'straight-clean' | 'soft-panels';
export type HeroVariant = 'split-image' | 'centered' | 'abstract-no-image';
export type ServicesVariant = 'grid-cards' | 'stacked-panels' | 'compact-list';
export type EstimateCtaVariant = 'single-panel' | 'split-content' | 'emphasized-conversion';
export type RelatedServicesVariant = 'stacked-buttons' | 'grid-links' | 'card-links';
export type WhyChooseVariant = 'icon-grid' | 'stacked-panels';
export type ProcessVariant = 'stacked-steps' | 'numbered-cards' | 'timeline';
export type FaqVariant = 'clean-list' | 'card-grid';
export type ServiceAreaVariant = 'map-card' | 'text-first' | 'compact-map';
export type SectionTone = 'base' | 'warm' | 'cool' | 'olive';
export type ButtonStylePreset = 'gradient-pill' | 'soft-solid' | 'quiet-outline';
export type IconStylePreset = 'emoji' | 'badge' | 'minimal-line';
export type SiteStylePresetId =
  | 'preset-a-parrish-baseline'
  | 'preset-b-premium-modern'
  | 'preset-c-local-family-owned'
  | 'preset-d-storm-response-emergency'
  | 'preset-e-upscale-residential';

export interface LayoutSectionEntry {
  key: string;
  label?: string;
  component: string;
  enabled: boolean;
  required?: boolean;
  route: string;
  order: number;
  prompt: string;
  whyThisMatters?: string;
  affects?: string;
  preset?: string;
  contentSource?: string;
  surfaceTone?: SectionTone;
}

export interface VariantOption<TVariant extends string> {
  value: TVariant;
  label: string;
  description: string;
}

export interface SiteStylePresetDefinition {
  id: SiteStylePresetId;
  label: string;
  description: string;
  palettePreset: ThemePalettePreset;
  typographyPreset: TypographyPreset;
  borderPreset: BorderPreset;
  hero: HeroVariant;
  services: ServicesVariant;
  estimateCta: EstimateCtaVariant;
  relatedServices: RelatedServicesVariant;
  whyChoose: WhyChooseVariant;
  process: ProcessVariant;
  faq: FaqVariant;
  serviceArea: ServiceAreaVariant;
  buttonStyle: ButtonStylePreset;
  iconStyle: IconStylePreset;
}

export interface ServiceLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IncludedItem {
  title: string;
  description: string;
}

export interface ServicePageData {
  pageId: string;
  slug: string;
  cardTitle: string;
  title: string;
  description: string;
  heroTitle: string;
  heroOutlineWords?: string[];
  heroIntro: string;
  estimateHeading: string;
  estimateIntro: string;
  servicesOverviewSummary: string;
  includedLayout?: 'stack' | 'grid';
  whenLayout?: 'list' | 'cards';
  whenYouNeedThisService: string[];
  whatsIncluded: Array<string | IncludedItem>;
  processSteps: string[];
  relatedServices: ServiceLink[];
  faqs: FaqItem[];
  serviceCardSummary: string;
  icon: string;
}

export const variantOptions = {
  hero: [
    {
      value: 'split-image',
      label: 'Variant A: Split Image Baseline',
      description: 'Current Parrish live hero. Large right-side decorative media with left-aligned copy.',
    },
    {
      value: 'centered',
      label: 'Variant B: Centered Feature',
      description: 'More centered presentation with a framed content panel and softened image treatment.',
    },
    {
      value: 'abstract-no-image',
      label: 'Variant C: Abstract No-Image',
      description: 'No-photo hero with layered abstract surfaces for cleaner or more editorial brands.',
    },
  ] satisfies ReadonlyArray<VariantOption<HeroVariant>>,
  services: [
    {
      value: 'grid-cards',
      label: 'Variant A: Grid Cards Baseline',
      description: 'Current Parrish live services grid with compact two-column service cards.',
    },
    {
      value: 'stacked-panels',
      label: 'Variant B: Stacked Panels',
      description: 'Full-width service panels with stronger framing and a more premium editorial feel.',
    },
    {
      value: 'compact-list',
      label: 'Variant C: Compact List',
      description: 'Denser service list with smaller icon badges and a tighter comparison-friendly rhythm.',
    },
  ] satisfies ReadonlyArray<VariantOption<ServicesVariant>>,
  estimateCta: [
    {
      value: 'single-panel',
      label: 'Variant A: Single Panel Baseline',
      description: 'Current Parrish live CTA. One centered conversion panel with direct next-step focus.',
    },
    {
      value: 'split-content',
      label: 'Variant B: Split Content',
      description: 'Text-left / action-right composition for clients wanting a stronger directional CTA layout.',
    },
    {
      value: 'emphasized-conversion',
      label: 'Variant C: Emphasized Conversion',
      description: 'More pronounced conversion surface with a stronger highlighted CTA treatment.',
    },
  ] satisfies ReadonlyArray<VariantOption<EstimateCtaVariant>>,
  relatedServices: [
    {
      value: 'stacked-buttons',
      label: 'Variant A: Stacked Buttons Baseline',
      description: 'Current Parrish live related-services layout with centered pill buttons.',
    },
    {
      value: 'grid-links',
      label: 'Variant B: Grid Links',
      description: 'Card-style related service links in a grid for a broader directory feel.',
    },
    {
      value: 'card-links',
      label: 'Variant C: Card Links',
      description: 'Single-column card links with a stronger editorial list treatment.',
    },
  ] satisfies ReadonlyArray<VariantOption<RelatedServicesVariant>>,
} as const;

export const siteStylePresets = {
  'preset-a-parrish-baseline': {
    id: 'preset-a-parrish-baseline',
    label: 'Preset A: Current Parrish Baseline',
    description: 'Matches the live Parrish build. Use this to preserve the current reference implementation.',
    palettePreset: 'parrish-classic',
    typographyPreset: 'parrish-default',
    borderPreset: 'layered-angled',
    hero: 'split-image',
    services: 'grid-cards',
    estimateCta: 'single-panel',
    relatedServices: 'stacked-buttons',
    whyChoose: 'icon-grid',
    process: 'stacked-steps',
    faq: 'clean-list',
    serviceArea: 'map-card',
    buttonStyle: 'gradient-pill',
    iconStyle: 'emoji',
  },
  'preset-b-premium-modern': {
    id: 'preset-b-premium-modern',
    label: 'Preset B: Premium Modern',
    description: 'Designed for cleaner, more contemporary brands with stronger framing and more editorial section composition.',
    palettePreset: 'evergreen-premium',
    typographyPreset: 'modern-sans',
    borderPreset: 'soft-panels',
    hero: 'centered',
    services: 'stacked-panels',
    estimateCta: 'split-content',
    relatedServices: 'card-links',
    whyChoose: 'stacked-panels',
    process: 'timeline',
    faq: 'card-grid',
    serviceArea: 'text-first',
    buttonStyle: 'soft-solid',
    iconStyle: 'badge',
  },
  'preset-c-local-family-owned': {
    id: 'preset-c-local-family-owned',
    label: 'Preset C: Local Family-Owned',
    description: 'A warmer, more approachable mix for community-focused brands that should feel personable and established.',
    palettePreset: 'parrish-classic',
    typographyPreset: 'heritage-serif',
    borderPreset: 'layered-angled',
    hero: 'centered',
    services: 'compact-list',
    estimateCta: 'single-panel',
    relatedServices: 'stacked-buttons',
    whyChoose: 'icon-grid',
    process: 'numbered-cards',
    faq: 'clean-list',
    serviceArea: 'map-card',
    buttonStyle: 'gradient-pill',
    iconStyle: 'emoji',
  },
  'preset-d-storm-response-emergency': {
    id: 'preset-d-storm-response-emergency',
    label: 'Preset D: Storm Response / Emergency',
    description: 'Leans more urgent and operational, with stronger CTA framing and more compact service discovery patterns.',
    palettePreset: 'coastal-clean',
    typographyPreset: 'modern-sans',
    borderPreset: 'straight-clean',
    hero: 'split-image',
    services: 'compact-list',
    estimateCta: 'emphasized-conversion',
    relatedServices: 'grid-links',
    whyChoose: 'stacked-panels',
    process: 'timeline',
    faq: 'clean-list',
    serviceArea: 'compact-map',
    buttonStyle: 'soft-solid',
    iconStyle: 'minimal-line',
  },
  'preset-e-upscale-residential': {
    id: 'preset-e-upscale-residential',
    label: 'Preset E: Upscale Residential',
    description: 'A more polished residential direction with refined framing, premium panels, and cleaner section hierarchy.',
    palettePreset: 'evergreen-premium',
    typographyPreset: 'heritage-serif',
    borderPreset: 'soft-panels',
    hero: 'abstract-no-image',
    services: 'stacked-panels',
    estimateCta: 'split-content',
    relatedServices: 'card-links',
    whyChoose: 'stacked-panels',
    process: 'numbered-cards',
    faq: 'card-grid',
    serviceArea: 'text-first',
    buttonStyle: 'quiet-outline',
    iconStyle: 'badge',
  },
} satisfies Record<SiteStylePresetId, SiteStylePresetDefinition>;

const selectedPreset = siteStylePresets[clientIntake.setup.selectedSitePreset];

const activePresets = {
  hero: clientIntake.globalBrandStyle.activeSectionVariants.hero ?? selectedPreset.hero,
  services: clientIntake.globalBrandStyle.activeSectionVariants.services ?? selectedPreset.services,
  estimateCta: clientIntake.globalBrandStyle.activeSectionVariants.estimateCta ?? selectedPreset.estimateCta,
  relatedServices: clientIntake.globalBrandStyle.activeSectionVariants.relatedServices ?? selectedPreset.relatedServices,
  whyChoose: clientIntake.globalBrandStyle.activeSectionVariants.whyChoose ?? selectedPreset.whyChoose,
  process: clientIntake.globalBrandStyle.activeSectionVariants.process ?? selectedPreset.process,
  faq: clientIntake.globalBrandStyle.activeSectionVariants.faq ?? selectedPreset.faq,
  serviceArea: clientIntake.globalBrandStyle.activeSectionVariants.serviceArea ?? selectedPreset.serviceArea,
  buttonStyle: clientIntake.globalBrandStyle.selectedButtonStyle ?? selectedPreset.buttonStyle,
  iconStyle: clientIntake.globalBrandStyle.selectedIconStyle ?? selectedPreset.iconStyle,
} as const;

function normalizeLayout(
  route: string,
  sections: ReadonlyArray<{
    id: string;
    label: string;
    component: string;
    enabled: boolean;
    order: number;
    variant?: string;
    contentSource?: string;
    surfaceTone?: SectionTone;
    notes?: string;
  }>,
): LayoutSectionEntry[] {
  return sections.map((section) => ({
    key: section.id,
    label: section.label,
    component: section.component,
    enabled: section.enabled,
    required: section.id === 'hero',
    route,
    order: section.order,
    prompt: section.label,
    whyThisMatters: section.notes,
    affects: section.component,
    preset: section.variant,
    contentSource: section.contentSource,
    surfaceTone: section.surfaceTone,
  }));
}

function createServicePageData(
  pageId: string,
  slug: string,
  source: typeof clientIntake.treeRemovalPage,
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

export const clientQuestionnaire = {
  questionnaireMeta: {
    mainFileLabel: 'Primary Client Onboarding Questionnaire',
    templateName: 'Reusable Tree Service Website Template',
    referenceClient: clientIntake.setup.referenceImplementation,
    note:
      'Parrish is the reference implementation. Keep these defaults if you want the current Parrish live design/output unchanged.',
    selectedSitePreset: clientIntake.setup.selectedSitePreset,
  },
  presetLibrary: siteStylePresets,
  variantLibrary: variantOptions,
  business: {
    businessName: clientIntake.globalBusinessInfo.businessName,
    siteName: clientIntake.globalBusinessInfo.siteName,
    primaryLocation: clientIntake.globalBusinessInfo.primaryLocation,
    state: clientIntake.globalBusinessInfo.state,
    phone: {
      display: clientIntake.globalBusinessInfo.phoneDisplay,
      href: clientIntake.globalBusinessInfo.phoneHref,
    },
    email: clientIntake.globalBusinessInfo.email,
    hours: clientIntake.globalBusinessInfo.hours,
    serviceAreas: clientIntake.globalBusinessInfo.serviceAreas,
    serviceAreaCopy: clientIntake.globalBusinessInfo.serviceAreaCopy,
  },
  branding: {
    identity: {
      mark: clientIntake.globalBrandStyle.identityMark,
    },
    assets: clientIntake.globalBrandStyle.assetPaths,
    palettePreset: clientIntake.globalBrandStyle.selectedThemePalette,
    typographyPreset: clientIntake.globalBrandStyle.selectedTypographyPreset,
    borderPreset: clientIntake.globalBrandStyle.selectedBorderPreset,
    colors: clientIntake.globalBrandStyle.colorOverrides,
    styleControls: clientIntake.globalBrandStyle.styleControls,
  },
  presets: activePresets,
  ctas: clientIntake.sharedSiteCopy.ctas,
  trust: {
    trustBadges: clientIntake.sharedSiteCopy.trustBadges,
  },
  services: {
    treeRemoval: createServicePageData('tree-removal', 'tree-removal', clientIntake.treeRemovalPage),
    treeTrimming: createServicePageData('tree-trimming', 'tree-trimming', clientIntake.treeTrimmingPage),
    stumpGrinding: createServicePageData('stump-grinding', 'stump-grinding', clientIntake.stumpGrindingPage),
    stormCleanup: createServicePageData('emergency-tree-service', 'emergency-tree-service', clientIntake.stormCleanupPage),
  },
  pages: {
    home: {
      route: clientIntake.homepage.route,
      title: clientIntake.homepage.seoTitle,
      description: clientIntake.homepage.seoDescription,
      hero: clientIntake.homepage.hero,
      trustBadges: clientIntake.sharedSiteCopy.trustBadges,
      servicesLead: clientIntake.homepage.servicesLead,
      estimateCta: clientIntake.homepage.estimateCta,
      faq: clientIntake.homepage.faq,
      modal: clientIntake.homepage.estimateModal,
      layout: normalizeLayout(clientIntake.homepage.route, clientIntake.homepage.sections),
    },
    services: {
      route: clientIntake.servicesPage.route,
      title: clientIntake.servicesPage.seoTitle,
      description: clientIntake.servicesPage.seoDescription,
      hero: clientIntake.servicesPage.hero,
      compareCards: clientIntake.servicesPage.compareCards,
      estimateTips: clientIntake.servicesPage.estimateTips,
      estimateForm: clientIntake.servicesPage.estimateForm,
      layout: normalizeLayout(clientIntake.servicesPage.route, clientIntake.servicesPage.sections),
    },
    about: {
      route: clientIntake.aboutPage.route,
      title: clientIntake.aboutPage.seoTitle,
      description: clientIntake.aboutPage.seoDescription,
      hero: clientIntake.aboutPage.hero,
      homeownerNeeds: clientIntake.aboutPage.homeownerNeeds,
      howRequestsWork: clientIntake.aboutPage.howRequestsWork,
      layout: normalizeLayout(clientIntake.aboutPage.route, clientIntake.aboutPage.sections),
    },
    contact: {
      route: clientIntake.contactPage.route,
      title: clientIntake.contactPage.seoTitle,
      description: clientIntake.contactPage.seoDescription,
      hero: clientIntake.contactPage.hero,
      beforeYouSubmit: clientIntake.contactPage.beforeYouSubmit,
      estimateForm: clientIntake.contactPage.estimateForm,
      layout: normalizeLayout(clientIntake.contactPage.route, clientIntake.contactPage.sections),
    },
    serviceDetailTemplate: {
      route: '/:service-slug',
      layout: normalizeLayout('/:service-slug', clientIntake.treeRemovalPage.sections),
    },
  },
  form: {
    action: clientIntake.productionForm.action,
    phpFlowNote: clientIntake.productionForm.note,
  },
  social: clientIntake.socialLinks,
} as const;

export const templateConfig = clientQuestionnaire;
