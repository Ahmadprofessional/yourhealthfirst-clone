# Testimonials Specification — CORRECTED (v2)

> v1 was wrong: it described a single-slide carousel on a flat brown background. The real section is a **static 2-up card grid** over a **photo + gold→black gradient**. Values below are from the visible section (`data-id="5ec430e0"`) at 1440×900 and match the rebuilt component box-for-box.

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Interaction model:** effectively static. The markup is an ElementsKit Swiper (`ekit_testimonial_style_5`) but it renders `slidesPerView: 2` with exactly 2 slides, so both cards are always visible and nothing moves. No arrows are visible. Build it as a plain grid — do not add a carousel library or prev/next controls.

## Section (`5ec430e0`) — 1425×554
- `background-image: url(plantadea-T7uYDZTVcu0-unsplash.jpg)`, `background-size: cover`, `background-position: 0% 0%`; `background-color: rgb(153,115,49)`.
- `::before` overlay: `linear-gradient(rgb(153,115,49) 0%, rgb(0,0,0) 100%)`, `opacity: 0.9`, absolute, full size.
- `padding: 0 20px`. Inner: `max-width: min(100%, 1400px)`, `padding: 100px 0`, `display:flex; flex-direction:row; gap:40px`.
- Local asset: `/images/testimonials-bg.jpg`.

## Left column (`5f64fd8d`) — 488×354, flex column, gap 24px
| Element | Box | Style |
|---|---|---|
| Badge `a5048bc` | [20,957,153,38] | `padding: 8px 12px`, `border: 0.8px solid #fff`, `border-radius: 25px` |
| ↳ H2 "testimonials" | [33,966,128,21] | Inter Tight 13px/20.8px 600, ls **3px**, white, uppercase |
| H2 heading | [20,1020,488,110] | Montserrat **50px/55px** 500, ls **-1.8px**, uppercase. Base color **black**; inner `<div>` "what our" is **`rgb(209,174,131)`** → two-tone: tan line 1, black line 2 |
| Paragraph | [20,1154,430,66] | Inter Tight 16px/25.6px 500, ls -0.2px, **white**, `margin-bottom: 14.4px`, width 430 |
| Button "more testimonials" | [20,1243,262,55] | Playfair Display SC 18px/18px 600, ls 0.6px, tan, uppercase, transparent bg, `border: 2.4px solid tan`, radius 8px, padding 16px 26px |

## Right column (`5909159f`) — 857×354
- Two cards of **421×354**, `margin-right: 15px` on each slide → gap 15px (421+15+421 = 857).

### Card (`.elementskit-single-testimonial-slider`)
- `padding: 30px`, `border-radius: 8px`, `border: 1.6px solid rgb(209,174,131)`, `box-shadow: 9px 11px 14px 0 rgba(0,0,0,0.1)`, background transparent (`rgba(237,228,211,0)`).

| Part | Box | Style |
|---|---|---|
| Stars `ul.elementskit-stars` | [1405,989,358,26] | 5 × `li` 16px wide, `margin-right: 5px`; star color **`rgb(254,196,45)`** |
| Quote text `p` | [1405,1045,358,128] | Inter Tight 16px/25.6px 500, ls -0.2px, **white**, `margin: 30px 0` |
| Bio row | [1405,1203,358,77] | flex row, `justify-content: space-between` |
| ↳ Avatar img | [1405,1203,70,70] | 70×70, `border-radius: 50%`, `margin-right: 20px` |
| ↳ Name `strong` | [1495,1215,91,25] | Playfair Display SC **21px/25.2px** 500, ls -1px, **tan**, uppercase |
| ↳ Role `span` | [1495,1246,38,16] | Inter Tight 13px/25.6px **400**, white |
| Quote watermark | [1728,1242,35,37] | `position:absolute; right:30px; bottom:30px`, glyph `icon-quote2` 35px, **tan**. Cloned as `QuoteIcon` in `icons.tsx` (the original is an ekiticons font glyph, so this is a close SVG stand-in, not a byte-exact path) |

## Content (verbatim)
- Badge: "testimonials" · Heading: "what our" / "patient say" (grammatically "say", keep)
- Intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
- Both cards carry the identical placeholder quote; names "Sophia K." and "Daniel H.", both role "Patient". Avatars `/images/testimonials/patient-1.jpg`, `patient-2.jpg`.

## Responsive
- Desktop: two columns (488 | 857), cards side by side.
- Below `lg`: left column stacks above the cards; cards drop to one per row below `sm`.
