import { defineField, defineType } from "sanity";

export const galleryCase = defineType({
  name: "galleryCase",
  title: "Before & After Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Case Title",
      type: "string",
      description: "e.g. 'Cryolipolysis Flank Contouring — Case 1'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "treatmentCategory",
      title: "Treatment Group / Tag",
      type: "string",
      description: "e.g. 'Cryolipolysis', 'Anti-Wrinkles', 'Profhilo', 'Sunekos', 'Sculptra'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Practitioner Notes / Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "beforeImage",
      title: "Before Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "afterImage",
      title: "After Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "treatmentCategory",
      media: "afterImage",
    },
  },
});
