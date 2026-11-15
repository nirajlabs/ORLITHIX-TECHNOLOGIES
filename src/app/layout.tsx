import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { companyData } from "@/data/company";
import { siteName, siteUrl, socialImageUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Orlithix Technologies",
  },
  description:
    "Orlithix Technologies is a proposed technology venture exploring artificial intelligence, software engineering, and digital innovation.",
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
    url: siteUrl,
    title: siteName,
    description:
      "A proposed technology venture exploring artificial intelligence, software engineering, and digital innovation.",
    siteName,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Orlithix Technologies — Engineering Intelligence. Building the Future.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "A proposed technology venture exploring artificial intelligence, software engineering, and digital innovation.",
    images: [socialImageUrl],
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
    "url": siteUrl,
    "logo": `${siteUrl}/logo.svg`,
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
    <html lang="en" className="dark" data-scroll-behavior="smooth">
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
