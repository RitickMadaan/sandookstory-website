import { ArrowDown, ArrowRight } from "lucide-react";
import { publicAsset } from "../../lib/assets";
import { waLink } from "../../lib/whatsapp";

// Brand-supplied opening banner (1774×887). Mobile shows a 3:2 object-left
// crop so the lettering and the sitter stay in frame.
const HERO_IMAGE = publicAsset("/resources/images/hero-next-story.jpg");

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="w-full bg-sundook-ivory pt-28"
    >
      <div
        data-testid="hero-banner"
        className="relative w-full aspect-[3/2] overflow-hidden lg:aspect-[2/1]"
      >
        <img
          src={HERO_IMAGE}
          alt="A mother seated behind Sandook Story's heirloom wedding trunks — The next story could be yours."
          width={1774}
          height={887}
          loading="eager"
          fetchPriority="high"
          data-testid="hero-banner-image"
          className="block h-full w-full object-cover object-left"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-10 md:h-14 bg-gradient-to-b from-sundook-ivory to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 bg-gradient-to-b from-transparent to-sundook-ivory"
        />
      </div>

      <div
        data-testid="hero-copy"
        className="relative z-10 w-full px-6 pt-8 pb-10 bg-sundook-ivory border-b border-sundook-line md:px-12 md:pt-9 md:pb-12 lg:px-20 lg:py-16"
      >
        <div className="max-w-2xl">
          <p data-testid="hero-eyebrow" className="sundook-divider mb-6 md:mb-9">
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
            className="mt-5 md:mt-6 font-serif italic text-xl md:text-2xl lg:text-[1.7rem] text-sundook-ink/85 max-w-[44ch] leading-snug"
          >
            A piece of home for your <em>ladli</em>, on her special day.
          </p>

          <p
            data-testid="hero-subhead"
            className="mt-5 md:mt-7 font-sans text-[0.95rem] md:text-base text-sundook-ink/80 max-w-[48ch] leading-[1.75]"
          >
            Customised, handcrafted sandooks for your daughter to carry the legacy
            of her home with her as she steps into the journey of building her own.
          </p>

          <div className="mt-7 md:mt-10">
            <a
              href={waLink(
                "Hi Sandook Story! I'd love to begin my sandook story.\n\nName:\nWedding date:\nCity:\n\nThank you!"
              )}
              target="_top"
              rel="noopener noreferrer"
              data-testid="hero-preorder-cta"
              className="group flex w-full items-center justify-between gap-3 bg-sundook-maroon text-sundook-ivory px-6 md:inline-flex md:w-auto md:px-9 py-4 font-sans text-[0.72rem] md:text-[0.78rem] tracking-[0.22em] uppercase hover:bg-sundook-maroon-deep transition-colors duration-300"
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
            className="group mt-6 md:mt-7 inline-flex items-center gap-2 font-serif italic text-base md:text-lg text-sundook-mute hover:text-sundook-maroon transition-colors duration-300"
          >
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
            Born from a mother&rsquo;s wedding gift
          </a>

          <div className="mt-8 md:mt-14 grid grid-cols-3 gap-3 border-t border-sundook-line pt-5 text-center md:flex md:flex-wrap md:items-center md:gap-x-7 md:gap-y-2 md:border-0 md:pt-0 font-sans text-[0.58rem] md:text-[0.68rem] tracking-[0.18em] md:tracking-[0.28em] uppercase text-sundook-mute">
            <span>Dadi Approved</span>
            <span className="hidden md:inline text-sundook-gold">✦</span>
            <span>With Maa Ka Pyaar</span>
            <span className="hidden md:inline text-sundook-gold">✦</span>
            <span>100% You</span>
          </div>
        </div>
      </div>
    </section>
  );
}
