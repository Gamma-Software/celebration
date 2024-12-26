import Image from "next/image";
import Link from "next/link";
import { CelebrationCard } from "@/components/celebration-card";
import { ModeToggle } from "@/components/theme-toogle";
import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import TodayCelebrationLayout from "@/layouts/today-celebration-layout";
export default function Home() {
  return (
    <TodayCelebrationLayout>
      <CelebrationCard />
    </TodayCelebrationLayout>
  );
}
