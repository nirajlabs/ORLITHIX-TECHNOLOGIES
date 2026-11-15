# Project Handoff: Orlithix Technologies

**Updated:** 2026-11-15
**Project status:** Website routes and content systems are implemented; contact submission is not implemented.
**Entity status:** Orlithix Technologies is a proposed venture in development. Product and capability content must not be presented as evidence of completed client work, launched products, or verified business results.

## 1. Project summary

This repository contains a Next.js App Router website for the proposed Orlithix Technologies venture. It presents company direction, technology capability concepts, and a product innovation lab. Public-facing product and capability descriptions are content proposals, not functioning product implementations.

## 2. Implemented functionality

| Area | Current implementation |
| --- | --- |
| Homepage | Hero, capability preview, About preview, product innovation preview, development approach, and contact CTA. |
| About (`/about`) | Introduction, vision, mission, technology philosophy, innovation areas, approach, future direction, and proposed-venture disclosure. |
| Capabilities (`/capabilities`) | Searchable/filterable capability catalog and generated `/capabilities/[slug]` detail routes. The data source is `src/lib/capabilities.ts`. |
| Product Innovation Lab (`/products`) | Published-product catalog with category filters and search. Only entries with `published: true` are returned/rendered. |
| Product details (`/products/[slug]`) | Static detail routes with status, artwork, problem/solution, proposed features and stack, future-update roadmap, and related capabilities. Optional local artwork falls back to generated CSS/SVG artwork. |
| Contact (`/contact`) | Project, collaboration, business partnership, and general enquiry categories. Contact details are centralized in `src/data/company.ts`; no destination is configured and the page does not submit inquiries. |
| Shared site content | Navigation, footer, legal disclosure, company copy, innovation areas, and development approach use shared data modules. |
| SEO and brand assets | Shared metadata helpers, page-specific metadata, canonical URLs, Open Graph metadata/image, SVG favicon, public SVG logo, sitemap, and robots routes. |

The active product source is `src/lib/products.ts`; the active capability source is `src/lib/capabilities.ts`. `src/data/products.ts` and `src/data/capabilities.ts` are duplicate legacy modules and are not imported by the active routes.

## 3. Changes made in this development session

### Product Innovation Lab work

- Extended the product catalog/detail experience with optional local artwork and a generated fallback.
- Kept product detail routes and sitemap entries data-driven from the published catalog.
- Made product-related links in the footer and capability detail pages derive from the active product/capability data.
- Clarified that product feature descriptions and future updates are proposals, not deployed product functionality.
- Product and capability-related source files touched in that work:
  - `src/app/capabilities/[slug]/page.tsx`
  - `src/app/products/page.tsx`
  - `src/app/products/[slug]/page.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/components/product-card.tsx`
  - `src/components/product-grid.tsx`
  - `src/data/navigation.ts`
  - `src/lib/capabilities.ts`
  - `src/lib/products.ts`

### About and Contact work

- Rebuilt the existing About route with seven requested content sections and proposed-venture language.
- Replaced the prior simulated contact-form behavior with four enquiry categories and conditional contact actions.
- Added centralized optional email, phone, address, and social-link fields to the company configuration/type.
- Updated the homepage About preview, contact CTA, and footer to avoid unsupported operating/privacy claims and fabricated contact information.
- Reframed innovation-area and development-approach descriptions as exploratory/intended directions.

Files changed for About/Contact:

- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/AboutPreviewSection.tsx`
- `src/components/sections/ContactCtaSection.tsx`
- `src/data/company.ts`
- `src/data/developmentApproach.ts`
- `src/data/divisions.ts`
- `src/types/index.ts`

No source files were removed. The About and Contact route files already existed and were updated in place. No database/API implementation or new runtime dependency was added.

### Visual refinement

- Applied the premium dark brand palette consistently and refined spacing, heading scale, hero hierarchy, cards, buttons, navigation, and footer layout.
- Reduced excessive glow and motion; added visible focus and reduced-motion handling, improved mobile navigation touch targets/ARIA behavior, and made the logo scalable with dark/light wordmark tones.
- Replaced telemetry-style mock figures in the technology visual with an interactive visualization based on the configured divisions.
- Files changed: `src/app/about/page.tsx`, `src/app/capabilities/[slug]/page.tsx`, `src/app/capabilities/page.tsx`, `src/app/contact/page.tsx`, `src/app/globals.css`, `src/app/layout.tsx`, `src/app/products/[slug]/page.tsx`, `src/app/products/page.tsx`, `src/components/brand/Logo.tsx`, `src/components/capability-card.tsx`, `src/components/capability-grid.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/Navbar.tsx`, `src/components/product-card.tsx`, `src/components/product-grid.tsx`, `src/components/sections/CapabilitiesSection.tsx`, `src/components/sections/HeroSection.tsx`, `src/components/sections/InnovationLabSection.tsx`, `src/components/ui/Badge.tsx`, `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`, `src/components/ui/SectionHeader.tsx`, `src/components/ui/TechVisual.tsx`, and `src/data/navigation.ts`.

### Technical SEO, accessibility, and quality audit

- Added shared SEO metadata support in `src/lib/seo.ts`, the SVG favicon at `src/app/icon.svg`, the generated social image at `src/app/opengraph-image.tsx`, and the public logo at `public/logo.svg`.
- Integrated page titles/descriptions, canonical URLs, Open Graph metadata, structured-data logo URL, and generated sitemap/robots behavior. Improved page heading structure, image sizing/alt text, and mobile-navigation ARIA/focus behavior.
- SEO integration also changed `src/app/about/page.tsx`, `src/app/capabilities/[slug]/page.tsx`, `src/app/capabilities/page.tsx`, `src/app/contact/page.tsx`, `src/app/layout.tsx`, `src/app/not-found.tsx`, `src/app/page.tsx`, `src/app/products/[slug]/page.tsx`, `src/app/products/page.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/components/capability-grid.tsx`, `src/components/layout/Navbar.tsx`, `src/components/product-card.tsx`, and `src/lib/capabilities.ts`.
- Audited the active data architecture and confirmed that product routes, catalog visibility, footer links, related-product links, static params, and sitemap entries use `src/lib/products.ts`; capability routes use `src/lib/capabilities.ts`. The similarly named modules under `src/data/` are legacy duplicates and are not imported by the active routes.
- Corrected unsupported business-language in the latest QA pass: company and capability copy now describes proposed interests; example impacts are labeled illustrative; product copy identifies entries by their stated research/future-concept stage; no evaluation or consultation channel is claimed to be available.
- Removed the fabricated email default from `.env.example`. The contact-related template values are currently unused by application code.
- The latest QA/content-integrity source changes were limited to:
  - `.env.example`
  - `src/app/capabilities/[slug]/page.tsx`
  - `src/app/products/page.tsx`
  - `src/components/sections/CapabilitiesSection.tsx`
  - `src/components/sections/InnovationLabSection.tsx`
  - `src/data/company.ts`
  - `src/lib/capabilities.ts`
  - `src/lib/products.ts`

No files were removed and no API, database, or dependency changes were made in the latest QA pass. The SEO assets listed above were added during the earlier technical-optimization work.

## 4. Verification run and actual results

On the current application code, before the documentation-only edits in this handoff:

- `npm run lint` — **passed**, exit code 0 (`eslint src`).
- `npm run build` — **passed**, exit code 0. Next.js 16.4.6 compiled, TypeScript completed, and static generation completed for **21/21 pages**.
- The build included the five main pages, four product detail routes, six capability detail routes, not-found, favicon, Open Graph image, robots, and sitemap routes.
- Browser QA returned **200** for all 15 content routes. Header/footer destinations and fragments, product/capability cards, product category/search filters, capability filters, contact behavior, and asset endpoints were checked.
- A 60-combination route/viewport sweep (15 routes × 375, 768, 1440, and 1920 CSS pixels) found no horizontal overflow and exactly one H1 per route. After the final copy changes, a production smoke check reloaded `/`, `/products`, an AI capability detail, and `/contact`; all returned 200, had one H1, and had no horizontal overflow.
- DOM-based accessibility checks across the 15 content routes found no issues in the checked accessible names, form labels, headings, landmarks, duplicate IDs, image alt text, and ARIA control references. This was not an axe scan or a WCAG conformance audit.
- No application console errors were captured during route checks.
- `git diff --check` — **passed**, exit code 0. Git printed line-ending conversion warnings for some source files; it reported no whitespace errors.
- `package.json` has no test script, so no automated unit/integration/e2e test suite was run.

No claim is made that the contact delivery flow has been tested or implemented.

## 5. Known incomplete work and verified limitations

1. **No genuine inquiry delivery:** `companyData.contactDetails` is empty. The page clearly shows contact details are being added and exposes no `mailto:` or `tel:` action. There is no form submission, API/server action, email provider, CRM integration, or persistence.
2. **Contact query parameters are unused:** Product CTAs may link to `/contact?subject=...`, but the Contact page does not read or prefill the query parameter.
3. **Illustrative capability examples are not results:** Capability use cases and numeric outcomes are explicitly labeled illustrative targets, not verified benchmarks or client results. Keep that distinction in future copy.
4. **Legacy duplicate data:** `src/data/products.ts` and `src/data/capabilities.ts` remain unused duplicates. Do not edit them as active data sources; consolidation is a separate decision.
5. **Verification scope:** The responsive and accessibility checks were browser/DOM based, not a dedicated axe, Lighthouse, screen-reader, or WCAG audit. There is no automated test framework configured.
6. **Extraneous local packages:** `npm ls --depth=0` reports `@emnapi/runtime@1.11.3` and `@img/sharp-wasm32@0.35.5` as extraneous. They are not declared in `package.json`; the production build passes. Do not remove them without investigating the toolchain.

No build, lint, or TypeScript errors were observed in the reported verification.

## 6. Dependencies, configuration, APIs, and data

- No dependencies or package manifests were changed in the latest QA pass.
- No database, migration, API route, server action, email provider, CRM integration, or inquiry persistence was added.
- `NEXT_PUBLIC_SITE_URL` currently falls back to `https://orlithix.com`; set it to the approved canonical production URL before deployment if that is not the correct production origin.
- `.env.example` no longer contains a fabricated contact email. Its contact-related values are not consumed by current application code; contact details are centralized in `src/data/company.ts`.
- Configuring real contact links requires owner-approved details. Genuine inquiry submission additionally requires an approved delivery destination/provider and server-side implementation.

## 7. Documentation updated in this handoff

- `README.md`
- `PROJECT_HANDOFF.md`
- `ARCHITECTURE.md`
- `CHANGELOG.md`
- `AGENTS.md`

`DECISIONS.md` was reviewed and left unchanged because this pass introduced no new architecture decision. `AGENTS.md` was corrected to list the currently implemented UI, layout, section, and brand components. No feature code was changed as part of this documentation update.

## 8. Exact next development task

**Ask the project owner to approve a real inquiry destination and delivery method.** Once approved, implement genuine contact submission with server-side validation, abuse/spam controls, clear privacy/disclosure copy, and success/error states tied to actual delivery results. Add focused tests for validation and delivery/error handling. Do not select a provider, invent contact details, or show success unless delivery is confirmed. Until approval, leave the Contact page informational and non-submitting.
