import { AboutHero } from "@/components/about/about-hero";
import { AboutCSP } from "@/components/about/about-csp";
import { VisionMission } from "@/components/about/vision-mission";
import { GlobalReach } from "@/components/about/global-reach";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "About Us",
  description:
    "Learn about CSP — a global procurement and supply chain management firm helping governments, NGOs, and corporates trade smarter.",
  alternates: {
    canonical: "https://www.cspprocure.com/about",
  },
  openGraph: {
    title: "About Us — CSP Global Consultancy",
    description:
      "Learn about CSP — a global procurement and supply chain management firm helping governments, NGOs, and corporates trade smarter.",
    url: "https://www.cspprocure.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "About Us — CSP Global Consultancy",
    description:
      "Learn about CSP — a global procurement and supply chain management firm helping governments, NGOs, and corporates trade smarter.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCSP />
      <VisionMission />
      <GlobalReach />
      <CtaBand />
    </>
  );
}
