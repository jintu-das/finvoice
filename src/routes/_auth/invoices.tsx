import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/invoices")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Invoices",
  }),
});

function RouteComponent() {
  return <div>Hello "/invoices"!</div>;
}
