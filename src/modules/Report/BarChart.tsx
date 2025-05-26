"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { productsStartList } from "../Inventory/productsStartList";
const chartData = [
  { date: "2025-05-02", arroz: 12, refrigerante: 10, cafe: 139 },
  { date: "2025-05-03", arroz: 25, refrigerante: 13, cafe: 980 },
  { date: "2025-05-04", arroz: 31, refrigerante: 5, cafe: 390 },
  { date: "2025-05-05", arroz: 12, refrigerante: 2, cafe: 480 },
  { date: "2025-05-06", arroz: 22, refrigerante: 15, cafe: 380 },
  { date: "2025-05-07", arroz: 34, refrigerante: 17, cafe: 430 },
  { date: "2025-05-08", arroz: 42, refrigerante: 51, cafe: 240 },
  { date: "2025-05-09", arroz: 5, refrigerante: 11, cafe: 430 },
  { date: "2025-05-10", arroz: 11, refrigerante: 23, cafe: 240 },
  { date: "2025-05-11", arroz: 17, refrigerante: 27, cafe: 240 },
  { date: "2025-05-12", arroz: 30, refrigerante: 21, cafe: 240 },
  { date: "2025-05-13", arroz: 28, refrigerante: 22, cafe: 240 },
  { date: "2025-05-14", arroz: 6, refrigerante: 17, cafe: 240 },
];

const chartConfig = {
  views: {
    label: "Movimentação",
  },
  arroz: {
    label: "Arroz",
    color: "hsl(var(--chart-2))",
  },
  refrigerante: {
    label: "Refrigerante",
    color: "hsl(var(--chart-2))",
  },
  cafe: {
    label: "Café",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const BarChartComponent = () => {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("arroz");

  const changeProduct = (value: string) => {
    setActiveChart(value.toLowerCase() as keyof typeof chartConfig);
  };

  const total: { [key: string]: number } = React.useMemo(
    () => ({
      arroz: chartData.reduce((acc, curr) => acc + curr.arroz, 0),
      refrigerante: chartData.reduce((acc, curr) => acc + curr.refrigerante, 0),
      cafe: chartData.reduce((acc, curr) => acc + curr.cafe, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Movimentações por produto</CardTitle>
          <CardDescription>Apenas saída de estoque</CardDescription>
        </div>
        <div className="flex items-center mr-10">
          <Select value={`${activeChart[0].toUpperCase()}${activeChart.slice(1)}`} onValueChange={changeProduct}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o produto" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Produtos</SelectLabel>
                {productsStartList.map((product) => (
                  <SelectItem key={product.name} value={product.name}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex">
          <div className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">{`${activeChart[0].toUpperCase()}${activeChart.slice(1)}`}</span>
            <span className="text-lg font-bold leading-none sm:text-3xl">{total[activeChart.toLowerCase()]}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
