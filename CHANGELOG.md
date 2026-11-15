# CHANGELOG.md — Orlithix Technologies Project History

All notable changes to the Orlithix Technologies project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
