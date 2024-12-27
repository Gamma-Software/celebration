'use client'

import { Calendar, CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toogle";
import Link from "next/link";
import { DatePickerDemo } from "@/components/date-picker";
import { useState } from 'react'
import {
  SquareX,
} from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="shadow-sm">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-0">
        <div className="flex lg:flex-1 items-center gap-2">
          <span className="sr-only">Célébrations calendaires</span>
          <img
            alt="Célébrations calendaires logo"
            src="/logo.svg"
            className="h-8 w-auto"
          />
          <p className="text-xl font-bold">Célébrations calendaires</p>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DatePickerDemo/>
        </div>
      </nav>
    </header>
  )
}
