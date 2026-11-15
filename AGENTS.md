# AGENTS.md — Agent Operating Guide for Orlithix Technologies

Welcome, AI Coding Agent. This document establishes operational guidelines, architectural rules, code quality standards, and safety boundaries for the **Orlithix Technologies** parent-company digital platform.

---

## 1. Project Mission & Identity

- **Entity**: Orlithix Technologies (*provisional company name; not yet legally incorporated*).
- **Positioning**: AI-first parent software and technology venture.
- **Domains**: Artificial Intelligence, Software Engineering, Enterprise SaaS, Data Intelligence, Automation, Mobile Applications, Cloud Technologies.
- **Tagline**: *"Engineering Intelligence. Building the Future."*
- **Aesthetic**: Premium dark enterprise theme, ultra-crisp typography, subtle luminescent accents, high-trust engineering credibility.

---

## 2. Immutable Truth & Business Integrity Rules

1. **Zero Fabrication**:
   - **NEVER** fabricate client logos, customer testimonials, enterprise case studies, employee counts, team photos, awards, venture capital funding rounds, certifications, or physical office locations.
   - Any metrics displayed must be marked as architectural/technical benchmarks or clearly stated as targets/projections.
2. **Provisional Entity Status**:
   - The company name is provisional and pending clearance.
   - Keep clear, professional disclosures in the legal notice/footer that Orlithix Technologies is a proposed technology venture in development.
3. **Product & Service Lifecycle Integrity**:
   - Products and platforms under conceptualization or active research must be explicitly badged:
     - `Research Concept`
     - `In Active Development`
     - `Alpha Architecture`
     - `Planned Initiative`
   - Planned services must **never** be presented as established or historical client offerings. They are presented as core focus areas and engineering capability pillars.

---

## 3. Tech Stack & Environment Conventions

- **Framework**: Next.js 14+ / 15 (App Router, React Server Components by default).
- **Language**: TypeScript (Strict Mode enabled, no `any` without documented architectural justification).
- **Styling**: Tailwind CSS (extended custom color palette, responsive mobile-first utilities, zero inline styles).
- **Icons**: `lucide-react`.
- **Package Manager**: `npm` (Node.js runtime v25.4.0 verified on host system; `pnpm` is not installed on this Windows environment).
- **Deployment Target**: Vercel / Cloudflare Pages / Containerized Node.js.

---

## 4. Architectural Directives for Future Agents

1. **Data-Driven Architecture**:
   - **Never hardcode** product lists, capability items, technology divisions, or leadership principles directly inside page JSX files.
   - All dynamic content must reside in centralized, strongly typed configuration modules located in `src/data/` (e.g., `src/data/products.ts`, `src/data/capabilities.ts`, `src/data/divisions.ts`, `src/data/navigation.ts`, `src/data/company.ts`).
2. **Parent Company Expandability**:
   - The platform is designed to scale across multiple technology divisions and future product verticals without refactoring layouts.
   - Use reusable card components (`ProductCard`, `CapabilityCard`, `DivisionCard`, `StatusBadge`, `MetricCard`) that consume standard TypeScript interfaces.
3. **Component Stratification**:
   - `src/components/ui/`: Atomic reusable UI primitives (Button, Badge, Card, Container, SectionHeader, GlowEffect, Input, Textarea).
   - `src/components/layout/`: Global structural elements (Navbar, Footer, MobileNav, AnnouncementBanner).
   - `src/components/sections/`: Composed domain sections (HeroSection, DivisionGrid, CapabilitiesShowcase, ProductPipeline, ArchitecturePhilosophy, ContactForm).
4. **Server vs. Client Components**:
   - Keep page roots and static marketing sections as **React Server Components (RSC)** for optimal SEO and performance.
   - Use `'use client'` only where user interactivity is strictly required (e.g., mobile navigation drawer, interactive filter tabs, contact form state, client-side accordion).

---

## 5. Coding & Styling Standards

### Color Tokens
Use the brand-defined semantic tokens configured in `tailwind.config.ts`:
- Background Void: `#080D1B` (`bg-brand-background`)
- Secondary Surface: `#10192B` (`bg-brand-secondary`)
- Card Surface: `#121F36` (`bg-brand-card`)
- Primary Electric Indigo: `#586BFF` (`text-brand-primary`, `bg-brand-primary`)
- Accent Cyber Mint: `#40D6C5` (`text-brand-accent`, `bg-brand-accent`)
- Main Text (Ice White): `#F4F6FF` (`text-brand-text-primary`)
- Secondary Text (Slate Mist): `#A5B2CC` (`text-brand-text-secondary`)
- Structural Borders: `#263650` (`border-brand-border`)

### Design Aesthetics
- Dark mode only (no light-mode toggle needed unless specifically requested).
- Subtle glow/radial gradients behind hero and key cards (`rgba(88, 107, 255, 0.08)` and `rgba(64, 214, 197, 0.05)`).
- Borders should be crisp (`border border-[#263650]`) with subtle hover transitions (`hover:border-[#586BFF]/40`).
- Touch targets: Minimum 44x44px for all mobile interactive elements.

---

## 6. Verification & Quality Protocol

Before declaring any task complete, future agents must execute:
1. `npm run lint` — Zero ESLint warnings or errors.
2. `npm run build` — Successful Next.js production compilation without type errors.
3. Verify links, responsive breakpoints (375px mobile, 768px tablet, 1280px desktop), and accessibility (ARIA attributes on interactive elements).
4. Never assume or claim code works without running actual verification commands.
