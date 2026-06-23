import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sap-value-creation")({
  head: () => ({
    meta: [
      { title: 'SAP Value Creation — CarbyneTech' },
      { name: "description", content: 'Unlocking measurable value from your SAP investment.' },
      { property: "og:title", content: 'SAP Value Creation — CarbyneTech' },
      { property: "og:description", content: 'Unlocking measurable value from your SAP investment.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sap-value-creation' },
      { name: "twitter:title", content: 'SAP Value Creation — CarbyneTech' },
      { name: "twitter:description", content: 'Unlocking measurable value from your SAP investment.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sap-value-creation' }],
  }),
});
