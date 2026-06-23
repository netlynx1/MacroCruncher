// Registry of all guide articles. The body content for each lives in
// lib/articles/<slug>.tsx as a React component. This file holds the
// metadata used for the listing page, SEO, sitemap, and internal links.

export interface ArticleMeta {
  slug: string;
  title: string; // page <title>
  heading: string; // on-page H1
  description: string; // meta description + listing blurb
  category: string;
  readMinutes: number;
  related: string[]; // slugs of related articles
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "how-to-calculate-macros",
    title: "How to Calculate Your Macros: A Beginner's Guide",
    heading: "How to calculate your macros",
    description:
      "Learn how to calculate your daily macros step by step — from estimating calories to splitting protein, carbs, and fat. A clear walkthrough with a worked example.",
    category: "Getting started",
    readMinutes: 6,
    related: ["how-much-protein-per-day", "tdee-vs-bmr", "calorie-deficit-explained"],
  },
  {
    slug: "macros-for-weight-loss",
    title: "The Best Macros for Weight Loss",
    heading: "Macros for weight loss",
    description:
      "How to set protein, carbs, and fat for fat loss while keeping your energy and muscle. Includes a sample day and the mistakes that stall most people.",
    category: "Fat loss",
    readMinutes: 7,
    related: ["calorie-deficit-explained", "best-macros-for-cutting", "how-much-protein-per-day"],
  },
  {
    slug: "macros-for-muscle-gain",
    title: "The Best Macros for Muscle Gain",
    heading: "Macros for muscle gain",
    description:
      "What to eat to build muscle without piling on fat. How to set a lean surplus, hit your protein, and use carbs to train harder.",
    category: "Muscle gain",
    readMinutes: 7,
    related: ["best-macros-for-bulking", "how-much-protein-per-day", "how-to-calculate-macros"],
  },
  {
    slug: "how-much-protein-per-day",
    title: "How Much Protein Do You Need Per Day?",
    heading: "How much protein per day?",
    description:
      "A practical look at daily protein: how much you actually need, how to spread it across meals, and easy ways to hit your target.",
    category: "Nutrition basics",
    readMinutes: 6,
    related: ["how-to-calculate-macros", "macros-for-muscle-gain", "macros-for-weight-loss"],
  },
  {
    slug: "calorie-deficit-explained",
    title: "Calorie Deficit Explained (Without the Confusion)",
    heading: "Calorie deficit explained",
    description:
      "What a calorie deficit really is, how big yours should be, and why slow and steady beats crash dieting. Plain-English guide with examples.",
    category: "Fat loss",
    readMinutes: 7,
    related: ["macros-for-weight-loss", "tdee-vs-bmr", "best-macros-for-cutting"],
  },
  {
    slug: "tdee-vs-bmr",
    title: "TDEE vs BMR: What's the Difference?",
    heading: "TDEE vs BMR",
    description:
      "BMR, TDEE, and maintenance calories explained simply — what each number means, how they relate, and which one to actually use.",
    category: "Nutrition basics",
    readMinutes: 6,
    related: ["how-to-calculate-macros", "calorie-deficit-explained", "how-much-protein-per-day"],
  },
  {
    slug: "best-macros-for-cutting",
    title: "The Best Macros for Cutting",
    heading: "Best macros for cutting",
    description:
      "How to set up a cut that strips fat while protecting your muscle and strength. Protein-first macros, refeeds, and a realistic timeline.",
    category: "Fat loss",
    readMinutes: 7,
    related: ["macros-for-weight-loss", "calorie-deficit-explained", "best-macros-for-bulking"],
  },
  {
    slug: "best-macros-for-bulking",
    title: "The Best Macros for Bulking",
    heading: "Best macros for bulking",
    description:
      "How to bulk without getting sloppy. Setting a lean surplus, choosing the right rate of gain, and the macro split that supports growth.",
    category: "Muscle gain",
    readMinutes: 7,
    related: ["macros-for-muscle-gain", "how-much-protein-per-day", "best-macros-for-cutting"],
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
