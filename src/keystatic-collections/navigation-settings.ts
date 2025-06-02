import { fields, singleton } from "@keystatic/core";

export const navigationSettings = singleton({
  label: "Navigation",
  path: "src/content/site-settings/navigation",
  schema: {
    homePage: fields.relationship({
      label: "Home Page",
      description: "Select a page to be your home page",
      collection: "pages",
    }),
    navigationLinks: fields.blocks(
      {
        // First block option is a link to an internal page
        page: {
          label: "Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.relationship({
              label: "Page",
              collection: "pages",
            }),
            label: fields.text({ label: "Label" }),
          }),
        },
        // Second block option is a link to a URL
        url: {
          label: "External Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.url({ label: "URL" }),
            label: fields.text({
              label: "Label",
              description: "the text to display on your link",
            }),
          }),
        },
      },
      {
        label: "Navigation Links",
        description: "Add links to your header navigation (max 4)",
        validation: { length: { max: 4 } },
      }
    ),
    ctaLinks: fields.blocks(
      {
        // First block option is a link to an internal page
        page: {
          label: "Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.relationship({
              label: "Page",
              collection: "pages",
            }),
            label: fields.text({ label: "Label" }),
          }),
        },
        // Second block option is a link to a URL
        url: {
          label: "External Page",
          schema: fields.object({
            link: fields.url({ label: "URL" }),
            label: fields.text({ label: "Label" }),
          }),
        },
      },
      {
        label: "CTA Button Links",
        description: "Links to be used as CTA buttons in header (max 2)",
        validation: { length: { max: 2 } },
      }
    ),
    footerNavigationLinks: fields.blocks(
      {
        // First block option is a link to an internal page
        page: {
          label: "Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.relationship({
              label: "Page",
              collection: "pages",
            }),
            label: fields.text({ label: "Label" }),
          }),
        },
        // Second block option is a link to a URL
        url: {
          label: "External Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.url({ label: "URL" }),
            label: fields.text({
              label: "Label",
              description: "the text to display on your link",
            }),
          }),
        },
      },
      {
        label: "Footer Links",
        description: "Add links to your footer navigation (max 15)",
        validation: { length: { max: 15 } },
      }
    ),
    footerCta: fields.object({
      schema: fields.object({
        title: fields.text({ label: "Footer CTA Title" }),
        ctaLinks: fields.blocks(
          {
            // First block option is a link to an internal page
            page: {
              label: "Page",
              itemLabel: (props) => {
                let label = "Page";
                if (props.fields.label.value) {
                  label = props.fields.label.value;
                  return label;
                }

                if (props.fields.link.value) {
                  return props.fields.link.value;
                }

                return label;
              },
              schema: fields.object({
                link: fields.relationship({
                  label: "Page",
                  collection: "pages",
                }),
                label: fields.text({ label: "Label" }),
              }),
            },
            // Second block option is a link to a URL
            url: {
              label: "External Page",
              schema: fields.object({
                link: fields.url({ label: "URL" }),
                label: fields.text({ label: "Label" }),
              }),
            },
          },
          {
            label: "CTA Button Links",
            description: "Links to be used as CTA buttons in header (max 2)",
            validation: { length: { max: 2 } },
          }
        ),
      }),
    }),
  },
});
