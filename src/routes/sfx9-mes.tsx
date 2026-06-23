import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sfx9-mes")({
  head: () => ({
    meta: [
      { title: 'SFx9 MES — CarbyneTech' },
      { name: "description", content: 'Modern Manufacturing Execution System for connected, paperless shop floors.' },
      { property: "og:title", content: 'SFx9 MES — CarbyneTech' },
      { property: "og:description", content: 'Modern Manufacturing Execution System for connected, paperless shop floors.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sfx9-mes' },
      { name: "twitter:title", content: 'SFx9 MES — CarbyneTech' },
      { name: "twitter:description", content: 'Modern Manufacturing Execution System for connected, paperless shop floors.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sfx9-mes' }],
  }),
});
