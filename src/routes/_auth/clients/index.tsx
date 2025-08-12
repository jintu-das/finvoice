import { buttonVariants } from "@/components/ui/button";
import ClientsList from "@/features/clients/components/clients-list";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/_auth/clients/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <header className="mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Clients</h1>
          <Link to="/invoices/create" className={buttonVariants()}>
            <Plus className="size-4 mr-2" />
            Client
          </Link>
        </div>
        <p className="text-muted-foreground mt-1 mb-6">
          This is the clients page. You can manage your clients here. Use the
          button above to add a new client.
        </p>
      </header>

      <ClientsList />
    </div>
  );
}
