import { client } from './client';

export const pageContent = {
  home: {
    title: `Tree Removal, Tree Trimming, and Stump Grinding in ${client.primaryLocation} | ${client.businessName}`,
    description:
      'Request a free estimate for tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
    hero: {
      titlePrimary: 'Parrish Tree Removal',
      titleSecondary: '',
      intro:
        'Tree Services',
    },
    trustBadges: [
      'Locally focused service',
      'Prompt communication',
      'Residential tree work',
      'Clean project follow-through',
    ],
    servicesLead:
      'Professional tree services for residential properties throughout Parrish and the surrounding area.',
    estimateCta: {
      eyebrow: 'Free Estimate',
      heading: 'Need Help With A Tree Project?',
      intro:
        'Tell us what is going on at your property and we will follow up about tree removal, trimming, stump grinding, or storm cleanup.',
      buttonLabel: 'Get Estimate',
    },
    faq: [
      {
        question: 'What details should I include in an estimate request?',
        answer:
          'The most helpful details are the tree location, approximate size, access conditions, photos if available, and whether there is anything urgent.',
      },
      {
        question: 'Can one request include more than one service?',
        answer:
          'Yes. Many jobs involve a combination of tree removal, trimming, stump grinding, and debris cleanup.',
      },
      {
        question: 'Do you cover nearby cities outside Parrish?',
        answer:
          'Nearby communities are commonly included. Sharing the property ZIP code is a quick way to confirm whether the location fits the service area.',
      },
    ],
    modal: {
      heading: 'Tell us about your tree service project',
      intro:
        'Share a few project details and we will follow up about tree removal, trimming, stump work, or storm cleanup.',
      buttonLabel: 'Send Estimate Request',
    },
  },
  services: {
    title: `Tree Services in ${client.primaryLocation} | ${client.businessName}`,
    description:
      'Explore tree removal, tree trimming, stump grinding, and storm cleanup services in Parrish, FL with clear next-step guidance.',
    heroIntro:
      'Tree care for Parrish area properties.',
    compareCards: [
      {
        title: 'Tree Removal',
        description:
          'Best for dead, hazardous, unwanted, or badly placed trees near structures and access points.',
      },
      {
        title: 'Tree Trimming',
        description:
          'Best for overgrowth, roof clearance, branch reduction, shaping, and routine maintenance needs.',
      },
      {
        title: 'Stump Grinding or Storm Cleanup',
        description:
          'Use stump grinding for leftover stumps and storm cleanup for fallen limbs, blocked access, and urgent weather damage.',
      },
    ],
    estimateTips: [
      'Explain where the tree or stump sits on the property.',
      'Note whether the issue is routine, urgent, or storm-related.',
      'Include photos when possible to clarify scale and access.',
    ],
    estimateForm: {
      heading: 'Free estimate request',
      intro:
        'Use the form below to contact us about tree removal, trimming, stump grinding, or storm cleanup for your property.',
      buttonLabel: 'Submit Free Estimate',
    },
  },
  about: {
    title: `About ${client.businessName} | Tree Service in ${client.primaryLocation}`,
    description:
      'Learn about Parrish Tree Removal, the estimate process, and the tree service guidance offered for homeowners in Parrish, FL.',
    heroIntro:
      'Local service with clear communication.',
    homeownerNeeds: [
      {
        title: 'A company that understands the job',
        description:
          'Homeowners want honest guidance on whether a job calls for removal, trimming, stump grinding, or storm cleanup.',
      },
      {
        title: 'Clear communication',
        description:
          'Projects go more smoothly when the scope, access, and property conditions are explained clearly from the beginning.',
      },
      {
        title: 'Respect for the property',
        description:
          'Residential tree work needs planning around roofs, driveways, fences, landscaping, and access points.',
      },
      {
        title: 'Local familiarity',
        description:
          'Parrish-area properties often come with unique lot layouts, storm-season concerns, and access challenges that matter during tree work.',
      },
    ],
    howRequestsWork: [
      'Homeowners reach out with the service they need and a description of the property.',
      'Tree size, access, and nearby structures help shape the scope of the work.',
      'If a project involves more than one service, it can be discussed as part of the same conversation.',
    ],
  },
  contact: {
    title: `Contact ${client.businessName} | Free Estimate in ${client.primaryLocation}`,
    description:
      'Contact Parrish Tree Removal for a free estimate on tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
    heroIntro:
      'Request help for your tree project.',
    beforeYouSubmit: [
      {
        title: 'Tell us about the property',
        description:
          'If possible, mention whether the tree is near a structure, fence, driveway, pool area, or another obstacle that affects access.',
      },
      {
        title: 'Mention storm damage',
        description:
          'Let us know if debris is blocking access or if a branch is resting on a structure so we can understand the urgency.',
      },
      {
        title: 'Call if that is easier',
        description:
          'The phone button in the header is always available if you would rather talk through the project directly.',
      },
      {
        title: 'Include the ZIP code',
        description:
          'Including the property ZIP code helps us confirm the job is within our service area from the start.',
      },
    ],
    estimateForm: {
      heading: 'Free estimate request',
      intro:
        'Use the form below to tell us about tree removal, trimming, stump grinding, or storm cleanup at your property.',
      buttonLabel: 'Submit Free Estimate',
    },
  },
} as const;
