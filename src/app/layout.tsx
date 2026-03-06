import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteLayout } from "@/components/layout/site-layout";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-app",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.cspconsultancy.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CSP – Driving trade, seamlessly across the globe",
    template: "%s | CSP Global Consultancy",
  },
  description:
    "CSP is a leading Procurement and Supply Chain Management Services firm. We deliver freight forwarding, warehousing, cargo insurance, and business advisory to governments, NGOs, and corporates worldwide.",
  keywords: [
    "procurement",
    "supply chain management",
    "freight forwarding",
    "cargo insurance",
    "warehousing",
    "logistics",
    "import export",
    "business advisory",
    "IT consultancy",
    "Ghana",
    "Africa",
    "global trade",
  ],
  authors: [{ name: "CSP Global Consultancy" }],
  creator: "CSP Global Consultancy",
  publisher: "CSP Global Consultancy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "CSP Global Consultancy",
    title: "CSP – Driving trade, seamlessly across the globe",
    description:
      "Leading Procurement and Supply Chain Management firm. Freight forwarding, warehousing, cargo insurance, and advisory for governments, NGOs, and corporates worldwide.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "CSP Global Consultancy – Driving trade, seamlessly across the globe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSP – Driving trade, seamlessly across the globe",
    description:
      "Leading Procurement and Supply Chain Management firm. Freight forwarding, warehousing, cargo insurance, and advisory.",
    images: ["/icon.png"],
    creator: "@CSPConsultancy",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CSP Global Consultancy",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-white.svg`,
  description:
    "CSP is a leading Procurement and Supply Chain Management Services firm specialising in procurement services and supply chain management.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@cspconsultancy.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/cspconsultancy",
    "https://twitter.com/CSPConsultancy",
    "https://www.instagram.com/cspconsultancy",
    "https://www.facebook.com/cspconsultancy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
