import { BuySell } from "@/components/sections/BuySell";
import { DesignEye } from "@/components/sections/design-eye/DesignEye";
import { FeaturedListings } from "@/components/sections/FeaturedListings";
import { Hero } from "@/components/sections/hero/Hero";
import { HomeValue } from "@/components/sections/HomeValue";
import { IslandLife } from "@/components/sections/island-life/IslandLife";
import { Lifestyle } from "@/components/sections/Lifestyle";
import { MeetCindy } from "@/components/sections/MeetCindy";
import { NeighborhoodGuides } from "@/components/sections/NeighborhoodGuides";
import { SoldHomes } from "@/components/sections/SoldHomes";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IslandLife />
      <BuySell />
      <MeetCindy />
      <Lifestyle />
      <FeaturedListings />
      <DesignEye />
      <SoldHomes />
      <NeighborhoodGuides />
      <HomeValue />
      <Testimonials />
    </>
  );
}
