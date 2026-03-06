import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Contact Us — CSP",
  description:
    "Have a shipment to move? A supply chain to rethink? Get in touch with the CSP team.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <CtaBand />
    </>
  );
}
