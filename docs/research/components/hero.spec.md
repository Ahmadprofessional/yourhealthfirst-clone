# Hero (+ Trust Band) Specification — CORRECTED (v2)

> v1 of this spec was extracted from an orphaned, `display:none` copy of the hero (`data-id="5d500d"`), which used Open Sans / bright gold. These are the values from the VISIBLE hero (`data-id="c21ddd9"`) at 1440×900, verified against the rebuilt component (all boxes match within ≤4px).

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Interaction model:** static.
- Fonts: **Playfair Display SC** (`font-display`) for all hero headings/button, Montserrat (`font-subheading`) for labels, Inter Tight (`font-sans`) body.

## Layout (1440px)
- Section `c21ddd9`: `relative`, 1425×857, `display:flex; flex-direction:row`, background `url(img-.jpeg)` `cover`, position `0% 0%` (top-left).
  - Left column `42d842f`: 622×857, `padding: 160px 50px 150px 20px`, `flex-direction:column; gap:10px`. **Overlay** `::before`: `linear-gradient(90deg, rgb(0,0,0) 10%, rgb(98,86,50) 90%)`, `opacity: 0.6`, absolute, full column.
  - Right column `1d1e152`: 803×857, empty (photo shows through).

## Elements (box = [x, y, w, h])
| Element | Box | Style |
|---|---|---|
| H2 "AWARD WINNING" | [20,160,522,46] | Playfair Display SC 46px/46px 500, white, uppercase |
| H2 "Clinic" | [20,210,522,54] | Playfair Display SC 54px/54px 500, `rgb(209,174,131)`, uppercase, `margin-top:-20px` (parent gap 24px) |
| Divider | [20,288,522,24] | separator width 70% (365px), 1px tan lines with `MapleLeafIcon` 20px tan centered, `margin: 0 10px`, `padding: 2px 0` |
| H2 subheading | [20,336,522,48] | Playfair Display SC 24px/24px 500, white, `text-transform: capitalize` |
| Location icon-box | [20,394,552,47] | flex row gap 11px; `MapPinIcon` 30px tan; H3 "HARLEY STREET, LONDON" Montserrat 18px/21.6px 500 tan uppercase ls -1px; P "since 2013 & currently in 2 Wimpole Street W1G 0EB" Inter Tight 16px/25.6px 500 white |
| Button "discover more" | [20,451,217,55] | Playfair Display SC 18px/18px 600, ls 0.6px, tan, uppercase, transparent bg, border 2.4px solid tan, radius 8px, padding 16px 26px |
| Icon row | [20,516,552,73] | 4 columns × 138px, `padding: 0 2px`, `border-right: 0.8px solid tan`; each: icon 35px tan centered, H3 label Montserrat 16px/19.2px 500 tan uppercase ls -1px centered. Icons in order: Smile, Dna, MapleLeaf, Handshake |
| Trusted box | [20,599,386,108] | `padding: 20px 5px`, border 1.6px solid tan, radius 8px, flex row align-center gap 24px. Avatars: 4 × 65px circles, flex row gap 24px, each after first `margin-left:-50px` (net 39px step). Text: H2 "Trusted by 10K+ Happy Patients" Playfair Display SC 16px/19.2px 500 white uppercase, width 175px |

## Header (`988127c`) — see header.spec.md addendum
- Absolute, z 10, `padding: 0 20px`, inner max-width 1400px, height 111px.
- Logo img: [20,5,158,106].
- Nav bar (`.elementor-widget-container`): [770,37,611,37], `background: rgb(0,0,0)`, `border: 0.8px solid rgba(255,255,255,0.33)`, `border-radius: 5px`; UL flex, items centered. Each `a`: Jost 18px/23.4px 500 uppercase ls -0.7px, `padding: 0 15px`, height 35px; **current item white**, others `rgb(209,174,131)`.

## Assets
- `/images/hero-bg.jpeg`, `/images/logo.png`, avatars `/images/about/collage-{1,3,2,4}.jpg` (the same 4 group-portrait crops, 65px circles).

## Responsive
- Desktop: as above.
- Mobile (375px, live site): the hero shows only the gradient/photo with the logo + hamburger in the first viewport; text content sits further down. Clone currently stacks the content directly under the header (readable, not a 1:1 match) — pending user decision.
