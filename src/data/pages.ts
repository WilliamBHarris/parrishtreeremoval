import { templateConfig } from './client-questionnaire';

export const pageContent = {
  home: templateConfig.pages.home,
  services: templateConfig.pages.services,
  about: templateConfig.pages.about,
  contact: templateConfig.pages.contact,
} as const;
