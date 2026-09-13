"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  { image: "/images/glass-2.jpg", alt: "Farbige Glasfassade mit Lichtreflexen", title: "Aktuelle Meldungen", text: "Hier finden Sie eine Übersicht unserer aktuellen Neuigkeiten und Pressemeldungen.", href: "/aktuelles/news", label: "Mehr erfahren" },
  { image: "/images/team-2.jpg", alt: "Anwältin in einem modernen Büro", title: "Ihre Karriere bei Köhler Westphal", text: "Entdecken Sie Ihre Einstiegsmöglichkeiten bei uns! Ausgezeichnete Beratung ist nur möglich durch das Engagement hervorragender Kolleginnen und Kollegen.", href: "/karriere", label: "Mehr erfahren" },
  { image: "/images/dam-2.jpg", alt: "Staumauer mit See aus der Luft", title: "Energie & Infrastruktur", text: "Wind, Netze, Wasserstoff: Wir begleiten Energieprojekte von der Genehmigung bis zum Betrieb.", href: "/kompetenz/energie", label: "Zum Beratungsschwerpunkt" },
];

export function HeroSlider({ compact = false }: { compact?: boolean }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => { if (paused || reduce) return; const t = window.setInterval(() => setI((v) => (v + 1) % slides.length), 7000); return () => window.clearInterval(t); }, [paused, reduce]);
  const s = slides[i];
  return (
    <section className={cn("relative w-full overflow-hidden bg-pine text-white", compact ? "h-[360px]" : "h-[480px] lg:h-[520px]")} aria-roledescription="Karussell" aria-label="Aktuelle Themen">
      <AnimatePresence mode="sync">
        <motion.div key={i} className="absolute inset-0" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]"><Image src={s.image} alt={s.alt} fill priority={i === 0} sizes="100vw" className="object-cover" /></div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-pine via-pine/85 to-pine/20" />
        </motion.div>
      </AnimatePresence>
      <span aria-hidden className="absolute left-0 top-[28%] h-10 w-4 bg-copper anim-stretch" />
      <div className="container-x relative z-10 flex h-full items-center">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={reduce ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.6 }} className="max-w-lg">
            <h1 className="headline text-[32px] sm:text-[40px]">{s.title}</h1>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/85">{s.text}</p>
            <Link href={s.href} className="btn-white mt-6">{s.label}</Link>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="container-x absolute bottom-5 left-0 right-0 z-10 flex items-center gap-2 text-white/80">
        <button type="button" onClick={() => setI((i - 1 + slides.length) % slides.length)} aria-label="Vorheriger Slide" className="hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
        <button type="button" onClick={() => setPaused((v) => !v)} aria-label={paused ? "Abspielen" : "Pause"} className="hover:text-white">{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}</button>
        <button type="button" onClick={() => setI((i + 1) % slides.length)} aria-label="Nächster Slide" className="hover:text-white"><ChevronRight className="h-5 w-5" /></button>
      </div>
    </section>
  );
}
