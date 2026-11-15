import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProductArtwork } from "@/components/product-card";
import { 
  getAllProducts, 
  getProductBySlug, 
  getAdjacentProducts 
} from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";
import { 
  Terminal, 
  ArrowLeft, 
  ArrowRight, 
  CircleDot,
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  Briefcase,
  GitCommit,
  ExternalLink,
  Milestone
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const categoryIcons: Record<string, React.ElementType> = {
  "AI & ML": Cpu,
  "Enterprise Software": Briefcase,
  "Data Intelligence": Database,
  Automation: Layers,
};

// Statically prerender all published product routes at build time
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: true },
    };
  }

  return createPageMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { prev, next } = getAdjacentProducts(slug);
  const CategoryIcon = categoryIcons[product.category] || Terminal;

  // Status badge styling
  const statusConfig = {
    research_and_validation: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30",
      dot: "bg-[#40D6C5]",
    },
    future_concept: {
      badgeBg: "bg-[#586BFF]/10 text-[#F4F6FF] border-[#586BFF]/30",
      dot: "bg-[#586BFF]",
    },
    prototype: {
      badgeBg: "bg-[#10192B] text-[#F4F6FF] border-[#263650]",
      dot: "bg-[#A5B2CC]",
    },
    pilot: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30",
      dot: "bg-[#40D6C5]",
    },
    launched: {
      badgeBg: "bg-[#586BFF]/10 text-[#F4F6FF] border-[#586BFF]/40",
      dot: "bg-[#586BFF]",
    },
  }[product.stage];

  return (
    <div className="relative py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#586BFF]/[0.07] to-transparent" />

      <Container className="relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex min-h-11 items-center gap-2 text-xs text-[#A5B2CC] sm:mb-8">
          <Link
            href="/products"
            className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
            Product Innovation Lab
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="truncate text-[#40D6C5]">{product.name}</span>
        </nav>

        {/* Hero Stage Header */}
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-[#263650] bg-[#10192B] p-4 sm:mb-14 sm:p-7 lg:p-10">
          <ProductArtwork
            product={product}
            className="mb-6 rounded-xl border border-[#263650] sm:mb-8 sm:rounded-2xl"
          />

          <div className="flex flex-col items-start justify-between gap-6 border-b border-[#263650] pb-6 sm:pb-8 lg:flex-row lg:items-center">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-[#263650] bg-[#080D1B] px-2.5 py-1 text-xs text-[#A5B2CC]">
                  <CategoryIcon aria-hidden="true" className="h-3.5 w-3.5 text-[#40D6C5]" />
                  {product.category}
                </span>

                <span
                  className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase leading-tight ${statusConfig.badgeBg}`}
                >
                  <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusConfig.dot}`} />
                  <span>{product.statusLabel}</span>
                </span>
              </div>

              <h1 className="break-words text-3xl font-semibold tracking-tight text-[#F4F6FF] sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#40D6C5] sm:text-base">
                {product.tagline}
              </p>
            </div>

            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row lg:w-auto lg:flex-col lg:items-end">
              <Button
                href={product.cta.href}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {product.cta.label}
              </Button>
              {product.cta.note && (
                <span className="text-[10px] font-mono text-[#A5B2CC]/70 max-w-xs text-left lg:text-right">
                  {product.cta.note}
                </span>
              )}
            </div>
          </div>

          {/* Target Audience Pill */}
          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#A5B2CC]">
            <span className="shrink-0 uppercase text-[#A5B2CC]">Intended audience:</span>
            <span className="text-[#F4F6FF] font-medium">{product.targetAudience}</span>
          </div>
        </div>

        {/* Problem vs. Solution Architecture Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Problem Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#586BFF]/30 bg-[#10192B] p-5 sm:p-8">
              <div>
                <span className="mb-2 block text-xs font-mono uppercase tracking-wider text-[#586BFF]">
                  THE ENTERPRISE PROBLEM SPACE
                </span>
                <h2 className="mb-3 text-lg font-semibold text-[#F4F6FF]">
                  Operational Vulnerability & Bottleneck
                </h2>
                <p className="text-sm leading-relaxed text-[#A5B2CC]">
                  {product.problemStatement}
                </p>
              </div>
              <div className="mt-6 border-t border-[#263650] pt-4 text-[10px] text-[#A5B2CC]">
                CHALLENGE // CONTEXT LOSS & UNVERIFIED CLAIMS
              </div>
            </div>

            {/* The Solution Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#40D6C5]/30 bg-[#10192B] p-5 sm:p-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#40D6C5] block mb-2">
                  THE ARCHITECTURAL SOLUTION
                </span>
                <h2 className="mb-3 text-lg font-semibold text-[#F4F6FF]">
                  Deterministic Verification Architecture
                </h2>
                <p className="text-sm leading-relaxed text-[#A5B2CC]">
                  {product.solution}
                </p>
              </div>
              <div className="mt-6 border-t border-[#263650] pt-4 text-[10px] text-[#40D6C5]">
                SOLUTION // MATHEMATICAL & EMPIRICAL RIGOR
              </div>
            </div>
          </div>
        </section>

        {/* In-Depth Overview & Architectural Tenets */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#263650] bg-[#121F36] p-5 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#586BFF] block mb-2">
              DEEP DIVE
            </span>
            <h2 className="text-2xl font-bold text-[#F4F6FF] mb-4">
              Architectural Overview & Engineering Ethos
            </h2>
            <p className="text-sm sm:text-base text-[#F4F6FF]/90 leading-relaxed max-w-4xl">
              {product.longOverview}
            </p>

            <div className="mt-8 pt-6 border-t border-[#263650]/60">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A5B2CC] block mb-3">
                Architectural Tenets:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {product.architecturalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg border border-[#263650] bg-[#080D1B] p-3 text-xs text-[#F4F6FF]"
                  >
                    <CircleDot aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#40D6C5]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#40D6C5] block mb-1">
              SYSTEM CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF]">
              Key Features & Technical Mechanics
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC]">
              Core architectural mechanics engineered into {product.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#586BFF]">
                      FEATURE // 0{idx + 1}
                    </span>
                    <Layers aria-hidden="true" className="h-4 w-4 text-[#40D6C5]" />
                  </div>
                  <h3 className="text-base font-bold text-[#F4F6FF] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5B2CC] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {feature.technicalDetail && (
                  <div className="mt-5 pt-3 border-t border-[#263650] flex items-center gap-2 text-[10px] font-mono text-[#40D6C5]">
                    <GitCommit aria-hidden="true" className="h-3 w-3 shrink-0" />
                    <span>{feature.technicalDetail}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack & Toolchain */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#263650] bg-[#10192B] p-5 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#586BFF] block mb-2">
              FOUNDATIONAL INFRASTRUCTURE
            </span>
            <h2 className="text-xl font-bold text-[#F4F6FF] mb-4">
              Technology Stack & Toolchain
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-[#080D1B] border border-[#263650] text-xs font-mono text-[#F4F6FF] hover:border-[#586BFF] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Future Product Updates / Roadmap Milestones */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="mb-1 block text-xs font-mono uppercase tracking-wider text-[#40D6C5]">
              DEVELOPMENT HORIZON
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF]">
              Future Product Updates & Milestones
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC]">
              Projected architectural progression and technical evaluation phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.futureUpdates.map((milestone, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-mono font-semibold text-[#40D6C5]">
                      {milestone.phase}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                        milestone.status === "in_progress"
                          ? "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30"
                          : "bg-[#10192B] text-[#A5B2CC] border-[#263650]"
                      }`}
                    >
                      {milestone.status.replace("_", " ")}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F4F6FF] mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-xs text-[#A5B2CC] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 border-t border-[#263650] pt-3 text-[10px] text-[#A5B2CC]">
                  <Milestone aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#40D6C5]" />
                  <span>Horizon: {milestone.targetHorizon}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Technology Capabilities Cross-Link */}
        {product.relatedCapabilities.length > 0 && (
          <section className="mb-16">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10192B] border border-[#263650]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#40D6C5] block mb-1">
                PARENT VENTURE FOUNDATION
              </span>
              <h2 className="text-xl font-bold text-[#F4F6FF] mb-4">
                Underlying Technology Capabilities
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.relatedCapabilities.map((cap) => (
                  <Link
                    key={cap.slug}
                    href={`/capabilities/${cap.slug}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#263650] bg-[#121F36] p-3 text-xs text-[#F4F6FF] transition-colors hover:border-[#40D6C5]/50 hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                  >
                    <span>{cap.name}</span>
                    <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 text-[#586BFF]" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Adjacent Navigation (Prev / Next) */}
        <nav aria-label="Adjacent product concepts" className="mb-14 flex flex-col items-stretch justify-between gap-3 border-y border-[#263650] py-4 sm:mb-16 sm:flex-row sm:items-center sm:gap-4 sm:py-6">
          <Link
            href={`/products/${prev.slug}`}
            className="group inline-flex min-h-11 items-center gap-3 rounded-lg text-xs text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <div>
              <span className="block text-[10px] uppercase text-[#A5B2CC]">
                Previous Concept
              </span>
              <span className="text-sm font-semibold text-[#F4F6FF] group-hover:text-[#40D6C5]">
                {prev.name}
              </span>
            </div>
          </Link>

          <Link
            href={`/products/${next.slug}`}
            className="group inline-flex min-h-11 items-center justify-end gap-3 rounded-lg text-right text-xs text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <div>
              <span className="block text-[10px] uppercase text-[#A5B2CC]">
                Next Concept
              </span>
              <span className="text-sm font-semibold text-[#F4F6FF] group-hover:text-[#40D6C5]">
                {next.name}
              </span>
            </div>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </nav>

        {/* Targeted Action CTA */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#586BFF]/40 bg-[#10192B] p-6 text-center sm:p-10">
          <Badge variant="concept" size="sm" className="mb-4">
            R&D COLLABORATION
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF]">
            Evaluate {product.name}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A5B2CC] max-w-lg mx-auto leading-relaxed">
            Interested in reviewing our architectural specifications or collaborating on research benchmarks for this platform?
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={`/contact?subject=${product.slug}`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Initiate Research Dialogue
            </Button>
            <Button
              href="/products"
              variant="secondary"
              size="md"
            >
              View All Product Concepts
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
