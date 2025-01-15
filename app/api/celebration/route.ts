import { NextResponse } from "next/server";
import celebrations from "@/data/celebrations.json";
import { fromDateToUrlDate } from "@/lib/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date")
    ? new Date(searchParams.get("date")!)
    : new Date();

  const dateString = fromDateToUrlDate(date);
  const monthDay = dateString.match(/([a-z]+)(\d+)/);

  if (!monthDay) {
    return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
  }

  const monthMap: { [key: string]: string } = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };

  const id = monthMap[monthDay[1]] + monthDay[2].padStart(2, "0");
  const celebration = celebrations[id as keyof typeof celebrations];

  if (!celebration) {
    return NextResponse.json(
      { error: "No celebration found" },
      { status: 404 }
    );
  }

  return NextResponse.json(celebration);
}
