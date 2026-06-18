import { ArrowDown, ArrowRight } from "lucide-react";
import { waLink } from "../../lib/whatsapp";

// Brand-supplied banner photo: a wedding setup with the Sandook Story trunks.
const HERO_IMG = "/img/banner.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full min-h-[100vh] overflow-hidden bg-sundook-blush"
    >
      {/* Background image */}
      <img
        src={HERO_IMG}
        alt="A Sandook Story wedding setup of handcrafted bridal trunks"
        data-testid="hero-banner-image"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Editorial warm wash — solid on the left text panel, fading image in on the right */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ backgroundColor: "rgba(246, 240, 232, 0.94)" }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, #F6F0E8 0%, #F6F0E8 38%, rgba(246,240,232,0.9) 52%, rgba(246,240,232,0.35) 74%, rgba(246,240,232,0) 94%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sundook-ivory/30 via-transparent to-sundook-ivory/55" />

      {/* Thin gold filigree top line */}
      <div className="absolute top-24 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-px bg-sundook-gold/40 z-10" />

      {/* Content */}
      <div className="relative z-10 min-h-[100vh] flex items-center px-6 md:px-12 lg:px-20 xl:px-28 pt-32 pb-20 md:pb-24">
        <div className="max-w-2xl">
          <p data-testid="hero-eyebrow" className="sundook-divider mb-9">
            <span className="sm:hidden">A Mumma–Beti Venture</span>
            <span className="hidden sm:inline">A Mumma–Beti Venture · From the Heart of a Mother</span>
          </p>

          <h1
            data-testid="hero-headline"
            className="font-serif font-medium text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.4rem] text-sundook-ink leading-[1] tracking-tight"
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
            of her home with her — as she steps into the journey of building her own.
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
