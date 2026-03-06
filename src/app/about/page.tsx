import { AboutHero } from "@/components/about/about-hero";
import { AboutCSP } from "@/components/about/about-csp";
import { VisionMission } from "@/components/about/vision-mission";
import { MeetTheTeam } from "@/components/about/meet-the-team";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "About Us — CSP",
  description:
    "Learn about CSP — a global procurement and supply chain management firm helping governments, NGOs, and corporates trade smarter.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCSP />
      <VisionMission />
      <MeetTheTeam />
      <CtaBand />
    </>
  );
}
