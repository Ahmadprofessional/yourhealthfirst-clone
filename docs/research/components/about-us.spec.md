# AboutUs Specification

## Overview
- **Target file:** `src/components/AboutUs.tsx`
- **Interaction model:** static.
- This is the FIRST of three sub-blocks inside the live site's combined "about us" section (`data-id="6f24c9f3"`, ~1235px tall total). This spec covers only the About Us copy + photo collage + CTA. The other two sub-blocks ("Bespoke Treatments" and "After care" promise cards) are a SEPARATE component/spec (`promise-cards.spec.md`) — do not build them here.

## DOM Structure
Two-column layout (desktop): photo collage (one side) + copy (other side).
1. Kicker "about us" (small, uppercase, gold)
2. Heading: "Experts in" / "Rejuvenation without Surgery" (two-line heading)
3. Body paragraph: "Get immediately natural and long lasting results without getting over injected, keeping a natural and most rejuvenated look without over-stuffed look, all treatments are treated with expert hands with many years of experience using the latest techniques and innovations to obtain unbeatable and natural results."
4. Treatments list paragraph: "We offer a range of treatments including; Phlebotomy Services (blood draw) Cryolipolysis, Aqualyx and Lemon Bottle both fat dissolving treatment, Botox – Anti-wrinkles injections, Dermal Fillers, Eye bags correction, Under eyes dark circles, Rhinomodelation, Revoluminization, Neck rejuvenation, Peeling, Micro-needling, Warts, Skin tags, Moles, Millia & Cherry Angioma removal, Sclerotherapy (spider veins removal), PRP-Platelet Rich Plasma for Hair loss, Hair Thinning, Alopecia Problems, PRP face, neck & hands rejuvenation, Mesotherapy, Profhilo, CryoPen, Acne Scars, Active and Non-active Acne treatment, Rosacea, Stretch Marks, Age Spots, Dark Spots, Melasma, Skin Rejuvenation and more…"
5. Sub-heading: "Ready to begin your journey?"
6. CTA paragraph: "Book with us to discuss the best options to achieve the results you want, call us today to book a consultation for a customized treatment plan created just for you."
7. Fine print: "Other Available services; Health Screening – Full body MOT – Visa Medicals & Pre-Employment- Sexual Health Screening – Blood tests –" and a disclaimer line: "***Where applicable, certain procedures will be refereed/ carried out by our affiliated clinic, by registered CQC doctor. ***" (small italic/muted text)
8. "discover more" button (href="#")

### Photo collage
5 overlapping/cropped photo tiles, all crops of the SAME stock photo (a group of smiling people in a studio portrait) — the live site literally reuses one photo 5 times at different crops/sizes to build a collage look. Use the 4 downloaded variants: `/images/about/collage-1.jpg`, `/images/about/collage-2.jpg`, `/images/about/collage-3.jpg`, `/images/about/collage-4.jpg` (reuse one of them twice for the 5th tile, e.g. collage-1 again, since only 4 unique files were captured). Arrange as an overlapping asymmetric grid of rounded-rectangle or circular photo cards (sizes observed: ~493×493 and ~468×468 — near-square), similar to a Pinterest-style photo cluster. Exact pixel positions weren't measured — use a tasteful overlapping arrangement (e.g. a large center tile with 2-4 smaller tiles offset around/behind it, slight rotation optional).

## Computed Styles

### Kicker "about us"
- color: `rgb(255, 190, 2)` (`text-gold`), uppercase, small, `font-heading` (Open Sans) or similar kicker style consistent with other sections.

### Heading "Experts in / Rejuvenation without Surgery"
- Large heading, likely dark text on white background (this section has a transparent/white bg per computed styles) — use `text-body-text` (#505A49) or a darker near-black; treat as a large serif-adjacent or the site's heading font (`font-heading`, Open Sans), NOT uppercase (mixed case here, unlike the all-caps kickers elsewhere).

### Body text
- fontFamily: Inter Tight (`font-sans` default), fontSize `16px`, fontWeight `500`, lineHeight `25.6px`, letterSpacing `-0.2px`, color `rgb(80, 90, 73)` (`text-body-text`).

### "discover more" button
- Reuse the SOLID gold variant seen elsewhere on light backgrounds: bg `rgb(255, 190, 2)` (`bg-gold`), color white, borderRadius `8px`, padding `16px 26px`, fontSize `16px`, fontWeight `600`, uppercase, letterSpacing `1px`.

## Assets
- Collage photos: `/images/about/collage-1.jpg`, `collage-2.jpg`, `collage-3.jpg`, `collage-4.jpg`

## Responsive Behavior
- **Desktop (1440px):** two columns side by side (collage | copy), collage roughly 45-50% width.
- **Tablet/Mobile:** stack to single column, collage above copy, simplify the collage to fewer overlapping tiles or a simple 2x2 grid if overlap looks cramped at narrow widths.
