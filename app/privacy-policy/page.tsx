import PageShell from "@/components/PageShell";
import { P, H2 } from "@/components/Prose";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles analytics, cookies, advertising, and third-party services.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      intro="This policy explains, in plain language, what data may be collected when you use this site and how it's used."
      crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
    >
      <P>
        Your privacy matters to us. {SITE_NAME} is designed to be useful without
        requiring you to create an account or hand over personal details. The
        calculations you run happen in your browser. This page describes the
        third-party services that may collect limited information when you visit.
      </P>

      <H2>Information we collect</H2>
      <P>
        We do not ask you to register or submit personal information to use the
        calculators. The values you type into a calculator are processed in your
        browser to produce your results. Like most websites, we and our
        third-party providers may automatically receive standard technical
        information such as your browser type, device, and general usage
        patterns.
      </P>

      <H2>Analytics</H2>
      <P>
        We may use analytics tools, such as Google Analytics, to understand how
        visitors use the site in aggregate — which pages are popular, how people
        arrive, and where things can be improved. This data is collected in a way
        that helps us see overall trends rather than identify you personally.
      </P>

      <H2>Cookies</H2>
      <P>
        Cookies are small text files stored by your browser. We and our partners
        may use cookies and similar technologies to remember preferences, measure
        traffic, and support advertising. You can manage or disable cookies at
        any time through your browser settings; doing so may affect how some
        features work.
      </P>

      <H2>Advertising and Google AdSense</H2>
      <P>
        This site may display ads, including through Google AdSense. Third-party
        vendors, including Google, may use cookies to serve ads based on your
        prior visits to this and other websites. Google&apos;s use of advertising
        cookies enables it and its partners to serve ads to you based on your
        visits. You can learn about your choices and opt out of personalized
        advertising by visiting Google&apos;s Ads Settings and the resources at
        aboutads.info.
      </P>

      <H2>Affiliate links</H2>
      <P>
        Some pages may, now or in the future, include affiliate links. If you
        click one and make a purchase, we may earn a small commission at no extra
        cost to you. We only intend to reference products we consider genuinely
        relevant, and affiliate relationships never change the information or
        recommendations in our content.
      </P>

      <H2>Third-party services</H2>
      <P>
        We rely on reputable third-party services for hosting, analytics, and
        advertising. These providers have their own privacy policies governing
        how they handle data. We encourage you to review the policies of any
        third-party service you interact with.
      </P>

      <H2>Your choices</H2>
      <P>
        You can control cookies through your browser, opt out of personalized
        ads through Google&apos;s settings, and use browser privacy features or
        extensions to limit tracking. You are always free to use the site with
        these protections enabled.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        We may update this policy from time to time as the site evolves or as
        legal requirements change. Any updates will be posted on this page.
      </P>

      <H2>Contact</H2>
      <P>
        If you have questions about this policy, email us at{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-semibold text-ink underline decoration-lime-deep underline-offset-2"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </P>
    </PageShell>
  );
}
