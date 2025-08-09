import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

type StatCardProps = {
  title: string;
  value: number;
  subtitle: string;
};

export default function StatCard(props: StatCardProps) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{props.title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          ${props.value}
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <TrendingUp />
            +12.5%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Trending up this month <TrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground">{props.subtitle}</div>
      </CardFooter>
    </Card>
  );
}
