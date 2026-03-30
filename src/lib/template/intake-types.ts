/**
 * PLAIN-LANGUAGE INTAKE TYPES
 *
 * The intake layer uses controlled human-facing labels. Internal component and
 * variant keys are mapped later in the template normalizer/build steps.
 *
 * Important setup rule:
 * the selected preset provides the default live section variants. The intake's
 * human-facing display labels act as intentional overrides when they are
 * changed away from the Variant A baseline labels.
 */

export type SectionTone = 'base' | 'warm' | 'cool' | 'olive';

export type SiteStylePresetId =
  | 'preset-a-baseline'
  | 'preset-b-premium-modern'
  | 'preset-c-local-family-owned'
  | 'preset-d-storm-response-emergency'
  | 'preset-e-upscale-residential';

export type HeaderVariant =
  | 'baseline-a'
  | 'clean-centered'
  | 'utility-split'
  | 'premium-compact'
  | 'strong-local-cta'
  | 'minimal-overlay';
export type HeroVariant = 'split-image' | 'centered' | 'abstract-no-image';
export type ServicesVariant = 'grid-cards' | 'stacked-panels' | 'compact-list' | 'tabs';
export type EstimateCtaVariant = 'single-panel' | 'split-content' | 'emphasized-conversion';
export type RelatedServicesVariant = 'stacked-buttons' | 'grid-links' | 'card-links';
export type WhyChooseVariant = 'icon-grid' | 'stacked-panels';
export type ProcessVariant = 'stacked-steps' | 'numbered-cards' | 'timeline';
export type FaqVariant = 'clean-list' | 'card-grid' | 'accordion';
export type ServiceAreaVariant = 'map-card' | 'text-first' | 'compact-map';
export type ColorTemplatePreset =
  | 'baseline-a'
  | 'evergreen-premium'
  | 'sunlit-local'
  | 'storm-contrast'
  | 'estate-mineral';
export type CardSurfacePreset = 'baseline-a' | 'soft-tint' | 'transparent-surface';
export type CardBorderStylePreset =
  | 'baseline-a'
  | 'none'
  | 'soft-hairline'
  | 'medium-solid'
  | 'thick-framed'
  | 'rounded-outline'
  | 'inset-outline'
  | 'accent-edge'
  | 'top-border-accent';
export type ButtonBorderStylePreset =
  | 'baseline-a'
  | 'none'
  | 'subtle-outline'
  | 'bold-outline'
  | 'pill-outline'
  | 'square-utility'
  | 'offset-shadow-frame'
  | 'underline-button'
  | 'framed-cta';
export type SectionFrameStylePreset =
  | 'baseline-a'
  | 'none'
  | 'subtle-top-rule'
  | 'subtle-bottom-rule'
  | 'top-and-bottom-rules'
  | 'inset-framed-panel'
  | 'rounded-section-shell'
  | 'offset-frame'
  | 'side-rails';
export type HeadingTypographyPreset =
  | 'baseline-a'
  | 'premium-editorial'
  | 'friendly-rounded'
  | 'strong-utility'
  | 'refined-modern';
export type BodyTypographyPreset =
  | 'baseline-a'
  | 'premium-editorial'
  | 'friendly-readable'
  | 'strong-utility'
  | 'refined-modern';
export type SectionTitleStylePreset =
  | 'baseline-a'
  | 'minimal-stacked'
  | 'underline-accent'
  | 'side-rule'
  | 'centered-divider'
  | 'boxed-label';

export type PresetStyleLabel = 'Preset A' | 'Preset B' | 'Preset C' | 'Preset D' | 'Preset E';
export type VisualToneLabel =
  | 'Clean and trustworthy'
  | 'Bold and premium'
  | 'Friendly and approachable'
  | 'Rugged and local'
  | 'Modern and high-contrast';
export type WritingToneLabel =
  | 'Professional and local'
  | 'Confident and premium'
  | 'Friendly and reassuring'
  | 'Direct and practical';
export type HeadingTypographyLabel =
  | 'Variant A headings'
  | 'Premium editorial headings'
  | 'Friendly rounded headings'
  | 'Strong utility headings'
  | 'Refined modern headings';
export type BodyTypographyLabel =
  | 'Variant A body'
  | 'Premium editorial body'
  | 'Friendly readable body'
  | 'Strong utility body'
  | 'Refined modern body';
