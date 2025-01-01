"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter } from "next/navigation";
import { fromDateToUrlDate } from "@/lib/utils";

export function DatePickerDemo() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const date = React.useMemo(() => {
    try {
      if (pathname.includes("api") || pathname === "/") {
        return new Date();
      }

      const urlDate = pathname.split("/")[1];
      if (!urlDate) return new Date();

      const month = urlDate.match(/([a-z]+)/)?.[0];
      const day = urlDate.match(/(\d+)/)?.[0];

      if (!month || !day) return new Date();

      const monthMap: { [key: string]: number } = {
        january: 0,
        february: 1,
        march: 2,
        april: 3,
        may: 4,
        june: 5,
        july: 6,
        august: 7,
        september: 8,
        october: 9,
        november: 10,
        december: 11,
      };

      const monthStr = month.toLowerCase();
      const monthNum = monthMap[monthStr];
      if (monthNum === undefined) return new Date();

      const dayNum = Number(day);
      if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) return new Date();

      const newDate = new Date(new Date().getFullYear(), monthNum, dayNum);
      return isNaN(newDate.getTime()) ? new Date() : newDate;
    } catch {
      return new Date();
    }
  }, [pathname]);

  const [dateState, setDateState] = React.useState<Date>(date);

  React.useEffect(() => {
    setDateState(date);
  }, [date]);

  if (pathname.includes("api") || pathname === "/") {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex self-center"
          onClick={() => {
            const newDate = new Date(dateState);
            newDate.setDate(dateState.getDate() - 1);
            setDateState(newDate);
            router.push(`/${fromDateToUrlDate(newDate)}`);
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-[200px] justify-center text-center font-normal",
              !date && "text-muted-foreground"
            )}
            onClick={() => setOpen(true)}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Sélectionner une date</span>}
          </Button>
        </PopoverTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex"
          onClick={() => {
            const newDate = new Date(dateState);
            newDate.setDate(dateState.getDate() + 1);
            setDateState(newDate);
            router.push(`/${fromDateToUrlDate(newDate)}`);
            // Close the popover
            setOpen(false);
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={dateState}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              setDateState(selectedDate);
              router.push(`/${fromDateToUrlDate(selectedDate)}`);
              setOpen(false); // Close the popover after selection
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
