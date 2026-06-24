import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sap-application-support")({
  head: () => ({
    meta: [
      { title: 'SAP Application Support — CarbyneTech' },
      { name: "description", content: 'End-to-end SAP application management, support, and continuous improvement.' },
      { property: "og:title", content: 'SAP Application Support — CarbyneTech' },
      { property: "og:description", content: 'End-to-end SAP application management, support, and continuous improvement.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sap-application-support' },
      { name: "twitter:title", content: 'SAP Application Support — CarbyneTech' },
      { name: "twitter:description", content: 'End-to-end SAP application management, support, and continuous improvement.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sap-application-support' }],
  }),
});
