import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/clients")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Clients",
  }),
});

function RouteComponent() {
  return <Outlet />;
}
