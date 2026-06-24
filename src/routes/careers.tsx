import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: 'Careers — CarbyneTech' },
      { name: "description", content: 'Join CarbyneTech and build AI-powered manufacturing and supply chain solutions.' },
      { property: "og:title", content: 'Careers — CarbyneTech' },
      { property: "og:description", content: 'Join CarbyneTech and build AI-powered manufacturing and supply chain solutions.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/careers' },
      { name: "twitter:title", content: 'Careers — CarbyneTech' },
      { name: "twitter:description", content: 'Join CarbyneTech and build AI-powered manufacturing and supply chain solutions.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/careers' }],
  }),
});
