import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllProducts } from "@/lib/products";
import { ProductGrid } from "@/components/product-grid";
import { 
  Terminal, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight,
  FlaskConical,
  Layers,
  Compass,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Innovation Lab",
  description:
    "Explore exploratory software platforms, AI agents, and enterprise tools incubated within the Orlithix Technologies Product Innovation Lab.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="py-24 sm:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#586BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Page Hero */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="concept" size="md" className="mb-4">
            INNOVATION LAB // PRODUCT PIPELINE
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F6FF] tracking-tight">
            Product Innovation Lab
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#A5B2CC] leading-relaxed">
            As an AI-first parent venture, Orlithix incubates specialized software architectures designed to solve foundational enterprise bottlenecks. Explore our active research initiatives, algorithmic prototypes, and conceptual platforms.
          </p>
        </div>

        {/* Strict Business Integrity & R&D Status Notice */}
        <div className="mb-14 max-w-4xl mx-auto p-5 rounded-2xl bg-[#10192B] border border-amber-500/30 flex items-start gap-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs font-mono text-[#A5B2CC] leading-relaxed">
            <strong className="text-[#F4F6FF] uppercase tracking-wider block mb-1">
              R&D Lifecycle Transparency Notice:
            </strong>
            All initiatives described below represent active research concepts, architectural prototypes, or developmental roadmaps within the Orlithix Innovation Lab. None of these concepts are marketed as established commercial offerings, and no customer relationships, financial figures, or unverified claims are fabricated.
          </div>
        </div>

        {/* Product Lifecycle Stage Taxonomy Explainer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-4 rounded-xl bg-[#10192B] border border-[#40D6C5]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#40D6C5] animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#F4F6FF] uppercase">
                  Research & Validation
                </span>
              </div>
              <p className="text-[11px] text-[#A5B2CC] leading-relaxed">
                Active algorithmic experimentation, AST parsing, and empirical test harness formulation.
              </p>
            </div>
            <span className="mt-3 font-mono text-[9px] text-[#40D6C5] uppercase tracking-wider block">
              Active Investigation
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#10192B] border border-[#586BFF]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#586BFF]" />
                <span className="font-mono text-xs font-bold text-[#F4F6FF] uppercase">
                  Future Concept
                </span>
              </div>
              <p className="text-[11px] text-[#A5B2CC] leading-relaxed">
                Architectural problem-space definition, mathematical modeling, and conceptual system design.
              </p>
            </div>
            <span className="mt-3 font-mono text-[9px] text-[#586BFF] uppercase tracking-wider block">
              Architectural Roadmap
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#10192B] border border-purple-500/20 flex flex-col justify-between opacity-80">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="font-mono text-xs font-bold text-[#F4F6FF] uppercase">
                  Prototypes & Pilots
                </span>
              </div>
              <p className="text-[11px] text-[#A5B2CC] leading-relaxed">
                Closed architectural evaluations and internal synthetic stress testing (Future Phase).
              </p>
            </div>
            <span className="mt-3 font-mono text-[9px] text-purple-400 uppercase tracking-wider block">
              Planned Progression
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#10192B] border border-emerald-500/20 flex flex-col justify-between opacity-80">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-bold text-[#F4F6FF] uppercase">
                  Launched Products
                </span>
              </div>
              <p className="text-[11px] text-[#A5B2CC] leading-relaxed">
                Commercially released platforms operating under enterprise SLAs (Future Horizon).
              </p>
            </div>
            <span className="mt-3 font-mono text-[9px] text-emerald-400 uppercase tracking-wider block">
              Future Commercialization
            </span>
          </div>
        </div>

        {/* Central Data-Driven Products Grid */}
        <ProductGrid products={products} enableFilters={true} />

        {/* Bottom Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121F36] to-[#0c1424] border border-[#263650] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F4F6FF]">
              Interested in Co-Developing or Evaluating an R&D Concept?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A5B2CC] leading-relaxed">
              We welcome academic institutions, enterprise DevOps leaders, and technical partners to review our specifications and collaborate on architectural benchmarks.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              href="/contact?subject=innovation-lab-collaboration"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Contact Innovation Team
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
