"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronLeft, ChevronRight, Newspaper, Pause } from "lucide-react";
import { deals, news, press } from "@/data/insights";
import { events } from "@/data/events";
import { Reveal } from "@/components/ui/Reveal";

export function TileGrid() {
  const featured = [deals[0], deals[1], press[0]];
  const [i, setI] = useState(0);
  const f = featured[i];
  const e = events[0];
  const n = press[1];
  const p = news[0];
  return (
    <Reveal className="container-x mt-16 lg:mt-20">
      <div className="mx-auto grid max-w-5xl md:grid-cols-2">
        <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-pine p-8 text-white">
          <Image src={f.image} alt="" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover opacity-40" />
          <div className="relative"><p className="text-[11px] uppercase tracking-wide text-white/70">Mandat</p><h2 className="mt-2 text-[20px] leading-snug">{f.title}</h2><Link href={`/aktuelles/${f.slug}`} className="chevron-link mt-3 text-white/90 hover:text-white">Mehr erfahren</Link></div>
          <div className="relative mt-5 flex gap-3 text-white/80"><button type="button" onClick={() => setI((i - 1 + featured.length) % featured.length)} aria-label="Zurück"><ChevronLeft className="h-5 w-5" /></button><Pause className="h-4 w-4" aria-hidden /><button type="button" onClick={() => setI((i + 1) % featured.length)} aria-label="Weiter"><ChevronRight className="h-5 w-5" /></button></div>
        </div>
        <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-stone p-8">
          <CalendarDays aria-hidden className="absolute -right-3 -top-3 h-28 w-28 text-stone-deep" strokeWidth={1.2} />
          <p className="text-[11px] uppercase tracking-wide text-muted">{e.tag} · {e.dateLabel}</p><h2 className="mt-2 text-[20px] leading-snug text-ink">{e.title}</h2><p className="mt-2 text-[13.5px] text-muted">{e.place}</p><Link href="/aktuelles/veranstaltungen" className="chevron-link mt-3 text-copper hover:text-pine">Alle Events</Link>
        </div>
        <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-stone p-8">
          <Newspaper aria-hidden className="absolute -right-3 -top-3 h-28 w-28 text-stone-deep" strokeWidth={1.2} />
          <p className="text-[11px] uppercase tracking-wide text-muted">Pressemeldung · {n.dateLabel}</p><h2 className="mt-2 text-[20px] leading-snug text-ink">{n.title}</h2><Link href="/aktuelles/news" className="chevron-link mt-3 text-copper hover:text-pine">Alle Meldungen</Link>
        </div>
        <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-pine-mid p-8 text-white">
          <span aria-hidden className="absolute -right-2 -top-6 text-[140px] font-bold leading-none text-white/10">§</span>
          <p className="text-[11px] uppercase tracking-wide text-white/70">Publikation · {p.dateLabel}</p><h2 className="mt-2 text-[20px] leading-snug">{p.title}</h2><Link href="/aktuelles/know-how" className="chevron-link mt-3 text-white/90 hover:text-white">Alle Publikationen</Link>
        </div>
      </div>
    </Reveal>
  );
}
