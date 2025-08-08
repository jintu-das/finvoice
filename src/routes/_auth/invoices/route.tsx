import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/invoices")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Invoices",
  }),
});

function RouteComponent() {
  return <Outlet />;
}
