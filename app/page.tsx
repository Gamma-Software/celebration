import CelebrationSection, { Celebration } from "@/components/celebration-section";
import TodayCelebrationLayout from "@/layouts/today-celebration-layout";
import { redirect } from "next/navigation";


export default function Home() {
  const today = new Date();
  const month = today.toLocaleString('en', { month: 'long' }).toLowerCase();
  const day = today.toLocaleString('en', { day: 'numeric' })
  const dateString = `${month}${day}`;
  redirect(`/${dateString}`);
}
