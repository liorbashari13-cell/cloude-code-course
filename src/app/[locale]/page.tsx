import { HeroSection } from "@/components/sections/hero-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { MethodSection } from "@/components/sections/method-section";
import { TechShowcase } from "@/components/sections/tech-showcase";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid />
        <MethodSection />
        <TechShowcase />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
