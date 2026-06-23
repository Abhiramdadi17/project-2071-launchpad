import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sap-rise-implementation")({
  head: () => ({
    meta: [
      { title: 'SAP RISE Implementation — CarbyneTech' },
      { name: "description", content: 'RISE with SAP migration and S/4HANA Cloud transformation.' },
      { property: "og:title", content: 'SAP RISE Implementation — CarbyneTech' },
      { property: "og:description", content: 'RISE with SAP migration and S/4HANA Cloud transformation.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sap-rise-implementation' },
      { name: "twitter:title", content: 'SAP RISE Implementation — CarbyneTech' },
      { name: "twitter:description", content: 'RISE with SAP migration and S/4HANA Cloud transformation.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sap-rise-implementation' }],
  }),
});
