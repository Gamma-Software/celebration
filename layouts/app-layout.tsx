import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { ModeToggle } from "@/components/theme-toogle";
import { Calendar, CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DatePickerDemo } from "@/components/date-picker";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full">
      <Header/>

      <main className="grow">
        <div className="flex items-center justify-center px-8">
          {children}
        </div>
      </main>

      <Footer/>
    </div>
  )
}
