import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        A &ldquo;bulk&rdquo; is a deliberate muscle-building phase where you eat
        in a surplus to support growth. The trap most people fall into is
        treating it as a license to eat everything in sight — and then spending
        the next few months dieting off the fat they piled on. A smart bulk is
        controlled, patient, and surprisingly modest. Here is how to set it up.
      </P>

      <H2>Aim for a lean surplus</H2>
      <P>
        Your body can only build muscle so fast, and eating far beyond that limit
        just adds fat. A <Strong>surplus of 150 to 500 calories per day</Strong>
        above maintenance is the productive range. Newer lifters can lean toward
        the higher end since they build muscle faster; experienced lifters do
        better staying conservative. The <CalcLink>macro calculator</CalcLink>
        sets the surplus for you when you choose a muscle-gain goal and pace.
      </P>

      <H2>Hit your protein — but don't overthink it</H2>
      <P>
        Protein provides the building blocks for new muscle, so keep it solid at
        around <Strong>0.9 to 1.0 gram per pound of bodyweight</Strong>. Unlike a
        cut, you do not need to push protein to the absolute maximum, because the
        surplus is already doing a lot of the heavy lifting. For a 185 lb lifter,
        roughly 175g per day is a good target.
      </P>

      <H2>Carbs do the heavy lifting</H2>
      <P>
        This is the fun part of bulking: with calories to spare, you can eat
        plenty of carbohydrate. Carbs fuel intense training, speed up recovery,
        and let you push harder in the gym — which is what actually triggers
        growth. After setting protein and keeping fat at about{" "}
        <Strong>25% of calories</Strong>, let carbs fill the large remainder of
        your intake.
      </P>

      <Example title="Sample bulking day at 3,000 calories">
        <UL>
          <LI><Strong>Protein:</Strong> ~180g</LI>
          <LI><Strong>Carbs:</Strong> ~385g</LI>
          <LI><Strong>Fat:</Strong> ~83g</LI>
        </UL>
        Plenty of room for rice, pasta, oats, fruit, and other training fuel.
      </Example>

      <H2>Pick the right rate of gain</H2>
      <P>
        The fastest way to ruin a bulk is gaining weight too quickly. Past a
        certain point, extra weight is just fat. A sensible rate is roughly{" "}
        <Strong>0.25 to 0.5 lb per week</Strong>. Weigh yourself regularly and
        track the trend: if you are gaining faster than that, trim the surplus; if
        the scale is flat for a few weeks, nudge calories up.
      </P>

      <H2>Clean bulk vs. dirty bulk</H2>
      <P>
        A &ldquo;dirty bulk&rdquo; means eating whatever it takes to grow,
        including lots of junk. It works for adding weight, but much of that
        weight is fat, and the cleanup afterward is brutal. A{" "}
        <Strong>controlled bulk</Strong> built mostly on nutritious,
        protein-rich, carb-dense whole foods gets you the muscle with far less fat
        to deal with later. You do not need to eat perfectly — just sensibly.
      </P>

      <H3>Common bulking mistakes</H3>
      <UL>
        <LI>Surplus far bigger than needed, justified as &ldquo;bulking season.&rdquo;</LI>
        <LI>Ignoring the scale trend until the fat has already piled on.</LI>
        <LI>Letting training intensity slide while calories stay high.</LI>
        <LI>Bulking for so long that the eventual cut becomes daunting.</LI>
      </UL>

      <H2>Know when to stop</H2>
      <P>
        Bulks should not run forever. Many people bulk for a few months, then
        switch to a short maintenance or cutting phase before resuming. Watching
        your bodyfat and how you look and feel tells you when it is time to
        transition. Set your exact bulking macros with the{" "}
        <CalcLink>free macro calculator</CalcLink> and revisit them as your
        weight climbs.
      </P>
    </>
  );
}
