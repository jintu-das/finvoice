import CreateInvoiceForm from "@/features/invoices/components/create-invoice-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/invoices/create")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Create",
  }),
});

function RouteComponent() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="space-y-4">
        <header className="mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold"> Create New Invoice</h1>
          </div>
          <p className="text-muted-foreground mt-1 mb-6">
            Create and manage your invoices efficiently
          </p>
        </header>

        <CreateInvoiceForm />
      </div>

      <div>
        <p>Preview invoice</p>
      </div>
    </div>
  );
}
