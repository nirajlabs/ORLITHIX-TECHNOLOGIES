# DECISIONS.md — Architecture Decision Records (ADRs)

This document records the foundational architectural decisions, evaluation trade-offs, and rejected approaches for the Orlithix Technologies digital platform.

---

## ADR 001: Next.js App Router with React Server Components (RSC)

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  The parent website must present an institutional, premium enterprise brand, load instantaneously worldwide, maintain superior SEO indexing, and provide an expandable foundation for future software products and technology divisions.
- **Decision:**
  Adopt Next.js App Router (React Server Components) as the core framework. Marketing pages, content grids, and data-driven views are rendered on the server. Client components (`'use client'`) are strictly restricted to stateful interactive elements (navigation drawer, search/filter controls, and form submissions).
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
  Implement a version-controlled, strongly typed TypeScript data repository within `src/data/` (`company.ts`, `divisions.ts`, `capabilities.ts`, `products.ts`, `navigation.ts`).
- **Consequences:**
  - *Positive:* Zero external database latency or hosting costs; atomic git commits for content updates; compile-time type validation prevents missing fields or broken links; effortless future migration to a Headless CMS or API if needed.
  - *Negative:* Content updates require a code commit rather than a non-technical GUI editor (acceptable for an engineering-focused parent company at this stage).
- **Alternatives Considered & Rejected:**
  - *Hardcoding content in JSX:* Explicitly forbidden by architecture requirements; breaks reusability and future expansion.
  - *External Headless CMS (Sanity, Strapi, Contentful):* Unnecessary operational complexity, latency, and third-party dependencies during early venture development.

---

## ADR 003: Strict Business Integrity & Product Status State Machine

- **Date:** 2026-11-15
- **Status:** Accepted
- **Context:**
  The company name is provisional and not yet legally cleared or incorporated. Fictitious claims (fake clients, fake partner logos, fake employee headcounts, fabricated awards, or representing research ideas as production client services) destroy credibility.
- **Decision:**
  Implement an explicit product and capability state machine:
  - Every product entity must have a mandatory `status` enum: `CONCEPT_VALIDATION`, `IN_DEVELOPMENT`, `ALPHA_PREVIEW`, or `PLANNED_INITIATIVE`.
  - The UI must render high-visibility status pills and contextual disclosure badges.
  - The global layout must include an immutable legal disclaimer stating the provisional venture status.
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
