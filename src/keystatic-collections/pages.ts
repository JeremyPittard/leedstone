import { fields, collection } from "@keystatic/core";

export const pages = collection({
  label: "Pages",
  slugField: "title",
  path: "src/content/pages/*",
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    description: fields.text({
      label: "An SEO friendly description",
      multiline: true,
      validation: { isRequired: true },
    }),
    ogImage: fields.image({
      label: "Image that displays when sharing the page",
      directory: "src/assets/images/ogImage",
      publicPath: "src/assets/images/ogImage",
    }),
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
        iconGrid: {
          label: "Icon Grid",
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
                      description: "Can start with https://, tel:, or mailto:",
                      validation: {
                        pattern: {
                          regex: /^(https:\/\/|tel:|mailto:).+/,
                          message: "Must start with https://, tel:, or mailto:",
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
                  label: "Icon Image",
                  directory: "src/assets/images/icons",
                  publicPath: "src/assets/images/icons",
                  description: "Upload an icon image (PNG, JPEG, SVG, etc.)",
                }),
                link: fields.blocks(
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
                          description:
                            "Can start with https://, tel:, or mailto:",
                          validation: {
                            pattern: {
                              regex: /^(https:\/\/|tel:|mailto:).+/,
                              message:
                                "Must start with https://, tel:, or mailto:",
                            },
                          },
                        }),
                        linkText: fields.text({ label: "Link Text" }),
                      }),
                    },
                  },
                  { label: "Link", validation: { length: { max: 1 } } },
                ),
              }),
              {
                label: "Icon Grid Items",
                itemLabel: (props) => props.fields.title.value,
                validation: { length: { min: 1, max: 8 } },
              },
            ),
          }),
        },
        contactBlock: {
          label: "Contact Block",
          schema: fields.object({
            title: fields.text({
              label: "Title",
              defaultValue: "Get in Touch",
            }),
            description: fields.text({
              label: "Description",
              multiline: true,
              defaultValue:
                "Reach out to us through any of these convenient methods",
            }),
            tagline: fields.text({
              label: "Tagline",
              defaultValue: "Contact Information",
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
                      description: "Can start with https://, tel:, or mailto:",
                      validation: {
                        pattern: {
                          regex: /^(https:\/\/|tel:|mailto:).+/,
                          message: "Must start with https://, tel:, or mailto:",
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
        fullWidthImage: {
          label: "Full Width Image",
          schema: fields.image({
            label: "Image",
            directory: "src/assets/images/content",
            publicPath: "src/assets/images/content",
          }),
        },
        recentPosts: {
          label: "Recent Posts",
          schema: fields.object({
            title: fields.text({
              label: "Section Title",
              defaultValue: "Recent Posts",
            }),
            postCount: fields.number({
              label: "Number of Posts to Show",
              defaultValue: 3,
              validation: {
                min: 1,
                max: 12,
              },
            }),
            showViewAll: fields.checkbox({
              label: "Show View All Posts Link",
              defaultValue: true,
            }),
            viewAllText: fields.text({
              label: "View All Link Text",
              defaultValue: "View All Posts",
            }),
          }),
        },
      },
      { label: "Content" },
    ),
    richData: fields.text({
      label: "Rich Data/ldjson",
      description:
        "use https://technicalseo.com/tools/schema-markup-generator/ to generator rich data to help with SEO",
      multiline: true,
    }),
  },
});
