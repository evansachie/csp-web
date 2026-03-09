import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions governing your use of the CSP Global Consultancy website and services.",
  alternates: { canonical: "https://www.cspconsultancy.com/terms" },
};

const sections = [
  {
    heading: "1. Acceptance of terms",
    body: `By accessing or using the CSP Global Consultancy website at cspconsultancy.com ("the Site") or engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Site or our services.`,
  },
  {
    heading: "2. About CSP",
    body: `CSP Global Consultancy ("CSP", "we", "us", or "our") is a Procurement and Supply Chain Management Services firm registered in Ghana. We provide freight forwarding, warehousing, cargo insurance, supply chain management, business advisory, and IT consultancy services.`,
  },
  {
    heading: "3. Use of the website",
    body: `You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:
• Use the Site in any way that violates applicable local, national, or international law or regulation.
• Transmit unsolicited commercial communications.
• Attempt to gain unauthorised access to any part of the Site or its related systems.
• Introduce malware, viruses, or other malicious code.`,
  },
  {
    heading: "4. Services and engagement",
    body: `Information on this Site is provided for general informational purposes only and does not constitute a binding offer to provide services. All service engagements are subject to a separate written agreement or confirmed proposal between CSP and the client. Nothing on this Site creates a contractual relationship until a formal agreement is executed.`,
  },
  {
    heading: "5. Intellectual property",
    body: `All content on this Site — including text, graphics, logos, images, and software — is the property of CSP Global Consultancy or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.`,
  },
  {
    heading: "6. Disclaimer of warranties",
    body: `The Site and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses. We disclaim all warranties to the fullest extent permitted by law.`,
  },
  {
    heading: "7. Limitation of liability",
    body: `To the fullest extent permitted by applicable law, CSP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Site or our services. Our total liability in any circumstance shall not exceed the amount paid by you to CSP in the three months preceding the claim.`,
  },
  {
    heading: "8. Third-party links",
    body: `The Site may contain links to third-party websites. These links are provided for your convenience only. CSP has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    heading: "9. Privacy",
    body: `Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.`,
  },
  {
    heading: "10. Governing law",
    body: `These Terms and any dispute or claim arising from them shall be governed by and construed in accordance with the laws of the Republic of Ghana, without regard to its conflict of law provisions.`,
  },
  {
    heading: "11. Changes to these terms",
    body: `We reserve the right to update these Terms at any time. The revised Terms will be posted on this page with an updated date. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.`,
  },
  {
    heading: "12. Contact",
    body: `If you have any questions about these Terms, please contact us at:\n\nCSP Global Consultancy\nAccra, Ghana\nEmail: treasury@cspprocure.com`,
  },
];

export default function TermsPage() {
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
              Terms of Service
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
            <Link href="/privacy" className="font-medium text-primary underline underline-offset-4 hover:opacity-80">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
