/**
 * PRIMARY CLIENT INTAKE FILE
 *
 * This is the main file to edit for a new client.
 * Fill this out in plain language first. The normalized template config layer
 * underneath will convert these answers into the structure the site uses.
 *
 * Parrish Tree Removal is the reference implementation.
 * The current live Parrish site should remain unchanged while this file stays
 * mapped to Preset A and the current section order below.
 */

type SectionTone = 'base' | 'warm' | 'cool' | 'olive';
type SiteStylePresetId =
  | 'preset-a-parrish-baseline'
  | 'preset-b-premium-modern'
  | 'preset-c-local-family-owned'
  | 'preset-d-storm-response-emergency'
  | 'preset-e-upscale-residential';
type HeroVariant = 'split-image' | 'centered' | 'abstract-no-image';
type ServicesVariant = 'grid-cards' | 'stacked-panels' | 'compact-list';
type EstimateCtaVariant = 'single-panel' | 'split-content' | 'emphasized-conversion';
type RelatedServicesVariant = 'stacked-buttons' | 'grid-links' | 'card-links';
type WhyChooseVariant = 'icon-grid' | 'stacked-panels';
type ProcessVariant = 'stacked-steps' | 'numbered-cards' | 'timeline';
type FaqVariant = 'clean-list' | 'card-grid';
type ServiceAreaVariant = 'map-card' | 'text-first' | 'compact-map';
type ThemePalettePreset = 'parrish-classic' | 'evergreen-premium' | 'coastal-clean';
type TypographyPreset = 'parrish-default' | 'modern-sans' | 'heritage-serif';
type BorderPreset = 'layered-angled' | 'straight-clean' | 'soft-panels';
type ButtonStylePreset = 'gradient-pill' | 'soft-solid' | 'quiet-outline';
type IconStylePreset = 'emoji' | 'badge' | 'minimal-line';

interface IntakeSectionPlan {
  id: string;
  label: string;
  component: string;
  enabled: boolean;
  order: number;
  variant?: string;
  contentSource?: string;
  surfaceTone?: SectionTone;
  notes?: string;
}

interface HeroAction {
  kind: 'modal' | 'link' | 'anchor' | 'none';
  label: string;
  href?: string;
  target?: string;
}

