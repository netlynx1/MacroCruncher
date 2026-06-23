import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        A &ldquo;cut&rdquo; is a focused phase of fat loss, usually run by people
        who have built some muscle and now want to reveal it. The goal is not
        just to weigh less — it is to lose fat while holding onto as much muscle
        and strength as possible. That distinction changes how you set your
        macros. Here is how to cut without watching your hard-earned muscle melt
        away with the fat.
      </P>

      <H2>Set a moderate deficit, not a brutal one</H2>
      <P>
        It is tempting to slash calories and rush the process, but aggressive
        cuts are where muscle gets lost. A <Strong>moderate deficit of around
        500 calories per day</Strong> is the reliable choice for most cuts —
        steady fat loss of roughly a pound a week while keeping training quality
        high. Save the more aggressive approach for short stretches if you have a
        deadline. Start your numbers with the{" "}
        <CalcLink>macro calculator</CalcLink>.
      </P>

      <H2>Protein first, and keep it high</H2>
      <P>
        On a cut, protein is non-negotiable. It is the single biggest factor in
        keeping muscle while you lose fat, and it keeps you full when calories are
        tight. Target the top of the range — about <Strong>1.0 gram per pound of
        bodyweight</Strong>. A lifter at 175 lb would aim for roughly 175g of
        protein per day, anchored across every meal.
      </P>

      <H2>Keep fat adequate, then prioritize carbs around training</H2>
      <P>
        Drop fat too low and your energy, mood, and hormones suffer. Hold it
        around <Strong>25% of calories</Strong> — enough to feel good — then give
        the remaining calories to carbs. On a cut, carbs are precious training
        fuel, so it helps to concentrate more of them around your workouts when
        they will do the most good.
      </P>

      <Example title="Sample cutting day at 2,000 calories">
        <UL>
          <LI><Strong>Protein:</Strong> ~175g</LI>
          <LI><Strong>Carbs:</Strong> ~190g (weighted toward pre- and post-workout)</LI>
          <LI><Strong>Fat:</Strong> ~55g</LI>
        </UL>
      </Example>

      <H2>Use the gym to protect muscle</H2>
      <P>
        Diet alone tells your body to shed weight; lifting tells it to keep the
        muscle. During a cut, <Strong>keep training heavy</Strong> and try to
        maintain your strength rather than chasing new personal records. If you
        can hold roughly the same loads while getting leaner, you are doing it
        right. Endless extra cardio is not required — it is a tool to widen the
        deficit slightly if needed, not the main event.
      </P>

      <H3>What about refeeds and diet breaks?</H3>
      <P>
        Longer cuts can wear you down physically and mentally. Some people use a
        higher-carb <Strong>refeed day</Strong> or a short <Strong>diet
        break</Strong> at maintenance every few weeks to recharge, improve
        training, and make the diet more sustainable. These are optional tools,
        not requirements — the fundamentals still come first.
      </P>

      <H3>Signs you're cutting too hard</H3>
      <UL>
        <LI>Strength dropping quickly week over week.</LI>
        <LI>Constant hunger that leads to binges.</LI>
        <LI>Poor sleep, low mood, or no motivation to train.</LI>
        <LI>Feeling cold and flat all the time.</LI>
      </UL>
      <P>
        If several of these show up, you are likely too aggressive. Ease the
        deficit and lengthen the timeline.
      </P>

      <H2>Be patient with the timeline</H2>
      <P>
        A good cut is measured in weeks and months, not days. Trying to get
        shredded in two weeks almost guarantees muscle loss and a rebound. Pick a
        sustainable deficit, protect muscle with protein and lifting, and let the
        fat come off gradually. Dial in your exact cutting macros with the{" "}
        <CalcLink>free calculator</CalcLink>.
      </P>
    </>
  );
}
