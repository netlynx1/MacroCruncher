import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { CalcCTA, MiniDisclaimer } from "@/components/Prose";
import { ARTICLES, getArticle } from "@/lib/articles";
import { ARTICLE_BODIES } from "@/lib/articles/index";
import { buildMetadata } from "@/lib/metadata";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

// Pre-render every article at build time.
export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/${article.slug}`,
    ogType: "article",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  const Body = ARTICLE_BODIES[slug];

  if (!article || !Body) notFound();

  const related = article.related
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const url = absoluteUrl(`/${article.slug}`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: absoluteUrl("/guides"),
      },
      { "@type": "ListItem", position: 3, name: article.heading, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="paper-grain min-h-screen">
        <article className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: article.heading },
            ]}
          />

          <div className="mt-5 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime-deep">
              {article.category}
            </span>
            <span className="font-mono text-[11px] text-ink-soft/60">
              {article.readMinutes} min read
            </span>
          </div>

          <h1 className="mt-3 font-display text-4xl font-black uppercase leading-[0.9] tracking-tight text-ink sm:text-5xl">
            {article.heading}
          </h1>

          {/* Article body */}
          <div className="mt-6">
            <Body />
          </div>

          <MiniDisclaimer />
          <CalcCTA />

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  Keep reading
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="group rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-ink"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime-deep">
                      {r.category}
                    </span>
                    <h3 className="mt-1.5 font-display text-sm font-bold leading-tight text-ink">
                      {r.heading}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
