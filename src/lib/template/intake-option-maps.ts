/**
 * HUMAN LABEL -> INTERNAL KEY MAPS
 */

import type {
  BodyTypographyLabel,
  BodyTypographyPreset,
  ButtonBorderStyleLabel,
  ButtonBorderStylePreset,
  CardBorderStyleLabel,
  CardBorderStylePreset,
  CardSurfaceLabel,
  CardSurfacePreset,
  ColorTemplateLabel,
  ColorTemplatePreset,
  EstimateCtaVariant,
  FaqDisplayLabel,
  FaqVariant,
  HeaderStyleLabel,
  HeaderVariant,
  HeadingTypographyLabel,
  HeadingTypographyPreset,
  HeroBackgroundLabel,
  HeroVariant,
  IncludedItemsDisplayLabel,
  PresetStyleLabel,
  ProcessDisplayLabel,
  ProcessVariant,
  RelatedServicesDisplayLabel,
  RelatedServicesVariant,
  SectionTitleStyleLabel,
  SectionTitleStylePreset,
  ServiceAreaDisplayLabel,
  ServiceAreaVariant,
  ServiceDisplayLabel,
  ServicesVariant,
  SiteStylePresetDefinition,
  SiteStylePresetId,
  VariantOption,
  VisualToneLabel,
  WhyChooseDisplayLabel,
  WhyChooseVariant,
  WritingToneLabel,
  WhenNeededDisplayLabel,
  SectionFrameStyleLabel,
  SectionFrameStylePreset,
} from './intake-types';

export const presetStyleMap: Record<PresetStyleLabel, SiteStylePresetId> = {
  'Preset A': 'preset-a-baseline',
  'Preset B': 'preset-b-premium-modern',
  'Preset C': 'preset-c-local-family-owned',
  'Preset D': 'preset-d-storm-response-emergency',
  'Preset E': 'preset-e-upscale-residential',
};

export const visualToneMap: Record<VisualToneLabel, SectionToneFlavor> = {
  'Clean and trustworthy': 'baseline-a',
  'Bold and premium': 'evergreen-premium',
  'Friendly and approachable': 'baseline-a',
  'Rugged and local': 'coastal-clean',
  'Modern and high-contrast': 'coastal-clean',
};

export const writingToneMap: Record<WritingToneLabel, WritingToneFlavor> = {
  'Professional and local': 'professional-local',
  'Confident and premium': 'confident-premium',
  'Friendly and reassuring': 'friendly-reassuring',
  'Direct and practical': 'direct-practical',
};

export const presetIntentNotes = {
  'preset-a-baseline':
    'Safest no-regression path. Use when the locked Variant A baseline is the desired final output.',
  'preset-b-premium-modern':
    'Best for clients who want a more elevated, editorial, and premium-feeling version of the template.',
  'preset-c-local-family-owned':
    'Best for relationship-driven local brands that should feel warm, established, and approachable.',
  'preset-d-storm-response-emergency':
    'Best for businesses leaning into urgent storm cleanup, emergency response, and fast-action messaging.',
  'preset-e-upscale-residential':
    'Best for polished residential operators serving premium homes, estates, and design-conscious homeowners.',
} as const;

export const presetBaselineDisplayLabels = {
  header: 'Variant A header',
  headingTypography: 'Variant A headings',
  bodyTypography: 'Variant A body',
  sectionTitleStyle: 'Variant A section titles',
  colorTemplate: 'Variant A palette',
  cardSurface: 'Variant A filled cards',
  cardBorderStyle: 'Variant A card borders',
  buttonBorderStyle: 'Variant A buttons',
  sectionFrameStyle: 'Variant A section framing',
  services: 'Variant A service cards',
  whyChoose: 'Variant A why choose us',
  process: 'Variant A stacked process',
  faq: 'Variant A FAQ',
  serviceArea: 'Variant A map section',
  estimate: 'Variant A estimate section',
  relatedServices: 'Variant A related services',
} as const;
// These labels represent the locked Variant A worksheet defaults. When an intake
// keeps these values unchanged, the builder treats them as "follow the preset"
// instead of as explicit manual overrides.

