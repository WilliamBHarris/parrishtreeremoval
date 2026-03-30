import {
  bodyTypographyMap,
  buttonBorderStyleMap,
  cardBorderStyleMap,
  cardSurfaceMap,
  colorTemplateMap,
  headerStyleMap,
  headingTypographyMap,
  sectionTitleStyleMap,
  sectionFrameStyleMap,
  siteStylePresets,
  variantOptions,
} from './intake-option-maps';
import { validateClientIntake } from './intake-validation';
import {
  createServicePageData,
  filterSectionOrder,
  normalizeLayout,
  presetBaselineDisplayLabels,
  resolveHeroVariant,
  resolvePresetVariantOverride,
  resolveSectionVariant,
  resolveSiteStylePreset,
} from './intake-normalizers';
import type { ClientIntake, HeroContent, TemplateConfig } from './intake-types';

const baselineDefaults = {
  business: {
    siteName: 'Parrish Tree Removal',
  },
  branding: {
    colorOverrides: {
      primary: '#014421',
      secondary: '#A67B5B',
      accent: '#FF6700',
      highlight: '#A67B5B',
      pageBg: '#F5F5DC',
      pageBgSoft: '#EEEBD5',
      surface: '#FFFFFF',
      surfaceSoft: '#F8F5EA',
      text: '#1F1F1F',
      textSoft: '#5C5C5C',
      heading: '#014421',
      line: 'rgba(1, 68, 33, 0.10)',
      lineStrong: 'rgba(1, 68, 33, 0.18)',
      overlay: 'rgba(1, 68, 33, 0.16)',
      buttonTop: '#014421',
      buttonBottom: '#012F17',
      accentTop: '#014421',
      accentBottom: '#012F17',
      themeColor: '#014421',
    },
    styleControls: {
      borderRadius: 'medium',
      overlayStrength: 'medium',
      elevationStrength: 'medium',
    },
  },
  ctas: {
    heroEstimate: 'Free Estimate',
    homepageEstimate: 'Get Free Estimate',
    submitEstimate: 'Submit Free Estimate',
    requestEstimate: 'Request A Free Estimate',
    sendEstimate: 'Send Estimate Request',
    backToTop: 'Back to Top',
  },
  sharedContent: {
    footerCredit: '© Will Made It.',
    estimateSectionLead: 'Share a few job details and the next step stays simple.',
    serviceAreaLookup: {
      heading: 'Are We In Your Area?',
      intro: 'Enter your zip code.',
      inputLabel: 'Enter your ZIP code',
      inputPlaceholder: 'ZIP code',
      submitButtonLabel: 'Submit',
      estimateButtonLabel: 'Request Estimate',
      invalidZipMessage: 'Enter a valid 5-digit ZIP code.',
      inAreaMessage: "We're in your area.",
      outOfAreaMessage: "Sorry, we aren't out there yet.",
    },
    homepageModal: {
      heading: 'Tell us about your tree service project',
      intro:
        'Share a few project details and we will follow up about tree removal, trimming, stump work, or storm cleanup.',
      buttonLabel: 'Send Estimate Request',
    },
  },
};

const defaultProcessClosingStep =
  'Once the scope is clear, the job can move forward into quoting and scheduling.';

function buildTrustBadgeDescriptions(primaryServiceArea: string): Record<string, string> {
  return {
    'Locally focused service': `Built around ${primaryServiceArea} homeowners and nearby residential properties.`,
    'Prompt communication': 'Quick follow-up, clear updates, and straightforward scheduling support.',
    'Residential tree work': 'Practical help for tree service, cleanup, and everyday property needs.',
    'Clean project follow-through': 'A tidy finish with debris handled and the work area left in order.',
  };
}

function normalizeText(value: string | undefined | null, fallback: string) {
  return value && value.trim().length > 0 ? value.trim() : fallback;
}

function normalizeStringList(values: Array<string | undefined | null>) {
  return values
    .map((value) => value?.trim() ?? '')
    .filter((value): value is string => value.length > 0);
}

function normalizeTrustBadges(values: Array<string | undefined | null>, primaryServiceArea: string) {
  const trustBadgeDescriptions = buildTrustBadgeDescriptions(primaryServiceArea);
  return normalizeStringList(values).map((label) => ({
    label,
    description:
      trustBadgeDescriptions[label] ??
      'Clear, dependable service shaped around the property and the next step.',
  }));
}

