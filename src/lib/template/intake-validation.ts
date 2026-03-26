import type { ClientIntake } from './intake-types';

const SAMPLE_BASELINE_IDENTITY = {
  businessName: 'Parrish Tree Removal',
  websiteDomain: 'parrishtreeremoval.com',
  assetHints: [
    '/images/ptr-header-logo.svg',
    '/images/parrish-service-area-map.svg',
    '/favicon.svg',
    '/favicon.ico',
    '../assets/hero-image.png',
  ],
} as const;

const REQUIRED_ASSET_KEYS = [
  'headerLogo',
  'heroImage',
  'ogImage',
  'serviceAreaMap',
  'faviconSvg',
  'faviconIco',
] as const;

function isBlank(value: string | undefined | null) {
  return !value || value.trim().length === 0;
}

function looksLikeAbsoluteUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function looksLikeDomain(value: string) {
  return /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(value);
}

function warnIfBlank(warnings: string[], label: string, value: string | undefined | null) {
  if (isBlank(value)) {
    warnings.push(`${label} is missing.`);
  }
}

function warnIfDuplicateStrings(warnings: string[], label: string, values: string[]) {
  const normalized = values.map((value) => value.trim().toLowerCase()).filter(Boolean);
  const duplicates = normalized.filter((value, index) => normalized.indexOf(value) !== index);
  if (duplicates.length > 0) {
    warnings.push(`${label} contains duplicate entries.`);
  }
}

function warnIfInvalidSectionOrder(
  warnings: string[],
  label: string,
  sectionOrder: string[],
  sections: Record<string, { enabled?: boolean }>,
) {
  const unknownIds = sectionOrder.filter((id) => !(id in sections));
  if (unknownIds.length > 0) {
    warnings.push(`${label} contains unknown section ids: ${unknownIds.join(', ')}.`);
  }

  const duplicates = sectionOrder.filter((id, index) => sectionOrder.indexOf(id) !== index);
  if (duplicates.length > 0) {
    warnings.push(`${label} contains duplicate section ids: ${Array.from(new Set(duplicates)).join(', ')}.`);
  }
}

