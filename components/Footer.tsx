import Link from "next/link";
import { footerLinks, site } from "@/data/site";
import { awards } from "@/data/company";

export function Footer() {
  const links = footerLinks["Wichtige Links"];
  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-[13px] font-bold text-ink">Wichtige Links</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-[13px] text-ink">{links.map((l) => <li key={l.label}><Link href={l.href} className="hover:text-pine">{l.label}</Link></li>)}</ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-[13px] font-bold text-ink">Kontakt</h2>
          <p className="mt-3 text-[13px]"><a href={`mailto:${site.email}`} className="text-copper hover:text-pine">{site.email}</a></p>
          <ul className="mt-8 flex gap-2" aria-label="Soziale Netzwerke">{["in", "▶", "wc", "🎙"].map((s, i) => <li key={i}><a href="#" aria-label={["LinkedIn", "YouTube", "WeChat", "Podcast"][i] + " (Demo)"} className="inline-flex h-8 w-8 items-center justify-center bg-pine-mid text-[12px] font-bold text-white hover:bg-pine">{s}</a></li>)}</ul>
        </div>
        <ul className="grid grid-cols-3 gap-3 lg:col-span-4" aria-label="Auszeichnungen (fiktiv)">
          {awards.slice(0, 6).map((a) => <li key={a.title + a.year} className="flex aspect-[4/3] flex-col items-center justify-center border border-line p-2 text-center"><span className="text-[9px] uppercase tracking-wide text-muted">{a.by.replace(" (fiktiv)", "")}</span><span className="mt-1 text-[11px] font-bold leading-tight text-pine">{a.title}</span><span className="mt-1 text-[10px] text-muted">{a.year}</span></li>)}
        </ul>
      </div>
      <div className="border-t border-line"><p className="container-x py-4 text-[12px] leading-relaxed text-muted"><strong className="font-semibold text-ink">Demo-Projekt:</strong> Köhler Westphal ist eine fiktive Kanzlei. Alle Namen, Personen, Mandate, Kennzahlen, Auszeichnungen und Inhalte sind erfunden. Fotos: Unsplash. © {new Date().getFullYear()}</p></div>
    </footer>
  );
}
