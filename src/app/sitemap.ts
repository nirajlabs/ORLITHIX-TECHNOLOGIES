import type { MetadataRoute } from "next";
import { getAllCapabilities } from "@/lib/capabilities";
import { getAllProducts } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const capabilities = getAllCapabilities();
  const products = getAllProducts();

  const capabilityUrls = capabilities.map((cap) => ({
    url: `${siteUrl}/capabilities/${cap.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const productUrls = products.map((prod) => ({
    url: `${siteUrl}/products/${prod.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/capabilities`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...capabilityUrls,
    {
      url: `${siteUrl}/products`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productUrls,
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
