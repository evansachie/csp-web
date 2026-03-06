import Link from "next/link";
import { Logo } from "@/components/logo";

const services = [
  { label: "Freight Forwarding", href: "/services#freight" },
  { label: "Warehousing", href: "/services#warehousing" },
  { label: "Cargo Insurance", href: "/services#cargo-insurance" },
  { label: "Supply Chain Management", href: "/services#supply-chain" },
  { label: "Business Advisory", href: "/services#advisory" },
  { label: "IT Consultancy", href: "/services#it" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo isFooter />
            <p className="text-sm leading-relaxed text-white/60">
              CSP is a leading Procurement and Supply Chain Management Services
              firm specializing in Procurement services & Supply chain
              management. We help ensure that businesses move smarter and faster
              to achieve their goal.
            </p>
            <p className="text-xs text-white/40">
              Reg. No: <span className="text-white/60">123456789xfad</span>
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/40">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} CSP Global Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
