import { HeroSlider } from "@/components/home/HeroSlider";
import { Intro } from "@/components/home/Intro";
import { FinderCard } from "@/components/home/FinderCard";
import { TileGrid } from "@/components/home/TileGrid";
import { CareerBand } from "@/components/home/CareerBand";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Intro />
      <FinderCard />
      <TileGrid />
      <CareerBand />
    </>
  );
}
