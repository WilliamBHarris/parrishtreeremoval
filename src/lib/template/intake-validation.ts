import type { ClientIntake } from './intake-types';

const PARRISH_BASELINE = {
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

  const usingParrishBaselineIdentity =
    intake.business.name === PARRISH_BASELINE.businessName &&
    intake.business.websiteDomain === PARRISH_BASELINE.websiteDomain;

  if (!usingParrishBaselineIdentity) {
    const staleAssetKeys = REQUIRED_ASSET_KEYS.filter((key) =>
      PARRISH_BASELINE.assetHints.some((hint) => intake.brandAssets[key].includes(hint)),
    );

    if (staleAssetKeys.length > 0) {
      warnings.push(
        `These brand assets still look like Parrish baseline assets for a cloned client: ${staleAssetKeys.join(', ')}.`,
      );
    }
  }

  return warnings;
}

