import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://orlithix.com"),
  title: {
    default: "Orlithix Technologies | Engineering Intelligence. Building the Future.",
    template: "%s | Orlithix Technologies",
  },
  description:
    "An AI-first parent software and technology venture architecting high-concurrency distributed systems, applied artificial intelligence, enterprise SaaS, and cloud-native platforms.",
  keywords: [
    "Orlithix Technologies",
    "Artificial Intelligence",
    "Distributed Systems",
    "Enterprise SaaS",
    "Data Intelligence",
    "Autonomous Agents",
    "Cloud DevOps",
    "Mobile Engineering",
  ],
  authors: [{ name: "Orlithix Technologies" }],
  creator: "Orlithix Technologies",
  publisher: "Orlithix Technologies",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orlithix.com",
    title: "Orlithix Technologies | Engineering Intelligence. Building the Future.",
    description:
      "An AI-first parent software and technology venture architecting high-concurrency distributed platforms and deterministic machine intelligence.",
    siteName: "Orlithix Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlithix Technologies | Engineering Intelligence. Building the Future.",
    description:
      "An AI-first parent software and technology venture architecting high-concurrency distributed platforms and deterministic machine intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Enterprise SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orlithix Technologies",
    "url": "https://orlithix.com",
    "logo": "https://orlithix.com/logo.svg",
    "slogan": companyData.tagline,
    "description": companyData.aboutSummary,
    "disambiguatingDescription": companyData.legalEntityNotice,
    "knowsAbout": [
      "Artificial Intelligence",
      "Software Engineering",
      "Distributed Systems",
      "Enterprise SaaS",
      "Cloud Technologies",
      "Data Intelligence"
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#080D1B] text-[#F4F6FF] selection:bg-[#586BFF]/30 selection:text-[#F4F6FF] font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
