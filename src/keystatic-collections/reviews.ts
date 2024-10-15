import { fields, collection } from "@keystatic/core";

export const reviews = collection({
  label: "Reviews",
  slugField: "pullQuote",
  path: "src/content/reviews/*",
  schema: {
    pullQuote: fields.slug({
      name: {
        label: "Pull Quote",
        description: "3-4 words that sums up the review at a quick glance",
      },
    }),
    review: fields.text({ label: "Review" }),
    rating: fields.number({
      label: "Star Rating",
      validation: { min: 1, max: 5 },
    }),
    platform: fields.text({
      label: "Platform",
      description: "The platform the review was left on",
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
