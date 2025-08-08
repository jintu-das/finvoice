import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="font-sans antialiased">
        <Outlet />
      </main>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
