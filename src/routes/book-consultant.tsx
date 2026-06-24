import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/book-consultant")({
  head: () => ({
    meta: [
      { title: 'Book a Consultant — CarbyneTech' },
      { name: "description", content: 'Talk to a CarbyneTech consultant about your manufacturing or supply chain challenge.' },
      { property: "og:title", content: 'Book a Consultant — CarbyneTech' },
      { property: "og:description", content: 'Talk to a CarbyneTech consultant about your manufacturing or supply chain challenge.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/book-consultant' },
      { name: "twitter:title", content: 'Book a Consultant — CarbyneTech' },
      { name: "twitter:description", content: 'Talk to a CarbyneTech consultant about your manufacturing or supply chain challenge.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/book-consultant' }],
  }),
});
