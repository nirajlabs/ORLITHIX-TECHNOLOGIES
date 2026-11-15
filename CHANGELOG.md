# CHANGELOG.md — Orlithix Technologies Project History

All notable changes to the Orlithix Technologies project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned Next Steps
- Initialize Next.js 14+/15 App Router project structure with TypeScript and Tailwind CSS using `npm`.
- Install `lucide-react` for brand and domain iconography.
- Configure `tailwind.config.ts` with brand design tokens (`#080D1B`, `#10192B`, `#121F36`, `#586BFF`, `#40D6C5`, `#F4F6FF`, `#A5B2CC`, `#263650`).
- Implement centralized typed data layer (`src/data/company.ts`, `src/data/divisions.ts`, `src/data/capabilities.ts`, `src/data/products.ts`, `src/data/navigation.ts`).
- Build reusable UI primitives and layout organisms (`Navbar`, `Footer`, `Logo`, `Card`, `Badge`, `Button`).
- Construct page routes: Home (`/`), About (`/about`), Capabilities (`/capabilities`), Products (`/products`), Contact (`/contact`).
- Implement contact route handler with input sanitization and mock submission feedback.

---

## [0.1.0] - 2026-11-15

### Added
- **Repository Inspection:** Verified environment runtime (Windows, Node.js v25.4.0, npm v11.7.0, Git v2.54.0.windows.1). Confirmed clean initial Git repository on branch `master`.
- **System Architecture Specification:** Created `ARCHITECTURE.md` establishing the 8-pillar blueprint:
  1. Complete website architecture (Parent company model, decoupled content layer).
  2. Page-by-page structure (Home, About, Capabilities, Products, Contact).
  3. Component structure (UI primitives, Layout, Domain sections).
  4. Logo design direction ("Neural Monolith" isometric hexagon monogram + geometric wordmark).
  5. Design system (8-token color palette, elevation, typography, glassmorphism).
  6. Responsive layout plan (Mobile-first, breakpoints 320px to 1920px+).
  7. Expandable product and capability architecture (TypeScript schemas and division taxonomy).
  8. SEO and metadata plan (OpenGraph, Twitter cards, JSON-LD, sitemap, robots).
- **Architecture Decision Records:** Created `DECISIONS.md` documenting ADR 001 through ADR 005.
- **Agent Operating Standards:** Created `AGENTS.md` specifying zero-fabrication rules, provisional legal guardrails, and coding conventions.
- **Project Handoff Documentation:** Created `PROJECT_HANDOFF.md` detailing exact next tasks, testing protocols, and verification commands.
- **Environment Template:** Created `.env.example` defining environment variables for public URL and contact configuration.
