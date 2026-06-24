import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: 'Culture — CarbyneTech' },
      { name: "description", content: 'Life and values at CarbyneTech — how we craft solutions that matter.' },
      { property: "og:title", content: 'Culture — CarbyneTech' },
      { property: "og:description", content: 'Life and values at CarbyneTech — how we craft solutions that matter.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/culture' },
      { name: "twitter:title", content: 'Culture — CarbyneTech' },
      { name: "twitter:description", content: 'Life and values at CarbyneTech — how we craft solutions that matter.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/culture' }],
  }),
});
