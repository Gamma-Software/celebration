import CelebrationSection, { Celebration } from "@/components/celebration-section";
import TodayCelebrationLayout from "@/layouts/today-celebration-layout";
import { fromDateToUrlDate } from "@/lib/utils";
import { redirect } from "next/navigation";


export default function Home() {
  const today = new Date();
  const dateString = fromDateToUrlDate(today);
  console.log(dateString);
  redirect(`/${dateString}`);
}
