import { ArrowUpRight } from "lucide-react";
import { publicAsset } from "../../lib/assets";
import { waLink } from "../../lib/whatsapp";

// NOTE: Product photos are placeholders until the customer-supplied images arrive.
// Maps existing assets to the new product roster from the brand copy doc.
const products = [
  {
    id: "maharani",
    name: "Maharani Sandook",
    tagline: "For those paving their legacy.",
    description:
      "Our flagship bridal sandook for the first‑generation owners embracing their roots. Regal on the outside, roomy on the inside — to carry your legacy with you as you head into a new phase of your life. And to one day reminisce and pass down to your next generations.",
    size: "Flagship · Bridal Trunk",
    img: publicAsset("/resources/images/maharani.jpg"),
  },
  {
    id: "madhubala",
    name: "Madhubala Sandook",
    tagline: "For the sandook already waiting in your home.",
    description:
      "Bring us your family trunk, and we will bring it back to life — silky smooth fabric, an antique‑polished metal finish, and details customised to fit your story. Carry the soul of what was inherited, while still making it yours.",
    size: "Bespoke Restoration · We travel for collection",
    img: publicAsset("/resources/images/madhubala.jpg"),
  },
  {
    id: "noor",
    name: "Noor Collection",
    tagline: "For shringar and shagun.",
    description:
      "A dainty handcrafted box — perfect as a gift for the bride or her bridal party. Made for extra bindis, last‑minute pins, lipsticks, choodas, kalliras and all the tiny things that will forever be part of their wedding story.",
    size: "Petite · Shagun & Shringar",
    img: publicAsset("/resources/images/noor.jpg"),
  },
];

export default function Products() {
  return (
    <section
      id="products"
      data-testid="products-section"
      className="relative bg-sundook-blush py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="sundook-divider mb-6">
            <span>The Collection</span>
          </p>
          <h2 className="font-serif text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] text-sundook-ink leading-[1.05] tracking-tight">
            Your sandook,
            <br />
            <em className="font-serif italic text-sundook-maroon">
              as hatke as your wedding Pinterest board.
            </em>
          </h2>
          <p className="mt-6 font-sans text-[0.95rem] md:text-base text-sundook-ink/80 max-w-xl leading-[1.8]">
            Each piece is made to order, thoughtfully customised, and created to
            belong in the middle of your big fat Indian wedding.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
          {products.map((p, i) => (
            <article
              key={p.id}
              data-testid={`product-card-${p.id}`}
              className="group bg-sundook-ivory border border-sundook-line flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-sundook-blush">
                {p.video ? (
                  <video
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={p.img}
                    preload="metadata"
                    aria-label={p.name}
                  >
                    <source src={p.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <span className="absolute top-4 left-4 bg-sundook-ivory/95 backdrop-blur-sm px-3 py-1 font-sans text-[0.58rem] tracking-[0.28em] uppercase text-sundook-maroon">
                  No. {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="font-serif text-[1.55rem] md:text-[1.7rem] text-sundook-ink leading-tight">
                  {p.name}
                </h3>
                <p className="mt-1.5 font-serif italic text-sundook-maroon text-base md:text-lg">
                  {p.tagline}
                </p>
                <p className="mt-4 font-sans text-[0.88rem] text-sundook-ink/75 leading-[1.75]">
                  {p.description}
                </p>
                <div className="mt-5 pt-4 border-t border-sundook-line font-sans text-[0.6rem] tracking-[0.26em] uppercase text-sundook-mute">
                  {p.size}
                </div>
                <a
                  href={waLink(
                    `Hi Sandook Story! I'd like to know more about the ${p.name}.\n\nName:\nWedding date:\nCity:\n\nThank you!`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`product-quote-btn-${p.id}`}
                  className="mt-5 group/cta inline-flex items-center justify-between border border-sundook-ink/70 px-5 py-3 font-sans text-[0.68rem] tracking-[0.22em] uppercase text-sundook-ink hover:bg-sundook-maroon hover:border-sundook-maroon hover:text-sundook-ivory transition-all duration-300"
                >
                  Enquire on WhatsApp
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href={waLink(
              "Hi Sandook Story! I'd love to begin my sandook story.\n\nName:\nWedding date:\nCity:\n\nThank you!"
            )}
            target="_top"
            rel="noopener noreferrer"
            data-testid="products-section-cta"
            className="group inline-flex items-center gap-3 bg-sundook-maroon text-sundook-ivory px-9 py-4 font-sans text-[0.75rem] tracking-[0.22em] uppercase hover:bg-sundook-maroon-deep transition-colors duration-300"
          >
            Begin Your Sandook Story
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