export type SectionToneFlavor = 'baseline-a' | 'evergreen-premium' | 'coastal-clean';
export type WritingToneFlavor =
  | 'professional-local'
  | 'confident-premium'
  | 'friendly-reassuring'
  | 'direct-practical';

export const serviceDisplayMap: Record<ServiceDisplayLabel, ServicesVariant> = {
  'Variant A service cards': 'grid-cards',
  'Tabbed services': 'tabs',
  'Accordion services': 'compact-list',
  'Carousel services': 'stacked-panels',
};

export const headerStyleMap: Record<HeaderStyleLabel, HeaderVariant> = {
  'Variant A header': 'baseline-a',
  'Clean centered header': 'clean-centered',
  'Utility split header': 'utility-split',
  'Premium compact header': 'premium-compact',
  'Strong local CTA header': 'strong-local-cta',
  'Minimal overlay header': 'minimal-overlay',
};

export const headingTypographyMap: Record<HeadingTypographyLabel, HeadingTypographyPreset> = {
  'Variant A headings': 'baseline-a',
  'Premium editorial headings': 'premium-editorial',
  'Friendly rounded headings': 'friendly-rounded',
  'Strong utility headings': 'strong-utility',
  'Refined modern headings': 'refined-modern',
};

export const bodyTypographyMap: Record<BodyTypographyLabel, BodyTypographyPreset> = {
  'Variant A body': 'baseline-a',
  'Premium editorial body': 'premium-editorial',
  'Friendly readable body': 'friendly-readable',
  'Strong utility body': 'strong-utility',
  'Refined modern body': 'refined-modern',
};

export const sectionTitleStyleMap: Record<SectionTitleStyleLabel, SectionTitleStylePreset> = {
  'Variant A section titles': 'baseline-a',
  'Minimal stacked': 'minimal-stacked',
  'Underline accent': 'underline-accent',
  'Side rule': 'side-rule',
  'Centered divider': 'centered-divider',
  'Boxed label': 'boxed-label',
};

export const colorTemplateMap: Record<ColorTemplateLabel, ColorTemplatePreset> = {
  'Variant A palette': 'baseline-a',
  'Evergreen premium palette': 'evergreen-premium',
  'Warm local palette': 'sunlit-local',
  'Storm high-contrast palette': 'storm-contrast',
  'Estate mineral palette': 'estate-mineral',
};

export const cardSurfaceMap: Record<CardSurfaceLabel, CardSurfacePreset> = {
  'Variant A filled cards': 'baseline-a',
  'Subtle soft cards': 'soft-tint',
  'Transparent card surfaces': 'transparent-surface',
};

export const cardBorderStyleMap: Record<CardBorderStyleLabel, CardBorderStylePreset> = {
  'Variant A card borders': 'baseline-a',
  'No card border': 'none',
  'Soft hairline': 'soft-hairline',
  'Medium solid': 'medium-solid',
  'Thick framed': 'thick-framed',
  'Rounded outline': 'rounded-outline',
  'Inset outline': 'inset-outline',
  'Accent edge': 'accent-edge',
  'Top-border accent': 'top-border-accent',
};

export const buttonBorderStyleMap: Record<ButtonBorderStyleLabel, ButtonBorderStylePreset> = {
  'Variant A buttons': 'baseline-a',
  'No button border': 'none',
  'Subtle outline': 'subtle-outline',
  'Bold outline': 'bold-outline',
  'Pill outline': 'pill-outline',
  'Square utility outline': 'square-utility',
  'Offset shadow frame': 'offset-shadow-frame',
  'Underline button': 'underline-button',
  'Framed CTA': 'framed-cta',
};

export const sectionFrameStyleMap: Record<SectionFrameStyleLabel, SectionFrameStylePreset> = {
  'Variant A section framing': 'baseline-a',
  'No section frame': 'none',
  'Subtle top rule': 'subtle-top-rule',
  'Subtle bottom rule': 'subtle-bottom-rule',
  'Top and bottom rules': 'top-and-bottom-rules',
  'Inset framed panel': 'inset-framed-panel',
  'Rounded section shell': 'rounded-section-shell',
  'Offset frame': 'offset-frame',
  'Side rails': 'side-rails',
};

export const faqDisplayMap: Record<FaqDisplayLabel, FaqVariant> = {
  'Variant A FAQ': 'clean-list',
  'Expandable questions': 'accordion',
};

