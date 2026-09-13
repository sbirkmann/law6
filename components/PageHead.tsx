import Link from "next/link";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ crumbs }: { crumbs: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Brotkrumen" className="container-x pt-5">
      <ol className="flex flex-wrap gap-2 text-[12px] text-muted">
        <li><Link href="/" className="hover:text-pine">Startseite</Link></li>
        {crumbs.map((c) => <li key={c.label} className="flex gap-2"><span aria-hidden>›</span>{c.href ? <Link href={c.href} className="hover:text-pine">{c.label}</Link> : <span className="text-ink">{c.label}</span>}</li>)}
      </ol>
    </nav>
  );
}

export function PageHead({ crumbs, title, accent, eyebrow, intro, className }: { crumbs: { label: string; href?: string }[]; title: string; accent?: string; eyebrow?: string; intro?: React.ReactNode; className?: string }) {
  return (
    <>
      <div className="relative overflow-hidden bg-pine text-white">
        <span aria-hidden className="absolute left-0 top-[40%] h-10 w-4 bg-copper anim-stretch" />
        <div className={cn("container-x py-14 lg:py-20", className)}>
          {eyebrow && <p className="text-[12px] uppercase tracking-wide text-white/70">{eyebrow}</p>}
          <h1 className="headline anim-swipe mt-3 text-[34px] sm:text-[44px]">{title}{accent && <> <span className="text-copper">{accent}</span></>}</h1>
          {intro && <div className="mt-5 max-w-2xl text-[15px] font-light leading-relaxed text-white/85">{intro}</div>}
        </div>
      </div>
      <Breadcrumbs crumbs={crumbs} />
    </>
  );
}
