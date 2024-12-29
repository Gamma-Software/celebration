"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation";
import { fromDateToUrlDate } from "@/lib/utils";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>(new Date())
  const router = useRouter();

  return (
    <Popover>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const newDate = new Date(date);
              newDate.setDate(date.getDate() - 1);
              setDate(newDate);
              router.push(`/${fromDateToUrlDate(newDate)}`)
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
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Sélectionner une date</span>}
          </Button>
          </PopoverTrigger>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const newDate = new Date(date);
              newDate.setDate(date.getDate() + 1);
              setDate(newDate);
              router.push(`/${fromDateToUrlDate(newDate)}`);
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            selectedDate && setDate(selectedDate)
            router.push(`/${fromDateToUrlDate(selectedDate)}`)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
