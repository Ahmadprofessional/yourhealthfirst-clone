import { defineField, defineType } from "sanity";

export const priceItem = defineType({
  name: "priceItem",
  title: "Treatment Price Row",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. 'Injectables & Dermal Fillers', 'Skin Rejuvenation', 'Body Treatments'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Treatment Name",
      type: "string",
      description: "e.g. 'Profhilo (2 Treatments)' or 'Anti-Wrinkle (3 Areas)'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description / Details (optional)",
      type: "string",
      description: "e.g. 'Includes clinical consultation and 2-week follow-up'",
    }),
    defineField({
      name: "price",
      title: "Price String",
      type: "string",
      description: "e.g. '£350' or 'From £450'",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
    },
  },
});