function normalizeFaqItems<T extends { question: string; answer: string }>(items: T[]) {
  return items.filter((item) => item.question.trim().length > 0 && item.answer.trim().length > 0);
}

function normalizeRelatedLinks<T extends { href: string; label: string }>(
  links: T[],
  validServiceLinks: Array<{ href: string; label: string; description: string }>,
  currentServiceHref: string,
) {
  const allowedServiceLinks = new Map(
    validServiceLinks.map((link) => [normalizeNavigationHref(link.href), link] as const),
  );
  const normalized = links
    .map((link) => {
      const href = normalizeNavigationHref(link.href);
      if (!href || href === currentServiceHref || !allowedServiceLinks.has(href) || link.label.trim().length === 0) {
        return null;
      }

      return {
        href,
        label: link.label.trim(),
        description: allowedServiceLinks.get(href)?.description,
      };
    })
    .filter((link): link is { href: string; label: string; description?: string } => link !== null);

  const usedHrefs = new Set(normalized.map((link) => link.href));
  const fallbackLinks = validServiceLinks.filter(
    (link) => link.href !== currentServiceHref && !usedHrefs.has(link.href),
  );

  return [...normalized, ...fallbackLinks].slice(0, Math.max(validServiceLinks.length - 1, 0));
}

function normalizeCompareCards<T extends { title: string; description: string }>(items: T[]) {
  return items.filter((item) => item.title.trim().length > 0 && item.description.trim().length > 0);
}

function normalizeNavigationHref(value: string | undefined | null) {
  const href = value?.trim() ?? '';
  if (!href) return '';
  if (href === '/') return href;
  return href.startsWith('/') ? href.replace(/\/+$/, '') || '/' : href;
}

function normalizeNavigationLinks(links: Array<{ label: string; href: string }>) {
  return links
    .map((link) => ({
      label: normalizeText(link.label, ''),
      href: normalizeNavigationHref(link.href),
    }))
    .filter((link) => link.label.length > 0 && link.href.length > 0);
}

function toHrefFromPhone(phone: string) {
  return `+1${phone.replace(/\D/g, '')}`;
}

function makeHero(
  heading: string,
  supportingText: string,
  backgroundStyle: string | undefined,
  ctaKind: 'modal' | 'link' | 'none',
  ctaLabel: string,
  ctaHref?: string,
  ctaTarget?: string,
): HeroContent {
  const normalizedHeading = normalizeText(heading, 'Tree Service');
  const words = normalizedHeading.split(' ');
  const titlePrimary = words.slice(0, Math.max(1, words.length)).join(' ');

  return {
    titlePrimary,
    titleSecondary: '',
    outlineWords: words,
    intro: supportingText.trim(),
    variant: resolveHeroVariant(backgroundStyle),
    cta:
      ctaKind === 'none'
        ? { kind: 'none', label: '' }
        : {
            kind: ctaKind,
            label: normalizeText(ctaLabel, baselineDefaults.ctas.heroEstimate),
            href: ctaHref,
            target: ctaTarget,
          },
  };
}

function toSectionDescription(item: { title: string; text?: string; description?: string }) {
  return item.description ?? item.text ?? '';
}

function buildPrimaryNavigation(intake: ClientIntake): TemplateConfig['navigation']['primaryLinks'] {
  const defaultLinks: TemplateConfig['navigation']['primaryLinks'] = [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      children: [
        { href: '/tree-removal', label: 'Tree Removal' },
        { href: '/stump-grinding', label: 'Stump Grinding' },
        { href: '/tree-trimming', label: 'Tree Trimming' },
        { href: '/emergency-tree-service', label: 'Storm & Emergency' },
      ],
    },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  if (intake.navigation.useDefaultTemplateOrder || intake.navigation.customLinks.length === 0) {
    return defaultLinks;
  }

  const normalizedCustomLinks = normalizeNavigationLinks(intake.navigation.customLinks);

  return normalizedCustomLinks.length > 0 ? normalizedCustomLinks : defaultLinks;
}

