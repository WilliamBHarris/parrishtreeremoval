import { templateConfig } from './client-questionnaire';

export const client = {
  businessName: templateConfig.business.businessName,
  siteName: templateConfig.business.siteName,
  primaryPhoneDisplay: templateConfig.business.phone.display,
  primaryPhoneHref: templateConfig.business.phone.href,
  email: templateConfig.business.email,
  primaryLocation: templateConfig.business.primaryLocation,
  state: templateConfig.business.state,
  serviceAreas: templateConfig.business.serviceAreas,
  serviceAreaCopy: templateConfig.business.serviceAreaCopy,
  ctas: templateConfig.ctas,
  hours: templateConfig.business.hours,
} as const;
