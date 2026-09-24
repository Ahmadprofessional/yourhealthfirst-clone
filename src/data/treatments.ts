export interface TreatmentFaq {
  question: string;
  answer: string;
  /** Optional structured sections (heading + bullet points) shown below the answer */
  sections?: {
    heading: string;
    points: string[];
  }[];
}

export interface TreatmentGallery {
  folder: string;
  prefix: string;
  count: number;
  ext: string;
}

export interface HowItWorksStep {
  icon: string;
  title: string;
  description: string;
}

export interface TreatmentDetail {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  intro: string;
  body: string[];
  benefits: string[];
  suitableFor: string[];
  /** Specific body areas the treatment can be applied to, shown as its own list alongside "Who Is It For?" */
  treatmentAreas?: string[];
  /** Supporting photo + heading for the treatment-areas hero card section (falls back to a plain layout if omitted) */
  treatmentAreasImage?: { src: string; alt: string };
  treatmentAreasHeading?: { main: string; accent: string; subtitle: string };
  /** Icon-card variant of the treatment-areas section — maps each treatmentAreas label to an icon name */
  treatmentAreaIcons?: Record<string, string>;
  /** Small trust badges shown under the "Who Is It For" card in the icon-card variant */
  trustBadges?: { icon: string; label: string }[];
  results: string;
  priceFrom?: string;
  faqs: TreatmentFaq[];
  gallery?: TreatmentGallery;
  /** YouTube video ID shown as an embedded explainer video */
  videoId?: string;
  /** Self-hosted video file (mp4) shown as an embedded explainer video, used instead of videoId */
  videoUrl?: string;
  /** Two-up feature cards with a supporting image (e.g. benefit highlights) */
  featureImages?: {
    title: string;
    description: string;
    image: string;
  }[];
  /** Labelled before/after image pairs shown side by side */
  beforeAfterPairs?: {
    label: string;
    before: string;
    after: string;
  }[];
  /** "How it works" 3-step feature grid, shown below the video */
  howItWorks?: {
    title: string;
    intro: string;
    steps: HowItWorksStep[];
  };
  /** Supporting diagram image (e.g. treatment areas chart) */
  diagramImage?: {
    src: string;
    alt: string;
  };
  /** Process diagrams shown under the how-it-works intro (e.g. step-by-step, before/during/after) */
  processDiagrams?: {
    src: string;
    alt: string;
  }[];
  /** Detailed price breakdown by treatment area, shown as its own section */
  priceList?: {
    area: string;
    price: string;
  }[];
  /** Detailed advantages section — title + full description cards */
  advantages?: {
    title: string;
    intro?: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  /** Feature-by-feature comparison table between two methods/options */
  comparisonTable?: {
    title: string;
    columnLabels: [string, string];
    rows: {
      feature: string;
      a: string;
      b: string;
    }[];
  };
  /** Alternating image/text split sections (image on one side, heading + body on the other) */
  imageTextSections?: {
    image: string;
    alt: string;
    heading: string;
    body: string[];
    imagePosition?: "left" | "right";
  }[];
  /** Prominent before/aftercare instructions section, grouped by timeframe */
  careInstructions?: {
    title: string;
    intro?: string;
    groups: {
      heading: string;
      points: string[];
      warning?: boolean;
    }[];
  };
  /** Medical contraindications — who should NOT have this treatment */
  contraindications?: {
    title: string;
    items: string[];
  };
}

export const treatmentDetails: TreatmentDetail[] = [
  {
    slug: "anti-wrinkles",
    title: "Anti-Wrinkle Injections",
    tagline: "Smooth, refresh and subtly lift — with expert precision",
    category: "Face & Anti-Aging",
    image: "/images/services/anti-wrinkles.png",
    intro:
      "Anti-wrinkle injections are one of the most popular non-surgical treatments available, used to soften facial lines and wrinkles while preserving natural expression. At YourHealthFirst, every treatment is carefully tailored to your facial anatomy and aesthetic goals.",
    body: [
      "Anti-wrinkle injections, often using Botox, are commonly employed to address a range of cosmetic and medical concerns. They are used to treat frown lines, crow's feet and forehead lines. Additionally, Botox injections may be used to alleviate bunny lines on the nose, lift the corners of the mouth, address platysmal bands ('turkey neck'), reduce the appearance of a bobbly chin, smooth fine lines around the mouth, and even manage excessive sweating problems (a condition known as hyperhidrosis). Botox, with its muscle-relaxing properties, is a widely recognised and effective choice for these treatments.",
      "Wrinkles are a natural part of the ageing process. With age, our skin gets thinner and drier and we lose elastin. The ability of our skin to protect itself is reduced as we age. Eventually, wrinkles, creases and lines form on our skin.",
      "Continuous muscle contraction is also a major contributor to facial wrinkles. Continuous muscle movement causes 'dynamic wrinkles', which only appear when the muscle is used. Over time, if left untreated, these wrinkles become 'static wrinkles' — meaning they become difficult to remove and, over time, permanently etched into the skin.",
      "Anti-wrinkle treatments work by temporarily preventing muscles from contracting. For the underarms, the injections block the nerves responsible for your sweat glands — only stopping the nerves that are directly injected — reducing the amount of active sweat glands and leaving you feeling more confident and comfortable when you're sweat-free.",
      "Dr Sofia carries out a thorough assessment at every consultation to ensure the right dose is placed in exactly the right location. Results typically become visible within 3–7 days and last between 3–6 months depending on the area and individual metabolism. With regular treatment, many patients find that results last longer over time.",
    ],
    benefits: [
      "Reverses the signs of ageing and dramatically diminishes the appearance of wrinkles",
      "Relaxes the facial muscles, resulting in smoother skin and fewer wrinkles",
      "Brow lift and lifted corners of the mouth",
      "Known as the 'lunchtime' cosmetic procedure — no downtime, return to normal activities immediately",
      "Provides a more fresh, rested and youthful appearance",
      "Prevents wrinkles from becoming static over time",
      "Helps improve shape and asymmetry in the face",
      "Slims the jawline by relaxing the masseter muscles",
      "Corrects gummy smile",
      "Helps to stop excessive sweating (hyperhidrosis)",
      "Helps with bruxism — weakens masticatory muscles to prevent clenching and teeth grinding",
    ],
    suitableFor: [
      "Adults concerned about facial lines and wrinkles",
      "Those seeking a non-surgical brow lift",
      "Patients with jaw clenching or teeth grinding",
      "People with hyperhidrosis (excessive sweating)",
    ],
    results: "First results visible in 3–14 days, lasting 3–6 months",
    priceFrom: "£120",
    gallery: {
      folder: "/images/gallery/botox",
      prefix: "botox",
      count: 14,
      ext: "jpeg",
    },
    faqs: [
      {
        question: "How many treatments will I need?",
        answer:
          "Most areas are treated in a single session. Some patients — particularly those treating hyperhidrosis or a gummy smile — may need a short top-up 2 weeks later if the initial dose needs fine-tuning. After that, repeat sessions every 3–6 months keep results maintained.",
      },
      {
        question: "What results can I expect?",
        answer:
          "A softened, more rested appearance in the treated area with your natural expression preserved. Dr Sofia's approach favours subtle, natural movement rather than a 'frozen' look, so you'll still be able to smile, frown and raise your brows normally.",
      },
      {
        question: "Will it 'freeze' my face and leave me expressionless?",
        answer:
          "No. When dosed and placed correctly, anti-wrinkle injections relax only the specific muscles causing the lines you want softened, while surrounding muscles continue to move naturally. This is why precise placement, not just the product itself, is what determines a natural result.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild redness, small bumps at the injection sites, or slight bruising can occur and typically settle within a day or two. Headache is occasionally reported after forehead treatment. Serious side effects are rare when performed by an experienced practitioner.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most patients describe it as a series of quick, small pinpricks rather than pain. The needles used are very fine, and the whole treatment for a typical area takes only a few minutes.",
      },
      {
        question: "How long will it last?",
        answer:
          "Results generally last 3–6 months depending on the area treated, your muscle strength and your individual metabolism. Areas like hyperhidrosis treatment can last up to 6–9 months.",
      },
      {
        question: "What can and can't I do after treatment?",
        answer:
          "Avoid lying down, rubbing the treated area, strenuous exercise or alcohol for the rest of the day. You can return to normal activities and makeup immediately afterwards.",
      },
      {
        question: "Who is suitable for anti-wrinkle injections?",
        answer:
          "Most healthy adults concerned about dynamic lines, jaw clenching, gummy smiles or excessive sweating are good candidates. Pregnant or breastfeeding women, and those with certain neuromuscular conditions, are not suitable — this is confirmed during your consultation.",
      },
      {
        question: "Does it leave my face numb?",
        answer:
          "No. Anti-wrinkle injections relax the targeted muscles but don't affect sensation — your skin remains fully able to feel touch, temperature and pressure as normal.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Most patients begin to see softening within 3–5 days, with the full effect visible by day 14. If an area still looks under-treated after 2 weeks, a top-up can be arranged.",
      },
      {
        question: "How will I look after the treatment?",
        answer:
          "You may have small bumps or slight redness at the injection points for a few hours, which settles quickly. There is no visible downtime, so most patients return straight to work or normal activities.",
      },
      {
        question: "How does anti-wrinkle treatment work?",
        answer:
          "Botulinum toxin is injected into specific facial muscles, temporarily blocking the nerve signals that cause them to contract. With the muscle at rest, the skin above it smooths out and existing lines soften over the following days.",
      },
      {
        question: "Is it safe?",
        answer:
          "Yes, when performed by an experienced, appropriately qualified practitioner using licensed products. Sofia carries out a full medical assessment at consultation to confirm suitability and agree the right dose and placement for you.",
      },
      {
        question: "What is anti-wrinkle treatment used for?",
        answer:
          "Beyond softening forehead, frown and crow's feet lines, it's also used for a non-surgical brow lift, jawline slimming, gummy smile correction and treating excessive sweating (hyperhidrosis) in the underarms, palms or feet.",
      },
    ],
  },
  {
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    tagline: "Restore volume, define contours, refresh your look",
    category: "Face & Anti-Aging",
    image: "/images/services/placeholder.png",
    intro:
      "Dermal fillers are injectable treatments using hyaluronic acid to restore lost volume, smooth deep lines and sculpt facial features. From subtle lip enhancement to full facial revolumisation, fillers deliver immediate, natural-looking results.",
    diagramImage: {
      src: "/images/treatments/dermal-fillers/injection-points-diagram.jpeg",
      alt: "Dermal fillers — common facial injection points",
    },
    priceList: [
      { area: "Lip Enhancement (Russian Lips) — 1ml", price: "£250 – £350" },
      { area: "Lip Enhancement (Russian Lips) — 2ml", price: "£550" },
      { area: "Nasolabial Folds / Marionette Lines — 1ml", price: "£375" },
      { area: "Nasolabial Folds / Marionette Lines — 2ml", price: "£700" },
      { area: "Chin Enhancement — 1ml", price: "£500" },
      { area: "Chin Enhancement — 2ml", price: "£700" },
      { area: "Cheeks / Mid Face — 1ml", price: "£500" },
      { area: "Cheeks / Mid Face — 2ml", price: "£700" },
      { area: "Non-Surgical Nose Job (Rhinoplasty)", price: "£500" },
      { area: "Glabellar Lines (Frown)", price: "£350" },
      { area: "Tear Trough / Under Eyes / Dark Circles", price: "£550" },
      { area: "Jaw-Line", price: "£450" },
      { area: "Hands Fillers", price: "£600" },
      { area: "Dissolving Filler — from another consultant", price: "£325" },
      { area: "Dissolving Filler — administered at YHF", price: "£150 (no consultation fee)" },
    ],
    body: [
      "As we age, our skin loses collagen, elastin and hyaluronic acid, leading to hollowing, sagging and deeper lines. Dermal fillers replenish this lost volume and stimulate collagen production, creating a refreshed and youthful appearance without surgery.",
      "At YourHealthFirst, Dr Sofia specialises in a wide range of filler treatments: lip enhancement using the Russian lips technique, tear trough treatment for dark circles and hollow eyes, non-surgical rhinoplasty, cheek augmentation, jawline contouring, nasolabial folds and marionette lines correction, and hand rejuvenation.",
      "All fillers used are CE/FDA-approved premium hyaluronic acid products. Treatments are performed with the utmost care for symmetry and proportion, ensuring a result that looks refreshed, not overdone. Dissolving (hyaluronidase) is also available should a correction be needed.",
      "Following a quick consultation, most dermal filler appointments take around 25 to 50 minutes from start to finish, depending on how many areas are being treated. On average, most patients choose to repeat their filler course after 4–6 months to maintain results — lip fillers in particular, when performed with premium products, tend to hold their volume for a longer-lasting effect.",
    ],
    advantages: {
      title: "Advantages of Dermal Fillers",
      intro:
        "Dermal fillers harness your body's natural hyaluronic acid to combat the signs of ageing. Here are six key advantages of choosing dermal fillers at YourHealthFirst.",
      items: [
        {
          title: "Wrinkle Reduction",
          description:
            "Dermal fillers effectively smooth out wrinkles and fine lines, restoring a more youthful appearance.",
        },
        {
          title: "Volume Restoration",
          description:
            "They add volume to areas of the face — including lips, cheeks, under eyes and jawline — that have lost fullness due to ageing, resulting in a plumper and rejuvenated look.",
        },
        {
          title: "Non-Surgical",
          description:
            "Dermal fillers offer a non-invasive alternative to surgical procedures, with little to no downtime and minimal discomfort.",
        },
        {
          title: "Natural Results",
          description:
            "When performed by a skilled professional, dermal fillers provide natural-looking results, enhancing facial features — including lip fillers — without appearing overdone.",
        },
        {
          title: "Long-Lasting Effects",
          description:
            "Depending on the type of filler used, results can last from several months to over a year.",
        },
        {
          title: "Versatility",
          description:
            "Dermal fillers offer a versatile and comprehensive treatment, suitable for addressing various areas of the face and providing a full facial rejuvenation experience.",
        },
      ],
    },
    benefits: [
      "Immediate volume restoration and contouring",
      "Softens nasolabial folds and marionette lines",
      "Enhances lips naturally using the Russian technique",
      "Reduces tear trough hollowing and dark circles",
      "Non-surgical nose reshaping",
      "Defines and contours the jawline",
      "Reversal available if required",
    ],
    suitableFor: [
      "Adults seeking non-surgical facial contouring",
      "Those with volume loss in cheeks, lips or temples",
      "Patients wanting to reduce under-eye hollowing",
      "Anyone looking for a non-surgical rhinoplasty",
    ],
    results: "Immediate results, lasting 9–18 months depending on area",
    priceFrom: "£250",
    gallery: {
      folder: "/images/gallery/dermal-fillers",
      prefix: "filler",
      count: 14,
      ext: "jpeg",
    },
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "Most filler treatments achieve their full result in a single session. Some patients choose a follow-up appointment 2–4 weeks later for minor fine-tuning once any initial swelling has settled.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Immediate, visible volume restoration or contouring in the treated area — for example plumper lips, softened nasolabial folds, or a smoother under-eye area. Results continue to settle and look even more natural over the following 1–2 weeks.",
      },
      {
        question: "Will I look overfilled or unnatural?",
        answer:
          "No — Dr Sofia's approach prioritises symmetry, proportion and a natural outcome over maximum volume. Filler is built up gradually and conservatively, and dissolving is always available if you ever want a correction.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Temporary swelling, bruising or tenderness at the injection site is common and usually resolves within a few days to a week. Lips in particular can swell noticeably for the first 24–48 hours.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "A topical numbing cream is applied before treatment in sensitive areas such as the lips, and most fillers contain a local anaesthetic within the product itself, making the procedure very tolerable for most patients.",
      },
      {
        question: "How long will it last?",
        answer:
          "Depending on the area and product used, results typically last 9–18 months. Lips tend to metabolise filler faster (6–12 months), while structural areas like cheeks and jawline can last longer.",
      },
      {
        question: "What should I do and avoid after treatment?",
        answer:
          "Avoid strenuous exercise, alcohol and excessive heat (saunas, sunbeds) for 24–48 hours, and avoid pressing on or massaging the treated area unless instructed to. Mild swelling is normal and settles within a few days.",
      },
      {
        question: "Who is suitable for dermal fillers?",
        answer:
          "Adults with volume loss, hollowing or asymmetry seeking a non-surgical improvement are generally suitable. A full medical history is taken at consultation to rule out any contraindications before treatment.",
      },
      {
        question: "What are dermal fillers made of?",
        answer:
          "Most fillers used at YourHealthFirst are hyaluronic acid-based — a substance naturally found in the skin — chosen for their effective, natural-looking results and because they can be dissolved if needed. Collagen, fat-based and other synthetic fillers exist, but hyaluronic acid remains the most widely used and best-suited option for the majority of patients.",
      },
      {
        question: "What are the possible lip filler side-effects?",
        answer:
          "The most common side-effects are swelling, tenderness, bruising and slight lumpiness at the injection site, which typically settle within a few days to a week — lips in particular can look noticeably swollen for the first 24–48 hours. Less commonly, patients may experience cold-sore flare-ups, asymmetry that needs a top-up, or a very rare allergic reaction or vascular complication, which is why a full medical history and an experienced injector matter.",
      },
    ],
  },
  {
    slug: "sunekos",
    title: "Sunekos",
    tagline: "Regenerate, hydrate and firm from within",
    category: "Face & Anti-Aging",
    image: "/images/services/sunekos.png",
    intro:
      "Sunekos is an injectable treatment combining amino acids and hyaluronic acid to stimulate the skin's own production of collagen and elastin. It is suitable for the face, neck, décolleté and hands, delivering a naturally plumped, firmer and more luminous complexion.",
    diagramImage: {
      src: "/images/treatments/sunekos/ecm-elastin-benefits.webp",
      alt: "Sunekos 200 — produces new ECM and reproduces elastin, Day 0 to Day 28",
    },
    processDiagrams: [
      {
        src: "/images/treatments/sunekos/treatment-protocol.webp",
        alt: "Sunekos Treatment Protocol for natural skin regeneration",
      },
    ],
    body: [
      "Unlike traditional fillers, Sunekos works biologically — the unique patented formula of six amino acids and hyaluronic acid activates fibroblasts in the dermis to produce new collagen and elastin, the main structural components of the Extra Cellular Matrix (ECM). By repairing damaged skin and boosting your own natural production of collagen and elastin, it rebuilds the skin through a process called dermal biogenesis — literally, skin regeneration. It's an effective treatment for skin ageing, loss of hydration, acne scarring, sun damage, dark circles under the eyes, fine lines and wrinkles, and areas including the neck, décolletage and arms.",
      "Sunekos comes in two types. Sunekos 200 is suitable for clients with less visible wrinkles — it helps create elastin in the skin so it becomes tighter and smoother, and also improves collagen and fine lines for a more youthful look. Sunekos 1200 is perfect for more visible signs of ageing: an injectable treatment with an antioxidant action for severe wrinkles and damaged skin, promoting youthful, natural features by improving facial volume loss, reducing wrinkles and hydrating the skin. The two can also be combined to provide the best results — both use a patent-protected formula containing hyaluronic acid and a combination of amino acids, precursors of collagen and elastin.",
      "Sunekos is particularly effective for treating fine lines, crepey skin, loss of elasticity and dullness in the face, neck, eye area and hands. It is also an excellent treatment for younger patients as a preventative measure to maintain skin quality.",
      "A standard course consists of 4 sessions spaced 7–10 days apart, with results continuing to improve for several weeks after the final treatment. Maintenance sessions every 3–6 months are recommended to sustain results.",
    ],
    careInstructions: {
      title: "Sunekos Treatment — Before & Aftercare",
      groups: [
        {
          heading: "Before the Treatment",
          points: [
            "To reduce the risk of bruising, stop taking Aspirin, Ibuprofen, Ginkgo Biloba and Ginseng one week prior to your appointment, with the consent of your GP.",
            "Avoid laser treatments and chemical peels for 6 weeks prior to treatment.",
          ],
        },
        {
          heading: "For 6 Hours After Treatment",
          points: [
            "No make-up.",
            "Avoid alcohol.",
            "Do not rub or massage the treated area.",
            "Do not lie down — remain in an upright position.",
            "Do not touch the treated area.",
          ],
        },
        {
          heading: "For 24 Hours After Treatment",
          points: [
            "Avoid vigorous exercise.",
            "No facials for two weeks.",
            "Avoid extreme facial expressions.",
          ],
        },
        {
          heading: "For 2 Weeks After Treatment",
          points: [
            "Avoid extreme heat or cold (e.g. saunas, ice application, sunbeds).",
            "Avoid laser or radiofrequency treatments in the area treated.",
          ],
        },
        {
          heading: "Common Side Effects",
          points: [
            "Red, tight, itchy skin and swelling.",
            "The treated area may feel tender and firm for up to eight weeks after your treatment.",
          ],
        },
        {
          heading: "Adverse Reaction Awareness",
          points: [
            "Pain and discharge are not normal. If you experience these, please call the clinic immediately for advice.",
          ],
          warning: true,
        },
        {
          heading: "Review Procedure",
          points: [
            "All side effects must have fully resolved before a further treatment can be performed.",
            "Please schedule your complimentary review six weeks after your final treatment.",
          ],
        },
      ],
    },
    benefits: [
      "Stimulates natural collagen and elastin production",
      "Improves skin elasticity, firmness and hydration",
      "Reduces fine lines and crepey texture",
      "Suitable for face, neck, décolleté, eye area and hands",
      "Natural results with no risk of overfilling",
      "Suitable from age 25 as a preventative treatment",
      "Reduces dark circles and eye bags",
      "Proven safe with no known contraindications for most patients",
    ],
    suitableFor: [
      "Adults with loss of skin elasticity and fine lines",
      "Those with dull, dehydrated or crepey skin",
      "Younger patients as a preventative skin treatment",
      "Anyone wanting to improve neck and décolleté quality",
    ],
    results: "Visible improvement after course of 4, lasting 6–9 months",
    priceFrom: "£200 per session / £600 course of 4",
    gallery: {
      folder: "/images/gallery/sunekos",
      prefix: "sunekos",
      count: 2,
      ext: "jpeg",
    },
    faqs: [
      {
        question: "What is Sunekos?",
        answer:
          "Sunekos is an injectable treatment containing amino acids and hyaluronic acid. It works by stimulating the fibroblasts in the skin to produce collagen and elastin, and has been proven very safe with no contraindications for most patients — it can be used on all skin types.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "A standard course is 4 sessions spaced 7–10 days apart. This spacing allows the amino acid and hyaluronic acid formula to progressively stimulate fibroblast activity for a build-up effect.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Firmer, more hydrated and more luminous skin with a visible reduction in fine lines and crepiness. Because Sunekos works by stimulating your own collagen and elastin, the improvement looks structural rather than 'filled'.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Skin hydration and glow are often noticeable after the first session, with firmness and elasticity continuing to improve for several weeks after the full course is complete.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild redness or small bumps at the injection points are common immediately after treatment and typically settle within a few hours to a day.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Sunekos is injected using very fine needles across the treatment area. Most patients tolerate it well, describing only mild discomfort, particularly in more delicate areas like under the eyes.",
      },
      {
        question: "How long will results last?",
        answer:
          "Results from a full course typically last 6–9 months, after which a maintenance session every 3–6 months is recommended to sustain the improvement.",
      },
      {
        question: "Can Sunekos be used on younger skin preventatively?",
        answer:
          "Yes — Sunekos is popular with patients from age 25 onwards as a way to maintain skin quality and delay early signs of ageing, not just to correct existing damage.",
      },
      {
        question: "Who is suitable for Sunekos?",
        answer:
          "Anyone with loss of elasticity, dullness, crepey skin or early fine lines on the face, neck, décolleté or hands. It is also suitable for younger patients wanting preventative skin maintenance.",
      },
      {
        question: "Is Sunekos a filler?",
        answer:
          "No — Sunekos is not a dermal filler. While it contains hyaluronic acid like traditional fillers, it works differently: it stimulates your own fibroblasts to regenerate collagen and elastin through a process called dermal biogenesis, essentially triggering your skin to regenerate itself rather than simply adding volume.",
      },
      {
        question: "What is Sunekos eye treatment used for?",
        answer:
          "Sunekos can be used around the eye area to help reduce dark circles by thickening the skin, and its elastin-stimulating effect can help reduce the appearance of eye bags and hollowness.",
      },
      {
        question: "How long does the appointment take?",
        answer: "The treatment itself takes around 30 minutes.",
      },
      {
        question: "Who should not be treated with Sunekos?",
        answer:
          "Sunekos should not be used on patients who are pregnant or breastfeeding, those with a history of severe allergies or anaphylaxis, or patients with a compromised immune system. Dr Sofia will confirm suitability at your consultation.",
      },
      {
        question: "What should I expect from the treatment?",
        answer:
          "Patients typically benefit from a lifting and tightening effect, reduced volume loss, reduced wrinkle severity, improved deep and surface skin hydration, and improved facial definition.",
      },
    ],
  },
  {
    slug: "profhilo",
    title: "Profhilo",
    tagline: "The ultimate skin remodelling biostimulator",
    category: "Face & Anti-Aging",
    image: "/images/services/placeholder.png",
    intro:
      "Profhilo is a revolutionary injectable treatment containing one of the highest concentrations of hyaluronic acid on the market. It flows beneath the skin to intensely hydrate and stimulate collagen and elastin production, remodelling the skin from the inside out.",
    body: [
      "Unlike traditional fillers, Profhilo does not add volume in a specific area — instead it spreads throughout the tissue, boosting skin laxity and quality across a wider zone. It is injected at 5 specific Bio Aesthetic Points (BAP) on each side of the face, targeting optimal anatomical placement for skin tightening and lifting.",
      "Profhilo is particularly effective for patients who notice a loss of skin quality, fine lines, sagging skin and lack of radiance. It is also popular for the neck, décolleté, arms and knees where skin laxity can be difficult to treat otherwise.",
      "The treatment protocol consists of two sessions spaced 4 weeks apart. Patients typically notice increased hydration and glow almost immediately, with structural improvement in skin laxity continuing to develop over the following weeks.",
    ],
    benefits: [
      "Intensely hydrates and plumps from within",
      "Stimulates collagen and elastin remodelling",
      "Improves skin laxity and firmness without adding volume",
      "Suitable for face, neck, décolleté, arms and knees",
      "Only 2 treatment sessions needed in a course",
      "No downtime, minimal discomfort",
    ],
    suitableFor: [
      "Adults with skin laxity, fine lines and dullness",
      "Those seeking overall skin quality improvement",
      "Patients wanting a natural lift without volume addition",
      "Anyone looking to treat neck and décolleté laxity",
    ],
    results: "Progressive improvement over 4–6 weeks, lasting 6–9 months",
    priceFrom: "£700 course of 2 (face)",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "The standard protocol is just 2 sessions, spaced 4 weeks apart. This is fewer sessions than most other biostimulators because of Profhilo's very high hyaluronic acid concentration.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Noticeably hydrated, tightened and more radiant skin, with an improvement in laxity across the whole treated zone rather than a change in one specific spot — it improves skin quality broadly, not volume in one place.",
      },
      {
        question: "Will Profhilo add volume to my face?",
        answer:
          "No — unlike dermal fillers, Profhilo spreads through the tissue rather than sitting in one place, so it improves skin quality and tightness without changing facial contours or adding bulk.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Small bumps at each of the 10 injection points are expected immediately after treatment and typically settle within 24–48 hours. Mild bruising can occasionally occur.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most patients find Profhilo very tolerable — the injections are quick and superficial, with only brief discomfort at each of the Bio Aesthetic Points.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Increased hydration and glow are often visible almost immediately, with the fuller skin-remodelling effect on laxity and firmness developing progressively over 4–6 weeks.",
      },
      {
        question: "How long will results last?",
        answer:
          "A full course of 2 sessions typically lasts 6–9 months. Many patients repeat the course twice a year to maintain skin quality.",
      },
      {
        question: "Who is suitable for Profhilo?",
        answer:
          "Adults noticing loss of skin firmness, dullness or early laxity in the face, neck, décolleté, arms or knees — particularly those who want a natural skin lift without adding volume.",
      },
    ],
  },
  {
    slug: "polynucleotides",
    title: "Polynucleotides (PDRN)",
    tagline: "Advanced regenerative therapy for skin and under-eyes",
    category: "Face & Anti-Aging",
    image: "/images/services/placeholder.png",
    intro:
      "Polynucleotides (PDRN — Polydeoxyribonucleotide) are a cutting-edge biostimulatory treatment derived from highly purified salmon DNA. They trigger deep skin repair, reduce inflammation and stimulate the production of new collagen, making them particularly effective for dark circles, thin skin and aged or damaged tissue.",
    body: [
      "Polynucleotides work at a cellular level by activating growth factors and stimulating fibroblast activity. This leads to genuine tissue regeneration — not just surface hydration — resulting in thicker, more elastic skin with improved texture and tone.",
      "At YourHealthFirst, we use Polynucleotides to treat under-eye dark circles and tear trough hollowing, facial skin quality, acne scarring, and hair restoration. The treatment is particularly popular for the delicate under-eye area where traditional fillers may not be suitable.",
      "A course of 3–4 sessions is typically recommended, spaced 2–4 weeks apart. Results develop gradually as new collagen forms, with the full effect visible 4–8 weeks after the final session.",
    ],
    benefits: [
      "Stimulates genuine tissue regeneration and repair",
      "Reduces pigmentation and improves under-eye dark circles",
      "Thickens and strengthens thin, crepey skin",
      "Reduces inflammation and redness",
      "Improves acne scarring texture",
      "Complements other treatments including fillers and PRP",
    ],
    suitableFor: [
      "Adults with under-eye dark circles and hollowing",
      "Those with thin, ageing or sun-damaged skin",
      "Patients seeking to improve acne scarring",
      "Anyone wanting a deep regenerative skin boost",
    ],
    results: "Gradual improvement over 4–8 weeks, sustained with maintenance",
    priceFrom: "From £399 per session",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "A course of 3–4 sessions is typically recommended, spaced 2–4 weeks apart, to allow the regenerative effect to build progressively.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Thicker, more elastic and better-toned skin, with a visible reduction in under-eye dark circles and improved texture in areas affected by acne scarring or sun damage.",
      },
      {
        question: "Is this treatment safe — it's derived from salmon DNA?",
        answer:
          "Yes. The DNA fragments used are highly purified and processed to remove any protein material, leaving only the polynucleotide chains that trigger tissue repair. It has an excellent safety profile and is not a fish allergen risk.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild swelling, redness or small bumps at the injection sites are common straight after treatment, particularly around the delicate under-eye area, and usually settle within a day or two.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "A topical numbing cream is applied beforehand, especially for the under-eye area, making the treatment comfortable for most patients.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Improvement builds gradually as new collagen forms, with the full effect typically visible 4–8 weeks after the final session in the course.",
      },
      {
        question: "How long will results last?",
        answer:
          "Results are sustained with periodic maintenance sessions, generally every 4–6 months, as the regenerative effect on tissue quality gradually fades over time.",
      },
      {
        question: "Who is suitable for Polynucleotides?",
        answer:
          "Adults with under-eye hollowing and dark circles, thin or sun-damaged skin, or acne scarring who want a regenerative rather than volumising treatment.",
      },
    ],
  },
  {
    slug: "sculptra",
    title: "Sculptra",
    tagline: "Celebrity's favourite — the liquid facelift",
    category: "Face & Anti-Aging",
    image: "/images/services/placeholder.png",
    intro:
      "Sculptra (poly-L-lactic acid) is an injectable collagen stimulator that gradually rebuilds lost facial volume and structure over time. Often described as the 'liquid facelift', it produces subtle, nuanced results that look completely natural — as if you've simply aged gracefully.",
    body: [
      "Unlike hyaluronic acid fillers that add immediate volume, Sculptra works by stimulating your body's own collagen production. The poly-L-lactic acid microparticles act as a scaffold for new collagen growth, gradually replacing lost tissue over 3–6 months.",
      "Sculptra is ideal for patients with significant facial volume loss, particularly in the cheeks, temples, jawline and lower face. It is also highly effective for improving skin laxity and overall facial contour. The natural, progressive nature of the results means there is no dramatic change — just a softer, more youthful version of yourself.",
      "Treatment usually consists of 2–3 sessions spaced 6 weeks apart. Results can last up to 2 years or more, making Sculptra an excellent long-term investment in skin quality.",
    ],
    benefits: [
      "Gradually rebuilds facial volume and collagen naturally",
      "Results look completely natural — not filled or overdone",
      "Treats cheeks, temples, jawline and lower face laxity",
      "Long-lasting results of up to 2+ years",
      "Gradual onset means no sudden dramatic change",
      "Ideal for patients with significant volume loss",
    ],
    suitableFor: [
      "Adults with significant facial volume loss",
      "Those seeking a subtle, natural-looking facelift effect",
      "Patients wanting long-lasting results from fewer sessions",
      "Anyone looking to improve overall facial structure and laxity",
    ],
    results: "Gradual improvement over 3–6 months, lasting up to 2+ years",
    priceFrom: "From £600 per session",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "Most patients need 2–3 sessions spaced roughly 6 weeks apart, allowing each round of collagen stimulation to build on the last.",
      },
      {
        question: "What results can I expect?",
        answer:
          "A gradual restoration of facial volume and structure, particularly in the cheeks, temples and jawline, that looks like a natural improvement in skin quality rather than an obvious 'filled' change.",
      },
      {
        question: "Why does it take longer to see results than fillers?",
        answer:
          "Because Sculptra doesn't add volume directly — it stimulates your own body to gradually produce new collagen over 3–6 months, which is why the result builds slowly and looks so natural.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Swelling, redness and small bumps at injection sites are common initially and usually settle within days. Very occasionally, small nodules can form under the skin, which is why post-treatment massage is important.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "A local anaesthetic is mixed into the product and topical numbing can also be used, so most patients find the treatment comfortable.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "You'll be asked to massage the treated area for 5 minutes, 5 times a day, for 5 days after treatment (the 'rule of 5s') to help distribute the product evenly and reduce the risk of nodules.",
      },
      {
        question: "How long will results last?",
        answer:
          "Results can last up to 2 years or more, making Sculptra one of the longer-lasting options among facial volumising treatments.",
      },
      {
        question: "Who is suitable for Sculptra?",
        answer:
          "Adults with significant facial volume loss who want a subtle, progressive improvement rather than an immediate dramatic change, and who are looking for a longer-lasting result from fewer overall sessions.",
      },
    ],
  },
  {
    slug: "prp-face-body",
    title: "PRP — Face & Body Rejuvenation",
    tagline: "Non-surgical lift and facial rejuvenation using your own plasma",
    category: "Face & Anti-Aging",
    image: "/images/services/placeholder.png",
    intro:
      "Non-surgical lift and facial rejuvenation that corrects visual skin defects and promotes the reorganisation of its microstructure. PRP therapy involves injection of the patient's own PRP and fibrin for the cosmetic treatment of wrinkles or scars in the face, hands and neck. Known to some as the \"vampire facelift\", it is less invasive than plastic surgery, takes about 45 minutes for each treatment, and offers improvements for up to 12 to 18 months.",
    videoId: "fwAkk77SN2A",
    featureImages: [
      {
        title: "Advanced PRP Cellular Matrix",
        description:
          "Our advanced PRP Cellular Matrix treatments are injected with RegenLab Laboratory (Switzerland) patented innovative products for the isolation of PRP-enriched therapy, using the pain-free, latest U225 intradermal medical injector.",
        image: "/images/treatments/prp-face-body/regenlab.jpg",
      },
    ],
    body: [
      "PRP (Platelet-Rich Plasma) for the face is a cosmetic treatment that uses your own blood to rejuvenate the skin by stimulating collagen and elastin production. A small amount of blood is drawn, and a centrifuge separates the platelet-rich plasma, which is then applied to the skin or injected into the face, often combined with microneedling. This process helps to improve skin texture, reduce fine lines and wrinkles, minimise scars, and restore a more youthful, vibrant appearance.",
      "How it works — blood is drawn: a small amount of your blood is taken. Plasma is separated: the blood is placed in a centrifuge to separate the red blood cells from the plasma, and the resulting platelet-rich plasma, full of growth factors and proteins, is collected. Plasma is applied: the PRP is then either injected into the skin or applied topically, often over skin that has been pre-treated with a microneedling device. The body's healing is stimulated: the growth factors in the PRP trigger the body's natural healing response, stimulating new tissue growth and boosting collagen and elastin production.",
      "During the assessment on your treatment day, we will assess the area to be treated and the skin is cleansed and prepared. Blood is taken from your arm, then the PRP is prepared and activated. It is initially injected into any obvious lines or wrinkles, and the remainder of the PRP is then injected all over the rest of the skin area to be treated.",
      "PRP facial rejuvenation can be a one-off treatment, but further micro-injections can be re-performed at 4–6 weekly intervals for lines and wrinkles. PRP is safe because we are using your own blood, and treatments can be used on all skin types and colours.",
      "The way PRP rejuvenates skin is that, when injected into specific areas, it acts as a matrix that promotes your own collagen to grow and regenerates tissue — acting to naturally smooth and tighten the skin. In this way, PRP softens wrinkles and creates smoother skin texture and tone.",
      "The treatment is an excellent method of encouraging cell reproduction, improving the growth factors of skin and hair. The process involves collecting blood from the patient's arm, separating the platelets from the rest of the blood components via a centrifuge, extracting the PRP and injecting the required area with the PRP. A course of treatments is required, and results are most successful when combined with Mesotherapy.",
      "Results are visible at two weeks and improve gradually over ensuing months, with improvement in texture and tone. Full collagen regeneration takes three months.",
    ],
    advantages: {
      title: "We Offer 2 Types of Skin PRP",
      intro: "Traditional PRP and the advanced A-PRP-HA.",
      items: [
        {
          title: "1.1 — Platelet Rich Plasma (Traditional), Injected Manually",
          description:
            "Has a proven role in the healing of tissues, with key roles in cell migration, proliferation and differentiation. Its mechanism of action comprises anti-inflammatory activity and activation of cell-signalling cascades, with a key role in the synthesis of new extracellular matrix for tissue regeneration. There is a growing body of evidence to support PRP as a treatment for osteoarthritis (OA).",
        },
        {
          title: "1.2 — Hyaluronic Acid (A-PRP-HA) Advance U225",
          description:
            "Hyaluronic acid is a major component of synovial fluid, contributing to joint homeostasis. 25 years of clinical experience shows pain relief and functional improvement lasting 6 to 12 months in OA patients. It plays a major role in viscosupplementation and pain relief in OA, and the network of HA chains generates an ideal cell-friendly matrix when combined with PRP.",
        },
      ],
    },
    treatmentAreas: [
      "Skin Texture",
      "Crinkling Skin Around the Eyes",
      "Dark Circles Around Eyes",
      "Cheeks and Mid Face",
      "Face (Nasolabial Folds, Cheek and Jaw, Periorbital Areas, Crow's Feet, Upper Lip, Nose and Forehead)",
      "Neck",
      "Jawline",
      "Chest and Décolletage",
      "Breast Lift",
      "Back of Hands and Arms",
      "Other Body Areas with Stretch Marks",
      "Healing Scars",
      "Stretch Marks",
      "Acne Marks",
      "Hair Loss/Alopecia",
      "Joints and Muscular Problems",
    ],
    treatmentAreaIcons: {
      "Skin Texture": "sparkle",
      "Crinkling Skin Around the Eyes": "eye",
      "Dark Circles Around Eyes": "target",
      "Cheeks and Mid Face": "face",
      "Face (Nasolabial Folds, Cheek and Jaw, Periorbital Areas, Crow's Feet, Upper Lip, Nose and Forehead)": "face",
      "Neck": "neck",
      "Jawline": "jaw",
      "Chest and Décolletage": "chest",
      "Breast Lift": "heart",
      "Back of Hands and Arms": "hand",
      "Other Body Areas with Stretch Marks": "body",
      "Healing Scars": "bandage",
      "Stretch Marks": "wave",
      "Acne Marks": "dots",
      "Hair Loss/Alopecia": "hair",
      "Joints and Muscular Problems": "bone",
    },
    trustBadges: [
      { icon: "leaf", label: "Natural Rejuvenation" },
      { icon: "shield", label: "Safe & Minimally Invasive" },
      { icon: "clock", label: "Suitable for Face & Body" },
    ],
    contraindications: {
      title: "People Who Should NOT Have PRP Treatment",
      items: [
        "Heavy smokers, drug and alcohol users",
        "Platelet Dysfunction Syndrome",
        "Critical Thrombocytopenia",
        "Hypofibrinogenaemia",
        "Haemodynamic Instability",
        "Sepsis",
        "Acute and Chronic Infections",
        "Chronic Liver Pathology",
        "Anti-Coagulation Therapy",
        "Person with Skin Disease or Cancer",
        "Severe Metabolic and Systemic Disorders",
      ],
    },
    benefits: [
      "PRP has been used successfully for facial rejuvenation around the world",
      "100% natural — uses your own platelets, PRP and fibrin",
      "Stimulates collagen and elastin production",
      "Improves skin texture, tone and radiance",
      "Less invasive than plastic surgery — around 45 minutes per treatment",
      "Improvements last for up to 12 to 18 months",
      "Safe for all skin types and colours",
    ],
    suitableFor: [
      "Adults seeking natural skin regeneration without synthetic ingredients",
      "Those with fine lines, wrinkles, scars or dull skin",
      "Patients wanting to improve overall skin texture and tone",
      "Anyone considering a non-surgical alternative to a facelift",
    ],
    results: "Visible from 2 weeks, full collagen regeneration at 3 months, lasting up to 12–18 months",
    priceFrom: "£399 (Standard PRP) / £599 (A-PRP HA Cellular Matrix)",
    faqs: [
      {
        question: "How long do results last?",
        answer:
          "Treatment results vary, however in most patients the results last up to 18 months. Touch-up treatments will maintain the results.",
      },
      {
        question: "Are facial PRP results immediate?",
        answer:
          "No. Swelling from the fluid is what you will see and feel first. Once the swelling has subsided you will not see much change at all. Over a few weeks the PRP will stimulate the growth factors, which will assist in more collagen growth.",
      },
      {
        question: "How many PRP treatments are required?",
        answer:
          "This will depend upon the health and age of your skin. Normally it is advised to have 2–3 treatments, 4–6 weeks apart. However, your clinician will determine your treatment protocol according to your skin condition.",
      },
      {
        question: "What are the possible side effects of PRP facial rejuvenation?",
        answer:
          "Minimal — expect minimal swelling, bruising and redness for 12–24 hours. A bruise at the needle site may be visible for 2–3 days.",
      },
      {
        question: "What is PRP Breast Therapy?",
        answer:
          "The procedure is not an alternative to implants and will not increase your breast size, but will noticeably improve the shape and the visible effect of stretch marks.",
      },
      {
        question: "What results can I expect from PRP treatments?",
        answer:
          "Improvement of skin texture and tone is noticeable within three weeks. Full collagen regeneration takes three months.",
      },
      {
        question: "How many treatments are advised?",
        answer:
          "For the best result, we recommend up to three treatments, 4–6 weeks apart, with top-ups at 6–24 months.",
      },
      {
        question: "How long does the PRP/vampire facelift last?",
        answer:
          "Since skin renewal and rejuvenation uses the body's own active regeneration components, facial skin renewal is continual for about 3 months after the procedure. The overall effects of the PRP/vampire facelift can last for over a year after the first treatment.",
      },
      {
        question: "What does a PRP facial do?",
        answer:
          "PRP is taken from your blood and applied to (PRP facial) or injected into (PRP facelift) your skin. It utilises the nutrients and growth factors from a sample of the patient's own blood, combined with the benefits of microneedling, or, in the case of the PRP facelift, injected directly into the skin.",
      },
      {
        question: "What is PRP facial rejuvenation?",
        answer:
          "PRP Skin Rejuvenation is an advanced anti-ageing treatment used to help repair damaged or injured tissue in the body — a procedure that uses your own blood to repair your cells.",
      },
      {
        question: "What is PRP facial?",
        answer:
          "PRP therapy involves injection of the patient's own PRP and fibrin for the cosmetic treatment of wrinkles or scars in the face, hands and neck.",
      },
    ],
  },
  {
    slug: "prp-hair-loss",
    title: "PRP Hair Loss Treatment",
    tagline: "Clinically proven — restore density, strengthen and regrow",
    category: "Hair Restoration",
    image: "/images/services/placeholder.png",
    intro:
      "PRP (Platelet-Rich Plasma) hair loss treatment is a three-step medical treatment in which a patient's blood is drawn, processed, and then injected into the scalp. It volumises hair, naturally grows new roots, increases the survival and strengthening of existing hair, increases vascularisation of the scalp, and improves the vitality, colour and shine of your hair — improving overall hair quality through an entirely natural process. PRP is the only non-surgical and non-pharmaceutical treatment that has proven its efficacy and safety.",
    videoId: "qG-TFBGfxkM",
    body: [
      "Dr Sofia is a recognised PRP Hair Loss Specialist with extensive experience treating both male pattern baldness and female hair thinning. The treatment uses your own blood — processed to concentrate the platelets — which are then injected precisely into the thinning areas of the scalp. In collaboration with Regen Lab's original and patented technologies, a one-step closed system is used to prepare your own blood cells, and the Advanced PRP Cellular Matrix is injected using the pain-free U225 latest intradermal medical injector.",
      "There are two major forms of alopecia affecting the population that can be improved with PRP. Androgenic Alopecia is the most common cause of male pattern baldness, due to hormonal imbalance, genetic predisposition, age and metabolic syndromes — treatments are generally challenging, and previous therapies have often shown limited effectiveness or side-effects. Androgenetic alopecia affects up to 30% of men over 30 and 50% of men over 50, as well as many women, and PRP shows excellent results for male and female patients from initial to intermediate stages (I–V on the Norwood scale).",
      "Alopecia Areata is an auto-immune disease that causes spot baldness, generally due to genetic predisposition and triggered by a physiological change such as stress or nutrient deficiencies. In both types, male and female patients show excellent results in most cases of hair loss.",
      "Standard PRP stimulates the scalp follicles and has the ability to repair and restore injuries within skin tissue, accelerating the healing of damaged tissue. It increases collagen production and enhances the skin's elasticity, tone and thickness — results begin to show after the second treatment, allowing cell angiogenesis and hair regrowth in the scalp, and increasing hair density and thickness within 6 months. Standard PRP, the traditional form of PRP, is injected manually.",
      "The Advanced PRP Cellular Matrix (RegenKit-BCT) is the next generation of PRP. Unlike standard PRP, it contains a greater concentration of growth factors, and the Cellular Matrix acts as scaffolding to keep those growth factors in the treated area for longer — promoting more hair growth than standard PRP. It is injected using the pain-free U225 intradermal medical injector, which can deliver up to 500 micro-injections per minute, and represents a new breakthrough in hair regrowth.",
      "A course of 3 sessions is recommended, spaced 4–6 weeks apart, with annual maintenance sessions to sustain results. Most patients notice reduced hair shedding after the first session, with visible improvement in density and thickness from around 3 months.",
    ],
    comparisonTable: {
      title: "Manual PRP vs U225 PRP Injections",
      columnLabels: ["Manual PRP Injections", "U225 PRP Injections"],
      rows: [
        {
          feature: "Method",
          a: "The practitioner uses a standard syringe and a fine needle to inject the PRP directly into the scalp.",
          b: "An automated mesotherapy device, the U225 mesogun, is used to deliver a rapid series of micro-injections.",
        },
        {
          feature: "Precision",
          a: "Precision is entirely dependent on the practitioner's skill and technique. Manual injection allows for flexible, real-time depth adjustment to target different areas of the scalp.",
          b: "The U225 device offers superior control over injection depth and volume, ensuring consistent delivery of the PRP.",
        },
        {
          feature: "Patient Comfort",
          a: "This method can be more uncomfortable or painful for some patients, and it often requires topical numbing cream to manage.",
          b: "Due to its rapid, pneumatic injection mechanism, the U225 significantly reduces discomfort. Some patients find it virtually painless and do not require numbing cream.",
        },
        {
          feature: "Speed & Efficiency",
          a: "Manual injections can be more time-consuming, especially for treating larger areas of the scalp.",
          b: "The U225 gun can perform hundreds of micro-injections per minute, making the overall treatment time much shorter.",
        },
        {
          feature: "Consistency",
          a: "The volume and pressure of each injection can vary based on human control, which can lead to less consistent results.",
          b: "Automation ensures a uniform distribution of PRP across the treatment area, reducing the risk of human error.",
        },
        {
          feature: "Cost",
          a: "This technique eliminates the need for specialised equipment, which can make it a more cost-effective option.",
          b: "The specialised U225 device and its disposable components can increase the overall treatment cost.",
        },
        {
          feature: "Tactile Feedback",
          a: "The practitioner receives immediate tactile feedback, allowing them to feel tissue resistance and adjust their technique as needed.",
          b: "This method lacks the direct tactile feedback of manual injections.",
        },
        {
          feature: "Downtime",
          a: "Bruising and swelling may be more prominent compared to the gentle application of the mesogun.",
          b: "Minimal bruising and swelling are typical, leading to reduced downtime.",
        },
      ],
    },
    processDiagrams: [
      {
        src: "/images/treatments/prp-hair-loss/cellular-matrix-regenkit.webp",
        alt: "Cellular Matrix technology — RegenKit A-PRP hydration and regeneration",
      },
    ],
    advantages: {
      title: "Advantages of PRFM Treatment",
      intro:
        "PRFM presents more viable, intact and activated PRP in a fibrin matrix, which produces a more prolonged exposure to growth factors over a more natural time course. It is believed that this natural kinetics will yield more sustained hair growth.",
      items: [
        {
          title: "Proven in Clinical Studies",
          description:
            "Studies show that PRFM is more effective in grade 3, 4 and 5 hair loss in men and grade 2 in women.",
        },
        {
          title: "Well Tolerated",
          description:
            "All patients tolerated the procedure well, with no patients noting any significant bruising (ecchymosis).",
        },
        {
          title: "No Worsened Shedding",
          description: "Hair shedding didn't worsen in any case.",
        },
        {
          title: "Visible in 3 Sessions",
          description:
            "Significant hair regrowth and improvement in thickness is seen after just 3 sessions of treatment.",
        },
        {
          title: "Quick, Sustained-Release Procedure",
          description:
            "The procedure takes only around 20 minutes. It sustains release for up to 7 days afterwards, allowing cell angiogenesis and hair regrowth in the scalp, and increases hair density and thickness almost 2 times within 6 months.",
        },
        {
          title: "Proven Regenerative Technology",
          description:
            "Platelet-rich fibrin matrix is extensively used by surgeons worldwide to treat chronic lower extremity ulcers, promoting wound healing via cell proliferation and new cell regrowth.",
        },
        {
          title: "Enhances Hair Transplantation",
          description:
            "PRFM is very effective in combination with hair transplantation — it stimulates dermal angiogenesis and wound healing, helping the transplanted graft survive better, and also improves the density of thinning hair by stimulating cell proliferation.",
        },
      ],
    },
    gallery: {
      folder: "/images/gallery/prp-men",
      prefix: "prp-men",
      count: 4,
      ext: "jpeg",
    },
    benefits: [
      "Stimulates dormant follicles and promotes new hair growth",
      "Reduces hair shedding and breakage",
      "Improves hair density and thickness",
      "100% natural — uses your own growth factors",
      "Suitable for male and female hair loss and alopecia",
      "Can be combined with exosome therapy for enhanced results",
      "Also reduces wrinkles and minimises acne scars",
      "Improves skin texture, colour and overall complexion",
      "Improves under-eye puffiness and dark circles",
    ],
    suitableFor: [
      "Adults experiencing hair thinning or early hair loss",
      "Those with alopecia areata or androgenetic alopecia",
      "Patients looking for a natural, non-surgical hair restoration",
      "Those who want to strengthen existing hair before more advanced loss",
    ],
    results: "Reduced shedding from 4–6 weeks, density improvement from 3 months",
    priceFrom: "£399 (Standard PRP) / £599 (Advanced RegenKit-BCT)",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "A course of 3 sessions spaced 4–6 weeks apart is recommended, with an annual maintenance session afterwards to sustain the improvement in density.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Reduced shedding, strengthened existing hair and, for many patients, visible improvement in density and thickness in areas of thinning — particularly with the Advanced RegenKit-BCT protocol.",
      },
      {
        question: "What's the difference between Standard PRP and RegenKit-BCT?",
        answer:
          "RegenKit-BCT uses a double-centrifugation process to produce a higher concentration of growth factors than standard PRP, making it particularly suited to more advanced hair loss or patients who haven't responded fully to standard PRP.",
      },
      {
        question: "Does it work for all types of hair loss?",
        answer:
          "PRP is most effective for androgenetic alopecia (pattern hair loss) and alopecia areata, and works best on follicles that are thinning but still active. Dr Sofia will assess suitability at your consultation.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "A numbing cream or cold air device is used on the scalp beforehand, and most patients tolerate the injections well.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild tenderness, redness or minor swelling on the scalp is common for a day or two after treatment. Because PRP uses your own blood, allergic reaction risk is very low.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Reduced shedding is often noticed from 4–6 weeks, with visible improvement in hair density and thickness typically from around 3 months onward.",
      },
      {
        question: "Can PRP be combined with other treatments?",
        answer:
          "Yes — PRP is often combined with Exosome Therapy for an enhanced regenerative effect, particularly for patients with more advanced hair thinning.",
      },
      {
        question: "What should I do after my PRP treatment?",
        answer:
          "It's not recommended to wash your hair, apply ice, or take anti-inflammatory medication within 24 hours of treatment.",
      },
      {
        question: "Is PRP more effective combined with hair transplantation?",
        answer:
          "Yes — PRFM is very effective in combination with hair transplantation. It stimulates dermal angiogenesis and wound healing, which helps the transplanted graft survive better, and also improves the density of thinning hair by stimulating cell proliferation.",
      },
      {
        question: "Is there scientific evidence for this treatment?",
        answer:
          "Platelet-rich fibrin matrix is extensively used by surgeons worldwide to treat chronic lower extremity ulcers. It promotes wound healing via cell proliferation and new cell regrowth, and the same regenerative mechanism supports hair follicle stimulation in the scalp.",
      },
      {
        question: "Why is PRFM superior to standard PRP?",
        answer:
          "PRFM requires only around 4 sessions to see a visible result. Its sustained release, continuing for up to 7 days after the procedure, allows cell angiogenesis and hair regrowth in the scalp, and it increases hair density and thickness almost 2 times within 6 months.",
      },
      {
        question: "How does this compare to other hair loss treatments?",
        answer:
          "PRF matrix releases growth factors into the scalp through a sustained mechanism — in vitro studies have shown growth factors are released for up to 7 days, which stimulates new hair growth. Pronounced results are typically seen after 3 months of treatment.",
      },
      {
        question: "What is PRFM (Platelet-Rich Fibrin Matrix)?",
        answer:
          "PRFM is considered one of the latest innovations in hair treatment. A small amount of blood is collected from the patient and centrifuged, which separates and concentrates the patient's own PRP and fibrin into a matrix. This matrix is then injected into the thinning or bald scalp, stimulating cell proliferation and hair regrowth through targeted tissue regeneration.",
      },
      {
        question: "How long does the appointment take?",
        answer:
          "The full appointment, including consultation and injection, takes around 60–90 minutes. No anaesthetic is required and there is no downtime, so you can return to your normal activities straight away if you wish.",
      },
      {
        question: "Is PRP safe?",
        answer:
          "PRP is an especially safe treatment option with no risk of allergic reaction, because it is made from your own blood. As it's antimicrobial, there is also no risk of infection.",
      },
    ],
  },
  {
    slug: "exosome",
    title: "Exosome Therapy",
    tagline: "Next-generation regenerative medicine for hair and skin",
    category: "Hair Restoration",
    image: "/images/services/placeholder.png",
    intro:
      "Exosome therapy represents the frontier of regenerative aesthetics. Exosomes are nano-sized vesicles that carry proteins, growth factors and genetic information between cells, triggering powerful repair and regeneration. At YourHealthFirst, we use exosomes to accelerate hair restoration and enhance skin renewal.",
    body: [
      "Unlike PRP which relies on the patient's own platelet count (which varies by individual), exosomes deliver a standardised, highly concentrated payload of growth factors and signalling molecules. This makes them particularly effective for patients who have not achieved optimal results from PRP alone, or for those wanting a more powerful regenerative treatment.",
      "For hair restoration, exosomes are injected into the scalp where they activate stem cells in the hair follicle, promoting growth, reducing inflammation and extending the anagen (growth) phase of the hair cycle. For skin, they are applied via microneedling to stimulate deep regeneration, collagen production and repair of sun-damaged or aged tissue.",
      "Exosome therapy can be used as a standalone treatment or combined with PRP for a synergistic regenerative effect. Many patients choose this combination for maximum hair restoration results.",
    ],
    benefits: [
      "Highly concentrated regenerative signal far beyond standard PRP",
      "Activates stem cells in hair follicles to promote growth",
      "Reduces scalp inflammation that contributes to hair loss",
      "Improves skin texture, tone and deep regeneration",
      "Suitable for both hair restoration and skin rejuvenation",
      "Can be combined with PRP for enhanced results",
    ],
    suitableFor: [
      "Patients seeking advanced hair restoration beyond PRP",
      "Those who have plateaued with standard PRP treatment",
      "Adults wanting cutting-edge skin regeneration",
      "Anyone looking for a powerful, science-backed regenerative treatment",
    ],
    results: "Progressive improvement over 3–6 months",
    priceFrom: "From £699 per session",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "This varies by individual goal, but most patients follow a short course of sessions spaced several weeks apart, similar in structure to a PRP course, with progress reviewed at each visit.",
      },
      {
        question: "What results can I expect?",
        answer:
          "For hair, reduced inflammation and reactivated growth in dormant follicles; for skin, improved texture, tone and deeper regeneration of sun-damaged or aged tissue.",
      },
      {
        question: "How is this different from PRP?",
        answer:
          "PRP concentrates your own platelets, which varies from person to person. Exosomes deliver a standardised, highly concentrated dose of growth factors and signalling molecules regardless of your own blood profile, making them a more powerful option for patients who haven't responded fully to PRP.",
      },
      {
        question: "Is exosome therapy safe?",
        answer:
          "Yes — the exosomes used are lab-processed and do not contain cellular material, meaning there is no risk of immune rejection in the way there might be with cell-based therapies.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "For the scalp, a numbing agent is used before injection. For skin, exosomes are applied via microneedling with topical anaesthetic, making the treatment comfortable for most patients.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild redness or scalp tenderness for hair treatments, and temporary redness similar to a mild sunburn after microneedling application for skin treatments — both typically settle within a day or two.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Improvement is progressive, typically developing over 3–6 months as the regenerative signalling takes effect on follicles or skin tissue.",
      },
      {
        question: "Can exosomes be combined with PRP?",
        answer:
          "Yes — many patients combine exosome therapy with PRP for a synergistic effect, particularly for more advanced hair restoration goals.",
      },
    ],
  },
  {
    slug: "cryolipolysis",
    title: "Cryolipolysis (Fat Freezing)",
    tagline: "Eliminate stubborn fat — without surgery, without downtime",
    category: "Body Contouring",
    image: "/images/services/cryolipolysis.png",
    intro:
      "Cryolipolysis is the procedure for you if you want to avoid surgery, eliminate stubborn fat, lose weight and return to your life within a few hours. It effectively targets problem areas including your belly, inner and outer thighs, back and more — a popular alternative to liposuction that zeroes in on fat cells with controlled cooling, freezes them and initiates their elimination.",
    videoId: "V4K0z6c9vVU",
    howItWorks: {
      title: "Cryolipolysis — How Does It Work",
      intro:
        "In the weeks after your treatment, your body naturally processes and eliminates the treated fat cells. Once the fat cells are gone, they are gone forever, leaving you to enjoy the long-term benefits of a leaner, more sculpted figure.",
      steps: [
        {
          icon: "/images/treatments/cryolipolysis/fat-cell.png",
          title: "The Body's Fat Cells Are Frozen",
          description:
            "The body's fat cells are targeted and frozen until they reach a temperature that initiates their permanent removal.",
        },
        {
          icon: "/images/treatments/cryolipolysis/multiple-treatment.png",
          title: "Multiple Treatment",
          description:
            "It can be used to effectively treat multiple areas including your belly, inner and outer thighs, back, and more.",
        },
        {
          icon: "/images/treatments/cryolipolysis/non-surgical-method.png",
          title: "Non-Surgical Method",
          description:
            "You will be able to return to your normal activities right away. Your body will naturally eliminate the fat cells in the weeks that follow.",
        },
      ],
    },
    processDiagrams: [
      {
        src: "/images/treatments/cryolipolysis/how-cryolipolysis-works-steps.jpg",
        alt: "How Cryolipolysis Works — stubborn fat, controlled cooling, fat cells crystallise, natural elimination, visible results",
      },
      {
        src: "/images/treatments/cryolipolysis/how-cryolipolysis-works-cross-section.webp",
        alt: "Cryolipolysis before, during and after treatment — skin, fat layer and muscle cross-section",
      },
      {
        src: "/images/treatments/cryolipolysis/led-light-therapy-benefits.webp",
        alt: "Cryolipolysis with LED Lights — skin benefits by colour",
      },
    ],
    diagramImage: {
      src: "/images/treatments/cryolipolysis/treatment-areas-new.jpg",
      alt: "Cryolipolysis treatment areas — female and male",
    },
    body: [
      "Fat cells are more susceptible to cold temperatures than surrounding skin and tissue. During cryolipolysis, a specialised applicator draws the fatty tissue into contact with controlled cooling panels. The fat cells crystallise and die, then are naturally eliminated by the body's lymphatic system over the following weeks.",
      "Dr Sofia has worked with cryolipolysis since its early days at one of Harley Street's pioneering clinics, and has successfully treated thousands of patients. Areas commonly treated include the abdomen, flanks, inner and outer thighs, upper arms, bra area, back, knees, chin and small fatty deposits.",
      "Light therapy works in two ways to speed up results: ATP is the spark that ignites the metabolism, so the body burns more fat while maintaining its muscle mass, and it improves detoxification and removal of waste products that encourage retention of water. Our advanced cryolipolysis machine uses the latest technology, which not only freezes the fat but also offers Colour Light Therapy — a completely holistic, non-invasive treatment using coloured LEDs to stimulate, activate or calm the skin and muscles, encouraging the body to begin to heal itself.",
      "All areas are treated with large cups, rather than the combination of medium and large cups used by many other clinics — a larger cup treats a larger area in each session. One area refers to any unpaired part of the body (e.g. upper or lower abdomen, or an uneven part of the body to even it out); two areas refers to paired parts of the body (e.g. arms, inner thighs, outer thighs, love handles).",
      "Results are visible from 8 weeks, with optimal results at 12–16 weeks. The treated fat cells are permanently destroyed and will not return — provided a stable weight is maintained. Multiple areas can be treated in one session.",
    ],
    benefits: [
      "Permanently destroys fat cells in targeted areas",
      "Non-surgical — no needles, no anaesthesia, no surgery",
      "Treats abdomen, flanks, thighs, arms, back, chin and more",
      "No downtime — return to normal activities immediately",
      "Clinically proven with a decade of results at YourHealthFirst",
      "Multiple areas can be treated in one session",
    ],
    suitableFor: [
      "Adults with stubborn fat that resists diet and exercise",
      "Those near their ideal weight wanting to target specific areas",
      "Patients seeking non-surgical alternatives to liposuction",
      "Anyone wanting to treat abdomen, thighs, arms or back",
    ],
    results: "Visible from 8 weeks, optimal results at 12–16 weeks",
    priceFrom: "£400 per area",
    gallery: {
      folder: "/images/gallery/cryolipolysis",
      prefix: "cryo",
      count: 19,
      ext: "jpeg",
    },
    faqs: [
      {
        question: "How many treatments will I need?",
        answer:
          "Many patients see excellent results from a single session per area. Some choose a second session on the same area after 8–12 weeks for further reduction, particularly for larger or more stubborn fat pockets.",
      },
      {
        question: "What results can I expect?",
        answer:
          "A visible, permanent reduction in the fatty tissue of the treated area — typically 20–25% of the fat layer per session — giving a smoother, more contoured shape.",
      },
      {
        question: "Is cryolipolysis painful?",
        answer:
          "You'll feel intense cold and pulling sensation for the first 5–10 minutes as the area numbs, after which most patients feel little to nothing for the remainder of the session.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Temporary redness, numbness, tingling, bruising or mild swelling in the treated area is common and typically resolves within 1–2 weeks. There have been no serious side effects reported, and studies have shown no changes in blood lipid levels or liver function.",
      },
      {
        question: "What about frostbite?",
        answer:
          "Cryolipolysis temperatures are not cold enough to cause frostbite or other skin damage — that requires temperatures of around -10°C. Cryolipolysis uses controlled temperatures that don't immediately destroy the fat cells, but rather trigger the natural process of cell death (apoptosis), and a special anti-freezing membrane protects the skin throughout treatment.",
      },
      {
        question: "Is cryolipolysis permanent?",
        answer:
          "Yes — cryolipolysis eliminates the treated fat cells permanently and they do not come back. If you gain weight afterwards, any remaining fat cells can still grow, so maintaining a good diet and exercise regimen helps you enjoy lasting results.",
      },
      {
        question: "Does the fat come back afterwards?",
        answer:
          "No — the destroyed fat cells are permanently eliminated by the body and do not regenerate. Maintaining a stable weight afterwards ensures the results are sustained long-term.",
      },
      {
        question: "When will I see results?",
        answer:
          "The body gradually clears the destroyed fat cells over several weeks. Initial results are visible from around 8 weeks, with the optimal outcome seen at 12–16 weeks.",
      },
      {
        question: "Can multiple areas be treated at once?",
        answer:
          "Yes — depending on your goals, multiple applicators and areas can be treated within the same appointment, which Dr Sofia will plan with you at consultation.",
      },
      {
        question: "Who is suitable for cryolipolysis?",
        answer:
          "Adults at or near their ideal body weight with stubborn, diet-and-exercise-resistant fat pockets in specific areas. It is not a weight-loss treatment for those significantly overweight.",
      },
      {
        question: "How do I prepare for cryolipolysis treatment?",
        answer:
          "A little preparation in the days before your appointment helps ensure a comfortable session and the best possible results.",
        sections: [
          {
            heading: "Skin & Medical Prep",
            points: [
              "Stay out of the sun and avoid tanning beds for at least 48 hours to a week before your appointment, as irritated or sunburned skin is more sensitive.",
              "Skip blood thinners: avoid NSAIDs like ibuprofen and aspirin, as well as supplements like fish oil and vitamin E, for a few days prior to reduce the risk of bruising.",
              "Check your skin: ensure the treatment area is clean, dry and free of cuts, rashes or broken skin.",
              "Share your health history: tell your provider about any medical conditions, pregnancy, hernias or cold sensitivities.",
            ],
          },
          {
            heading: "Diet & Hydration",
            points: [
              "Eat a light meal: have a light, healthy meal or snack before you go so you do not feel faint, but avoid heavy or greasy foods that cause indigestion.",
              "Stay hydrated: drink plenty of water in the days leading up to your session to help your body process and flush out the treated fat cells.",
              "Limit alcohol and caffeine: avoid alcohol for 24 hours and limit caffeine right before your session.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "emsculpt-neo",
    title: "Emsculpt Neo",
    tagline: "Build muscle and burn fat simultaneously — a world first",
    category: "Body Contouring",
    image: "/images/services/emsculpt-neo.png",
    intro:
      "Emsculpt Neo is the world's first and only non-invasive treatment that simultaneously burns fat and builds muscle using a combination of radiofrequency heating and high-intensity focused electromagnetic energy (HIFEM+). One 30-minute session is equivalent to 20,000 muscle contractions.",
    videoUrl: "/videos/treatments/emsculpt-neo-demo.mp4",
    treatmentAreasImage: {
      src: "/images/treatments/emsculpt-neo/hero-abdomen.png",
      alt: "Emsculpt Neo abdomen treatment applicator",
    },
    treatmentAreasHeading: {
      main: "Targeted",
      accent: "Body Contouring",
      subtitle: "A non-surgical approach to muscle definition and body shaping.",
    },
    imageTextSections: [
      {
        image: "/images/treatments/emsculpt-neo/chest-applicator.jpg",
        alt: "Emsculpt Neo chest and core applicator in use",
        heading: "The Next-Level Upgrade to Cryo",
        body: [
          "If you're already coming in for Cryo slimming or fat freezing, Emsculpt Neo is the next-level upgrade — designed to:",
          "Tighten and tone muscles post-Cryo. Sculpt a more defined, athletic look. Burn even more fat while enhancing muscle growth for a complete transformation.",
        ],
        imagePosition: "left",
      },
      {
        image: "/images/treatments/emsculpt-neo/abdomen-dual-applicator.jpg",
        alt: "Emsculpt Neo dual applicator on the abdomen and love handles",
        heading: "Recommended Sessions & Maintenance",
        body: [
          "A course of 4 sessions is recommended (the exact number may vary depending on individual goals, body composition and targeted treatment areas), with optional maintenance sessions every 3–6 months to sustain results.",
          "Our Emsculpt Neo treatments are budget-friendly, and we also offer double-area sessions for simultaneous treatment of two body parts in one appointment, with no hidden fees.",
        ],
        imagePosition: "right",
      },
    ],
    careInstructions: {
      title: "What Can You Expect During Each Treatment?",
      intro:
        "During an Emsculpt Neo treatment, you can expect to feel intense but painless muscle contractions and a warming sensation in the treated area. The treatment is non-invasive and typically lasts for 30 minutes per session. You might experience some muscle soreness afterward, similar to post-exercise, but there's no downtime.",
      groups: [
        {
          heading: "During Treatment",
          points: [
            "Muscle Contractions: HIFEM+ technology induces powerful, intense but painless muscle contractions — similar to an intense workout, but without the effort.",
            "Warmth: A warming sensation in the treated area from the radiofrequency component, often described as similar to a hot stone massage.",
            "Comfortable Experience: While the contractions can be intense, the treatment is generally well-tolerated, and practitioners can adjust settings for your comfort.",
            "No Downtime: You can return to your normal activities immediately after the treatment.",
          ],
        },
        {
          heading: "After Treatment",
          points: [
            "Potential Muscle Soreness: Similar to the feeling after a strenuous workout — usually mild and temporary.",
            "Redness or Swelling: The treated area may appear red or slightly swollen, but this is temporary and subsides quickly.",
            "Visible Results: Many people notice visible results after the first treatment, but optimal results are typically achieved after a full course of sessions.",
          ],
        },
      ],
    },
    body: [
      "The radiofrequency component raises the temperature of fat cells to a level that permanently damages them, while the HIFEM+ energy forces the underlying muscles to contract at a level impossible to achieve through voluntary exercise. This dual-action results in measurable fat reduction and significant muscle growth in the same treatment.",
      "Clinical studies show on average a 25% increase in muscle volume and 30% reduction in subcutaneous fat after a course of 4 sessions.",
    ],
    advantages: {
      title: "Why Choose YourHealthFirst for Emsculpt Neo",
      items: [
        {
          title: "Certified Practitioners",
          description: "Every treatment is carried out by fully certified, experienced practitioners.",
        },
        {
          title: "Expert Consultations",
          description: "A thorough consultation ensures the treatment plan is right for your goals and body.",
        },
        {
          title: "Flexible Scheduling",
          description: "Appointments to fit around busy professional and family schedules.",
        },
        {
          title: "Convenience of Online Booking",
          description: "Book your consultation or session online, whenever suits you.",
        },
        {
          title: "Transparent Service",
          description: "Clear pricing with no hidden fees, including for double-area sessions.",
        },
        {
          title: "Dedicated Aftercare",
          description: "Ongoing support and guidance throughout your treatment course.",
        },
      ],
    },
    benefits: [
      "Simultaneously burns fat AND builds muscle",
      "30-minute sessions — equivalent to 20,000 muscle contractions",
      "25% average increase in muscle volume (clinical studies)",
      "30% average reduction in subcutaneous fat (clinical studies)",
      "Non-invasive, painless procedure — no surgery, no downtime",
      "Treats abdomen, buttocks, arms, thighs and calves",
      "FDA-approved and clinically proven",
      "Suitable for all skin types and different body shapes",
      "Quick, visible results",
    ],
    suitableFor: [
      "Adults wanting to define and tone the body",
      "Those looking to build muscle while reducing fat simultaneously",
      "Patients who exercise regularly but want to enhance results",
      "Anyone seeking buttock lifting without surgery",
      "Busy professionals who can't commit to long gym hours",
      "Post-pregnancy and postpartum clients seeking body contouring without surgery",
      "Clients struggling with stubborn fat despite healthy lifestyle habits",
      "Men and women near their ideal body weight with stubborn fat",
      "Clients seeking to combine it with Cryo treatments for complete transformation",
    ],
    treatmentAreas: [
      "Abdomen (Core)",
      "Buttocks (Non-surgical lift)",
      "Arms",
      "Outer Thighs",
      "Inner Thighs",
      "Front Thighs",
      "Back Thighs",
      "Biceps",
      "Triceps",
      "Calves",
    ],
    results: "Visible improvements after 2–4 sessions, optimal at 12 weeks",
    priceFrom: "From £500 per session",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "A course of 4 sessions, spaced 5–10 days apart, is recommended to achieve the clinically studied results of increased muscle volume and reduced fat. Some practices offer up to 6 sessions, and the exact number may vary depending on your individual goals, body composition and targeted treatment areas.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Clinical studies show an average 25% increase in muscle volume and 30% reduction in subcutaneous fat in the treated area after a full course.",
      },
      {
        question: "Does it hurt?",
        answer:
          "No — most patients describe the sensation as an intense, involuntary workout combined with a warming feeling from the radiofrequency. It is not painful, though the muscle contractions are strong.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Muscle soreness similar to an intense workout is common for a day or two afterwards. Mild redness or warmth in the treated area can also occur immediately post-treatment.",
      },
      {
        question: "Do I still need to exercise?",
        answer:
          "Emsculpt Neo complements, but doesn't replace, regular exercise. Many patients use it to enhance results they're already achieving through training, or to target areas that resist muscle definition.",
      },
      {
        question: "When will I see results, and how long do they last?",
        answer:
          "Initial tone improvements often appear after 2–4 weeks, with fat reduction and muscle gain becoming more obvious by around 3 months (12 weeks) post-treatment. Muscle benefits can last 6–12 months, while permanent fat loss requires maintaining a stable weight afterwards.",
      },
      {
        question: "Which areas can be treated?",
        answer:
          "Emsculpt Neo is cleared for the abdomen (core), buttocks (non-surgical lift), arms, outer/inner/front/back thighs, biceps, triceps and calves — and can be used for both muscle toning and non-surgical buttock lifting.",
      },
      {
        question: "Who is suitable for Emsculpt Neo?",
        answer:
          "Adults wanting to build muscle definition and reduce fat simultaneously — particularly those who already exercise but want to enhance results, busy professionals short on gym time, post-pregnancy clients, or anyone seeking a non-surgical alternative to buttock augmentation.",
      },
    ],
  },
  {
    slug: "aqualyx",
    title: "Aqualyx (Fat Dissolving)",
    tagline: "Permanently dissolve stubborn fat — precisely targeted",
    category: "Body Contouring",
    image: "/images/services/placeholder.png",
    intro:
      "Aqualyx is a clinically proven fat-dissolving injection that permanently destroys fat cells in small, targeted areas. It is an ideal solution for localised fat deposits that are resistant to diet and exercise, such as a double chin, jowls, small abdominal pockets and inner thighs.",
    body: [
      "Aqualyx contains a plant-derived compound that disrupts the membrane of fat cells on contact, causing them to break down and be naturally eliminated by the body's lymphatic system. The treatment is performed using a thin cannula to minimise discomfort, and results in a lasting reduction in the treated fat pocket.",
      "At YourHealthFirst, Aqualyx is commonly used to treat the submental area (double chin), jowls, small abdominal areas, upper arms and inner thighs. It is particularly popular as a complement to cryolipolysis for smaller or more defined target zones.",
      "2–4 sessions are typically needed, spaced 6 weeks apart. Mild swelling and redness after treatment is expected as the immune system processes the destroyed fat cells — this is a normal sign the treatment is working.",
    ],
    benefits: [
      "Permanently destroys fat cells on contact",
      "Highly targeted — suitable for small, defined areas",
      "Excellent for double chin, jowls and small body pockets",
      "Minimally invasive — performed with a thin cannula",
      "Natural elimination via lymphatic system",
      "Can complement cryolipolysis for comprehensive body contouring",
    ],
    suitableFor: [
      "Adults with localised stubborn fat deposits",
      "Those with a double chin or jowl fat",
      "Patients wanting to target small areas that cryolipolysis cannot reach",
      "Anyone looking for a non-surgical fat reduction option",
    ],
    results: "Progressive fat reduction over 6–8 weeks per session",
    priceFrom: "£350 (chin/jaws) / From £450 (abdomen)",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "Most areas require 2–4 sessions spaced 6 weeks apart, allowing your body time to process and clear each round of destroyed fat cells before the next treatment.",
      },
      {
        question: "What results can I expect?",
        answer:
          "A progressive, permanent reduction in the treated fat pocket — commonly the double chin, jowls or small areas on the abdomen and thighs.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "A thin cannula is used to minimise discomfort, and local anaesthetic can be applied. Most patients tolerate the injections well with only mild stinging.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Swelling and redness in the treated area for several days is expected and is a normal sign that the immune system is processing the destroyed fat cells. Bruising can also occur.",
      },
      {
        question: "How is Aqualyx different from Cryolipolysis?",
        answer:
          "Aqualyx is an injectable, making it ideal for small, precisely defined areas like the chin or jowls that a cryolipolysis applicator can't easily reach — the two treatments are often used together for comprehensive contouring.",
      },
      {
        question: "When will I see results?",
        answer:
          "Fat reduction develops progressively over 6–8 weeks per session as the body clears the treated tissue via the lymphatic system.",
      },
      {
        question: "Is the fat reduction permanent?",
        answer:
          "Yes — the destroyed fat cells do not regenerate, so results are permanent provided a stable weight is maintained afterwards.",
      },
      {
        question: "Who is suitable for Aqualyx?",
        answer:
          "Adults with small, localised fat deposits — such as a double chin, jowls or defined abdominal pockets — that are resistant to diet and exercise.",
      },
    ],
  },
  {
    slug: "lemon-bottle",
    title: "Lemon Bottle (Fat Dissolving)",
    tagline: "Fast, effective fat dissolving with minimal downtime",
    category: "Body Contouring",
    image: "/images/services/placeholder.png",
    intro:
      "Lemon Bottle is a premium fat-dissolving injectable solution — the fastest and most potent treatment in its category. It targets and reduces stubborn body fat quickly and conveniently, with effective results and minimal downtime compared to traditional fat-dissolving methods.",
    body: [
      "Lemon Bottle contains a high-concentration formula including Riboflavin (Vitamin B2), Lecithin and Bromelain, which work together to break down fat cells rapidly. The unique formulation is known for producing results faster than other fat-dissolving injectables, with less swelling and discomfort post-treatment.",
      "The treatment is suitable for areas including the chin, jowls, abdomen, flanks, arms, inner thighs, knees and back. It can be used on the face for delicate areas such as jowls and buccal fat reduction.",
      "Most patients require 2–4 sessions spaced 2–4 weeks apart, making it a faster overall course than many comparable treatments.",
    ],
    benefits: [
      "Rapid fat dissolution — faster acting than traditional methods",
      "Less post-treatment swelling than comparable fat dissolvers",
      "Suitable for face and body fat pockets",
      "Convenient — short sessions with minimal downtime",
      "Effective for chin, arms, abdomen, thighs and more",
    ],
    suitableFor: [
      "Adults with localised fat deposits wanting fast results",
      "Those wanting fat dissolving with minimal post-treatment swelling",
      "Patients seeking face and body fat reduction",
      "Anyone looking for a convenient, effective fat-reduction treatment",
    ],
    results: "Results visible from 2–4 weeks after each session",
    priceFrom: "From £250 per session",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "Most patients need 2–4 sessions spaced 2–4 weeks apart — a faster overall course than many other fat-dissolving treatments.",
      },
      {
        question: "What results can I expect?",
        answer:
          "A visible reduction in the treated fat pocket, with the Riboflavin, Lecithin and Bromelain formula working faster than traditional fat-dissolving injectables.",
      },
      {
        question: "Is it more comfortable than other fat-dissolving injections?",
        answer:
          "Yes — Lemon Bottle's formulation is known for producing less post-treatment swelling and discomfort compared with older fat-dissolving solutions, while still working quickly.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild swelling, redness or tenderness at the injection sites can occur but is typically less pronounced and shorter-lived than with other fat-dissolving treatments.",
      },
      {
        question: "Which areas can be treated?",
        answer:
          "Lemon Bottle is suitable for the chin, jowls, abdomen, flanks, arms, inner thighs, knees and back, including delicate facial areas such as buccal fat.",
      },
      {
        question: "When will I see results?",
        answer:
          "Results become visible from around 2–4 weeks after each session as the body processes the treated fat cells.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most patients find the treatment quick and well-tolerated, with only mild discomfort during the injections.",
      },
      {
        question: "Who is suitable for Lemon Bottle?",
        answer:
          "Adults with localised fat pockets on the face or body who want a faster-acting treatment with less downtime than traditional fat-dissolving options.",
      },
    ],
  },
  {
    slug: "mounjaro",
    title: "Mounjaro (Weight Loss Injection)",
    tagline: "The clinically approved breakthrough in medical weight loss",
    category: "Body Contouring",
    image: "/images/services/placeholder.png",
    intro:
      "Mounjaro (tirzepatide) is a clinically approved weekly injection for weight management, representing a significant advance in medical treatment for obesity. By mimicking two natural gut hormones that regulate appetite and blood sugar, it supports substantial and sustained weight loss alongside a healthy lifestyle.",
    body: [
      "Tirzepatide acts as a dual GIP and GLP-1 receptor agonist — meaning it activates two separate hormone pathways simultaneously. This dual action reduces appetite, slows stomach emptying and improves insulin sensitivity, resulting in a more significant reduction in caloric intake and body weight than single-hormone treatments.",
      "Clinical trials have shown patients losing an average of 15–22% of their body weight over 72 weeks. At YourHealthFirst, Mounjaro is prescribed as part of a supervised weight management programme. An initial consultation and health assessment are required to confirm suitability, and ongoing monitoring ensures safety throughout the treatment.",
      "Mounjaro is self-administered once weekly via a simple pre-filled pen injector. The dose is gradually increased over time to optimise results while minimising any side effects.",
    ],
    benefits: [
      "Clinically approved and extensively studied for weight loss",
      "Dual-hormone action — more effective than single-agent treatments",
      "Average 15–22% body weight reduction in clinical trials",
      "Improves blood sugar and metabolic health alongside weight loss",
      "Weekly self-injection — simple and convenient",
      "Medically supervised programme for safety and results",
    ],
    suitableFor: [
      "Adults with a BMI of 30+ (or 27+ with a weight-related condition)",
      "Those who have not achieved sufficient results with diet and exercise",
      "Patients who are medically suitable following health assessment",
      "Anyone seeking clinically proven medical weight management",
    ],
    results: "Significant weight reduction over 12–72 weeks",
    priceFrom: "From £199 per month (programme-based)",
    faqs: [
      {
        question: "How does the programme work?",
        answer:
          "After an initial consultation and health assessment to confirm suitability, you self-administer a once-weekly injection via a pre-filled pen. The dose is gradually increased over time under medical supervision.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Clinical trials show patients losing an average of 15–22% of their body weight over 72 weeks, alongside improvements in blood sugar and metabolic health.",
      },
      {
        question: "Is Mounjaro safe?",
        answer:
          "Mounjaro is a clinically approved and extensively studied medication. It is only prescribed following a full health assessment, with ongoing monitoring throughout your programme to ensure it remains appropriate and safe for you.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "The most commonly reported side effects are gastrointestinal — nausea, mild digestive upset or reduced appetite — particularly when starting or increasing the dose. These often settle as your body adjusts.",
      },
      {
        question: "Is the injection painful?",
        answer:
          "Mounjaro is administered via a simple pre-filled pen with a very fine needle, and most patients find self-injection straightforward and minimally uncomfortable.",
      },
      {
        question: "How is the dose managed?",
        answer:
          "Treatment starts at a low dose which is gradually increased over subsequent weeks, allowing your body to adjust and minimising the likelihood of side effects while optimising results.",
      },
      {
        question: "When will I see results?",
        answer:
          "Weight reduction is progressive over the course of the programme, with meaningful results typically building from around 12 weeks and continuing through to 72 weeks.",
      },
      {
        question: "Who is suitable for Mounjaro?",
        answer:
          "Adults with a BMI of 30+ (or 27+ with a weight-related health condition) who have not achieved sufficient results through diet and exercise alone, and who are confirmed medically suitable at assessment.",
      },
    ],
  },
  {
    slug: "mesotherapy",
    title: "Microneedling & Mesotherapy",
    tagline: "Revitalise your skin from the surface to the depths",
    category: "Skin & Health",
    image: "/images/services/placeholder.png",
    intro:
      "Mesotherapy combined with microneedling is a powerful skin rejuvenation technique that delivers tailored cocktails of vitamins, amino acids, hyaluronic acid and antioxidants directly into the skin using a pain-free micro-injector. It is effective for a wide range of skin concerns from dullness and dehydration to acne scarring and hair loss.",
    videoUrl: "/videos/treatments/microneedling-demo.mp4",
    featureImages: [
      {
        title: "Fight Against the Signs of Ageing",
        description:
          "By diminishing acne scars, fine lines/wrinkles, stretch marks and sun damage, it can rejuvenate your skin and make it look more youthful, healthy and fresh. It also helps to balance your skin tone.",
        image: "/images/treatments/mesotherapy/fight-aging.webp",
      },
      {
        title: "Long-Lasting Effects",
        description:
          "Durable microneedling is a treatment with long-lasting effects, making it a cost-effective option that allows you to enjoy its benefits for an extended period.",
        image: "/images/treatments/mesotherapy/long-lasting-effect.webp",
      },
    ],
    body: [
      "Microneedling, provided at YourHealthFirst Clinic, uses small, sanitised needles to puncture the skin in a controlled manner. This stimulates new skin tissue and collagen production, resulting in smoother, firmer and more toned skin for all skin types, including olive skin tones.",
      "The controlled treatment minimises downtime and side-effects while effectively addressing concerns like acne scars, fine lines, wrinkles and hyperpigmentation, leading to improved skin texture and complexion. It is mainly used on the face to reduce the visibility of acne, scars, dark spots, wrinkles and clogged pores.",
      "At YourHealthFirst, we use the U225 — a state-of-the-art pain-free intradermal medical injector — to deliver the MesoOx treatment precisely and comfortably. The device delivers micro-doses of active ingredients at a controlled depth, maximising absorption without the discomfort of manual injections.",
      "Mesotherapy is a highly versatile treatment. Different cocktail formulas can be used depending on the specific concern: anti-ageing, skin brightening, slimming, firming, stretch mark reduction, hair stimulation, and more. Dr Sofia creates a bespoke treatment plan based on your skin assessment.",
      "A course of 4–6 sessions is recommended for best results, spaced 1–2 weeks apart, followed by maintenance sessions. There is no downtime — minor redness may occur for a few hours after treatment.",
    ],
    beforeAfterPairs: [
      {
        label: "Microneedling",
        before: "/images/gallery/microneedling/microneedling-1-before.jpeg",
        after: "/images/gallery/microneedling/microneedling-1-after.jpeg",
      },
      {
        label: "Microneedling",
        before: "/images/gallery/microneedling/microneedling-2-before.jpg",
        after: "/images/gallery/microneedling/microneedling-2-after.png",
      },
    ],
    benefits: [
      "Boosts collagen, fades scars, smooths wrinkles, evens tone and enhances skincare absorption",
      "Delivers active ingredients directly to the target depth",
      "Pain-free using the advanced U225 micro-injector",
      "Improves skin hydration, radiance and firmness",
      "Treats acne scarring, pigmentation and stretch marks",
      "Available formulas for face, body slimming and hair",
      "No downtime — return to normal activities same day",
      "Long-lasting, cost-effective results",
    ],
    suitableFor: [
      "Adults with dull, dehydrated or uneven skin",
      "Those with acne scarring, fine lines or stretch marks",
      "Patients seeking skin brightening or anti-ageing treatment",
      "Anyone wanting a customised, multi-ingredient skin booster",
    ],
    results: "Visible improvement after 2–3 sessions; best results after full course",
    priceFrom: "£250 per session / £800 course of 4",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "A course of 4–6 sessions spaced 1–2 weeks apart is recommended for best results, followed by periodic maintenance sessions.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Improved hydration, radiance and firmness, with visible improvement in acne scarring, pigmentation or stretch marks depending on the specific cocktail formula used.",
      },
      {
        question: "What's in the mesotherapy cocktail?",
        answer:
          "The formula is bespoke to your concern — options include vitamins, amino acids, hyaluronic acid and antioxidants, tailored for anti-ageing, brightening, firming, slimming, stretch mark reduction or hair stimulation.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "The U225 pain-free micro-injector delivers ingredients at a controlled depth with minimal discomfort, making it far more comfortable than manual mesotherapy injections.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Minor redness may occur for a few hours after treatment. There is no significant downtime, and most patients return to normal activities immediately.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Visible improvement is typically noticed after 2–3 sessions, with the best overall results seen after completing the full course.",
      },
      {
        question: "Can mesotherapy treat the body as well as the face?",
        answer:
          "Yes — formulas are available for body slimming and hair stimulation in addition to facial skin concerns, all delivered with the same precise micro-injector.",
      },
      {
        question: "Who is suitable for mesotherapy?",
        answer:
          "Adults with dull, dehydrated or uneven skin, acne scarring, fine lines or stretch marks who want a customised, multi-ingredient approach to skin improvement.",
      },
      {
        question: "Who should not get microneedling?",
        answer:
          "If you are prone to scarring, are pregnant, or suffer from rosacea or eczema, it's important to consult with Dr Sofia at your consultation to confirm whether microneedling is safe for you.",
      },
      {
        question: "Does microneedling hurt?",
        answer:
          "Patients undergo microneedling treatment after receiving a topical numbing cream, which prevents any pain associated with the procedure. There is also no downtime, so you can resume work right after treatment.",
      },
      {
        question: "How does microneedling help acne scars?",
        answer:
          "Microneedling uses tiny needles to make controlled pin-pricks in the top layer of skin, and this controlled trauma helps promote new collagen production. Replenishing collagen in areas affected by acne scars reduces the pre-treatment damage, promoting skin texture rejuvenation. Results can be enhanced by combining treatment with rejuvenating topical serums — the newly created micro-channels in the skin improve serum absorption. Vitamin C serum and other de-pigmentation solutions are great additions for reducing hyperpigmentation, as is PRP (platelet-rich plasma) for general skin rejuvenation.",
      },
      {
        question: "How many microneedling sessions are needed for acne scars?",
        answer:
          "This depends on the severity of your scars and your desired results. For mild to moderate scars, you may only need 3–6 sessions spaced 4–6 weeks apart. For more severe scars, you may need up to 12 sessions. It can take up to 6 months to see full results from microneedling.",
      },
      {
        question: "How often should you microneedle for acne scars?",
        answer:
          "Typically, a 30-minute session every four weeks is effective for treating acne scars, though some patients are encouraged to wait up to six weeks between treatments to fully allow new collagen to form. Minimal downtime is required between sessions — most patients feel fully recovered within 24 hours.",
      },
    ],
  },
  {
    slug: "photo-aging",
    title: "Photo-Aging Therapy (Skinox)",
    tagline: "Advanced light-activated treatment for spots, redness and sun damage",
    category: "Skin & Health",
    image: "/images/services/placeholder.png",
    intro:
      "Skinox Photo-Aging Therapy combines a photosensitive topical treatment with a High-Density Diodes (HDD) laser mask to target blemishes, dark spots, redness, rosacea and photodamage. It is a non-invasive treatment that significantly improves skin clarity and evenness.",
    body: [
      "The Skinox protocol involves the application of a photosensitive serum followed by activation using a specialised HDD laser mask. The combination creates a photodynamic effect that targets melanin-producing cells responsible for pigmentation, as well as the redness associated with rosacea and vascular irregularities.",
      "This treatment is particularly effective for patients with sun damage, age spots, melasma, post-inflammatory hyperpigmentation and diffuse redness. It can also improve skin texture and help regulate sebum production in acne-prone skin.",
      "A course of 4 sessions is recommended, with visible improvement in pigmentation and redness typically noticed after the second treatment.",
    ],
    benefits: [
      "Reduces sun spots, age spots and dark patches",
      "Improves redness and rosacea",
      "Treats melasma and post-inflammatory pigmentation",
      "Improves overall skin texture and clarity",
      "Non-invasive with no significant downtime",
      "Suitable for face and body areas",
    ],
    suitableFor: [
      "Adults with sun damage, age spots or melasma",
      "Those with rosacea or persistent facial redness",
      "Patients with uneven skin tone and texture",
      "Anyone seeking non-invasive pigmentation correction",
    ],
    results: "Visible improvement after 2–3 sessions, best results after a course of 4",
    priceFrom: "£250 per session / £600 course of 4",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "A course of 4 sessions is recommended, with visible improvement in pigmentation and redness typically noticed from the second treatment onward.",
      },
      {
        question: "What results can I expect?",
        answer:
          "A visible reduction in sun spots, age spots, melasma and redness, along with improved overall skin texture and clarity.",
      },
      {
        question: "How does the treatment work?",
        answer:
          "A photosensitive serum is applied to the skin and then activated with a High-Density Diodes (HDD) laser mask, creating a photodynamic effect that targets pigmentation and vascular redness.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most patients describe a mild warming or tingling sensation during the light activation phase, which is generally well tolerated without the need for anaesthetic.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild redness or a warm sensation immediately after treatment is common and typically resolves within a few hours. Some pigmented spots may temporarily darken before flaking off over the following days.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Visible improvement is typically seen after 2–3 sessions, with the best overall results achieved after completing the full course of 4.",
      },
      {
        question: "Can it help with rosacea, not just pigmentation?",
        answer:
          "Yes — the treatment also targets the vascular irregularities responsible for diffuse redness and rosacea, in addition to pigmentation concerns.",
      },
      {
        question: "Who is suitable for Skinox Photo-Aging Therapy?",
        answer:
          "Adults with sun damage, age spots, melasma, rosacea or uneven skin tone and texture seeking a non-invasive correction option.",
      },
    ],
  },
  {
    slug: "sclerotherapy",
    title: "Sclerotherapy",
    tagline: "Non-invasive spider vein removal — give your skin a better look",
    category: "Skin & Health",
    image: "/images/services/placeholder.png",
    intro:
      "Sclerotherapy is one of the most effective treatments for spider veins and small varicose veins on the legs. A very fine needle injects a sclerosing solution into the vein, irritating its lining so the walls stick together — blood stops flowing through the vein, which is gradually absorbed by the body over a few weeks. Dr Sofia is a member of the British Association of Sclerotherapists.",
    imageTextSections: [
      {
        image: "/images/treatments/sclerotherapy/intro.jpg",
        alt: "Close-up of spider veins on the leg before sclerotherapy treatment",
        heading: "What Is Sclerotherapy?",
        body: [
          "The sclerotherapy procedure obliterates and destroys varicose veins by injecting them with a solution called a sclerosant. The sclerosant scars the vein and makes it collapse, rerouting blood to more advantageous veins nearby — your body gradually destroys and absorbs the treated vein until it vanishes. The solution used is sodium tetradecyl sulfate, and this technique typically treats small varicose veins found near the surface of the skin, known as \"bug veins\", while also improving the overall appearance of the leg.",
          "For bigger veins, foam sclerotherapy is used instead — the sclerosant is transformed into a foam before being injected, since foam covers a larger surface area than fluid.",
        ],
        imagePosition: "right",
      },
      {
        image: "/images/treatments/sclerotherapy/treatment.jpg",
        alt: "Sclerotherapy injection being administered to the leg",
        heading: "What Happens During a Microsclerotherapy Treatment?",
        body: [
          "At your first visit, a detailed discussion with the practitioner will clearly highlight your expectations of the cosmetic effects of treatment, followed by a medical history review to confirm there's no reason you're not suited to Microsclerotherapy. You'll then be asked to sign a consent form confirming you understand the procedure and its potential side effects.",
          "The injections are performed while you're lying down. A solution is injected with a very fine needle, superficially into the veins, causing the lining to become sticky and swell. Compression is then applied to close the veins — over time, the vein heals closed, is absorbed into the body, and fades away.",
        ],
        imagePosition: "left",
      },
    ],
    diagramImage: {
      src: "/images/treatments/sclerotherapy/diagram.jpg",
      alt: "Diagram showing the sclerotherapy injection technique and vein collapse",
    },
    body: [
      "Bruising can last anywhere from two weeks to three months depending on the size of the blood vessels treated, and the treated areas can look worse before they improve as a result of the bruising — with patience, a good result is achieved. High-compression stockings are worn for up to three days to help reduce bruising, and it's best to leave a two-week gap between treatments on the same area.",
      "Sclerotherapy is not painful, though depending on the solution used you may occasionally feel some discomfort in areas of the leg — this varies from person to person. Normal exercise, including swimming, can resume after 24 hours. Air travel is best undertaken at least 48 hours after treatment; on journeys over four hours it's advisable to drink plenty of water and wear class 2 medical compression stockings. Photographs may also be taken by the practitioner for a \"before and after\" comparison of your results.",
    ],
    benefits: [
      "Effectively removes spider veins and small varicose veins",
      "Quick, non-surgical treatment",
      "Foam sclerotherapy available for larger veins",
      "Treats the legs and other areas of the body",
      "Progressive fading as vessels are absorbed by the body",
      "Dr Sofia is a member of the British Association of Sclerotherapists",
      "Minimal downtime — normal exercise resumes after 24 hours",
    ],
    suitableFor: [
      "Self-care treatment has not been successful",
      "The appearance of your leg is causing you distress",
      "You experience pain or cramping",
      "Blood clots form frequently",
      "Phlebitis occurs",
      "Ulcers or sores form",
      "The fatty tissue under your skin hardens due to blood pressure from the vein (lipodermatosclerosis)",
    ],
    results: "Visible improvement from 4 weeks, true effect at 2–3 months",
    priceFrom: "£350 per session (up to 4–5 veins)",
    careInstructions: {
      title: "Recovery & Aftercare",
      groups: [
        {
          heading: "Recommendations After the Procedure",
          points: [
            "Take a 10-minute walk immediately after treatment",
            "Wear your graduated medical compression stockings as advised — worn during the day for up to 3 weeks helps achieve the best outcome",
            "Stockings may be taken off at night and for showers or baths",
            "Don't be alarmed if the thread veins look worse at first — this is normal at this stage and will improve with time",
            "Avoid sun exposure on the treated area for the first few weeks, as suntanning can extend how long the dark colour takes to fade",
          ],
        },
        {
          heading: "As You Heal",
          points: [
            "Marks from the needle or bruising are normal, and veins may change colour from red/blue to black/brown over a few weeks — Arnica can help improve bruising",
            "Legs may feel slightly tender for the first few days; an anti-inflammatory such as ibuprofen and walking can help",
            "Improvement is often visible after about 4 weeks, with the true effect seen between 2–3 months; larger, darker flares may take up to 6 months to fade",
          ],
        },
        {
          heading: "Preventing Further Veins",
          points: [
            "Maintain a healthy weight",
            "Avoid standing or sitting for long periods — active muscles help squeeze blood through the veins",
            "Wear compression hosiery to improve circulation and manage aches or swelling",
            "Give up smoking",
          ],
        },
      ],
    },
    gallery: {
      folder: "/images/gallery/sclerotherapy",
      prefix: "sclerotherapy",
      count: 4,
      ext: "jpeg",
    },
    faqs: [
      {
        question: "What are the side effects of Microsclerotherapy?",
        answer:
          "Some mild side effects of sclerotherapy include itching for a day or two after the procedure, raised red areas at the injection site, and bruising around the injection site that can last several days to weeks.",
      },
      {
        question: "What are the causes of varicose veins and thread veins?",
        answer:
          "They are usually inherited. Hormonal changes — for example with pregnancy and HRT — may increase their likelihood, and trauma or surgery to the legs can cause an eruption of thread veins. They also become more prominent and numerous with increasing age.",
      },
      {
        question: "What are spider veins?",
        answer:
          "Spider veins are twisted, swollen veins that load and fill with blood, mostly developing in the legs and easily visible through the skin. They aren't life-threatening but can cause discomfort and self-consciousness. Modern minimally invasive techniques like sclerotherapy have replaced older surgical vein stripping, using only small, superficial injections rather than incisions.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Most patients require 2–4 sessions, depending on the number and extent of the veins being treated, with a two-week gap recommended between treatments on the same area.",
      },
      {
        question: "What results can I expect?",
        answer:
          "The total treatment cost and number of sessions required depend on the extent and number of veins treated — normally around 80% disappearance is expected as the veins are progressively absorbed by the body.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Sclerotherapy is not painful, though depending on the solution used you may occasionally feel some discomfort in areas of the leg — this varies from person to person.",
      },
      {
        question: "Can sclerotherapy treat areas other than the legs?",
        answer:
          "Yes — while most commonly used on the legs, sclerotherapy can also be used to treat visible veins on other areas of the body.",
      },
      {
        question: "Who is suitable for sclerotherapy?",
        answer:
          "Adults with visible spider veins, thread veins or small varicose veins seeking a non-surgical removal option. Dr Sofia is a member of the British Association of Sclerotherapists.",
      },
    ],
  },
  {
    slug: "cryopen",
    title: "CryoPen",
    tagline: "Precision removal of unwanted skin lesions in minutes",
    category: "Skin & Health",
    image: "/images/services/placeholder.png",
    intro:
      "CryoPen is a state-of-the-art cryotherapy device that delivers a precise jet of nitrous oxide at extremely low temperatures to destroy unwanted skin lesions. It is fast, accurate and effective for removing warts, skin tags, milia, age spots, cherry angiomas and viral verrucae.",
    body: [
      "The CryoPen works by applying controlled extreme cold (-89°C) to a skin lesion, precisely targeting the tissue to be removed without damaging the surrounding healthy skin. Most lesions are treated in under 60 seconds per spot, with multiple lesions treatable in a single session.",
      "The procedure is performed without anaesthesia, with patients feeling a brief cold sensation and mild stinging during treatment. Most lesions require only 1–2 sessions. The treated area develops a small blister or crust that heals within 1–4 weeks, revealing clear skin beneath.",
      "CryoPen is suitable for a wide range of benign skin lesions and is an alternative to surgical removal, laser treatment or electrocautery for many common conditions.",
    ],
    benefits: [
      "Removes skin tags, warts, milia, age spots and cherry angiomas",
      "Precise application with no damage to surrounding tissue",
      "Fast treatment — most lesions take under 60 seconds",
      "No anaesthesia required",
      "Multiple lesions treated in one session",
      "Suitable for face, body and delicate areas",
    ],
    suitableFor: [
      "Adults with skin tags, warts or viral verrucae",
      "Those with age spots, solar lentigo or milia",
      "Patients with cherry angiomas or benign skin lesions",
      "Anyone wanting rapid, precise, non-surgical lesion removal",
    ],
    results: "Lesion falls away within 1–4 weeks post-treatment",
    priceFrom: "£20 per lesion / from £35 for age spots",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "Most lesions require only 1–2 sessions. Larger or more stubborn lesions may occasionally need a further treatment once the initial site has healed.",
      },
      {
        question: "What results can I expect?",
        answer:
          "The treated lesion forms a small blister or crust, which falls away within 1–4 weeks to reveal clear skin beneath.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "No anaesthesia is required. Most patients feel a brief cold sensation and mild stinging during the treatment, which typically lasts under 60 seconds per lesion.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "A small blister or crust forms at the treatment site, which is a normal part of healing. Temporary redness or mild swelling around the area can also occur.",
      },
      {
        question: "Can multiple lesions be treated in one visit?",
        answer:
          "Yes — multiple lesions can be treated within the same session, making CryoPen a convenient option if you have several areas of concern.",
      },
      {
        question: "How long does healing take?",
        answer:
          "The treated area typically heals within 1–4 weeks as the blister or crust naturally falls away, revealing the clear skin underneath.",
      },
      {
        question: "What types of lesions can be treated?",
        answer:
          "CryoPen effectively treats skin tags, warts, viral verrucae, milia, age spots, solar lentigo and cherry angiomas, among other benign skin lesions.",
      },
      {
        question: "Who is suitable for CryoPen treatment?",
        answer:
          "Most adults with benign skin lesions such as skin tags, warts or age spots are suitable candidates. Dr Sofia will assess each lesion at consultation to confirm suitability.",
      },
    ],
  },
  {
    slug: "phlebotomy",
    title: "Phlebotomy (Private Blood Draw)",
    tagline: "Professional private blood draw and centrifugal service since 2014",
    category: "Phlebotomy & Health Tests",
    image: "/images/services/phlebotomy.png",
    intro:
      "YourHealthFirst Clinic has been providing professional private phlebotomy (blood draw) and centrifugal services for adults and children since 2014. We process blood for PRP treatments, provide blood draw for external lab testing, and offer centrifugal services for a wide range of clinical applications.",
    body: [
      "Our phlebotomy service is performed by an experienced, fully trained practitioner in a clinical, comfortable environment. Blood draws are carried out for a variety of purposes including preparation for PRP hair and skin treatments, pre-treatment blood testing, and external lab work ordered by a GP or specialist.",
      "We also offer a centrifugal service, processing blood samples in our in-house centrifuge to separate components for clinical use. This service is available for patients and clinicians requiring specialist sample processing.",
      "Our clinic is conveniently located at 2 Wimpole Street, W1G 0EB — in the heart of London's medical district. Appointments can be booked for weekday and selected Saturday sessions.",
    ],
    benefits: [
      "Professional private blood draw for adults and children",
      "Available for PRP preparation, external lab testing and clinical use",
      "In-house centrifugal processing service",
      "Experienced, trained practitioner in clinical surroundings",
      "Centrally located in London's Harley Street medical district",
      "Fast turnaround for urgent clinical needs",
    ],
    suitableFor: [
      "Patients requiring blood draw for PRP treatments",
      "Those needing private blood testing outside of NHS",
      "Clinicians requiring external centrifugal processing",
      "Children and adults requiring routine or specialist blood draw",
    ],
    results: "Immediate — same-day service",
    priceFrom: "From £80 (blood draw) / £10 per tube (centrifugal)",
    faqs: [
      {
        question: "Do I need a referral to book a blood draw?",
        answer:
          "No referral is necessary for a standard private blood draw — you can book directly. If the sample is for external lab testing arranged through your GP or specialist, you'll simply bring their request form with you.",
      },
      {
        question: "How long does the appointment take?",
        answer:
          "A standard blood draw appointment is quick, typically taking only 10–15 minutes including preparation.",
      },
      {
        question: "Is the service suitable for children?",
        answer:
          "Yes — our experienced practitioner performs blood draws for both adults and children in a comfortable, clinical setting.",
      },
      {
        question: "What is the centrifugal service used for?",
        answer:
          "The in-house centrifuge processes blood samples to separate components for clinical use, including preparation of PRP for our own hair and skin treatments, and specialist sample processing for external clinicians.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Blood draws involve a brief pinprick sensation from the needle, similar to any standard blood test, and are performed by an experienced practitioner to ensure comfort.",
      },
      {
        question: "How quickly will I get my results?",
        answer:
          "The blood draw itself is a same-day service. Turnaround for lab results depends on the specific test and external laboratory processing it.",
      },
      {
        question: "Can I book a Saturday appointment?",
        answer:
          "Yes — selected Saturday sessions are available in addition to weekday appointments to fit around your schedule.",
      },
      {
        question: "Who is this service for?",
        answer:
          "Anyone requiring a private blood draw — whether for PRP treatment preparation, external lab testing outside the NHS, or specialist centrifugal processing for a clinician.",
      },
    ],
  },
  {
    slug: "vitamin-b12",
    title: "Vitamin B12 Injections",
    tagline: "Boost energy, metabolism and wellbeing — fast",
    category: "Skin & Health",
    image: "/images/services/placeholder.png",
    intro:
      "Vitamin B12 injections deliver a direct, highly bioavailable dose of this essential vitamin straight into the muscle, bypassing the digestive system for immediate absorption. They are ideal for those with a B12 deficiency or anyone seeking improved energy, mental clarity and immune support.",
    body: [
      "Vitamin B12 (cobalamin) plays a crucial role in red blood cell formation, neurological function, DNA synthesis and energy metabolism. Deficiency is surprisingly common — particularly in vegans, vegetarians, older adults and those taking certain medications — and can cause fatigue, brain fog, low mood and weakness.",
      "An intramuscular B12 injection delivers the vitamin far more effectively than oral supplements, especially for those with absorption issues. At YourHealthFirst, we offer single booster shots and courses of 4 or 6 injections for sustained benefit.",
      "Many patients report feeling a noticeable improvement in energy levels and mental clarity within days of their injection. B12 injections are also popular as part of a broader wellness or weight management programme.",
    ],
    benefits: [
      "Rapid boost to energy levels and mental clarity",
      "Supports metabolism, red blood cell production and nervous system",
      "Far more bioavailable than oral supplements",
      "Suitable for vegans, vegetarians and those with deficiency",
      "Short appointment — injection takes just a few minutes",
      "Available as single shots or courses of 4 or 6",
    ],
    suitableFor: [
      "Adults with confirmed or suspected B12 deficiency",
      "Vegans and vegetarians with limited dietary B12",
      "Those experiencing fatigue, brain fog or low mood",
      "Anyone seeking a metabolic and immune system boost",
    ],
    results: "Energy improvement often felt within days",
    priceFrom: "£50 single shot / £190 course of 4 / £260 course of 6",
    faqs: [
      {
        question: "How many injections will I need?",
        answer:
          "A single booster shot can be enough for a quick energy lift, but courses of 4 or 6 injections are available for sustained benefit, particularly for confirmed deficiency.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Many patients report a noticeable improvement in energy levels, mental clarity and overall wellbeing within days of their injection.",
      },
      {
        question: "Why is an injection better than a B12 supplement tablet?",
        answer:
          "An intramuscular injection bypasses the digestive system entirely, delivering the vitamin directly into the bloodstream. This makes it far more bioavailable than oral tablets, especially for those with absorption issues.",
      },
      {
        question: "Is the injection painful?",
        answer:
          "The injection is quick, taking just a few minutes, with only brief, mild discomfort at the injection site.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Vitamin B12 injections are very well tolerated. Mild redness or tenderness at the injection site is the most commonly reported effect.",
      },
      {
        question: "How often should I have injections?",
        answer:
          "This depends on your individual needs — those with a diagnosed deficiency may benefit from a course of 4–6 injections, while others use single top-up shots periodically for an energy boost.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Many patients notice an improvement in energy and mental clarity within just a few days of their injection.",
      },
      {
        question: "Who is suitable for B12 injections?",
        answer:
          "Vegans, vegetarians, older adults, and anyone experiencing fatigue, brain fog or low mood who may benefit from a rapid, highly bioavailable B12 boost.",
      },
    ],
  },
];
