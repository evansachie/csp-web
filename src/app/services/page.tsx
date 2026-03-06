import { ServicesHero } from "@/components/services/services-hero";
import { ServiceBlocks } from "@/components/services/service-blocks";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Our Services",
  description:
    "Freight forwarding, warehousing, cargo insurance, supply chain management, business advisory, and IT consultancy — delivered by CSP worldwide.",
  alternates: {
    canonical: "https://www.cspconsultancy.com/services",
  },
  openGraph: {
    title: "Our Services — CSP Global Consultancy",
    description:
      "Freight forwarding, warehousing, cargo insurance, supply chain management, business advisory, and IT consultancy — delivered by CSP worldwide.",
    url: "https://www.cspconsultancy.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Our Services — CSP Global Consultancy",
    description:
      "Freight forwarding, warehousing, cargo insurance, supply chain management, business advisory, and IT consultancy.",
  },
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
