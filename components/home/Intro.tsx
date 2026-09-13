import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Intro() {
  return (
    <Reveal className="container-x pt-16 text-center lg:pt-20">
      <p className="text-[11px] uppercase tracking-[0.3em] text-copper">Über uns</p><h2 className="headline mt-3 text-[30px] text-ink sm:text-[36px]">Wirtschaftskanzlei {site.name}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-[15.5px] font-light leading-relaxed text-ink">Köhler Westphal ist eine Partnerschaft mit mehr als 450 Anwältinnen, Anwälten, Steuerberatern und Notaren. Mit unseren Standorten in Berlin, Chemnitz, Düsseldorf, Frankfurt, Hamburg, Köln, München und Stuttgart gehört die Sozietät zu den großen wirtschaftsberatenden deutschen Kanzleien.</p>
    </Reveal>
  );
}
