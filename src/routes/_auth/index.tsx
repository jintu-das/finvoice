import StatCard from "@/features/dashboard/components/stat-card";
import { DASHBOARD_MOCK_DATA } from "@/lib/mock-data";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: Index,
  loader: () => ({
    crumb: "Dashboard",
  }),
});

function Index() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {DASHBOARD_MOCK_DATA.stats.map((stat) => (
          <StatCard
            key={stat.id}
            subtitle={stat.subtitle}
            title={stat.title}
            value={stat.value}
          />
        ))}
        {/* <div className="bg-muted/80 aspect-video rounded-xl" />
        <div className="bg-muted/80 aspect-video rounded-xl" />
        <div className="bg-muted/80 aspect-video rounded-xl" /> */}
      </div>
      <div className="aspect-video bg-muted/80 rounded-xl" />
    </div>
  );
}
