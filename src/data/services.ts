import { templateConfig } from './client-questionnaire';
import type { ServicePageData } from './client-questionnaire';

export type { ServiceLink, FaqItem, IncludedItem, ServicePageData } from './client-questionnaire';

export const servicePages: Record<string, ServicePageData> = {
  treeRemoval: templateConfig.services.treeRemoval,
  treeTrimming: templateConfig.services.treeTrimming,
  stumpGrinding: templateConfig.services.stumpGrinding,
  stormCleanup: templateConfig.services.stormCleanup,
};

export const serviceCardList = [
  servicePages.treeRemoval,
  servicePages.treeTrimming,
  servicePages.stumpGrinding,
  servicePages.stormCleanup,
];

export const estimateServiceOptions = [
  ...serviceCardList.map((service) => service.cardTitle),
  'General Estimate Request',
];
