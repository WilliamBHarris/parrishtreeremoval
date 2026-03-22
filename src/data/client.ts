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
  ctas: templateConfig.ctas,
  hours: templateConfig.business.hours,
  social: templateConfig.social,
} as const;
