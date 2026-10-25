import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "It reached us safe and secure. Sending love from my mom and the rest of my family.",
    name: "Deepak Soni",
    context: "Welcome Bahurani Sandook · For his wife Kritika · Himachal",
  },
  {
    quote:
      "We received it, thank you so much. My mumma and nani love it.",
    name: "Alankritika",
    context: "Radha Krishna Sandook · For Sasu Maa · Patna",
  },
  {
    quote:
      "I completely left it in your and Aunty ji's hands, and look at the results. I'm absolutely awestruck. It's not just a sandook, but something made with so much care and affection, which makes it even more precious. Dil se thank you.",
    name: "Soni",
    context: "Maharani Collection · Hyderabad",
  },
  {
    quote:
      "We really liked the hard work and effort put together in the Sandook. Thank you so much for that.",
    name: "Awanish",
    context: "Madhubala Collection · Delhi",
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
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
              <span>Real customer words</span>
            </p>
            <h2 className="font-serif text-[2rem] sm:text-3xl md:text-4xl lg:text-[2.8rem] text-sundook-ink leading-[1.1] tracking-tight">
              Real words,
              <br />
              <em className="font-serif italic text-sundook-maroon">
                after the unboxing.
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
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-card-${i}`}
              className="flex-[0_0_92%] sm:flex-[0_0_72%] md:flex-[0_0_55%] lg:flex-[0_0_44%] xl:flex-[0_0_38%] px-3 md:px-4"
            >
              <figure className="bg-sundook-ivory border border-sundook-line p-8 md:p-12 h-full flex flex-col">
                <Quote
                  size={26}
                  strokeWidth={1.25}
                  className="text-sundook-maroon mb-5"
                  aria-hidden="true"
                />
                <blockquote className="font-serif italic text-lg md:text-xl lg:text-[1.35rem] text-sundook-ink leading-snug flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-sundook-line">
                  <p className="font-serif text-base md:text-lg text-sundook-maroon">
                    {t.name}
                  </p>
                  <p className="font-sans text-[0.62rem] tracking-[0.24em] uppercase text-sundook-mute mt-1">
                    {t.context}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            data-testid={`gallery-dot-${i}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-1.5 transition-all duration-300 ${
              selected === i ? "bg-sundook-maroon w-10" : "bg-sundook-ink/20 w-5"
            }`}
            aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
            aria-current={selected === i ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
