import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Us Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "doctorName",
      title: "Doctor Name",
      type: "string",
      initialValue: "Dr. Sofia Yassine",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "doctorCredentials",
      title: "Doctor Credentials / Qualifications",
      type: "text",
      rows: 4,
      description: "e.g. 'GMC Registered Medical Doctor | Aesthetic Specialist'",
    }),
    defineField({
      name: "doctorBioLead",
      title: "Doctor Bio Lead Paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "doctorBioParagraphs",
      title: "Doctor Bio Detailed Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 6 }],
    }),
    defineField({
      name: "doctorPortrait",
      title: "Doctor Sofia Main Portrait Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "heroBadge",
      title: "Hero Small Badge",
      type: "string",
      description: "e.g. 'Aesthetic Medicine Doctor & Phlebotomist'",
    }),
    defineField({
      name: "heroQuote",
      title: "Hero Blockquote Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroQuoteAuthor",
      title: "Hero Quote Author / Attribution",
      type: "string",
    }),
    defineField({
      name: "recognitionBadge",
      title: "Recognition Small Badge",
      type: "string",
      description: "e.g. 'Clinical Excellence'",
    }),
    defineField({
      name: "recognitionHeading",
      title: "Recognition Main Heading",
      type: "string",
    }),
    defineField({
      name: "recognitionImage",
      title: "Recognition Section Second Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "recognitionParagraphs",
      title: "Recognition Section Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 6 }],
      description: "Detailed background, training, and clinic milestones paragraphs",
    }),
    defineField({
      name: "philosophyTitle",
      title: "Clinic Philosophy Heading",
      type: "string",
    }),
    defineField({
      name: "philosophyParagraphs",
      title: "Clinic Philosophy Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "philosophyBgImage",
      title: "Clinic Philosophy Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "philosophyAuthor",
      title: "Clinic Philosophy Author",
      type: "string",
      initialValue: "Sofia Bouzian",
    }),
    defineField({
      name: "trainingPhotos",
      title: "Training & Congress Photos Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
            { name: "alt", title: "Alt description", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "ghpBadgeSmall",
      title: "GHP Badge Small Text",
      type: "string",
      initialValue: "GLOBAL HEALTH & PHARMA",
    }),
    defineField({
      name: "ghpBadgeTitle",
      title: "GHP Award Title",
      type: "string",
      initialValue: "A Leader in Non-Surgical Aesthetics 2019",
    }),
    defineField({
      name: "ghpBadgeDesc",
      title: "GHP Award Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "accreditationsBadge",
      title: "Accreditations Badge",
      type: "string",
      initialValue: "CERTIFICATIONS & ASSOCIATIONS",
    }),
    defineField({
      name: "accreditationsHeading",
      title: "Accreditations Heading",
      type: "string",
      initialValue: "PROFESSIONAL ACCREDITATIONS",
    }),
    defineField({
      name: "clinicPhotos",
      title: "Clinic Interior & Training Photos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        },
      ],
    }),
    defineField({
      name: "ctaHeading",
      title: "Bottom CTA Heading",
      type: "string",
    }),
    defineField({
      name: "ctaButtonText",
      title: "Bottom CTA Button Text",
      type: "string",
      initialValue: "Book Consultation",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Us Page",
        subtitle: "Doctor bio, philosophy, and clinic photos",
      };
    },
  },
});
