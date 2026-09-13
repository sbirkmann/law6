import { cn } from "@/lib/utils";

export function SectionHead({ eyebrow, title, accent, text, className, light = false }: { eyebrow?: string; title: string; accent?: string; text?: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && <p className={cn("text-[12px] uppercase tracking-wide", light ? "text-white/70" : "text-copper")}>{eyebrow}</p>}
      <h2 className={cn("mt-2 text-[26px] font-bold sm:text-[30px]", light ? "text-white" : "text-ink")}>{title}{accent && <> <span className="text-pine">{accent}</span></>}</h2>
      {text && <div className={cn("mt-4 text-[14.5px] leading-relaxed", light ? "text-white/80" : "text-ink")}>{text}</div>}
    </div>
  );
}
