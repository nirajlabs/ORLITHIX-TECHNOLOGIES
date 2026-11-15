# PROJECT_HANDOFF.md — Orlithix Technologies Parent Website

**Document Version:** 1.0.0  
**Generated Date:** 2026-11-15  
**Project Status:** Discovery & Architectural Design Phase Complete (Pre-scaffolding)  
**Host Environment:** Windows (PowerShell), Node.js v25.4.0, npm v11.7.0, Git v2.54.0.windows.1

---

## 1. Executive Summary

This repository contains the architecture, design system specifications, and implementation roadmap for the official corporate website of **Orlithix Technologies** — an AI-first parent technology venture operating across artificial intelligence, enterprise SaaS, data intelligence, cloud infrastructure, and intelligent automation.

At this stage, the repository has been inspected, the core technical and legal parameters have been locked, the architectural blueprint and design tokens have been formally defined, and the project is prepared for clean scaffolding without technical debt.

---

## 2. Git & Repository Status

- **Current Branch:** `master`
- **Latest Commit:** None (Freshly initialized repository; initial documentation and architecture commit pending user review).
- **Uncommitted Files:**
  - `AGENTS.md`
  - `PROJECT_HANDOFF.md`
  - `ARCHITECTURE.md`
  - `DECISIONS.md`
  - `CHANGELOG.md`
  - `.env.example`
- **Application Code State:** Zero application files modified or scaffolded prior to plan approval, adhering strictly to the *"DO NOT MODIFY ANY FILES YET"* directive.

---

## 3. Environment & Runtime Verification

| Component | Status | Details |
| :--- | :--- | :--- |
| **Node.js** | Verified | v25.4.0 installed and active |
| **npm** | Verified | v11.7.0 installed and active |
| **pnpm** | Not Available | Command failed (`not recognized`). Defaulting to `npm` for all dependency operations. |
| **Git** | Verified | v2.54.0.windows.1 |
| **Operating System** | Verified | Windows (PowerShell shell environment) |

---

## 4. Current Feature Implementation Matrix

| Module / Feature | Status | Implementation Details / Scope |
| :--- | :--- | :--- |
| **Architectural Design** | Completed | Full 8-pillar blueprint documented in `ARCHITECTURE.md` |
| **Design System & Palette** | Completed | 8-token brand color palette, typography scale, surface hierarchy defined |
| **Data Architecture** | Completed | TypeScript schemas designed for Divisions, Products, Capabilities, and Navigation |
| **Next.js Scaffolding** | Pending | Awaiting approval to execute `npx create-next-app@latest` with TypeScript & Tailwind |
| **Home Page (`/`)** | Unfinished | Specifications ready in `ARCHITECTURE.md`; code not yet created |
| **About Page (`/about`)** | Unfinished | Specifications ready in `ARCHITECTURE.md`; code not yet created |
| **Capabilities Page (`/capabilities`)** | Unfinished | Specifications ready in `ARCHITECTURE.md`; code not yet created |
| **Products Page (`/products`)** | Unfinished | Specifications ready in `ARCHITECTURE.md`; code not yet created |
| **Contact Page (`/contact`)** | Unfinished | Specifications ready in `ARCHITECTURE.md`; code not yet created |
| **API / Contact Route (`/api/contact`)** | Unfinished | Planned for serverless route handler with validation |
| **Known Bugs** | None | No running application code exists yet |

---

## 5. Architectural & Technical Stack Overview

### Frontend Architecture
- **Framework:** Next.js (App Router, Server Components default)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS with custom theme extensions
- **Icons:** `lucide-react`
- **State Management:** Stateless server rendering + React 19 `useState` / `useTransition` for local UI interactions (navigation drawer, category filtering, contact submission)

