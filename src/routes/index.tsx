import { createFileRoute } from "@tanstack/react-router";

const TITLE = "CarbyneTech | AI-Powered Manufacturing & Supply Chain Intelligence";
const DESCRIPTION =
  "CarbyneTech delivers AI-powered analytics, IoT manufacturing excellence, and SAP-integrated data solutions for South Asian industrial enterprises.";
const URL = "https://carbynetech.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "CarbyneTech" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:site_name", content: "CarbyneTech" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});
