import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Contact Us",
  description:
    "Have a shipment to move? A supply chain to rethink? Get in touch with the CSP team.",
  alternates: {
    canonical: "https://www.cspconsultancy.com/contact",
  },
  openGraph: {
    title: "Contact Us — CSP Global Consultancy",
    description:
      "Have a shipment to move? A supply chain to rethink? Get in touch with the CSP team in Accra, Ghana.",
    url: "https://www.cspconsultancy.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Contact Us — CSP Global Consultancy",
    description:
      "Have a shipment to move? A supply chain to rethink? Get in touch with the CSP team.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <CtaBand />
    </>
  );
}
