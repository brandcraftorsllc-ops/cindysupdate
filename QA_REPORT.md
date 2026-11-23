# QA REPORT: Signature Affair Club, Phase 1 (homepage)

**Live preview:** https://cindysupdate.vercel.app
**Reference:** https://cindysupdateddemo.base44.app/
**Tested:** 2026-11-23, Playwright 1.65 / Chromium, against both the local production build (`next start`) and the live Vercel deployment.
**Stack:** Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 3.4 (same major version as the reference), Framer Motion, Radix Dialog.

---

## 1. Completed sections

All 13 homepage components are built, in the original order:

Header · Hero with search bar · Find your island life · Cindy's eye for design · Buying & selling · Featured listing · Recently sold · Hello, I'm Cindy · Every move matters · Home value form · Kind words with CTA band · Footer · Mobile action bar.

---

## 2. Visual comparison method

The QA scripts are saved in `qa/`.

1. **Geometry (`qa/compare.js`):** both sites load at each viewport. The script scrolls the whole page so every reveal animation fires, then records:
   - the page height and width
   - the bounding box of the header bar, every section and the footer
   - the position, size, font family, size, weight, line-height, letter-spacing and colour of **every text element** on the page (about 170 per viewport)

   Any element that differs by more than 2px, or has any font or colour difference, is reported.
2. **Pixels (`qa/pixdiff.js`):** a per-pixel RGB difference of the full-page screenshots, with a heatmap (`qa/diff-*.png`).
3. **Side-by-side review:** I compared the screenshots section by section by eye.

### Results on the live deployment

| Viewport | Page height (ref / live) | Section boxes | Text elements off by >2px or with any style difference | Horizontal overflow | Console |
|---|---|---|---|---|---|
| 1440 × 900 | 9486 / 9486 | all identical | **0** | none | clean |
| 1280 × 800 | 9399 / 9399 | all identical | **0** | none | clean |
| 1024 × 768 | 9265 / 9265 | all identical | **0** | none | clean |
| 768 × 1024 | 12211 / 12211 | all identical | **0** | none | clean |
| 390 × 844 | 13725 / 13725 | all identical | **0** | none | clean |

**Whole-page pixel difference** (0–255 scale):

| Viewport | Mean difference | Pixels differing by more than 40 |
|---|---|---|
| 1440 | 1.47 | 0.47% |
| 390 | 1.09 | 0.22% |

The remaining differences are in two places:
- **Continuously animated regions:** the hero zoom and golden drift, the map sway and the pulsing pins. The two screenshots catch these loops at different moments.
- **Photo edges:** Base44's image CDN applies an unsharp-mask sharpening filter (`usm_0.66`) that Next.js image optimisation does not. The heatmap shows only edge outlines. Framing, cropping and colour are identical.

### Fidelity details verified

- **CSS:** I diffed the compiled CSS selector sets. Every utility the homepage uses exists in both stylesheets with identical values. This includes non-standard opacity steps such as `bg-white/88`, `from-marsh/92` and `via-oyster/68`, which needed an extended opacity scale.
- **Fonts and copy:** the font families, weights and synthesised italics are the same, and the copy is word-for-word.
- **Images:** all images are the original full-resolution files from the reference CDN.

---

## 3. Responsive testing

| Check | 1440 | 1280 | 1024 | 768 | 390 |
|---|---|---|---|---|---|
| Header layout (badge, phone, nav, hamburger) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Hero image crop and overlay gradient | ✅ | ✅ | ✅ | ✅ | ✅ (vertical gradient) |
| Search bar (one row / stacked) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Community chips (<lg) / pin labels (lg+) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Card grids and offsets | ✅ | ✅ | ✅ | ✅ | ✅ |
| Footer columns | ✅ | ✅ | ✅ | ✅ | ✅ |
| Mobile action bar (<md only) | n/a | n/a | n/a | n/a | ✅ |
| No horizontal scroll | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 4. Functional interactions

These are automated with `qa/interact.js` and run against the live site. **21 of 21 pass.**

| Interaction | Result |
|---|---|
| Header shrinks from 76px to 66px on scroll | PASS |
| Nav anchor smooth-scrolls to its section | PASS |
| Buy/Sell toggle | PASS |
| Dual price slider updates the label ($400K – $2.5M) | PASS |
| "Send Me Homes" opens the dialog with the selected mode and area | PASS |
| Dialog validation (name, phone, email) | PASS |
| A valid submission shows the Phase 1 notice (see §5) | PASS |
| Escape closes the dialog | PASS |
| Map pin switches the community card | PASS |
| Before/after slider: mouse drag | PASS |
| Before/after slider: keyboard arrows | PASS |
| Sold carousel next/prev | PASS |
| Home-value form validation (4 required fields) | PASS |
| Golden button hover turns marsh green | PASS |
| Mobile action bar visible | PASS |
| Mobile menu opens | PASS |
| Mobile menu link navigates and closes the menu | PASS |
| Mobile community chips | PASS |
| Mobile "Let's Talk" opens the dialog | PASS |
| No runtime or console errors (desktop and mobile) | PASS |

I also confirmed these by inspection:
- word-by-word heading reveals and the card fade-ups
- the hero line-art intro
- the before/after peek sweep: it runs frame-for-frame with the reference (50 → 62 → 73 → 63 → 50)
- photo hover zooms
- link underlines
- the reduced-motion fallbacks

---

## 5. Deliberate differences and limitations

1. **Forms are not connected to a backend (Phase 1 scope).** The reference posts leads to a Base44 server function. This build keeps every form, dialog, field and validation rule. A valid submission does **not** pretend to send. It shows: *"Thank you! Online requests are being connected in the next phase of the site — for now, please call Cindy at (912) 996-3195."* The reference's "Thank you, {name}!" screen will return once a real endpoint is wired up.
2. **Before/after slider drag fix.** In the reference, a mouse drag on the slider stops early because the browser starts a native image drag and cancels the pointer events. I measured this in both builds: the drag stopped at 46% instead of 20%. I suppressed native drag (`onDragStart`), so the slider now follows the mouse the whole way. Nothing visual changes.
3. **Image sharpening.** The reference CDN applies light unsharp-mask sharpening; Next.js does not. The difference is subtle and shows only on photo edges.
4. **Placeholder content is inherited from the reference.** Examples include "[Listing address]", "[Price]", the "Placeholder photo" tags and the sample testimonials. These are the original copy and need the client's real data in a later phase.
5. **Off-page links.** All nav links point to on-page anchors, as in the reference, so no extra pages were needed. The social icons link to the generic facebook.com and instagram.com home pages, also as in the reference.
6. **Deployment protection.** The per-deployment URL (`cindysupdate-*-projects.vercel.app`) is behind Vercel team SSO. Share the public alias **https://cindysupdate.vercel.app** with the client.

---

## 6. Build and deployment

- `npm run build` succeeds with no TypeScript errors. The page is statically prerendered.
- Tailwind prints a harmless warning about `duration-[1200ms]`, `[1400ms]` and `[1600ms]` being ambiguous. The reference's Tailwind skipped those same classes, so the resulting CSS is identical.
- Deployed with Vercel CLI 59.3. The live deployment passed the full geometry, pixel and interaction suite above.
