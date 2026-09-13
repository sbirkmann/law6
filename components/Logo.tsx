import Link from "next/link";
import { cn } from "@/lib/utils";

/** Two stacked bars (a stylised "KW") next to the wordmark. */
export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 20 22" className={cn("h-5 w-5", className)} aria-hidden>
      <rect x="0" y="0" width="8" height="10" fill={light ? "#fff" : "#0f3d5c"} />
      <rect x="0" y="12" width="8" height="10" fill={light ? "#fff" : "#0f3d5c"} />
      <rect x="10" y="0" width="10" height="22" fill="#7fae2a" />
    </svg>
  );
}

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Köhler Westphal – Startseite" className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark light={light} />
      <span className={cn("text-[22px] font-bold uppercase tracking-[0.04em] leading-none", light ? "text-white" : "text-pine")}>Köhler Westphal</span>
    </Link>
  );
}