export const processDisplayMap: Record<ProcessDisplayLabel, ProcessVariant> = {
  'Variant A stacked process': 'stacked-steps',
  'Connected timeline process': 'timeline',
};

export const serviceAreaDisplayMap: Record<ServiceAreaDisplayLabel, ServiceAreaVariant> = {
  'Variant A map section': 'map-card',
  'ZIP code service check': 'compact-map',
};

export const estimateDisplayMap: Record<string, EstimateCtaVariant> = {
  'Variant A estimate section': 'single-panel',
  'Highlighted single card': 'emphasized-conversion',
};

export const relatedServicesDisplayMap: Record<RelatedServicesDisplayLabel, RelatedServicesVariant> = {
  'Variant A related services': 'stacked-buttons',
  'Variant A service cards': 'grid-links',
  'Stacked centered buttons': 'stacked-buttons',
  'Highlighted single card': 'card-links',
};

export const whyChooseDisplayMap: Record<WhyChooseDisplayLabel, WhyChooseVariant> = {
  'Variant A why choose us': 'icon-grid',
  'Standard reassurance cards': 'stacked-panels',
};

export const whenNeededDisplayMap: Record<WhenNeededDisplayLabel, 'list' | 'cards'> = {
  'Highlighted single card': 'list',
  'Multi-card explanation': 'cards',
};

export const includedItemsDisplayMap: Record<IncludedItemsDisplayLabel, 'stack' | 'grid'> = {
  'Standard included-items stack': 'stack',
  'Two-column included cards': 'grid',
};

export const heroBackgroundMap: Record<HeroBackgroundLabel, HeroVariant> = {
  'Variant A hero': 'split-image',
  'Centered feature hero': 'centered',
  'Abstract no-image hero': 'abstract-no-image',
};

