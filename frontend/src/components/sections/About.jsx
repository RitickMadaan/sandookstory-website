import { publicAsset } from "../../lib/assets";

const STORY_IMG =
  publicAsset("/resources/images/founders.jpeg");

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-sundook-ivory py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Image */}
        <div className="lg:col-span-5 relative lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={STORY_IMG}
              alt="Maa and beti — the founders of Sandook Story"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="filigree-corner -top-3 -left-3" />
          <div className="filigree-corner -bottom-3 -right-3 rotate-180" />
          <p className="mt-4 font-sans text-[0.62rem] tracking-[0.28em] uppercase text-sundook-mute text-center">
            ✦ Maa &amp; Beti · Sandook Story ✦
          </p>
        </div>

        {/* Story — single, consistent typeface for readability */}
        <div className="lg:col-span-7">
          <p className="sundook-divider mb-6">
            <span>Our Story</span>
          </p>

          <h2
            data-testid="about-headline"
            className="font-serif text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.2rem] text-sundook-maroon italic leading-[1.1] tracking-tight"
          >
            “Meri beti paraayi nahi.”
          </h2>

          <div className="mt-6 space-y-5 font-sans text-[0.97rem] md:text-base text-sundook-ink leading-[1.85] max-w-[60ch]">
            <p>
              My Maa was tired of hearing people say, <em>ab toh beti paraayi ho
              gayi</em>. To that, she always had one answer.
            </p>

            <p>
              <em>Nahi. Bas apna ghar basane jaa rahi hai.</em>
              <br />
              Just like her mother had once said to her.
            </p>

            <p>
              That is when Maa thought of my dadi&rsquo;s sandook — the one her
              mother had lovingly packed for her wedding, making sure she never
              left without a piece of home.
            </p>

            <p>Maa wanted to recreate that feeling for me.</p>

            <p>
              So she restored my dadi&rsquo;s 50‑year‑old wedding trunk, one that
              had travelled across Delhi, Madhya Pradesh and Rajasthan with our
              family. She lined it with soft suede, polished the old metal, used
              fabric from her own saree, and engraved the name my dadi lovingly
              called me — <em>Madhubala</em>.
            </p>

            <p>It was never meant to become a business.</p>

            <p>
              But when we shared a reel of this process, it reached 3 million
              people. Brides, mothers and sisters wrote to us asking the same
              thing — <em>“How can I get a sandook made for my wedding?”</em>
            </p>

            <p className="text-sundook-maroon">
              That is how the Sandook Story began.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
