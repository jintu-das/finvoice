import { buttonVariants } from "@/components/ui/button";
import { InvoicesList } from "@/features/invoices/components/invoices-list";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/_auth/invoices/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <header className="mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Invoices</h1>
          <Link to="/invoices/create" className={buttonVariants()}>
            <Plus className="size-4 mr-2" />
            Invoice
          </Link>
        </div>
        <p className="text-muted-foreground mt-1 mb-6">
          Manage and track your client invoices
        </p>
      </header>

      <InvoicesList />
    </div>
  );
}
