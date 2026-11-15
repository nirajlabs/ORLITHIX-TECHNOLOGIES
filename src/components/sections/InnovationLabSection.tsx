import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllProducts } from "@/lib/products";
import { 
  Terminal, 
  ArrowRight, 
  CircleDot,
  GitFork, 
  FileCheck2, 
  Info
} from "lucide-react";

export const InnovationLabSection: React.FC = () => {
  const allProducts = getAllProducts();
  const featuredProduct = allProducts.find((p) => p.slug === "software-handover-readiness-ai") || allProducts[0];
  const secondaryProducts = allProducts.filter((p) => p.slug !== "software-handover-readiness-ai");

  return (
    <section id="innovation-lab" className="relative py-16 sm:py-20">
      <Container>
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="concept" size="md">
              INNOVATION LAB // RESEARCH VECTOR
            </Badge>
          </div>
          <h2 className="max-w-4xl text-2xl font-semibold tracking-tight text-[#F4F6FF] sm:text-4xl">
            Pioneering the Next Horizon of Autonomous Software
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#A5B2CC] sm:text-base">
            The proposed Innovation Lab describes product concepts at their stated research or future-concept stage; listed features are not claims of deployed functionality.
          </p>
        </div>

        {/* Featured Product: Software Handover Readiness AI */}
        {featuredProduct && (
          <div className="relative overflow-hidden rounded-2xl border border-[#586BFF]/40 bg-[#10192B] p-5 sm:p-8 lg:p-10">
            {/* Top Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#263650] pb-5 sm:pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#263650] bg-[#080D1B] text-[#40D6C5]">
                  <Terminal aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A5B2CC] block">
                    Featured R&D Initiative
                  </span>
                  <span className="font-mono text-[11px] text-[#40D6C5] font-semibold">
                    REF: ORL-RD-2026-01
                  </span>
                </div>
              </div>

              {/* Strict Business Integrity Status Badge */}
              <div className="flex items-center gap-2">
                <Badge variant="concept" size="sm">
                  {featuredProduct.statusLabel}
                </Badge>
              </div>
            </div>

            {/* Main Body */}
            <div className="mt-6 grid grid-cols-1 items-center gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="text-xl font-semibold text-[#F4F6FF] sm:text-3xl">
                  {featuredProduct.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-[#40D6C5]">
                  {featuredProduct.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#A5B2CC]">
                  {featuredProduct.description}
                </p>

                {/* Architectural Capabilities Checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuredProduct.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F4F6FF]/90">
                      <CircleDot aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#40D6C5]" />
                      <span>{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* R&D Non-Commercial Disclaimer Pill */}
                <div className="mt-8 flex items-start gap-2 rounded-lg border border-[#263650] bg-[#080D1B] p-3 text-xs text-[#A5B2CC]">
                  <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#40D6C5]" />
                  <span>
                    <strong>Notice:</strong> This concept is described for research and validation; its proposed functionality is not presented as a completed or publicly launched product.
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Button
                    href={`/products/${featuredProduct.slug}`}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore R&D Blueprint
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="md"
                  >
                    Discuss Technical Collaboration
                  </Button>
                </div>
              </div>

              {/* Right Column: Code/Architecture Visual Simulation */}
              <div className="overflow-hidden rounded-xl border border-[#263650] bg-[#080D1B] p-4 font-mono text-xs sm:p-5 lg:col-span-5">
                <div className="mb-4 flex items-center justify-between gap-2 border-b border-[#263650] pb-3 text-[11px] text-[#A5B2CC]">
                  <span className="flex items-center gap-1.5">
                    <FileCheck2 aria-hidden="true" className="h-3.5 w-3.5 text-[#586BFF]" />
                    handover_protocol_schema.ts
                  </span>
                  <span className="text-[#A5B2CC]">ILLUSTRATIVE</span>
                </div>

                <pre className="overflow-x-auto text-[11px] leading-relaxed text-[#A5B2CC]">
                  <code>{`// Example evidence categories
interface HandoverEvidence {
  repositorySnapshot: "not evaluated";
  documentationReview: "not evaluated";
  unresolvedIssues: "not evaluated";
  operationalReadiness: "not evaluated";
}`}</code>
                </pre>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#263650] pt-3 text-[10px] text-[#A5B2CC]">
                  <span className="flex items-center gap-1">
                    <GitFork aria-hidden="true" className="h-3 w-3 text-[#586BFF]" />
                    Example only
                  </span>
                  <span className="font-semibold text-[#40D6C5]">
                    STATUS: RESEARCH & VALIDATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary R&D Horizons */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-3">
          {secondaryProducts.slice(0, 3).map((product) => (
            <Card key={product.id} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={product.stageBadgeVariant} size="sm">
                    {product.statusLabel}
                  </Badge>
                  <span className="text-[10px] font-mono text-[#A5B2CC]">
                    {product.category}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-[#F4F6FF]">
                  <Link href={`/products/${product.slug}`} className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]">
                    {product.name}
                  </Link>
                </h4>
                <p className="mt-1 text-xs text-[#40D6C5] font-medium">
                  {product.tagline}
                </p>
                <p className="mt-3 text-xs text-[#A5B2CC] leading-relaxed line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#263650] flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-[#A5B2CC]">
                  {product.techStack.slice(0, 2).join(" · ")}
                </span>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex min-h-11 items-center gap-1 font-semibold text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                >
                  View Blueprint &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
