import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BarChartComponent } from "./BarChart";
import { PieChartOneComponent } from "./PieChartOne";
import { PieChartTwoComponent } from "./PieChartTwo";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { ptBR } from "date-fns/locale";

export function ReportPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 4, 1),
    to: new Date(2025, 4, 31),
  });

  return (
    <div className="flex flex-col m-5 gap-5">
      <div className="flex justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <Button id="date" variant={"outline"} className={cn("w-[220px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
              <CalendarIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "dd/LL/yyyy")} - {format(date.to, "dd/LL/yyyy")}
                  </>
                ) : (
                  format(date.from, "dd/LL/yyyy")
                )
              ) : (
                <span>Selecione uma data</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar locale={ptBR} initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex-1">
          <PieChartOneComponent />
        </div>
        <div className="flex-1">
          <PieChartTwoComponent />
        </div>
      </div>
      <BarChartComponent />
    </div>
  );
}
