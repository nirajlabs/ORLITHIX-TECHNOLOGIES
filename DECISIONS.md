# DECISIONS.md — Architecture Decision Records (ADRs)

This document records the foundational architectural decisions, evaluation trade-offs, and rejected approaches for the Orlithix Technologies digital platform.

---

## ADR 001: Next.js App Router with React Server Components (RSC)

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  The parent website must present an institutional, premium enterprise brand, load instantaneously worldwide, maintain superior SEO indexing, and provide an expandable foundation for future software products and technology divisions.
- **Decision:**
  Adopt the Next.js App Router (React Server Components) as the core framework. Marketing and detail pages are server-rendered; client components are used where browser state is needed, including navigation and catalog filters/search. The current Contact page is server-rendered and does not submit a form.
- **Consequences:**
  - *Positive:* Zero client-side JS bundle overhead for static marketing sections; maximum SEO performance with server-rendered HTML; native streaming and layout composition.
  - *Negative:* Requires discipline when sharing state across components; third-party client libraries must be wrapped in client boundaries.
- **Alternatives Considered & Rejected:**
  - *Next.js Pages Router:* Legacy paradigm; lacks nested layouts and server component data streaming.
  - *Pure Single-Page Application (Vite + React SPA):* Poor initial page load SEO; requires client-side data fetching and complex prerendering workarounds.
  - *Static Site Generators (Astro/Hugo):* Excellent for pure content, but lacks native Next.js API route handlers, server actions, and shared enterprise SaaS product ecosystem compatibility for future platform expansion.

---

## ADR 002: Centralized, Strongly Typed Data Layer vs. Headless CMS / Database

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  The user strictly mandated: *"Make the website expandable and data-driven. Do not hardcode product and capability cards inside individual page components. Use reusable components and central configuration files."*
- **Decision:**
  Implement version-controlled TypeScript content sources. Company, division, development-approach, and navigation content is under `src/data/`; the active product and capability catalogs are `src/lib/products.ts` and `src/lib/capabilities.ts`. The legacy `src/data/products.ts` and `src/data/capabilities.ts` files are not imported by the active routes and are not sources of truth.
- **Consequences:**
  - *Positive:* Zero external database latency or hosting costs; atomic git commits for content updates; compile-time type validation prevents missing fields or broken links; effortless future migration to a Headless CMS or API if needed.
  - *Negative:* Content updates require a code commit rather than a non-technical GUI editor (acceptable for an engineering-focused parent company at this stage).
- **Alternatives Considered & Rejected:**
  - *Hardcoding content in JSX:* Explicitly forbidden by architecture requirements; breaks reusability and future expansion.
  - *External Headless CMS (Sanity, Strapi, Contentful):* Unnecessary operational complexity, latency, and third-party dependencies during early venture development.

---

## ADR 003: Strict Business Integrity & Product Lifecycle Disclosure

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  The company name is provisional and not yet legally cleared or incorporated. Fictitious claims (fake clients, fake partner logos, fake employee headcounts, fabricated awards, or representing research ideas as production client services) destroy credibility.
- **Decision:**
  Keep lifecycle status explicit in the active product model (`ProductStage` in `src/lib/products.ts`) and control public catalog visibility with the `published` field. Render product stage labels and preserve the global proposed-venture disclosure. Capability content has its own status fields, but it is not the same product lifecycle state machine.
- **Consequences:**
  - *Positive:* Unimpeachable institutional credibility, transparent communications, legal safety, and professional enterprise alignment.
  - *Negative:* Requires careful copycrafting to convey cutting-edge vision without making unsupported commercial claims.
- **Alternatives Considered & Rejected:**
  - *Presenting concepts as released enterprise software:* Rejected outright due to fraud and credibility risks.

---

## ADR 004: Pure CSS & SVG Custom Iconography vs. External Heavy Libraries

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  The website requires a proprietary, high-tech brand identity with an enterprise dark theme. The brand logo must scale from 16px favicons to high-resolution display assets without artifacting.
- **Decision:**
  Build a dedicated SVG Monogram and Wordmark component (`<Logo />`) using geometric vector paths and CSS gradient fills (`#586BFF` to `#40D6C5`). Combine this with `lucide-react` for standard UI iconography.
- **Consequences:**
  - *Positive:* Infinite vector scalability, sub-millisecond rendering, zero HTTP requests, automatic dark theme adaptation.
  - *Negative:* Vector coordinates must be calculated and designed with mathematical precision.
- **Alternatives Considered & Rejected:**
  - *Raster PNG/WebP logo:* Blur on high-DPI retina screens; fixed background styling.
  - *Heavy 3D Canvas / Three.js hero:* Excessive initial bundle size, poor mobile battery life, slower Web Vitals.

---

## ADR 005: Package Management Protocol (npm on Windows)

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  System environment checks revealed Node.js v25.4.0 and npm v11.7.0 are installed, while `pnpm` is not installed on the host system.
- **Decision:**
  Standardize on `npm` for all dependency installations, package locking (`package-lock.json`), and build scripts.
- **Consequences:**
  - *Positive:* 100% compatibility with the current host machine without requiring global binary installs or permission elevation.
  - *Negative:* Slightly slower install times compared to pnpm (negligible for initial Next.js footprint).
- **Alternatives Considered & Rejected:**
  - *Attempting `pnpm` commands:* Fails with command not found.

---

## ADR 006: Contact Actions Require Configured Real Details

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  The Contact page needs to describe enquiry categories, but no verified business email, telephone number, address, social account, or inquiry-delivery service is currently configured.
- **Decision:**
  Store direct contact destinations in `src/data/contact.ts`. Render email and telephone actions for the configured real destinations. The enquiry form prepares a local `mailto:` draft instead of claiming to submit or deliver an inquiry. Do not simulate form submission or report successful delivery without a verified delivery mechanism.
- **Consequences:**
  - *Positive:* The site does not fabricate business details or imply that an inquiry was delivered.
  - *Negative:* Visitors cannot currently send an inquiry through the website. Genuine submission requires owner approval of the destination/provider and a server-side implementation.
- **Alternatives Considered & Rejected:**
  - *Inventing a placeholder contact address or returning simulated success:* Rejected because it misrepresents contact availability and delivery.
