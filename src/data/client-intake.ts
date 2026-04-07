/**
 * PRIMARY CLIENT INTAKE FILE
 *
 * Edit this file first for future client setups.
 *
 * This worksheet is intentionally written in plain language. The template
 * builder translates these answers into the lower-level site config.
 *
 * Recommended workflow:
 * 1. Update the business/contact details first.
 * 2. Pick the preset in brandDirection.presetStyle.
 * 3. Leave the section style labels on their baseline values unless you
 *    intentionally want to override the selected preset for one section.
 * 4. Update page copy, SEO, FAQs, and section order after the preset is chosen.
 *
 * Preset A preserves the locked baseline output.
 */

import type { ClientIntake } from '../lib/template/intake-types';
import { presetBaselineDisplayLabels, presetIntentNotes } from '../lib/template/intake-option-maps';

export const clientIntakeGuide = {
  quickStart: [
    'Start with business details, contact info, and service area.',
    'Choose one preset before changing individual section styles.',
    'Leave the baseline style labels alone if you want the preset bundle to control the default look.',
    'Only change a section style label when you intentionally want that section to differ from the preset bundle.',
  ],
  presetGuide: {
    'Preset A': presetIntentNotes['preset-a-baseline'],
    'Preset B': presetIntentNotes['preset-b-premium-modern'],
    'Preset C': presetIntentNotes['preset-c-local-family-owned'],
    'Preset D': presetIntentNotes['preset-d-storm-response-emergency'],
    'Preset E': presetIntentNotes['preset-e-upscale-residential'],
  },
  overrideGuide: {
    services: `Leave "${presetBaselineDisplayLabels.services}" to follow the selected preset. Change it only when you want a different homepage/services presentation than the preset default.`,
    faq: `Leave "${presetBaselineDisplayLabels.faq}" to follow the selected preset. Change it only when you want a different FAQ treatment everywhere the site uses the shared FAQ style.`,
    process: `Leave "${presetBaselineDisplayLabels.process}" to follow the selected preset. Change it only when you want a different shared Process presentation site-wide.`,
    serviceArea: `Leave "${presetBaselineDisplayLabels.serviceArea}" to follow the selected preset. Change it only when you want a different shared Service Area treatment site-wide.`,
  },
  fieldGroups: {
    business: 'Core business identity used across the whole site.',
    businessOperations: 'Operational defaults such as service coverage and business hours.',
    brandAssets: 'Client-owned logo and image asset references that should be swapped for a new client.',
    businessProfile: 'Shared SEO, social, and business-profile metadata used by the head/schema layer.',
    brandDirection: 'Preset selection and overall tone choices.',
    contactCallsToAction: 'Button labels and estimate/contact wording.',
    navigation: 'Site navigation order choices.',
    sitewideChoices: 'Shared section-style overrides that can intentionally differ from the preset.',
    sharedContent: 'Shared content blocks that feed multiple real pages without hiding copy in the builder.',
    homepage: 'Homepage-specific copy, order, and section-level choices.',
    pages: 'Subpage-specific copy, order, and section-level choices.',
  },
  assetSwapGuide: {
    replaceFirst: [
      'headerLogo',
      'heroImage',
      'ogImage',
      'serviceAreaMap',
      'faviconSvg',
      'faviconIco',
    ],
    notes: [
      'Keep all brand asset paths together in brandAssets so a new client swap does not require hunting through layouts or components.',
      'If an OG image changes, update both brandAssets.ogImage and businessProfile.ogImageAlt together.',
      'If a new client does not have every social profile, leave unused links blank rather than inventing placeholders.',
    ],
  },
} as const;

