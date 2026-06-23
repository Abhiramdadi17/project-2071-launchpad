import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sap-ewm")({
  head: () => ({
    meta: [
      { title: 'SAP EWM — CarbyneTech' },
      { name: "description", content: 'SAP Extended Warehouse Management implementation and optimisation.' },
      { property: "og:title", content: 'SAP EWM — CarbyneTech' },
      { property: "og:description", content: 'SAP Extended Warehouse Management implementation and optimisation.' },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://carbynetech-2026-3.lovable.app/sap-ewm' },
      { name: "twitter:title", content: 'SAP EWM — CarbyneTech' },
      { name: "twitter:description", content: 'SAP Extended Warehouse Management implementation and optimisation.' },
    ],
    links: [{ rel: "canonical", href: 'https://carbynetech-2026-3.lovable.app/sap-ewm' }],
  }),
});
