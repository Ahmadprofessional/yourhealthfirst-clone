# WhyChooseUs Specification

## Overview
- **Target file:** `src/components/WhyChooseUs.tsx`
- **Interaction model:** static.
- Data: `whyChooseFeatures` from `@/data/site` — 4 items, `{ title, description }`.
- Icons: `UserIcon`, `EditIcon`, `CogIcon`, `CheckCircleIcon` from `@/components/icons`, in this exact order (matches feature order).

## DOM Structure
1. Kicker "why choose us" (small, uppercase, gold)
2. Heading "Experience Trusted Dermatology Care With Sofia"
3. Grid/row of 4 feature items, each: icon + heading + body text.
   1. Experienced Practitioner — `UserIcon`
   2. Personalized Care — `EditIcon`
   3. Advanced Technology — `CogIcon`
   4. Trusted & Safe Care — `CheckCircleIcon`

## Computed Styles

### Section background
- backgroundColor: `rgb(237, 228, 211)` (`--color-cream` / `bg-cream`) — full-bleed cream background for the whole section.

### Kicker / heading
- Kicker: `text-gold`, uppercase, small.
- Heading: `font-heading` (Open Sans), large, dark text (`#505A49` or near-black) — this section has a light bg so use dark text (unlike Testimonials/Footer which are dark-bg-light-text).

### Feature item heading
- Medium weight, `font-subheading` (Montserrat) or `font-heading`, ~18-20px, dark color, possibly `text-tan` (`#D1AE83`) to match the site's H3 pattern (H3 elsewhere on the site uses `rgb(209, 174, 131)`, Montserrat, uppercase, letterSpacing `-1px`) — use that H3 styling for these 4 feature titles since they're the closest semantic match found during recon:
  - fontFamily: Montserrat, fontSize `18px`, fontWeight `500`, lineHeight `21.6px`, letterSpacing `-1px`, color `rgb(209, 174, 131)`, textTransform `uppercase`.

### Feature body text
- Inter Tight, `16px`, weight `500`, lineHeight `25.6px`, color `#505A49`.

### Icons
- Render at a moderate size (~40-48px), color `text-gold` or `text-tan` to match the site's warm palette, inside a circular or square soft-background badge (e.g. `bg-gold/10 rounded-full p-3`) for visual weight — exact icon-badge styling wasn't captured, use a tasteful default consistent with the rest of the site's icon treatment.

## Text Content (verbatim — all 4 titles/descriptions already in `whyChooseFeatures` data, do not retype, just map over it)

## Responsive Behavior
- **Desktop (1440px):** 4 columns in a row.
- **Tablet (768px):** 2x2 grid.
- **Mobile (390px):** 1 column, stacked.
- Use Tailwind: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`.
