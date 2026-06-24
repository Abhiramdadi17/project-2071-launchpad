import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/enterprise-data-engineering")({
  head: () => ({
    meta: [
      { title: 'Enterprise Data Engineering — CarbyneTech' },
      { name: "description", content: 'Modern data platforms, pipelines, and governance for enterprise scale.' },
      { property: "og:title", content: 'Enterprise Data Engineering — CarbyneTech' },
      { property: "og:description", content: 'Modern data platforms, pipelines, and governance for enterprise scale.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/enterprise-data-engineering' },
      { name: "twitter:title", content: 'Enterprise Data Engineering — CarbyneTech' },
      { name: "twitter:description", content: 'Modern data platforms, pipelines, and governance for enterprise scale.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/enterprise-data-engineering' }],
  }),
});
