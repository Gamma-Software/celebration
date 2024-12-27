import Celebration from "@/components/celebration";
import CelebrationFull from "@/components/celebration-full";
import TodayCelebrationLayout from "@/layouts/today-celebration-layout";


export default function Home() {
  return (
    <TodayCelebrationLayout>
      <CelebrationFull />
    </TodayCelebrationLayout>
  )
}
