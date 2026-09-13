# Page Topology — nweb.yourhealthfirst.uk

Source: WordPress + Elementor (flexbox "e-con" containers, not classic sections). Single long homepage, ~7600px tall at 1440px width.

## Stack order (top → bottom)

1. **Header / Nav** (`header.elementor-location-header`) — not sticky (`position: static`), sits directly over the hero photo. Logo left (crest/seal image), horizontal nav right (desktop), hamburger (mobile/tablet).
2. **Hero + Trust Band** (`data-id="c21ddd9"`, ~857px tall) — ONE flex container combining:
   - Hero copy: kicker "AWARD WINNING" + "Clinic" (H2s), divider, sub-heading "Health, Dermatology, Hair Loss, Anti-Aging & Rejuvenation Clinic", location line, "discover more" button. Full-bleed background photo (office desk portrait) as an absolutely-positioned sibling div covering the full 857px, with a dark gradient overlay for text contrast.
   - Below the copy block (same container): icon-box row of 4 items (Expert Care / Advance Treatment / Natural Results / Trusted & Confidential), then a 2-part "Trusted by 10K+ Happy Patients" text row.
   - NOTE: two additional copies of the hero markup exist in the DOM (`data-id="5d500d"`, `"11f88fea"`) but are `display:none` at all breakpoints (`elementor-hidden-desktop/tablet/mobile`) — dead markup, do not build them.
3. **Testimonials** (`data-id="5ec430e0"`, ~554px) — bg `rgb(153,115,49)` (warm brown-gold). Kicker "testimonials" / heading "what our patient say" + Lorem-ipsum body + "more testimonials" link. Swiper carousel (`swiper-slide`) with patient avatar, quote, name, role. 2 real slides (Sophia K. / Daniel H., both role "Patient", identical Lorem ipsum quote text).
4. **About Us + Our Promise** (`data-id="6f24c9f3"`, ~1235px) — THREE sub-blocks in one container:
   - About: kicker "about us", heading "Experts in / Rejuvenation without Surgery", body copy, long treatments list, "Ready to begin your journey?" sub-heading + CTA copy + "discover more" button. Photo collage of 5 overlapping/cropped copies of the same stock photo (`group-of-smiling-people-in-studio-portraits...jpg` and 4 `-Copy` variants), circular/oval crops per earlier screenshot framing (mirror + window + photo frames staged around a portrait photo, oval mirror frame present in hero image itself — the About collage uses its own 5-image arrangement).
   - Promise card 1: kicker "OUR PROMISE TO YOU", heading "Bespoke Treatments", 2 lines of body copy.
   - Promise card 2: kicker "OUR PROMISE TO YOU", heading "After care", body copy ending in "Safety, Aftercare, and Expertise are at the heart of everything we do." (3 bolded/highlighted keywords).
5. **Services** (`data-id="24d5e8c6"`, ~2338px) — kicker "services", heading "Discover personalized skin care solutions". Grid/wrapped-flex of **15 service cards**, each: image (1024×1024 source, displayed smaller), H2 title, 1-3 sentence description, "learn more" link (href="#", placeholder). Card style: bg `rgba(209,174,131,0.16)`, `padding:24px`, `border-radius:8px`. Only the first 5 cards have unique thumbnail images; the remaining 10 all reuse the same placeholder image (`14933-Guasha-Massager-1-1024x1024.png`) — reproduce this faithfully, it's how the live site actually looks.
6. **Why Choose Us** (`data-id="37f4af83"`, ~1089px) — bg `rgb(237,228,211)` (cream). Kicker "why choose us", heading "Experience Trusted Dermatology Care With Sofia". 4 feature items (icon + heading + body): Experienced Practitioner, Personalized Care, Advanced Technology, Trusted & Safe Care.
7. **FAQ** (`data-id="1b458653"`, ~848px) — kicker "faqs", heading "frequently asked questions". Accordion, 6 items, all sharing the exact same placeholder answer text ("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast").
8. **Footer** (`footer.elementor-location-footer`) — bg `rgb(153,115,49)` (same brown-gold as testimonials). Contains: clinic name heading + social icons (Facebook/X/Instagram, mislabeled "Youtube" in markup), a "NOT SURE EXACTLY WHO WOULD YOU LIKE TO SEE?" CTA block with Call Now / Email Now buttons, Quick Link column (Home/About/Services/Contact), Contact column (2 phone numbers, email, address).

## Layout notes
- Desktop content max-width appears to be a standard Elementor boxed container (`e-con-boxed`) — full-bleed hero/services use `e-con-full`.
- No CSS `scroll-snap` anywhere (verified via computed styles) — apparent scroll jumps during recon were just `scroll-behavior: smooth` on `<html>` finishing async, not a real interaction.
- Header `position: static` — confirmed NOT sticky on scroll.

## Global tokens (see BEHAVIORS.md for interaction notes)
- Fonts: Open Sans (kickers/H2 uppercase), Montserrat (H3), Inter Tight (body/buttons), Jost (nav). Instrument Serif, Playfair Display SC also loaded but not observed on visible elements sampled — check during component build in case a specific heading uses them.
- Colors: gold `#FFBE02` (kicker text, primary CTA bg), tan `#D1AE83` (H3, outline button), rust `#9C4416` (secondary button / mobile menu X), body text `#505A49` (dark sage), cream `#EDE4D3` (why-choose-us bg), brown-gold `#997331` (testimonials + footer bg).
