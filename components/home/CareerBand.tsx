import Image from "next/image";
import Link from "next/link";

export function CareerBand() {
  return (
    <section className="relative mt-16 overflow-hidden bg-pine text-white lg:mt-20" aria-label="Karriere">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]"><Image src="/images/team-3.jpg" alt="Kollegin an einem Tisch im Büro" fill sizes="100vw" className="object-cover" /></div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-pine via-pine/90 to-pine/15" />
      <span aria-hidden className="absolute left-0 top-[18%] h-10 w-4 bg-copper" />
      <div className="container-x relative py-20 lg:py-28">
        <div className="max-w-md">
          <h2 className="headline text-[32px] sm:text-[38px]">Ihre Karriere bei<br />Köhler Westphal</h2>
          <p className="mt-5 text-[14px] leading-relaxed text-white/85">Ausgezeichnete Beratungsleistungen sind nur möglich durch das Engagement hervorragender Kolleginnen und Kollegen. Entdecken Sie Ihre Einstiegsmöglichkeiten.</p>
          <Link href="/karriere" className="chevron-link mt-6 text-white">Zur Karriereseite</Link>
          <ul className="mt-4 space-y-1 text-[13.5px]">{[["Rechtsanwälte w/m/d", "/karriere/lawyers"], ["Mitarbeiter w/m/d", "/karriere/lawyers#business"], ["Referendare, wiss. Mitarbeiter, Praktikanten w/m/d", "/karriere/lawyers#talents"]].map(([l, h]) => <li key={h}><Link href={h} className="chevron-link text-white/90 hover:text-white">{l}</Link></li>)}</ul>
        </div>
      </div>
    </section>
  );
}
