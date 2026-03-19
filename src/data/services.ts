export interface ServiceLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IncludedItem {
  title: string;
  description: string;
}

export interface ServicePageData {
  pageId: string;
  slug: string;
  cardTitle: string;
  title: string;
  description: string;
  heroTitle: string;
  heroIntro: string;
  estimateHeading: string;
  estimateIntro: string;
  servicesOverviewSummary: string;
  includedLayout?: 'stack' | 'grid';
  whenLayout?: 'list' | 'cards';
  whenYouNeedThisService: string[];
  whatsIncluded: Array<string | IncludedItem>;
  processSteps: string[];
  relatedServices: ServiceLink[];
  faqs: FaqItem[];
  serviceCardSummary: string;
  icon: string;
}

export const servicePages: Record<string, ServicePageData> = {
  treeRemoval: {
    pageId: 'tree-removal',
    slug: 'tree-removal',
    cardTitle: 'Tree Removal',
    title: 'Tree Removal in Parrish, FL | Parrish Tree Removal',
    description:
      'Tree removal in Parrish, FL for damaged, hazardous, overgrown, or unwanted trees around homes, driveways, and structures.',
    heroTitle: 'Tree Removal in Parrish, FL',
    heroIntro:
      'Tree removal requests usually start when a tree becomes unsafe, blocks a project, or no longer fits the property.',
    estimateHeading: 'Free tree removal estimate',
    estimateIntro:
      'Share the tree location, nearby structures, and any urgency so the next step for tree removal in Parrish, FL is clear.',
    servicesOverviewSummary:
      'Projects involving damaged, unwanted, unstable, or awkwardly placed trees.',
    includedLayout: 'stack',
    whenYouNeedThisService: [
      'A tree is dead, leaning, split, or declining after wind and rain.',
      'Large growth is crowding the roof, driveway, fence line, or pool area.',
      'You need to clear space for construction, a yard redesign, or safer access.',
      'A difficult tree is too close to structures for routine maintenance alone.',
    ],
    whatsIncluded: [
      { title: 'Review', description: 'Reviewing the tree location, access conditions, and nearby structures before quoting the work.' },
      { title: 'Discuss', description: 'Discussing debris handling, cleanup, and whether stump grinding should be included with the removal.' },
      { title: 'Plan', description: 'Planning around gates, soft ground, tight side yards, and the property constraints shaping the removal.' },
    ],
    processSteps: [
      'Send the property address, ZIP code, and a short description of the tree concern.',
      'Add photos if available so height, access, and nearby structures are easier to review.',
      'Receive follow-up about the scope, related services, and the best next step toward scheduling.',
    ],
    relatedServices: [
      { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
      { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
      { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
    ],
    faqs: [
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
          'Yes. A few wide and close photos can make the first review much faster, especially when access or storm damage is involved.',
      },
    ],
    serviceCardSummary: 'Get help with damaged, unwanted, or difficult trees that may need removal.',
    icon: '🪵',
  },
  treeTrimming: {
    pageId: 'tree-trimming',
    slug: 'tree-trimming',
    cardTitle: 'Tree Trimming',
    title: 'Tree Trimming in Parrish, FL | Parrish Tree Removal',
    description:
      'Tree trimming in Parrish, FL for branch reduction, canopy shaping, roof clearance, and ongoing property maintenance.',
    heroTitle: 'Tree Trimming in Parrish, FL',
    heroIntro:
      'Tree trimming helps manage clearance, shape, and healthy-looking growth around homes, driveways, and walkways.',
    estimateHeading: 'Free tree trimming estimate',
    estimateIntro:
      'Describe the branches, roofline, or overgrowth you want addressed so the trimming request can be reviewed quickly.',
    servicesOverviewSummary:
      'Pruning, shaping, branch reduction, and maintenance planning for growth control.',
    includedLayout: 'stack',
    whenYouNeedThisService: [
      'Branches are hanging over the roof, driveway, pool cage, or sidewalk.',
      'The canopy looks uneven, too dense, or is pushing into utility clearance zones.',
      'You want routine maintenance before storm season or after fast growth.',
      'Several trees on the property need cleanup during the same visit.',
    ],
    whatsIncluded: [
      { title: 'Review', description: 'Reviewing which sides of the tree need attention and what clearance matters most.' },
      { title: 'Discuss', description: 'Discussing pruning, shaping, branch reduction, and cleanup as part of one request.' },
      { title: 'Plan', description: 'Planning whether the trimming should be paired with removal, storm cleanup, or stump work.' },
    ],
    processSteps: [
      'Submit the property details and explain what branches or areas need the most attention.',
      'Include photos or notes about roof edges, lanes of access, and the number of trees involved.',
      'Get follow-up on the scope of the trimming work and the best next step for the property.',
    ],
    relatedServices: [
      { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
      { href: '/stump-grinding', label: 'Stump Grinding in Parrish, FL' },
      { href: '/emergency-tree-service', label: 'Storm Cleanup in Parrish, FL' },
    ],
    faqs: [
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
    ],
    serviceCardSummary: 'Review trimming and pruning options for overgrowth, clearance, and upkeep.',
    icon: '🌳',
  },
  stumpGrinding: {
    pageId: 'stump-grinding',
    slug: 'stump-grinding',
    cardTitle: 'Stump Grinding',
    title: 'Stump Grinding in Parrish, FL | Parrish Tree Removal',
    description:
      'Stump grinding in Parrish, FL for leftover stumps after tree removal, yard cleanup, replanting, and better usable space.',
    heroTitle: 'Stump Grinding in Parrish, FL',
    heroIntro:
      'Stump grinding helps finish the yard after tree removal so the space is cleaner, easier to use, and ready for the next step.',
    estimateHeading: 'Free stump grinding estimate',
    estimateIntro:
      'Share stump size, access details, and whether the goal is cleanup, replanting, or reclaiming usable yard space.',
    servicesOverviewSummary:
      'Post-removal cleanup when a leftover stump still affects the yard.',
    includedLayout: 'stack',
    whenYouNeedThisService: [
      'A leftover stump is making the yard look unfinished after removal.',
      'You need the area cleared for grass, landscaping, or a future project.',
      'The stump is in the way of mowing, foot traffic, or driveway access.',
      'There are multiple stumps across the property that should be handled together.',
    ],
    whatsIncluded: [
      { title: 'Review', description: 'Reviewing stump size, count, and access points around fences, gates, and patios.' },
      { title: 'Discuss', description: 'Discussing whether the request is tied to recent tree removal or a longer-standing cleanup need.' },
      { title: 'Plan', description: 'Planning around irrigation, nearby hardscape, and the final use of the cleared area.' },
    ],
    processSteps: [
      'Send the stump count, size estimate, and the property ZIP code.',
      'Include notes about tight access, fencing, irrigation, or patios near the work area.',
      'Receive follow-up on the scope and whether stump grinding should be paired with another service.',
    ],
    relatedServices: [
      { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
      { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
      { href: '/services', label: 'Tree Services in Parrish, FL' },
    ],
    faqs: [
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
    ],
    serviceCardSummary: 'See how stump work can help finish a yard after a tree is already down.',
    icon: '🚜',
  },
  stormCleanup: {
    pageId: 'emergency-tree-service',
    slug: 'emergency-tree-service',
    cardTitle: 'Storm Cleanup',
    title: 'Storm Cleanup in Parrish, FL | Parrish Tree Removal',
    description:
      'Storm cleanup in Parrish, FL for fallen limbs, blocked driveways, damaged trees, and urgent post-storm property concerns.',
    heroTitle: 'Storm Cleanup in Parrish, FL',
    heroIntro:
      'Storm cleanup requests often involve fallen limbs, damaged trees, blocked access, and urgent property hazards after severe weather.',
    estimateHeading: 'Storm cleanup estimate request',
    estimateIntro:
      'Explain what fell, what is blocked, and whether anything is resting on a structure so the urgency is easy to review.',
    servicesOverviewSummary:
      'Tree and debris concerns after severe weather, broken limbs, or blocked access.',
    includedLayout: 'stack',
    whenYouNeedThisService: [
      'A storm leaves limbs, debris, or broken sections of tree across the yard or driveway.',
      'A branch or trunk section is resting on a roof, fence, vehicle, or other structure.',
      'A tree appears split, uprooted, or newly unstable after wind and rain.',
      'You need to explain safety concerns and site access clearly after fast-changing weather.',
    ],
    whatsIncluded: [
      { title: 'Review', description: 'Reviewing the visible damage, blocked areas, and any structures involved in the incident.' },
      { title: 'Discuss', description: 'Discussing whether the cleanup should also include tree removal, trimming, or stump work.' },
      { title: 'Plan', description: 'Planning around access conditions so follow-up can match the urgency of the property issue.' },
    ],
    processSteps: [
      'Submit the address, service area details, and a quick summary of the storm damage.',
      'Add photos if it is safe to do so, especially if access is blocked or a structure is involved.',
      'Receive follow-up on the immediate next step and whether another tree service should be included.',
    ],
    relatedServices: [
      { href: '/tree-removal', label: 'Tree Removal in Parrish, FL' },
      { href: '/tree-trimming', label: 'Tree Trimming in Parrish, FL' },
      { href: '/contact', label: 'Contact Parrish Tree Removal' },
    ],
    faqs: [
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
    ],
    serviceCardSummary: 'Learn what details matter after fallen limbs, debris, or weather damage.',
    icon: '⛈️',
  },
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
