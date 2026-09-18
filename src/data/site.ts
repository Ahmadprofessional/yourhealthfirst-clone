import type {
  TrustBadge,
  Testimonial,
  WhyChooseFeature,
  FaqItem,
  NavLink,
} from "@/types/content";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about-us" },
  {
    label: "Treatments",
    href: "/treatments",
    dropdown: [
      {
        category: "Face & Anti-Aging",
        items: [
          { label: "Anti Wrinkles", href: "/treatments/anti-wrinkles" },
          { label: "Dermal Fillers", href: "/treatments/dermal-fillers" },
          { label: "Sunekos", href: "/treatments/sunekos" },
          { label: "Profhilo", href: "/treatments/profhilo" },
          { label: "Polynucleotides", href: "/treatments/polynucleotides" },
          { label: "Sculptra", href: "/treatments/sculptra" },
          { label: "PRP Face & Body", href: "/treatments/prp-face-body" },
        ],
      },
      {
        category: "Hair Restoration",
        items: [
          { label: "PRP Hair Loss", href: "/treatments/prp-hair-loss" },
          { label: "Exosome Therapy", href: "/treatments/exosome" },
        ],
      },
      {
        category: "Body Contouring",
        items: [
          { label: "Cryolipolysis", href: "/treatments/cryolipolysis" },
          { label: "Emsculpt Neo", href: "/treatments/emsculpt-neo" },
          { label: "Aqualyx", href: "/treatments/aqualyx" },
          { label: "Lemon Bottle", href: "/treatments/lemon-bottle" },
          { label: "Mounjaro", href: "/treatments/mounjaro" },
        ],
      },
      {
        category: "Skin & Health",
        items: [
          { label: "Microneedling / Mesotherapy", href: "/treatments/mesotherapy" },
          { label: "Photo-Aging / Skinox", href: "/treatments/photo-aging" },
          { label: "Sclerotherapy", href: "/treatments/sclerotherapy" },
          { label: "CryoPen", href: "/treatments/cryopen" },
          { label: "Vitamin B12", href: "/treatments/vitamin-b12" },
        ],
      },
      {
        category: "Phlebotomy & Health Tests",
        items: [
          { label: "Phlebotomy", href: "/treatments/phlebotomy" },
        ],
      },
      {
        category: "Longevity",
        items: [
          { label: "Longevity Programme ✦ Coming Soon", href: "/longevity" },
        ],
      },
    ],
  },
  { label: "Price List", href: "/price-list" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

export const trustBadges: TrustBadge[] = [
  { title: "Expert Care" },
  { title: "Advance Treatment" },
  { title: "Natural Results" },
  { title: "Trusted & Confidential" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dayana de Paula",
    role: "Cryolipolysis · Harley Street",
    quote:
      "Sofia is exceptionally professional and has a way of making you feel very comfortable and relaxed during the procedure. She is very friendly and welcoming and explains everything you need to know in detail prior to and during the procedure. I did extensive research on different clinics in London before choosing this one — I am now convinced it is a place you can truly trust.",
    avatar: "/images/testimonials/patient-1.jpg",
  },
  {
    name: "Alfonso Iovine",
    role: "Personal Trainer · Cryolipolysis",
    quote:
      "Being a Personal Trainer I train a lot and diet as well, but some stubborn fat deposits in certain areas seem like they will never leave no matter what you do. I decided to give cryolipolysis a try — I was very skeptical, but Sophia explained all the theory behind it and it worked amazingly well. Globally I highly recommend it.",
    avatar: "/images/testimonials/patient-2.jpg",
  },
  {
    name: "Timea Bear",
    role: "Botox & Fat Freeze",
    quote:
      "Sofia is amazing. She provided me with all the information regarding the treatments and helped me all the way through. She is very professional and made me feel very comfortable. I had Botox and fat freeze on my tummy and inner thighs — the best treatments ever! Highly recommend her expertise. I am so pleased I found Sofia!",
    avatar: "/images/testimonials/patient-1.jpg",
  },
  {
    name: "Summer Zarin",
    role: "Dermal Fillers · Harley Street",
    quote:
      "I loved having Sofia for my dermal fillers — she was super helpful and the process was completely pain free. I was insecure about my top lip but Sofia fixed that beautifully. I was comfortable and super pleased with the result. Loved my experience from start to finish.",
    avatar: "/images/testimonials/patient-2.jpg",
  },
];

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    title: "Experienced Practitioner",
    description:
      "With years of experience in skin and aesthetic treatments, Sofia provides expert guidance and personalized recommendations to help you achieve your skincare goals.",
  },
  {
    title: "Personalized Care",
    description:
      "Every skin journey is unique. We take the time to understand your concerns and create tailored treatment plans designed specifically for your needs.",
  },
  {
    title: "Advanced Technology",
    description:
      "We utilize modern equipment and proven treatment techniques to deliver safe, effective, and results-driven care for a wide range of skin concerns.",
  },
  {
    title: "Trusted & Safe Care",
    description:
      "Your comfort and safety are our priority. All treatments are carried out with professionalism, attention to detail, and a commitment to achieving natural-looking results.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling us on 0207 225 3582 or 078 1847 4041, or by emailing info@yourhealthfirst.uk. We're based at 2 Wimpole Street, London W1G 0EB. Our friendly team will help you find a time that suits you and answer any questions before your visit.",
  },
  {
    question: "What treatments do you offer?",
    answer:
      "We offer a comprehensive range of aesthetic and medical treatments including anti-wrinkle injections, dermal fillers, Profhilo, Polynucleotides, Sculptra, PRP therapy, Sunekos, Cryolipolysis (fat freezing), Emsculpt Neo, Aqualyx, Lemon Bottle, Mounjaro, hair loss treatments (PRP & Exosomes), Microneedling, Mesotherapy, Sclerotherapy, CryoPen, and Vitamin B12 injections.",
  },
  {
    question: "Do I need a consultation before treatment?",
    answer:
      "Yes — every new patient begins with a thorough one-to-one consultation with Dr Sofia. This allows us to understand your concerns, assess your suitability for treatment, and design a personalised plan tailored to your goals. Consultations are relaxed and informative with no pressure to proceed.",
  },
  {
    question: "Are the treatments safe for all skin types?",
    answer:
      "Our treatments are suitable for a wide range of skin types and tones. During your consultation Dr Sofia will assess your skin in detail and recommend the most appropriate treatments for your individual needs. Safety and natural-looking results are always our top priority.",
  },
  {
    question: "How long does a treatment session take?",
    answer:
      "Treatment times vary depending on the procedure. A quick anti-wrinkle injection session may take as little as 15–20 minutes, while more comprehensive treatments such as Cryolipolysis or Emsculpt Neo can take 45–60 minutes per session. We will always give you a clear time estimate when you book.",
  },
  {
    question: "When will I see results?",
    answer:
      "Results timelines differ by treatment. Anti-wrinkle injections typically show effect within 3–14 days. Dermal fillers and Profhilo show results almost immediately, improving further over several weeks. Body contouring treatments such as Cryolipolysis generally show visible results after 8–12 weeks. Dr Sofia will guide you on what to expect during your consultation.",
  },
];

export const contact = {
  phone1: "0207 225 3582",
  phone2: "078 1847 4041",
  email: "info@yourhealthfirst.uk",
  address: "2 Wimpole Street W1G 0EB / London, UK",
};
