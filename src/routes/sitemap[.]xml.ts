import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://carbynetech-2026-3.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const PATHS = [
  "/",
  "/agentic-intelligence",
  "/book-consultant",
  "/careers",
  "/condition-monitoring",
  "/contact",
  "/culture",
  "/decision-intelligence",
  "/enterprise-data-engineering",
  "/factory-finite-scheduling",
  "/insights-events",
  "/intelligent-web-mobile-apps",
  "/inventiq",
  "/microsoft-power-platform",
  "/predictive-analytics",
  "/sap-analytics-power-bi",
  "/sap-application-support",
  "/sap-ewm",
  "/sap-ibp",
  "/sap-rise-implementation",
  "/sap-supply-chain-finance",
  "/sap-value-creation",
  "/sfx9-mes",
  "/shopfloor",
  "/shopfloor-digital-apps",
  "/splunk-ai-applications",
  "/tech-factory",
  "/vision-analytics",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = PATHS.map((path) => ({
          path,
          changefreq: "weekly",
          priority: path === "/" ? "1.0" : "0.7",
        }));

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});