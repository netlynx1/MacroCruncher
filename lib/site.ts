// ============================================================
//  SITE CONFIG — EDIT THESE TWO VALUES AFTER YOU BUY A DOMAIN
// ============================================================
//  Everything in the site (canonical URLs, sitemap, Open Graph,
//  structured data, the Contact page, etc.) reads from here.
//  Change them once and the whole site updates.

// Your live domain (no trailing slash).
export const SITE_URL = "https://macrocruncher.com";

// TODO: replace with the email you want people to contact you at.
// (e.g. hello@macrocruncher.com once you set up domain email.)
export const CONTACT_EMAIL = "macrocruncher@example.com";

export const SITE_NAME = "MacroCruncher";
export const SITE_TAGLINE = "Free Macro Calculator | Calculate Calories & Macros";
export const SITE_DESCRIPTION =
  "Calculate your daily calories, protein, carbs, and fats based on your body, activity level, and fitness goal.";

// Helper to build absolute URLs for canonical + Open Graph.
export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "" : clean}`;
}
