# Header / Nav Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** static (not sticky, `position: static`, confirmed via computed styles at scroll 0 and after scrolling). Mobile nav is click-driven (off-canvas).
- Data: `navLinks` from `@/data/site` (`src/data/site.ts`), already created.
- Logo asset: `/images/logo.png` (already downloaded, 488×328 source, a gold wax-seal/crest badge reading "YHF — YOURHEALTHFIRST CLINIC").

## DOM Structure
- `<header>` — full width, sits on top of the hero image (transparent background, no visual separation from hero — it overlays the hero photo directly since Header has no own background).
- Row: logo image (left) + nav (right, desktop) / hamburger button (right, mobile & tablet).
- Desktop nav: horizontal list, 5 items: Home, About Us, Services, Blogs, Contact Us.
- Mobile/tablet nav: hamburger button opens a full-panel off-canvas menu.

## Computed Styles

### Nav links (desktop, `<a>` inside nav)
- fontFamily: `Jost, sans-serif`
- fontSize: `18px`
- fontWeight: `500`
- lineHeight: `23.4px`
- letterSpacing: `-0.7px`
- color: `rgb(255, 255, 255)` (white — text sits over the dark-overlaid hero photo)
- textTransform: `uppercase`

### Logo
- Displayed size: roughly 140-160px wide on desktop (source is 488×328 — object-fit: contain, keep native aspect ratio ~1.49:1).

### Mobile hamburger button
- A solid square button, background `rgb(156, 68, 22)` (rust/brown, hex `#9C4416`), icon/glyph white, no border-radius (square corners).

### Mobile off-canvas panel (`.elementskit-menu-container.active`)
- Panel background: cream (`#EDE4D3`-ish, matches the site's `--cream` token) — fills the viewport width when open (slides in, full width observed at 375px viewport).
- Overlay: a separate full-screen dim/overlay layer behind the panel (`.elementskit-menu-overlay.active`, `display:block`).
- Nav items: stacked vertically, generous vertical spacing (~50-60px between items based on screenshot), uppercase, bold-ish sans-serif (Jost or similar).
  - Current/active item ("Home" when on `/`) renders in **white**.
  - Inactive items render in **black**.
- Close button: same rust square (`#9C4416`) with white "X", positioned top-right of the panel.

## States & Behaviors

### Mobile menu toggle
- **Trigger:** click on hamburger button.
- **State A (closed):** off-canvas panel not rendered/visible (`display:none` equivalent — use `hidden` or conditional render).
- **State B (open):** panel slides in (or fades in) covering the screen, overlay appears behind it, body scroll should be locked while open.
- **Transition:** no exact duration was measurable (class-toggle plugin); implement a simple, tasteful `transition: transform 300ms ease` (slide from the right) or `opacity 200ms ease` — either is a faithful "close enough" since the source uses a JS plugin, not a documented CSS transition.
- **Implementation approach:** React `useState` boolean, conditional classes/transform, close via `X` button, click-outside on the overlay, and `Escape` key (standard affordance — the original may not have all three, but they don't hurt).

### Desktop nav — no hover-state change was observed during recon; use a simple opacity/underline hover as a standard affordance (do not over-invent).

## Assets
- Logo: `/images/logo.png`
- No icons needed for this component (hamburger/X can be simple CSS bars or a small inline SVG "hamburger" — not extracted as a named icon since it's simple 3-line/X glyphs).

## Text Content (verbatim)
- Nav items: Home, About Us, Services, Blogs, Contact Us

## Responsive Behavior
- **Desktop (≥1024px):** logo left, horizontal nav right, no hamburger.
- **Tablet/Mobile (<1024px):** logo left, hamburger right; nav replaced entirely by the off-canvas panel described above.
- Breakpoint: use Tailwind's `lg:` (1024px) to switch, consistent with the site hiding the desktop nav below that width.
