import { client } from './client';

export const pageContent = {
  home: {
    title: `Tree Removal, Tree Trimming, and Stump Grinding in ${client.primaryLocation} | ${client.businessName}`,
    description:
      'Request a free estimate for tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
    hero: {
      titlePrimary: 'Tree Services',
      titleSecondary: 'in Parrish, FL',
      intro:
        'Free estimate help for tree removal, tree trimming, stump grinding, and storm cleanup projects across Parrish and nearby communities.',
    },
    trustBadges: [
      'Clear estimate guidance',
      'Fast follow-up options',
      'Flexible project support',
      'Helpful next-step planning',
    ],
    servicesLead:
      'Tree service support for common residential property needs in and around Parrish, Florida.',
    estimateCta: {
      eyebrow: 'Free Estimate',
      heading: 'Ready To Talk About Your Tree Project?',
      intro:
        'Tell us what is going on at the property and request the next best step for tree removal, trimming, stump work, or storm cleanup.',
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
          'Yes. Many projects involve a combination of removal, trimming, stump work, and cleanup planning.',
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
        'Share a few project details and request free estimate follow-up for removal, trimming, stump work, or storm cleanup.',
      buttonLabel: 'Send Estimate Request',
    },
  },
  services: {
    title: `Tree Services in ${client.primaryLocation} | ${client.businessName}`,
    description:
      'Explore tree removal, tree trimming, stump grinding, and storm cleanup services in Parrish, FL with clear next-step guidance.',
    heroIntro:
      'Explore the main tree service pages for Parrish, FL and compare which option fits your property conditions best.',
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
        'Use the form below to request tree removal, trimming, stump grinding, or storm cleanup follow-up in Parrish, FL.',
      buttonLabel: 'Submit Free Estimate',
    },
  },
  about: {
    title: `About ${client.businessName} | Tree Service in ${client.primaryLocation}`,
    description:
      'Learn about Parrish Tree Removal, the estimate process, and the tree service guidance offered for homeowners in Parrish, FL.',
    heroIntro:
      'Parrish Tree Removal focuses on clear information, practical next steps, and a smoother estimate experience for common residential tree projects.',
    homeownerNeeds: [
      {
        title: 'Help identifying the right service',
        description:
          'The first question is often whether a tree needs removal, trimming, stump work, or storm-related cleanup.',
      },
      {
        title: 'Clear next-step guidance',
        description:
          'Projects move faster when the estimate request already includes useful details about access, urgency, and property layout.',
      },
      {
        title: 'Simple communication',
        description:
          'Good estimate support starts with straightforward information, not confusing steps or vague project descriptions.',
      },
      {
        title: 'Clear local context',
        description:
          'Parrish homeowners usually need service guidance that reflects their lot layout, access conditions, and storm-season concerns.',
      },
    ],
    howRequestsWork: [
      'Property owners describe the issue and the location on the lot.',
      'Tree size, access, and urgency are used to shape the next conversation.',
      'Removal, trimming, stump work, and cleanup can all be discussed together.',
    ],
  },
  contact: {
    title: `Contact ${client.businessName} | Free Estimate in ${client.primaryLocation}`,
    description:
      'Contact Parrish Tree Removal for a free estimate on tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
    heroIntro:
      'Share your project details, the property ZIP code, and the service you need to start the estimate process.',
    beforeYouSubmit: [
      {
        title: 'Property details help',
        description:
          'If possible, note whether the tree is near a structure, fence, driveway, or other obstacle that affects access.',
      },
      {
        title: 'Storm-related issues',
        description:
          'Mention if debris is blocking access or if a branch appears to be resting on a structure so the urgency is clear.',
      },
      {
        title: 'Prefer to call?',
        description:
          'The phone button in the left side of the header bar is always available as a quick call option.',
      },
      {
        title: 'ZIP code matters',
        description:
          'Including the property ZIP code helps confirm that the request fits the Parrish, FL service area from the start.',
      },
    ],
    estimateForm: {
      heading: 'Free estimate request',
      intro:
        'Use the form below to tell us about removal, trimming, stump work, or storm-related cleanup at your property.',
      buttonLabel: 'Submit Free Estimate',
    },
  },
} as const;
