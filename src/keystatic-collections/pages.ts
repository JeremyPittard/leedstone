import { fields, collection } from "@keystatic/core";

export const pages = collection({
  label: "Pages",
  slugField: "title",
  path: "src/content/pages/*",
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    content: fields.blocks(
      {
        hero: {
          label: "Hero",
          schema: fields.object({
            image: fields.image({
              label: "Image",
              directory: "src/assets/images/hero",
              publicPath: "src/assets/images/hero",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.text({
                      label: "External Link",
                      description: "must start with https://",
                      validation: {
                        pattern: {
                          regex: /^https:\/\/.+/,
                          message: "Must start with https://",
                        },
                      },
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
          }),
        },
        pageHeader: {
          label: "Page Header",
          schema: fields.object(
            {
              image: fields.image({
                label: "Image",
                directory: "src/assets/images/header",
                publicPath: "src/assets/images/header",
              }),
              title: fields.text({ label: "Title" }),
              description: fields.text({
                label: "Description",
                multiline: true,
              }),
            },
            { description: "Use this if a hero is... too much." },
          ),
        },
        textWithImage: {
          label: "Text With Image",
          schema: fields.object({
            image: fields.image({
              label: "Image",
              directory: "src/assets/images",
              publicPath: "src/assets/images",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            tagline: fields.text({ label: "Tagline" }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.text({
                      label: "External Link",
                      description: "must start with https://",
                      validation: {
                        pattern: {
                          regex: /^https:\/\/.+/,
                          message: "Must start with https://",
                        },
                      },
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
            imageSide: fields.select({
              label: "Image Side",
              defaultValue: "right",
              options: [
                { label: "Left Image", value: "left" },
                { label: "Right Image", value: "right" },
              ],
            }),
          }),
        },
        featuresBlock: {
          label: "Features",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            tagline: fields.text({ label: "Tagline" }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.text({
                      label: "External Link",
                      description: "must start with https://",
                      validation: {
                        pattern: {
                          regex: /^https:\/\/.+/,
                          message: "Must start with https://",
                        },
                      },
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
            feature: fields.array(
              fields.object({
                image: fields.image({
                  label: "Image",
                  directory: "src/assets/images/",
                  publicPath: "src/assets/images/",
                }),
                title: fields.text({
                  label: "Title",
                  validation: { isRequired: true },
                }),
                description: fields.text({
                  label: "description",
                  multiline: true,
                }),
              }),
              {
                label: "Feature List",
                itemLabel: (props) => props.fields.title.value,
                validation: { length: { min: 1, max: 3 } },
              },
            ),
          }),
        },
        timeline: {
          label: "Timeline",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            tagline: fields.text({ label: "Tagline" }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.text({
                      label: "External Link",
                      description: "must start with https://",
                      validation: {
                        pattern: {
                          regex: /^https:\/\/.+/,
                          message: "Must start with https://",
                        },
                      },
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
            items: fields.array(
              fields.object({
                title: fields.text({ label: "Title" }),
                description: fields.text({
                  label: "Description",
                  multiline: true,
                }),
                image: fields.image({
                  label: "Image",
                  directory: "src/assets/images",
                  publicPath: "src/assets/images",
                }),
              }),
              { validation: { length: { min: 1, max: 3 } } },
            ),
          }),
        },
        faqBlock: {
          label: "FAQ's",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            faqs: fields.array(
              fields.relationship({
                label: "FAQs",
                description:
                  "Select FAQs to display in block. If none are selected, all faqs will be shown.",
                collection: "faqs",
              }),
              {
                label: "FAQs List",
                itemLabel: (props) =>
                  props.value?.replaceAll("-", " ") ?? "FAQ",
              },
            ),
            followUpTitle: fields.text({
              label: "Follow up Title",
              description:
                "A heading after the faqs, something like 'Still have questions?'",
            }),
            followUpDescription: fields.text({
              label: "Follow up Description",
              multiline: true,
            }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.text({
                      label: "External Link",
                      description: "must start with https://",
                      validation: {
                        pattern: {
                          regex: /^https:\/\/.+/,
                          message: "Must start with https://",
                        },
                      },
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
          }),
        },
        reviews: {
          label: "Reviews",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            reviews: fields.array(
              fields.relationship({
                label: "Reviews",
                description:
                  "Select reviews to display in block. If none are selected, all reviews will be shown.",
                collection: "reviews",
              }),
              {
                label: "Reviews List",
                itemLabel: (props) =>
                  props.value?.replaceAll("-", " ") ?? "review",
              },
            ),
          }),
        },
        BlogList: {
          label: "Recent Blog Posts",
          schema: fields.text({ label: "Title" }),
        },

        cta: {
          label: "CTA",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description" }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.text({
                      label: "External Link",
                      description: "must start with https://",
                      validation: {
                        pattern: {
                          regex: /^https:\/\/.+/,
                          message: "Must start with https://",
                        },
                      },
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
          }),
        },
        blockquote: {
          label: "Blockquote",
          schema: fields.object({
            quote: fields.text({ label: "quote" }),
            cite: fields.text({ label: "cite" }),
          }),
        },
      },
      { label: "Content" },
    ),
  },
});
