# Client Template Guide

## Core client data
- Business identity and reusable contact details live in `src/data/client.ts`.
- Update business name, phone numbers, email, primary location, service areas, CTA labels, and business metadata there.

## Brand tokens
- Brand-swappable colors, mark/logo references, favicon paths, OG image path, and shared asset references live in `src/data/brand.ts`.
- The shared layout injects these brand tokens into the CSS variable system so future client theming can happen without editing component styles directly.

## Service data
- Reusable service definitions live in `src/data/services.ts`.
- Update service slugs, visible labels, service-page SEO, hero copy, section copy, FAQs, and related services there.
- The estimate form service dropdown also reads from this file.

## Page copy and SEO inputs
- Homepage, About, Contact, and Services page copy/SEO inputs live in `src/data/pages.ts`.
- These files are the main source-of-truth for page titles, descriptions, hero text, CTA text, FAQs, and other repeated page content.

## Shared sections
- Use `src/components/PageSection.astro` for major section wrappers.
- Use explicit identifiers such as:
  - `data-section="service-area"`
  - `data-page="about"`
  - `data-border-variant="straight-bottom"`
- Reusable Service Area markup lives in `src/components/ServiceAreaSection.astro`.

## Branding and assets
- Update brand tokens and shared asset references in `src/data/brand.ts`.
- The homepage hero image lives in `src/assets/hero-image.png`.
- Favicon files live in `public/favicon.svg` and `public/favicon.ico`.
- Service area art lives in `public/images/parrish-service-area-map.svg`.

## Contact and form behavior
- Production form submissions must continue posting to `/api/estimate.php`.
- The Astro route `src/pages/api/estimate.ts` is only a local/static helper route for the current template workflow.
- Shared form markup lives in `src/components/EstimateForm.astro`.

## Deployment
- Keep the current workflow:
  - edit on `main`
  - `npm run build`
  - publish with the existing `hostinger-live` workflow
- Do not convert the project to SSR/Node hosting.

## Stable areas to preserve
- Hero bottom border / Free Estimate button relationship
- Trust Badges visual appearance
- Route and canonical structure
- Static Astro + Hostinger + PHP form flow