export function validateClientIntake(intake: ClientIntake): string[] {
  const warnings: string[] = [];

  if (isBlank(intake.business.name)) {
    warnings.push('Business name is missing.');
  }
  if (isBlank(intake.business.legalBusinessName)) {
    warnings.push('Legal business name is missing. Set business.legalBusinessName for schema/business identity consistency.');
  }
  if (isBlank(intake.business.phone)) {
    warnings.push('Primary phone number is missing.');
  }
  if (isBlank(intake.business.email)) {
    warnings.push('Primary email is missing.');
  }
  if (isBlank(intake.business.websiteDomain)) {
    warnings.push('Website domain is missing.');
  } else {
    if (intake.business.websiteDomain.includes('://')) {
      warnings.push('business.websiteDomain should be a bare domain without http/https.');
    }
    if (intake.business.websiteDomain.includes('/')) {
      warnings.push('business.websiteDomain should not include a path.');
    }
    if (!looksLikeDomain(intake.business.websiteDomain.replace(/^www\./, ''))) {
      warnings.push('business.websiteDomain does not look like a valid domain.');
    }
  }

  if (isBlank(intake.business.primaryServiceArea)) {
    warnings.push('Primary service area is missing.');
  }
  if (intake.businessOperations.serviceAreasCovered.length === 0) {
    warnings.push('No covered service areas are listed in businessOperations.serviceAreasCovered.');
  }
  if (isBlank(intake.businessOperations.businessHours.mondayFriday)) {
    warnings.push('Weekday business hours are missing.');
  }

  REQUIRED_ASSET_KEYS.forEach((key) => {
    const assetValue = intake.brandAssets[key];
    if (isBlank(assetValue)) {
      warnings.push(`brandAssets.${key} is missing.`);
    }
  });

  if (!isBlank(intake.brandAssets.ogImage) && isBlank(intake.businessProfile.ogImageAlt)) {
    warnings.push('businessProfile.ogImageAlt is missing while brandAssets.ogImage is set.');
  }

  const socialEntries = {
    ...intake.businessProfile.socialProfiles,
    ...intake.businessProfile.reputationLinks,
  };

  Object.entries(socialEntries).forEach(([key, value]) => {
    if (!value) return;
    if (!looksLikeAbsoluteUrl(value)) {
      warnings.push(`${key} should be a full https URL.`);
    }
  });

  if (isBlank(intake.businessProfile.serviceTypeSummary)) {
    warnings.push('businessProfile.serviceTypeSummary is missing.');
  }

  const usingSampleBaselineIdentity =
    intake.business.name === SAMPLE_BASELINE_IDENTITY.businessName &&
    intake.business.websiteDomain === SAMPLE_BASELINE_IDENTITY.websiteDomain;

  if (!usingSampleBaselineIdentity) {
    const staleAssetKeys = REQUIRED_ASSET_KEYS.filter((key) =>
      SAMPLE_BASELINE_IDENTITY.assetHints.some((hint) => intake.brandAssets[key].includes(hint)),
    );

    if (staleAssetKeys.length > 0) {
      warnings.push(
        `These brand assets still look like the sample baseline assets for a cloned client: ${staleAssetKeys.join(', ')}.`,
      );
    }
  }

  warnIfBlank(warnings, 'homepage.hero.heading', intake.homepage.hero.heading);
  warnIfBlank(warnings, 'pages.services.hero.heading', intake.pages.services.hero.heading);
  warnIfBlank(warnings, 'pages.about.hero.heading', intake.pages.about.hero.heading);
  warnIfBlank(warnings, 'pages.contact.hero.heading', intake.pages.contact.hero.heading);

  if (intake.sharedContent.trustBadges.length === 0) {
    warnings.push('sharedContent.trustBadges is empty.');
  }
  if (intake.sharedContent.trustBadges.length < 2) {
    warnings.push('sharedContent.trustBadges is shorter than expected for the shared Trust Badges row.');
  }
  warnIfDuplicateStrings(warnings, 'sharedContent.trustBadges', intake.sharedContent.trustBadges);

  warnIfBlank(warnings, 'sharedContent.footerCredit', intake.sharedContent.footerCredit);
  warnIfBlank(warnings, 'sharedContent.estimateSectionLead', intake.sharedContent.estimateSectionLead);
  warnIfBlank(warnings, 'sharedContent.homepageModal.heading', intake.sharedContent.homepageModal.heading);
  warnIfBlank(warnings, 'sharedContent.homepageModal.intro', intake.sharedContent.homepageModal.intro);
  warnIfBlank(warnings, 'sharedContent.homepageModal.buttonLabel', intake.sharedContent.homepageModal.buttonLabel);
  warnIfBlank(warnings, 'sharedContent.serviceAreaLookup.heading', intake.sharedContent.serviceAreaLookup.heading);
  warnIfBlank(warnings, 'sharedContent.serviceAreaLookup.inputLabel', intake.sharedContent.serviceAreaLookup.inputLabel);
  warnIfBlank(warnings, 'sharedContent.serviceAreaLookup.submitButtonLabel', intake.sharedContent.serviceAreaLookup.submitButtonLabel);
  warnIfBlank(warnings, 'sharedContent.serviceAreaLookup.estimateButtonLabel', intake.sharedContent.serviceAreaLookup.estimateButtonLabel);

  if ((intake.homepage.sections.faq.items ?? []).length === 0) {
    warnings.push('homepage.sections.faq.items is empty.');
  }

  warnIfBlank(warnings, 'homepage.hero.supportingText', intake.homepage.hero.supportingText);
  warnIfBlank(warnings, 'pages.services.hero.supportingText', intake.pages.services.hero.supportingText);
  warnIfBlank(warnings, 'pages.about.hero.supportingText', intake.pages.about.hero.supportingText);
  warnIfBlank(warnings, 'pages.contact.hero.supportingText', intake.pages.contact.hero.supportingText);

  if (!intake.navigation.useDefaultTemplateOrder) {
    if (intake.navigation.customLinks.length === 0) {
      warnings.push('navigation.customLinks is empty while useDefaultTemplateOrder is false.');
    }

    intake.navigation.customLinks.forEach((link, index) => {
      warnIfBlank(warnings, `navigation.customLinks[${index}].label`, link.label);
      warnIfBlank(warnings, `navigation.customLinks[${index}].href`, link.href);
    });
  }

  warnIfInvalidSectionOrder(
    warnings,
    'homepage.sectionOrder',
    intake.homepage.sectionOrder,
    intake.homepage.sections,
  );
  warnIfInvalidSectionOrder(
    warnings,
    'pages.services.sectionOrder',
    intake.pages.services.sectionOrder,
    intake.pages.services.sections,
  );
  warnIfInvalidSectionOrder(
    warnings,
    'pages.about.sectionOrder',
    intake.pages.about.sectionOrder,
    intake.pages.about.sections,
  );
  warnIfInvalidSectionOrder(
    warnings,
    'pages.contact.sectionOrder',
    intake.pages.contact.sectionOrder,
    intake.pages.contact.sections,
  );

  const servicePages = [
    ['treeRemoval', intake.pages.treeRemoval],
    ['treeTrimming', intake.pages.treeTrimming],
    ['stumpGrinding', intake.pages.stumpGrinding],
    ['emergencyTreeService', intake.pages.emergencyTreeService],
  ] as const;

  servicePages.forEach(([pageKey, page]) => {
    warnIfBlank(warnings, `pages.${pageKey}.hero.heading`, page.hero.heading);
    warnIfBlank(warnings, `pages.${pageKey}.hero.supportingText`, page.hero.supportingText);
    warnIfInvalidSectionOrder(
      warnings,
      `pages.${pageKey}.sectionOrder`,
      page.sectionOrder,
      page.sections,
    );

    if (page.processSteps.length < 4) {
      warnings.push(`pages.${pageKey}.processSteps has ${page.processSteps.length} steps; the shared Process section expects 4.`);
    }

    if ((page.sections.whenYouNeedThis.bullets ?? []).length === 0) {
      warnings.push(`pages.${pageKey}.sections.whenYouNeedThis.bullets is empty.`);
    }

    if ((page.sections.whatsIncluded.items ?? []).length === 0) {
      warnings.push(`pages.${pageKey}.sections.whatsIncluded.items is empty.`);
    }

    if (page.relatedServiceLinks.length < 2) {
      warnings.push(`pages.${pageKey}.relatedServiceLinks is shorter than expected for Related Services.`);
    }

    if ((page.sections.faq.items ?? []).length === 0) {
      warnings.push(`pages.${pageKey}.sections.faq.items is empty.`);
    }

    warnIfBlank(warnings, `pages.${pageKey}.sections.estimate.heading`, page.sections.estimate.heading);
  });

  const seoEntries = [
    ['homepage', intake.homepage.seo],
    ['services', intake.pages.services.seo],
    ['about', intake.pages.about.seo],
    ['contact', intake.pages.contact.seo],
    ['treeRemoval', intake.pages.treeRemoval.seo],
    ['treeTrimming', intake.pages.treeTrimming.seo],
    ['stumpGrinding', intake.pages.stumpGrinding.seo],
    ['emergencyTreeService', intake.pages.emergencyTreeService.seo],
  ] as const;

  seoEntries.forEach(([key, seo]) => {
    warnIfBlank(warnings, `${key}.seo.title`, seo.title);
    warnIfBlank(warnings, `${key}.seo.description`, seo.description);
  });

  const duplicateTitles = seoEntries.filter(
    ([, seo], index) =>
      seo.title.trim().length > 0 &&
      seoEntries.findIndex(([, candidate]) => candidate.title.trim() === seo.title.trim()) !== index,
  );
  if (duplicateTitles.length > 0) {
    warnings.push('SEO titles contain duplicates across pages. Each page should keep a unique title tag.');
  }

  const duplicateDescriptions = seoEntries.filter(
    ([, seo], index) =>
      seo.description.trim().length > 0 &&
      seoEntries.findIndex(([, candidate]) => candidate.description.trim() === seo.description.trim()) !== index,
  );
  if (duplicateDescriptions.length > 0) {
    warnings.push('SEO descriptions contain duplicates across pages. Each page should keep a unique meta description.');
  }

  return warnings;
}
