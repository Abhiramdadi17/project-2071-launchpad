import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/microsoft-power-platform")({
  head: () => ({
    meta: [
      { title: 'Microsoft Power Platform — CarbyneTech' },
      { name: "description", content: 'Power Apps, Power Automate, and Power BI solutions tailored to your business.' },
      { property: "og:title", content: 'Microsoft Power Platform — CarbyneTech' },
      { property: "og:description", content: 'Power Apps, Power Automate, and Power BI solutions tailored to your business.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/microsoft-power-platform' },
      { name: "twitter:title", content: 'Microsoft Power Platform — CarbyneTech' },
      { name: "twitter:description", content: 'Power Apps, Power Automate, and Power BI solutions tailored to your business.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/microsoft-power-platform' }],
  }),
});
