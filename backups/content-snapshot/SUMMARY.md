# Pre-Sanity Content Snapshot Summary

Generated on: 2026-10-23T13:06:22.540Z
Branch: cms/sanity-integration
Git Tag: pre-sanity-backup

## What Was Backed Up

This backup directory contains an exact, untouched copy of all live website content, structured both as raw original files and parsed per-page content packages.

### 1. Per-Page Content Snapshots (`/backups/content-snapshot/pages/`)
- `home.json`: Hero, AboutUs, PromiseCards, Services, WhyChooseUs, Testimonials, FAQs, Booking CTA.
- `about-us.json`: Doctor bio, clinic philosophy, credentials, training gallery.
- `treatments-overview.json`: Categories, treatment list summaries.
- `treatments.json`: Full clinical content for all 20 treatments (headlines, intros, benefits, procedure stages, candidate criteria, FAQs, image paths).
- `phlebotomy.json`: Specialized phlebotomy copy, blood testing panels, safety credentials.
- `sclerotherapy.json`: Sclerotherapy vein treatment copy, recovery instructions, FAQs.
- `fotoage.json`: 4 Light spectrum therapy breakdown, protocols, FAQs.
- `photobiodynamic-therapy.json`: Scientific mechanism, skin photosensitizer steps, FAQs.
- `longevity.json`: 4 Longevity medicine pillars, biomarker testing program.
- `home-skincare.json`: Medical skincare routines, active ingredients guide.
- `gallery.json`: Before & after clinical case studies, concern tags, before/after image paths.
- `price-list.json`: All treatment categories, service items, and price points.
- `blogs.json`: All published clinical articles, rich text content, reading times, authors.
- `press.json`: Press features, media quotes, article links, clipping images.
- `contact-us.json`: Clinic address (2 Wimpole Street), phone, email, hours, transport directions.
- `global-navigation.json`: Top announcement bar, navigation labels, footer regulatory badges (CQC, GMC).

### 2. Raw Verbatim Copies (`/backups/content-snapshot/raw/`)
- `messages/en.json`
- `messages/ar.json`
- `messages/es.json`
- `messages/fr.json`
- `messages/ru.json`
- `src/data/treatments.ts`
- `src/data/priceList_raw.json`
- `src/data/blogs.ts`
- `src/data/gallery.ts`
- `src/data/services.ts`
- `src/data/site.ts`
- `src/data/translations/` (complete localized directory)

---

## How to Restore

If at any point during Sanity integration any content is questioned, corrupted, or needs to be restored to this exact baseline, you have two instant restoration methods:

### Method 1: Instant Git Tag Reset (Clean Slate)
The pre-sanity repository state is permanently tagged on GitHub:
```bash
git checkout pre-sanity-backup
```
This returns the entire codebase to the pristine commit right before Sanity work began.

### Method 2: Restore Specific Files from this Snapshot
Copy any affected file directly from `/backups/content-snapshot/raw/` back to its original location:
```bash
# Example: restoring messages/en.json
cp backups/content-snapshot/raw/messages/en.json messages/en.json

# Example: restoring treatments data
cp backups/content-snapshot/raw/src/data/treatments.ts src/data/treatments.ts
```
