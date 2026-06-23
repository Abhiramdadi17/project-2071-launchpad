import { createFileRoute } from "@tanstack/react-router";

const TITLE = "CarbyneTech — AI Powered Manufacturing & Supply Chain Intelligence";
const DESCRIPTION =
  "CarbyneTech delivers AI, SAP, and digital manufacturing solutions that turn data into decisions across the supply chain and shop floor.";
const URL = "https://carbynetech-2026-3.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});