export type SectionTitleStyleLabel =
  | 'Variant A section titles'
  | 'Minimal stacked'
  | 'Underline accent'
  | 'Side rule'
  | 'Centered divider'
  | 'Boxed label';
export type HeaderStyleLabel =
  | 'Variant A header'
  | 'Clean centered header'
  | 'Utility split header'
  | 'Premium compact header'
  | 'Strong local CTA header'
  | 'Minimal overlay header';
export type ColorTemplateLabel =
  | 'Variant A palette'
  | 'Evergreen premium palette'
  | 'Warm local palette'
  | 'Storm high-contrast palette'
  | 'Estate mineral palette';
export type CardSurfaceLabel = 'Variant A filled cards' | 'Subtle soft cards' | 'Transparent card surfaces';
export type CardBorderStyleLabel =
  | 'Variant A card borders'
  | 'No card border'
  | 'Soft hairline'
  | 'Medium solid'
  | 'Thick framed'
  | 'Rounded outline'
  | 'Inset outline'
  | 'Accent edge'
  | 'Top-border accent';
export type ButtonBorderStyleLabel =
  | 'Variant A buttons'
  | 'No button border'
  | 'Subtle outline'
  | 'Bold outline'
  | 'Pill outline'
  | 'Square utility outline'
  | 'Offset shadow frame'
  | 'Underline button'
  | 'Framed CTA';
export type SectionFrameStyleLabel =
  | 'Variant A section framing'
  | 'No section frame'
  | 'Subtle top rule'
  | 'Subtle bottom rule'
  | 'Top and bottom rules'
  | 'Inset framed panel'
  | 'Rounded section shell'
  | 'Offset frame'
  | 'Side rails';
export type ServiceDisplayLabel =
  | 'Variant A service cards'
  | 'Tabbed services'
  | 'Accordion services'
  | 'Carousel services';
export type FaqDisplayLabel = 'Variant A FAQ' | 'Expandable questions';
export type ProcessDisplayLabel = 'Variant A stacked process' | 'Connected timeline process';
export type ServiceAreaDisplayLabel = 'Variant A map section' | 'ZIP code service check';
export type EstimateDisplayLabel = 'Variant A estimate section' | 'Highlighted single card';
export type RelatedServicesDisplayLabel =
  | 'Variant A related services'
  | 'Variant A service cards'
  | 'Stacked centered buttons'
  | 'Highlighted single card';
export type WhenNeededDisplayLabel = 'Highlighted single card' | 'Multi-card explanation';
export type IncludedItemsDisplayLabel = 'Standard included-items stack' | 'Two-column included cards';
export type WhyChooseDisplayLabel = 'Variant A why choose us' | 'Standard reassurance cards';
export type GenericContentDisplayLabel =
  | 'Standard comparison cards'
  | 'Standard content section'
  | 'Standard info cards'
  | 'Standard reassurance cards'
  | 'Multi-card explanation';
export type HeroBackgroundLabel = 'Variant A hero' | 'Centered feature hero' | 'Abstract no-image hero';

export type AnyDisplayLabel =
  | ServiceDisplayLabel
  | FaqDisplayLabel
  | ProcessDisplayLabel
  | ServiceAreaDisplayLabel
  | EstimateDisplayLabel
  | RelatedServicesDisplayLabel
  | WhenNeededDisplayLabel
  | IncludedItemsDisplayLabel
  | WhyChooseDisplayLabel
  | GenericContentDisplayLabel;

export type SectionId =
  | 'hero'
  | 'trustBadges'
  | 'services'
  | 'whyChooseUs'
  | 'process'
  | 'serviceArea'
  | 'faq'
  | 'estimate'
  | 'servicesOverview'
  | 'compareServices'
  | 'whenYouNeedThis'
  | 'whatsIncluded'
  | 'relatedServices'
  | 'beforeYouSubmit'
  | 'companyStory'
  | 'whatHomeownersNeed';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceLink {
  href: string;
  label: string;
  description?: string;
}

export interface IncludedItem {
  title: string;
  text?: string;
  description?: string;
}

export interface CompareCard {
  title: string;
  description: string;
}

export interface IntakeSectionPlan {
  id: SectionId | string;
  label: string;
  enabled: boolean;
  order: number;
  displayStyle?: AnyDisplayLabel;
  contentKey?: string;
  surfaceTone?: SectionTone;
  notes?: string;
}

