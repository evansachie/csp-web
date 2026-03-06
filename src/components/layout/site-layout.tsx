import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
