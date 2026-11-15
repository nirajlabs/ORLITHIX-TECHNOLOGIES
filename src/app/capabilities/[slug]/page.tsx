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
import { 
  Brain, 
  Code2, 
  DatabaseZap, 
  Cpu, 
  CloudCog, 
  Smartphone, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
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
    };
  }

  return {
    title: `${capability.name} | Capabilities`,
    description: capability.description,
    openGraph: {
      title: `${capability.name} | Orlithix Technologies`,
      description: capability.description,
      type: "website",
    },
  };
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
  const IconComponent = iconMap[capability.icon] || Layers;

  // Status badge config
  const statusConfig = {
    current: {
      badgeBg: "bg-[#586BFF]/10 text-[#7888FF] border-[#586BFF]/30",
      dot: "bg-[#586BFF]",
    },
    service: {
      badgeBg: "bg-[#40D6C5]/10 text-[#40D6C5] border-[#40D6C5]/30",
      dot: "bg-[#40D6C5]",
    },
    research: {
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      dot: "bg-purple-400",
    },
  }[capability.statusType];

  return (
    <div className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#586BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#A5B2CC] mb-8">
          <Link
            href="/capabilities"
            className="hover:text-[#F4F6FF] flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Capabilities Directory
          </Link>
          <span>/</span>
          <span className="text-[#40D6C5] truncate">{capability.name}</span>
        </div>

        {/* Hero Stage */}
        <div className="rounded-3xl bg-gradient-to-b from-[#121F36] to-[#0c1424] border border-[#263650] p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Subtle top edge border gradient highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#586BFF]/40 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#263650]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#586BFF] flex-shrink-0 shadow-[0_0_20px_rgba(88,107,255,0.2)]">
                <IconComponent className="w-8 h-8 text-[#40D6C5]" />
              </div>
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.badgeBg}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${statusConfig.dot}`} />
                  <span>{capability.statusLabel}</span>
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#F4F6FF] mt-1.5 tracking-tight">
                  {capability.name}
                </h1>
                <p className="font-mono text-xs sm:text-sm text-[#7888FF] mt-0.5">
                  {capability.shortTagline}
                </p>
              </div>
            </div>

            {capability.benchmarkMetric && (
              <div className="flex lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto p-3 lg:p-0 rounded-lg bg-[#10192B] lg:bg-transparent border lg:border-none border-[#263650]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A5B2CC]/70">
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
            <h2 className="text-sm font-mono uppercase tracking-wider text-[#A5B2CC]/80 mb-3">
              Architectural Overview & Scope
            </h2>
            <p className="text-sm sm:text-base text-[#F4F6FF]/90 leading-relaxed max-w-4xl">
              {capability.longOverview}
            </p>
          </div>

          {/* Technologies Chips */}
          <div className="mt-8 pt-6 border-t border-[#263650]/60">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A5B2CC] mb-3">
              Core Technologies & Toolchain:
            </h3>
            <div className="flex flex-wrap gap-2">
              {capability.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#080D1B] border border-[#263650] text-xs font-mono text-[#F4F6FF] hover:border-[#586BFF] transition-colors"
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
              Transparently distinguishing our active production proficiencies, available consulting services, and future exploratory research.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Horizon 1: Current Skills */}
            <Card className="flex flex-col justify-between border-[#586BFF]/30">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#10192B] border border-[#586BFF]/40 flex items-center justify-center text-[#586BFF]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F4F6FF]">
                      Current Engineering Core
                    </h3>
                    <span className="text-[10px] font-mono text-[#586BFF]">
                      Production Mastered
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
                STATUS: DEPLOYED IN PRODUCTION
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
                      Available Architectural Services
                    </h3>
                    <span className="text-[10px] font-mono text-[#40D6C5]">
                      Client Engagement Ready
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
                STATUS: AVAILABLE FOR ENGAGEMENT
              </div>
            </Card>

            {/* Horizon 3: Future Research */}
            <Card className="flex flex-col justify-between border-purple-500/30">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#10192B] border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F4F6FF]">
                      Future R&D Vectors
                    </h3>
                    <span className="text-[10px] font-mono text-purple-400">
                      Active Investigation
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {capability.futureResearch.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A5B2CC] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-1.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#263650] text-[10px] font-mono text-purple-400">
                STATUS: RESEARCH & EXPERIMENTATION
              </div>
            </Card>
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#40D6C5] block mb-1">
              PRACTICAL APPLICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F6FF]">
              Real-World Architectural Use Cases
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC]">
              How this capability solves mission-critical organizational bottlenecks with measurable technical outcomes.
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
                  <strong className="text-[#7888FF] font-mono uppercase block text-[10px]">
                    Outcome & Impact:
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
        {capability.relatedProducts.length > 0 && (
          <section className="mb-16">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10192B] border border-[#263650]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#586BFF] block mb-1">
                VENTURE CROSS-LINK
              </span>
              <h2 className="text-xl font-bold text-[#F4F6FF] mb-4">
                Related Software Products & Initiatives
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capability.relatedProducts.map((prod) => (
                  <div
                    key={prod.slug}
                    className="p-4 rounded-xl bg-[#121F36] border border-[#263650] flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-[#40D6C5] uppercase">
                        {prod.statusLabel}
                      </span>
                      <h4 className="text-sm font-bold text-[#F4F6FF]">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-[#A5B2CC] mt-0.5">
                        {prod.relation}
                      </p>
                    </div>
                    <Link
                      href={`/products#${prod.slug}`}
                      className="p-2 rounded-lg bg-[#10192B] border border-[#263650] text-[#586BFF] hover:text-[#40D6C5] transition-colors"
                      aria-label={`View ${prod.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Adjacent Navigation (Prev / Next) */}
        <div className="border-t border-b border-[#263650] py-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/capabilities/${prev.slug}`}
            className="flex items-center gap-3 text-xs text-[#A5B2CC] hover:text-[#40D6C5] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="font-mono text-[10px] uppercase text-[#A5B2CC]/60 block">
                Previous Discipline
              </span>
              <span className="font-semibold text-sm text-[#F4F6FF] group-hover:text-[#40D6C5]">
                {prev.name}
              </span>
            </div>
          </Link>

          <Link
            href={`/capabilities/${next.slug}`}
            className="flex items-center gap-3 text-xs text-[#A5B2CC] hover:text-[#40D6C5] transition-colors group text-right"
          >
            <div>
              <span className="font-mono text-[10px] uppercase text-[#A5B2CC]/60 block">
                Next Discipline
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
