import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sap-supply-chain-finance")({
  head: () => ({
    meta: [
      { title: 'SAP Supply Chain & Finance — CarbyneTech' },
      { name: "description", content: 'SAP solutions for supply chain, finance, and integrated operations.' },
      { property: "og:title", content: 'SAP Supply Chain & Finance — CarbyneTech' },
      { property: "og:description", content: 'SAP solutions for supply chain, finance, and integrated operations.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sap-supply-chain-finance' },
      { name: "twitter:title", content: 'SAP Supply Chain & Finance — CarbyneTech' },
      { name: "twitter:description", content: 'SAP solutions for supply chain, finance, and integrated operations.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sap-supply-chain-finance' }],
  }),
});
