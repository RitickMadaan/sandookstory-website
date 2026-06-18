import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink } from "../../lib/whatsapp";

const links = [
  { label: "Story", href: "#about" },
  { label: "Collection", href: "#products" },
  { label: "Craft", href: "#craft" },
  { label: "Testimonials", href: "#gallery" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sundook-ivory/92 backdrop-blur-md border-b border-sundook-line"
          : "bg-transparent"
      }`}
    >
      <div className="px-5 md:px-12 lg:px-20 py-2.5 md:py-3 flex items-center justify-between gap-4">
        <a href="#top" data-testid="site-logo" className="block">
          <img
            src="/img/logo-mark.png"
            alt="Sandook Story"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.href.slice(1)}`}
              className="font-sans text-[0.72rem] tracking-[0.22em] uppercase text-sundook-ink/80 hover:text-sundook-maroon transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink(
              "Hi Sandook Story! I'd love to begin my sandook story."
            )}
            target="_top"
            rel="noopener noreferrer"
            data-testid="header-enquire-cta"
            className="font-sans text-[0.7rem] tracking-[0.24em] uppercase bg-sundook-maroon text-sundook-ivory px-5 py-3 hover:bg-sundook-maroon-deep transition-colors duration-300"
          >
            Enquire
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-sundook-maroon"
          aria-label="Toggle menu"
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-sundook-ivory/97 backdrop-blur-md border-t border-sundook-line"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-[0.18em] uppercase text-sundook-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_top"
              rel="noopener noreferrer"
              data-testid="mobile-enquire-cta"
              className="mt-3 inline-block text-center font-sans text-[0.72rem] tracking-[0.22em] uppercase bg-sundook-maroon text-sundook-ivory px-6 py-3"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
