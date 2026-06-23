import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/intelligent-web-mobile-apps")({
  head: () => ({
    meta: [
      { title: 'Intelligent Web & Mobile Apps — CarbyneTech' },
      { name: "description", content: 'Custom web and mobile applications enhanced with AI and analytics.' },
      { property: "og:title", content: 'Intelligent Web & Mobile Apps — CarbyneTech' },
      { property: "og:description", content: 'Custom web and mobile applications enhanced with AI and analytics.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/intelligent-web-mobile-apps' },
      { name: "twitter:title", content: 'Intelligent Web & Mobile Apps — CarbyneTech' },
      { name: "twitter:description", content: 'Custom web and mobile applications enhanced with AI and analytics.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/intelligent-web-mobile-apps' }],
  }),
});
