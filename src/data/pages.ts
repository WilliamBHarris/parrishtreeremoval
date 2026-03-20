/**
 * THIN EXPORT / COMPATIBILITY LAYER
 *
 * Do not start new client setup here.
 * Edit `src/data/client-intake.ts` first.
 */
import { templateConfig } from './client-questionnaire';

export const pageContent = {
  home: templateConfig.pages.home,
  services: templateConfig.pages.services,
  about: templateConfig.pages.about,
  contact: templateConfig.pages.contact,
} as const;
