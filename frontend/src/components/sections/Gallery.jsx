import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const slides = [
  {
    quote:
      "It felt like Delhi, Bhopal and Jaipur had all packed themselves into one trunk and come home with me. I opened it on my mooh dikhai and started crying.",
    name: "Ananya R.",
    role: "Bride · Delhi → Edinburgh",
  },
  {
    quote:
      "Maa sent over my dadi's old trunk in pieces. They returned it with her name engraved exactly the way she used to sign her letters. My mother wept.",
    name: "Meher S.",
    role: "Restoration · Madhubala Sandook",
  },
  {
    quote:
      "Every one of my five bridesmaids got a Noor box. The little notes inside were the start of every speech, every laugh, every sob at the haldi.",
    name: "Ishita & the bridal squad",
    role: "Noor Collection · Mumbai",
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
  }, [emblaApi]);

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative bg-sundook-blush py-16 md:py-24"
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="sundook-divider mb-5">
              <span>Testimonials</span>
            </p>
            <h2 className="font-serif text-[2rem] sm:text-3xl md:text-4xl lg:text-[2.8rem] text-sundook-ink leading-[1.1] tracking-tight">
              The Sandook stories of
              <br />
              <em className="font-serif italic text-sundook-maroon">
                those who came before you.
              </em>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              data-testid="gallery-prev"
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="w-11 h-11 border border-sundook-ink/40 flex items-center justify-center text-sundook-ink hover:bg-sundook-maroon hover:border-sundook-maroon hover:text-sundook-ivory transition-colors duration-300"
              aria-label="Previous"
            >
              <ChevronLeft strokeWidth={1.5} />
            </button>
            <button
              data-testid="gallery-next"
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="w-11 h-11 border border-sundook-ink/40 flex items-center justify-center text-sundook-ink hover:bg-sundook-maroon hover:border-sundook-maroon hover:text-sundook-ivory transition-colors duration-300"
              aria-label="Next"
            >
              <ChevronRight strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef} data-testid="gallery-carousel">
        <div className="flex">
          {slides.map((s, i) => (
            <div
              key={i}
              className="flex-[0_0_92%] sm:flex-[0_0_72%] md:flex-[0_0_55%] lg:flex-[0_0_44%] xl:flex-[0_0_38%] px-3 md:px-4"
            >
              <div className="bg-sundook-ivory border border-sundook-line p-8 md:p-12 h-full flex flex-col">
                <Quote
                  size={26}
                  strokeWidth={1.25}
                  className="text-sundook-maroon mb-5"
                />
                <p className="font-serif italic text-lg md:text-xl lg:text-[1.35rem] text-sundook-ink leading-snug flex-grow">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div className="mt-7 pt-5 border-t border-sundook-line">
                  <p className="font-serif text-base md:text-lg text-sundook-maroon">
                    {s.name}
                  </p>
                  <p className="font-sans text-[0.62rem] tracking-[0.24em] uppercase text-sundook-mute mt-1">
                    {s.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            data-testid={`gallery-dot-${i}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-1.5 transition-all duration-300 ${
              selected === i ? "bg-sundook-maroon w-10" : "bg-sundook-ink/20 w-5"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
