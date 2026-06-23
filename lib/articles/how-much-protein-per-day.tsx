import { P, H2, H3, UL, LI, Strong, CalcLink, Example } from "@/components/Prose";

export default function Body() {
  return (
    <>
      <P>
        Protein is the one macro almost everyone agrees on, and the one most
        people still get wrong. Eat too little and you feel hungry, lose muscle
        when dieting, and recover slowly from training. Eat absurd amounts and
        you just spend money on calories you did not need. So how much do you
        actually need in a day? Here is a practical answer without the
        bro-science.
      </P>

      <H2>A simple, reliable range</H2>
      <P>
        For active people, a dependable target is{" "}
        <Strong>0.7 to 1.0 gram of protein per pound of bodyweight</Strong> per
        day. Where you land in that range depends on your goal:
      </P>
      <UL>
        <LI><Strong>Losing fat:</Strong> aim higher, around 1.0 g/lb, to protect muscle and stay full.</LI>
        <LI><Strong>Building muscle:</Strong> roughly 0.9 g/lb is plenty to support growth.</LI>
        <LI><Strong>Maintaining:</Strong> about 0.8 g/lb keeps things easy and balanced.</LI>
      </UL>
      <P>
        The <CalcLink>macro calculator</CalcLink> sets your protein automatically
        based on which of these you pick, so you do not have to guess.
      </P>

      <Example title="Quick math">
        A 150 lb person aiming to lose fat targets about 150g of protein per day.
        Spread across four meals that is roughly 35–40g each — think a chicken
        breast, a cup of Greek yogurt with a scoop of whey, a can of tuna, or
        three eggs plus cottage cheese.
      </Example>

      <H2>Does timing matter?</H2>
      <P>
        Less than the internet suggests. The old idea of a narrow
        &ldquo;anabolic window&rdquo; right after a workout has been heavily
        overstated. What matters far more is your <Strong>total protein for the
        day</Strong>. That said, spreading it across three or four meals rather
        than cramming it into one is slightly more effective and a lot easier on
        digestion.
      </P>

      <H2>Best protein sources</H2>
      <H3>Animal sources</H3>
      <UL>
        <LI>Chicken, turkey, lean beef, and pork</LI>
        <LI>Fish and seafood</LI>
        <LI>Eggs and egg whites</LI>
        <LI>Greek yogurt, cottage cheese, milk, and whey protein</LI>
      </UL>
      <H3>Plant sources</H3>
      <UL>
        <LI>Tofu, tempeh, and edamame</LI>
        <LI>Lentils, chickpeas, and beans</LI>
        <LI>Seitan and soy-based meat alternatives</LI>
        <LI>Pea or soy protein powder</LI>
      </UL>
      <P>
        Plant eaters can absolutely hit their targets; it just takes a little
        more planning since plant proteins are often less concentrated and lower
        in certain amino acids. Eating a variety across the day covers the gaps.
      </P>

      <H2>Can you eat too much protein?</H2>
      <P>
        For healthy people, moderately high protein is well tolerated. The bigger
        practical issue is opportunity cost: every gram of protein beyond what
        you need is calories that could have gone to carbs for training or simply
        been saved. If you have existing kidney concerns, talk to your doctor
        about the right intake for you.
      </P>

      <H3>Easy ways to get enough</H3>
      <UL>
        <LI>Anchor every meal around a protein source first, then build the rest of the plate.</LI>
        <LI>Keep convenient options on hand: yogurt, jerky, tuna pouches, protein powder.</LI>
        <LI>Add a scoop of whey to oatmeal or a smoothie to close the daily gap.</LI>
      </UL>

      <P>
        Pick a number in the range, hit it most days, and spread it out. To see
        the exact protein target for your bodyweight and goal, run the{" "}
        <CalcLink>free calculator</CalcLink>.
      </P>
    </>
  );
}