export const variantOptions = {
  hero: [
    { value: 'split-image', label: 'Variant A hero', description: 'Locked baseline hero treatment.' },
    { value: 'centered', label: 'Centered feature hero', description: 'Centered framed hero layout.' },
    { value: 'abstract-no-image', label: 'Abstract no-image hero', description: 'No-image editorial hero.' },
  ] satisfies ReadonlyArray<VariantOption<HeroVariant>>,
  header: [
    { value: 'baseline-a', label: 'Variant A header', description: 'Locked baseline header treatment.' },
    { value: 'clean-centered', label: 'Clean centered header', description: 'Centered two-row header with calmer brand-forward framing.' },
    { value: 'utility-split', label: 'Utility split header', description: 'Sharper split header with more operational structure and stronger utility cues.' },
    { value: 'premium-compact', label: 'Premium compact header', description: 'Contained premium header with a tighter, more editorial footprint.' },
    { value: 'strong-local-cta', label: 'Strong local CTA header', description: 'Local-service header that makes the phone and estimate actions more prominent.' },
    { value: 'minimal-overlay', label: 'Minimal overlay header', description: 'Lighter overlay-capable header with reduced framing and cleaner transparency.' },
  ] satisfies ReadonlyArray<VariantOption<HeaderVariant>>,
  services: [
    { value: 'grid-cards', label: 'Variant A service cards', description: 'Locked baseline services grid.' },
    { value: 'tabs', label: 'Tabbed services', description: 'One featured service panel with tabs above for switching services.' },
    { value: 'stacked-panels', label: 'Carousel services', description: 'One featured service panel with previous/next controls for browsing services horizontally.' },
    { value: 'compact-list', label: 'Accordion services', description: 'One-open-at-a-time services accordion with a revealed featured content panel.' },
  ] satisfies ReadonlyArray<VariantOption<ServicesVariant>>,
  estimateCta: [
    { value: 'single-panel', label: 'Variant A estimate section', description: 'Locked baseline estimate section.' },
    { value: 'emphasized-conversion', label: 'Highlighted single card', description: 'Stronger conversion card treatment.' },
  ] satisfies ReadonlyArray<VariantOption<EstimateCtaVariant>>,
  relatedServices: [
    { value: 'stacked-buttons', label: 'Variant A related services', description: 'Locked baseline related-services button stack.' },
    { value: 'grid-links', label: 'Variant A service cards', description: 'Card-style service links.' },
    { value: 'card-links', label: 'Highlighted single card', description: 'Single stronger related-services card treatment.' },
  ] satisfies ReadonlyArray<VariantOption<RelatedServicesVariant>>,
  whyChoose: [
    { value: 'icon-grid', label: 'Variant A why choose us', description: 'Locked baseline why-choose-us icon grid.' },
    { value: 'stacked-panels', label: 'Standard reassurance cards', description: 'Stacked reassurance panels for alternate preset directions.' },
  ] satisfies ReadonlyArray<VariantOption<WhyChooseVariant>>,
  faq: [
    { value: 'clean-list', label: 'Variant A FAQ', description: 'Locked baseline FAQ presentation with stacked card items.' },
    { value: 'accordion', label: 'Expandable questions', description: 'Accordion rows with one open answer at a time.' },
    { value: 'card-grid', label: 'Card-based FAQ grid', description: 'Multi-column card FAQ for broader desktop layouts.' },
  ] satisfies ReadonlyArray<VariantOption<FaqVariant>>,
  process: [
    { value: 'stacked-steps', label: 'Variant A stacked process', description: 'Locked baseline Process presentation.' },
    { value: 'numbered-cards', label: 'Numbered card process', description: 'Static numbered step cards with stronger sequence framing.' },
    { value: 'timeline', label: 'Connected timeline process', description: 'Vertical connected timeline with numbered markers.' },
  ] satisfies ReadonlyArray<VariantOption<ProcessVariant>>,
  serviceArea: [
    { value: 'map-card', label: 'Variant A map section', description: 'Locked baseline map-led service area section.' },
    { value: 'compact-map', label: 'ZIP code service check', description: 'Map section with the tighter ZIP-check-led presentation.' },
    { value: 'text-first', label: 'Text-first service area', description: 'Service area copy-forward presentation with a narrower map treatment.' },
  ] satisfies ReadonlyArray<VariantOption<ServiceAreaVariant>>,
  headingTypography: [
    { value: 'baseline-a', label: 'Variant A headings', description: 'Locked baseline heading direction.' },
    { value: 'premium-editorial', label: 'Premium editorial headings', description: 'Sharper serif-led heading treatment for premium template directions.' },
    { value: 'friendly-rounded', label: 'Friendly rounded headings', description: 'Warmer rounded heading voice with softer local-business tone.' },
    { value: 'strong-utility', label: 'Strong utility headings', description: 'Tighter, more operational heading style for direct service brands.' },
    { value: 'refined-modern', label: 'Refined modern headings', description: 'Clean modern heading system with quieter premium polish.' },
  ] satisfies ReadonlyArray<VariantOption<HeadingTypographyPreset>>,
  bodyTypography: [
    { value: 'baseline-a', label: 'Variant A body', description: 'Locked baseline readable body copy.' },
    { value: 'premium-editorial', label: 'Premium editorial body', description: 'More refined editorial body copy for elevated template directions.' },
    { value: 'friendly-readable', label: 'Friendly readable body', description: 'Softer humanist body copy for warmer local-business tone.' },
    { value: 'strong-utility', label: 'Strong utility body', description: 'Compact, practical body copy for operational service brands.' },
    { value: 'refined-modern', label: 'Refined modern body', description: 'Neutral modern body copy with cleaner polish.' },
  ] satisfies ReadonlyArray<VariantOption<BodyTypographyPreset>>,
  sectionTitleStyle: [
    { value: 'baseline-a', label: 'Variant A section titles', description: 'Locked baseline divider/title treatment.' },
    { value: 'minimal-stacked', label: 'Minimal stacked', description: 'Simple stacked heading with minimal divider treatment.' },
    { value: 'underline-accent', label: 'Underline accent', description: 'Compact section title with a stronger underline cue.' },
    { value: 'side-rule', label: 'Side rule', description: 'Left-anchored title style with a short side rule.' },
    { value: 'centered-divider', label: 'Centered divider', description: 'Centered label treatment with lighter balanced divider lines.' },
    { value: 'boxed-label', label: 'Boxed label', description: 'Section title styled as a contained label above the heading.' },
  ] satisfies ReadonlyArray<VariantOption<SectionTitleStylePreset>>,
  colorTemplate: [
    { value: 'baseline-a', label: 'Variant A palette', description: 'Locked baseline forest, cream, and natural accent palette.' },
    { value: 'evergreen-premium', label: 'Evergreen premium palette', description: 'Deeper evergreen, mineral, and warm stone palette for elevated brands.' },
    { value: 'sunlit-local', label: 'Warm local palette', description: 'Sunnier warm neutrals and olive accents for approachable local brands.' },
    { value: 'storm-contrast', label: 'Storm high-contrast palette', description: 'Sharper navy, slate, and signal-gold contrast for urgent service brands.' },
    { value: 'estate-mineral', label: 'Estate mineral palette', description: 'Muted mineral, brass, and stone palette for refined residential brands.' },
  ] satisfies ReadonlyArray<VariantOption<ColorTemplatePreset>>,
  cardSurface: [
    { value: 'baseline-a', label: 'Variant A filled cards', description: 'Locked baseline filled card surfaces with depth and warmth.' },
    { value: 'soft-tint', label: 'Subtle soft cards', description: 'Lighter, quieter card surfaces with softer tint and less weight.' },
    { value: 'transparent-surface', label: 'Transparent card surfaces', description: 'Transparent or near-transparent cards that lean on borders and framing.' },
  ] satisfies ReadonlyArray<VariantOption<CardSurfacePreset>>,
  cardBorderStyle: [
    { value: 'baseline-a', label: 'Variant A card borders', description: 'Locked baseline soft borderless card framing.' },
    { value: 'none', label: 'No card border', description: 'No visible card border, relying mostly on surface and shadow.' },
    { value: 'soft-hairline', label: 'Soft hairline', description: 'Quiet one-pixel card border for cleaner premium directions.' },
    { value: 'medium-solid', label: 'Medium solid', description: 'More defined solid border for stronger card separation.' },
    { value: 'thick-framed', label: 'Thick framed', description: 'Heavier border for utility-driven framed cards.' },
    { value: 'rounded-outline', label: 'Rounded outline', description: 'Softer outlined cards with a slightly more playful frame.' },
    { value: 'inset-outline', label: 'Inset outline', description: 'Inset card outline that reads more architectural than shadow-led.' },
    { value: 'accent-edge', label: 'Accent edge', description: 'Accent color edge on cards for stronger directional emphasis.' },
    { value: 'top-border-accent', label: 'Top-border accent', description: 'A top accent band that helps cards feel more editorial.' },
  ] satisfies ReadonlyArray<VariantOption<CardBorderStylePreset>>,
  buttonBorderStyle: [
    { value: 'baseline-a', label: 'Variant A buttons', description: 'Locked baseline filled buttons and soft outlines.' },
    { value: 'none', label: 'No button border', description: 'Filled buttons with no extra border treatment.' },
    { value: 'subtle-outline', label: 'Subtle outline', description: 'Quiet outline that adds definition without looking heavy.' },
    { value: 'bold-outline', label: 'Bold outline', description: 'Stronger outline for more assertive call-to-action framing.' },
    { value: 'pill-outline', label: 'Pill outline', description: 'Smooth pill outline for softer, premium CTA styling.' },
    { value: 'square-utility', label: 'Square utility outline', description: 'Tighter utility-style buttons with cleaner corners.' },
    { value: 'offset-shadow-frame', label: 'Offset shadow frame', description: 'Offset framed CTA look for more distinct button presence.' },
    { value: 'underline-button', label: 'Underline button', description: 'Buttons with a stronger underline-led action cue.' },
    { value: 'framed-cta', label: 'Framed CTA', description: 'Thicker CTA frame suited to premium or editorial directions.' },
  ] satisfies ReadonlyArray<VariantOption<ButtonBorderStylePreset>>,
  sectionFrameStyle: [
    { value: 'baseline-a', label: 'Variant A section framing', description: 'Locked baseline open section treatment without extra inner framing.' },
    { value: 'none', label: 'No section frame', description: 'No additional section frame beyond the core section backgrounds.' },
    { value: 'subtle-top-rule', label: 'Subtle top rule', description: 'Light top rule framing within the section shell.' },
    { value: 'subtle-bottom-rule', label: 'Subtle bottom rule', description: 'Light bottom rule framing within the section shell.' },
    { value: 'top-and-bottom-rules', label: 'Top and bottom rules', description: 'Balanced editorial rule treatment across the section shell.' },
    { value: 'inset-framed-panel', label: 'Inset framed panel', description: 'Contained framed section shell with a light inset panel feel.' },
    { value: 'rounded-section-shell', label: 'Rounded section shell', description: 'Rounded shell treatment for softer contained sections.' },
    { value: 'offset-frame', label: 'Offset frame', description: 'Offset framed treatment that feels more stylized and dimensional.' },
    { value: 'side-rails', label: 'Side rails', description: 'Vertical rails that make section blocks feel more structured.' },
  ] satisfies ReadonlyArray<VariantOption<SectionFrameStylePreset>>,
} as const;

