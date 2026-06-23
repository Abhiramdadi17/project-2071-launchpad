import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/condition-monitoring")({
  head: () => ({
    meta: [
      { title: 'Condition Monitoring — CarbyneTech' },
      { name: "description", content: 'Real-time equipment health monitoring to predict failures and prevent downtime.' },
      { property: "og:title", content: 'Condition Monitoring — CarbyneTech' },
      { property: "og:description", content: 'Real-time equipment health monitoring to predict failures and prevent downtime.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/condition-monitoring' },
      { name: "twitter:title", content: 'Condition Monitoring — CarbyneTech' },
      { name: "twitter:description", content: 'Real-time equipment health monitoring to predict failures and prevent downtime.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/condition-monitoring' }],
  }),
});
