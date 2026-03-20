# Client Template Guide

## Main questionnaire
- The primary onboarding/build-sheet file is [src/data/client-intake.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-intake.ts).
- Start there for every new client.
- It is intentionally organized in plain-language page-by-page sections so you can fill out one client without tracing through the internal config layer.

## Parrish baseline
- `Parrish Tree Removal` is the live reference implementation.
- The current live site is mapped to:
  - `selectedSitePreset: 'preset-a-parrish-baseline'`
  - Variant A selections for the major reusable sections
- If you want Parrish to remain visually unchanged, keep Preset A selected and leave the current active variant selections in place.

## File roles
- [src/data/client-intake.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-intake.ts)
  - Main file to edit for a new client.
  - Plain-language intake answers plus explicit page assembly order.
- [src/data/client-questionnaire.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-questionnaire.ts)
  - Internal normalized config and mapping layer.
  - Converts the intake file into the structure used by components and thin exports.
- [src/data/client.ts](/Users/will/Desktop/parrish-tree-service/src/data/client.ts)
  - Thin export layer for shared business/contact data.
- [src/data/brand.ts](/Users/will/Desktop/parrish-tree-service/src/data/brand.ts)
  - Thin export layer for brand tokens, palette, and asset references.
- [src/data/pages.ts](/Users/will/Desktop/parrish-tree-service/src/data/pages.ts)
  - Thin export layer for page-level content blocks.
- [src/data/services.ts](/Users/will/Desktop/parrish-tree-service/src/data/services.ts)
  - Thin export layer for service data and service lists.

## Intake structure
- `setup`
  - Starting preset and reference-implementation note.
- `globalBusinessInfo`
  - Business identity, contact info, and service-area answers.
- `globalBrandStyle`
  - Asset references, palette/typography/border selections, and active section variants.
- `sharedSiteCopy`
  - Shared CTA labels and trust badges.
- Page-by-page sections:
  - `homepage`
  - `servicesPage`
  - `treeRemovalPage`
  - `treeTrimmingPage`
  - `stumpGrindingPage`
  - `stormCleanupPage`
  - `aboutPage`
  - `contactPage`
- `productionForm`
  - Static Astro + Hostinger form-post settings.
- `socialLinks`
  - Optional future social links.

## Preset system
- Presets are stored in `presetLibrary`.
- The current built site uses `Preset A`.
- Each preset is a coherent style direction that combines:
  - theme palette
  - typography preset
  - border/divider preset
  - hero variant
  - services variant
  - estimate CTA variant
  - related services variant
  - why choose/process/faq/service area variants
  - button style
  - icon style

### Preset directions
- `Preset A: Current Parrish Baseline`
  - The live Parrish look. This is the safe default reference path.
- `Preset B: Premium Modern`
  - Cleaner, more editorial, stronger framing, and a more contemporary premium feel.
- `Preset C: Local Family-Owned`
  - Warmer and more approachable, better for community-first brands.
- `Preset D: Storm Response / Emergency`
  - More urgent and operational, with stronger CTA emphasis and denser service discovery.
- `Preset E: Upscale Residential`
  - More polished residential positioning with refined surfaces and premium framing.

## Variant labels
- Major reusable section variants use a consistent A/B/C naming pattern inside `variantLibrary`.
- `Variant A` always means the current Parrish/live baseline where that applies.
- `Variant B` and `Variant C` are alternates meant to create stronger visible differentiation for future client builds.

### Current labeled section variants
- HeroSection
  - `Variant A: Split Image Baseline`
  - `Variant B: Centered Feature`
  - `Variant C: Abstract No-Image`
- ServicesSection
  - `Variant A: Grid Cards Baseline`
  - `Variant B: Stacked Panels`
  - `Variant C: Compact List`
- EstimateCtaSection
  - `Variant A: Single Panel Baseline`
  - `Variant B: Split Content`
  - `Variant C: Emphasized Conversion`
- RelatedServicesSection
  - `Variant A: Stacked Buttons Baseline`
  - `Variant B: Grid Links`
  - `Variant C: Card Links`

