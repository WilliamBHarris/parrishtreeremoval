# CLAUDE.md — Parrish Tree Removal / Tree Service Template

## What This Project Is

This is a **reusable website template product** for local tree service companies — not a one-off client site. The current deployment (parrishtreeremoval.com) is the demo/flagship instance used to sell the template to other tree service businesses.

Every design and code decision must be made with the template product in mind first, and the Parrish client second.

---

## The Business Model

- Owner builds one polished template, sells it to tree service companies who have no site or a poor one
- Each new client fills out an intake form (`src/data/client-intake.ts`)
- Their info flows through a pipeline into the site automatically
- Owner changes colors, swaps logo, deploys — new client has a professional site
- Target clients: small local tree service operators, typically non-technical, mobile-first customers

---

## Tech Stack

- **Framework**: Astro (static site generator)
- **Language**: TypeScript
- **Styling**: Single CSS file (`src/styles/global.css`) — all styles live here
- **Fonts**: Avenir Next (body), Palatino Linotype (display), Avenir Next Rounded (headings)
- **Deployment**: Hostinger static hosting via `./deploy-hostinger.sh`
- **Source control**: GitHub via `./push-main.sh`

---

## The Data Pipeline — Critical to Understand

```
client-intake.ts         ← Human-readable intake form (edit this for each client)
       ↓
build-site-config.ts     ← Normalizes intake into TemplateConfig
       ↓
client-questionnaire.ts  ← Exports templateConfig (stable compatibility layer)
       ↓
client.ts                ← Exports flat client object used by components
       ↓
Components               ← Import from client.ts or templateConfig
```

**Never hardcode client-specific values in components.** Always pull from `client` or `templateConfig`.

---

## Intake Fields Reference

### Business Info
- `businessName` — used in header, footer, SEO, schema
- `phone.display` / `phone.href` — all call links and CTAs
- `primaryServiceArea` — city/region used in hero, subheadings, SEO
- `hours.mondayFriday` / `hours.saturday` — footer hours
- `serviceAreaZipCodes[]` — ZIP lookup tool and service area map
- `jobsCompleted` — hero stat 1 (hides if 0 or undefined)
- `yearsInBusiness` — hero stat 2 (hides if 0 or undefined)
- `googleRating` — hero stat 3 (hides if 0 or undefined)

### Branding
- `colorTheme` — 'forest' | 'storm' | 'terrain' | 'sunlit'
- `logoFile` — header and footer logo
- `fontStyle` — typography preset

### Content
- `trustTicker[]` — scrolling trust bar items (6-8 strings)
- `trustBadges[]` — short trust signals
- Service descriptions, FAQ items, process steps — all in intake

---

## Design Principles

### Mobile-First — Always
- The site is used primarily on phones by homeowners searching for tree service
- Build mobile styles first, then add `@media (min-width: 900px)` overrides
- **Never touch desktop styles when fixing a mobile issue and vice versa**

### No Photos in the Template
- The template does not rely on photography
- Hero uses animated dark gradient background — no hero image
- Icons use clean SVG line icons — no illustrations or clipart
- This is intentional: lets the template deploy for a new client without a photoshoot

### Template-First Thinking
- Before writing any code ask: "Will this work for any tree service company?"
- Colors must come from CSS variables, never hardcoded hex in components
- Copy must come from the intake pipeline, never hardcoded in components
- Layout and animation are hardcoded — content and colors are not

### Premium Local Service Aesthetic
- Dark green hero with animated gradient, floating orbs, subtle particle effects
- Gold accent color for CTAs, highlights, and trust signals
- Clean white cards with subtle shadows on warm beige background
- Large bold typography — confidence over decoration
- Diagonal/clipped section transitions — never hard straight edges between sections

---

## CSS Architecture

All styles live in `src/styles/global.css`. Key patterns:

### CSS Custom Properties (always use these, never hardcode)
```css
--brand-primary      /* dark green — hero bg, header, footer */
--brand-accent       /* gold — CTAs, highlights, ticker */
--page-bg            /* warm beige page background */
--surface            /* white card surface */
--heading            /* dark green text */
--text               /* near-black body text */
--text-soft          /* muted grey body text */
```

### Color Themes (applied via body class)
```
body.template-color-forest          /* deep green + gold (default) */
body.template-color-storm           /* dark navy + orange */
body.template-color-terrain         /* charcoal + red */
body.template-color-sunlit          /* dark brown + yellow */
```

### Responsive Breakpoints
```
Default              → mobile (320px+)
@media (min-width: 900px)   → tablet/desktop
@media (min-width: 980px)   → wide desktop
@media (min-width: 1180px)  → large desktop
@media (max-width: 768px)   → small mobile overrides
@media (max-width: 430px)   → very small mobile
```

---

## Hero Section Spec (current design)

The homepage hero (`HeroSection.astro`) uses:

- **Background**: Animated dark green gradient (heroGradientShift keyframes)
- **Orbs**: 3 floating radial gradient blobs (CSS animation, no JS)
- **Grid overlay**: Subtle 40px grid, opacity pulses slowly
- **Particles**: 6 tiny gold dots that rise and fade (CSS animation)
- **Headline**: "Local Tree Service / Done Right." — "Done Right." in gold with sweep underline
- **Subheading**: Short punchy copy from intake, rgba(255,255,255,0.5)
- **CTA Primary**: "Get a Free Estimate →" — gold button with gloss ::before
- **CTA Secondary**: "or call us: [phone]" — plain text, tappable tel link
- **Stats row**: Count-up animation triggered by IntersectionObserver
  - jobsCompleted + "+" / "Happy Clients"
  - yearsInBusiness + "yr" / "Experience"
  - googleRating + "★" / "Star Rated"
  - Hides entirely if all three are 0 or undefined
