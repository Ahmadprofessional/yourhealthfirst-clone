import { defineField, defineType } from "sanity";

export const testimonialItem = defineType({
  name: "testimonialItem",
  title: "Patient Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Patient Name or Initials",
      type: "string",
      description: "e.g. 'Sarah M.' or 'Verified Patient'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "treatment",
      title: "Treatment Received",
      type: "string",
      description: "e.g. 'Profhilo' or 'Anti-Wrinkle Injections'",
    }),
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Star Rating (1 to 5)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "treatment",
    },
  },
});
