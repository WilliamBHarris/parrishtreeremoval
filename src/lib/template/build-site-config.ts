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

const parrishDefaults = {
  business: {
    siteName: 'Parrish Tree Removal',
  },
  branding: {
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
};

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
  const words = heading.split(' ');
  const titlePrimary = words.slice(0, Math.max(1, words.length)).join(' ');

  return {
    titlePrimary,
    titleSecondary: '',
    outlineWords: words,
    intro: supportingText,
    variant: resolveHeroVariant(backgroundStyle),
    cta:
      ctaKind === 'none'
        ? { kind: 'none', label: '' }
        : {
            kind: ctaKind,
            label: ctaLabel,
            href: ctaHref,
            target: ctaTarget,
          },
  };
}

function toSectionDescription(item: { title: string; text?: string; description?: string }) {
  return item.description ?? item.text ?? '';
}

function buildServicePageSource(
  slug: string,
  page: ClientIntake['pages']['treeRemoval'],
  fallbackIcon: string,
) {
  return {
    cardTitle: page.cardTitle,
    seoTitle: page.seo.title,
    seoDescription: page.seo.description,
    heroTitle: page.hero.heading,
    heroIntro: page.hero.supportingText,
    estimateHeading: page.sections.estimate.heading ?? 'Free estimate request',
    estimateIntro: page.sections.estimate.supportingText ?? '',
    servicesOverviewSummary: page.servicesOverviewSummary,
    includedLayout:
      resolveSectionVariant(page.sections.whatsIncluded.displayStyle).included,
    whenLayout:
      resolveSectionVariant(page.sections.whenYouNeedThis.displayStyle).whenNeeded,
    whenYouNeedThisService: page.sections.whenYouNeedThis.bullets ?? [],
    whatsIncluded: (page.sections.whatsIncluded.items ?? []).map((item) => ({
      title: item.title,
      description: toSectionDescription(item),
    })),
    processSteps: [...page.processSteps],
    relatedServices: [...page.relatedServiceLinks],
    faq: [...page.sections.faq.items],
    serviceCardSummary: page.serviceCardSummary,
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

  const homeOrder = filterSectionOrder(intake.homepage.sectionOrder, intake.homepage.sections);
  const servicesOrder = filterSectionOrder(intake.pages.services.sectionOrder, intake.pages.services.sections);
  const aboutOrder = filterSectionOrder(intake.pages.about.sectionOrder, intake.pages.about.sections);
  const contactOrder = filterSectionOrder(intake.pages.contact.sectionOrder, intake.pages.contact.sections);

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
      note: 'Preset A keeps the current Parrish live design/output unchanged.',
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
      colors: parrishDefaults.branding.colorOverrides,
      styleControls: parrishDefaults.branding.styleControls,
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
      ...parrishDefaults.ctas,
      heroEstimate: intake.contactCallsToAction.primaryButtonLabel,
      homepageEstimate: intake.contactCallsToAction.primaryButtonLabel,
      requestEstimate: intake.contactCallsToAction.primaryButtonLabel,
      secondaryButtonLabel: intake.contactCallsToAction.secondaryButtonLabel,
    } as TemplateConfig['ctas'],
    trust: {
      trustBadges: intake.sharedContent.trustBadges,
    },
    services: {
      treeRemoval: createServicePageData(
        'tree-removal',
        'tree-removal',
        buildServicePageSource('tree-removal', intake.pages.treeRemoval, '🪵'),
      ),
      treeTrimming: createServicePageData(
        'tree-trimming',
        'tree-trimming',
        buildServicePageSource('tree-trimming', intake.pages.treeTrimming, '🌳'),
      ),
      stumpGrinding: createServicePageData(
        'stump-grinding',
        'stump-grinding',
        buildServicePageSource('stump-grinding', intake.pages.stumpGrinding, '🚜'),
      ),
      stormCleanup: createServicePageData(
        'emergency-tree-service',
        'emergency-tree-service',
        buildServicePageSource('emergency-tree-service', intake.pages.emergencyTreeService, '⛈️'),
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
        trustBadges: intake.sharedContent.trustBadges,
        servicesLead: intake.homepage.sections.services.intro ?? '',
        estimateCta: {
          eyebrow: intake.contactCallsToAction.primaryButtonLabel,
          heading: intake.homepage.sections.estimate.heading ?? 'Get a Free Estimate',
          intro: intake.homepage.sections.estimate.supportingText ?? intake.contactCallsToAction.estimateIntro,
          buttonLabel: intake.contactCallsToAction.primaryButtonLabel,
        },
        faq: [...(intake.homepage.sections.faq.items as { question: string; answer: string }[])],
        modal: intake.sharedContent.homepageModal,
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
          'link',
          intake.contactCallsToAction.primaryButtonLabel,
          '/contact',
        ),
        compareCards: intake.sharedContent.servicesPage.compareCards,
        estimateTips: intake.sharedContent.servicesPage.estimateTips,
        estimateForm: {
          heading: intake.pages.services.sections.estimate.heading ?? 'Free estimate request',
          intro: intake.pages.services.sections.estimate.supportingText ?? intake.contactCallsToAction.estimateIntro,
          buttonLabel: parrishDefaults.ctas.submitEstimate,
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
          'link',
          intake.contactCallsToAction.primaryButtonLabel,
          '/contact',
        ),
        homeownerNeeds: intake.sharedContent.aboutPage.homeownerNeeds,
        howRequestsWork: intake.sharedContent.aboutPage.howRequestsWork,
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
          'none',
          '',
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
          heading: intake.pages.contact.sections.estimate.heading ?? 'Free estimate request',
          intro: intake.pages.contact.sections.estimate.supportingText ?? intake.contactCallsToAction.estimateIntro,
          buttonLabel: parrishDefaults.ctas.submitEstimate,
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
