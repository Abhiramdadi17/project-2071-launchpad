import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/factory-finite-scheduling")({
  head: () => ({
    meta: [
      { title: 'Factory Finite Scheduling — CarbyneTech' },
      { name: "description", content: 'Constraint-aware production scheduling that maximises throughput and on-time delivery.' },
      { property: "og:title", content: 'Factory Finite Scheduling — CarbyneTech' },
      { property: "og:description", content: 'Constraint-aware production scheduling that maximises throughput and on-time delivery.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/factory-finite-scheduling' },
      { name: "twitter:title", content: 'Factory Finite Scheduling — CarbyneTech' },
      { name: "twitter:description", content: 'Constraint-aware production scheduling that maximises throughput and on-time delivery.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/factory-finite-scheduling' }],
  }),
});
