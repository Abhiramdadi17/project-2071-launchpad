import { createLazyFileRoute } from "@tanstack/react-router";
import Page from "@/pages/BookConsultant";

export const Route = createLazyFileRoute("/book-consultant")({
  component: Page,
});
