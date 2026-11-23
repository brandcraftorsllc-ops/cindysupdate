import { BuySell } from "@/components/sections/BuySell";
import { DesignEye } from "@/components/sections/design-eye/DesignEye";
import { FeaturedListings } from "@/components/sections/FeaturedListings";
import { Hero } from "@/components/sections/hero/Hero";
import { HomeValue } from "@/components/sections/HomeValue";
import { IslandLife } from "@/components/sections/island-life/IslandLife";
import { MeetCindy } from "@/components/sections/MeetCindy";
import { RecentlySold } from "@/components/sections/RecentlySold";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IslandLife />
      <BuySell />
      <MeetCindy />
      <FeaturedListings />
      <DesignEye />
      <RecentlySold />
      <Services />
      <HomeValue />
      <Testimonials />
    </>
  );
}
