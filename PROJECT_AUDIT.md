# PROJECT AUDIT: Signature Affair Club, Phase 1 (homepage)

**Reference:** https://cindysupdateddemo.base44.app/ (Base44 build: Vite + React + Tailwind CSS v3 + shadcn/ui + Framer Motion)
**Audit date:** 2026-11-23
**Method:** Playwright (Chromium 1255). I inspected the rendered DOM and computed styles at all five target viewports, took full-page chunked screenshots, and read the reference's shipped CSS (`index-DBT-EXxE.css`) and component bundle (`routes-BwPq255W.js`).

Because the reference is a compiled React app, its shipped bundle includes every section's markup, Tailwind classes, copy, data, animation parameters and interaction logic. I used that bundle as the source of truth for exact values instead of estimating them from screenshots.

---

## 1. Homepage section breakdown (original order)

| # | Section | Anchor | Background | Summary |
|---|---------|--------|------------|---------|
| 0 | **Header** (fixed) | none | Frosted glass bar | Wordmark "Cindy Baird / REALTOR®", divider, Keller Williams "Golden Isles" badge (xl+), 6 nav links, phone (xl+), "Let's Talk" CTA (sm+), menu button (<lg). Height is 76px and shrinks to 66px after 24px of scroll. |
| 1 | **Hero** | `#top` | Hero photo (coastal home under live oaks) | Script "Home Sweet Agent", H1 "I'll help you find *the home you've been imagining.*", intro paragraph, 2 CTAs, "Cindy" signature, office line. A **search bar** (`#search`) sits at the bottom: Buy/Sell toggle, Area, Home type, dual price slider, "Send Me Homes". |
| 2 | **Find your island life** | `#island-life` | Oyster | Illustrated coastline map with 7 community pins, a community photo card with a glass overlay, and a "What's My Home Worth?" CTA. On mobile and tablet, a row of chips also switches communities. |
| 3 | **Cindy's eye for design** | none | Sea-oat | Glass copy card plus a draggable **before/after kitchen slider** with 3 callouts. |
| 4 | **Buying and selling, the thoughtful way** | `#buying`, `#selling` | Oyster | Two photo cards (7/12 and 5/12 columns) with 4 checklist points each and cream CTAs. |
| 5 | **Featured listing** | `#featured-listing` | Sea-oat | Photo with "New Listing" tag, plus a details card (placeholder address, price, beds and baths) and 2 CTAs. |
| 6 | **Recently sold** | `#sold` | Marsh green | Horizontal snap carousel of 8 sold homes with prev/next buttons and a disclaimer. |
| 7 | **Hello, I'm Cindy** | `#about` | Oak-road photo with gradient | Portrait with a "Living on St. Simons since 2000" pill, a bio card, script signature, 3 value chips and "Let's Talk". |
| 8 | **Every move matters** | `#help` | Oyster | 7 glass service cards with staggered vertical offsets on desktop (`lg:mt-*`). |
| 9 | **Curious what your home could sell for?** | `#home-value` | Marsh photo with 78% green overlay | Glass home-valuation form with 10 fields. |
| 10 | **Kind words** plus a CTA band | none | Sea-oat | 3 sample testimonials (offset), then a lighthouse banner reading "Let's find your *home sweet home.*" with "Let's Talk" and "Call (912) 996-3195". |
| 11 | **Footer** | `#contact` | Marsh green with oak texture at 14% | Brand column, brokerage, quick links, contact, Equal Housing logo, licence line, © year, Privacy/Terms. |
| 12 | **Mobile action bar** (fixed, <md) | none | Glass | "Call Cindy" and "Let's Talk". |

The site has no announcement bar.

---

## 2. Design specifications

