import PageShell from "@/components/PageShell";
import { P, H2 } from "@/components/Prose";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Get in touch with ${SITE_NAME} with questions, corrections, or feedback.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="Questions, corrections, or feedback? We'd genuinely like to hear from you."
      crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <H2>Get in touch</H2>
      <P>
        Whether you spotted an error in an article, have a question about how a
        calculator works, or want to suggest a tool we should build next, send a
        note our way. We read every message.
      </P>

      <div className="mt-6 rounded-3xl border-2 border-ink bg-ink p-6 text-paper sm:p-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">
          Email us
        </span>
        <div className="mt-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-display text-2xl font-extrabold tracking-tight text-paper underline decoration-lime decoration-2 underline-offset-4 hover:text-lime sm:text-3xl"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/70">
          We aim to reply when we can. Please note we can&apos;t offer
          personalized medical, nutrition, or training advice — for that, see a
          qualified professional.
        </p>
      </div>

      <H2>A note on what we can help with</H2>
      <P>
        We&apos;re happy to clarify how our tools and guides work, fix mistakes,
        and take feature requests. For anything specific to your personal health
        — medical conditions, medications, injuries, or tailored diet plans —
        please consult a doctor or registered dietitian who can account for your
        full situation.
      </P>
    </PageShell>
  );
}
