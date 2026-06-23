import Link from "next/link";
import { ARTICLES } from "@/lib/articles";
import { SITE_NAME } from "@/lib/site";

const LEGAL = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  // Show the first six guides in the footer to keep it tidy.
  const footerGuides = ARTICLES.slice(0, 6);

  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded bg-ink font-display text-xs font-black text-lime">
                M
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Free fitness calculators and plain-English nutrition guides to help
              you understand calories, macros, and your goals.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Tools
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/#calculator" className="text-ink hover:text-lime-deep">
                  Macro Calculator
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-ink hover:text-lime-deep">
                  All Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Popular guides
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {footerGuides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/${g.slug}`}
                    className="text-ink hover:text-lime-deep"
                  >
                    {g.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Site
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink hover:text-lime-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-ink-soft/70">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="max-w-md font-mono text-[11px] leading-relaxed text-ink-soft/70">
            Estimates only — not medical advice. Consult a qualified
            professional before major diet or training changes.
          </p>
        </div>
      </div>
    </footer>
  );
}
