"use client";
import { useEffect } from "react";
import { fromDateToUrlDate } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Use useEffect to access window after component mounts
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userDate = params.get("date")
      ? new Date(params.get("date")!)
      : new Date();
    const dateString = fromDateToUrlDate(userDate);
    router.push(`/${dateString}`);
  }, []);
}