export const siteStylePresets = {
  'preset-a-baseline': {
    id: 'preset-a-baseline',
    label: 'Preset A: Locked Baseline',
    description: 'Locked canonical public-site bundle. Preserve this as the current live no-regression default.',
    intendedClient: 'Reference baseline for low-risk client swaps when the live Parrish build is the expected output.',
    useCase: 'Reference implementation and safest starting point when the current live build should remain intact.',
    visualIdentity: 'Clean, trustworthy, local-service baseline.',
    writingDirection: 'Professional, direct, and locally grounded.',
    conversionFocus: 'Straightforward estimates with balanced service credibility.',
    colorTemplate: 'baseline-a',
    typographyPreset: 'baseline-a',
    borderPreset: 'layered-angled',
    headingTypography: 'baseline-a',
    bodyTypography: 'baseline-a',
    sectionTitleStyle: 'baseline-a',
    header: 'baseline-a',
    cardSurface: 'baseline-a',
    cardBorderStyle: 'baseline-a',
    buttonBorderStyle: 'baseline-a',
    sectionFrameStyle: 'baseline-a',
    hero: 'split-image',
    services: 'grid-cards',
    estimateCta: 'single-panel',
    relatedServices: 'stacked-buttons',
    whyChoose: 'icon-grid',
    process: 'stacked-steps',
    faq: 'clean-list',
    serviceArea: 'map-card',
    buttonStyle: 'gradient-pill',
    iconStyle: 'emoji',
  },
  'preset-b-premium-modern': {
    id: 'preset-b-premium-modern',
    label: 'Preset B: Premium Modern',
    description: 'A cleaner, more editorial direction for premium operators that want to feel elevated and design-forward.',
    intendedClient: 'Higher-end residential tree company, design-conscious arborist brand, or affluent suburban service area.',
    useCase: 'Clients who want to look polished, premium, and slightly more architectural without feeling luxury-forced.',
    visualIdentity: 'Framed, refined, and editorial with cleaner hierarchy and featured content moments.',
    writingDirection: 'Confident and premium, with calm authority rather than urgency.',
    conversionFocus: 'Higher-trust presentation with guided conversion moments and more curated browsing.',
    colorTemplate: 'evergreen-premium',
    typographyPreset: 'modern-sans',
    borderPreset: 'soft-panels',
    headingTypography: 'premium-editorial',
    bodyTypography: 'refined-modern',
    sectionTitleStyle: 'centered-divider',
    header: 'premium-compact',
    cardSurface: 'soft-tint',
    cardBorderStyle: 'soft-hairline',
    buttonBorderStyle: 'framed-cta',
    sectionFrameStyle: 'inset-framed-panel',
    hero: 'centered',
    services: 'tabs',
    estimateCta: 'split-content',
    relatedServices: 'card-links',
    whyChoose: 'stacked-panels',
    process: 'timeline',
    faq: 'accordion',
    serviceArea: 'text-first',
    buttonStyle: 'soft-solid',
    iconStyle: 'badge',
  },
  'preset-c-local-family-owned': {
    id: 'preset-c-local-family-owned',
    label: 'Preset C: Local Family-Owned',
    description: 'A warmer, more approachable direction for relationship-driven local operators.',
    intendedClient: 'Family-run tree service, long-time community business, or owner-operator brand emphasizing trust and familiarity.',
    useCase: 'Clients who want to feel dependable, neighborly, and easy to work with rather than highly stylized.',
    visualIdentity: 'Approachable, familiar, and grounded with softer local-business warmth.',
    writingDirection: 'Friendly and reassuring, while still professional enough for residential service work.',
    conversionFocus: 'Comfort and trust first, with easy next steps and reassuring service discovery.',
    colorTemplate: 'sunlit-local',
    typographyPreset: 'heritage-serif',
    borderPreset: 'layered-angled',
    headingTypography: 'friendly-rounded',
    bodyTypography: 'friendly-readable',
    sectionTitleStyle: 'boxed-label',
    header: 'clean-centered',
    cardSurface: 'soft-tint',
    cardBorderStyle: 'rounded-outline',
    buttonBorderStyle: 'pill-outline',
    sectionFrameStyle: 'rounded-section-shell',
    hero: 'centered',
    services: 'compact-list',
    estimateCta: 'single-panel',
    relatedServices: 'stacked-buttons',
    whyChoose: 'icon-grid',
    process: 'numbered-cards',
    faq: 'clean-list',
    serviceArea: 'map-card',
    buttonStyle: 'gradient-pill',
    iconStyle: 'emoji',
  },
  'preset-d-storm-response-emergency': {
    id: 'preset-d-storm-response-emergency',
    label: 'Preset D: Storm Response / Emergency',
    description: 'An operational, storm-ready direction built around urgency, clarity, and fast action.',
    intendedClient: 'Storm cleanup specialists, emergency-response crews, or companies that lead with urgent post-weather work.',
    useCase: 'Clients who need the site to communicate immediate help, fast response, and practical next steps.',
    visualIdentity: 'Sharper, faster, and more utility-driven with clearer action bias.',
    writingDirection: 'Direct and practical, keeping urgency clear without becoming chaotic.',
    conversionFocus: 'Immediate contact, quick scanning, and fast estimate action for urgent service needs.',
    colorTemplate: 'storm-contrast',
    typographyPreset: 'modern-sans',
    borderPreset: 'straight-clean',
    headingTypography: 'strong-utility',
    bodyTypography: 'strong-utility',
    sectionTitleStyle: 'underline-accent',
    header: 'utility-split',
    cardSurface: 'transparent-surface',
    cardBorderStyle: 'thick-framed',
    buttonBorderStyle: 'square-utility',
    sectionFrameStyle: 'top-and-bottom-rules',
    hero: 'split-image',
    services: 'compact-list',
    estimateCta: 'emphasized-conversion',
    relatedServices: 'grid-links',
    whyChoose: 'stacked-panels',
    process: 'timeline',
    faq: 'accordion',
    serviceArea: 'compact-map',
    buttonStyle: 'soft-solid',
    iconStyle: 'minimal-line',
  },
  'preset-e-upscale-residential': {
    id: 'preset-e-upscale-residential',
    label: 'Preset E: Upscale Residential',
    description: 'A polished residential direction for image-conscious brands serving premium homes and estates.',
    intendedClient: 'Upscale residential tree-care brand, estate-focused pruning/removal company, or polished suburban service operator.',
    useCase: 'Clients who need to feel composed, discreet, and premium for higher-value residential properties.',
    visualIdentity: 'Refined, composed, and residential-first with quieter premium cues.',
    writingDirection: 'Confident and premium, but restrained and property-respectful.',
    conversionFocus: 'Trust-building for higher-value projects where polish and professionalism matter as much as speed.',
    colorTemplate: 'estate-mineral',
    typographyPreset: 'heritage-serif',
    borderPreset: 'soft-panels',
    headingTypography: 'premium-editorial',
    bodyTypography: 'premium-editorial',
    sectionTitleStyle: 'side-rule',
    header: 'minimal-overlay',
    cardSurface: 'soft-tint',
    cardBorderStyle: 'inset-outline',
    buttonBorderStyle: 'offset-shadow-frame',
    sectionFrameStyle: 'side-rails',
    hero: 'abstract-no-image',
    services: 'tabs',
    estimateCta: 'split-content',
    relatedServices: 'card-links',
    whyChoose: 'stacked-panels',
    process: 'timeline',
    faq: 'card-grid',
    serviceArea: 'text-first',
    buttonStyle: 'quiet-outline',
    iconStyle: 'badge',
  },
} satisfies Record<SiteStylePresetId, SiteStylePresetDefinition>;