function buildServicePageSource(
  slug: string,
  page: ClientIntake['pages']['treeRemoval'],
  fallbackIcon: string,
  validServiceLinks: Array<{ href: string; label: string }>,
) {
  const normalizedProcessSteps =
    page.processSteps.length >= 4
      ? [...page.processSteps]
      : [...page.processSteps, defaultProcessClosingStep].slice(0, 4);

  return {
    cardTitle: normalizeText(page.cardTitle, 'Tree Service'),
    seoTitle: normalizeText(page.seo.title, 'Tree Service'),
    seoDescription: normalizeText(page.seo.description, 'Local tree service information.'),
    heroTitle: normalizeText(page.hero.heading, 'Tree Service'),
    heroIntro: page.hero.supportingText.trim(),
    estimateHeading: normalizeText(page.sections.estimate.heading, 'Free estimate request'),
    estimateIntro: page.sections.estimate.supportingText.trim(),
    servicesOverviewSummary: normalizeText(page.servicesOverviewSummary, page.serviceCardSummary),
    includedLayout:
      resolveSectionVariant(page.sections.whatsIncluded.displayStyle).included,
    whenLayout:
      resolveSectionVariant(page.sections.whenYouNeedThis.displayStyle).whenNeeded,
    whenYouNeedThisService: normalizeStringList(page.sections.whenYouNeedThis.bullets ?? []),
    whatsIncluded: (page.sections.whatsIncluded.items ?? []).map((item) => ({
      title: normalizeText(item.title, 'Included service item'),
      description: normalizeText(toSectionDescription(item), 'Service details available on request.'),
    })),
    processSteps: normalizeStringList(normalizedProcessSteps),
    relatedServices: normalizeRelatedLinks([...page.relatedServiceLinks], validServiceLinks, `/${slug}`),
    faq: normalizeFaqItems([...page.sections.faq.items]),
    serviceCardSummary: normalizeText(page.serviceCardSummary, page.cardTitle),
    icon: fallbackIcon,
  };
}

