import { fields, collection } from "@keystatic/core";

export const reviews = collection({
  label: "Reviews",
  slugField: "pullQuote",
  path: "src/content/reviews/*",
  columns: ["name", "location", "rating"],
  schema: {
    pullQuote: fields.slug({
      name: {
        label: "Pull Quote",
        description: "3-4 words that sums up the review at a quick glance",
      },
    }),
    review: fields.text({ label: "Review" }),
    name: fields.text({ label: "Reviewers Name" }),
    location: fields.text({ label: "Job Location" }),
    rating: fields.number({
      label: "Star Rating",
      validation: { min: 1, max: 5 },
    }),
    image: fields.image({
      label: "Image",
      description:
        "if the client gives permission for you to use their photo, this is a great addition to add authority",
      directory: "public/images/reviews/",
      publicPath: "/images/reviews/",
    }),
  },
});
