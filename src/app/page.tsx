import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { ServicesOverview } from "@/components/services-overview";
import { Industries } from "@/components/industries";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
