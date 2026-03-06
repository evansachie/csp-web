import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteLayout } from "@/components/layout/site-layout";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-app",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSP – Driving trade, seamlessly across the globe",
  description:
    "Import. Export. Consultancy. Procurement and Supply Chain Management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} font-sans antialiased`}
      >
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
