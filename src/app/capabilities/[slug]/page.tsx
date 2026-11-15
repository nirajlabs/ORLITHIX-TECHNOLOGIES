import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { 
  getAllCapabilities, 
  getCapabilityBySlug, 
  getAdjacentCapabilities 
} from "@/lib/capabilities";
import { getAllProducts } from "@/lib/products";
import { createPageMetadata } from "@/lib/seo";
import { 
  Brain, 
  Code2, 
  DatabaseZap, 
  Cpu, 
  CloudCog, 
  Smartphone, 
  ArrowLeft, 
  ArrowRight, 
  Wrench, 
  FlaskConical, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  ExternalLink
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  DatabaseZap,
  Cpu,
  CloudCog,
  Smartphone,
};

interface CapabilityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically prerender all capability routes at build time
export async function generateStaticParams() {
  const capabilities = getAllCapabilities();
  return capabilities.map((cap) => ({
    slug: cap.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({
  params,
}: CapabilityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    return {
      title: "Capability Not Found",
      robots: { index: false, follow: true },
    };
  }

  return createPageMetadata({
    title: capability.name,
    description: capability.description,
    path: `/capabilities/${capability.slug}`,
  });
}

export default async function CapabilityDetailPage({
  params,
}: CapabilityPageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  const { prev, next } = getAdjacentCapabilities(slug);
  const relatedProducts = getAllProducts().filter((product) =>
    product.relatedCapabilities.some((relatedCapability) => relatedCapability.slug === slug),
  );
  const IconComponent = iconMap[capability.icon] || Layers;

  // Status badge config
  const statusConfig = {
    current: {
      badgeBg: "bg-[#586BFF]/10 text-[#F4F6FF] border-[#586BFF]/30",
      dot: "bg-[#586BFF]",
    },
    service: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30",
      dot: "bg-[#40D6C5]",
    },
    research: {
      badgeBg: "bg-[#10192B] text-[#A5B2CC] border-[#263650]",
      dot: "bg-[#A5B2CC]",
    },
  }[capability.statusType];

  return (
    <div className="relative py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#586BFF]/[0.07] to-transparent" />

      <Container className="relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex min-h-11 items-center gap-2 text-xs text-[#A5B2CC] sm:mb-8">
          <Link
            href="/capabilities"
            className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
            Capabilities Directory
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="truncate text-[#40D6C5]">{capability.name}</span>
        </nav>

        {/* Hero Stage */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-[#263650] bg-[#10192B] p-5 sm:p-8 lg:p-10 sm:mb-16">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-[#263650] pb-6 sm:pb-8 lg:flex-row lg:items-center">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#263650] bg-[#080D1B] text-[#40D6C5] sm:h-14 sm:w-14">
                <IconComponent aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="min-w-0">
                <span
                  className={`inline-flex max-w-full items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase leading-tight ${statusConfig.badgeBg}`}
                >
                  <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusConfig.dot}`} />
                  <span>{capability.statusLabel}</span>
                </span>
                <h1 className="mt-1.5 break-words text-2xl font-semibold tracking-tight text-[#F4F6FF] sm:text-4xl">
                  {capability.name}
                </h1>
                <p className="mt-1 text-sm text-[#40D6C5]">
                  {capability.shortTagline}
                </p>
              </div>
            </div>

            {capability.benchmarkMetric && (
              <div className="flex w-full items-center justify-between gap-3 rounded-lg border border-[#263650] bg-[#080D1B] p-3 lg:w-auto lg:flex-col lg:items-end lg:border-0 lg:bg-transparent lg:p-0">
                <span className="text-[10px] uppercase tracking-wider text-[#A5B2CC]">
                  {capability.benchmarkMetric.label}
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#40D6C5]">
                  {capability.benchmarkMetric.value}
                </span>
              </div>
            )}
          </div>

          {/* Long Overview */}
          <div className="mt-8">
            <h2 className="mb-3 text-xs font-mono uppercase tracking-wider text-[#A5B2CC]">
              Architectural Overview & Scope
            </h2>
            <p className="max-w-4xl text-sm leading-relaxed text-[#F4F6FF]/90 sm:text-base">
              {capability.longOverview}
            </p>
          </div>

          {/* Technologies Chips */}
          <div className="mt-8 border-t border-[#263650] pt-6">
            <h3 className="mb-3 text-xs font-mono uppercase tracking-wider text-[#A5B2CC]">
              Core Technologies & Toolchain:
            </h3>
            <div className="flex flex-wrap gap-2">
              {capability.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#263650] bg-[#080D1B] px-3 py-2 text-xs text-[#F4F6FF] transition-colors hover:border-[#586BFF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Horizon Tri-Partition (Current Skills, Available Services, Future Research) */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="development" size="sm" className="mb-2">
              CAPABILITY MATURITY MATRIX
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF]">
              Delivery Horizons & Technical Scope
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC]">
              These categories describe proposed technical focus, potential future services, and planned research—not confirmed delivery, active programs, or past client work.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
            {/* Horizon 1: Current Skills */}
            <Card className="flex flex-col justify-between border-[#586BFF]/30">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#10192B] border border-[#586BFF]/40 flex items-center justify-center text-[#586BFF]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F4F6FF]">
                      Technical Focus Areas
                    </h3>
                    <span className="text-[10px] font-mono text-[#586BFF]">
                      Proposed Focus
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {capability.currentSkills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A5B2CC] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#586BFF] flex-shrink-0 mt-1.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#263650] text-[10px] font-mono text-[#586BFF]">
                STATUS: DEVELOPMENT FOCUS
              </div>
            </Card>

            {/* Horizon 2: Available Services */}
            <Card className="flex flex-col justify-between border-[#40D6C5]/30">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#10192B] border border-[#40D6C5]/40 flex items-center justify-center text-[#40D6C5]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F4F6FF]">
                      Potential Service Areas
                    </h3>
                    <span className="text-[10px] font-mono text-[#40D6C5]">
                      Subject to Confirmation
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {capability.availableServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A5B2CC] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#40D6C5] flex-shrink-0 mt-1.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#263650] text-[10px] font-mono text-[#40D6C5]">
                STATUS: NOT CURRENTLY AVAILABLE
              </div>
            </Card>

            {/* Horizon 3: Future Research */}
            <Card className="flex flex-col justify-between border-[#263650]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#263650] bg-[#10192B] text-[#A5B2CC]">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F4F6FF]">
                      Future R&D Vectors
                    </h3>
                    <span className="text-[10px] font-mono text-[#A5B2CC]">
                      Planned Investigation
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {capability.futureResearch.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A5B2CC] leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A5B2CC]" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-[#263650] pt-3 text-[10px] font-mono text-[#A5B2CC]">
                STATUS: FUTURE DIRECTION
              </div>
            </Card>
          </div>
        </section>

        {/* Illustrative Architecture Scenarios */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#40D6C5] block mb-1">
              ILLUSTRATIVE SCENARIOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF]">
              Architectural Use Cases
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC]">
              These examples and target outcomes are illustrative only; they are not measured results or client case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capability.useCases.map((useCase, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#586BFF]">
                      USE CASE // 0{idx + 1}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#40D6C5]" />
                  </div>

                  <h3 className="text-base font-bold text-[#F4F6FF] mb-3">
                    {useCase.title}
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <strong className="text-[#A5B2CC]/70 font-mono uppercase block text-[10px]">
                        The Challenge:
                      </strong>
                      <p className="text-[#A5B2CC] mt-0.5 leading-relaxed">
                        {useCase.problem}
                      </p>
                    </div>

                    <div>
                      <strong className="text-[#40D6C5] font-mono uppercase block text-[10px]">
                        Architectural Solution:
                      </strong>
                      <p className="text-[#F4F6FF]/90 mt-0.5 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#263650]">
                  <strong className="text-[#586BFF] font-mono uppercase block text-[10px]">
                    Illustrative Impact Target:
                  </strong>
                  <p className="text-xs text-[#A5B2CC] mt-0.5 leading-relaxed">
                    {useCase.architecturalImpact}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Products & Initiatives */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10192B] border border-[#263650]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#586BFF] block mb-1">
                VENTURE CROSS-LINK
              </span>
              <h2 className="text-xl font-bold text-[#F4F6FF] mb-4">
                Related Software Products & Initiatives
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProducts.map((prod) => (
                  <div
                    key={prod.slug}
                    className="p-4 rounded-xl bg-[#121F36] border border-[#263650] flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-[#40D6C5] uppercase">
                        {prod.statusLabel}
                      </span>
                      <h3 className="text-sm font-bold text-[#F4F6FF]">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-[#A5B2CC] mt-0.5">
                        {prod.category}
                      </p>
                    </div>
                    <Link
                      href={`/products/${prod.slug}`}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#263650] bg-[#10192B] text-[#586BFF] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                      aria-label={`View ${prod.name}`}
                    >
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Adjacent Navigation (Prev / Next) */}
        <nav aria-label="Adjacent capabilities" className="mb-14 flex flex-col items-stretch justify-between gap-3 border-y border-[#263650] py-4 sm:mb-16 sm:flex-row sm:items-center sm:gap-4 sm:py-6">
          <Link
            href={`/capabilities/${prev.slug}`}
            className="group inline-flex min-h-11 items-center gap-3 rounded-lg text-xs text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <div>
              <span className="block text-[10px] uppercase text-[#A5B2CC]">
                Previous Discipline
              </span>
              <span className="text-sm font-semibold text-[#F4F6FF] group-hover:text-[#40D6C5]">
                {prev.name}
              </span>
            </div>
          </Link>

          <Link
            href={`/capabilities/${next.slug}`}
            className="group inline-flex min-h-11 items-center justify-end gap-3 rounded-lg text-right text-xs text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
          >
            <div>
              <span className="block text-[10px] uppercase text-[#A5B2CC]">
                Next Discipline
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
            TECHNICAL ENGAGEMENT
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF]">
            Discuss {capability.name} Architecture
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A5B2CC] max-w-lg mx-auto leading-relaxed">
            Interested in consulting, architectural evaluation, or partnering on our research initiatives in this domain?
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Initiate Technical Consultation
            </Button>
            <Button
              href="/capabilities"
              variant="secondary"
              size="md"
            >
              View All Capabilities
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