## Page assembly order
- Every page now exposes a plain-language `sections` array in [src/data/client-intake.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-intake.ts).
- That is the main place to control page composition.
- The internal normalized `layout` arrays in [src/data/client-questionnaire.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-questionnaire.ts) are generated from those intake sections.
- Each intake section entry shows:
  - stable section key
  - component name
  - enabled state
  - order/position
  - selected variant/preset when relevant
  - content source
  - surface tone when relevant
  - plain-language notes about what the section is doing

### Current page stacks
- Homepage
  - Hero
  - Trust Badges
  - Services
  - Why Choose Us
  - Process
  - Estimate CTA
  - FAQ
  - Service Area
- Services page
  - Hero
  - Services overview
  - Compare cards
  - Why Choose Us
  - Process
  - Estimate Tips
  - Estimate Form
  - Service Area
- About page
  - Hero
  - Homeowner needs cards
  - Why Choose Us
  - Process
  - How requests work
  - Related Services
  - Service Area
- Contact page
  - Hero
  - Estimate Form
  - Before You Submit cards
  - Why Choose Us
  - Process
  - Related Services
  - Service Area
- Service-detail template
  - Hero
  - When You Need This Service
  - What’s Included
  - Why Choose Us
  - Process
  - Related Services
  - FAQ
  - Estimate Form
  - Service Area

## Safe onboarding workflow
1. Duplicate the Parrish intake values in [src/data/client-intake.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-intake.ts).
2. Decide whether the new site should start from Preset A, B, C, D, or E.
3. Update `globalBusinessInfo`.
4. Update `globalBrandStyle`.
5. Update the page-by-page sections for homepage, services, about, contact, and each service page.
6. Review each page’s `sections` array to confirm the exact order, enabled state, and selected variants.
7. Let the internal normalized layer in [src/data/client-questionnaire.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-questionnaire.ts) translate that into the reusable component system.
8. Build and review before deploying.

## Assets
- Hero image source: [src/assets/hero-image.png](/Users/will/Desktop/parrish-tree-service/src/assets/hero-image.png)
- Favicon files:
  - [public/favicon.svg](/Users/will/Desktop/parrish-tree-service/public/favicon.svg)
  - [public/favicon.ico](/Users/will/Desktop/parrish-tree-service/public/favicon.ico)
- Service area art:
  - [public/images/parrish-service-area-map.svg](/Users/will/Desktop/parrish-tree-service/public/images/parrish-service-area-map.svg)
- Change asset references through [src/data/client-intake.ts](/Users/will/Desktop/parrish-tree-service/src/data/client-intake.ts), not by hunting through components.

## Components
- Reusable section components live in `src/components/` and are driven by the questionnaire and thin export files.
- The highest-value preset/variant system currently centers on:
  - `HeroSection.astro`
  - `ServicesSection.astro`
  - `EstimateCtaSection.astro`
  - `RelatedServicesSection.astro`

## Selector safety
- Use `data-page` + `data-section` as the primary targeting pattern.
- Shared sections also expose `data-block` hooks for safe internal targeting.
- Preserve the explicit section wrappers rather than relying on title text or DOM order.

## Static Astro + Hostinger rules
- Keep the deployment model static.
- Do not convert to SSR, Node hosting, or Vercel.
- Production estimate submissions must continue posting to `/api/estimate.php`.
- Safe workflow:
  1. work on `main`
  2. run `npm run build`
  3. run the Hostinger deploy workflow
  4. push `hostinger-live`
  5. switch back to `main`

## Stable areas to preserve
- Trust Badges appearance
- Hero bottom border / Free Estimate button relationship
- Footer design
- Current mobile presentation
- Route structure and canonicals
- `/api/estimate.php` production flow
- Animations-off state site-wide

## Adding future variants safely
- Add new visual variants inside the reusable section component they belong to.
- Register new options in `variantLibrary`.
- Map them into `presetLibrary` only when the variant is stable and reusable.
- Keep Parrish mapped to Preset A unless you intentionally want to change the live baseline.
