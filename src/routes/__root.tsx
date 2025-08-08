import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="font-sans antialiased">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
