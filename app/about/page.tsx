import PageShell from "@/components/PageShell";
import { P, H2 } from "@/components/Prose";
import { CalcCTA } from "@/components/Prose";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About",
  description: `${SITE_NAME} provides free fitness calculators and plain-English nutrition guides to help you understand calories, macros, and your goals.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      title="About"
      intro={`${SITE_NAME} is a free resource for fitness calculators and beginner-friendly nutrition education.`}
      crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
    >
      <H2>What this site is</H2>
      <P>
        {SITE_NAME} exists to make the numbers behind nutrition less
        intimidating. We build free, easy-to-use calculators and pair them with
        clear, jargon-free guides so you can understand not just <em>what</em> to
        eat, but <em>why</em>. Our first tool is a macro calculator that turns
        your body stats and goal into daily calorie and macronutrient targets.
      </P>

      <H2>What we want to help with</H2>
      <P>
        Nutrition advice online is often contradictory, extreme, or buried in
        marketing. Our goal is simpler: help you get comfortable with the core
        ideas that actually matter — calories, protein, carbohydrates, fat,
        maintenance, cutting, bulking, and how they fit together. Once those
        concepts click, you can make confident decisions without chasing the
        latest fad.
      </P>

      <H2>How we approach content</H2>
      <P>
        Everything here is written to be practical and honest. We do not promise
        dramatic transformations, sell miracle plans, or claim credentials we do
        not have. The calculators use well-established formulas, and the articles
        stick to widely accepted, sensible principles. Where a topic touches your
        health, we point you toward qualified professionals rather than
        pretending to replace them.
      </P>

      <H2>Who it&apos;s for</H2>
      <P>
        Whether you are counting macros for the first time, dialing in a fat-loss
        phase, or eating to build muscle, the tools and guides are designed to
        meet you where you are. No account, no paywall, no spam — just free tools
        and straightforward information.
      </P>

      <CalcCTA />
    </PageShell>
  );
}
