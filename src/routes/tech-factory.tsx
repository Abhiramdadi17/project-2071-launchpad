import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tech-factory")({
  head: () => ({
    meta: [
      { title: 'Tech Factory — CarbyneTech' },
      { name: "description", content: 'CarbyneTech Tech Factory — engineering excellence delivered at scale.' },
      { property: "og:title", content: 'Tech Factory — CarbyneTech' },
      { property: "og:description", content: 'CarbyneTech Tech Factory — engineering excellence delivered at scale.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/tech-factory' },
      { name: "twitter:title", content: 'Tech Factory — CarbyneTech' },
      { name: "twitter:description", content: 'CarbyneTech Tech Factory — engineering excellence delivered at scale.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/tech-factory' }],
  }),
});
