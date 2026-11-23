import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { BuySell } from "@/components/sections/BuySell";
import { DesignEye } from "@/components/sections/design-eye/DesignEye";
import { FeaturedListing } from "@/components/sections/FeaturedListing";
import { Hero } from "@/components/sections/hero/Hero";
import { HomeValue } from "@/components/sections/HomeValue";
import { IslandLife } from "@/components/sections/island-life/IslandLife";
import { RecentlySold } from "@/components/sections/RecentlySold";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-oyster text-driftwood">
      <SiteHeader />
      <main>
        <Hero />
        <IslandLife />
        <DesignEye />
        <BuySell />
        <FeaturedListing />
        <RecentlySold />
        <About />
        <Services />
        <HomeValue />
        <Testimonials />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </div>
  );
}