### Routing Structure
```
src/app/
├── layout.tsx              # Root layout with metadata, fonts, header, footer
├── page.tsx                # Home page (Hero, Divisions, Capability Highlights, Product Pipeline, Contact CTA)
├── about/
│   └── page.tsx            # About page (Mission, Architectural Philosophy, Venture Structure, Disclosure)
├── capabilities/
│   └── page.tsx            # Capabilities catalog (Filterable by domain, technical specifications)
├── products/
│   └── page.tsx            # Product pipeline (Data-driven cards with explicit Research/Alpha status badges)
├── contact/
│   └── page.tsx            # Contact inquiry interface (Business, Research, Partnership inquiries)
├── api/
│   └── contact/
│       └── route.ts        # Next.js Route Handler for handling contact inquiries with input validation
├── sitemap.ts              # Dynamic XML sitemap generator
├── robots.ts               # Robots.txt configuration
└── not-found.tsx           # Custom 404 error page matching dark brand theme
```

### Central Data Layer (Expandable & Decoupled)
```
src/data/
├── company.ts              # Venture metadata, tagline, legal disclaimer, philosophy
├── divisions.ts            # Multiple technology divisions (AI, Cloud, Enterprise SaaS, etc.)
├── capabilities.ts         # Technical capabilities grouped by division/tag
├── products.ts             # Products & platforms with lifecycle status tags
└── navigation.ts           # Header, mobile drawer, and footer navigation structures
```

---

## 6. Business Integrity & Legal Guardrails

The next agent must rigorously enforce these guidelines:
1. **No Hallucinated Proof**: Never create fake customer quotes, logos of Fortune 500 partners, fake executive bios, or fictitious office addresses.
2. **Provisional Entity Notice**: The site must feature a standardized legal disclaimer:
   > *"Orlithix Technologies is a provisional technology venture in active development. Commercial offerings, research platforms, and enterprise solutions described herein represent technological roadmap initiatives."*
3. **Product State Machine**: All products must carry one of the following validated states:
   - `CONCEPT_VALIDATION`: Early-stage architectural research
   - `IN_DEVELOPMENT`: Core engineering in progress
   - `ALPHA_PREVIEW`: Internal architectural alpha
   - `PLANNED_INITIATIVE`: Strategic future horizon

---

## 7. Security & Risk Analysis

- **API Sanitization**: The contact endpoint (`/api/contact`) must sanitize incoming payload fields (name, email, organization, inquiry type, message) to prevent injection attacks or mail spoofing.
- **Environment Isolation**: No credentials or private API keys may be committed. All webhook URLs or email provider keys must reside in `.env.local` (modeled in `.env.example`).
- **Content Security**: Use Next.js security headers (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`).
- **No External CDN Dependencies**: Lucide icons are bundled via NPM; font files are handled via `next/font/google` with local zero-layout-shift caching.

---

## 8. Prioritized Next Steps

The next AI agent should execute tasks in this sequence:

### Step 1: Scaffolding (Immediate Next Task)
- Initialize Next.js with TypeScript, Tailwind CSS, ESLint, and App Router in the root directory:
  ```bash
  npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
  ```
- Install `lucide-react` for brand iconography:
  ```bash
  npm install lucide-react
  ```

### Step 2: Configure Theme & Design Tokens
- Update `tailwind.config.ts` with brand colors (`#080D1B`, `#10192B`, `#121F36`, `#586BFF`, `#40D6C5`, `#F4F6FF`, `#A5B2CC`, `#263650`).
- Update `src/app/globals.css` with dark theme defaults, selection styles, and custom scrollbar styling.

### Step 3: Implement Central Data Layer
- Create `src/types/index.ts` with strict TypeScript interfaces for `Division`, `Product`, `Capability`, `Navlink`.
- Create `src/data/company.ts`, `src/data/divisions.ts`, `src/data/products.ts`, `src/data/capabilities.ts`, `src/data/navigation.ts`.

### Step 4: Implement Core Components
- Build `src/components/ui/` primitives (Button, Badge, Card, Container, SectionHeader, StatusPill).
- Build `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`.
- Build `src/components/brand/Logo.tsx` (Scalable SVG monogram + wordmark).

### Step 5: Implement Pages & Routes
- Implement `src/app/page.tsx` (Home).
- Implement `src/app/about/page.tsx` (About).
- Implement `src/app/capabilities/page.tsx` (Capabilities).
- Implement `src/app/products/page.tsx` (Products).
- Implement `src/app/contact/page.tsx` & `src/app/api/contact/route.ts` (Contact).

### Step 6: Testing & Validation
- Run `npm run lint` and `npm run build` to guarantee zero compile errors.
