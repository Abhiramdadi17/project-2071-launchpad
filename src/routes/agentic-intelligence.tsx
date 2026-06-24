import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agentic-intelligence")({
  head: () => ({
    meta: [
      { title: 'Agentic Intelligence — CarbyneTech' },
      { name: "description", content: 'Autonomous AI agents that plan, decide, and act across enterprise workflows.' },
      { property: "og:title", content: 'Agentic Intelligence — CarbyneTech' },
      { property: "og:description", content: 'Autonomous AI agents that plan, decide, and act across enterprise workflows.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/agentic-intelligence' },
      { name: "twitter:title", content: 'Agentic Intelligence — CarbyneTech' },
      { name: "twitter:description", content: 'Autonomous AI agents that plan, decide, and act across enterprise workflows.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/agentic-intelligence' }],
  }),
});
