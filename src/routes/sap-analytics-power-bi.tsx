import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sap-analytics-power-bi")({
  head: () => ({
    meta: [
      { title: 'SAP Analytics & Power BI — CarbyneTech' },
      { name: "description", content: 'SAP analytics, BW/4HANA, and Power BI dashboards for real-time business insight.' },
      { property: "og:title", content: 'SAP Analytics & Power BI — CarbyneTech' },
      { property: "og:description", content: 'SAP analytics, BW/4HANA, and Power BI dashboards for real-time business insight.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sap-analytics-power-bi' },
      { name: "twitter:title", content: 'SAP Analytics & Power BI — CarbyneTech' },
      { name: "twitter:description", content: 'SAP analytics, BW/4HANA, and Power BI dashboards for real-time business insight.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sap-analytics-power-bi' }],
  }),
});
