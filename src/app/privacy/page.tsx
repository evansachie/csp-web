import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CSP Global Consultancy collects, uses, and protects your personal information.",
  alternates: { canonical: "https://www.cspprocure.com/privacy" },
};

const sections = [
  {
    heading: "1. Who we are",
    body: `CSP Global Consultancy ("CSP", "we", "us", or "our") is a Procurement and Supply Chain Management Services firm registered in Ghana. Our registered office is in Accra, Ghana. This Privacy Policy explains how we handle personal information collected through our website at cspprocure.com and through your dealings with us.`,
  },
  {
    heading: "2. Information we collect",
    body: `We collect information you provide directly to us, including:
• Name, company name, email address, and phone number when you submit our contact form or request a quote.
• Correspondence you send us by email or any other means.

We also collect certain technical data automatically when you visit our website, including your IP address, browser type, pages visited, and time spent on pages, via standard web server logs and analytics tools.`,
  },
  {
    heading: "3. How we use your information",
    body: `We use the information we collect to:
• Respond to your enquiries and provide the services you request.
• Send you quotes, proposals, and relevant service information.
• Improve our website and services.
• Comply with legal and regulatory obligations.

We do not sell, rent, or share your personal information with third parties for their own marketing purposes.`,
  },
  {
    heading: "4. Legal basis for processing",
    body: `Where applicable under data protection law, we process your personal data on the following legal bases:
• Contractual necessity — to perform services you have requested.
• Legitimate interests — to respond to enquiries and improve our services.
• Legal obligation — to comply with applicable laws and regulations.
• Consent — where you have given us explicit permission.`,
  },
  {
    heading: "5. Data retention",
    body: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.`,
  },
  {
    heading: "6. Data security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no transmission over the internet can be guaranteed as fully secure.`,
  },
  {
    heading: "7. Third-party services",
    body: `Our website may use third-party services, including Google Analytics and Google Sheets for form submissions. These services have their own privacy policies. We encourage you to review them. We do not pass your data to third parties for advertising purposes.`,
  },
  {
    heading: "8. Your rights",
    body: `Depending on your location, you may have the right to:
• Access the personal data we hold about you.
• Request correction of inaccurate data.
• Request deletion of your data.
• Object to or restrict certain processing.
• Withdraw consent at any time (where processing is consent-based).

To exercise any of these rights, please contact us at treasury@cspprocure.com.`,
  },
  {
    heading: "9. Cookies",
    body: `Our website uses essential cookies to ensure basic functionality. We may also use analytics cookies to understand how visitors use our site. You can control cookie settings through your browser preferences.`,
  },
  {
    heading: "10. Changes to this policy",
    body: `We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of our website after any changes constitutes acceptance of the updated policy.`,
  },
  {
    heading: "11. Contact us",
    body: `If you have any questions about this Privacy Policy, please contact us at:\n\nCSP Global Consultancy\nAccra, Ghana\nEmail: treasury@cspprocure.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              <span className="inline-block h-px w-8 bg-primary" />
              Legal
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: March 2026
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {sections.map(({ heading, body }) => (
              <div key={heading}>
                <h2 className="mb-3 text-base font-semibold text-foreground">
                  {heading}
                </h2>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
            See also our{" "}
            <Link href="/terms" className="font-medium text-primary underline underline-offset-4 hover:opacity-80">
              Terms of Service
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
