import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shopfloor-digital-apps")({
  head: () => ({
    meta: [
      { title: 'Shop Floor Digital Apps — CarbyneTech' },
      { name: "description", content: 'Operator-facing digital apps that connect people, machines, and SAP.' },
      { property: "og:title", content: 'Shop Floor Digital Apps — CarbyneTech' },
      { property: "og:description", content: 'Operator-facing digital apps that connect people, machines, and SAP.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/shopfloor-digital-apps' },
      { name: "twitter:title", content: 'Shop Floor Digital Apps — CarbyneTech' },
      { name: "twitter:description", content: 'Operator-facing digital apps that connect people, machines, and SAP.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/shopfloor-digital-apps' }],
  }),
});
