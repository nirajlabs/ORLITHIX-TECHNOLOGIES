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
  CheckCircle2, 
  GitFork, 
  FileCheck2, 
  ShieldAlert 
} from "lucide-react";

export const InnovationLabSection: React.FC = () => {
  const allProducts = getAllProducts();
  const featuredProduct = allProducts.find((p) => p.slug === "software-handover-readiness-ai") || allProducts[0];
  const secondaryProducts = allProducts.filter((p) => p.slug !== "software-handover-readiness-ai");

  return (
    <section id="innovation-lab" className="py-20 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="concept" size="md">
              INNOVATION LAB // RESEARCH VECTOR
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F4F6FF] tracking-tight">
            Pioneering the Next Horizon of Autonomous Software
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A5B2CC] max-w-2xl">
            Our Innovation Lab incubates high-impact technological concepts. Every project listed here is in active research or conceptual validation.
          </p>
        </div>

        {/* Featured Product: Software Handover Readiness AI */}
        {featuredProduct && (
          <div className="relative rounded-2xl bg-gradient-to-b from-[#121F36] to-[#0c1424] border-2 border-[#586BFF]/40 p-6 sm:p-10 shadow-[0_20px_50px_rgba(88,107,255,0.1)] overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#40D6C5]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Status Bar */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#263650] gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#10192B] border border-[#263650] flex items-center justify-center text-[#40D6C5]">
                  <Terminal className="w-5 h-5" />
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
                <Badge variant="concept" size="md">
                  {featuredProduct.statusLabel}
                </Badge>
              </div>
            </div>

            {/* Main Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#F4F6FF]">
                  {featuredProduct.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-[#40D6C5]">
                  {featuredProduct.tagline}
                </p>
                <p className="mt-4 text-xs sm:text-sm text-[#A5B2CC] leading-relaxed">
                  {featuredProduct.description}
                </p>

                {/* Architectural Capabilities Checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuredProduct.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F4F6FF]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#40D6C5] flex-shrink-0 mt-0.5" />
                      <span>{feature.title}</span>
                    </div>
                  ))}
                </div>

                {/* R&D Non-Commercial Disclaimer Pill */}
                <div className="mt-8 flex items-center gap-2 p-3 rounded-lg bg-[#080D1B] border border-[#263650] text-xs font-mono text-[#A5B2CC]">
                  <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>
                    <strong>Notice:</strong> This initiative is under internal algorithmic evaluation and has not been launched as a public commercial service.
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
              <div className="lg:col-span-5 bg-[#080D1B] border border-[#263650] rounded-xl p-5 font-mono text-xs overflow-hidden shadow-inner">
                <div className="flex items-center justify-between border-b border-[#263650] pb-3 mb-4 text-[#A5B2CC]/70 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-[#586BFF]" />
                    handover_protocol_schema.ts
                  </span>
                  <span className="text-[#40D6C5]">VERIFIED</span>
                </div>

                <pre className="text-[#A5B2CC] text-[11px] leading-relaxed overflow-x-auto">
                  <code>{`// Multi-Agent State Verification
interface HandoverPayload {
  commitHash: "2.54.0.windows.1";
  verifiedCoverage: 100%;
  untestedClaims: 0;
  driftDetection: {
    architecturalSync: true;
    agentStateLocked: true;
  };
  securityCheck: PASS;
}`}</code>
                </pre>

                <div className="mt-4 pt-3 border-t border-[#263650] flex items-center justify-between text-[10px] text-[#A5B2CC]">
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-[#586BFF]" />
                    Zero Cognitive Drift
                  </span>
                  <span className="text-[#40D6C5] font-semibold">
                    STATUS: RESEARCH & VALIDATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary R&D Horizons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <h4 className="text-base font-bold text-[#F4F6FF]">
                  <Link href={`/products/${product.slug}`} className="hover:text-[#40D6C5] transition-colors">
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
                  className="text-[#586BFF] hover:text-[#40D6C5] font-semibold inline-flex items-center gap-1 transition-colors"
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
