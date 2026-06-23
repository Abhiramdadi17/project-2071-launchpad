import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: 'Contact — CarbyneTech' },
      { name: "description", content: 'Get in touch with CarbyneTech for AI, manufacturing, and supply chain solutions.' },
      { property: "og:title", content: 'Contact — CarbyneTech' },
      { property: "og:description", content: 'Get in touch with CarbyneTech for AI, manufacturing, and supply chain solutions.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/contact' },
      { name: "twitter:title", content: 'Contact — CarbyneTech' },
      { name: "twitter:description", content: 'Get in touch with CarbyneTech for AI, manufacturing, and supply chain solutions.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/contact' }],
  }),
});
