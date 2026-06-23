import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/predictive-analytics")({
  head: () => ({
    meta: [
      { title: 'Predictive Analytics — CarbyneTech' },
      { name: "description", content: 'Forecast demand, failures, and outcomes with production-grade machine learning.' },
      { property: "og:title", content: 'Predictive Analytics — CarbyneTech' },
      { property: "og:description", content: 'Forecast demand, failures, and outcomes with production-grade machine learning.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/predictive-analytics' },
      { name: "twitter:title", content: 'Predictive Analytics — CarbyneTech' },
      { name: "twitter:description", content: 'Forecast demand, failures, and outcomes with production-grade machine learning.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/predictive-analytics' }],
  }),
});
