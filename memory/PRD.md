# SUNDOOK — From the Heart of a Mother

## Original Problem Statement
Build a polished, modern landing page for a mother-daughter brand designing personalised bridal sandooks (heirloom trunks) inspired by the Indian sandook tradition. Sections required: Hero, About Us, Product Line (3 products), Customisation & Quality, Gallery/Testimonials, Process timeline, Contact CTA.

## User Choices
- **Brand name:** SUNDOOK — FROM THE HEART OF A MOTHER
- **Contact mechanism:** "Enquire on WhatsApp" (no backend storage)
- **Imagery:** Tasteful placeholders for now; user will supply real images later
- **Contact details:** Placeholder phone / email / Instagram

## Architecture
- Static single-page React site (CRA + craco). No backend endpoints used.
- All CTAs deep-link to `https://wa.me/<phone>?text=<prefilled message>` via `lib/whatsapp.js`.
- Sections componentised under `frontend/src/components/sections/`.
- Tailwind extended with a SUNDOOK color palette (ivory/blush/sage/maroon) and fonts Cormorant Garamond + Manrope.

## User Personas
- **The Bride** — discovering heirloom trunk for her own wedding
- **The Mother / Family Member** — gifting a daughter / DIL a meaningful trunk
- **Restoration Customer** — wanting to revive an existing family sandook

## What's Been Implemented (2025-12)
- Sticky glassmorphism header with anchor nav + mobile menu
- Hero with bridal-trunk background, ivory wash for legibility (mobile-tuned), "Join the Waiting List" + "Explore the Collection" CTAs
- About Us section — mother-daughter story, stats, pull-quote, framed image with filigree corners
- Products section — three cards (Bridal Keepsake Trunk, Trousseau Trunk, Heirloom Restoration Service) each with image, dimensions and WhatsApp "Request a Quote"
- Customisation & Craft section — 6 craft pillars in bento grid + brand-words marquee
- Gallery & Testimonials — Embla carousel with 3 testimonial slides + prev/next + dot nav
- Process timeline — 5 numbered steps (Inquiry → Consultation → Deposit → Production → Delivery)
- Final CTA on maroon background — urgency line, WhatsApp + email CTAs, contact cards (WhatsApp / Email / Instagram)
- Footer with brand mark and copyright line
- Mobile responsive (verified at 390×844)
- All interactive elements carry `data-testid` attributes

## Tested
- Iteration 1 (frontend): 10/10 functional checks passed; minor mobile subhead clipping fixed post-test.

## Prioritized Backlog
- **P1** Replace placeholder Unsplash/AI imagery with real workshop and customer photos when the founder provides them
- **P1** Wire real WhatsApp number, email, Instagram handle into `/app/frontend/src/lib/whatsapp.js`
- **P2** Add an Instagram feed strip below the gallery (Instagram Basic Display API)
- **P2** Add a tiny "Order Tracker" page so deposited clients see weekly progress photos
- **P2** SEO meta tags, OpenGraph image, structured data (Organization + Product)
- **P3** Add a discreet "lead form" alternative to WhatsApp for international buyers without WA
- **P3** Multilingual (Hindi) toggle

## Next Tasks
1. Drop in real images & contact details
2. Optional: light analytics (already has PostHog from template)
3. Decide if a "first batch" countdown banner would help urgency
