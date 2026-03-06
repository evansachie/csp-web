import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
