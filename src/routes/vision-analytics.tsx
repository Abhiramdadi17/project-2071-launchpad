import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vision-analytics")({
  head: () => ({
    meta: [
      { title: 'Vision Analytics — CarbyneTech' },
      { name: "description", content: 'Computer vision for quality, safety, and process intelligence.' },
      { property: "og:title", content: 'Vision Analytics — CarbyneTech' },
      { property: "og:description", content: 'Computer vision for quality, safety, and process intelligence.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/vision-analytics' },
      { name: "twitter:title", content: 'Vision Analytics — CarbyneTech' },
      { name: "twitter:description", content: 'Computer vision for quality, safety, and process intelligence.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/vision-analytics' }],
  }),
});
