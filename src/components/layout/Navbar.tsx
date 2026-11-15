"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNavItems } from "@/data/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-200 ${
        isScrolled
          ? "border-[#263650] bg-[#080D1B]/95 shadow-sm shadow-black/20"
          : "border-[#263650]/70 bg-[#080D1B]/90"
      }`}
    >
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Logo size="sm" variant="horizontal" />
          </div>

          {/* Navigation links in the center / right */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-[#263650] bg-[#10192B] px-2 py-1 lg:flex"
          >
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-full px-3 text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? "border border-[#586BFF]/50 bg-[#121F36] text-[#F4F6FF]"
                      : "border border-transparent text-[#A5B2CC] hover:bg-[#121F36] hover:text-[#F4F6FF]"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="rounded-full border border-[#40D6C5]/30 bg-[#40D6C5]/10 px-1.5 py-0.5 text-[9px] font-mono font-semibold text-[#40D6C5]">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Contact Us button */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#263650] bg-[#10192B] text-[#A5B2CC] transition-colors hover:border-[#586BFF]/60 hover:text-[#F4F6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5]"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#F4F6FF]" />
              ) : (
                <Menu className="w-5 h-5 text-[#F4F6FF]" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-[#263650] bg-[#080D1B] shadow-xl shadow-black/25 lg:hidden"
        >
          <Container className="flex flex-col gap-3 py-5">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {mainNavItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#40D6C5] ${
                      isActive
                        ? "border border-[#586BFF]/40 bg-[#121F36] text-[#F4F6FF]"
                        : "border border-transparent text-[#A5B2CC] hover:bg-[#10192B] hover:text-[#F4F6FF]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="rounded-full border border-[#40D6C5]/30 bg-[#40D6C5]/10 px-2 py-0.5 text-[10px] font-mono text-[#40D6C5]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-2 border-t border-[#263650] pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Contact Us
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
