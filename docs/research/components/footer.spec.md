# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static.
- Data: `contact` object from `@/data/site` (`{ phone1, phone2, email, address }`), `navLinks` from `@/data/site` (reuse a subset: Home/About/Services/Contact for the Quick Link column — note the footer's real hrefs on the live site are slightly inconsistent, e.g. "About" points to a broken placeholder link on the source; just link to sensible internal routes: `/`, `/about-us`, `/services`, `/contact-us`).
- Icons: `FacebookIcon`, `XTwitterIcon`, `InstagramIcon` from `@/components/icons` (the source's third social link is labeled "Youtube" in its accessibility text but its actual `href` points to an Instagram profile URL — use `InstagramIcon`, trust the real destination over the mislabeled visible text), plus `PhoneIcon`, `EnvelopeIcon`, `MapPinIcon`, `MobileIcon` for the contact list.

## DOM Structure
Dark full-bleed footer, single column stacking into a few logical groups (desktop likely arranges these as a top row + columns — exact grid wasn't pixel-measured, use a clean 3-4 column layout):
1. Clinic name heading: "YourHealthFirst Clinic"
2. Social icons row: Facebook, X/Twitter, Instagram (see icon note above) — link to:
   - Facebook: https://www.facebook.com/Yourhealthfirstsofia
   - X/Twitter: https://twitter.com/YHFHarleyStreet
   - Instagram: https://www.instagram.com/yourhealthfirst_clinic_/?hl=en
3. CTA callout block: heading "NOT SURE EXACTLY WHO WOULD YOU LIKE TO SEE ?" + "DON'T WORRY!" (emphasized/bold line) + body "Our adviser will be sure to book you in the right clinic with the best medical practitioner to meet your needs." + two buttons: "Call Now" (href `tel:02072253582`) and "Email Now" (href `mailto:info@yourhealthfirst.uk`).
4. "Quick Link" column: heading + list — Home (/), About (/about-us), Services (/services), Contact (/contact-us).
5. "contact" column: heading (lowercase "contact" per source) + list with icons:
   - Phone icon + "0207 225 3582" (tel:02072253582)
   - Mobile icon + "078 1847 4041" (tel:07818474041)
   - Envelope icon + "info@yourhealthfirst.uk" (mailto:)
   - Map-pin icon + "2 Wimpole Street W1G 0EB / London, UK"

## Computed Styles

### Footer background
- backgroundColor: `rgb(153, 115, 49)` (`--brown-gold` → `bg-brown-gold`) — full-bleed, same warm brown-gold as the Testimonials section.
- Text color on this bg: use white/cream throughout (light-on-dark), consistent with Testimonials.

### "Call Now" / "Email Now" buttons
Two distinct button styles were captured on the live site here:
- One button: bg `rgb(156, 68, 22)` (`bg-rust`), text black or white depending on which — use white text for contrast, no border-radius (square).
- Other variant: bg `rgb(156, 68, 22)` (`bg-rust`), white text — both buttons can share this same rust styling (both computed samples returned the same rust background); pad `16px 26px`, fontSize `13px`, fontWeight `600`, uppercase, letterSpacing `1px`, Inter Tight.

### Headings ("Quick Link", "contact", clinic name)
- `font-heading` or `font-subheading`, white/cream, medium-bold.

## Text Content (verbatim)
- "YourHealthFirst Clinic"
- "NOT SURE EXACTLY WHO WOULD YOU LIKE TO SEE ?"
- "DON'T WORRY!"
- "Our adviser will be sure to book you in the right clinic with the best medical practitioner to meet your needs."
- "Call Now" / "Email Now"
- "Quick Link" / Home, About, Services, Contact
- "contact" / 0207 225 3582, 078 1847 4041, info@yourhealthfirst.uk, 2 Wimpole Street W1G 0EB / London, UK

## Responsive Behavior
- **Desktop (1440px):** multi-column layout (e.g. clinic/social | CTA block | quick links | contact), roughly 3-4 columns.
- **Mobile (390px):** stack all groups vertically, full width, generous spacing between groups.
