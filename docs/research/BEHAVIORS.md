# Behaviors — nweb.yourhealthfirst.uk

## Header / Nav
- **Interaction model:** static, NOT scroll-driven. `position: static`, no sticky/fixed behavior confirmed via computed styles at scroll 0 and after scrolling.
- **Mobile menu (< tablet breakpoint):** click-driven off-canvas. Hamburger button (rust `#9C4416` square, "≡"-style icon) toggles `.elementskit-menu-container` to add class `active` (`display:flex`) plus a full-screen `.elementskit-menu-overlay` (`active`, `display:block`). Panel background cream `#EDE4D3`ish, nav items stacked vertically, uppercase, black text except the active/current item ("HOME") in white. Close via "X" button (same rust square, top-right of panel).
- No transition duration was measurable from computed styles alone (classes toggle instantly in DOM); assume a simple `opacity`/`transform` CSS transition (~0.3s) consistent with the plugin (ElementsKit off-canvas menu) — do not over-invent, a plain slide/fade is sufficient.

## Hero
- Static hero, NOT a carousel despite two duplicate hero markup blocks existing in the DOM — those duplicates are `display:none` at all breakpoints (dead Elementor markup left over from editing). Do not build a slider.
- "discover more" button: outline-style, gold text/border per computed styles captured in the hero card, no observed hover-state change during recon (treat as a simple opacity/brightness hover, standard button affordance).

## Testimonials
- **Interaction model:** click/swipe-driven carousel (Swiper.js — `swiper-slide`, `swiper-slide-active`, `swiper-slide-next` classes present). Two real slides (Sophia K., Daniel H.). Arrows/pagination present per the earlier accessibility dump ("1 / 2" and "2 / 2" group labels plus a `list` of 5 dot/thumbnail links per slide group — treat as pagination dots or avatar-thumbnail nav, standard Swiper pattern).
- Slide content: circular avatar photo, quote text, name (bold), role ("Patient") below name.

## FAQ Accordion
- **Interaction model:** click-driven accordion (Bootstrap-style `collapse` classes + ElementsKit accordion widget, ids like `collapse-93d338e6...`). One panel open at a time is typical for this widget; only one panel's content was reachable in the accessibility tree at a time, consistent with standard accordion behavior (expand/collapse, other panels close).
- All 6 answers share identical placeholder text — reproduce as-is (real site content, not a scraping gap).

## Services Grid
- Static grid, no click/hover interaction observed beyond a `learn more` link (href="#", non-functional placeholder on the live site).

## Scroll sweep findings
- No scroll-snap (`scroll-snap-type: none` on html/body and every top-level section, verified via computed styles).
- `scroll-behavior: smooth` is set on `<html>` — anchor-link nav (`#`) will animate; this occasionally made `window.scrollTo` reads land at an intermediate value mid-animation during recon (not a real "scroll-jacking" feature, just smooth-scroll in flight).
- No IntersectionObserver-driven state changes, no parallax, no sticky sidebar detected on this page.
- Elementor's own scroll-triggered entrance animations (fadeInLeft/fadeInUp/fadeInRight/fadeIn CSS files are loaded as global assets) are likely applied to individual widgets via data attributes — treat as generic fade/slide-up-on-scroll-into-view for headings and cards; exact per-widget assignment wasn't itemized during recon given the size of the page. A safe default: fade+slight-translate-up on scroll into view, ~0.5-0.6s ease-out, applied once.

## Responsive sweep
- **Desktop (1440px):** as described in PAGE_TOPOLOGY.md.
- **Mobile (375px):** header collapses to logo + hamburger; off-canvas nav panel as described above. Hero/content stacks to single column (not individually re-verified per section given page length — apply standard Tailwind `flex-col` stacking for every multi-column section; this is a standard Elementor responsive site with no exotic mobile-only layouts observed).
- Tablet breakpoint not separately swept in detail; treat as an intermediate step between the two (2-column grids where desktop is 3-5 columns, per standard Elementor container defaults).
