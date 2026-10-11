import { ArrowDown, ArrowRight } from "lucide-react";
import { publicAsset } from "../../lib/assets";
import { waLink } from "../../lib/whatsapp";

// Brand-supplied ornate trunk collection (1672×941) — covered behind the
// frosted-glass copy panel; object-top keeps the top of the art visible.
const HERO_IMAGE = publicAsset("/resources/images/collection-hero.jpg");

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="w-full bg-sundook-ivory pt-28"
    >
      {/* Collection banner — relative cover area sized by the copy panel */}
      <div className="relative flow-root w-full md:min-h-[850px]">
        <img
          src={HERO_IMAGE}
          alt="Sandook Story's ornate heirloom trunk collection displayed on marble plinths"
          width={1672}
          height={941}
          loading="eager"
          data-testid="hero-banner-image"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
        />

        {/* Frosted-glass copy panel — original hero copy over the art */}
        <div className="relative z-10 max-w-2xl mx-6 md:mx-12 lg:mx-20 my-8 md:my-12 p-6 md:p-10 bg-sundook-ivory/70 backdrop-blur-md border border-white/50">
          <p data-testid="hero-eyebrow" className="sundook-divider mb-9">
            <span className="sm:hidden">A Mumma–Beti Venture</span>
            <span className="hidden sm:inline">A Mumma–Beti Venture · From the Heart of a Mother</span>
          </p>

          <h1
            data-testid="hero-headline"
            className="font-serif font-medium text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.4rem] text-sundook-ink leading-[1] tracking-tight max-w-[15ch]"
          >
            Born from a
            <br />
            <em className="font-serif italic font-medium text-sundook-maroon">
              mother&rsquo;s touch.
            </em>
          </h1>

          <p
            data-testid="hero-tagline"
            className="mt-6 font-serif italic text-xl md:text-2xl lg:text-[1.7rem] text-sundook-ink/85 max-w-[44ch] leading-snug"
          >
            A piece of home for your <em>ladli</em>, on her special day.
          </p>

          <p
            data-testid="hero-subhead"
            className="mt-7 font-sans text-[0.95rem] md:text-base text-sundook-ink/80 max-w-[48ch] leading-[1.75]"
          >
            Customised, handcrafted sandooks for your daughter to carry the legacy
            of her home with her as she steps into the journey of building her own.
          </p>

          <div className="mt-10">
            <a
              href={waLink(
                "Hi Sandook Story! I'd love to begin my sandook story.\n\nName:\nWedding date:\nCity:\n\nThank you!"
              )}
              target="_top"
              rel="noopener noreferrer"
              data-testid="hero-preorder-cta"
              className="group inline-flex items-center gap-3 bg-sundook-maroon text-sundook-ivory px-8 md:px-9 py-4 font-sans text-[0.72rem] md:text-[0.78rem] tracking-[0.22em] uppercase hover:bg-sundook-maroon-deep transition-colors duration-300"
            >
              Begin Your Sandook Story
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>

          <a
            href="#about"
            data-testid="hero-scroll-cue"
            className="group mt-7 inline-flex items-center gap-2 font-serif italic text-base md:text-lg text-sundook-mute hover:text-sundook-maroon transition-colors duration-300"
          >
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
            Born from a mother&rsquo;s wedding gift
          </a>

          <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-x-4 md:gap-x-7 gap-y-2 font-sans text-[0.6rem] md:text-[0.68rem] tracking-[0.24em] md:tracking-[0.28em] uppercase text-sundook-mute">
            <span>Dadi Approved</span>
            <span className="text-sundook-gold">✦</span>
            <span>With Maa Ka Pyaar</span>
            <span className="text-sundook-gold">✦</span>
            <span>100% You</span>
          </div>
        </div>
      </div>
    </section>
  );
}
