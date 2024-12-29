import { Celebration } from "@/components/celebration-section";

import CelebrationSection from "@/components/celebration-section";
import TodayCelebrationLayout from "@/layouts/today-celebration-layout";

export default async function Page(props: { params: { date: string } }) {
  const { date } = props.params;
  const dateString = String(date);
  const dateLower = dateString.toLowerCase();
  const month = dateLower.match(/([a-z]+)/)?.[0];
  const day = dateLower.match(/(\d+)/)?.[0];

  const monthMap: {[key: string]: string} = {
    'january': '01',
    'february': '02',
    'march': '03',
    'april': '04',
    'may': '05',
    'june': '06',
    'july': '07',
    'august': '08',
    'september': '09',
    'october': '10',
    'november': '11',
    'december': '12'
  };
  const new_id = (monthMap[month] || '') + (day?.padStart(2, '0') || '');

  const celebrations = require("@/data/celebrations.json");
  const celebration = celebrations[new_id];
  if (!celebration) {
    throw new Error("Date not found");
  }

  return (
    <TodayCelebrationLayout>
      <CelebrationSection data={celebration} />
    </TodayCelebrationLayout>
  )
}