export interface HeroAction {
  kind: 'modal' | 'link' | 'anchor' | 'none';
  label: string;
  href?: string;
  target?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  children?: NavigationLink[];
}

export interface HeroContent {
  titlePrimary: string;
  titleSecondary: string;
  outlineWords: string[];
  intro: string;
  variant: HeroVariant;
  cta: HeroAction;
}

export interface TrustBadge {
  label: string;
  description: string;
}

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
  intendedClient: string;
  useCase: string;
  visualIdentity: string;
  writingDirection: string;
  conversionFocus: string;
  colorTemplate: ColorTemplatePreset;
  typographyPreset: 'baseline-a' | 'modern-sans' | 'heritage-serif';
  borderPreset: 'layered-angled' | 'straight-clean' | 'soft-panels';
  headingTypography: HeadingTypographyPreset;
  bodyTypography: BodyTypographyPreset;
  sectionTitleStyle: SectionTitleStylePreset;
  header: HeaderVariant;
  cardSurface: CardSurfacePreset;
  cardBorderStyle: CardBorderStylePreset;
  buttonBorderStyle: ButtonBorderStylePreset;
  sectionFrameStyle: SectionFrameStylePreset;
  hero: HeroVariant;
  services: ServicesVariant;
  estimateCta: EstimateCtaVariant;
  relatedServices: RelatedServicesVariant;
  whyChoose: WhyChooseVariant;
  process: ProcessVariant;
  faq: FaqVariant;
  serviceArea: ServiceAreaVariant;
  buttonStyle: 'gradient-pill' | 'soft-solid' | 'quiet-outline';
  iconStyle: 'emoji' | 'badge' | 'minimal-line';
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
  whatsIncluded: Array<string | { title: string; description: string }>;
  processSteps: string[];
  relatedServices: ServiceLink[];
  faqs: FaqItem[];
  serviceCardSummary: string;
  icon: string;
}

export interface BasicSeo {
  title: string;
  description: string;
}

export interface BasicHeroWorksheet {
  heading: string;
  supportingText: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  backgroundStyle?: HeroBackgroundLabel;
}

export interface GenericSectionWorksheet {
  enabled: boolean;
  // Human-facing display label. In the builder, this acts as an intentional
  // override if it differs from the baseline preset label for that section.
  displayStyle: AnyDisplayLabel;
  intro?: string;
  heading?: string;
  supportingText?: string;
  featuredServices?: string[];
  bullets?: string[];
  items?: Array<FaqItem | IncludedItem | string>;
  paragraphs?: string[];
  links?: ServiceLink[];
}

export interface PageWorksheet {
  enabled: boolean;
  seo: BasicSeo;
  hero: BasicHeroWorksheet;
  sectionOrder: string[];
  sections: Record<string, GenericSectionWorksheet>;
}

export interface ServiceDetailPageWorksheet extends PageWorksheet {
  cardTitle: string;
  serviceCardSummary: string;
  servicesOverviewSummary: string;
  processSteps: string[];
  relatedServiceLinks: ServiceLink[];
  sections: {
    whenYouNeedThis: GenericSectionWorksheet & { bullets: string[] };
    whatsIncluded: GenericSectionWorksheet & { items: IncludedItem[] };
    whyChooseUs: GenericSectionWorksheet;
    process: GenericSectionWorksheet;
    serviceArea: GenericSectionWorksheet;
    relatedServices: GenericSectionWorksheet;
    faq: GenericSectionWorksheet & { items: FaqItem[] };
    estimate: GenericSectionWorksheet;
  };
}

