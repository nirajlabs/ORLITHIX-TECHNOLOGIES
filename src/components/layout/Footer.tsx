import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { companyData } from "@/data/company";
import { footerNavigation } from "@/data/navigation";
import { getAllProducts } from "@/lib/products";
import { Terminal } from "lucide-react";

export const Footer: React.FC = () => {
  const products = getAllProducts();

  return (
    <footer className="mt-16 border-t border-[#263650] bg-[#080D1B] py-12 sm:mt-20 sm:py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-[#263650] pb-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:pb-12">
          {/* Company Brand Column (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Logo size="md" variant="horizontal" />
            <p className="mt-4 text-sm text-[#A5B2CC] leading-relaxed max-w-sm">
              {companyData.tagline}
            </p>
            <p className="mt-2 text-xs text-[#A5B2CC]/80 leading-relaxed max-w-sm">
              A proposed emerging technology venture exploring artificial intelligence, software engineering, and digital innovation.
            </p>

            <p className="mt-6 rounded-lg border border-[#263650] bg-[#10192B] px-3 py-2 text-[11px] font-mono text-[#A5B2CC]">
              Proposed venture // In development
            </p>
          </div>

          {/* Column 2: Technology Divisions */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F6FF]">
              Technology Divisions
            </h3>
            <ul className="space-y-1">
              {footerNavigation.divisions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-xs text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform & Company */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F6FF]">
              Organization
            </h3>
            <ul className="space-y-1">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-xs text-[#A5B2CC] transition-colors hover:text-[#40D6C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Innovation Lab & R&D */}
          <div className="flex flex-col">
            <h3 className="mb-4 flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F6FF]">
              <Terminal className="w-3.5 h-3.5 text-[#40D6C5]" />
              Innovation Lab
            </h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex min-h-11 items-center gap-1.5 text-xs text-[#A5B2CC] transition-colors hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#40D6C5]" />
                    {product.name}
                  </Link>
                  <span className="ml-2 text-[9px] font-mono text-[#A5B2CC]/60">
                    {product.statusLabel}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-lg bg-[#10192B] border border-[#263650]">
              <span className="text-[10px] font-mono text-[#40D6C5] uppercase tracking-wider block">
                Contact options
              </span>
              <ContactLinks className="mt-1" />
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Entity Transparency */}
        <div className="border-b border-[#263650] py-6">
          <p className="text-[11px] font-mono text-[#A5B2CC]/70 leading-relaxed">
            <strong className="text-[#A5B2CC]">DISCLOSURE NOTICE: </strong>
            {companyData.legalEntityNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-[#A5B2CC]/80 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <span className="font-mono text-[#40D6C5]">v1.0.0 Architecture</span>
            <span className="text-[#263650]">•</span>
            <span className="text-[#A5B2CC]">Next.js Enterprise Stack</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
