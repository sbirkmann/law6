"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { practices, industries } from "@/data/practices";
import { offices } from "@/data/offices";
import { cn } from "@/lib/utils";

const groups = [
  { key: "praxis", label: "Praxisgruppen/Expertise", items: practices.map((p) => p.title) },
  { key: "schwerpunkt", label: "Beratungsschwerpunkte", items: industries.map((p) => p.title) },
  { key: "standort", label: "Standorte", items: offices.map((o) => o.short) },
  { key: "sprache", label: "Sprachen", items: ["Deutsch", "Englisch", "Französisch", "Italienisch", "Spanisch", "Türkisch", "Chinesisch"] },
];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const available = new Set(["A", "B", "F", "G", "H", "K", "M", "N", "S", "T", "W", "Y"]);

export function FinderCard() {
  const [open, setOpen] = useState<string | null>(null);
  const [letter, setLetter] = useState("");
  const router = useRouter();
  return (
    <section className="container-x mt-12" aria-label="Anwaltssuche">
      <div className="relative mx-auto max-w-4xl overflow-hidden border border-line bg-white p-6 sm:p-10">
        <span aria-hidden className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-pine-soft/25" />
        <div className="relative grid gap-10 md:grid-cols-2">
          <ul className="divide-y divide-line">
            {groups.map((g) => (
              <li key={g.key}>
                <button type="button" onClick={() => setOpen(open === g.key ? null : g.key)} aria-expanded={open === g.key} className="flex w-full items-center justify-between py-3 text-left text-[14px] text-ink"><span>{g.label}</span><ChevronDown className={cn("h-4 w-4 text-copper transition-transform", open === g.key && "rotate-180")} /></button>
                {open === g.key && <ul className="max-h-40 overflow-y-auto pb-3 text-[13px] text-muted">{g.items.map((it) => <li key={it} className="py-0.5">{it}</li>)}</ul>}
              </li>
            ))}
          </ul>
          <div>
            <ul className="grid grid-cols-7 gap-2">
              {letters.map((L) => <li key={L}><button type="button" disabled={!available.has(L)} onClick={() => setLetter(L)} aria-pressed={letter === L} className={cn("flex h-9 w-full items-center justify-center text-[13px] font-medium", available.has(L) ? (letter === L ? "bg-pine text-white" : "bg-pine-soft/20 text-ink hover:bg-pine-soft/40") : "bg-stone text-muted-light")}>{L}</button></li>)}
            </ul>
            <div className="mt-6 text-right"><button type="button" onClick={() => router.push("/experten#suche")} className="btn-green">Ergebnis anzeigen</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
