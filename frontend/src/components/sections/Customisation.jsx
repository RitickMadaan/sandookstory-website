import { Heart, Sparkles, Infinity as InfinityIcon, Clock, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "100% Dadi Approved",
    body: "In a world moving too quickly past old traditions, some of us are still holding on to our roots. This is for us.",
  },
  {
    icon: Sparkles,
    title: "Unique, Just Like You",
    body: "Your wedding dates, your family motifs, your colour palette, your little quirks — everything customised to feel perfect for your big day.",
  },
  {
    icon: InfinityIcon,
    title: "Built To Last",
    body: "This is not just for the wedding week. It is for the day you open it years later. And for your child who asks where it came from.",
  },
  {
    icon: Clock,
    title: "Perfected With Time",
    body: "Each trunk takes 3 to 4 weeks to make. During that time, you receive progress photos — every bit of care that goes into your sandook.",
  },
  {
    icon: MapPin,
    title: "Shipped Across India",
    body: "Carefully created, insured and dispatched to every state. From Srinagar to Kanyakumari, your sandook reaches home safely.",
  },
  {
    icon: Users,
    title: "A Mumma–Beti Venture",
    body: "We understand your needs because we have been there. Every sandook is crafted with the same thought as if it were being made for hamari beti.",
  },
];

export default function Customisation() {
  return (
    <section
      id="craft"
      data-testid="craft-section"
      className="relative bg-sundook-ivory py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="sundook-divider mb-6">
            <span>Crafted With Love</span>
          </p>
          <h2 className="font-serif text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] text-sundook-ink leading-[1.05] tracking-tight">
            Six small promises,
            <br />
            <em className="font-serif italic text-sundook-maroon">
              one big sandook story.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sundook-line border border-sundook-line">
          {features.map((f) => (
            <div
              key={f.title}
              data-testid={`craft-card-${f.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="bg-sundook-ivory p-8 md:p-10 hover:bg-sundook-blush transition-colors duration-500"
            >
              <div className="flex items-start justify-between">
                <f.icon
                  size={26}
                  strokeWidth={1.25}
                  className="text-sundook-maroon"
                />
                <span className="text-sundook-gold text-base">✦</span>
              </div>
              <h3 className="mt-6 font-serif text-[1.55rem] md:text-2xl text-sundook-ink leading-tight">
                {f.title}
              </h3>
              <p className="mt-3 font-sans text-[0.9rem] text-sundook-ink/75 leading-[1.75]">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-y border-sundook-line py-6">
          <div className="marquee-track items-center gap-12">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-12 pr-12">
                {[
                  "Heritage",
                  "✦",
                  "Heirloom",
                  "✦",
                  "Handcrafted",
                  "✦",
                  "Timeless",
                  "✦",
                  "Emotional",
                  "✦",
                  "Premium",
                  "✦",
                ].map((w, i) => (
                  <span
                    key={`${idx}-${i}`}
                    className={`font-serif italic text-2xl md:text-3xl whitespace-nowrap ${
                      w === "✦" ? "text-sundook-gold not-italic" : "text-sundook-ink/65"
                    }`}
                  >
                    {w}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