export const clientIntake = {
  // STEP 1: Core business facts.
  business: {
    name: 'Parrish Tree Removal',
    siteDisplayName: 'Parrish Tree Removal',
    legalBusinessName: 'Parrish Tree Removal',
    phone: '(800) 555-0199',
    email: 'parrishtreeremoval@gmail.com',
    websiteDomain: 'parrishtreeremoval.com',
    primaryServiceArea: 'Parrish, FL',
    serviceAreaSummary:
      'Proudly serving Parrish and nearby communities with professional tree care.',
    emergencyServiceOffered: true,
    residentialOnly: false,
    licenseAndInsuranceNote: 'Licensed and insured.',
    jobsCompleted: 500,
    yearsInBusiness: 10,
    googleRating: 5,
  },

  // STEP 1B: Operational defaults that a future client will likely replace.
  businessOperations: {
    state: 'Florida',
    businessHours: {
      mondayFriday: 'Mon-Fri 8:00 AM - 6:00 PM',
      saturday: 'Sat 9:00 AM - 2:00 PM',
    },
    serviceAreasCovered: ['Parrish, FL', 'Bradenton, FL', 'Palmetto, FL', 'Lakewood Ranch, FL'],
    serviceAreaZipCodes: [
      '33598',
      '34201', '34202', '34203', '34205', '34207', '34208', '34209', '34210',
      '34211', '34212', '34215', '34217', '34219', '34221', '34222', '34228',
      '34240', '34243', '34251',
    ],
  },

  // STEP 1C: Client-owned brand assets and identity references.
  // These are not framework tokens; they are the concrete assets a new client
  // would normally swap during cloning.
  brandAssets: {
    identityMark: 'PTR',
    headerLogo: '../assets/parrish-logo.png',
    heroImage: '../assets/hero-image.png',
    ogImage: '/images/parrish-service-area-map.svg',
    serviceAreaMap: '/images/parrish-service-area-map.svg',
    faviconSvg: '/favicon.svg',
    faviconIco: '/favicon.ico',
  },

  // STEP 1D: Shared business-profile metadata for SEO, social sharing, and
  // schema output. These are client-owned fields, not framework defaults.
  businessProfile: {
    serviceTypeSummary: 'Tree removal, trimming, stump grinding, and storm cleanup',
    ogImageAlt: 'Parrish Tree Removal service area map',
    socialProfiles: {
      googleBusinessProfile: '',
      facebook: '',
      instagram: '',
      nextdoor: '',
      yelp: '',
    },
    reputationLinks: {
      googleReviews: '',
      yelpReviews: '',
    },
  },

  // STEP 2: Pick the overall preset and tone direction first.
  brandDirection: {
    presetStyle: 'Preset A',
    visualTone: 'Clean and trustworthy',
    writingTone: 'Professional and local',
    primaryEmphasis: 'Fast estimates and reliable service',
    secondaryEmphasis: 'Safe, respectful work around your property',
    colorTheme: 'forest',
  },

  // STEP 3: Adjust sitewide CTA wording if needed.
  contactCallsToAction: {
    primaryButtonLabel: 'Free Estimate',
    secondaryButtonLabel: 'Call Now',
    estimateIntro:
      'Tell us a little about your project and we’ll get back to you quickly.',
    phoneButtonText: 'Call for Service',
  },

  // STEP 4: Navigation order and link structure.
  navigation: {
    useDefaultTemplateOrder: true,
    customLinks: [],
  },

  // STEP 5: Shared style overrides.
  // Leave these on the baseline labels below if you want the selected preset
  // to control the default presentation. Change them only when you want an
  // intentional override for a shared section style.
  sitewideChoices: {
    trustBadgesStyle: 'Variant A trust badges',
    headerStyle: 'Variant A header',
    headingTypographyStyle: 'Variant A headings',
    bodyTypographyStyle: 'Variant A body',
    sectionTitleStyle: 'Variant A section titles',
    colorTemplateStyle: 'Variant A palette',
    cardSurfaceStyle: 'Variant A filled cards',
    cardBorderStyle: 'Variant A card borders',
    buttonBorderStyle: 'Variant A buttons',
    sectionFrameStyle: 'Variant A section framing',
    faqStyle: 'Variant A FAQ',
    processStyle: 'Variant A stacked process',
    serviceAreaStyle: 'Variant A map section',
    estimateSectionStyle: 'Variant A estimate section',
    relatedServicesStyle: 'Variant A related services',
  },

  // STEP 5B: Shared content blocks that are reused by real pages.
  // Keep real editable copy here instead of hiding it in the builder layer.
  sharedContent: {
    trustBadges: [
      'Locally focused service',
      'Prompt communication',
      'Residential tree work',
      'Clean project follow-through',
    ],
    trustTicker: [
      'Licensed & Insured',
      'Free Estimates',
      'Same-Day Available',
      'Local & Trusted',
      'Storm Response',
      'Free Cleanup Included',
    ],
    footerCredit: '© FoxScroll 2026',
    estimateSectionLead:
      'Share a few project details, the service you need, and anything important about access, timing, or property conditions so the next step stays clear, straightforward, and easier to schedule with the right scope in mind.',
    serviceAreaLookup: {
      heading: 'Are We In Your Area?',
      intro: 'Enter your zip code.',
      inputLabel: 'Enter your ZIP code',
      inputPlaceholder: 'ZIP code',
      submitButtonLabel: 'Check',
      estimateButtonLabel: 'Request Estimate',
      invalidZipMessage: 'Enter a valid 5-digit ZIP code.',
      inAreaMessage: "We're in your area.",
      outOfAreaMessage: "Sorry, we aren't out there yet.",
    },
    homepageModal: {
      heading: 'Tell us about your tree service project',
      intro:
        'Share a few project details and we will follow up about tree removal, trimming, stump work, or storm cleanup.',
      buttonLabel: 'Send Estimate Request',
    },
    servicesPage: {
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
    },
    aboutPage: {
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
  },

  // STEP 6: Homepage worksheet.
  homepage: {
    enabled: true,
    seo: {
      title: 'Tree Removal, Tree Trimming, and Stump Grinding in Parrish, FL | Parrish Tree Removal',
      description:
        'Professional tree removal, tree trimming, stump grinding, and storm cleanup in Parrish, FL.',
    },
    hero: {
      heading: 'Expert Tree Services',
      supportingText: 'Right when you need it.',
      primaryButtonLabel: 'Free Estimate',
      secondaryButtonLabel: 'Call Now',
      backgroundStyle: 'Variant A hero',
    },
    sectionOrder: ['services', 'whyChooseUs', 'process', 'estimate', 'faq', 'serviceArea'],
    sections: {
      // Leave this on "Standard service cards" to let the preset decide the
      // default services presentation. Change it only if you want a specific
      // homepage/services override such as tabbed services.
      services: {
        enabled: true,
        displayStyle: 'Variant A service cards',
        intro:
          'We provide dependable tree services tailored to the needs of local properties.',
        featuredServices: ['Tree Removal', 'Tree Trimming', 'Stump Grinding', 'Storm Cleanup'],
      },
      whyChooseUs: {
        enabled: true,
        displayStyle: 'Variant A why choose us',
        intro:
          'Homeowners choose us for responsive service, careful work, and clear communication.',
      },
      // Leave this on "Standard stacked process" to follow the selected preset.
      process: {
        enabled: true,
        displayStyle: 'Variant A stacked process',
        intro:
          'Our process keeps your project straightforward from estimate to cleanup.',
      },
      // Leave this on "Standard map section" to follow the selected preset.
      serviceArea: {
        enabled: true,
        displayStyle: 'Variant A map section',
        intro:
          'We proudly serve Parrish and surrounding communities with prompt scheduling and dependable service.',
      },
      // Leave this on "Card-based FAQ" to follow the selected preset.
      faq: {
        enabled: true,
        displayStyle: 'Variant A FAQ',
        items: [
          {
            question: 'Do you provide free estimates?',
            answer: 'Yes. Reach out through the form or by phone and we’ll review your project.',
          },
          {
            question: 'Do you handle storm damage cleanup?',
            answer: 'Yes. We help remove fallen limbs, damaged trees, and cleanup debris after storms.',
          },
          {
            question: 'Do you work on both small and large jobs?',
            answer: 'Yes. We handle everything from trimming smaller trees to larger removals.',
          },
          {
            question: 'Do you offer more than one service on the same project?',
            answer:
              'Yes. Some properties need a mix of removal, trimming, stump grinding, or cleanup, and that can be discussed as part of the same scope.',
          },
          {
            question: 'What helps speed up the estimate process?',
            answer:
              'The best starting details are the service you think you need, your ZIP code, photos if available, and any access or urgency notes.',
          },
          {
            question: 'Do you clean up the work area afterward?',
            answer:
              'Cleanup expectations can be discussed as part of the estimate so the finished result matches the needs of the property.',
          },
        ],
      },
      estimate: {
        enabled: true,
        displayStyle: 'Variant A estimate section',
        heading: 'Need Help With A Tree Project?',
        supportingText:
          'Tell us what is going on at your property and we will follow up about tree removal, trimming, stump grinding, or storm cleanup.',
      },
    },
  },

  pages: {
    services: {
      enabled: true,
      seo: {
        title: 'Tree Services in Parrish, FL | Parrish Tree Removal',
        description:
          'Explore tree removal, trimming, stump grinding, and storm cleanup services in Parrish, FL.',
      },
      hero: {
        heading: 'Choose The Right Tree Service',
        supportingText:
          'Compare tree removal, trimming, stump grinding, and storm cleanup so you can choose the service that actually fits the property, the problem, and the next step.',
      },
      sectionOrder: ['servicesOverview', 'compareServices', 'whyChooseUs', 'faq', 'estimate', 'serviceArea'],
      sections: {
        servicesOverview: {
          enabled: true,
          displayStyle: 'Variant A service cards',
          intro: 'Choose the service that best fits your property needs and project goals.',
        },
        compareServices: {
          enabled: true,
          displayStyle: 'Standard comparison cards',
          intro: 'Compare common tree service needs so you can request the right work.',
        },
        whyChooseUs: {
          enabled: true,
          displayStyle: 'Variant A why choose us',
          intro:
            'We focus on responsive communication, careful work, and a smooth customer experience.',
        },
        faq: {
          enabled: true,
          displayStyle: 'Variant A FAQ',
          items: [
            {
              question: 'How do I know which tree service I actually need?',
              answer:
                'Start with the main problem: removal for unsafe or unwanted trees, trimming for overgrowth and clearance, stump grinding for leftover stumps, and storm cleanup for urgent damage or debris.',
            },
            {
              question: 'Can one project include more than one service?',
              answer:
                'Yes. Many jobs combine services, such as tree removal with stump grinding or storm cleanup that leads into removal or trimming.',
            },
            {
              question: 'What should I send when asking about a service?',
              answer:
                'Include the property ZIP code, the part of the yard involved, a short description of the issue, and photos if they help show access, size, or damage.',
            },
            {
              question: 'Which service is best for an old stump left in the yard?',
              answer:
                'That is usually a stump grinding request, especially if the goal is to reclaim yard space or finish an older removal job.',
            },
            {
              question: 'What if the problem started after a storm?',
              answer:
                'If the issue is urgent, blocked access, or visible damage from weather, storm cleanup is usually the right starting point.',
            },
            {
              question: 'Can you help if I am not completely sure yet?',
              answer:
                'Yes. The estimate request is a good place to explain what you are seeing so the next step can be narrowed down more clearly.',
            },
          ],
        },
        estimate: {
          enabled: true,
          displayStyle: 'Variant A estimate section',
          heading: 'Request a Free Estimate',
          supportingText: 'Let us know what service you need and we’ll help you get started.',
        },
        serviceArea: {
          enabled: true,
          displayStyle: 'Variant A map section',
          intro: 'Serving Parrish and nearby communities with dependable scheduling and service.',
        },
      },
    },

    treeRemoval: {
      enabled: true,
      cardTitle: 'Tree Removal',
      serviceCardSummary: 'Remove damaged or unwanted trees safely.',
      servicesOverviewSummary:
        'Safe removal for dead, damaged, leaning, or unwanted trees with careful handling and a clean finished site.',
      processSteps: [
        'Send the property address, ZIP code, and a short description of the tree that needs attention.',
        'Add photos if available so height, access, and nearby structures are easier to review.',
        'We follow up about the scope of the work, any related services, and the best next step toward scheduling.',
        'Once the scope is clear, the job can move forward into quoting and scheduling.',
      ],
      relatedServiceLinks: [
        { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
        { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
        { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
      ],
      seo: {
        title: 'Tree Removal in Parrish, FL | Parrish Tree Removal',
        description:
          'Safe and professional tree removal in Parrish, FL for damaged, dangerous, or unwanted trees.',
      },
      hero: {
        heading: 'Remove The Tree',
        supportingText: 'When a tree is dead, damaged, leaning, or simply in the wrong place, we help you handle the removal safely, clearly, and without the project turning into a bigger mess around the property.',
      },
      sectionOrder: ['whenYouNeedThis', 'whatsIncluded', 'whyChooseUs', 'process', 'relatedServices', 'faq', 'estimate', 'serviceArea'],
      sections: {
        whenYouNeedThis: {
          enabled: true,
          displayStyle: 'Highlighted single card',
          intro:
            'Tree removal makes sense when a tree is unsafe, unhealthy, or causing problems.',
          bullets: [
            'The tree is dead, leaning, or unsafe.',
            'Storm damage has made it unstable.',
            'Roots or growth are affecting nearby structures.',
            'The tree no longer fits your plans.',
          ],
        },
        whatsIncluded: {
          enabled: true,
          displayStyle: 'Standard included-items stack',
          items: [
            { title: 'Tree assessment', text: 'We review the tree, access, and surrounding conditions before work begins.' },
            { title: 'Safe removal planning', text: 'We determine the safest removal method for the property and tree condition.' },
            { title: 'Site cleanup', text: 'We clear debris and leave the work area in better shape than we found it.' },
          ],
        },
        whyChooseUs: {
          enabled: true,
          displayStyle: 'Variant A why choose us',
          intro:
            'We keep tree removal straightforward with clear communication, careful work, and respect for your property.',
        },
        process: {
          enabled: true,
          displayStyle: 'Variant A stacked process',
          intro: 'Our removal process is built to keep your project safe, efficient, and easy to understand.',
        },
        serviceArea: {
          enabled: true,
          displayStyle: 'Variant A map section',
          intro: 'We provide tree removal services in Parrish and surrounding areas.',
        },
        relatedServices: {
          enabled: true,
          displayStyle: 'Variant A related services',
          items: ['Tree Trimming', 'Stump Grinding', 'Storm Cleanup'],
        },
        faq: {
          enabled: true,
          displayStyle: 'Variant A FAQ',
          items: [
            {
              question: 'What details help with a tree removal estimate?',
              answer:
                'The most useful details are the tree location, approximate size, nearby structures, and whether access is tight or urgent.',
            },
            {
              question: 'Can stump grinding be included with tree removal?',
              answer:
                'Yes. Many removal projects also include stump grinding so the yard feels fully cleared when the work is done.',
            },
            {
              question: 'Do photos help for tree removal in Parrish, FL?',
              answer:
                'Yes. A few wide and close photos can make the first review much faster, especially when access is limited or storm damage is involved.',
            },
            {
              question: 'What usually makes a tree removal more urgent?',
              answer:
                'The biggest urgency triggers are visible leaning, storm damage, dead sections, root failure, or a tree that is threatening a structure, driveway, or high-use area.',
            },
            {
              question: 'Can removal help when a tree is too close to the house?',
              answer:
                'Yes. Tree removal is often the right solution when the tree placement is creating recurring risk, clearance problems, or long-term concerns near the home.',
            },
            {
              question: 'Should I mention fences, roofs, or tight access?',
              answer:
                'Yes. Nearby structures and restricted access matter a lot for planning, so those details help make the first estimate more accurate.',
            },
          ],
        },
        estimate: {
          enabled: true,
          displayStyle: 'Variant A estimate section',
          heading: 'Get a Tree Removal Estimate',
          supportingText:
            'Tell us about the tree and property conditions, and we’ll help you move forward.',
        },
      },
    },

    treeTrimming: {
      enabled: true,
      cardTitle: 'Tree Trimming',
      serviceCardSummary: 'Trim trees for clearance, shape, and upkeep.',
      servicesOverviewSummary:
        'Targeted trimming for cleaner canopies, safer clearance, stronger structure, and a sharper-looking property overall.',
      processSteps: [
        'Submit the property details and explain what branches or areas need the most attention.',
        'Include photos or notes about roof edges, lanes of access, and the number of trees involved.',
        'We follow up about the scope of the trimming work and the best next step for the property.',
        'Once the scope is clear, the job can move forward into quoting and scheduling.',
      ],
      relatedServiceLinks: [
        { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
        { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
        { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
      ],
      seo: {
        title: 'Tree Trimming in Parrish, FL | Parrish Tree Removal',
        description:
          'Tree trimming in Parrish, FL to improve safety, appearance, and healthy growth.',
      },
      hero: {
        heading: 'Trim Back Growth',
        supportingText: 'If the canopy is overgrown, hanging too close, or making the yard feel heavy and unmanaged, trimming can restore cleaner lines, better clearance, and a sharper overall look.',
      },
      sectionOrder: ['whenYouNeedThis', 'whatsIncluded', 'whyChooseUs', 'process', 'relatedServices', 'faq', 'estimate', 'serviceArea'],
      sections: {
        whenYouNeedThis: {
          enabled: true,
          displayStyle: 'Highlighted single card',
          intro:
            'Tree trimming helps improve shape, clearance, and problem limbs.',
          bullets: [
            'Branches hang too close to your home or driveway.',
            'The canopy looks overgrown or uneven.',
            'You want easier upkeep and a cleaner look.',
            'You want to reduce risk from weak or crowded limbs.',
          ],
        },
        whatsIncluded: {
          enabled: true,
          displayStyle: 'Standard included-items stack',
          items: [
            { title: 'Canopy review', text: 'We look at the tree shape, branch spread, and the areas that need attention before trimming begins.' },
            { title: 'Clearance-focused trimming', text: 'We plan the work around rooflines, driveways, walkways, and the parts of the canopy that need better clearance.' },
            { title: 'Cleanup of cut material', text: 'We remove trimmed limbs and leave the area cleaner and easier to maintain when the work is finished.' },
          ],
        },
        whyChooseUs: {
          enabled: true,
          displayStyle: 'Variant A why choose us',
          intro: 'We approach trimming with careful planning and a clean, professional finish.',
        },
        process: {
          enabled: true,
          displayStyle: 'Variant A stacked process',
          intro: 'We make tree trimming simple from the first estimate to final cleanup.',
        },
        serviceArea: {
          enabled: true,
          displayStyle: 'Variant A map section',
          intro: 'We offer tree trimming services in Parrish and surrounding communities.',
        },
        relatedServices: {
          enabled: true,
          displayStyle: 'Variant A related services',
          items: ['Tree Removal', 'Stump Grinding', 'Storm Cleanup'],
        },
        faq: {
          enabled: true,
          displayStyle: 'Variant A FAQ',
          items: [
            {
              question: 'What should I mention in a trimming request?',
              answer:
                'Mention which sides of the tree need work, what needs clearance, and whether the concern is maintenance, overgrowth, or storm prep.',
            },
            {
              question: 'Can one visit cover multiple trees?',
              answer:
                'Yes. If several trees need trimming in Parrish, FL, include that in the request so the scope is clear from the start.',
            },
            {
              question: 'Is cleanup part of tree trimming?',
              answer:
                'Cleanup can be discussed as part of the estimate so the final result matches how you want the yard to look.',
            },
            {
              question: 'When is trimming better than removing the tree?',
              answer:
                'Trimming is usually the better fit when the tree is healthy overall but needs clearance, shape correction, weight reduction, or general maintenance.',
            },
            {
              question: 'Can trimming help branches over the roof or driveway?',
              answer:
                'Yes. Roof clearance, driveway clearance, and overhanging limbs are some of the most common reasons homeowners request trimming.',
            },
            {
              question: 'Should I mention if the canopy feels too heavy or uneven?',
              answer:
                'Yes. Uneven growth, sagging limbs, and an overly dense canopy help explain the goal of the trimming work and what areas need the most attention.',
            },
          ],
        },
        estimate: {
          enabled: true,
          displayStyle: 'Variant A estimate section',
          heading: 'Get a Tree Trimming Estimate',
          supportingText: 'Let us know what needs trimming and we’ll follow up with the next steps.',
        },
      },
    },

    stumpGrinding: {
      enabled: true,
      cardTitle: 'Stump Grinding',
      serviceCardSummary: 'Clear old stumps and open up the yard.',
      servicesOverviewSummary:
        'Stumps ground below grade so the yard feels cleaner, easier to use, and ready for what comes next.',
      processSteps: [
        'Send the stump count, size estimate, and the property ZIP code.',
        'Include notes about tight access, fencing, irrigation, or patios near the work area.',
        'We follow up about the scope of the work and whether stump grinding should be paired with another service.',
        'Once the scope is clear, the job can move forward into quoting and scheduling.',
      ],
      relatedServiceLinks: [
        { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
        { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
        { href: '/services', label: 'Tree Services in Parrish, FL' },
      ],
      seo: {
        title: 'Stump Grinding in Parrish, FL | Parrish Tree Removal',
        description:
          'Professional stump grinding in Parrish, FL to clear old stumps and improve usable yard space.',
      },
      hero: {
        heading: 'Remove The Stump',
        supportingText: 'When the tree is gone but the stump is still in the way, grinding clears the leftover obstacle so the space feels cleaner, easier to use, and ready for whatever comes next.',
      },
      sectionOrder: ['whenYouNeedThis', 'whatsIncluded', 'whyChooseUs', 'process', 'relatedServices', 'faq', 'estimate', 'serviceArea'],
      sections: {
        whenYouNeedThis: {
          enabled: true,
          displayStyle: 'Highlighted single card',
          intro:
            'Stump grinding helps when an old stump is in the way or hurting the look of the yard.',
          bullets: [
            'An old stump is an eyesore.',
            'You want more usable yard space.',
            'The area is harder to mow or maintain.',
            'You want to finish a previous tree removal.',
          ],
        },
        whatsIncluded: {
          enabled: true,
          displayStyle: 'Standard included-items stack',
          items: [
            { title: 'Stump and access review', text: 'We check stump size, count, and surrounding access so the work area is understood before grinding starts.' },
            { title: 'Grinding of the remaining stump', text: 'We grind down the visible stump so the area is more usable and the leftover base is no longer the main obstacle.' },
            { title: 'Surface cleanup', text: 'We clean up the work area so the space feels more finished and ready for whatever comes next.' },
          ],
        },
        whyChooseUs: {
          enabled: true,
          displayStyle: 'Variant A why choose us',
          intro:
            'We help homeowners finish the job cleanly so their property looks more complete and usable.',
        },
        process: {
          enabled: true,
          displayStyle: 'Variant A stacked process',
          intro: 'Our process keeps stump grinding straightforward and easy to schedule.',
        },
        serviceArea: {
          enabled: true,
          displayStyle: 'Variant A map section',
          intro: 'We provide stump grinding services in Parrish and nearby areas.',
        },
        relatedServices: {
          enabled: true,
          displayStyle: 'Variant A related services',
          items: ['Tree Removal', 'Tree Trimming', 'Storm Cleanup'],
        },
        faq: {
          enabled: true,
          displayStyle: 'Variant A FAQ',
          items: [
            {
              question: 'What details help with a stump grinding estimate?',
              answer:
                'The most helpful details are the stump width, the number of stumps, and whether access is limited by fencing, gates, or hardscape.',
            },
            {
              question: 'Can stump grinding be requested after an older tree removal?',
              answer:
                'Yes. Stump grinding in Parrish, FL is often requested well after the original tree was removed.',
            },
            {
              question: 'Should I mention plans for the area afterward?',
              answer:
                'Yes. It helps to know whether the area will be replanted, seeded, landscaped, or simply cleaned up for open yard space.',
            },
            {
              question: 'Is stump grinding the right choice if the tree is already gone?',
              answer:
                'Yes. If the remaining issue is the stump itself, grinding is usually the cleanest way to finish the job and make the space more usable.',
            },
            {
              question: 'Can you grind more than one stump in the same visit?',
              answer:
                'Yes. If there are multiple stumps on the property, include that in the request so the scope of the work is clear from the start.',
            },
            {
              question: 'Should I mention fences, irrigation, or nearby hardscape?',
              answer:
                'Yes. Anything close to the stump helps explain access and site conditions, especially when the area is tight or landscaped.',
            },
          ],
        },
        estimate: {
          enabled: true,
          displayStyle: 'Variant A estimate section',
          heading: 'Get a Stump Grinding Estimate',
          supportingText: 'Tell us where the stump is located and what you want to accomplish.',
        },
      },
    },

    emergencyTreeService: {
      enabled: true,
      cardTitle: 'Storm Cleanup',
      serviceCardSummary: 'Clean up storm damage and fallen debris.',
      servicesOverviewSummary:
        'Fast storm cleanup for fallen limbs, blocked access, and damaged trees when the property needs quick attention.',
      processSteps: [
        'Submit the address, service area details, and a quick summary of the storm damage.',
        'Add photos if it is safe to do so, especially if access is blocked or a structure is involved.',
        'We follow up on the immediate next step and whether another tree service should be included.',
        'Once the scope is clear, the job can move forward into quoting and scheduling.',
      ],
      relatedServiceLinks: [
        { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
        { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
        { href: '/contact', label: 'Contact Parrish Tree Removal' },
      ],
      seo: {
        title: 'Emergency Tree Service in Parrish, FL | Parrish Tree Removal',
        description:
          'Emergency tree service in Parrish, FL for storm damage, fallen limbs, and urgent cleanup needs.',
      },
      hero: {
        heading: 'Clear The Storm Damage',
        supportingText: 'When limbs are down, access is blocked, or storm damage is creating a safety issue, we help move the cleanup forward fast so the property can start getting back to normal.',
      },
      sectionOrder: ['whenYouNeedThis', 'whatsIncluded', 'whyChooseUs', 'process', 'relatedServices', 'faq', 'estimate', 'serviceArea'],
      sections: {
        whenYouNeedThis: {
          enabled: true,
          displayStyle: 'Highlighted single card',
          intro:
            'Storm cleanup is for urgent situations where safety, access, or property protection matters right away.',
          bullets: [
            'A tree or large limb fell after a storm.',
            'A damaged tree now creates a safety risk.',
            'Your driveway or property access is blocked.',
            'You need fast cleanup and a clear next step.',
          ],
        },
        whatsIncluded: {
          enabled: true,
          displayStyle: 'Standard included-items stack',
          items: [
            { title: 'Damage review', text: 'We assess the fallen limbs, broken trees, blocked areas, and any urgent conditions affecting the property.' },
            { title: 'Storm debris cleanup planning', text: 'We determine the safest next step for removing debris, clearing access, and dealing with damaged tree material.' },
            { title: 'Work-area cleanup', text: 'We clear the affected area so the property feels safer, more open, and easier to move through after the storm.' },
          ],
        },
        whyChooseUs: {
          enabled: true,
          displayStyle: 'Variant A why choose us',
          intro:
            'We know urgent jobs need quick response, clear communication, and dependable follow-through.',
        },
        process: {
          enabled: true,
          displayStyle: 'Variant A stacked process',
          intro: 'We help move emergency jobs from urgent first contact to clear cleanup planning.',
        },
        serviceArea: {
          enabled: true,
          displayStyle: 'Variant A map section',
          intro: 'We provide emergency tree service in Parrish and nearby communities.',
        },
        relatedServices: {
          enabled: true,
          displayStyle: 'Variant A related services',
          items: ['Tree Removal', 'Tree Trimming', 'Stump Grinding'],
        },
        faq: {
          enabled: true,
          displayStyle: 'Variant A FAQ',
          items: [
            {
              question: 'What should I report after a storm?',
              answer:
                'Report blocked access, visible splits, downed limbs, and whether any tree material is touching a structure, fence, or vehicle.',
            },
            {
              question: 'Can storm cleanup turn into a tree removal project?',
              answer:
                'Yes. Storm cleanup in Parrish, FL often leads to removal or trimming when the damaged tree cannot stay as-is.',
            },
            {
              question: 'Do photos help with urgent requests?',
              answer:
                'Yes, if the area is safe. Photos can quickly show scale, access, and whether the issue is affecting a structure or driveway.',
            },
            {
              question: 'What should I do before calling about storm damage?',
              answer:
                'Focus on safety first. Stay clear of unstable limbs, blocked areas, and anything touching structures or utilities, then report the conditions as clearly as possible.',
            },
            {
              question: 'Can storm cleanup include debris blocking the driveway or access point?',
              answer:
                'Yes. Blocked access is one of the most common reasons homeowners request emergency tree service after a storm.',
            },
            {
              question: 'Should I mention whether the damage is still getting worse?',
              answer:
                'Yes. If the tree is shifting, splitting further, or creating a growing safety concern, that helps explain the urgency of the request.',
            },
          ],
        },
        estimate: {
          enabled: true,
          displayStyle: 'Variant A estimate section',
          heading: 'Request Emergency Tree Service',  
          supportingText: 'Share the urgent issue and we’ll help you take the next step quickly.',
        },
      },
    },

    about: {
      enabled: true,
      seo: {
        title: 'About Parrish Tree Removal',
        description:
          'Learn more about Parrish Tree Removal and the values behind our local tree service.',
      },
      hero: {
        heading: 'A Company That Cares',
        supportingText: 'Learn what drives the way we work, how we handle communication, and why local homeowners keep coming back when they need tree service done carefully and cleanly.',
      },
      sectionOrder: ['companyStory', 'whatHomeownersNeed', 'faq', 'estimate'],
      sections: {
        companyStory: {
          enabled: true,
          displayStyle: 'Standard content section',
          heading: 'Our Story',
          paragraphs: [
            'We built our company around dependable service, clear communication, and practical help for homeowners.',
            'Our goal is to make tree service feel more straightforward from the first estimate through final cleanup.',
          ],
        },
        whatHomeownersNeed: {
          enabled: true,
          displayStyle: 'Standard reassurance cards',
          intro:
            'Homeowners want service that feels responsive, respectful, and easy to trust.',
        },
        faq: {
          enabled: true,
          displayStyle: 'Card-based FAQ',
          items: [],
        },
        estimate: {
          enabled: true,
          displayStyle: 'Standard estimate section',
          heading: 'Request a Free Estimate',
          supportingText: 'Tell us about your property needs and we’ll get back to you.',
        },
      },
    },

    contact: {
      enabled: true,
      seo: {
        title: 'Contact Parrish Tree Removal',
        description:
          'Contact Parrish Tree Removal for estimates, service questions, and scheduling in Parrish, FL.',
      },
      hero: {
        heading: 'Tell Us About The Job',
        supportingText: 'Share the service you need, the timing, and anything important about the property, and we will get back to you with a clear next step instead of leaving you guessing.',
      },
      sectionOrder: ['beforeYouSubmit', 'estimate', 'serviceArea'],
      sections: {
        beforeYouSubmit: {
          enabled: true,
          displayStyle: 'Standard info cards',
          items: [
            { title: 'Describe the service you need', text: 'Let us know whether you need removal, trimming, stump grinding, or storm cleanup.' },
            { title: 'Share timing details', text: 'Tell us whether the request is flexible, scheduled soon, or more urgent.' },
            { title: 'Mention access concerns', text: 'Let us know about gates, fences, structures, or anything that may affect the work area.' },
            { title: 'Add location details', text: 'Include the property address or service area details so we understand the project better.' },
          ],
        },
        estimate: {
          enabled: true,
          displayStyle: 'Standard estimate section',
          heading: 'Get in Touch',
          supportingText: 'Fill out the form and we’ll follow up as soon as possible.',
        },
        serviceArea: {
          enabled: true,
          displayStyle: 'Standard map section',
          intro: 'We serve Parrish and nearby areas with responsive local tree service.',
        },
      },
    },
  },
} as const satisfies ClientIntake;
