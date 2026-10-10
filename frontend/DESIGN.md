# Sandook Story — Design System

Extracted from the existing landing page. Sources of truth: `tailwind.config.js`
(`sundook` palette, fonts, keyframes), `src/index.css` (decorative utilities),
and the section components in `src/components/sections/`. Every visual value in
new work should trace back to a token or pattern listed here.

## Brand palette (exact, from brand book)

| Token | Hex | Use |
| --- | --- | --- |
| `sundook-ivory` | `#F6F0E8` | Page/section backgrounds, light scrims, inverted CTA text |
| `sundook-blush` | `#E8DDD2` | Soft beige panels, light CTA hover |
| `sundook-rose` | `#D8B6B1` | Muted rose accents |
| `sundook-gold` | `#C6A062` | Heritage gold — `✦` ornaments, icon accents, hairlines, filigree |
| `sundook-brass` / `sage-deep` | `#B58A4A` | Antique brass (alias) |
| `sundook-maroon` | `#7A1E2C` | Primary brand color — CTAs, heading accents, text selection |
| `sundook-maroon-deep` | `#5C1620` | Primary CTA hover |
| `sundook-ink` | `#2C2A29` | Body text |
| `sundook-mute` | `#5C5856` | Secondary text, labels, ghost links |
| `sundook-line` | `#E5DDD2` | Hairline borders |

## Typography

- **Display/headings:** Cormorant Garamond (`font-serif` / `font-display`),
  weight 500, tight tracking, italic `<em>` accents in maroon.
- **Body/labels/buttons:** Inter (`font-sans`).
- Scale (existing usage):
  - Hero h1: `text-[2.6rem]` → `xl:text-[5.4rem]`, `leading-[1]`, capped at
    `max-w-[15ch]`
  - Section h2: `text-[2.2rem]` → `lg:text-[4rem]`, `leading-[1.05–1.1]`
  - Body: `text-[0.95rem]`–`base`, `leading-[1.75–1.85]`, measure 44–60ch
  - Eyebrow/labels: `text-[0.6–0.7rem]`, `tracking-[0.22–0.36em]`, uppercase

## Spacing & layout

- Tailwind default scale; sections: `py-16 md:py-24`, `px-6 md:px-12 lg:px-20`.
- Content measures: `max-w-2xl` (hero copy), `max-w-6xl`/`max-w-7xl` (grids).
- **Corners are square** — CTAs and cards carry no border radius; the editorial
  aesthetic depends on it. (`--radius: 0.25rem` exists only for shadcn tokens.)

## Components

- **Primary CTA:** `bg-sundook-maroon text-sundook-ivory`, uppercase
  `tracking-[0.22em]`, `px-8/9 py-4`, lucide arrow with
  `group-hover:translate-x-1`, hover `bg-sundook-maroon-deep`.
- **Ghost/link CTA:** serif italic, `text-sundook-mute` → maroon hover.
- **Cards:** 1px `border-sundook-ivory/20` (on maroon) or `border-sundook-line`,
  gold lucide icons, hover border in gold.
- **Icons:** lucide-react only, `strokeWidth 1.25–1.5`, sizes 14–20.
- **Hero glass panel:** hero copy and CTAs sit over the banner art on a
  frosted-glass panel — `bg-sundook-ivory/70 backdrop-blur-md`, subtle 1px
  `border-white/50`, square corners, `p-6 md:p-10`, `max-w-2xl`
  left-anchored (`mx-6 md:mx-12 lg:mx-20`, `my-8 md:my-12`). The hero is
  static: no film, no playback control.
- **Testimonial card:** `<figure>` with `bg-sundook-ivory`, 1px
  `border-sundook-line`, square corners, `p-8 md:p-12`. Lucide `Quote` icon
  (26px, `strokeWidth 1.25`, maroon, `aria-hidden`) at top. Body is a
  `<blockquote>` in serif italic (`text-lg md:text-xl lg:text-[1.35rem]`,
  ink, `leading-snug`). `<figcaption>` separated by a 1px
  `border-sundook-line` top border (`mt-7 pt-5`): first line is name in
  serif maroon (`text-base md:text-lg`); second line is context label
  (`text-[0.62rem]`, `tracking-[0.24em]`, uppercase, mute).
  Customer-provided names and order metadata (collection, recipient, city)
  are shown when confirmed by the customer; no data is invented. Dot
  controls are plain buttons with `aria-current` for selected state (no tab
  semantics). No star ratings or chat-bubble styling. Section header carries
  a trust disclosure: "Excerpts lightly edited for length and clarity."

## Decorative utilities (`src/index.css`)

- `.sundook-divider` — uppercase maroon eyebrow flanked by 30px hairlines.
- `.filigree-corner` — 64px gold double-border corner ornament.
- `.reveal` / `.is-visible` — scroll reveal (opacity + 20px translate, 0.9s).
- `.ornament-star` — gold `✦` separators between label spans.
- `marquee` keyframes — 40s linear infinite testimonial track.

## Motion

- Interactive elements: `transition-colors duration-300` (plus transform on
  icon hovers).
- Entrances: `fade-up` keyframe (0.8s ease-out).
- **Hero:** static — banner image with no hero-specific motion (no autoplay
  film, no playback control); only the global interactive transitions above
  apply.

## Media

- All runtime media lives under `public/resources` and is referenced through
  `publicAsset()` (`src/lib/assets.js`) so URLs stay GitHub-Pages-relative.
- Hero: `resources/images/collection-hero.jpg` — brand collection banner
  (JPEG, 1600×900) for the Maharani, Madhubala, Sasu Ma Ka Baksa, and Noor
  trunks. Rendered as the hero backdrop inside a relative container below
  the fixed header (`pt-28` clearance, ~104px header): `absolute inset-0
  w-full h-full object-cover` with explicit `width={1600} height={900}` and
  `loading="eager"`; `object-center` on mobile, `object-top` (center-top)
  from `md` up so the top of the art stays visible. The container is sized
  by the copy panel — `md:min-h-[850px]` desktop hero area that grows with
  the panel, so nothing clips; the frosted-glass copy panel sits on the art
  (see Components), not below it.
- Madhubala product card: `resources/madhubala-sandook.m4v` — restoration
  film (H.264, portrait 608×1080, ~9.8s) shown via the Products card
  conditional media markup (`autoPlay`, `muted`, `loop`, `playsInline`,
  `preload="metadata"`, same hover scale as the static cards). Poster
  fallback: `resources/images/madhubala.jpg` (the card's `img`).
- Maharani product card: `resources/maharani-sandook.m4v` — flagship bridal
  trunk film (H.264, portrait 608×1080, ~9.4s) using the same Products card
  conditional media markup. Poster fallback:
  `resources/images/maharani.jpg` (the card's `img`).
- Noor product card: `resources/noor-collection.mp4` — shringar & shagun reel
  (H.264, portrait 1080×1920, ~11s) using the same Products card conditional
  media markup. Poster fallback: `resources/images/noor.jpg` (the card's
  `img`).
