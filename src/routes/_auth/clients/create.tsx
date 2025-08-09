import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/clients/create")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Create",
  }),
});

function RouteComponent() {
  return <div>Hello "/_auth/clients/create"!</div>;
}
