import { ServicesHero } from "@/components/services/services-hero";
import { ServiceBlocks } from "@/components/services/service-blocks";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Our Services — CSP",
  description:
    "Freight forwarding, warehousing, cargo insurance, supply chain management, business advisory, and IT consultancy.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceBlocks />
      <CtaBand />
    </>
  );
}
