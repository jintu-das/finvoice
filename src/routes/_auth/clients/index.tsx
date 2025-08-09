import { buttonVariants } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/_auth/clients/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {" "}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Link to="/clients/create" className={buttonVariants()}>
          <Plus className="size-4" />
          Client
        </Link>
      </header>
      <p>
        This is the clients page. You can manage your clients here. Use the
        button above to add a new client.
      </p>
    </div>
  );
}
