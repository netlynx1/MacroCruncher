import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CalcCTA } from "@/components/Prose";
import { ARTICLES } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Fitness & Nutrition Guides",
  description:
    "Beginner-friendly guides on macros, calories, protein, cutting, bulking, TDEE, and more — written in plain English.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <PageShell
      title="Guides"
      intro="Plain-English guides on calories, macros, and reaching your goals. No bro-science, no fluff."
      crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {ARTICLES.map((a) => (
          <Link
            key={a.slug}
            href={`/${a.slug}`}
            className="group flex flex-col rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-ink"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime-deep">
                {a.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft/60">
                {a.readMinutes} min
              </span>
            </div>
            <h2 className="mt-2 font-display text-lg font-bold leading-tight text-ink">
              {a.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {a.description}
            </p>
            <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft group-hover:text-ink">
              Read guide →
            </span>
          </Link>
        ))}
      </div>

      <CalcCTA />
    </PageShell>
  );
}
