import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inventiq")({
  head: () => ({
    meta: [
      { title: 'InventIQ — CarbyneTech' },
      { name: "description", content: 'AI-driven inventory intelligence to optimise stock, service, and working capital.' },
      { property: "og:title", content: 'InventIQ — CarbyneTech' },
      { property: "og:description", content: 'AI-driven inventory intelligence to optimise stock, service, and working capital.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/inventiq' },
      { name: "twitter:title", content: 'InventIQ — CarbyneTech' },
      { name: "twitter:description", content: 'AI-driven inventory intelligence to optimise stock, service, and working capital.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/inventiq' }],
  }),
});