- **Diagonal clip**: SVG path at bottom of hero transitioning into ticker
- **Trust ticker**: Full-width scrolling bar, background #c8965a, infinite loop
  - Items from `client.trustTicker[]`
  - Each item has ✓ circle and separator dot
  - Fade edges on left and right

### Subpage Heroes
- Same animated background and ticker
- Shorter height — no stats row (except About page which shows stats)
- Headline and subtext pulled from intake per page
- No diagonal clip — straight transition into ticker

---

## Component Map

```
src/layouts/BaseLayout.astro         — HTML shell, inline CSS, modal wrapper
src/components/Header.astro          — Fixed floating header, mobile drawer
src/components/HeroSection.astro     — Homepage + subpage hero
src/components/ServicesSection.astro — Service cards grid
src/components/HomepageWhyChoose.astro — Why choose us cards
src/components/HomepageProcess.astro — Process steps
src/components/EstimateCtaSection.astro — CTA card
src/components/FaqSection.astro      — FAQ accordion or grid
src/components/ServiceAreaSection.astro — Map + ZIP lookup
src/components/Footer.astro          — Footer
```

---

## Rules — Always Follow These

1. **Build must pass cleanly** — never leave TypeScript errors or broken imports
2. **Never hardcode Parrish-specific content** in components — use intake pipeline
3. **Never touch desktop styles when working on mobile** and vice versa
4. **Never use `!important`** unless fixing a specificity bug that can't be solved otherwise
5. **Never delete files** without confirming they are unreferenced
6. **Always use CSS custom properties** for colors — never raw hex in components
7. **Keep animations performant** — prefer CSS over JS, use `transform` and `opacity` only, always include `@media (prefers-reduced-motion: reduce)` override
8. **One concern per commit** — hero changes in one commit, service cards in another
9. **Mobile first** — write base styles for mobile, override for desktop with min-width queries
10. **Intake pipeline is sacred** — all client data flows through intake → build-site-config → client.ts → components. Never shortcut this.

---

## Current Work In Progress

Working through a mobile polish pass in phases:

- [x] Phase 0 — Bug fixes and clone-blocker removal (done)
- [x] Phase 0.5 — Add hero stats, trust ticker, color theme to intake pipeline (done)
- [ ] Phase 1 — New hero section (in progress)
- [ ] Phase 2 — Service cards (SVG icons, better contrast)
- [ ] Phase 3 — Why Choose Us (ghost numbers, better cards)
- [ ] Phase 4 — Process section (dark background treatment)
- [ ] Phase 5 — CTA section polish
- [ ] Phase 6 — FAQ + Service Area polish
- [ ] Phase 7 — Footer polish
- [ ] Phase 8 — Desktop layout completion

---

## Design Skill Directive

When working on any UI, visual, or CSS task you must apply your full UI/UX expertise. This is a commercial product that needs to look genuinely premium and modern — not generic or AI-generated.

Specifically:

- **Think before you code** — consider the visual hierarchy, spacing rhythm, and user flow before writing a single line of CSS
- **Sweat the details** — letter-spacing, line-height, border-radius, shadow depth, opacity levels, and transition timing all matter enormously at this quality level
- **Challenge generic choices** — if a solution looks like a default browser style or a Bootstrap component, it's not good enough
- **Consider the homeowner on their phone** — every design decision should make it easier and faster for someone to trust this company and tap the call button
- **Consider the tree company owner** — every design decision should make the demo site look so much better than what they have that they immediately want to buy it
- **Animation must feel intentional** — every animated element should have a clear purpose (draw attention, convey quality, create depth). No animation for animation's sake.
- **Consistency is a product quality signal** — icon styles, border radii, shadow depths, and spacing should be consistent across every section
- **When in doubt, add whitespace** — cramped layouts look cheap, generous spacing looks premium

Apply the same level of craft you would if this were a portfolio piece being judged by senior designers.

---

## UI/UX Design Reference

### What Good Looks Like For This Product
- **Competitor baseline**: Most local tree service sites are 2010-era WordPress with clip-art logos, wall-of-text layouts, and no mobile optimization. The bar is low.
- **Our target**: Looks like a premium SaaS landing page adapted for local service. Clean, confident, fast, trustworthy.
- **Key trust signals for homeowners**: Licensed & insured, local, free estimates, phone number visible, reviews/ratings
- **Key selling points for tree company owners**: Looks dramatically better than what they have, mobile-first, easy to update, professional enough to win more jobs

### Typography Scale (mobile)
- Hero h1: 36px, weight 800, letter-spacing -0.035em, line-height 0.92
- Section titles: ~20px, weight 800, letter-spacing -0.02em
- Card titles: ~11px, weight 800
- Body: ~10-11px, line-height 1.55
- Labels/kickers: 9px, weight 800, letter-spacing 0.2em, uppercase

### Animation Philosophy
- Subtle is premium — fast or flashy looks cheap
- Background animations: 8-15s duration, ease-in-out, infinite alternate
- Particle effects: 11-20s duration, staggered delays
- Count-up stats: ~1800ms, cubic ease-out, triggered by IntersectionObserver
- Ticker: 22s linear infinite
- All animations must have prefers-reduced-motion override

---

## Deployment

```bash
./push-main.sh          # Save to GitHub main (safe, does not go live)
./deploy-hostinger.sh   # Deploy to live site (only when confirmed good)
```

**Workflow**: Always push to main first, preview in browser, then deploy to live. Never deploy mid-experiment.
