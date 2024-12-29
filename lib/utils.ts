import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function fromUrlDateToDate(date: string) {
  const [month, day] = date.split("-");
  return new Date(`${month} ${day}`);
}

export function fromDateToUrlDate(date: Date) {
  const month = date.toLocaleString("en", { month: "long" }).toLowerCase();
  const day = date.toLocaleString("en", { day: "numeric" });
  return `${month}${day}`;
}
