/**
 * CLIENT QUESTIONNAIRE / BUILD SHEET
 *
 * This is the main file to edit when setting up a new tree-service client.
 * Treat it like a guided onboarding questionnaire, not just a raw config dump.
 *
 * Parrish Tree Removal is the live reference implementation.
 * If you want the current Parrish site to remain visually unchanged, keep:
 * - `selectedSitePreset` on Preset A
 * - the active variant selections aligned with Preset A
 * - the current page layout order untouched
 */

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

export const clientQuestionnaire = {
  // QUESTION:
  // Which preset should this site start from?
  // WHY THIS MATTERS:
  // This sets the overall visual direction for future client builds.
  // Preset A is the live Parrish baseline and keeps the current site appearance intact.
  // AFFECTS:
  // Section variants, palette preset, typography preset, border treatment, button style, and icon style.
  // EXAMPLE:
  // 'preset-a-parrish-baseline'
  questionnaireMeta: {
    mainFileLabel: 'Primary Client Onboarding Questionnaire',
    templateName: 'Reusable Tree Service Website Template',
    referenceClient: 'Parrish Tree Removal',
    note:
      'Parrish is the reference implementation. Keep these defaults if you want the current Parrish live design/output unchanged.',
    selectedSitePreset: 'preset-a-parrish-baseline' as SiteStylePresetId,
  },
  presetLibrary: siteStylePresets,
  variantLibrary: variantOptions,

  // QUESTION:
  // What is the business called, where is it located, and how should visitors contact it?
  // WHY THIS MATTERS:
  // This powers the visible business identity, contact blocks, service-area references, schema inputs, and form-related content.
  // AFFECTS:
  // Header, footer, contact details, service area messaging, SEO/schema exports, and CTA copy references.
  // EXAMPLE:
  // businessName: 'Parrish Tree Removal'
  business: {
    businessName: 'Parrish Tree Removal',
    siteName: 'Parrish Tree Removal',
    primaryLocation: 'Parrish, FL',
    state: 'Florida',
    phone: {
      display: '(800) 555-0199',
      href: '+18005550199',
    },
    email: 'parrishtreeremoval@gmail.com',
    hours: {
      mondayFriday: 'Mon-Fri 8:00 AM - 6:00 PM',
      saturday: 'Sat 9:00 AM - 2:00 PM',
    },
    serviceAreas: ['Parrish, FL', 'Bradenton, FL', 'Palmetto, FL', 'Lakewood Ranch, FL'],
    serviceAreaCopy:
      'Parrish Tree Removal serves homeowners in Parrish, FL and nearby communities, including Palmetto, Ellenton, Bradenton, and Lakewood Ranch when the project fits the service area.',
  },

  // QUESTION:
  // What should the brand look and feel like?
  // WHY THIS MATTERS:
  // These answers control the palette tokens, asset references, border language, and the stylistic preset selections future clients will notice first.
  // AFFECTS:
  // Global CSS tokens, favicons, OG image, service-area map art, and reusable section presets.
  // EXAMPLE:
  // palettePreset: 'parrish-classic'
  branding: {
    identity: {
      mark: 'PTR',
    },
    assets: {
      heroImage: '../assets/hero-image.png',
      ogImage: '/images/parrish-service-area-map.svg',
      serviceAreaMap: '/images/parrish-service-area-map.svg',
      faviconSvg: '/favicon.svg',
      faviconIco: '/favicon.ico',
    },
    palettePreset: 'parrish-classic' as ThemePalettePreset,
    typographyPreset: 'parrish-default' as TypographyPreset,
    borderPreset: 'layered-angled' as BorderPreset,
    colors: {
      primary: '#0F2143',
      secondary: '#43572E',
      accent: '#354E56',
      highlight: '#8B6212',
      pageBg: '#182533',
      pageBgSoft: '#223241',
      surface: '#f7f2ea',
      surfaceSoft: '#ebe4d8',
      text: '#24303a',
      textSoft: '#4e5c61',
      heading: '#0f2143',
      line: 'rgba(15, 33, 67, 0.12)',
      lineStrong: 'rgba(15, 33, 67, 0.2)',
      overlay: 'rgba(15, 33, 67, 0.18)',
      buttonTop: '#0F2143',
      buttonBottom: '#354E56',
      accentTop: '#43572E',
      accentBottom: '#354E56',
      themeColor: '#0F2143',
    },
    styleControls: {
      borderRadius: 'medium',
      overlayStrength: 'medium',
      elevationStrength: 'medium',
    },
  },

  // QUESTION:
  // Which visual variant should each major reusable section use?
  // WHY THIS MATTERS:
  // This is the live active variant selection layer. Parrish should remain on Variant A choices unless you intentionally want a different look.
  // AFFECTS:
  // HeroSection, ServicesSection, EstimateCtaSection, RelatedServicesSection, WhyChooseSection, ProcessSection, FAQ, and Service Area.
  // EXAMPLE:
  // hero: 'split-image'
  presets: {
    hero: 'split-image' as HeroVariant,
    services: 'grid-cards' as ServicesVariant,
    estimateCta: 'single-panel' as EstimateCtaVariant,
    relatedServices: 'stacked-buttons' as RelatedServicesVariant,
    whyChoose: 'icon-grid' as WhyChooseVariant,
    process: 'stacked-steps' as ProcessVariant,
    faq: 'clean-list' as FaqVariant,
    serviceArea: 'map-card' as ServiceAreaVariant,
    buttonStyle: 'gradient-pill',
    iconStyle: 'emoji',
  },

  // QUESTION:
  // What should the primary CTA labels say throughout the site?
  // WHY THIS MATTERS:
  // These are the conversion phrases people will see in heroes, forms, and supporting prompts.
  // AFFECTS:
  // Buttons, estimate forms, modal labels, and supporting CTA copy.
  // EXAMPLE:
  // heroEstimate: 'Free Estimate'
  ctas: {
    heroEstimate: 'Free Estimate',
    homepageEstimate: 'Get Free Estimate',
    submitEstimate: 'Submit Free Estimate',
    requestEstimate: 'Request A Free Estimate',
    sendEstimate: 'Send Estimate Request',
    backToTop: 'Back to Top',
  },

  // QUESTION:
  // Which short trust signals should appear near the top of the site?
  // WHY THIS MATTERS:
  // These items support conversion and local-business credibility with concise reassurance copy.
  // AFFECTS:
  // Homepage trust badges only.
  // EXAMPLE:
  // ['Locally focused service', 'Prompt communication']
  trust: {
    trustBadges: [
      'Locally focused service',
      'Prompt communication',
      'Residential tree work',
      'Clean project follow-through',
    ],
  },

  // QUESTION:
  // Which services are offered, and what should each service page say?
  // WHY THIS MATTERS:
  // These entries power the service cards, service pages, related links, FAQs, and service-detail conversion sections.
  // AFFECTS:
  // Service pages, services grids, estimate copy, FAQs, related services, and hero text for service-detail routes.
  // EXAMPLE:
  // services.treeRemoval.heroTitle = 'Tree Removal'
  services: {
    treeRemoval: {
      pageId: 'tree-removal',
      slug: 'tree-removal',
      cardTitle: 'Tree Removal',
      title: 'Tree Removal in Parrish, FL | Parrish Tree Removal',
      description:
        'Tree removal in Parrish, FL for damaged, hazardous, overgrown, or unwanted trees around homes, driveways, and structures.',
      heroTitle: 'Tree Removal',
      heroIntro: 'Removal for unsafe or unwanted trees.',
      estimateHeading: 'Free tree removal estimate',
      estimateIntro:
        'Share the tree location, nearby structures, and any urgency so we can review the removal and follow up with the right next step.',
      servicesOverviewSummary:
        'Projects involving damaged, unwanted, unstable, or awkwardly placed trees.',
      includedLayout: 'stack',
      whenYouNeedThisService: [
        'A tree is dead, leaning, split, or declining after wind and rain.',
        'Large growth is crowding the roof, driveway, fence line, or pool area.',
        'You need to clear space for construction, a yard redesign, or safer access.',
        'A difficult tree is too close to structures for routine maintenance alone.',
      ],
      whatsIncluded: [
        { title: 'Review', description: 'Reviewing the tree location, access conditions, and nearby structures before quoting the work.' },
        { title: 'Discuss', description: 'Discussing debris handling, cleanup, and whether stump grinding should be included with the removal.' },
        { title: 'Plan', description: 'Planning around gates, soft ground, tight side yards, and the property constraints shaping the removal.' },
      ],
      processSteps: [
        'Send the property address, ZIP code, and a short description of the tree that needs attention.',
        'Add photos if available so height, access, and nearby structures are easier to review.',
        'We follow up about the scope of the work, any related services, and the best next step toward scheduling.',
      ],
      relatedServices: [
        { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
        { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
        { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
      ],
      faqs: [
        {
          question: 'What details help with a tree removal estimate?',
          answer:
            'The most useful details are the tree location, approximate size, nearby structures, and whether access is tight or urgent.',
        },
        {
          question: 'Can stump grinding be included with tree removal?',
          answer:
            'Yes. Many removal projects also include stump grinding so the yard feels fully cleared when the work is done.',
        },
        {
          question: 'Do photos help for tree removal in Parrish, FL?',
          answer:
            'Yes. A few wide and close photos can make the first review much faster, especially when access is limited or storm damage is involved.',
        },
      ],
      serviceCardSummary: 'Get help with damaged, unwanted, or difficult trees that may need removal.',
      icon: '🪵',
    },
    treeTrimming: {
      pageId: 'tree-trimming',
      slug: 'tree-trimming',
      cardTitle: 'Tree Trimming',
      title: 'Tree Trimming in Parrish, FL | Parrish Tree Removal',
      description:
        'Tree trimming in Parrish, FL for branch reduction, canopy shaping, roof clearance, and ongoing property maintenance.',
      heroTitle: 'Tree Trimming',
      heroIntro: 'Cleaner canopies. Better clearance.',
      estimateHeading: 'Free tree trimming estimate',
      estimateIntro:
        'Describe the branches, roofline, or overgrowth you want addressed so we can review the trimming work and follow up quickly.',
      servicesOverviewSummary:
        'Pruning, shaping, branch reduction, and maintenance planning for growth control.',
      includedLayout: 'stack',
      whenYouNeedThisService: [
        'Branches are hanging over the roof, driveway, pool cage, or sidewalk.',
        'The canopy looks uneven, too dense, or is pushing into utility clearance zones.',
        'You want routine maintenance before storm season or after fast growth.',
        'Several trees on the property need cleanup during the same visit.',
      ],
      whatsIncluded: [
        { title: 'Review', description: 'Reviewing which sides of the tree need attention and what clearance matters most.' },
        { title: 'Discuss', description: 'Discussing pruning, shaping, branch reduction, and cleanup as part of one request.' },
        { title: 'Plan', description: 'Planning whether the trimming should be paired with removal, storm cleanup, or stump work.' },
      ],
      processSteps: [
        'Submit the property details and explain what branches or areas need the most attention.',
        'Include photos or notes about roof edges, lanes of access, and the number of trees involved.',
        'We follow up about the scope of the trimming work and the best next step for the property.',
      ],
      relatedServices: [
        { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
        { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
        { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
      ],
      faqs: [
        {
          question: 'What should I mention in a trimming request?',
          answer:
            'Mention which sides of the tree need work, what needs clearance, and whether the concern is maintenance, overgrowth, or storm prep.',
        },
        {
          question: 'Can one visit cover multiple trees?',
          answer:
            'Yes. If several trees need trimming in Parrish, FL, include that in the request so the scope is clear from the start.',
        },
        {
          question: 'Is cleanup part of tree trimming?',
          answer:
            'Cleanup can be discussed as part of the estimate so the final result matches how you want the yard to look.',
        },
      ],
      serviceCardSummary: 'Review trimming and pruning options for overgrowth, clearance, and upkeep.',
      icon: '🌳',
    },
    stumpGrinding: {
      pageId: 'stump-grinding',
      slug: 'stump-grinding',
      cardTitle: 'Stump Grinding',
      title: 'Stump Grinding in Parrish, FL | Parrish Tree Removal',
      description:
        'Stump grinding in Parrish, FL for leftover stumps after tree removal, yard cleanup, replanting, and better usable space.',
      heroTitle: 'Stump Grinding',
      heroIntro: 'Clear old stumps and reclaim space.',
      estimateHeading: 'Free stump grinding estimate',
      estimateIntro:
        'Share stump size, access details, and whether the goal is cleanup, replanting, or reclaiming usable yard space so we can review the job properly.',
      servicesOverviewSummary:
        'Post-removal cleanup when a leftover stump still affects the yard.',
      includedLayout: 'stack',
      whenYouNeedThisService: [
        'A leftover stump is making the yard look unfinished after removal.',
        'You need the area cleared for grass, landscaping, or a future project.',
        'The stump is in the way of mowing, foot traffic, or driveway access.',
        'There are multiple stumps across the property that should be handled together.',
      ],
      whatsIncluded: [
        { title: 'Review', description: 'Reviewing stump size, count, and access points around fences, gates, and patios.' },
        { title: 'Discuss', description: 'Discussing whether the request is tied to recent tree removal or a longer-standing cleanup need.' },
        { title: 'Plan', description: 'Planning around irrigation, nearby hardscape, and the final use of the cleared area.' },
      ],
      processSteps: [
        'Send the stump count, size estimate, and the property ZIP code.',
        'Include notes about tight access, fencing, irrigation, or patios near the work area.',
        'We follow up about the scope of the work and whether stump grinding should be paired with another service.',
      ],
      relatedServices: [
        { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
        { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
        { href: '/services', label: 'Tree Services in Parrish, FL' },
      ],
      faqs: [
        {
          question: 'What details help with a stump grinding estimate?',
          answer:
            'The most helpful details are the stump width, the number of stumps, and whether access is limited by fencing, gates, or hardscape.',
        },
        {
          question: 'Can stump grinding be requested after an older tree removal?',
          answer:
            'Yes. Stump grinding in Parrish, FL is often requested well after the original tree was removed.',
        },
        {
          question: 'Should I mention plans for the area afterward?',
          answer:
            'Yes. It helps to know whether the area will be replanted, seeded, landscaped, or simply cleaned up for open yard space.',
        },
      ],
      serviceCardSummary: 'See how stump work can help finish a yard after a tree is already down.',
      icon: '🚜',
    },
    stormCleanup: {
      pageId: 'emergency-tree-service',
      slug: 'emergency-tree-service',
      cardTitle: 'Storm Cleanup',
      title: 'Storm Cleanup in Parrish, FL | Parrish Tree Removal',
      description:
        'Storm cleanup in Parrish, FL for fallen limbs, blocked driveways, damaged trees, and urgent post-storm property concerns.',
      heroTitle: 'Storm Cleanup',
      heroIntro: 'Fast cleanup after storms and damage.',
      estimateHeading: 'Storm cleanup estimate request',
      estimateIntro:
        'Explain what fell, what is blocked, and whether anything is resting on a structure so we can understand the urgency and follow up quickly.',
      servicesOverviewSummary:
        'Tree and debris concerns after severe weather, broken limbs, or blocked access.',
      includedLayout: 'stack',
      whenYouNeedThisService: [
        'A storm leaves limbs, debris, or broken sections of tree across the yard or driveway.',
        'A branch or trunk section is resting on a roof, fence, vehicle, or other structure.',
        'A tree appears split, uprooted, or newly unstable after wind and rain.',
        'You need to explain safety concerns and site access clearly after fast-changing weather.',
      ],
      whatsIncluded: [
        { title: 'Review', description: 'Reviewing the visible damage, blocked areas, and any structures involved in the incident.' },
        { title: 'Discuss', description: 'Discussing whether the cleanup should also include tree removal, trimming, or stump work.' },
        { title: 'Plan', description: 'Planning around access conditions so follow-up can match the urgency of the property issue.' },
      ],
      processSteps: [
        'Submit the address, service area details, and a quick summary of the storm damage.',
        'Add photos if it is safe to do so, especially if access is blocked or a structure is involved.',
        'We follow up on the immediate next step and whether another tree service should be included.',
      ],
      relatedServices: [
        { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
        { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
        { href: '/contact', label: 'Contact Parrish Tree Removal' },
      ],
      faqs: [
        {
          question: 'What should I report after a storm?',
          answer:
            'Report blocked access, visible splits, downed limbs, and whether any tree material is touching a structure, fence, or vehicle.',
        },
        {
          question: 'Can storm cleanup turn into a tree removal project?',
          answer:
            'Yes. Storm cleanup in Parrish, FL often leads to removal or trimming when the damaged tree cannot stay as-is.',
        },
        {
          question: 'Do photos help with urgent requests?',
          answer:
            'Yes, if the area is safe. Photos can quickly show scale, access, and whether the issue is affecting a structure or driveway.',
        },
      ],
      serviceCardSummary: 'Learn what details matter after fallen limbs, debris, or weather damage.',
      icon: '⛈️',
    },
  },

  // QUESTION:
  // What does each page need to say, and in what order should its sections appear?
  // WHY THIS MATTERS:
  // This is the page-assembly map. It shows the exact component stack for each route so you can change order or disable sections without hunting through page files.
  // AFFECTS:
  // Homepage, services page, about page, contact page, and the shared service-detail template route.
  // EXAMPLE:
  // pages.home.layout[0] = hero
  pages: {
    // PAGE QUESTION:
    // What should the homepage show, and in what exact order should those sections appear?
    home: {
      route: '/',
      title: 'Tree Removal, Tree Trimming, and Stump Grinding in Parrish, FL | Parrish Tree Removal',
      description:
        'Request a free estimate for tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
      hero: {
        titlePrimary: 'Parrish Tree Removal',
        titleSecondary: '',
        outlineWords: ['Parrish', 'Tree', 'Removal'],
        intro: 'Tree Services',
        variant: 'split-image' as HeroVariant,
        cta: {
          kind: 'modal',
          label: 'Get Free Estimate',
          target: 'estimate-modal',
        },
      },
      trustBadges: [
        'Locally focused service',
        'Prompt communication',
        'Residential tree work',
        'Clean project follow-through',
      ],
      servicesLead:
        'Professional tree services for residential properties throughout Parrish and the surrounding area.',
      estimateCta: {
        eyebrow: 'Free Estimate',
        heading: 'Need Help With A Tree Project?',
        intro:
          'Tell us what is going on at your property and we will follow up about tree removal, trimming, stump grinding, or storm cleanup.',
        buttonLabel: 'Get Estimate',
      },
      faq: [
        {
          question: 'What details should I include in an estimate request?',
          answer:
            'The most helpful details are the tree location, approximate size, access conditions, photos if available, and whether there is anything urgent.',
        },
        {
          question: 'Can one request include more than one service?',
          answer:
            'Yes. Many jobs involve a combination of tree removal, trimming, stump grinding, and debris cleanup.',
        },
        {
          question: 'Do you cover nearby cities outside Parrish?',
          answer:
            'Nearby communities are commonly included. Sharing the property ZIP code is a quick way to confirm whether the location fits the service area.',
        },
      ],
      modal: {
        heading: 'Tell us about your tree service project',
        intro:
          'Share a few project details and we will follow up about tree removal, trimming, stump work, or storm cleanup.',
        buttonLabel: 'Send Estimate Request',
      },
      // PAGE ASSEMBLY ORDER:
      // Edit this list to understand or control the exact homepage section stack.
      // Each item shows:
      // - key: stable section/component id
      // - component: Astro section component name
      // - enabled: whether it renders
      // - order: the visual assembly order
      // - preset: the selected style/variant
      // - contentSource: which content block feeds it
      layout: [
        {
          key: 'hero',
          label: 'Homepage Hero',
          component: 'HeroSection',
          enabled: true,
          required: true,
          route: '/',
          order: 1,
          prompt: 'Homepage hero. First section visitors see.',
          whyThisMatters: 'Sets first impression, main H1, primary CTA, and hero variant selection.',
          affects: 'HeroSection rendering, homepage conversion focus, and top-of-page composition.',
          preset: 'hero.split-image',
          contentSource: 'pages.home.hero',
        },
        {
          key: 'trust-badges',
          component: 'TrustBadges',
          enabled: true,
          route: '/',
          order: 2,
          prompt: 'Trust badge strip directly below the hero.',
          contentSource: 'trust.trustBadges',
        },
        {
          key: 'services',
          component: 'ServicesSection',
          enabled: true,
          route: '/',
          order: 3,
          prompt: 'Core service overview grid.',
          preset: 'services.grid-cards',
          contentSource: 'services + pages.home.servicesLead',
          surfaceTone: 'base',
        },
        {
          key: 'why-choose-us',
          component: 'WhyChooseSection',
          enabled: true,
          route: '/',
          order: 4,
          prompt: 'Credibility/value section below services.',
          preset: 'whyChoose.icon-grid',
          surfaceTone: 'warm',
        },
        {
          key: 'our-process',
          component: 'ProcessSection',
          enabled: true,
          route: '/',
          order: 5,
          prompt: 'Process explanation section.',
          preset: 'process.stacked-steps',
          surfaceTone: 'cool',
        },
        {
          key: 'estimate-cta',
          component: 'EstimateCtaSection',
          enabled: true,
          route: '/',
          order: 6,
          prompt: 'Homepage conversion CTA before FAQ.',
          preset: 'estimateCta.single-panel',
          contentSource: 'pages.home.estimateCta',
          surfaceTone: 'olive',
        },
        {
          key: 'faq',
          component: 'FaqSection',
          enabled: true,
          route: '/',
          order: 7,
          prompt: 'Homepage FAQ section.',
          preset: 'faq.clean-list',
          contentSource: 'pages.home.faq',
          surfaceTone: 'base',
        },
        {
          key: 'service-area',
          component: 'ServiceAreaSection',
          enabled: true,
          route: '/',
          order: 8,
          prompt: 'Bottom informational service area section.',
          preset: 'serviceArea.map-card',
          contentSource: 'business.serviceAreaCopy',
          surfaceTone: 'cool',
        },
      ] as LayoutSectionEntry[],
    },
    // PAGE QUESTION:
    // What should the all-services page show, and in what exact order should those sections appear?
    services: {
      route: '/services',
      title: 'Tree Services in Parrish, FL | Parrish Tree Removal',
      description:
        'Explore tree removal, tree trimming, stump grinding, and storm cleanup services in Parrish, FL with clear next-step guidance.',
      hero: {
        titlePrimary: 'Tree Services',
        titleSecondary: '',
        outlineWords: ['Tree', 'Services'],
        intro: 'Tree care for Parrish area properties.',
        variant: 'split-image' as HeroVariant,
        cta: {
          kind: 'link',
          label: 'Free Estimate',
          href: '/contact',
        },
      },
      compareCards: [
        {
          title: 'Tree Removal',
          description:
            'Best for dead, hazardous, unwanted, or badly placed trees near structures and access points.',
        },
        {
          title: 'Tree Trimming',
          description:
            'Best for overgrowth, roof clearance, branch reduction, shaping, and routine maintenance needs.',
        },
        {
          title: 'Stump Grinding or Storm Cleanup',
          description:
            'Use stump grinding for leftover stumps and storm cleanup for fallen limbs, blocked access, and urgent weather damage.',
        },
      ],
      estimateTips: [
        'Explain where the tree or stump sits on the property.',
        'Note whether the issue is routine, urgent, or storm-related.',
        'Include photos when possible to clarify scale and access.',
      ],
      estimateForm: {
        heading: 'Free estimate request',
        intro:
          'Use the form below to contact us about tree removal, trimming, stump grinding, or storm cleanup for your property.',
        buttonLabel: 'Submit Free Estimate',
      },
      // PAGE ASSEMBLY ORDER:
      // This is the exact services page build order used by the current Parrish baseline.
      layout: [
        {
          key: 'hero',
          label: 'Services Hero',
          component: 'HeroSection',
          enabled: true,
          required: true,
          route: '/services',
          order: 1,
          prompt: 'Services page hero.',
          whyThisMatters: 'Introduces the services page and keeps the route visually tied to the shared hero system.',
          affects: 'HeroSection rendering and services-page first impression.',
          preset: 'hero.split-image',
          contentSource: 'pages.services.hero',
        },
        {
          key: 'services-overview',
          component: 'ServicesSection',
          enabled: true,
          route: '/services',
          order: 2,
          prompt: 'Primary grid of offered services.',
          preset: 'services.grid-cards',
          surfaceTone: 'base',
        },
        {
          key: 'compare-services',
          component: 'CardGridSection',
          enabled: true,
          route: '/services',
          order: 3,
          prompt: 'Quick compare section for service types.',
          surfaceTone: 'warm',
        },
        {
          key: 'why-choose-us',
          component: 'WhyChooseSection',
          enabled: true,
          route: '/services',
          order: 4,
          prompt: 'Why choose us section on services page.',
          preset: 'whyChoose.icon-grid',
          surfaceTone: 'cool',
        },
        {
          key: 'our-process',
          component: 'ProcessSection',
          enabled: true,
          route: '/services',
          order: 5,
          prompt: 'Process section on services page.',
          preset: 'process.stacked-steps',
          surfaceTone: 'olive',
        },
        {
          key: 'estimate-tips',
          component: 'InfoListSection',
          enabled: true,
          route: '/services',
          order: 6,
          prompt: 'Estimate tips list section.',
          surfaceTone: 'base',
        },
        {
          key: 'estimate-form',
          component: 'EstimateFormSection',
          enabled: true,
          route: '/services',
          order: 7,
          prompt: 'Services page estimate form.',
          surfaceTone: 'warm',
        },
        {
          key: 'service-area',
          component: 'ServiceAreaSection',
          enabled: true,
          route: '/services',
          order: 8,
          prompt: 'Bottom service area section.',
          preset: 'serviceArea.map-card',
          surfaceTone: 'cool',
        },
      ] as LayoutSectionEntry[],
    },
    // PAGE QUESTION:
    // What should the About page emphasize, and in what exact order should those sections appear?
    about: {
      route: '/about',
      title: 'About Parrish Tree Removal | Tree Service in Parrish, FL',
      description:
        'Learn about Parrish Tree Removal, the estimate process, and the tree service guidance offered for homeowners in Parrish, FL.',
      hero: {
        titlePrimary: 'About',
        titleSecondary: 'Parrish Tree Removal',
        outlineWords: ['About'],
        intro: 'Local service with clear communication.',
        variant: 'split-image' as HeroVariant,
        cta: {
          kind: 'link',
          label: 'Free Estimate',
          href: '/contact',
        },
      },
      homeownerNeeds: [
        {
          title: 'A company that understands the job',
          description:
            'Homeowners want honest guidance on whether a job calls for removal, trimming, stump grinding, or storm cleanup.',
        },
        {
          title: 'Clear communication',
          description:
            'Projects go more smoothly when the scope, access, and property conditions are explained clearly from the beginning.',
        },
        {
          title: 'Respect for the property',
          description:
            'Residential tree work needs planning around roofs, driveways, fences, landscaping, and access points.',
        },
        {
          title: 'Local familiarity',
          description:
            'Parrish-area properties often come with unique lot layouts, storm-season concerns, and access challenges that matter during tree work.',
        },
      ],
      howRequestsWork: [
        'Homeowners reach out with the service they need and a description of the property.',
        'Tree size, access, and nearby structures help shape the scope of the work.',
        'If a project involves more than one service, it can be discussed as part of the same conversation.',
      ],
      // PAGE ASSEMBLY ORDER:
      // This is the exact About page section stack for the Parrish baseline.
      layout: [
        {
          key: 'hero',
          label: 'About Hero',
          component: 'HeroSection',
          enabled: true,
          required: true,
          route: '/about',
          order: 1,
          prompt: 'About page hero.',
          whyThisMatters: 'Frames the company story and keeps About aligned with the shared hero system.',
          affects: 'HeroSection rendering and About-page intro emphasis.',
          preset: 'hero.split-image',
        },
        {
          key: 'what-homeowners-need',
          component: 'CardGridSection',
          enabled: true,
          route: '/about',
          order: 2,
          prompt: 'About page homeowner needs cards.',
          surfaceTone: 'base',
        },
        {
          key: 'why-choose-us',
          component: 'WhyChooseSection',
          enabled: true,
          route: '/about',
          order: 3,
          prompt: 'Why choose us section.',
          preset: 'whyChoose.icon-grid',
          surfaceTone: 'warm',
        },
        {
          key: 'our-process',
          component: 'ProcessSection',
          enabled: true,
          route: '/about',
          order: 4,
          prompt: 'Process section.',
          preset: 'process.stacked-steps',
          surfaceTone: 'cool',
        },
        {
          key: 'how-requests-work',
          component: 'InfoListSection',
          enabled: true,
          route: '/about',
          order: 5,
          prompt: 'About page request flow list.',
          surfaceTone: 'olive',
        },
        {
          key: 'related-services',
          component: 'RelatedServicesSection',
          enabled: true,
          route: '/about',
          order: 6,
          prompt: 'Service page links on about page.',
          preset: 'relatedServices.stacked-buttons',
          surfaceTone: 'base',
        },
        {
          key: 'service-area',
          component: 'ServiceAreaSection',
          enabled: true,
          route: '/about',
          order: 7,
          prompt: 'Bottom service area section.',
          preset: 'serviceArea.map-card',
          surfaceTone: 'cool',
        },
      ] as LayoutSectionEntry[],
    },
    // PAGE QUESTION:
    // What should the Contact page show before and after the main form, and in what order?
    contact: {
      route: '/contact',
      title: 'Contact Parrish Tree Removal | Free Estimate in Parrish, FL',
      description:
        'Contact Parrish Tree Removal for a free estimate on tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
      hero: {
        titlePrimary: 'Contact',
        titleSecondary: 'Parrish Tree Removal',
        outlineWords: ['Contact'],
        intro: 'Request help for your tree project.',
        variant: 'split-image' as HeroVariant,
        cta: {
          kind: 'none',
          label: '',
        },
      },
      beforeYouSubmit: [
        {
          title: 'Tell us about the property',
          description:
            'If possible, mention whether the tree is near a structure, fence, driveway, pool area, or another obstacle that affects access.',
        },
        {
          title: 'Mention storm damage',
          description:
            'Let us know if debris is blocking access or if a branch is resting on a structure so we can understand the urgency.',
        },
        {
          title: 'Call if that is easier',
          description:
            'The phone button in the header is always available if you would rather talk through the project directly.',
        },
        {
          title: 'Include the ZIP code',
          description:
            'Including the property ZIP code helps us confirm the job is within our service area from the start.',
        },
      ],
      estimateForm: {
        heading: 'Free estimate request',
        intro:
          'Use the form below to tell us about tree removal, trimming, stump grinding, or storm cleanup at your property.',
        buttonLabel: 'Submit Free Estimate',
      },
      // PAGE ASSEMBLY ORDER:
      // This is the exact Contact page section stack for the Parrish baseline.
      layout: [
        {
          key: 'hero',
          label: 'Contact Hero',
          component: 'HeroSection',
          enabled: true,
          required: true,
          route: '/contact',
          order: 1,
          prompt: 'Contact page hero.',
          whyThisMatters: 'Provides the page intro while leaving the main estimate form as the primary action below.',
          affects: 'HeroSection rendering and contact-page opening hierarchy.',
          preset: 'hero.split-image',
        },
        {
          key: 'estimate-form',
          component: 'EstimateFormSection',
          enabled: true,
          route: '/contact',
          order: 2,
          prompt: 'Primary contact/estimate form.',
          surfaceTone: 'base',
        },
        {
          key: 'before-you-submit',
          component: 'CardGridSection',
          enabled: true,
          route: '/contact',
          order: 3,
          prompt: 'Helpful submission notes cards.',
          surfaceTone: 'warm',
        },
        {
          key: 'why-choose-us',
          component: 'WhyChooseSection',
          enabled: true,
          route: '/contact',
          order: 4,
          prompt: 'Why choose us section.',
          preset: 'whyChoose.icon-grid',
          surfaceTone: 'cool',
        },
        {
          key: 'our-process',
          component: 'ProcessSection',
          enabled: true,
          route: '/contact',
          order: 5,
          prompt: 'Process section.',
          preset: 'process.stacked-steps',
          surfaceTone: 'olive',
        },
        {
          key: 'related-services',
          component: 'RelatedServicesSection',
          enabled: true,
          route: '/contact',
          order: 6,
          prompt: 'Links to service pages from contact page.',
          preset: 'relatedServices.stacked-buttons',
          surfaceTone: 'base',
        },
        {
          key: 'service-area',
          component: 'ServiceAreaSection',
          enabled: true,
          route: '/contact',
          order: 7,
          prompt: 'Bottom service area section.',
          preset: 'serviceArea.map-card',
          surfaceTone: 'cool',
        },
      ] as LayoutSectionEntry[],
    },
    // PAGE QUESTION:
    // What should every individual service-detail page contain, and in what order should those shared sections render?
    serviceDetailTemplate: {
      route: '/:service-slug',
      // PAGE ASSEMBLY ORDER:
      // This route powers tree removal, trimming, stump grinding, and storm cleanup pages.
      layout: [
        {
          key: 'hero',
          label: 'Service Detail Hero',
          component: 'HeroSection',
          enabled: true,
          required: true,
          route: '/:service-slug',
          order: 1,
          prompt: 'Service detail hero.',
          whyThisMatters: 'Keeps every service page aligned with the shared hero system and service-specific H1 structure.',
          affects: 'HeroSection rendering on service-detail routes.',
          preset: 'hero.split-image',
        },
        {
          key: 'when-you-need-this-service',
          component: 'ServiceInfoSection',
          enabled: true,
          route: '/:service-slug',
          order: 2,
          prompt: 'When-you-need-it service information section.',
          surfaceTone: 'base',
        },
        {
          key: 'whats-included',
          component: 'ServiceInfoSection',
          enabled: true,
          route: '/:service-slug',
          order: 3,
          prompt: 'What’s included service information section.',
          surfaceTone: 'warm',
        },
        {
          key: 'why-choose-us',
          component: 'WhyChooseSection',
          enabled: true,
          route: '/:service-slug',
          order: 4,
          prompt: 'Why choose us section.',
          preset: 'whyChoose.icon-grid',
          surfaceTone: 'cool',
        },
        {
          key: 'our-process',
          component: 'ProcessSection',
          enabled: true,
          route: '/:service-slug',
          order: 5,
          prompt: 'Process section.',
          preset: 'process.stacked-steps',
          surfaceTone: 'olive',
        },
        {
          key: 'related-services',
          component: 'RelatedServicesSection',
          enabled: true,
          route: '/:service-slug',
          order: 6,
          prompt: 'Links to related service pages.',
          preset: 'relatedServices.stacked-buttons',
          surfaceTone: 'base',
        },
        {
          key: 'faq',
          component: 'FaqSection',
          enabled: true,
          route: '/:service-slug',
          order: 7,
          prompt: 'Service page FAQ.',
          preset: 'faq.clean-list',
          surfaceTone: 'warm',
        },
        {
          key: 'estimate-form',
          component: 'EstimateFormSection',
          enabled: true,
          route: '/:service-slug',
          order: 8,
          prompt: 'Service page estimate form.',
          surfaceTone: 'cool',
        },
        {
          key: 'service-area',
          component: 'ServiceAreaSection',
          enabled: true,
          route: '/:service-slug',
          order: 9,
          prompt: 'Bottom service area section.',
          preset: 'serviceArea.map-card',
          surfaceTone: 'olive',
        },
      ] as LayoutSectionEntry[],
    },
  },

  // QUESTION:
  // Where should estimate form submissions post in production?
  // WHY THIS MATTERS:
  // This protects the static Astro + Hostinger + PHP/Resend production flow.
  // AFFECTS:
  // Shared estimate forms and live submission behavior.
  // EXAMPLE:
  // action: '/api/estimate.php'
  form: {
    action: '/api/estimate.php',
    phpFlowNote: 'Production submissions must continue posting to /api/estimate.php.',
  },

  // QUESTION:
  // Which social links should appear for this client?
  // WHY THIS MATTERS:
  // Social links can be added later without editing shared components directly.
  // AFFECTS:
  // Footer/header social areas when those are enabled for future clients.
  // EXAMPLE:
  // { facebook: 'https://facebook.com/example' }
  social: {},
} as const;

export const templateConfig = clientQuestionnaire;
