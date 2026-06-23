import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/insights-events")({
  head: () => ({
    meta: [
      { title: 'Insights & Events — CarbyneTech' },
      { name: "description", content: 'CarbyneTech case studies, articles, and upcoming events on AI and supply chain.' },
      { property: "og:title", content: 'Insights & Events — CarbyneTech' },
      { property: "og:description", content: 'CarbyneTech case studies, articles, and upcoming events on AI and supply chain.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/insights-events' },
      { name: "twitter:title", content: 'Insights & Events — CarbyneTech' },
      { name: "twitter:description", content: 'CarbyneTech case studies, articles, and upcoming events on AI and supply chain.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/insights-events' }],
  }),
});
