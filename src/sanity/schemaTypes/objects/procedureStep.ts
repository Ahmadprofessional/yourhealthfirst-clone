import { defineField, defineType } from "sanity";

export const procedureStep = defineType({
  name: "procedureStep",
  title: "Procedure Step",
  type: "object",
  fields: [
    defineField({
      name: "stepNumber",
      title: "Step Number",
      type: "number",
      description: "e.g. 1, 2, 3",
    }),
    defineField({
      name: "title",
      title: "Step Title",
      type: "string",
      description: "e.g. 'Consultation & Facial Assessment'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Step Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
