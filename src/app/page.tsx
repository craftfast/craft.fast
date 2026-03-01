import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InfraBar } from "@/components/InfraBar";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { WhyCraft } from "@/components/WhyCraft";
import { HowItWorks } from "@/components/HowItWorks";
import { AIModels, type AIModelEntry } from "@/components/AIModels";
import { ComparisonSection } from "@/components/ComparisonSection";
import { PricingTeaser } from "@/components/PricingTeaser";
import { CTASection } from "@/components/CTASection";
import { APP_URL } from "@/lib/constants";

async function fetchAvailableModels(): Promise<AIModelEntry[]> {
  try {
    const res = await fetch(`${APP_URL}/api/public/models`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as Array<{
      name: string;
      provider: string;
      tier: string;
    }>;
    return data.map((m) => ({
      name: m.name,
      provider: m.provider,
      tier: m.tier === "LITE" ? "Lite" : "Premium",
    }));
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const availableModels = await fetchAvailableModels();
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <InfraBar />
        <FeaturesGrid />
        <WhyCraft />
        <HowItWorks />
        <AIModels models={availableModels} />
        <ComparisonSection />
        <PricingTeaser />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
