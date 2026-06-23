import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sap-ibp")({
  head: () => ({
    meta: [
      { title: 'SAP IBP — CarbyneTech' },
      { name: "description", content: 'SAP Integrated Business Planning for demand, supply, and S&OP.' },
      { property: "og:title", content: 'SAP IBP — CarbyneTech' },
      { property: "og:description", content: 'SAP Integrated Business Planning for demand, supply, and S&OP.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sap-ibp' },
      { name: "twitter:title", content: 'SAP IBP — CarbyneTech' },
      { name: "twitter:description", content: 'SAP Integrated Business Planning for demand, supply, and S&OP.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sap-ibp' }],
  }),
});
