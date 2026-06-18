# Sandook Story — From the Heart of a Mother

## Original Problem Statement
Build a polished, modern landing page for a mother-daughter brand designing personalised bridal sandooks (heirloom trunks) inspired by the Indian sandook tradition. Sections required: Hero, About Us, Product Line (3 products), Customisation & Quality, Gallery/Testimonials, Process timeline, Contact CTA.

## User Choices
- **Brand name:** Sandook Story
- **Contact mechanism:** "Enquire on WhatsApp" (no backend storage)
- **Imagery:** Tasteful placeholders for now; user will supply real images later
- **Contact details:** WhatsApp, email, and Instagram are configured in `frontend/src/lib/whatsapp.js`

## Architecture
- Static single-page React site (CRA + CRACO). No backend is required or present.
- All CTAs deep-link to `https://wa.me/<phone>?text=<prefilled message>` via `lib/whatsapp.js`.
- Sections componentised under `frontend/src/components/sections/`.
- Tailwind is extended with the Sandook Story palette. Runtime images and fonts are local under `frontend/public/resources`.

## User Personas
- **The Bride** — discovering heirloom trunk for her own wedding
- **The Mother / Family Member** — gifting a daughter / DIL a meaningful trunk
- **Restoration Customer** — wanting to revive an existing family sandook

## What's Been Implemented (2025-12)
- Sticky glassmorphism header with anchor nav + mobile menu
- Hero with bridal-trunk background, ivory wash for legibility, and WhatsApp CTA
- About section — mother-daughter story with locally hosted founder image and filigree corners
- Products section — Maharani, Madhubala, and Noor cards with locally hosted images and WhatsApp enquiry links
- Customisation & Craft section — 6 craft pillars in bento grid + brand-words marquee
- Gallery & Testimonials — Embla carousel with 3 testimonial slides + prev/next + dot nav
- Final CTA on maroon background — urgency line, WhatsApp + email CTAs, contact cards (WhatsApp / Email / Instagram)
- Footer with brand mark and copyright line
- GitHub Pages workflow for deploying the static `frontend/build` artifact
- All interactive elements carry `data-testid` attributes

## Tested
- Static production build passes with `npm run build`.
- Local browser smoke test passes: page loads, console is clean, images/fonts load from `/resources`, and no removed branding remains.

## Prioritized Backlog
- **P1** Replace placeholder or temporary imagery with final brand-approved local images in `frontend/public/resources/images`
- **P1** Keep WhatsApp number, email, and Instagram handle current in `frontend/src/lib/whatsapp.js`
- **P2** SEO meta tags, OpenGraph image, and structured data (Organization + Product)
- **P2** Add an Instagram link/preview section only if it can remain static and privacy-friendly
- **P3** Add a static contact alternative for international buyers without WhatsApp, such as a mailto CTA
- **P3** Multilingual (Hindi) toggle

## Next Tasks
1. Drop in final brand-approved images.
2. Confirm contact details before launch.
3. Enable GitHub Pages from GitHub Actions in repository settings.
