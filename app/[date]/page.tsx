import CelebrationSection from "@/components/celebration-section";
import TodayCelebrationLayout from "@/layouts/today-celebration-layout";
import { redirect } from "next/navigation";
import celebrations from "@/data/celebrations.json";

export default async function Page(props: { params: { date: string } }) {
  const { date } = props.params;
  const dateString = String(date);
  const dateLower = dateString.toLowerCase();
  const month = dateLower.match(/([a-z]+)/)?.[0];
  const day = dateLower.match(/(\d+)/)?.[0];

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
  const monthStr = month?.toLowerCase() || "";
  const new_id = (monthMap[monthStr] || "") + (day?.padStart(2, "0") || "");

  const celebration = celebrations[new_id as keyof typeof celebrations];
  if (!celebration) {
    // redirect to home
    redirect("/");
  }

  return (
    <TodayCelebrationLayout>
      <CelebrationSection data={celebration} />
    </TodayCelebrationLayout>
  );
}
