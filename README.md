# Orlithix Technologies

Orlithix Technologies is a proposed technology venture in development. This repository contains its public-facing website and exploratory product/capability content; it is not evidence of launched commercial offerings, customers, or completed client work.

## Current website

- `/` - Venture overview, capability and product previews, development approach, and contact CTA.
- `/about` - Company introduction, vision, mission, technology philosophy, innovation areas, approach, and future direction.
- `/capabilities` and `/capabilities/[slug]` - Capability catalog and static detail pages.
- `/products` and `/products/[slug]` - Published product concepts, category filters/search, and static detail pages.
- `/contact` - Project, collaboration, partnership, and general enquiry categories. No contact destination is currently configured and no inquiry is submitted by this page.
- `/icon.svg`, `/opengraph-image`, `/sitemap.xml`, and `/robots.txt` - Generated or static brand and SEO routes.

Product and capability content describes concepts and intended directions. Read the relevant lifecycle disclosures and do not treat proposed functionality as implemented software.

## Technology

- Next.js App Router, React, and TypeScript
- Tailwind CSS and `lucide-react`
- npm

## Development

```powershell
npm install
npm run dev
```

Quality commands:

```powershell
npm run lint
npm run build
```

There is no test script configured in `package.json`.

The latest recorded QA run on 2026-11-21 passed lint and production build after correcting the About-page founder catalog. Manual browser checks previously covered all 15 content routes, navigation, product/capability cards and filters, contact behavior, assets, and responsive widths of 375, 768, 1440, and 1920px. Those checks found no horizontal overflow or application console errors. Accessibility checks were DOM-based; no axe/Lighthouse scan or automated test suite is configured.

## Production

Set `NEXT_PUBLIC_SITE_URL` to the approved canonical production URL before building and deploying. The current fallback is `https://orlithix.com`, so do not rely on it if that is not the final domain.

```powershell
npm run build
npm run start
```

Use a Next.js-compatible deployment target. Deployment has not been performed as part of the recorded QA work.

## Content sources

- `src/lib/products.ts` - Published product concepts and product detail content.
- `src/lib/capabilities.ts` - Capability catalog and detail content.
- `src/data/company.ts` - Company/About copy and contact CTA text.
- `src/data/contact.ts` - Phone, WhatsApp, and email destinations.
- `src/data/founders.ts` - Founder profiles and supplied image paths.
- `src/data/divisions.ts`, `src/data/developmentApproach.ts`, and `src/data/navigation.ts` - Supporting site content and navigation.

`src/data/products.ts` and `src/data/capabilities.ts` are legacy duplicate modules and are not imported by the active routes. Do not use them as the source of truth.

## Project documentation

- `PROJECT_HANDOFF.md` - Current implementation status, verification, limitations, and next task.
- `ARCHITECTURE.md` - Current route, data, and component architecture.
- `DECISIONS.md` - Architecture decision records.
- `CHANGELOG.md` - Project change history.
- `AGENTS.md` - Agent development and integrity requirements.
