import { defineType, defineField } from "sanity";

export default defineType({
  name: "credits",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
