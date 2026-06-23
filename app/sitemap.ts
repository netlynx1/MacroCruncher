import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPaths = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/guides", priority: 0.8, freq: "weekly" as const },
    { path: "/about", priority: 0.5, freq: "monthly" as const },
    { path: "/contact", priority: 0.5, freq: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/disclaimer", priority: 0.3, freq: "yearly" as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  // Article pages
  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: absoluteUrl(`/${a.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
