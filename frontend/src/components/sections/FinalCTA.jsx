import { ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { publicAsset } from "../../lib/assets";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WA_DISPLAY,
  waLink,
} from "../../lib/whatsapp";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-sundook-maroon text-sundook-ivory py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-sans text-[0.65rem] md:text-[0.7rem] tracking-[0.36em] uppercase text-sundook-gold flex items-center justify-center gap-3">
          <span className="text-sundook-gold">✦</span>
          Hurry — only 12 slots available
          <span className="text-sundook-gold">✦</span>
        </p>
        <h2
          data-testid="final-headline"
          className="mt-6 font-serif text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight"
        >
          Embrace your roots
          <br />
          and <em className="font-serif italic">create your legacy</em> with us.
        </h2>

        <div className="mt-9 flex justify-center">
          <a
            href={waLink(
              "Hi Sandook Story! I'd love to begin my sandook story.\n\nName:\nWedding date:\nCity:\n\nThank you!"
            )}
            target="_top"
            rel="noopener noreferrer"
            data-testid="final-whatsapp-cta"
            className="group inline-flex items-center gap-3 bg-sundook-ivory text-sundook-maroon px-9 py-4 font-sans text-[0.72rem] md:text-[0.78rem] tracking-[0.22em] uppercase hover:bg-sundook-blush transition-colors duration-300"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            Begin Your Sandook Story
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 max-w-3xl mx-auto">
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value={WA_DISPLAY}
            href={waLink()}
            testid="contact-whatsapp"
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
            testid="contact-email"
          />
          <ContactCard
            icon={Instagram}
            label="Instagram"
            value={INSTAGRAM_HANDLE}
            href={INSTAGRAM_URL}
            testid="contact-instagram"
          />
        </div>
      </div>

      <div className="relative mt-16 pt-7 border-t border-sundook-ivory/20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <img
          src={publicAsset("/resources/images/logo-banner.png")}
          alt="Sandook Story"
          className="h-10 md:h-12 w-auto object-contain opacity-95"
        />
        <p className="font-sans text-[0.66rem] tracking-[0.25em] uppercase text-sundook-ivory/65 text-center">
          © {new Date().getFullYear()} · From the heart of a mother · Made slowly in India
        </p>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href, testid }) {
  return (
    <a
      href={href}
      data-testid={testid}
      target="_top"
      rel="noopener noreferrer"
      className="group flex flex-col items-center p-5 md:p-6 border border-sundook-ivory/20 hover:border-sundook-gold/70 hover:bg-sundook-ivory/5 transition-all duration-300"
    >
      <Icon size={20} strokeWidth={1.25} className="text-sundook-gold" />
      <p className="mt-3 font-sans text-[0.6rem] tracking-[0.3em] uppercase text-sundook-ivory/65">
        {label}
      </p>
      <p className="mt-2 font-serif text-base md:text-lg text-sundook-ivory group-hover:italic transition-all break-words text-center">
        {value}
      </p>
    </a>
  );
}
