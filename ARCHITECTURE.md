# Architecture: Orlithix Technologies Website

**Status:** Current implementation snapshot, reviewed 2026-11-15
**Venture status:** Orlithix Technologies is proposed and in development. This architecture describes the website, not a released product platform.

## 1. Technology and runtime

- Next.js 16 App Router with React 19 and TypeScript.
- Tailwind CSS 4 and `lucide-react`.
- npm is the package manager.
- `npm run dev`, `npm run lint`, and `npm run build` are configured. There is no test script in `package.json`.
- Public routes are composed under `src/app/layout.tsx`; page components are server-rendered unless interactivity requires a client component.

## 2. Current routes

| Route | Implementation |
| --- | --- |
| `/` | Hero, capabilities preview, About preview, Innovation Lab preview, development approach, and contact CTA. |
| `/about` | Introduction, vision, mission, technology philosophy, innovation areas, approach, future direction, and entity disclosure. |
| `/capabilities` | Capability catalog with client-side filtering/search. |
| `/capabilities/[slug]` | Capability detail pages generated from the active capability catalog. |
| `/products` | Published-product catalog with client-side category filtering and search. |
| `/products/[slug]` | Product concept detail pages generated from the active product catalog. |
| `/contact` | Four enquiry categories and contact options that render only from configured contact details. No enquiry is submitted or stored. |
| `/icon.svg` and `/opengraph-image` | SVG favicon and generated social preview image. |
| `/sitemap.xml` | Generated from active product and capability catalogs plus core pages. |
| `/robots.txt` | Next.js robots route. |

The latest recorded production build generated 21/21 pages, including six capability detail routes and four product detail routes.

## 3. Active content sources

| Source | Responsibility |
| --- | --- |
| `src/lib/products.ts` | ProductItem model, published product records, and catalog/detail helpers. Product UI and sitemap use this module. |
| `src/lib/capabilities.ts` | CapabilityItem model, capability records, and catalog/detail helpers. Capability UI and sitemap use this module. |
| `src/data/company.ts` | Company identity/disclosure, About copy, contact CTA text, and optional contact details. |
| `src/data/divisions.ts` | Technology exploration-area content. |
| `src/data/developmentApproach.ts` | The proposed Discover, Design, Engineer, Validate approach content. |
| `src/data/navigation.ts` | Main navigation and footer navigation. |
| `src/types/index.ts` | Shared company, division, capability, product, navigation, and development-step types used by `src/data`. |

`src/data/products.ts` and `src/data/capabilities.ts` are legacy duplicate modules. Current application imports use `src/lib/products.ts` and `src/lib/capabilities.ts`; the duplicate modules are not the active source of truth.

The product catalog has a `published` gate. `getAllProducts()` returns published products for the catalog, footer, and sitemap. Product category and stage fields distinguish concepts and future stages. Product feature and roadmap copy is proposed, not proof of implemented product behavior.

## 4. Component boundaries

- `src/components/ui/` contains shared primitives such as Badge, Button, Card, Container, and SectionHeader.
- `src/components/layout/` contains shared navigation and footer.
- `src/components/sections/` contains homepage sections and previews.
- `src/components/product-card.tsx` and `src/components/product-grid.tsx` render and filter product concepts. The grid is a client component.
- `src/components/capability-card.tsx` and `src/components/capability-grid.tsx` render and filter capabilities. The grid is a client component.
- `src/app/about/page.tsx`, `src/app/contact/page.tsx`, catalog roots, and detail routes are server components unless a child component needs browser state.

Product artwork uses an optional local image path; if absent, `ProductArtwork` renders generated CSS/SVG artwork. A product image is decorative concept artwork and must not imply a deployed interface.

## 5. Contact behavior and boundaries

`src/data/company.ts` owns `contactDetails` (`email`, `phone`, `address`, and optional social links). The current object is empty.

- The Contact page presents Project, Collaboration, Business Partnership, and General enquiry categories.
- Email actions are rendered only if an email is configured. Phone and social links appear only when their values are configured.
- The homepage CTA and footer do not invent an email address; they display a pending-details notice when no usable contact details are available.
- There is no contact form submission, API route, server action, provider integration, or persistence.
- Product CTAs may include a `subject` query parameter, but the Contact page does not currently consume that parameter.

Do not add a success state unless a real delivery mechanism exists and its result is verified. Implementing genuine inquiry submission requires an approved recipient/provider, server-side validation, and appropriate abuse/privacy controls.

## 6. Design and accessibility direction

The site uses a dark visual system with the following established values:

- Background: `#080D1B`
- Secondary surface: `#10192B`
- Card surface: `#121F36`
- Primary indigo: `#586BFF`
- Accent mint: `#40D6C5`
- Primary text: `#F4F6FF`
- Secondary text: `#A5B2CC`
- Borders: `#263650`

Tailwind utility classes are primarily used in components, with global styles in `src/app/globals.css`. Prefer responsive, mobile-first layouts, accessible labels/ARIA for interactive controls, visible keyboard focus, and touch targets of at least 44px.

The 2026-11-15 QA run checked the 15 content routes at 375, 768, 1440, and 1920 CSS pixels (60 route/viewport combinations), found no horizontal overflow, and found exactly one H1 per route. A production smoke check after the final copy edits rechecked the home, product catalog, AI capability detail, and contact routes. DOM-based checks found no issues in the checked accessible names, labels, heading structure, landmarks, duplicate IDs, image alt text, and ARIA control references. These checks are not a dedicated axe/Lighthouse scan, screen-reader audit, or WCAG conformance assessment.

## 7. SEO and generated pages

- Shared metadata helpers are in `src/lib/seo.ts`; root metadata and Organization JSON-LD are in `src/app/layout.tsx`.
- About and Contact pages define route metadata.
- Product and capability detail routes define static parameters and dynamic metadata from their active catalogs.
- `src/app/sitemap.ts` derives dynamic detail URLs from `src/lib/products.ts` and `src/lib/capabilities.ts`.
- `src/app/icon.svg` provides the SVG favicon; `src/app/opengraph-image.tsx` generates a 1200×630 social preview image; `public/logo.svg` is the public vector logo used by structured metadata.
- `NEXT_PUBLIC_SITE_URL` currently falls back to `https://orlithix.com`; set it to the approved canonical production URL before deployment if the fallback is not the final domain.

## 8. Known follow-up

1. Contact delivery is not implemented. Obtain owner approval for a real destination/provider before adding a server-side form/API integration; do not simulate successful delivery.
2. The Contact page does not consume product CTA `subject` query parameters.
3. Keep capability use cases and numeric outcomes explicitly labeled as illustrative targets, not verified delivery results.
4. Decide whether to remove or consolidate the unused duplicate data modules after confirming no external workflow depends on them.
5. Add an automated test/accessibility suite only as a separately scoped improvement; currently the package has no test script and the recorded accessibility checks were DOM based.
