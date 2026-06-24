import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/decision-intelligence")({
  head: () => ({
    meta: [
      { title: 'Decision Intelligence — CarbyneTech' },
      { name: "description", content: 'Data-driven decision systems that combine analytics, AI, and human judgment.' },
      { property: "og:title", content: 'Decision Intelligence — CarbyneTech' },
      { property: "og:description", content: 'Data-driven decision systems that combine analytics, AI, and human judgment.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/decision-intelligence' },
      { name: "twitter:title", content: 'Decision Intelligence — CarbyneTech' },
      { name: "twitter:description", content: 'Data-driven decision systems that combine analytics, AI, and human judgment.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/decision-intelligence' }],
  }),
});
