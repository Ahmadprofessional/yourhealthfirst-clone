# FaqAccordion Specification

## Overview
- **Target file:** `src/components/FaqAccordion.tsx`
- **Interaction model:** click-driven accordion. Only one panel open at a time (standard accordion behavior — opening one closes any other open panel).
- Data: `faqs` from `@/data/site` — 6 items, `{ question, answer }`. All 6 share identical placeholder answer text (real site content, not a scraping gap — reproduce as-is).
- Consider using shadcn/ui's `Accordion` component if already available (`npx shadcn@latest add accordion` — check `src/components/ui/` first; if not present, add it, or build a simple custom accordion with `useState<number | null>` for the open index — either approach is fine).

## DOM Structure
1. Kicker "faqs" (small, uppercase, gold)
2. Heading "frequently asked questions"
3. Accordion list, 6 items, each: question (button, toggles panel) + answer (collapsible panel).

## Computed Styles
- Kicker: `text-gold`, uppercase, small.
- Heading: `font-heading` (Open Sans), large, dark text (`#505A49` or near-black) — light background section.
- Question button: medium-bold, dark text, likely with a +/chevron icon on the right that rotates on open (standard accordion affordance — not pixel-measured, use a chevron that rotates 180deg on open, ~200ms transition).
- Answer text: Inter Tight, `16px`, weight `500`, lineHeight `25.6px`, color `#505A49`.
- Panel border: light divider between items (e.g. `border-b border-tan/20`) — a reasonable default consistent with the site's tan accent, exact border color/width wasn't measured.

## States & Behaviors
- **Trigger:** click on question button.
- **State A (collapsed):** answer panel height 0 / hidden, chevron pointing down.
- **State B (expanded):** answer panel expands to content height, chevron rotates to point up.
- **Transition:** height/opacity transition, ~250-300ms ease (standard accordion pattern — the source uses Bootstrap-style `.collapse` classes, which default to ~350ms).

## Text Content (verbatim — already in `faqs` data)
Questions:
1. How do I book an appointment?
2. What skin conditions do you treat?
3. Do I need a consultation before treatment?
4. Are the treatments safe for all skin types?
5. How long does a treatment session take?
6. When will I see treatment results?

All 6 answers: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast" (verbatim, identical for all 6 — this IS the real site's placeholder content).

## Responsive Behavior
- **Desktop (1440px):** boxed container, comfortable max-width (~800-900px) for readability, centered.
- **Mobile (390px):** full-width, same accordion behavior, reduce padding.
