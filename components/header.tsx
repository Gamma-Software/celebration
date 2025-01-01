"use client";

import Link from "next/link";
import Image from "next/image";
import { DatePickerDemo } from "@/components/date-picker";

export default function Header() {
  return (
    <header className="shadow-lg dark:shadow-zinc-900/40 sticky top-0 z-50 bg-background h-[84px]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-0"
      >
        <Link href="/">
          <div className="flex lg:flex-1 items-center gap-2">
            <span className="sr-only">Célébrations</span>

            <Image
              alt="Célébrations calendaires logo"
              src="/logo.svg"
              className="h-8 w-auto"
              width={32}
              height={32}
            />
            <p className="text-sm sm:text-xl font-bold">Célébrations</p>
          </div>
        </Link>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <DatePickerDemo />
        </div>
      </nav>
    </header>
  );
}
