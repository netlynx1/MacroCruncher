import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

// Visual breadcrumb trail. The matching BreadcrumbList JSON-LD is rendered
// separately on each page so the two stay in sync.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-ink">
                {c.label}
              </Link>
            ) : (
              <span className="text-ink">{c.label}</span>
            )}
            {i < items.length - 1 && <span className="text-line">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
