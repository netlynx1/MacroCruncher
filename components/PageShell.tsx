import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/site";

// Wraps simple content pages (legal, about, contact) with consistent
// chrome: navbar, breadcrumb trail + matching JSON-LD, title, footer.
export default function PageShell({
  title,
  intro,
  crumbs,
  children,
}: {
  title: string;
  intro?: string;
  crumbs: Crumb[];
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? absoluteUrl(c.href) : undefined,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="paper-grain min-h-screen">
        <article className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {intro}
            </p>
          )}
          <div className="mt-8">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

// re-export so pages can build canonical URLs if needed
export { SITE_URL };