export interface ClientIntake {
  business: {
    name: string;
    siteDisplayName?: string;
    legalBusinessName?: string;
    phone: string;
    email: string;
    websiteDomain: string;
    primaryServiceArea: string;
    serviceAreaSummary: string;
    emergencyServiceOffered: boolean;
    residentialOnly: boolean;
    licenseAndInsuranceNote: string;
    jobsCompleted?: number;
    yearsInBusiness?: number;
    googleRating?: number;
  };
  businessOperations: {
    state: string;
    businessHours: {
      mondayFriday: string;
      saturday: string;
    };
    serviceAreasCovered: string[];
    serviceAreaZipCodes: string[];
  };
  brandAssets: {
    identityMark: string;
    headerLogo: string;
    heroImage: string;
    ogImage: string;
    serviceAreaMap: string;
    faviconSvg: string;
    faviconIco: string;
  };
  businessProfile: {
    serviceTypeSummary: string;
    ogImageAlt: string;
    socialProfiles: {
      googleBusinessProfile?: string;
      facebook?: string;
      instagram?: string;
      nextdoor?: string;
      yelp?: string;
    };
    reputationLinks: {
      googleReviews?: string;
      yelpReviews?: string;
    };
  };
  brandDirection: {
    presetStyle: PresetStyleLabel;
    visualTone: VisualToneLabel;
    writingTone: WritingToneLabel;
    primaryEmphasis: string;
    secondaryEmphasis: string;
    colorTheme?: 'forest' | 'storm' | 'terrain' | 'sunlit';
  };
  contactCallsToAction: {
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    estimateIntro: string;
    phoneButtonText: string;
  };
  navigation: {
    useDefaultTemplateOrder: boolean;
    customLinks: Array<{ label: string; href: string }>;
  };
  sitewideChoices: {
    trustBadgesStyle: string;
    headerStyle: HeaderStyleLabel;
    headingTypographyStyle: HeadingTypographyLabel;
    bodyTypographyStyle: BodyTypographyLabel;
    sectionTitleStyle: SectionTitleStyleLabel;
    colorTemplateStyle: ColorTemplateLabel;
    cardSurfaceStyle: CardSurfaceLabel;
    cardBorderStyle: CardBorderStyleLabel;
    buttonBorderStyle: ButtonBorderStyleLabel;
    sectionFrameStyle: SectionFrameStyleLabel;
    faqStyle: FaqDisplayLabel;
    processStyle: ProcessDisplayLabel;
    serviceAreaStyle: ServiceAreaDisplayLabel;
    estimateSectionStyle: EstimateDisplayLabel;
    relatedServicesStyle: RelatedServicesDisplayLabel;
  };
  sharedContent: {
    trustBadges: string[];
    trustTicker: string[];
    footerCredit: string;
    estimateSectionLead: string;
    serviceAreaLookup: {
      heading: string;
      intro: string;
      inputLabel: string;
      inputPlaceholder: string;
      submitButtonLabel: string;
      estimateButtonLabel: string;
      invalidZipMessage: string;
      inAreaMessage: string;
      outOfAreaMessage: string;
    };
    homepageModal: {
      heading: string;
      intro: string;
      buttonLabel: string;
    };
    servicesPage: {
      compareCards: CompareCard[];
      estimateTips: string[];
    };
    aboutPage: {
      homeownerNeeds: CompareCard[];
      howRequestsWork: string[];
    };
  };
  homepage: PageWorksheet & {
    sections: {
      services: GenericSectionWorksheet;
      whyChooseUs: GenericSectionWorksheet;
      process: GenericSectionWorksheet;
      serviceArea: GenericSectionWorksheet;
      faq: GenericSectionWorksheet & { items: FaqItem[] };
      estimate: GenericSectionWorksheet;
    };
  };
  pages: {
    services: PageWorksheet;
    treeRemoval: ServiceDetailPageWorksheet;
    treeTrimming: ServiceDetailPageWorksheet;
    stumpGrinding: ServiceDetailPageWorksheet;
    emergencyTreeService: ServiceDetailPageWorksheet;
    about: PageWorksheet;
    contact: PageWorksheet;
  };
}

