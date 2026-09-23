export interface TreatmentFaq {
  question: string;
  answer: string;
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
  results: string;
  priceFrom?: string;
  faqs: TreatmentFaq[];
  gallery?: TreatmentGallery;
  /** YouTube video ID shown as an embedded explainer video */
  videoId?: string;
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
    body: [
      "As we age, our skin loses collagen, elastin and hyaluronic acid, leading to hollowing, sagging and deeper lines. Dermal fillers replenish this lost volume and stimulate collagen production, creating a refreshed and youthful appearance without surgery.",
      "At YourHealthFirst, Dr Sofia specialises in a wide range of filler treatments: lip enhancement using the Russian lips technique, tear trough treatment for dark circles and hollow eyes, non-surgical rhinoplasty, cheek augmentation, jawline contouring, nasolabial folds and marionette lines correction, and hand rejuvenation.",
      "All fillers used are CE/FDA-approved premium hyaluronic acid products. Treatments are performed with the utmost care for symmetry and proportion, ensuring a result that looks refreshed, not overdone. Dissolving (hyaluronidase) is also available should a correction be needed.",
    ],
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
    body: [
      "Unlike traditional fillers, Sunekos works biologically — the unique patented formula of six amino acids and hyaluronic acid activates fibroblasts in the dermis to produce new collagen and elastin. The result is structural skin improvement from within, not just surface-level hydration.",
      "Sunekos is particularly effective for treating fine lines, crepey skin, loss of elasticity and dullness in the face, neck, eye area and hands. It is also an excellent treatment for younger patients as a preventative measure to maintain skin quality.",
      "A standard course consists of 4 sessions spaced 7–10 days apart, with results continuing to improve for several weeks after the final treatment. Maintenance sessions every 3–6 months are recommended to sustain results.",
    ],
    benefits: [
      "Stimulates natural collagen and elastin production",
      "Improves skin elasticity, firmness and hydration",
      "Reduces fine lines and crepey texture",
      "Suitable for face, neck, décolleté, eye area and hands",
      "Natural results with no risk of overfilling",
      "Suitable from age 25 as a preventative treatment",
    ],
    suitableFor: [
      "Adults with loss of skin elasticity and fine lines",
      "Those with dull, dehydrated or crepey skin",
      "Younger patients as a preventative skin treatment",
      "Anyone wanting to improve neck and décolleté quality",
    ],
    results: "Visible improvement after course of 4, lasting 6–9 months",
    priceFrom: "£200 per session / £600 course of 4",
    faqs: [
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
    tagline: "Your own plasma, supercharged for skin renewal",
    category: "Face & Anti-Aging",
    image: "/images/services/placeholder.png",
    intro:
      "Platelet-Rich Plasma (PRP) therapy harnesses your own blood's healing and regenerative properties to rejuvenate the skin. By concentrating growth factors and injecting them precisely into target areas, PRP stimulates collagen production, improves skin texture and accelerates natural skin renewal.",
    body: [
      "During a PRP treatment, a small amount of blood is drawn from your arm, then processed in a centrifuge to separate and concentrate the platelet-rich plasma. This golden serum — rich in growth factors — is then injected into the skin using our pain-free U225 micro-injector or applied after microneedling.",
      "At YourHealthFirst, we offer both standard PRP and the advanced A-PRP HA Cellular Matrix, which combines PRP with hyaluronic acid for enhanced skin rehydration alongside regeneration. Treatments are effective for facial rejuvenation, neck, hands, dark circles, fine lines, acne scarring and overall skin quality.",
      "PRP is a natural, biocompatible treatment with minimal risk of adverse reaction since it uses your own plasma. A course of 3 sessions is recommended, followed by annual maintenance sessions.",
    ],
    benefits: [
      "100% natural — uses your own platelets and growth factors",
      "Stimulates collagen and elastin production",
      "Improves skin texture, tone and radiance",
      "Reduces fine lines, wrinkles and acne scarring",
      "Treats face, neck, hands and under-eye area",
      "Minimal downtime and very low risk profile",
    ],
    suitableFor: [
      "Adults seeking natural skin regeneration",
      "Those with fine lines, acne scarring or dull skin",
      "Patients wanting to improve overall skin quality",
      "Anyone preferring natural treatments without synthetic ingredients",
    ],
    results: "Improvement visible after first session, optimised after 3 sessions",
    priceFrom: "£399 (Standard PRP) / £599 (A-PRP HA Cellular Matrix)",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "A course of 3 sessions is recommended for optimal results, followed by an annual maintenance session to sustain the improvement.",
      },
      {
        question: "What results can I expect?",
        answer:
          "Improved skin texture, tone and radiance, with a reduction in fine lines and acne scarring as your own growth factors stimulate new collagen production.",
      },
      {
        question: "What's the difference between Standard PRP and A-PRP HA Cellular Matrix?",
        answer:
          "The A-PRP HA Cellular Matrix combines your concentrated plasma with hyaluronic acid for an added rehydration boost alongside regeneration, making it a step up for more dehydrated or lower-quality skin.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild redness, swelling or bruising at the injection or microneedling sites is common and usually resolves within a couple of days.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "The pain-free U225 micro-injector minimises discomfort considerably compared to manual injection, and topical numbing cream is used for microneedling applications.",
      },
      {
        question: "Is it safe — it uses my own blood?",
        answer:
          "Yes — because PRP is derived entirely from your own blood, the risk of allergic reaction or rejection is extremely low compared with synthetic alternatives.",
      },
      {
        question: "When will I notice a difference?",
        answer:
          "Some improvement is visible after the very first session, with results building and becoming optimised after the full course of 3 sessions.",
      },
      {
        question: "Who is suitable for PRP?",
        answer:
          "Adults with fine lines, acne scarring, dull or fatigued skin who prefer a natural, biologically-derived treatment over synthetic injectables.",
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
      "PRP (Platelet-Rich Plasma) hair loss treatment is one of the most effective non-surgical options for male and female hair thinning, alopecia and hair loss. By injecting concentrated growth factors directly into the scalp, PRP stimulates dormant follicles, strengthens existing hair and supports new hair growth.",
    body: [
      "Dr Sofia is a recognised PRP Hair Loss Specialist with extensive experience treating both male pattern baldness and female hair thinning. The treatment uses your own blood — processed to concentrate the platelets — which are then injected precisely into the thinning areas of the scalp.",
      "At YourHealthFirst, we offer both Standard PRP and the Advanced RegenKit-BCT (a superior double-centrifugation kit producing a higher concentration of growth factors). The latter is particularly recommended for patients with more advanced hair loss or for those who have had limited response to standard PRP.",
      "A course of 3 sessions is recommended, spaced 4–6 weeks apart, with annual maintenance sessions to sustain results. Most patients notice reduced hair shedding after the first session, with visible improvement in density and thickness from around 3 months.",
    ],
    benefits: [
      "Stimulates dormant follicles and promotes new hair growth",
      "Reduces hair shedding and breakage",
      "Improves hair density and thickness",
      "100% natural — uses your own growth factors",
      "Suitable for male and female hair loss and alopecia",
      "Can be combined with exosome therapy for enhanced results",
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
        src: "/images/treatments/cryolipolysis/how-it-works-1.jpg",
        alt: "Cryolipolysis process — from stubborn fat bulges through cooling, apoptosis and fat layer reduction",
      },
      {
        src: "/images/treatments/cryolipolysis/how-it-works-2.jpg",
        alt: "Cryolipolysis before, during and after treatment — fat cell cross-section",
      },
      {
        src: "/images/treatments/cryolipolysis/light-therapy.jpg",
        alt: "Cryolipolysis Colour Light Therapy — seven-colour LED wavelengths and their benefits",
      },
    ],
    diagramImage: {
      src: "/images/treatments/cryolipolysis/treatment-areas.jpg",
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
    body: [
      "The radiofrequency component raises the temperature of fat cells to a level that permanently damages them, while the HIFEM+ energy forces the underlying muscles to contract at a level impossible to achieve through voluntary exercise. This dual-action results in measurable fat reduction and significant muscle growth in the same treatment.",
      "Clinical studies show on average a 25% increase in muscle volume and 30% reduction in subcutaneous fat after a course of 4 sessions. Emsculpt Neo is cleared for use on the abdomen, buttocks, arms, calves and thighs.",
      "The treatment is comfortable — patients typically feel an intense muscle contraction (like an extreme workout) and warmth from the radiofrequency, with no pain. A course of 4 sessions is recommended, spaced 5–10 days apart.",
    ],
    benefits: [
      "Simultaneously burns fat AND builds muscle",
      "30-minute sessions — equivalent to 20,000 muscle contractions",
      "25% average increase in muscle volume (clinical studies)",
      "30% average reduction in subcutaneous fat (clinical studies)",
      "Non-invasive — no surgery, no downtime",
      "Treats abdomen, buttocks, arms, thighs and calves",
    ],
    suitableFor: [
      "Adults wanting to define and tone the body",
      "Those looking to build muscle while reducing fat simultaneously",
      "Patients who exercise regularly but want to enhance results",
      "Anyone seeking buttock lifting without surgery",
    ],
    results: "Visible improvements after 2–4 sessions, optimal at 12 weeks",
    priceFrom: "From £500 per session",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "A course of 4 sessions, spaced 5–10 days apart, is recommended to achieve the clinically studied results of increased muscle volume and reduced fat.",
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
        question: "When will I see results?",
        answer:
          "Visible improvement is often noticed after 2–4 sessions, with optimal results — as muscle continues to build and fat continues to clear — seen around 12 weeks after the course.",
      },
      {
        question: "Which areas can be treated?",
        answer:
          "Emsculpt Neo is cleared for the abdomen, buttocks, arms, calves and thighs, and can be used for both muscle toning and non-surgical buttock lifting.",
      },
      {
        question: "Who is suitable for Emsculpt Neo?",
        answer:
          "Adults wanting to build muscle definition and reduce fat simultaneously — particularly those who already exercise but want to enhance results, or anyone seeking a non-surgical alternative to buttock augmentation.",
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
    body: [
      "At YourHealthFirst, we use the U225 — a state-of-the-art pain-free intradermal medical injector — to deliver the MesoOx treatment precisely and comfortably. The device delivers micro-doses of active ingredients at a controlled depth, maximising absorption without the discomfort of manual injections.",
      "Mesotherapy is a highly versatile treatment. Different cocktail formulas can be used depending on the specific concern: anti-ageing, skin brightening, slimming, firming, stretch mark reduction, hair stimulation, and more. Dr Sofia creates a bespoke treatment plan based on your skin assessment.",
      "A course of 4–6 sessions is recommended for best results, spaced 1–2 weeks apart, followed by maintenance sessions. There is no downtime — minor redness may occur for a few hours after treatment.",
    ],
    benefits: [
      "Delivers active ingredients directly to the target depth",
      "Pain-free using the advanced U225 micro-injector",
      "Improves skin hydration, radiance and firmness",
      "Treats acne scarring, pigmentation and stretch marks",
      "Available formulas for face, body slimming and hair",
      "No downtime — return to normal activities same day",
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
    tagline: "Remove spider veins and small varicose veins safely and effectively",
    category: "Skin & Health",
    image: "/images/services/placeholder.png",
    intro:
      "Sclerotherapy is a well-established and highly effective treatment for spider veins and small varicose veins. A sclerosant solution is injected directly into the affected vessels, causing them to collapse and fade from view. Dr Sofia is a member of the British Association of Sclerotherapists.",
    body: [
      "During sclerotherapy, a very fine needle is used to inject a sclerosant solution into the visible vein. The solution irritates the vessel wall, causing it to swell shut and preventing blood from flowing through it. The closed vein is gradually absorbed by the body over several weeks and disappears.",
      "The treatment is most commonly used for thread veins and spider veins on the legs, but can also treat veins on the face and body. Most patients require 2–4 sessions for optimal results, depending on the extent of the vessels.",
      "Compression stockings are recommended after treatment to support the process. There is minimal downtime, and patients can return to normal activities the same day, avoiding strenuous exercise for 48 hours.",
    ],
    benefits: [
      "Effectively removes spider veins and small varicose veins",
      "Quick treatment with no surgery required",
      "Treats legs, ankles and other body areas",
      "Progressive fading as vessels are absorbed by the body",
      "Dr Sofia is a member of the British Association of Sclerotherapists",
      "Minimal downtime",
    ],
    suitableFor: [
      "Adults with visible spider veins or thread veins on the legs",
      "Those with small varicose veins",
      "Patients seeking a non-surgical vein removal option",
    ],
    results: "Progressive fading over 4–8 weeks per session",
    priceFrom: "£350 per session (up to 4–5 veins)",
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "Most patients require 2–4 sessions, depending on the number and extent of the veins being treated.",
      },
      {
        question: "What results can I expect?",
        answer:
          "A progressive fading and eventual disappearance of the treated spider veins or small varicose veins as they are absorbed by the body.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "A very fine needle is used, and most patients describe only a mild stinging or burning sensation as the solution is injected.",
      },
      {
        question: "What are the side-effects?",
        answer:
          "Mild bruising, redness or minor swelling around the treated veins is common and typically settles within a couple of weeks.",
      },
      {
        question: "What aftercare is required?",
        answer:
          "Compression stockings are recommended after treatment to support the healing process, and strenuous exercise should be avoided for 48 hours.",
      },
      {
        question: "When will I see results?",
        answer:
          "Treated veins fade progressively over 4–8 weeks per session as the body gradually absorbs the closed vessels.",
      },
      {
        question: "Can sclerotherapy treat areas other than the legs?",
        answer:
          "Yes — while most commonly used on the legs, sclerotherapy can also be used to treat visible veins on other areas of the face and body.",
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
