import { createFileRoute } from "@tanstack/react-router";

type BookConsultantSearch = { product?: string };

export const Route = createFileRoute("/book-consultant")({
  validateSearch: (search: Record<string, unknown>): BookConsultantSearch => ({
    product: typeof search.product === "string" ? search.product : undefined,
  }),
});
