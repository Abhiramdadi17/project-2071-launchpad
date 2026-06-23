import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/splunk-ai-applications")({
  head: () => ({
    meta: [
      { title: 'Splunk AI Applications — CarbyneTech' },
      { name: "description", content: 'AI-driven observability and operations on Splunk.' },
      { property: "og:title", content: 'Splunk AI Applications — CarbyneTech' },
      { property: "og:description", content: 'AI-driven observability and operations on Splunk.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/splunk-ai-applications' },
      { name: "twitter:title", content: 'Splunk AI Applications — CarbyneTech' },
      { name: "twitter:description", content: 'AI-driven observability and operations on Splunk.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/splunk-ai-applications' }],
  }),
});
