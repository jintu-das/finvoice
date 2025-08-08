import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: Index,
  loader: () => ({
    crumb: "Dashboard",
  }),
});

function Index() {
  return (
    <>
      <h1 className="text-3xl font-medium">Finvoice</h1>
      <p className="text-gray-600 mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non autem
        iusto id est dolorem, molestiae vero optio eius soluta reiciendis fuga
        deserunt repellat illum distinctio? Expedita asperiores dignissimos
        alias vel?
      </p>
    </>
  );
}
