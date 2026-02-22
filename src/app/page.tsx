import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InfraBar } from "@/components/InfraBar";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { AIModels } from "@/components/AIModels";
import { PricingTeaser } from "@/components/PricingTeaser";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <InfraBar />
        <FeaturesGrid />
        <HowItWorks />
        <AIModels />
        <PricingTeaser />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
