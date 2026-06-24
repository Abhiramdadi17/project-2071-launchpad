import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shopfloor")({
  head: () => ({
    meta: [
      { title: 'Shop Floor — CarbyneTech' },
      { name: "description", content: 'Digital shop floor solutions for visibility, quality, and OEE.' },
      { property: "og:title", content: 'Shop Floor — CarbyneTech' },
      { property: "og:description", content: 'Digital shop floor solutions for visibility, quality, and OEE.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/shopfloor' },
      { name: "twitter:title", content: 'Shop Floor — CarbyneTech' },
      { name: "twitter:description", content: 'Digital shop floor solutions for visibility, quality, and OEE.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/shopfloor' }],
  }),
});
