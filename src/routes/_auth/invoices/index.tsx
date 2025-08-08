import { buttonVariants } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/_auth/invoices/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <Link to="/invoices/create" className={buttonVariants()}>
          <Plus className="size-4" />
          Add Invoices
        </Link>
      </header>

      <p>This is the invoices page. You can manage your invoices here.</p>
    </div>
  );
}
