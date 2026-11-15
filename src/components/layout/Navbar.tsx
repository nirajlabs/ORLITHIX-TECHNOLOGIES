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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080D1B]/85 backdrop-blur-md border-b border-[#263650]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
          : "bg-transparent border-b border-[#263650]/30 py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Logo size="md" variant="horizontal" />
          </div>

          {/* Navigation links in the center / right */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#10192B]/60 border border-[#263650]/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs lg:text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#F4F6FF] bg-[#121F36] shadow-[0_0_12px_rgba(88,107,255,0.25)] border border-[#586BFF]/30"
                      : "text-[#A5B2CC] hover:text-[#F4F6FF] hover:bg-[#121F36]/50"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 bg-[#40D6C5]/15 text-[#40D6C5] rounded-full border border-[#40D6C5]/30">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Contact Us button */}
          <div className="hidden sm:flex items-center gap-3">
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
          <div className="flex md:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5"
            >
              Contact
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#10192B] border border-[#263650] text-[#A5B2CC] hover:text-[#F4F6FF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
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

      {/* Mobile Sliding Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#080D1B]/95 backdrop-blur-xl border-b border-[#263650] shadow-2xl transition-all duration-300">
          <Container className="py-6 flex flex-col gap-3">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#121F36] text-[#F4F6FF] border border-[#586BFF]/40"
                      : "text-[#A5B2CC] hover:text-[#F4F6FF] hover:bg-[#10192B]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#40D6C5]/15 text-[#40D6C5] rounded-full border border-[#40D6C5]/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#263650] flex flex-col gap-3">
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
