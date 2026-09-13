import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Intro() {
  return (
    <Reveal className="container-x pt-16 text-center lg:pt-20">
      <h2 className="text-[26px] font-bold text-ink sm:text-[30px]">Wirtschaftskanzlei {site.name}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink">Köhler Westphal ist eine Partnerschaft mit mehr als 450 Anwältinnen, Anwälten, Steuerberatern und Notaren. Mit unseren Standorten in Berlin, Chemnitz, Düsseldorf, Frankfurt, Hamburg, Köln, München und Stuttgart gehört die Sozietät zu den großen wirtschaftsberatenden deutschen Kanzleien.</p>
    </Reveal>
  );
}
