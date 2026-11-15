import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getAllProducts } from "@/lib/products";
import { ProductGrid } from "@/components/product-grid";
import { Info, ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Product Innovation Lab",
  description:
    "Explore published Orlithix product concepts and their research, validation, and development stages.",
  path: "/products",
});

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="relative py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#586BFF]/[0.07] to-transparent" />

      <Container className="relative">
        {/* Page Hero */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <Badge variant="concept" size="md" className="mb-4">
            INNOVATION LAB // PRODUCT PIPELINE
          </Badge>

          <h1 className="text-3xl font-semibold tracking-tight text-[#F4F6FF] sm:text-5xl">
            Product Innovation Lab
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#A5B2CC] sm:mt-6 sm:text-base">
            As an AI-first parent venture, Orlithix incubates specialized software architectures designed to solve foundational enterprise bottlenecks. Explore our active research initiatives, algorithmic prototypes, and conceptual platforms.
          </p>
        </div>

        {/* Strict Business Integrity & R&D Status Notice */}
        <div className="mx-auto mb-12 flex max-w-4xl items-start gap-3.5 rounded-2xl border border-[#40D6C5]/25 bg-[#10192B] p-4 sm:mb-14 sm:p-5">
          <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#40D6C5]" />
          <div className="text-xs leading-relaxed text-[#A5B2CC] sm:text-sm">
            <strong className="mb-1 block font-mono text-xs uppercase tracking-wider text-[#F4F6FF]">
              R&D Lifecycle Transparency Notice:
            </strong>
            All initiatives described below represent active research concepts, architectural prototypes, or developmental roadmaps within the Orlithix Innovation Lab. Feature descriptions, technology stacks, and roadmap items communicate proposed direction, not deployed product functionality. None are marketed as established commercial offerings.
          </div>
        </div>

        {/* Product Lifecycle Stage Taxonomy Explainer */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 sm:mb-16">
          <div className="flex flex-col justify-between rounded-xl border border-[#40D6C5]/30 bg-[#10192B] p-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#40D6C5]" />
                <span className="font-mono text-xs font-semibold uppercase text-[#F4F6FF]">
                  Research & Validation
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#A5B2CC]">
                Active algorithmic experimentation, AST parsing, and empirical test harness formulation.
              </p>
            </div>
            <span className="mt-3 block font-mono text-[10px] uppercase tracking-wider text-[#40D6C5]">
              Active Investigation
            </span>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#586BFF]/30 bg-[#10192B] p-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#586BFF]" />
                <span className="font-mono text-xs font-semibold uppercase text-[#F4F6FF]">
                  Future Concept
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#A5B2CC]">
                Architectural problem-space definition, mathematical modeling, and conceptual system design.
              </p>
            </div>
            <span className="mt-3 block font-mono text-[10px] uppercase tracking-wider text-[#586BFF]">
              Architectural Roadmap
            </span>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#263650] bg-[#10192B] p-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#A5B2CC]" />
                <span className="font-mono text-xs font-semibold uppercase text-[#F4F6FF]">
                  Prototypes & Pilots
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#A5B2CC]">
                Closed architectural evaluations and internal synthetic stress testing (Future Phase).
              </p>
            </div>
            <span className="mt-3 block font-mono text-[10px] uppercase tracking-wider text-[#A5B2CC]">
              Planned Progression
            </span>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-[#263650] bg-[#10192B] p-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#A5B2CC]" />
                <span className="font-mono text-xs font-semibold uppercase text-[#F4F6FF]">
                  Launched Products
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#A5B2CC]">
                Commercially released platforms operating under enterprise SLAs (Future Horizon).
              </p>
            </div>
            <span className="mt-3 block font-mono text-[10px] uppercase tracking-wider text-[#A5B2CC]">
              Future Commercialization
            </span>
          </div>
        </div>

        {/* Central Data-Driven Products Grid */}
        <section aria-labelledby="published-products-heading">
          <h2 id="published-products-heading" className="sr-only">
            Published product concepts
          </h2>
          <ProductGrid products={products} enableFilters={true} />
        </section>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#263650] bg-[#10192B] p-6 sm:mt-20 sm:p-8 lg:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-xl font-semibold text-[#F4F6FF] sm:text-2xl">
              Interested in Co-Developing or Evaluating an R&D Concept?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#A5B2CC]">
              We welcome academic institutions, enterprise DevOps leaders, and technical partners to review our specifications and collaborate on architectural benchmarks.
            </p>
          </div>

          <div className="flex w-full shrink-0 items-center justify-center gap-3 sm:w-auto">
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