### Colour tokens (HSL, from `:root`)
| Token | Value | Usage |
|---|---|---|
| `--oyster` | `40 35% 93%` | Page background and light sections |
| `--seaoat` | `40 41% 84%` | Alternate sections |
| `--moss` | `74 16% 62%` | Map fills |
| `--marsh` | `139 15% 29%` | Headings, dark sections, footer |
| `--tidewater` | `200 30% 34%` | Italic heading accent on light backgrounds |
| `--golden` | `38 54% 54%` | Primary CTA, eyebrows, accent on dark backgrounds |
| `--driftwood` | `30 10% 16%` | Body text |
| `--destructive` | `0 62% 42%` | Form errors |

### Typography
| Role | Family | Details |
|---|---|---|
| Headings | **Libre Caslon Display** 400 (Google) | Letter-spacing −0.02em. Italic accents are browser-synthesised because the font has no italic file. H1 is `clamp(2.45rem,5.6vw,4.25rem)` with line-height 1.06. H2s are about `clamp(1.95rem,4vw,3.1rem)` with line-height 1.1. |
| Body / UI | **Jost** 400/500/600 (Google) | Body is 17px with line-height 1.65. Buttons are 0.78rem, 600, uppercase, tracking 0.16em. Eyebrows are 0.72rem, 600, tracking 0.22em. |
| Script | **Homemade Apple** (Google) | "Home Sweet Agent", "Cindy", "Cindy Baird" |

### Layout
- `.shell` container: max-width 1240px. Side padding is 20px, then 32px from 640px, then 48px from 1024px, so content is 1144px wide on desktop.
- `.sec` vertical padding: 80px, then 96px from 640px, then 112px from 1024px.
- Breakpoints (Tailwind defaults): 640 / 768 / 1024 / 1280.

### Surfaces and effects
- `.glass`: `rgba(255,255,255,.64)`, `backdrop-filter: blur(22px) saturate(120%)`, 1px white border at 72%, radius 28px, shadow `0 24px 60px -30px #2e2a2666`.
- `.glass-sm`: radius 20px, blur 18px.
- Card and photo radius is 28px. The featured-listing frame is 34px with a 26px inner radius.
- Signature pill button: 52px tall, fully rounded, label, a 1px divider at 20% opacity, and an arrow area that slides 4px on hover. There are five variants: golden, glass, marsh, cream and ghostLight. Golden turns marsh green on hover. All transitions run for 500ms.

### Animations
| Effect | Spec |
|---|---|
| Word-by-word heading reveal | Each word starts at opacity 0 and 0.45em lower, staggered 55ms, 0.9s long, easing `cubic-bezier(.2,.7,.2,1)`, triggered once on scroll into view. |
| Block reveal | Opacity 0 and 26px lower, 0.9s, triggered once in view with a −60px margin. Cards are staggered. |
| Hero line-art intro | A golden SVG house sketch draws itself (each path 1.5s, offset by 45ms), then fades over 1.6s once 2.2s have passed. |
| Hero ambient | Photo zoom from 1.02 to 1.12 (26s, alternating) and a golden radial glow that drifts (22s). |
| Map | Coastline sways (14s) and pin dots pulse (2.8s). |
| Community switch | Crossfade with blur from 14px to 0 and scale from 1.04 to 1. |
| Before/after | A one-time "peek" sweep of 50 to 74 to 50 over 2.4s when 45% visible. Callouts fade in once the handle passes 42%. |
| Hovers | Buy/Sell and sold-card photos zoom (scale 1.06 and 1.07). Service cards lift 6px. Nav links get an animated underline. |
| Reduced motion | Every animation is disabled when `prefers-reduced-motion` is set. |

---

## 3. Responsive behaviour

| Viewport | Behaviour observed |
|---|---|
| **1440 × 900** | Full header including the brokerage badge and phone. Search bar on one row. Map and community card side by side. Services in 3 offset columns. Footer in 4 columns. |
| **1280 × 800** | Same as 1440, inside the 1144px shell. |
| **1024 × 768** | The brokerage badge and phone leave the header (xl only). Nav stays visible. Two-column layouts remain. |
| **768 × 1024** | Hamburger menu, single-column stacks, community chips above the map, map pins without labels, a 2-column services grid, testimonials in 3 columns. Footer in 1 column. |
| **390 × 844** | Same as tablet but narrower. The header "Let's Talk" is hidden (<sm). A fixed bottom bar shows "Call Cindy" and "Let's Talk". The hero uses a vertical overlay gradient. Buttons go full width. Before/after callouts are hidden. |