interface ServiceLink {
  href: string;
  label: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface IncludedItem {
  title: string;
  description: string;
}

const section = (
  id: string,
  label: string,
  component: string,
  order: number,
  options: Omit<IntakeSectionPlan, 'id' | 'label' | 'component' | 'order'> = { enabled: true },
): IntakeSectionPlan => ({
  id,
  label,
  component,
  order,
  enabled: options.enabled ?? true,
  variant: options.variant,
  contentSource: options.contentSource,
  surfaceTone: options.surfaceTone,
  notes: options.notes,
});

export const clientIntake = {
  // Which ready-made site direction should this client start from?
  setup: {
    selectedSitePreset: 'preset-a-parrish-baseline' as SiteStylePresetId,
    referenceImplementation: 'Parrish Tree Removal',
    note:
      'Preset A keeps the current Parrish live site appearance. Change this only when you intentionally want a different overall visual direction.',
  },

  // Global business details used across the full site.
  globalBusinessInfo: {
    businessName: 'Parrish Tree Removal',
    siteName: 'Parrish Tree Removal',
    primaryLocation: 'Parrish, FL',
    state: 'Florida',
    phoneDisplay: '(800) 555-0199',
    phoneHref: '+18005550199',
    email: 'parrishtreeremoval@gmail.com',
    hours: {
      mondayFriday: 'Mon-Fri 8:00 AM - 6:00 PM',
      saturday: 'Sat 9:00 AM - 2:00 PM',
    },
    serviceAreas: ['Parrish, FL', 'Bradenton, FL', 'Palmetto, FL', 'Lakewood Ranch, FL'],
    serviceAreaCopy:
      'Parrish Tree Removal serves homeowners in Parrish, FL and nearby communities, including Palmetto, Ellenton, Bradenton, and Lakewood Ranch when the project fits the service area.',
  },

  // Global brand/style answers. Keep Preset A values in place for the current Parrish baseline.
  globalBrandStyle: {
    identityMark: 'PTR',
    selectedThemePalette: 'parrish-classic' as ThemePalettePreset,
    selectedTypographyPreset: 'parrish-default' as TypographyPreset,
    selectedBorderPreset: 'layered-angled' as BorderPreset,
    selectedButtonStyle: 'gradient-pill' as ButtonStylePreset,
    selectedIconStyle: 'emoji' as IconStylePreset,
    activeSectionVariants: {
      hero: 'split-image' as HeroVariant,
      services: 'grid-cards' as ServicesVariant,
      estimateCta: 'single-panel' as EstimateCtaVariant,
      relatedServices: 'stacked-buttons' as RelatedServicesVariant,
      whyChoose: 'icon-grid' as WhyChooseVariant,
      process: 'stacked-steps' as ProcessVariant,
      faq: 'clean-list' as FaqVariant,
      serviceArea: 'map-card' as ServiceAreaVariant,
    },
    styleControls: {
      borderRadius: 'medium',
      overlayStrength: 'medium',
      elevationStrength: 'medium',
    },
    assetPaths: {
      headerLogo: '/images/ptr-header-logo.svg',
      heroImage: '../assets/hero-image.png',
      ogImage: '/images/parrish-service-area-map.svg',
      serviceAreaMap: '/images/parrish-service-area-map.svg',
      faviconSvg: '/favicon.svg',
      faviconIco: '/favicon.ico',
    },
    colorOverrides: {
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
  },

  // Shared CTA wording and homepage trust badges.
  sharedSiteCopy: {
    ctas: {
      heroEstimate: 'Free Estimate',
      homepageEstimate: 'Get Free Estimate',
      submitEstimate: 'Submit Free Estimate',
      requestEstimate: 'Request A Free Estimate',
      sendEstimate: 'Send Estimate Request',
      backToTop: 'Back to Top',
    },
    trustBadges: [
      'Locally focused service',
      'Prompt communication',
      'Residential tree work',
      'Clean project follow-through',
    ],
  },

  homepage: {
    route: '/',
    seoTitle: 'Tree Removal, Tree Trimming, and Stump Grinding in Parrish, FL | Parrish Tree Removal',
    seoDescription:
      'Request a free estimate for tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
    hero: {
      titlePrimary: 'Expert Tree Services',
      titleSecondary: '',
      outlineWords: ['Expert', 'Tree', 'Services'],
      intro: '',
      variant: 'split-image' as HeroVariant,
      cta: {
        kind: 'modal',
        label: 'Get Free Estimate',
        target: 'estimate-modal',
      } as HeroAction,
    },
    sections: [
      section('hero', 'Homepage Hero', 'HeroSection', 1, {
        variant: 'hero.split-image',
        contentSource: 'homepage.hero',
        notes: 'Top-of-page first impression and primary conversion moment.',
      }),
      section('trust-badges', 'Trust Badges', 'TrustBadges', 2, {
        contentSource: 'sharedSiteCopy.trustBadges',
        notes: 'Keeps the social-proof strip directly under the hero.',
      }),
      section('services', 'Services Overview', 'ServicesSection', 3, {
        variant: 'services.grid-cards',
        contentSource: 'homepage.servicesLead + all service cards',
        surfaceTone: 'base',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 4, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'warm',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 5, {
        variant: 'process.stacked-steps',
        surfaceTone: 'cool',
      }),
      section('estimate-cta', 'Estimate CTA', 'EstimateCtaSection', 6, {
        variant: 'estimateCta.single-panel',
        contentSource: 'homepage.estimateCta',
        surfaceTone: 'olive',
      }),
      section('faq', 'Homepage FAQ', 'FaqSection', 7, {
        variant: 'faq.clean-list',
        contentSource: 'homepage.faq',
        surfaceTone: 'base',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 8, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'cool',
      }),
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
    estimateModal: {
      heading: 'Tell us about your tree service project',
      intro:
        'Share a few project details and we will follow up about tree removal, trimming, stump work, or storm cleanup.',
      buttonLabel: 'Send Estimate Request',
    },
  },

  servicesPage: {
    route: '/services',
    seoTitle: 'Tree Services in Parrish, FL | Parrish Tree Removal',
    seoDescription:
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
      } as HeroAction,
    },
    sections: [
      section('hero', 'Services Hero', 'HeroSection', 1, {
        variant: 'hero.split-image',
        contentSource: 'servicesPage.hero',
      }),
      section('services-overview', 'Services Overview', 'ServicesSection', 2, {
        variant: 'services.grid-cards',
        contentSource: 'all service cards + servicesPage.servicesLead',
        surfaceTone: 'base',
      }),
      section('compare-services', 'Compare Services', 'CardGridSection', 3, {
        contentSource: 'servicesPage.compareCards',
        surfaceTone: 'warm',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 4, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'cool',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 5, {
        variant: 'process.stacked-steps',
        surfaceTone: 'olive',
      }),
      section('estimate-tips', 'Estimate Tips', 'InfoListSection', 6, {
        contentSource: 'servicesPage.estimateTips',
        surfaceTone: 'base',
      }),
      section('estimate-form', 'Estimate Form', 'EstimateFormSection', 7, {
        contentSource: 'servicesPage.estimateForm',
        surfaceTone: 'warm',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 8, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'cool',
      }),
    ],
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
  },

  treeRemovalPage: {
    route: '/tree-removal',
    sections: [
      section('hero', 'Tree Removal Hero', 'HeroSection', 1, { variant: 'hero.split-image', contentSource: 'treeRemovalPage.hero' }),
      section('when-you-need-this-service', 'When You Need This Service', 'ServiceInfoSection', 2, {
        contentSource: 'treeRemovalPage.whenYouNeedThisService',
        surfaceTone: 'base',
      }),
      section('whats-included', 'What’s Included', 'ServiceInfoSection', 3, {
        contentSource: 'treeRemovalPage.whatsIncluded',
        surfaceTone: 'warm',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 4, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'cool',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 5, {
        variant: 'process.stacked-steps',
        surfaceTone: 'olive',
      }),
      section('related-services', 'Related Services', 'RelatedServicesSection', 6, {
        variant: 'relatedServices.stacked-buttons',
        contentSource: 'treeRemovalPage.relatedServices',
        surfaceTone: 'base',
      }),
      section('faq', 'Tree Removal FAQ', 'FaqSection', 7, {
        variant: 'faq.clean-list',
        contentSource: 'treeRemovalPage.faq',
        surfaceTone: 'warm',
      }),
      section('estimate-form', 'Tree Removal Estimate Form', 'EstimateFormSection', 8, {
        contentSource: 'treeRemovalPage.estimateBox',
        surfaceTone: 'cool',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 9, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'olive',
      }),
    ],
    cardTitle: 'Tree Removal',
    seoTitle: 'Tree Removal in Parrish, FL | Parrish Tree Removal',
    seoDescription:
      'Tree removal in Parrish, FL for damaged, hazardous, overgrown, or unwanted trees around homes, driveways, and structures.',
    heroTitle: 'Tree Removal',
    heroIntro: 'Removal for unsafe or unwanted trees.',
    estimateHeading: 'Free tree removal estimate',
    estimateIntro:
      'Share the tree location, nearby structures, and any urgency so we can review the removal and follow up with the right next step.',
    servicesOverviewSummary:
      'Projects involving damaged, unwanted, unstable, or awkwardly placed trees.',
    includedLayout: 'stack',
    whenLayout: 'list',
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
    ] as Array<string | IncludedItem>,
    processSteps: [
      'Send the property address, ZIP code, and a short description of the tree that needs attention.',
      'Add photos if available so height, access, and nearby structures are easier to review.',
      'We follow up about the scope of the work, any related services, and the best next step toward scheduling.',
    ],
    relatedServices: [
      { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
      { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
      { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
    ] as ServiceLink[],
    faq: [
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
    ] as FaqItem[],
    serviceCardSummary: 'Remove damaged or unwanted trees safely.',
    icon: '🪵',
  },

  treeTrimmingPage: {
    route: '/tree-trimming',
    sections: [
      section('hero', 'Tree Trimming Hero', 'HeroSection', 1, { variant: 'hero.split-image', contentSource: 'treeTrimmingPage.hero' }),
      section('when-you-need-this-service', 'When You Need This Service', 'ServiceInfoSection', 2, {
        contentSource: 'treeTrimmingPage.whenYouNeedThisService',
        surfaceTone: 'base',
      }),
      section('whats-included', 'What’s Included', 'ServiceInfoSection', 3, {
        contentSource: 'treeTrimmingPage.whatsIncluded',
        surfaceTone: 'warm',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 4, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'cool',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 5, {
        variant: 'process.stacked-steps',
        surfaceTone: 'olive',
      }),
      section('related-services', 'Related Services', 'RelatedServicesSection', 6, {
        variant: 'relatedServices.stacked-buttons',
        contentSource: 'treeTrimmingPage.relatedServices',
        surfaceTone: 'base',
      }),
      section('faq', 'Tree Trimming FAQ', 'FaqSection', 7, {
        variant: 'faq.clean-list',
        contentSource: 'treeTrimmingPage.faq',
        surfaceTone: 'warm',
      }),
      section('estimate-form', 'Tree Trimming Estimate Form', 'EstimateFormSection', 8, {
        contentSource: 'treeTrimmingPage.estimateBox',
        surfaceTone: 'cool',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 9, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'olive',
      }),
    ],
    cardTitle: 'Tree Trimming',
    seoTitle: 'Tree Trimming in Parrish, FL | Parrish Tree Removal',
    seoDescription:
      'Tree trimming in Parrish, FL for branch reduction, canopy shaping, roof clearance, and ongoing property maintenance.',
    heroTitle: 'Tree Trimming',
    heroIntro: 'Cleaner canopies. Better clearance.',
    estimateHeading: 'Free tree trimming estimate',
    estimateIntro:
      'Describe the branches, roofline, or overgrowth you want addressed so we can review the trimming work and follow up quickly.',
    servicesOverviewSummary:
      'Pruning, shaping, branch reduction, and maintenance planning for growth control.',
    includedLayout: 'stack',
    whenLayout: 'list',
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
    ] as Array<string | IncludedItem>,
    processSteps: [
      'Submit the property details and explain what branches or areas need the most attention.',
      'Include photos or notes about roof edges, lanes of access, and the number of trees involved.',
      'We follow up about the scope of the trimming work and the best next step for the property.',
    ],
    relatedServices: [
      { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
      { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
      { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
    ] as ServiceLink[],
    faq: [
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
    ] as FaqItem[],
    serviceCardSummary: 'Trim trees for clearance, shape, and upkeep.',
    icon: '🌳',
  },

  stumpGrindingPage: {
    route: '/stump-grinding',
    sections: [
      section('hero', 'Stump Grinding Hero', 'HeroSection', 1, { variant: 'hero.split-image', contentSource: 'stumpGrindingPage.hero' }),
      section('when-you-need-this-service', 'When You Need This Service', 'ServiceInfoSection', 2, {
        contentSource: 'stumpGrindingPage.whenYouNeedThisService',
        surfaceTone: 'base',
      }),
      section('whats-included', 'What’s Included', 'ServiceInfoSection', 3, {
        contentSource: 'stumpGrindingPage.whatsIncluded',
        surfaceTone: 'warm',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 4, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'cool',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 5, {
        variant: 'process.stacked-steps',
        surfaceTone: 'olive',
      }),
      section('related-services', 'Related Services', 'RelatedServicesSection', 6, {
        variant: 'relatedServices.stacked-buttons',
        contentSource: 'stumpGrindingPage.relatedServices',
        surfaceTone: 'base',
      }),
      section('faq', 'Stump Grinding FAQ', 'FaqSection', 7, {
        variant: 'faq.clean-list',
        contentSource: 'stumpGrindingPage.faq',
        surfaceTone: 'warm',
      }),
      section('estimate-form', 'Stump Grinding Estimate Form', 'EstimateFormSection', 8, {
        contentSource: 'stumpGrindingPage.estimateBox',
        surfaceTone: 'cool',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 9, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'olive',
      }),
    ],
    cardTitle: 'Stump Grinding',
    seoTitle: 'Stump Grinding in Parrish, FL | Parrish Tree Removal',
    seoDescription:
      'Stump grinding in Parrish, FL for leftover stumps after tree removal, yard cleanup, replanting, and better usable space.',
    heroTitle: 'Stump Grinding',
    heroIntro: 'Clear old stumps and reclaim space.',
    estimateHeading: 'Free stump grinding estimate',
    estimateIntro:
      'Share stump size, access details, and whether the goal is cleanup, replanting, or reclaiming usable yard space so we can review the job properly.',
    servicesOverviewSummary:
      'Post-removal cleanup when a leftover stump still affects the yard.',
    includedLayout: 'stack',
    whenLayout: 'list',
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
    ] as Array<string | IncludedItem>,
    processSteps: [
      'Send the stump count, size estimate, and the property ZIP code.',
      'Include notes about tight access, fencing, irrigation, or patios near the work area.',
      'We follow up about the scope of the work and whether stump grinding should be paired with another service.',
    ],
    relatedServices: [
      { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
      { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
      { href: '/services', label: 'Tree Services in Parrish, FL' },
    ] as ServiceLink[],
    faq: [
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
    ] as FaqItem[],
    serviceCardSummary: 'Clear old stumps and open up the yard.',
    icon: '🚜',
  },

  stormCleanupPage: {
    route: '/emergency-tree-service',
    sections: [
      section('hero', 'Storm Cleanup Hero', 'HeroSection', 1, { variant: 'hero.split-image', contentSource: 'stormCleanupPage.hero' }),
      section('when-you-need-this-service', 'When You Need This Service', 'ServiceInfoSection', 2, {
        contentSource: 'stormCleanupPage.whenYouNeedThisService',
        surfaceTone: 'base',
      }),
      section('whats-included', 'What’s Included', 'ServiceInfoSection', 3, {
        contentSource: 'stormCleanupPage.whatsIncluded',
        surfaceTone: 'warm',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 4, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'cool',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 5, {
        variant: 'process.stacked-steps',
        surfaceTone: 'olive',
      }),
      section('related-services', 'Related Services', 'RelatedServicesSection', 6, {
        variant: 'relatedServices.stacked-buttons',
        contentSource: 'stormCleanupPage.relatedServices',
        surfaceTone: 'base',
      }),
      section('faq', 'Storm Cleanup FAQ', 'FaqSection', 7, {
        variant: 'faq.clean-list',
        contentSource: 'stormCleanupPage.faq',
        surfaceTone: 'warm',
      }),
      section('estimate-form', 'Storm Cleanup Estimate Form', 'EstimateFormSection', 8, {
        contentSource: 'stormCleanupPage.estimateBox',
        surfaceTone: 'cool',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 9, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'olive',
      }),
    ],
    cardTitle: 'Storm Cleanup',
    seoTitle: 'Storm Cleanup in Parrish, FL | Parrish Tree Removal',
    seoDescription:
      'Storm cleanup in Parrish, FL for fallen limbs, blocked driveways, damaged trees, and urgent post-storm property concerns.',
    heroTitle: 'Storm Cleanup',
    heroIntro: 'Fast cleanup after storms and damage.',
    estimateHeading: 'Storm cleanup estimate request',
    estimateIntro:
      'Explain what fell, what is blocked, and whether anything is resting on a structure so we can understand the urgency and follow up quickly.',
    servicesOverviewSummary:
      'Tree and debris concerns after severe weather, broken limbs, or blocked access.',
    includedLayout: 'stack',
    whenLayout: 'list',
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
    ] as Array<string | IncludedItem>,
    processSteps: [
      'Submit the address, service area details, and a quick summary of the storm damage.',
      'Add photos if it is safe to do so, especially if access is blocked or a structure is involved.',
      'We follow up on the immediate next step and whether another tree service should be included.',
    ],
    relatedServices: [
      { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
      { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
      { href: '/contact', label: 'Contact Parrish Tree Removal' },
    ] as ServiceLink[],
    faq: [
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
    ] as FaqItem[],
    serviceCardSummary: 'Clean up storm damage and fallen debris.',
    icon: '⛈️',
  },

  aboutPage: {
    route: '/about',
    seoTitle: 'About Parrish Tree Removal | Tree Service in Parrish, FL',
    seoDescription:
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
      } as HeroAction,
    },
    sections: [
      section('hero', 'About Hero', 'HeroSection', 1, {
        variant: 'hero.split-image',
        contentSource: 'aboutPage.hero',
      }),
      section('what-homeowners-need', 'What Homeowners Need', 'CardGridSection', 2, {
        contentSource: 'aboutPage.homeownerNeeds',
        surfaceTone: 'base',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 3, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'warm',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 4, {
        variant: 'process.stacked-steps',
        surfaceTone: 'cool',
      }),
      section('how-requests-work', 'How Requests Work', 'InfoListSection', 5, {
        contentSource: 'aboutPage.howRequestsWork',
        surfaceTone: 'olive',
      }),
      section('related-services', 'Related Services', 'RelatedServicesSection', 6, {
        variant: 'relatedServices.stacked-buttons',
        contentSource: 'aboutPage.relatedServices',
        surfaceTone: 'base',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 7, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'cool',
      }),
    ],
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
  },

  contactPage: {
    route: '/contact',
    seoTitle: 'Contact Parrish Tree Removal | Free Estimate in Parrish, FL',
    seoDescription:
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
      } as HeroAction,
    },
    sections: [
      section('hero', 'Contact Hero', 'HeroSection', 1, {
        variant: 'hero.split-image',
        contentSource: 'contactPage.hero',
      }),
      section('estimate-form', 'Estimate Form', 'EstimateFormSection', 2, {
        contentSource: 'contactPage.estimateForm',
        surfaceTone: 'base',
      }),
      section('before-you-submit', 'Before You Submit', 'CardGridSection', 3, {
        contentSource: 'contactPage.beforeYouSubmit',
        surfaceTone: 'warm',
      }),
      section('why-choose-us', 'Why Choose Us', 'WhyChooseSection', 4, {
        variant: 'whyChoose.icon-grid',
        surfaceTone: 'cool',
      }),
      section('our-process', 'Our Process', 'ProcessSection', 5, {
        variant: 'process.stacked-steps',
        surfaceTone: 'olive',
      }),
      section('related-services', 'Related Services', 'RelatedServicesSection', 6, {
        variant: 'relatedServices.stacked-buttons',
        contentSource: 'contactPage.relatedServices',
        surfaceTone: 'base',
      }),
      section('service-area', 'Service Area', 'ServiceAreaSection', 7, {
        variant: 'serviceArea.map-card',
        contentSource: 'globalBusinessInfo.serviceAreaCopy',
        surfaceTone: 'cool',
      }),
    ],
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
  },

  productionForm: {
    action: '/api/estimate.php',
    note: 'Production submissions must continue posting to /api/estimate.php.',
  },

  socialLinks: {},
} as const;
