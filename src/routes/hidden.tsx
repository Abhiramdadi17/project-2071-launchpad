import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hidden")({
  head: () => ({
    meta: [
      { title: 'CarbyneTech — CarbyneTech' },
      { name: "description", content: 'CarbyneTech — AI powered manufacturing and supply chain intelligence.' },
      { property: "og:title", content: 'CarbyneTech — CarbyneTech' },
      { property: "og:description", content: 'CarbyneTech — AI powered manufacturing and supply chain intelligence.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/hidden' },
      { name: "twitter:title", content: 'CarbyneTech — CarbyneTech' },
      { name: "twitter:description", content: 'CarbyneTech — AI powered manufacturing and supply chain intelligence.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/hidden' }],
  }),
});
