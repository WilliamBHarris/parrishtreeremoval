/**
 * THIN EXPORT / COMPATIBILITY LAYER
 *
 * Do not start new client setup here.
 * Edit `src/data/client-intake.ts` first.
 */
import { templateConfig } from './client-questionnaire';

export const client = {
  businessName: templateConfig.business.businessName,
  siteName: templateConfig.business.siteName,
  legalBusinessName: templateConfig.business.legalBusinessName,
  websiteDomain: templateConfig.business.websiteDomain,
  primaryPhoneDisplay: templateConfig.business.phone.display,
  primaryPhoneHref: templateConfig.business.phone.href,
  email: templateConfig.business.email,
  primaryLocation: templateConfig.business.primaryLocation,
  state: templateConfig.business.state,
  serviceAreas: templateConfig.business.serviceAreas,
  serviceAreaCopy: templateConfig.business.serviceAreaCopy,
  serviceAreaZipCodes: templateConfig.business.serviceAreaZipCodes,
  jobsCompleted: templateConfig.business.jobsCompleted,
  yearsInBusiness: templateConfig.business.yearsInBusiness,
  googleRating: templateConfig.business.googleRating,
  colorTheme: templateConfig.colorTheme,
  trustTicker: templateConfig.trustTicker,
  ctas: templateConfig.ctas,
  footer: templateConfig.footer,
  navigation: templateConfig.navigation,
  hours: templateConfig.business.hours,
  sharedContent: templateConfig.sharedContent,
  social: templateConfig.social,
} as const;
