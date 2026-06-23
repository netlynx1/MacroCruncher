import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        Building muscle is slower and quieter than losing fat, which is exactly
        why people get it wrong. They either eat far too much and gain mostly
        fat, or they undereat and wonder why the scale and their lifts never
        move. The good news: muscle gain runs on the same macro framework as any
        other goal. You just point the calories slightly upward and let
        consistent training do the rest.
      </P>

      <H2>Eat in a lean surplus</H2>
      <P>
        Muscle is built tissue, and building tissue takes extra energy. That
        means eating a bit <Strong>above</Strong> your maintenance calories — but
        only a bit. A surplus of <Strong>150 to 500 calories per day</Strong> is
        plenty. Beyond that, you are mostly adding fat you will have to diet off
        later. Start your numbers with the{" "}
        <CalcLink>macro calculator</CalcLink>, then choose a pace that matches how
        aggressively you want to gain.
      </P>

      <H2>Protein builds, but you don't need extremes</H2>
      <P>
        Protein supplies the raw material for new muscle, so it stays a priority.
        Around <Strong>0.9 to 1.0 gram per pound of bodyweight</Strong> covers
        the vast majority of lifters. Eating dramatically more than that does not
        speed things up — once you have enough, extra protein is just calories.
        For a 180 lb lifter, roughly 170g per day is a solid target.
      </P>

      <H2>Carbs are your training fuel</H2>
      <P>
        This is where bulking differs from cutting. In a surplus you have room
        for plenty of carbohydrate, and that is a good thing: carbs fuel hard
        sessions, help you recover, and support the workload that actually drives
        growth. After protein and fat are set, the bulk of your remaining
        calories should come from carbs. Keep fat at roughly 25% of total
        calories for hormone health, and let carbs take the rest.
      </P>

      <Example title="Sample muscle-gain day at 2,800 calories">
        <UL>
          <LI><Strong>Protein:</Strong> ~175g (chicken, beef, eggs, dairy, whey)</LI>
          <LI><Strong>Carbs:</Strong> ~350g (rice, pasta, oats, fruit, bread)</LI>
          <LI><Strong>Fat:</Strong> ~78g (olive oil, nuts, whole eggs, avocado)</LI>
        </UL>
      </Example>

      <H2>Train to give the calories somewhere to go</H2>
      <P>
        Food does not build muscle on its own — it supports the training that
        does. A surplus without a challenging, progressive lifting program just
        becomes fat. Focus on getting stronger over time on a handful of
        compound movements, and let your nutrition back that effort up.
      </P>

      <H3>How fast should you gain?</H3>
      <P>
        Slower than you would like. A realistic rate for most people is roughly{" "}
        <Strong>0.25 to 0.5 lb per week</Strong>. Gaining faster than that almost
        always means extra fat is coming along for the ride. If the scale is
        climbing quickly, ease the surplus back.
      </P>

      <H3>Common bulking mistakes</H3>
      <UL>
        <LI>&ldquo;Dirty bulking&rdquo; on junk food and gaining mostly fat.</LI>
        <LI>Adding far more calories than needed and rationalizing it as bulking.</LI>
        <LI>Neglecting protein while overdoing carbs and fat.</LI>
        <LI>Expecting visible muscle in weeks — real change takes months.</LI>
      </UL>

      <P>
        Set a small surplus, hit your protein, fuel training with carbs, and be
        patient. Dial in your exact targets with the{" "}
        <CalcLink>free macro calculator</CalcLink> and revisit them as your
        bodyweight climbs.
      </P>
    </>
  );
}
