# CHANGELOG.md — Orlithix Technologies Project History

All notable changes to the Orlithix Technologies project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] - 2026-11-15

### Added
- Rebuilt the About page with company introduction, vision, mission, technology philosophy, innovation areas, development approach, and future direction sections.
- Replaced the simulated contact form flow with four enquiry categories: project, collaboration, business partnership, and general.
- Added optional centralized contact configuration fields for email, phone, address, and social links.
- Added a README with current routes, data sources, and development commands.
- Added shared SEO metadata helpers, an SVG favicon, a public SVG logo, and a generated Open Graph image route.

### Changed
- Contact actions are rendered only when corresponding real contact details are configured. The current configuration is empty, so the Contact page displays a pending-details notice and does not send or persist inquiries.
- Updated the homepage About preview, CTA, and footer to avoid fabricated contact details and unsupported operating/privacy claims.
- Reframed innovation-area and development-approach copy as exploratory or proposed.
- Refined the dark enterprise visual system across shared UI, cards, catalog/detail pages, navigation, footer, logo, and hero; reduced glow/motion and improved focus, reduced-motion, and mobile-navigation behavior.
- Replaced mock technology-visual metrics with an interactive visualization derived from configured division data.
- Product catalog/detail presentation includes optional local artwork with generated fallback artwork; product descriptions, features, and roadmaps are disclosed as proposed rather than deployed functionality.
- Updated capability, homepage, product, and Innovation Lab copy to distinguish proposed interests and future concepts from established services or delivered work; hypothetical impact metrics remain labeled illustrative.
- Removed the fabricated contact-email default from `.env.example`. Contact-related template values are not currently consumed by application code.
- Integrated page-specific metadata, canonical URLs, Open Graph metadata, structured-data logo URL, and generated sitemap/robots behavior; refined headings, image sizing/alt text, and mobile-navigation ARIA/focus behavior.
- Updated current QA, architecture, handoff, run/deployment, and component-structure guidance in `README.md`, `PROJECT_HANDOFF.md`, `ARCHITECTURE.md`, `AGENTS.md`, and this changelog. `DECISIONS.md` was reviewed and did not require changes.

### Verification
- `npm run lint` passed (exit code 0).
- `npm run build` passed (exit code 0); Next.js 16.4.6 compiled, TypeScript completed, and 21/21 pages were generated.
- Browser QA returned 200 for all 15 content routes and checked navigation, internal targets, product/capability cards and filters, contact behavior, and asset endpoints. A 60-combination route/viewport sweep at 375, 768, 1440, and 1920px found no horizontal overflow and one H1 per route. A production smoke check after the final copy edits rechecked the home, product catalog, AI capability detail, and contact routes.
- DOM-based accessibility checks found no issues in the checked accessible names, labels, heading structure, landmarks, duplicate IDs, image alt text, and ARIA control references. No axe/Lighthouse or automated end-to-end suite is configured.
- `git diff --check` passed with no whitespace errors.
- `npm ls --depth=0` reported `@emnapi/runtime@1.11.3` and `@img/sharp-wasm32@0.35.5` as extraneous; neither is declared in `package.json`. The build passed with these packages present.

### Not implemented
- No genuine contact submission, email provider, CRM integration, API route, server action, or database persistence. The configured contact details remain empty.
- No database/API changes, new dependency, paid service, or deployment was made.
- `NEXT_PUBLIC_SITE_URL` retains its existing `https://orlithix.com` fallback; set the approved canonical URL for production if different.
- No automated unit, integration, or accessibility test suite is configured. Browser and DOM checks are not a WCAG conformance audit.

---

## [0.3.0] - 2026-11-15

### Added
- **Expandable Central Technology Capabilities System (`src/lib/capabilities.ts`):**
  - Centralized data model with strongly typed interfaces (`CapabilityItem`, `CapabilityUseCase`, `RelatedProductRef`, `CapabilityStatusType`).
  - Helper functions: `getAllCapabilities()`, `getCapabilityBySlug()`, `getCapabilitiesByStatus()`, `getAdjacentCapabilities()`.
  - Configured 6 core capability disciplines with rich technologies, use cases, benchmark metrics, and three-horizon delivery mappings:
    1. *Artificial Intelligence & Machine Learning* (Python, PyTorch, TensorFlow, NLP, Generative AI, Computer Vision, Predictive ML).
    2. *Software Engineering* (Next.js, React, TypeScript, Python, FastAPI, Enterprise SaaS, Backend Engineering).
    3. *Data Intelligence* (Data Engineering, PostgreSQL, Data Analytics, Data Quality, Business Intelligence).
    4. *Automation & AI Agents* (Workflow Automation, AI Agents, API Integrations, Intelligent Document Processing).
    5. *Cloud & DevOps* (Cloud Architecture, Deployment, CI/CD, Monitoring).
    6. *Mobile Development* (Android, iOS, Flutter, Cross-platform Applications).
- **Reusable Card & Grid Components:**
  - `src/components/capability-card.tsx`: Dark enterprise surface, dynamic Lucide icon mapping, status pills, technology chips, use cases preview, and deep-link routing.
  - `src/components/capability-grid.tsx`: Interactive filterable and searchable grid (Active Engineering Core, Available Architectural Services, Active R&D Expansion, plus live text search).
- **Main Capabilities Catalog Route (`src/app/capabilities/page.tsx`):**
  - Centralized, fully automated rendering consuming `getAllCapabilities()`.
  - Strategic horizon distinction overview (Current Core vs. Available Services vs. Future R&D).
- **Dynamic SSG Capability Route (`src/app/capabilities/[slug]/page.tsx`):**
  - `generateStaticParams()` pre-compiling all capability slugs at build time.
  - Dynamic SEO `generateMetadata()`.
  - Tri-partition maturity matrix (Current Core Skills, Available Services, Future R&D Vectors).
  - Real-world enterprise use cases breakdown (Challenge, Solution, Architectural Impact).
  - Cross-linked related software products from the Innovation Lab.
  - Previous / Next adjacent discipline navigation.
- **Dynamic XML Sitemap Updates (`src/app/sitemap.ts`):**
  - Auto-mapped dynamic `/capabilities/[slug]` URLs with priority 0.85.
- **Verification Execution:**
  - `npm run lint`: 0 errors, 0 warnings.
  - `npm run build`: Compiled and prerendered 15/15 static routes (SSG) in 1.17s.

---

## [0.2.0] - 2026-11-15

### Added
- Core Next.js App Router setup with Tailwind CSS and PostCSS.
- Brand Identity & scalable SVG `<Logo />` (Interconnected ecosystem 'O' with ascending bridge).
- Sticky responsive `<Navbar />` and corporate `<Footer />`.
- Enterprise Homepage sections: `<HeroSection />`, `<TechVisual />`, `<CapabilitiesSection />`, `<AboutPreviewSection />`, `<InnovationLabSection />`, `<DevelopmentApproachSection />`, `<ContactCtaSection />`.

---

## [0.1.0] - 2026-11-15

### Added
- Initial discovery, environment verification, and architectural design blueprint.
- Created `AGENTS.md`, `PROJECT_HANDOFF.md`, `ARCHITECTURE.md`, `DECISIONS.md`, and `.env.example`.
