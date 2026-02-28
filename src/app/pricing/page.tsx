import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { APP_URL, EMAILS } from "@/lib/constants";
import { PricingContent } from "./PricingContent";

export const metadata = {
  title: "Pricing - Craft",
  description:
    "Simple, transparent pricing for everyone. Choose the plan that fits your needs. Zero markup on provider costs.",
};

// External links for transparency
const EXTERNAL_LINKS = {
  anthropic: "https://www.anthropic.com/pricing",
  openai: "https://platform.openai.com/docs/pricing",
  google: "https://ai.google.dev/gemini-api/docs/pricing",
  xai: "https://docs.x.ai/docs/models",
  e2b: "https://e2b.dev/pricing",
  neon: "https://neon.tech/pricing",
  cloudflareR2: "https://developers.cloudflare.com/r2/pricing/",
  upstash: "https://upstash.com/pricing",
  resend: "https://resend.com/pricing",
  vercelAIGateway: "https://vercel.com/ai-gateway",
  vercel: "https://vercel.com/pricing",
  dodopayments: "https://dodopayments.com",
};

// Plan definitions matching the DB schema (DEFAULT_PLANS in apps/app/src/lib/plans/constants.ts)
// Annual = 12x monthly (no discount). No platform fee on subscriptions — credits = full price.
const plans = [
  {
    name: "Hobby",
    id: "hobby",
    description: "Perfect for learning and side projects",
    monthlyPrice: 10,
    annualPrice: 120, // 12 x $10
    monthlyCredits: 10, // full price
    annualCredits: 120, // full price
    features: [
      "10 projects",
      "1 concurrent sandbox",
      "Lite AI models",
      "30-day git history",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    id: "pro",
    description: "For professional developers",
    monthlyPrice: 50,
    annualPrice: 600, // 12 x $50
    monthlyCredits: 50, // full price
    annualCredits: 600, // full price
    features: [
      "Unlimited projects",
      "3 concurrent sandboxes",
      "Lite + Premium AI models",
      "30-day git history",
      "Memory & context",
      "Priority email support",
    ],
    popular: true,
  },
  {
    name: "Max",
    id: "max",
    description: "Maximum power for heavy users",
    monthlyPrice: 250,
    annualPrice: 3000, // 12 x $250
    monthlyCredits: 250, // full price
    annualCredits: 3000, // full price
    features: [
      "Unlimited projects",
      "5 concurrent sandboxes",
      "Lite + Premium AI models",
      "90-day git history",
      "Memory & context",
      "Priority email support",
      "Early access to features",
    ],
    popular: false,
  },
];

const enterpriseFeatures = [
  "Everything in Max",
  "Unlimited sandboxes",
  "Private model routing / BYO keys",
  "SSO & SAML",
  "Audit log & compliance",
  "Custom domain & branding",
  "SLA guarantee",
  "Dedicated account manager",
];

// Fetch AI models from the app's public API for the pricing page
async function getAiModelsForPricing() {
  try {
    const res = await fetch(`${APP_URL}/api/public/models`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const models = (await res.json()) as Array<{
      id: string;
      name: string;
      provider: string;
      tier: "LITE" | "PREMIUM";
      input: number;
      output: number;
      contextLength: number | null;
      metadata: Record<string, unknown> | null;
    }>;

    return models.map((model) => ({
      name: model.name,
      provider: model.provider,
      input: model.input,
      output: model.output,
      context: model.contextLength
        ? model.contextLength >= 1_000_000
          ? `${(model.contextLength / 1_000_000).toFixed(0)}M`
          : `${(model.contextLength / 1_000).toFixed(0)}K`
        : "Unknown",
      tier: model.tier === "LITE" ? "Lite" : "Premium",
      link:
        model.metadata && "docLink" in model.metadata
          ? (model.metadata.docLink as string)
          : EXTERNAL_LINKS[
              model.provider.toLowerCase() as keyof typeof EXTERNAL_LINKS
            ] || "#",
    }));
  } catch (error) {
    console.error("[pricing] Failed to fetch AI models:", error);
    return [];
  }
}

const faqs = [
  {
    q: "How does the pricing work?",
    a: "Subscribe to a plan and get credits equal to your plan price. All provider services (AI models, E2B sandboxes, Neon database, Cloudflare R2 storage, Upstash Redis, Resend email, Vercel deployment) are billed at exact cost with zero markup. A 10% platform fee applies only to credit top-ups.",
  },
  {
    q: "What about top-up credits?",
    a: "You can top up your balance anytime. A 10% platform fee applies on top-ups to cover payment processing, platform infrastructure, support, and ongoing development. Subscription credits have no platform fee.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes! You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately for upgrades or at the end of your current billing cycle for downgrades.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Credits are valid for 1 year from the date of purchase. Monthly subscription credits reset each cycle and do not roll over.",
  },
  {
    q: "What AI models are available?",
    a: "Hobby plans have access to Lite models (efficient and affordable). Pro and Max plans unlock Premium models including Claude Sonnet 4.5, Claude Opus 4.6, GPT-5.2, Gemini 2.5 Pro, and more.",
  },
  {
    q: "Is there a free trial?",
    a: "We don't offer a free trial, but you can start with the Hobby plan at just $10/month and get full access to explore the platform.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, and international payment methods through Dodo Payments.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription at any time from your dashboard. Your plan remains active until the end of the current billing period.",
  },
  {
    q: "How do I track my usage?",
    a: "Go to Dashboard → Settings → Billing to see a detailed breakdown of your AI, sandbox, database, and deployment costs.",
  },
];

export default async function PricingPage() {
  const aiModelsData = await getAiModelsForPricing();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pb-16">
        <PricingContent
          plans={plans}
          enterpriseFeatures={enterpriseFeatures}
          aiModels={aiModelsData}
          faqs={faqs}
          externalLinks={EXTERNAL_LINKS}
          appUrl={APP_URL}
          enterpriseEmail={EMAILS.ENTERPRISE}
        />
      </main>

      <Footer />
    </div>
  );
}