export function buildSiteConfig(intake: ClientIntake): TemplateConfig {
  const cloneSafetyWarnings = validateClientIntake(intake);
  if (cloneSafetyWarnings.length > 0) {
    console.warn(
      `[template] Clone-safety warnings for ${intake.business.name}:\n- ${cloneSafetyWarnings.join('\n- ')}`,
    );
  }

  const selectedPreset = resolveSiteStylePreset(intake);
  const normalizedTrustBadges = normalizeTrustBadges(intake.sharedContent.trustBadges, intake.business.primaryServiceArea);
  const normalizedFooterCredit = normalizeText(
    intake.sharedContent.footerCredit,
    baselineDefaults.sharedContent.footerCredit,
  );
  const normalizedServiceAreaLookup = {
    heading: normalizeText(
      intake.sharedContent.serviceAreaLookup.heading,
      baselineDefaults.sharedContent.serviceAreaLookup.heading,
    ),
    intro: normalizeText(
      intake.sharedContent.serviceAreaLookup.intro,
      baselineDefaults.sharedContent.serviceAreaLookup.intro,
    ),
    inputLabel: normalizeText(
      intake.sharedContent.serviceAreaLookup.inputLabel,
      baselineDefaults.sharedContent.serviceAreaLookup.inputLabel,
    ),
    inputPlaceholder: normalizeText(
      intake.sharedContent.serviceAreaLookup.inputPlaceholder,
      baselineDefaults.sharedContent.serviceAreaLookup.inputPlaceholder,
    ),
    submitButtonLabel: normalizeText(
      intake.sharedContent.serviceAreaLookup.submitButtonLabel,
      baselineDefaults.sharedContent.serviceAreaLookup.submitButtonLabel,
    ),
    estimateButtonLabel: normalizeText(
      intake.sharedContent.serviceAreaLookup.estimateButtonLabel,
      baselineDefaults.sharedContent.serviceAreaLookup.estimateButtonLabel,
    ),
    invalidZipMessage: normalizeText(
      intake.sharedContent.serviceAreaLookup.invalidZipMessage,
      baselineDefaults.sharedContent.serviceAreaLookup.invalidZipMessage,
    ),
    inAreaMessage: normalizeText(
      intake.sharedContent.serviceAreaLookup.inAreaMessage,
      baselineDefaults.sharedContent.serviceAreaLookup.inAreaMessage,
    ),
    outOfAreaMessage: normalizeText(
      intake.sharedContent.serviceAreaLookup.outOfAreaMessage,
      baselineDefaults.sharedContent.serviceAreaLookup.outOfAreaMessage,
    ),
  };
  const normalizedHomepageModal = {
    heading: normalizeText(
      intake.sharedContent.homepageModal.heading,
      baselineDefaults.sharedContent.homepageModal.heading,
    ),
    intro: normalizeText(
      intake.sharedContent.homepageModal.intro,
      baselineDefaults.sharedContent.homepageModal.intro,
    ),
    buttonLabel: normalizeText(
      intake.sharedContent.homepageModal.buttonLabel,
      baselineDefaults.sharedContent.homepageModal.buttonLabel,
    ),
  };
  const location = intake.business.primaryServiceArea;
  const servicePageLinkPool = [
    {
      href: '/tree-removal',
      label: `Tree Removal in ${location}`,
      description: 'Remove damaged or unwanted trees safely.',
    },
    {
      href: '/tree-trimming',
      label: `Tree Trimming in ${location}`,
      description: 'Trim trees for clearance, shape, and upkeep.',
    },
    {
      href: '/stump-grinding',
      label: `Stump Grinding in ${location}`,
      description: 'Clear old stumps and open up the yard.',
    },
    {
      href: '/emergency-tree-service',
      label: `Storm Cleanup in ${location}`,
      description: 'Clean up storm damage and fallen debris.',
    },
  ];

  function withAutoDisabledFaq<T extends Record<string, { enabled: boolean }>>(
    sections: T & { faq?: { enabled: boolean; items?: unknown[] } },
  ): T {
    const faq = sections.faq;
    if (!faq || (faq.items ?? []).length > 0) return sections;
    return { ...sections, faq: { ...faq, enabled: false } };
  }

  const homeOrder = filterSectionOrder(intake.homepage.sectionOrder, withAutoDisabledFaq(intake.homepage.sections));
  const servicesOrder = filterSectionOrder(intake.pages.services.sectionOrder, withAutoDisabledFaq(intake.pages.services.sections));
  const aboutOrder = filterSectionOrder(intake.pages.about.sectionOrder, withAutoDisabledFaq(intake.pages.about.sections));
  const contactOrder = filterSectionOrder(intake.pages.contact.sectionOrder, withAutoDisabledFaq(intake.pages.contact.sections));

  const homeSectionVariants = {
    services: resolveSectionVariant(intake.homepage.sections.services.displayStyle),
    whyChoose: resolveSectionVariant(intake.homepage.sections.whyChooseUs.displayStyle),
    process: resolveSectionVariant(intake.sitewideChoices.processStyle),
    serviceArea: resolveSectionVariant(intake.sitewideChoices.serviceAreaStyle),
    faq: resolveSectionVariant(intake.sitewideChoices.faqStyle),
    estimate: resolveSectionVariant(intake.homepage.sections.estimate.displayStyle),
    relatedServices: resolveSectionVariant(intake.sitewideChoices.relatedServicesStyle),
  };
  const headingTypography = resolvePresetVariantOverride(
    selectedPreset.headingTypography,
    intake.sitewideChoices.headingTypographyStyle,
    presetBaselineDisplayLabels.headingTypography,
    headingTypographyMap[intake.sitewideChoices.headingTypographyStyle] ?? selectedPreset.headingTypography,
  );
  const bodyTypography = resolvePresetVariantOverride(
    selectedPreset.bodyTypography,
    intake.sitewideChoices.bodyTypographyStyle,
    presetBaselineDisplayLabels.bodyTypography,
    bodyTypographyMap[intake.sitewideChoices.bodyTypographyStyle] ?? selectedPreset.bodyTypography,
  );
  const sectionTitleStyle = resolvePresetVariantOverride(
    selectedPreset.sectionTitleStyle,
    intake.sitewideChoices.sectionTitleStyle,
    presetBaselineDisplayLabels.sectionTitleStyle,
    sectionTitleStyleMap[intake.sitewideChoices.sectionTitleStyle] ?? selectedPreset.sectionTitleStyle,
  );
  const colorTemplate = resolvePresetVariantOverride(
    selectedPreset.colorTemplate,
    intake.sitewideChoices.colorTemplateStyle,
    presetBaselineDisplayLabels.colorTemplate,
    colorTemplateMap[intake.sitewideChoices.colorTemplateStyle] ?? selectedPreset.colorTemplate,
  );
  const cardSurface = resolvePresetVariantOverride(
    selectedPreset.cardSurface,
    intake.sitewideChoices.cardSurfaceStyle,
    presetBaselineDisplayLabels.cardSurface,
    cardSurfaceMap[intake.sitewideChoices.cardSurfaceStyle] ?? selectedPreset.cardSurface,
  );
  const cardBorderStyle = resolvePresetVariantOverride(
    selectedPreset.cardBorderStyle,
    intake.sitewideChoices.cardBorderStyle,
    presetBaselineDisplayLabels.cardBorderStyle,
    cardBorderStyleMap[intake.sitewideChoices.cardBorderStyle] ?? selectedPreset.cardBorderStyle,
  );
  const buttonBorderStyle = resolvePresetVariantOverride(
    selectedPreset.buttonBorderStyle,
    intake.sitewideChoices.buttonBorderStyle,
    presetBaselineDisplayLabels.buttonBorderStyle,
    buttonBorderStyleMap[intake.sitewideChoices.buttonBorderStyle] ?? selectedPreset.buttonBorderStyle,
  );
  const sectionFrameStyle = resolvePresetVariantOverride(
    selectedPreset.sectionFrameStyle,
    intake.sitewideChoices.sectionFrameStyle,
    presetBaselineDisplayLabels.sectionFrameStyle,
    sectionFrameStyleMap[intake.sitewideChoices.sectionFrameStyle] ?? selectedPreset.sectionFrameStyle,
  );
  const headerVariant = resolvePresetVariantOverride(
    selectedPreset.header,
    intake.sitewideChoices.headerStyle,
    presetBaselineDisplayLabels.header,
    headerStyleMap[intake.sitewideChoices.headerStyle] ?? selectedPreset.header,
  );

  return {
    questionnaireMeta: {
      mainFileLabel: 'Primary Client Onboarding Questionnaire',
      templateName: 'Reusable Tree Service Website Template',
      referenceClient: intake.business.name,
      note: 'Preset A keeps the locked baseline live design/output unchanged.',
      selectedSitePreset: selectedPreset.id,
      cloneSafetyWarnings,
    },
    presetLibrary: siteStylePresets,
    variantLibrary: variantOptions,
    business: {
      businessName: intake.business.name,
      siteName: intake.business.siteDisplayName ?? intake.business.name,
      legalBusinessName: intake.business.legalBusinessName ?? intake.business.name,
      websiteDomain: intake.business.websiteDomain,
      primaryLocation: intake.business.primaryServiceArea,
      state: intake.businessOperations.state,
      phone: {
        display: intake.business.phone,
        href: toHrefFromPhone(intake.business.phone),
      },
      email: intake.business.email,
      hours: intake.businessOperations.businessHours,
      serviceAreas: intake.businessOperations.serviceAreasCovered,
      serviceAreaCopy: intake.business.serviceAreaSummary,
      serviceAreaZipCodes: intake.businessOperations.serviceAreaZipCodes,
    },
    branding: {
      identity: {
        mark: intake.brandAssets.identityMark,
      },
      assets: {
        headerLogo: intake.brandAssets.headerLogo,
        heroImage: intake.brandAssets.heroImage,
        ogImage: intake.brandAssets.ogImage,
        ogImageAlt: intake.businessProfile.ogImageAlt,
        serviceAreaMap: intake.brandAssets.serviceAreaMap,
        faviconSvg: intake.brandAssets.faviconSvg,
        faviconIco: intake.brandAssets.faviconIco,
      },
      colorTemplate,
      typographyPreset: selectedPreset.typographyPreset,
      borderPreset: selectedPreset.borderPreset,
      headingTypography,
      bodyTypography,
      sectionTitleStyle,
      cardSurface,
      cardBorderStyle,
      buttonBorderStyle,
      sectionFrameStyle,
      colors: baselineDefaults.branding.colorOverrides,
      styleControls: baselineDefaults.branding.styleControls,
    },
    presets: {
      header: headerVariant,
      hero: selectedPreset.hero,
      services: resolvePresetVariantOverride(
        selectedPreset.services,
        intake.homepage.sections.services.displayStyle,
        presetBaselineDisplayLabels.services,
        homeSectionVariants.services.services,
      ),
      estimateCta: resolvePresetVariantOverride(
        selectedPreset.estimateCta,
        intake.homepage.sections.estimate.displayStyle,
        presetBaselineDisplayLabels.estimate,
        homeSectionVariants.estimate.estimate,
      ),
      relatedServices: resolvePresetVariantOverride(
        selectedPreset.relatedServices,
        intake.sitewideChoices.relatedServicesStyle,
        presetBaselineDisplayLabels.relatedServices,
        homeSectionVariants.relatedServices.relatedServices,
      ),
      whyChoose: resolvePresetVariantOverride(
        selectedPreset.whyChoose,
        intake.homepage.sections.whyChooseUs.displayStyle,
        presetBaselineDisplayLabels.whyChoose,
        homeSectionVariants.whyChoose.whyChoose,
      ),
      process: resolvePresetVariantOverride(
        selectedPreset.process,
        intake.sitewideChoices.processStyle,
        presetBaselineDisplayLabels.process,
        homeSectionVariants.process.process,
      ),
      faq: resolvePresetVariantOverride(
        selectedPreset.faq,
        intake.sitewideChoices.faqStyle,
        presetBaselineDisplayLabels.faq,
        homeSectionVariants.faq.faq,
      ),
      serviceArea: resolvePresetVariantOverride(
        selectedPreset.serviceArea,
        intake.sitewideChoices.serviceAreaStyle,
        presetBaselineDisplayLabels.serviceArea,
        homeSectionVariants.serviceArea.serviceArea,
      ),
      buttonStyle: selectedPreset.buttonStyle,
      iconStyle: selectedPreset.iconStyle,
    },
    ctas: {
      ...baselineDefaults.ctas,
      heroEstimate: intake.contactCallsToAction.primaryButtonLabel,
      homepageEstimate: intake.contactCallsToAction.primaryButtonLabel,
      requestEstimate: intake.contactCallsToAction.primaryButtonLabel,
      secondaryButtonLabel: intake.contactCallsToAction.secondaryButtonLabel,
    },
    footer: {
      creditText: normalizedFooterCredit,
    },
    navigation: {
      primaryLinks: buildPrimaryNavigation(intake),
    },
    trust: {
      trustBadges: normalizedTrustBadges,
    },
    sharedContent: {
      estimateSectionLead: normalizeText(
        intake.sharedContent.estimateSectionLead,
        baselineDefaults.sharedContent.estimateSectionLead,
      ),
      serviceAreaLookup: normalizedServiceAreaLookup,
    },
    services: {
      treeRemoval: createServicePageData(
        'tree-removal',
        'tree-removal',
        buildServicePageSource('tree-removal', intake.pages.treeRemoval, '🪵', servicePageLinkPool),
      ),
      treeTrimming: createServicePageData(
        'tree-trimming',
        'tree-trimming',
        buildServicePageSource('tree-trimming', intake.pages.treeTrimming, '🌳', servicePageLinkPool),
      ),
      stumpGrinding: createServicePageData(
        'stump-grinding',
        'stump-grinding',
        buildServicePageSource('stump-grinding', intake.pages.stumpGrinding, '🚜', servicePageLinkPool),
      ),
      stormCleanup: createServicePageData(
        'emergency-tree-service',
        'emergency-tree-service',
        buildServicePageSource('emergency-tree-service', intake.pages.emergencyTreeService, '⛈️', servicePageLinkPool),
      ),
    },
    pages: {
      home: {
        route: '/',
        title: intake.homepage.seo.title,
        description: intake.homepage.seo.description,
        hero: makeHero(
          intake.homepage.hero.heading,
          intake.homepage.hero.supportingText,
          intake.homepage.hero.backgroundStyle,
          'modal',
          intake.homepage.hero.primaryButtonLabel ?? intake.contactCallsToAction.primaryButtonLabel,
          undefined,
          'estimate-modal',
        ),
        trustBadges: normalizedTrustBadges,
        servicesLead: intake.homepage.sections.services.intro?.trim() ?? '',
        estimateCta: {
          eyebrow: normalizeText(intake.contactCallsToAction.primaryButtonLabel, baselineDefaults.ctas.heroEstimate),
          heading: normalizeText(intake.homepage.sections.estimate.heading, 'Get a Free Estimate'),
          intro: normalizeText(intake.homepage.sections.estimate.supportingText, intake.contactCallsToAction.estimateIntro),
          buttonLabel: normalizeText(intake.contactCallsToAction.primaryButtonLabel, baselineDefaults.ctas.heroEstimate),
        },
        faq: normalizeFaqItems([...(intake.homepage.sections.faq.items as { question: string; answer: string }[])]),
        modal: normalizedHomepageModal,
        layout: normalizeLayout('/', homeOrder, intake.homepage.sections, {
          services: 'base',
          whyChooseUs: 'warm',
          process: 'cool',
          estimate: 'olive',
          faq: 'base',
          serviceArea: 'cool',
        }),
      },
      services: {
        route: '/services',
        title: intake.pages.services.seo.title,
        description: intake.pages.services.seo.description,
        hero: makeHero(
          intake.pages.services.hero.heading,
          intake.pages.services.hero.supportingText,
          intake.pages.services.hero.backgroundStyle,
          'modal',
          intake.contactCallsToAction.primaryButtonLabel,
          undefined,
          'estimate-modal',
        ),
        compareCards: normalizeCompareCards(intake.sharedContent.servicesPage.compareCards),
        estimateTips: normalizeStringList(intake.sharedContent.servicesPage.estimateTips),
        estimateForm: {
          heading: normalizeText(intake.pages.services.sections.estimate.heading, 'Free estimate request'),
          intro: normalizeText(intake.pages.services.sections.estimate.supportingText, intake.contactCallsToAction.estimateIntro),
          buttonLabel: baselineDefaults.ctas.submitEstimate,
        },
        layout: normalizeLayout('/services', servicesOrder, intake.pages.services.sections, {
          servicesOverview: 'base',
          compareServices: 'warm',
          whyChooseUs: 'cool',
          faq: 'warm',
          estimate: 'base',
          serviceArea: 'cool',
        }),
      },
      about: {
        route: '/about',
        title: intake.pages.about.seo.title,
        description: intake.pages.about.seo.description,
        hero: makeHero(
          intake.pages.about.hero.heading,
          intake.pages.about.hero.supportingText,
          intake.pages.about.hero.backgroundStyle,
          'modal',
          intake.contactCallsToAction.primaryButtonLabel,
          undefined,
          'estimate-modal',
        ),
        homeownerNeeds: normalizeCompareCards(intake.sharedContent.aboutPage.homeownerNeeds),
        howRequestsWork: normalizeStringList(intake.sharedContent.aboutPage.howRequestsWork),
        layout: normalizeLayout('/about', aboutOrder, intake.pages.about.sections, {
          whatHomeownersNeed: 'base',
          faq: 'cool',
          estimate: 'olive',
        }),
      },
      contact: {
        route: '/contact',
        title: intake.pages.contact.seo.title,
        description: intake.pages.contact.seo.description,
        hero: makeHero(
          intake.pages.contact.hero.heading,
          intake.pages.contact.hero.supportingText,
          intake.pages.contact.hero.backgroundStyle,
          'modal',
          intake.contactCallsToAction.primaryButtonLabel,
          undefined,
          'estimate-modal',
        ),
        beforeYouSubmit: (
          (intake.pages.contact.sections.beforeYouSubmit.items ?? []) as Array<{
            title: string;
            text?: string;
            description?: string;
          }>
        ).map((item) => ({
          title: item.title,
          description: toSectionDescription(item),
        })),
        estimateForm: {
          heading: normalizeText(intake.pages.contact.sections.estimate.heading, 'Free estimate request'),
          intro: normalizeText(intake.pages.contact.sections.estimate.supportingText, intake.contactCallsToAction.estimateIntro),
          buttonLabel: baselineDefaults.ctas.submitEstimate,
        },
        layout: normalizeLayout('/contact', contactOrder, intake.pages.contact.sections, {
          beforeYouSubmit: 'warm',
          estimate: 'base',
          serviceArea: 'cool',
        }),
      },
      serviceDetailTemplate: {
        route: '/:service-slug',
        layout: normalizeLayout('/:service-slug', intake.pages.treeRemoval.sectionOrder, intake.pages.treeRemoval.sections, {
          whenYouNeedThis: 'base',
          whatsIncluded: 'warm',
          whyChooseUs: 'cool',
          process: 'olive',
          relatedServices: 'base',
          faq: 'warm',
          estimate: 'cool',
          serviceArea: 'olive',
        }),
      },
    },
    form: {
      action: '/api/estimate.php',
      phpFlowNote: 'Production submissions must continue posting to /api/estimate.php.',
    },
    social: {
      profiles: Object.fromEntries(
        Object.entries(intake.businessProfile.socialProfiles).filter(([, value]) => Boolean(value)),
      ),
      reputation: Object.fromEntries(
        Object.entries(intake.businessProfile.reputationLinks).filter(([, value]) => Boolean(value)),
      ),
      serviceTypeSummary: intake.businessProfile.serviceTypeSummary,
    },
  };
}
