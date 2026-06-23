import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, absoluteUrl } from "./site";

interface PageMetaArgs {
  title: string;
  description?: string;
  path: string; // e.g. "/about"
  ogType?: "website" | "article";
}

// Builds a complete Metadata object: title, description, canonical,
// Open Graph, and Twitter card. Used by every page so SEO stays consistent.
export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  ogType = "website",
}: PageMetaArgs): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
