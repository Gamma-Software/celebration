import { redirect } from "next/navigation";
import { fromDateToUrlDate } from "@/lib/utils";

export default function Home() {
  const today = new Date();
  const dateString = fromDateToUrlDate(today);
  console.log(dateString);
  redirect(`/${dateString}`);
}
