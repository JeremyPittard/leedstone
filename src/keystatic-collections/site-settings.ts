import { fields, singleton } from "@keystatic/core";

export const siteSettings = singleton({
  label: "Site Details",
  path: "src/content/site-settings/site-details",
  schema: {
    title: fields.text({ label: "SEO Page Title" }),
    businessName: fields.text({ label: "Site Title" }),
    logo: fields.image({ label: "Site Logo", directory: "public/images/logo" }),
    sitewideBanner: fields.text({ label: "Sitewide Banner" }),
    sitewideBannerLink: fields.text({
      label: "CTA for banner",
      description:
        "paste in a url for a CTA in the banner (must start with https://)",
      validation: {
        pattern: {
          regex: /^https:\/\/.+/,
          message: "Must start with https://",
        },
      },
    }),
    sitewideBannerLinkLabel: fields.text({ label: "Label for CTA button" }),
    isSitewideBannerLinkExternal: fields.checkbox({
      label: "Does this link to an external website?",
    }),
    socialMediaLinks: fields.blocks(
      {
        url: {
          label: "Social Link",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.icon.value) {
              label = props.fields.icon.value + " | " + props.fields.link.value;
              return label;
            }

            return label;
          },
          schema: fields.object({
            icon: fields.select({
              label: "Icon",
              description: "Icon to show for social media link",
              options: [
                {
                  label: "Facebook",
                  value: "facebook",
                },
                {
                  label: "Instagram",
                  value: "instagram",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin",
                },
                {
                  label: "Reddit",
                  value: "reddit",
                },
                {
                  label: "Twitter",
                  value: "twitter",
                },
                {
                  label: "Discord",
                  value: "discord",
                },
                {
                  label: "YouTube",
                  value: "youtube",
                },
                {
                  label: "Spotify",
                  value: "spotify",
                },
                {
                  label: "GitHub",
                  value: "github",
                },
                {
                  label: "GitLab",
                  value: "gitlab",
                },
                {
                  label: "Mastodon",
                  value: "mastodon",
                },
                {
                  label: "Threads",
                  value: "threads",
                },
                {
                  label: "Bluesky",
                  value: "bluesky",
                },
                {
                  label: "X",
                  value: "X",
                },
              ],
              defaultValue: "facebook",
            }),
            link: fields.text({
              label: "URL",
              description: "must start with https://",
              validation: {
                pattern: {
                  regex: /^https:\/\/.+/,
                  message: "Must start with https://",
                },
              },
            }),
          }),
        },
      },
      {
        label: "Social Media Links",
        description: "links to your social media profiles",
        validation: { length: { max: 10 } },
      },
    ),
    contactEmail: fields.text({
      label: "Contact Email",
      description: "Contact email address",
    }),
    contactPhone: fields.text({
      label: "Contact Phone",
      description: "Contact phone number",
    }),
    contactAddress: fields.text({
      label: "Contact Address",
      description: "Business address",
      multiline: true,
    }),
    seoTracking: fields.text({
      label: "seo tracking snippet",
      description: "add your SEO tracking snippet here. eg. Google Tag Manager",
      multiline: true,
    }),
  },
});
