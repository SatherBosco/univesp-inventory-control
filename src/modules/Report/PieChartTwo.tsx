import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { browser: "1", visitors: 21, fill: "var(--color-1)" },
  { browser: "2", visitors: 14, fill: "var(--color-2)" },
  { browser: "3", visitors: 12, fill: "var(--color-3)" },
  { browser: "4", visitors: 6, fill: "var(--color-4)" },
  { browser: "5", visitors: 2, fill: "var(--color-5)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  1: {
    label: "Cerveja",
    color: "hsl(var(--chart-1))",
  },
  2: {
    label: "Vinho",
    color: "hsl(var(--chart-2))",
  },
  3: {
    label: "Vela",
    color: "hsl(var(--chart-3))",
  },
  4: {
    label: "Palito",
    color: "hsl(var(--chart-4))",
  },
  5: {
    label: "Papel",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const PieChartTwoComponent = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Produtos com menos movimentação no período</CardTitle>
        <CardDescription>Apenas saída de estoque</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Movimentações
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
