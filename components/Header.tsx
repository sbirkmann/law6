"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, type NavItem } from "@/data/site";
import { practices, industries } from "@/data/practices";
import { cn } from "@/lib/utils";

function Panel({ item }: { item: NavItem }) {
  if (item.label === "Expertise") {
    return (
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div><p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-copper">Praxisgruppen</p><ul className="columns-2 gap-6 text-[13.5px] leading-6">{practices.map((p) => <li key={p.slug}><Link href={`/kompetenz/${p.slug}`} className="text-ink hover:text-pine">{p.title}</Link></li>)}</ul></div>
        <div><p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-copper">Beratungsschwerpunkte</p><ul className="text-[13.5px] leading-6">{industries.map((p) => <li key={p.slug}><Link href={`/kompetenz/${p.slug}`} className="text-ink hover:text-pine">{p.title}</Link></li>)}</ul></div>
        <div><p className="mb-3 text-[12px] font-bold uppercase tracking-wide text-copper">Mehr</p><ul className="text-[13.5px] leading-6">{item.children?.map((c) => <li key={c.href}><Link href={c.href} className="text-ink hover:text-pine">{c.label}</Link></li>)}</ul></div>
      </div>
    );
  }
  return <ul className="grid gap-2 text-[14px] sm:grid-cols-2 lg:grid-cols-3">{item.children?.map((c) => <li key={c.href}><Link href={c.href} className="chevron-link text-ink hover:text-pine">{c.label}</Link></li>)}</ul>;
}

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [openItem, setOpenItem] = useState<NavItem | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const timer = useRef<number | null>(null);
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const open = (i: NavItem) => { if (timer.current) window.clearTimeout(timer.current); setOpenItem(i.children ? i : null); };
  const close = () => { timer.current = window.setTimeout(() => setOpenItem(null), 150); };
  const keep = () => { if (timer.current) window.clearTimeout(timer.current); };
  useEffect(() => { const r = requestAnimationFrame(() => { setOpenItem(null); setMobile(false); }); return () => cancelAnimationFrame(r); }, [pathname]);
  useEffect(() => { document.documentElement.style.overflow = mobile ? "hidden" : ""; return () => { document.documentElement.style.overflow = ""; }; }, [mobile]);

  return (
    <>
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-pine focus:px-4 focus:py-2 focus:text-white">Zum Inhalt springen</a>
      <div className="sticky top-0 z-50 bg-white shadow-[0_1px_0_0_var(--color-line)]" onMouseLeave={close} onMouseEnter={keep}>
        <header className="container-x">
          <div className="flex items-start justify-between pt-3">
            <p className="text-[11px] font-medium tracking-wide text-muted" aria-label="Sprache"><span className="text-ink underline underline-offset-4">DE</span> <span className="mx-1">|</span> EN <span className="mx-1">|</span> CN</p>
            <Logo />
          </div>
          <div className="flex h-12 items-center justify-between">
            <nav aria-label="Hauptnavigation" className="hidden lg:block">
              <ul className="flex items-center gap-5">
                {nav.map((item) => (
                  <li key={item.href} onMouseEnter={() => open(item)}>
                    <Link href={item.href} className={cn("inline-flex items-center gap-1 text-[14px] transition-colors hover:text-pine", (active(item.href) || openItem?.href === item.href) ? "text-pine" : "text-ink")} aria-expanded={item.children ? openItem?.href === item.href : undefined}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <Link href="/experten#suche" aria-label="Suche" className="inline-flex h-9 w-9 items-center justify-center text-copper hover:text-pine"><Search className="h-4.5 w-4.5" strokeWidth={2.2} /></Link>
              <button type="button" onClick={() => setMobile((v) => !v)} aria-expanded={mobile} aria-controls="mobilmenue" aria-label={mobile ? "Menü schließen" : "Menü öffnen"} className="inline-flex h-9 w-9 items-center justify-center text-pine lg:hidden">{mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
            </div>
          </div>
        </header>
        <AnimatePresence>
          {openItem?.children && (
            <motion.div key={openItem.href} initial={reduce ? false : { opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="absolute inset-x-0 hidden border-t border-line bg-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)] lg:block" role="region" aria-label={`Untermenü ${openItem.label}`}>
              <div className="container-x py-8"><Panel item={openItem} /></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {mobile && (
          <motion.div id="mobilmenue" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 overflow-y-auto bg-white pt-[92px] lg:hidden">
            <nav aria-label="Mobile Navigation" className="container-x py-4">
              <ul className="divide-y divide-line">
                {nav.map((item) => (
                  <li key={item.href}>
                    <div className="flex items-center justify-between"><Link href={item.href} className="py-4 text-[19px] text-ink">{item.label}</Link>{item.children && <button type="button" onClick={() => setMobileOpen(mobileOpen === item.href ? null : item.href)} aria-expanded={mobileOpen === item.href} aria-label={`${item.label} aufklappen`} className="p-3"><ChevronDown className={cn("h-5 w-5 transition-transform", mobileOpen === item.href && "rotate-180")} /></button>}</div>
                    {item.children && mobileOpen === item.href && <div className="pb-5"><Panel item={item} /></div>}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
