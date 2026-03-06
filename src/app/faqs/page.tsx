import { FaqAccordion, FaqCategory } from "@/components/faqs/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import Link from "next/link";

export const metadata = {
  title: "FAQs",
  description:
    "Answers to the most common questions about CSP's freight forwarding, procurement, supply chain, and cargo insurance services.",
  alternates: {
    canonical: "https://www.cspconsultancy.com/faqs",
  },
  openGraph: {
    title: "FAQs — CSP Global Consultancy",
    description:
      "Answers to the most common questions about CSP's freight forwarding, procurement, supply chain, and cargo insurance services.",
    url: "https://www.cspconsultancy.com/faqs",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const faqs: FaqCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What is CSP?",
        answer:
          "CSP (Consultancy & Supply Partners) is a leading Procurement and Supply Chain Management Services firm. We help governments, NGOs, and private companies source goods, manage logistics, and navigate international trade — from a single shipment to end-to-end supply chain solutions.",
      },
      {
        question: "Who do you work with?",
        answer:
          "We work with a wide range of clients including government agencies, international NGOs, multinationals, and growing businesses. Whether you need to move a single container or manage an ongoing procurement programme, we have the expertise to help.",
      },
      {
        question: "Where are you based?",
        answer:
          "Our headquarters are in Accra, Ghana. We operate across West Africa, the Middle East (Dubai & UAE), Hong Kong, China, the UK, and the United States — giving our clients a connected global network.",
      },
      {
        question: "What makes CSP different from other freight or procurement firms?",
        answer:
          "We combine deep local knowledge with a genuinely global network. Unlike pure freight brokers, we offer end-to-end services — procurement, logistics, cargo insurance, warehousing, and business advisory — under one roof, reducing complexity for our clients.",
      },
    ],
  },
  {
    category: "Freight & Shipping",
    items: [
      {
        question: "What shipping methods do you offer?",
        answer:
          "We handle sea freight (FCL and LCL), air freight, road haulage, and multimodal (combined) transport. The right mode depends on your cargo type, timeline, and budget — our team will recommend the best option.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Transit times vary by origin, destination, and mode. Sea freight from Asia to West Africa typically takes 25–35 days; air freight can be as fast as 3–7 days. We'll give you a realistic timeline when you request a quote.",
      },
      {
        question: "Do you handle customs clearance?",
        answer:
          "Yes. We manage full customs documentation, import/export permits, tariff classification, and liaison with port authorities and customs officials in Ghana and our partner markets. We aim to make this process as seamless as possible for you.",
      },
      {
        question: "Can you ship hazardous or oversized cargo?",
        answer:
          "Yes — we have experience handling project cargo, heavy lift, hazardous materials (IMDG/IATA compliant), and out-of-gauge shipments. Please contact us directly so we can assess the requirements for your specific cargo.",
      },
    ],
  },
  {
    category: "Procurement",
    items: [
      {
        question: "Can you source any type of product?",
        answer:
          "We source a broad range of goods including industrial equipment, medical supplies, construction materials, IT hardware, consumer goods, and agricultural inputs. If you have a sourcing need, reach out and we'll confirm whether we can help.",
      },
      {
        question: "How do you ensure product quality?",
        answer:
          "We conduct supplier vetting, factory audits, and pre-shipment inspections — either directly or through accredited third-party inspection firms. You receive inspection reports before goods are shipped, giving you confidence in what you're receiving.",
      },
      {
        question: "Is there a minimum order value?",
        answer:
          "We don't have a strict minimum, but procurement services are most cost-effective for orders above a certain threshold. Contact us with your requirement and we'll let you know if it's a good fit.",
      },
      {
        question: "Can you manage an ongoing procurement programme?",
        answer:
          "Absolutely. We work with clients on long-term procurement contracts, framework agreements, and repeat supply arrangements. We assign a dedicated account manager to keep things consistent.",
      },
    ],
  },
  {
    category: "Cargo Insurance",
    items: [
      {
        question: "Is my shipment automatically insured?",
        answer:
          "Cargo is not automatically insured by default. We strongly recommend cargo insurance for all shipments and can arrange comprehensive cover on your behalf. Please ask about this when requesting a quote.",
      },
      {
        question: "What does cargo insurance cover?",
        answer:
          "Depending on the policy, cargo insurance can cover loss, theft, damage in transit, loading/unloading accidents, general average contributions, and natural disasters. We'll help you choose the right level of cover for your goods and transit route.",
      },
      {
        question: "How do I make a cargo insurance claim?",
        answer:
          "If you need to make a claim, notify us immediately upon delivery of any damage or loss. We'll guide you through the documentation process and liaise with the insurer on your behalf to aim for a swift resolution.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I get a quote?",
        answer:
          "Fill in our contact form on the Contact page or email us directly. Include your cargo details (type, weight/volume, origin, destination) and your preferred timeline. We'll come back to you within one business day.",
      },
      {
        question: "What happens after I contact you?",
        answer:
          "A member of our team will reach out to understand your requirements in detail. We'll then prepare a tailored proposal covering routing options, timelines, costs, and any documentation requirements. There's no obligation at that stage.",
      },
      {
        question: "Do you work with first-time importers or exporters?",
        answer:
          "Yes — many of our clients are navigating international trade for the first time. We walk you through every step, from documentation and compliance to final delivery, so you never feel out of your depth.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <section className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Help Centre
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
              >
                Send us a message
              </Link>{" "}
              and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion categories={faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
