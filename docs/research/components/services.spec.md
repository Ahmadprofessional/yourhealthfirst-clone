# Services Specification

## Overview
- **Target file:** `src/components/Services.tsx`
- **Interaction model:** static grid, no hover/click interaction beyond a placeholder "learn more" link (href="#" on the live site, non-functional).
- Data: `services` from `@/data/services` (`src/data/services.ts`) — already created with all 15 items, exact verbatim copy, and image paths.

## DOM Structure
1. Kicker "services" (small, uppercase, gold)
2. Heading "Discover personalized skin care solutions"
3. Grid of 15 service cards (map over the `services` array — do not hand-write the 15 cards, use the data file).

### Each card
- Image (square, source is 1024×1024 — display at a smaller fixed size, e.g. 96-160px, object-cover, rounded)
- Title (H-tag, was H2 on the source but use H3 here since Services heading is the page's H2 — semantic nesting)
- Description (2-4 sentences)
- "learn more" link with a small trailing arrow icon (`ArrowRightIcon` from `@/components/icons`)

## Computed Styles

### Card container
- backgroundColor: `rgba(209, 174, 131, 0.16)` — a very light tan tint. In Tailwind, use `bg-tan/16` (arbitrary opacity) or `bg-[rgba(209,174,131,0.16)]`.
- padding: `24px`
- borderRadius: `8px`

### Card title
- `font-heading` (Open Sans) or similar, medium-bold, color `#505A49` or darker — size roughly 18-20px (these are card-level headings, smaller than section headings).

### Card description
- Inter Tight, `16px`, weight `500`, lineHeight `25.6px`, color `#505A49`.

### "learn more" link
- Small, uppercase, `text-gold` or `text-tan`, `13px`, weight `600`, letterSpacing `1px`, Inter Tight — matches the general small-button style used site-wide.

## IMPORTANT — image reuse note
On the live site, only the first 5 cards have unique thumbnail images (Anti Wrinkles, Cryolipolysis, Sunekos, Emsculpt Neo, Phlebotomy). The remaining 10 cards ALL reuse the exact same placeholder image (a Guasha massager stock photo, unrelated to the treatment). This is the real site's actual content (not a scraping gap) — the `services` data file already encodes this via `/images/services/placeholder.png` for those 10. Reproduce faithfully, do not source/generate unique images for them.

## Text Content
All 15 service titles + full descriptions are already in `src/data/services.ts` — use that data verbatim, do not retype.

## Responsive Behavior
- **Desktop (1440px):** grid, likely 3 columns (15 cards / 3 = 5 rows) — use `grid-cols-3` as a reasonable default (exact column count wasn't pixel-measured, but 3 fits a 15-item set cleanly and matches the boxed container width of an Elementor site).
- **Tablet (768px):** 2 columns.
- **Mobile (390px):** 1 column, full width, cards stacked.
- Use Tailwind: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` (or similar) on the `.map()` wrapper.
