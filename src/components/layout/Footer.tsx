import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { companyData } from "@/data/company";
import { footerNavigation } from "@/data/navigation";
import { ShieldCheck, Terminal } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080D1B] border-t border-[#263650] pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Subtle top edge border gradient highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#586BFF]/40 to-transparent pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#263650]/60">
          {/* Company Brand Column (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Logo size="md" variant="horizontal" />
            <p className="mt-4 text-sm text-[#A5B2CC] leading-relaxed max-w-sm">
              {companyData.tagline}
            </p>
            <p className="mt-2 text-xs text-[#A5B2CC]/80 leading-relaxed max-w-sm">
              An AI-first parent software and technology venture architecting high-concurrency distributed platforms, applied machine intelligence, and cloud-native runtimes.
            </p>

            {/* Architectural Trust Indicator */}
            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#10192B] border border-[#263650] text-[11px] font-mono text-[#A5B2CC]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#40D6C5]" />
              <span>Zero-Fabrication Architecture Standards</span>
            </div>
          </div>

          {/* Column 2: Technology Divisions */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F6FF] mb-4">
              Technology Divisions
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.divisions.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#A5B2CC] hover:text-[#40D6C5] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform & Company */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F6FF] mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#A5B2CC] hover:text-[#586BFF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Innovation Lab & R&D */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F6FF] mb-4 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#40D6C5]" />
              Innovation Lab
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.initiatives.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-[#A5B2CC] hover:text-[#F4F6FF] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#40D6C5]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-lg bg-[#10192B] border border-[#263650]">
              <span className="text-[10px] font-mono text-[#40D6C5] uppercase tracking-wider block">
                Research Inquiries
              </span>
              <span className="text-xs text-[#F4F6FF] font-medium block mt-0.5">
                {companyData.contactEmail}
              </span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Entity Transparency */}
        <div className="py-6 border-b border-[#263650]/40">
          <p className="text-[11px] font-mono text-[#A5B2CC]/70 leading-relaxed">
            <strong className="text-[#A5B2CC]">DISCLOSURE NOTICE: </strong>
            {companyData.legalEntityNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5B2CC]/80 gap-4">
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
