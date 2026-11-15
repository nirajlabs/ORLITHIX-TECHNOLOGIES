import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { 
  getAllProducts, 
  getProductBySlug, 
  getAdjacentProducts 
} from "@/lib/products";
import { 
  Terminal, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
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
    };
  }

  return {
    title: `${product.name} | Product Innovation Lab`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Orlithix Technologies`,
      description: product.description,
      type: "website",
    },
  };
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
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30 shadow-[0_0_12px_rgba(64,214,197,0.15)]",
      dot: "bg-[#40D6C5] shadow-[0_0_6px_#40D6C5]",
    },
    future_concept: {
      badgeBg: "bg-[#586BFF]/10 text-[#7888FF] border-[#586BFF]/30 shadow-[0_0_12px_rgba(88,107,255,0.15)]",
      dot: "bg-[#586BFF] shadow-[0_0_6px_#586BFF]",
    },
    prototype: {
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      dot: "bg-purple-400",
    },
    pilot: {
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      dot: "bg-amber-400",
    },
    launched: {
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      dot: "bg-emerald-400",
    },
  }[product.stage];

  return (
    <div className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#586BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#A5B2CC] mb-8">
          <Link
            href="/products"
            className="hover:text-[#F4F6FF] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Product Innovation Lab
          </Link>
          <span>/</span>
          <span className="text-[#40D6C5] truncate">{product.name}</span>
        </div>

        {/* Hero Stage Header */}
        <div className="rounded-3xl bg-gradient-to-b from-[#121F36] to-[#0c1424] border border-[#263650] p-6 sm:p-10 lg:p-12 mb-14 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Subtle top edge border gradient highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#586BFF]/40 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#263650]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="flex items-center gap-1.5 font-mono text-xs text-[#A5B2CC] px-2.5 py-0.5 rounded-lg bg-[#10192B] border border-[#263650]">
                  <CategoryIcon className="w-3.5 h-3.5 text-[#586BFF]" />
                  {product.category}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.badgeBg}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusConfig.dot}`} />
                  <span>{product.statusLabel}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F6FF] tracking-tight">
                {product.name}
              </h1>

              <p className="mt-2 font-mono text-xs sm:text-sm text-[#40D6C5] max-w-3xl">
                {product.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 w-full lg:w-auto">
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
            <span className="uppercase text-[#A5B2CC]/60">Intended Audience:</span>
            <span className="text-[#F4F6FF] font-medium">{product.targetAudience}</span>
          </div>
        </div>

        {/* Problem vs. Solution Architecture Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Problem Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10192B] border border-red-500/20 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-red-400 block mb-2">
                  THE ENTERPRISE PROBLEM SPACE
                </span>
                <h3 className="text-lg font-bold text-[#F4F6FF] mb-3">
                  Operational Vulnerability & Bottleneck
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B2CC] leading-relaxed">
                  {product.problemStatement}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#263650] font-mono text-[10px] text-red-400/80">
                CHALLENGE // CONTEXT LOSS & UNVERIFIED CLAIMS
              </div>
            </div>

            {/* The Solution Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10192B] border border-[#40D6C5]/30 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#40D6C5] block mb-2">
                  THE ARCHITECTURAL SOLUTION
                </span>
                <h3 className="text-lg font-bold text-[#F4F6FF] mb-3">
                  Deterministic Verification Architecture
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B2CC] leading-relaxed">
                  {product.solution}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#263650] font-mono text-[10px] text-[#40D6C5]">
                SOLUTION // MATHEMATICAL & EMPIRICAL RIGOR
              </div>
            </div>
          </div>
        </section>

        {/* In-Depth Overview & Architectural Tenets */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#121F36] border border-[#263650] p-6 sm:p-10">
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
                    className="p-3 rounded-lg bg-[#080D1B] border border-[#263650] flex items-center gap-2 text-xs font-mono text-[#F4F6FF]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#40D6C5] flex-shrink-0" />
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
                    <Sparkles className="w-4 h-4 text-[#40D6C5]" />
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
                    <GitCommit className="w-3 h-3 flex-shrink-0" />
                    <span>{feature.technicalDetail}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack & Toolchain */}
        <section className="mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#10192B] border border-[#263650]">
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
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 block mb-1">
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
              <Card key={idx} className="flex flex-col justify-between border-purple-500/20">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-purple-400">
                      {milestone.phase}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                        milestone.status === "in_progress"
                          ? "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30 animate-pulse"
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

                <div className="mt-5 pt-3 border-t border-[#263650] flex items-center gap-1.5 text-[10px] font-mono text-[#A5B2CC]/70">
                  <Milestone className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
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
                    className="p-3 rounded-xl bg-[#121F36] border border-[#263650] hover:border-[#40D6C5]/50 flex items-center gap-2 text-xs font-mono text-[#F4F6FF] hover:text-[#40D6C5] transition-colors"
                  >
                    <span>{cap.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#586BFF]" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Adjacent Navigation (Prev / Next) */}
        <div className="border-t border-b border-[#263650] py-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/products/${prev.slug}`}
            className="flex items-center gap-3 text-xs text-[#A5B2CC] hover:text-[#40D6C5] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="font-mono text-[10px] uppercase text-[#A5B2CC]/60 block">
                Previous Concept
              </span>
              <span className="font-semibold text-sm text-[#F4F6FF] group-hover:text-[#40D6C5]">
                {prev.name}
              </span>
            </div>
          </Link>

          <Link
            href={`/products/${next.slug}`}
            className="flex items-center gap-3 text-xs text-[#A5B2CC] hover:text-[#40D6C5] transition-colors group text-right"
          >
            <div>
              <span className="font-mono text-[10px] uppercase text-[#A5B2CC]/60 block">
                Next Concept
              </span>
              <span className="font-semibold text-sm text-[#F4F6FF] group-hover:text-[#40D6C5]">
                {next.name}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Targeted Action CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121F36] to-[#0c1424] border border-[#586BFF]/40 text-center max-w-3xl mx-auto shadow-[0_20px_50px_rgba(88,107,255,0.1)]">
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