The page never scrolls horizontally at any size.

---

## 4. Interaction inventory

| Component | Behaviour |
|---|---|
| Nav links | Smooth-scroll to section anchors (`#top`, `#about`, `#buying`, `#selling`, `#island-life`, `#contact`). |
| Header | Shrinks on scroll. The hamburger toggles a glass dropdown with links, "Let's Talk", phone, brokerage and address. |
| "Let's Talk" (header, about, CTA band, footer, mobile bar) | Opens the contact dialog: name, phone, email, help type, best time and message, with validation. |
| Hero CTAs | Anchor links to `#search` and `#home-value`. |
| Search bar | Buy/Sell toggle, two selects, a dual-thumb price slider ($0 to $3M+ in $50K steps). "Send Me Homes" opens a pre-filled search dialog. |
| Map pins and chips | Switch the active community with an animated photo swap. "See homes here" opens a dialog pre-filled with that area. |
| Before/after | Pointer drag, keyboard arrows (±4%) and the auto peek. |
| Buy/Sell cards | CTAs open the search dialog in Buy or Sell mode. |
| Featured listing | "Schedule a Showing" and "Ask Cindy About This Home" open the showing dialog in each mode. |
| Sold carousel | Prev/next buttons scroll by up to 520px, with native swipe and snap. |
| Home-value form | Inline validation for address, name, phone (10 digits) and email. |
| Phone and email links | `tel:` and `mailto:`. Social icons open Facebook and Instagram in a new tab. |
| Dialogs | Radix dialog: focus trap, Escape and overlay click close it, fade and zoom in. |

---

## 5. Asset inventory

I downloaded every image at its **original full resolution** from `media.base44.com` and converted it to WebP at q90, the same quality the reference CDN serves. Nothing was substituted.

| File (`src/assets/images/`) | Original | Used in |
|---|---|---|
| hero.webp | 1280×720 | Hero background |
| st-simons, sea-island, jekyll, hampton-point, brunswick, country-club, darien | 1152×864 / 1024² | Community card |
| before.webp, after.webp | 1152×864 | Before/after slider |
| family-beach.webp, living-room.webp | 1280×720 / 1152×864 | Buying / Selling cards |
| featured.webp | 1024² | Featured listing |
| sold-colony, sold-peachtree, sold-grand-oaks, sold-commons, sold-redfern, sold-shady-brook, restaurant, commercial | 1152×864 / 1024² | Sold carousel |
| oak-road.webp | 1024² | About background |
| portrait.webp | 864×1152 | Cindy's portrait (labelled "Placeholder" in the original) |
| marsh.webp | 1280×720 | Home-value background |
| lighthouse.webp | 1152×864 | CTA band |
| oak-texture.webp | 1536×1024 | Footer texture |
| `src/app/icon.png` | Original logo | Favicon |

- **Fonts:** the same Google Fonts families and weights, self-hosted through `next/font`.
- **Icons:** Lucide SVG paths, copied exactly from the reference bundle into `src/components/ui/Icons.tsx`.
- **Inline SVGs:** the Equal Housing mark, the map illustration, the hero line art and the arrow glyph are reproduced from the source.
- **Missing assets:** none.

---

## 6. Content notes

The reference itself contains placeholder content, which I kept exactly as it appears:
- "[Listing address]", "[Price]", "[Beds]" and similar fields in the featured listing.
- "Placeholder photo · …" tags on listing and sold photos, and "Placeholder · Cindy's portrait".
- "[Sold price]" for the restaurant and commercial sales.
- "Sample testimonials, shown while Cindy gathers her clients' own words and permission."