export interface TemplateConfig {
  questionnaireMeta: {
    mainFileLabel: string;
    templateName: string;
    referenceClient: string;
    note: string;
    selectedSitePreset: SiteStylePresetId;
    cloneSafetyWarnings: string[];
  };
  presetLibrary: Record<SiteStylePresetId, SiteStylePresetDefinition>;
  variantLibrary: Record<string, ReadonlyArray<VariantOption<string>>>;
  business: {
    businessName: string;
    siteName: string;
    legalBusinessName: string;
    websiteDomain: string;
    primaryLocation: string;
    state: string;
    phone: {
      display: string;
      href: string;
    };
    email: string;
    hours: {
      mondayFriday: string;
      saturday: string;
    };
    serviceAreas: string[];
    serviceAreaCopy: string;
    serviceAreaZipCodes: string[];
    jobsCompleted?: number;
    yearsInBusiness?: number;
    googleRating?: number;
  };
  colorTheme: 'forest' | 'storm' | 'terrain' | 'sunlit';
  trustTicker: string[];
  branding: {
    identity: {
      mark: string;
    };
    assets: {
      headerLogo: string;
      heroImage: string;
      ogImage: string;
      ogImageAlt: string;
      serviceAreaMap: string;
      faviconSvg: string;
      faviconIco: string;
    };
    colorTemplate: ColorTemplatePreset;
    typographyPreset: 'baseline-a' | 'modern-sans' | 'heritage-serif';
    borderPreset: 'layered-angled' | 'straight-clean' | 'soft-panels';
    headingTypography: HeadingTypographyPreset;
    bodyTypography: BodyTypographyPreset;
    sectionTitleStyle: SectionTitleStylePreset;
    cardSurface: CardSurfacePreset;
    cardBorderStyle: CardBorderStylePreset;
    buttonBorderStyle: ButtonBorderStylePreset;
    sectionFrameStyle: SectionFrameStylePreset;
    colors: Record<string, string>;
    styleControls: {
      borderRadius: string;
      overlayStrength: string;
      elevationStrength: string;
    };
  };
  presets: {
    header: HeaderVariant;
    hero: HeroVariant;
    services: ServicesVariant;
    estimateCta: EstimateCtaVariant;
    relatedServices: RelatedServicesVariant;
    whyChoose: WhyChooseVariant;
    process: ProcessVariant;
    faq: FaqVariant;
    serviceArea: ServiceAreaVariant;
    buttonStyle: 'gradient-pill' | 'soft-solid' | 'quiet-outline';
    iconStyle: 'emoji' | 'badge' | 'minimal-line';
  };
  ctas: {
    heroEstimate: string;
    homepageEstimate: string;
    submitEstimate: string;
    requestEstimate: string;
    sendEstimate: string;
    backToTop: string;
    secondaryButtonLabel: string;
  };
  footer: {
    creditText: string;
  };
  navigation: {
    primaryLinks: NavigationLink[];
  };
  trust: {
    trustBadges: TrustBadge[];
  };
  sharedContent: {
    estimateSectionLead: string;
    serviceAreaLookup: {
      heading: string;
      intro: string;
      inputLabel: string;
      inputPlaceholder: string;
      submitButtonLabel: string;
      estimateButtonLabel: string;
      invalidZipMessage: string;
      inAreaMessage: string;
      outOfAreaMessage: string;
    };
  };
  services: {
    treeRemoval: ServicePageData;
    treeTrimming: ServicePageData;
    stumpGrinding: ServicePageData;
    stormCleanup: ServicePageData;
  };
  pages: {
    home: {
      route: string;
      title: string;
      description: string;
      hero: HeroContent;
      trustBadges: TrustBadge[];
      servicesLead: string;
      estimateCta: {
        eyebrow: string;
        heading: string;
        intro: string;
        buttonLabel: string;
      };
      faq: FaqItem[];
      modal: {
        heading: string;
        intro: string;
        buttonLabel: string;
      };
      layout: LayoutSectionEntry[];
    };
    services: {
      route: string;
      title: string;
      description: string;
      hero: HeroContent;
      compareCards: CompareCard[];
      estimateTips: string[];
      estimateForm: {
        heading: string;
        intro: string;
        buttonLabel: string;
      };
      layout: LayoutSectionEntry[];
    };
    about: {
      route: string;
      title: string;
      description: string;
      hero: HeroContent;
      homeownerNeeds: CompareCard[];
      howRequestsWork: string[];
      layout: LayoutSectionEntry[];
    };
    contact: {
      route: string;
      title: string;
      description: string;
      hero: HeroContent;
      beforeYouSubmit: CompareCard[];
      estimateForm: {
        heading: string;
        intro: string;
        buttonLabel: string;
      };
      layout: LayoutSectionEntry[];
    };
    serviceDetailTemplate: {
      route: string;
      layout: LayoutSectionEntry[];
    };
  };
  form: {
    action: string;
    phpFlowNote: string;
  };
  social: {
    profiles: Record<string, string>;
    reputation: Record<string, string>;
    serviceTypeSummary: string;
  };
}

export type ThemePalettePreset = ColorTemplatePreset;
export type TypographyPreset = SiteStylePresetDefinition['typographyPreset'];
export type BorderPreset = SiteStylePresetDefinition['borderPreset'];
export type ButtonStylePreset = ButtonBorderStylePreset;
export type IconStylePreset = SiteStylePresetDefinition['iconStyle'];
