# PromiseCards Specification

## Overview
- **Target file:** `src/components/PromiseCards.tsx`
- **Interaction model:** static.
- This is the SECOND+THIRD sub-blocks inside the live site's combined "about us" section — two side-by-side promise cards that appear directly below the `AboutUs` component (separate component, separate spec — see `about-us.spec.md` for that one).

## DOM Structure
Two cards, side by side on desktop, each:
- Kicker: "OUR PROMISE TO YOU" (identical on both cards, small uppercase, gold)
- Heading (different per card)
- Body copy (different per card)

### Card 1
- Heading: "Bespoke Treatments"
- Body: "Everybody is different. We strive to offer treatments that best suit your needs." + second line: "We are pioneers in Non-Invasive Aesthetic Treatments"

### Card 2
- Heading: "After care"
- Body: "We will do a close follow up after your treatment, to make sure you are happy with the results;" followed by a line with 3 emphasized/bold keywords: "Safety, Aftercare, and Expertise are at the heart of everything we do." — render "Safety", "Aftercare", "Expertise" in a highlighted color (gold or tan) or bold weight within the sentence, matching how the source visually calls them out (they appeared as separate inline spans in the accessibility tree, suggesting individual styling).

## Computed Styles
- Kicker: color `rgb(255, 190, 2)` (`text-gold`), uppercase, small, `font-heading`.
- Heading: `font-heading` (Open Sans), medium-large size (~28-32px), color dark (`text-body-text` `#505A49` or near-black) — smaller than the main AboutUs heading since these are secondary cards.
- Body: Inter Tight, `16px`, weight `500`, lineHeight `25.6px`, color `#505A49`.
- Highlighted keywords (Card 2): use `text-gold` or `text-tan` + `font-semibold`.

## Assets
None required (text-only cards; no icons were mapped to "Bespoke Treatments" / "After care" during recon).

## Responsive Behavior
- **Desktop (1440px):** 2 columns side by side, equal width, some gap (~40-60px) between them.
- **Mobile (390px):** stack to single column, full width, cards separated by vertical spacing.
