import PageShell from "@/components/PageShell";
import { P, H2 } from "@/components/Prose";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: `Important disclaimer: ${SITE_NAME} provides estimates and education, not medical advice.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <PageShell
      title="Disclaimer"
      intro="Please read this before acting on anything you find here."
      crumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
    >
      <H2>Not medical advice</H2>
      <P>
        The calculators and articles on {SITE_NAME} are for general educational
        and informational purposes only. They are not medical advice, diagnosis,
        or treatment, and they are not a substitute for the guidance of a
        qualified healthcare provider. Never disregard or delay seeking
        professional advice because of something you read here.
      </P>

      <H2>Consult a professional</H2>
      <P>
        Before making major changes to your diet, exercise, or health routine —
        especially if you are pregnant, nursing, taking medication, or living
        with a medical condition — consult a doctor, registered dietitian, or
        other qualified health professional who can assess your individual
        situation.
      </P>

      <H2>Estimates only</H2>
      <P>
        Calorie and macro figures produced by our tools are{" "}
        <strong className="font-semibold text-ink">estimates only</strong>. They
        are generated using standard, widely used formulas such as Mifflin-St
        Jeor and generalized activity multipliers. These formulas cannot account
        for every individual factor — genetics, medical conditions, medications,
        hormones, sleep, stress, and more — so your real needs may differ.
        Treat the numbers as a starting point and adjust based on your own
        results over time.
      </P>

      <H2>Individual results vary</H2>
      <P>
        Fitness and nutrition outcomes depend on many variables and differ from
        person to person. We make no guarantees about specific results. What
        works well for one person may not suit another.
      </P>

      <H2>Use at your own discretion</H2>
      <P>
        By using this site you acknowledge that any decisions you make based on
        its content are your own responsibility. {SITE_NAME} and its operators
        are not liable for any outcome resulting from the use of the information
        or tools provided here.
      </P>
    </PageShell>
  );
}
