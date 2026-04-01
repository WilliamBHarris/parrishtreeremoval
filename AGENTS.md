# AGENTS.md

## Project Context

This project is a reusable tree service website product/template built with Astro. It is not a one-off marketing page. All design and code decisions should support a premium, modern, sellable template system that can be reused across multiple local tree service brands.

## Core Goal

The site should feel like an agency-level local service brand:

- high quality
- modern
- premium
- intentional
- conversion-focused

Avoid anything that feels:

- template-like
- outdated
- overly soft
- generic local business
- UI-kit driven

## Design Standards

Follow these design principles across all work:

### 1. Premium modern visual language

- Favor clean structure, strong typography, and controlled contrast
- Use restraint
- Prefer composition over decoration
- Prefer hierarchy over extra effects

### 2. Avoid over-designed styling

Avoid relying on:

- excessive glow
- fake premium effects
- heavy gradients used as decoration
- unnecessary particles/noise
- too many bordered cards
- bulky pill buttons
- overly soft rounded corners

### 3. Reduce card dependence

Do not default to wrapping every piece of content in a rounded card.
Before using a container, ask:

- does this actually need a box?
- can typography, spacing, and alignment do the job instead?

### 4. Section flow matters

Every section must feel connected to the one before and after it.
Avoid sections that feel like hard resets.
Maintain visual continuity through:

- spacing rhythm
- background transitions
- hierarchy pacing
- alignment consistency

### 5. Mobile-first quality

Mobile design is critical.
The structure and content strategy are already established, but the visual design is still being refined and upgraded.
Do not change the site structure unless explicitly instructed.
Do improve:

- spacing
- hierarchy
- typography
- component styling
- section flow
- visual polish

## Locked Structural Rules

The structural foundation of Template A is locked unless explicitly changed:

- page structure
- section order
- content hierarchy
- conversion flow
- reusable product approach

The visual design layer is open for refinement.

## Hero Section Rules

The hero should feel like a full-screen designed scene, not stacked content.

### Hero goals

- strong full-view presence on load
- minimal top area
- centered main message
- bottom-anchored proof/trust
- premium atmosphere without overusing effects

### Hero must have

- top header area
- central headline/message area
- lower stats area
- trust ticker near the bottom

### Hero must avoid

- content smashed too far toward the top
- overly bright glow
- bulky CTA styling
- floating disconnected stats card
- inconsistent button styles in the header

## Typography Rules

Typography should carry the design more than boxes/backgrounds.

### Requirements

- strong hierarchy
- intentional line breaks
- clear contrast between headline, support copy, labels, and metadata
- tighter, more editorial spacing
- avoid weak generic section headers

### Avoid

- small timid section titles
- equal weight everywhere
- loose “template” spacing

## Buttons

Buttons should feel refined, not bulky.

### Avoid

- oversized pill buttons
- excessive height
- soft generic CTA styling

### Prefer

- slightly tighter sizing
- more controlled radius
- cleaner padding
- stronger alignment with surrounding typography

## Icon Rules

Icons must justify their presence.
Do not use emoji-style icons.
Do not keep icons if they feel generic or decorative only.
If an icon system does not actively improve the design, reduce or remove icons.

## Services Section Rules

The Services section should be a signature part of the site.

### Intent

It should feel like a structured service system, not a stack of cards.

### Accordion behavior

One item open at a time is correct.

### Visual distinction

The open item should feel like an active content panel.
Closed items should feel like navigation rows, not full cards.

### Avoid

- all items feeling like the same card
- heavy glow around open panels
- bulky CTA inside the open panel
- too many repeated soft containers

## Coding Rules

- Keep Astro compatibility
- Keep code clean and reusable
- Reuse existing patterns when they are high quality
- Refactor toward reusable components when helpful
- Do not introduce unnecessary complexity
- Do not break mobile layouts
- Do not damage Lighthouse/performance gains

## Workflow Rules

When asked to update a section:

1. First evaluate what currently feels weak
2. Improve hierarchy, spacing, and composition
3. Implement only the requested pass
4. Do not redesign unrelated sections
5. Preserve functionality unless explicitly asked to change it

## What success looks like

The final result should feel:

- less like a polished template
- more like a premium product
- more agency-level
- more current with modern web design trends
