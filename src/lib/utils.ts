import { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
} 