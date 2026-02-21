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

// Plan definitions matching the DB schema
const plans = [
  {
    name: "Hobby",
    id: "hobby",
    description: "Perfect for side projects and learning",
    monthlyPrice: 10,
    annualPrice: 120,
    monthlyCredits: 9,
    annualCredits: 108,
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
    description: "For professionals and growing teams",
    monthlyPrice: 50,
    annualPrice: 600,
    monthlyCredits: 45,
    annualCredits: 540,
    features: [
      "Unlimited projects",
      "3 concurrent sandboxes",
      "Lite + Premium AI models",
      "30-day git history",
      "Memory & context",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Max",
    id: "max",
    description: "For power users who need more",
    monthlyPrice: 100,
    annualPrice: 1200,
    monthlyCredits: 90,
    annualCredits: 1080,
    features: [
      "Unlimited projects",
      "5 concurrent sandboxes",
      "Lite + Premium AI models",
      "90-day git history",
      "Memory & context",
      "Priority support",
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

// AI Models with exact provider pricing
const aiModels = [
  {
    name: "GPT-5 Mini",
    provider: "OpenAI",
    input: 0.15,
    output: 0.6,
    context: "128K",
    tier: "Fast",
    link: EXTERNAL_LINKS.openai,
  },
  {
    name: "Gemini 3 Flash",
    provider: "Google",
    input: 0.5,
    output: 3.0,
    context: "1M",
    tier: "Fast",
    link: EXTERNAL_LINKS.google,
  },
  {
    name: "Claude Haiku 4.5",
    provider: "Anthropic",
    input: 1.0,
    output: 5.0,
    context: "200K",
    tier: "Fast",
    link: EXTERNAL_LINKS.anthropic,
  },
  {
    name: "Gemini 2.5 Pro",
    provider: "Google",
    input: 1.25,
    output: 10.0,
    context: "1M",
    tier: "Expert",
    link: EXTERNAL_LINKS.google,
  },
  {
    name: "GPT-5.2",
    provider: "OpenAI",
    input: 1.75,
    output: 14.0,
    context: "400K",
    tier: "Expert",
    link: EXTERNAL_LINKS.openai,
  },
  {
    name: "Gemini 3 Pro (Preview)",
    provider: "Google",
    input: 2.0,
    output: 12.0,
    context: "1M",
    tier: "Expert",
    link: EXTERNAL_LINKS.google,
  },
  {
    name: "Claude Sonnet 4.5",
    provider: "Anthropic",
    input: 3.0,
    output: 15.0,
    context: "200K",
    tier: "Expert",
    link: EXTERNAL_LINKS.anthropic,
  },
  {
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    input: 5.0,
    output: 25.0,
    context: "1M",
    tier: "Expert",
    link: EXTERNAL_LINKS.anthropic,
  },
];

const faqs = [
  {
    q: "How does the pricing work?",
    a: "We charge a 10% flat platform fee when you purchase credits or subscribe. After that, all provider services (AI models, E2B sandboxes, Neon database, Cloudflare R2 storage, Upstash Redis, Resend email, Vercel deployment) are billed at exact cost with zero markup.",
  },
  {
    q: "What is included in the 10% platform fee?",
    a: "The 10% platform fee covers payment processing, platform infrastructure, support, and ongoing development. This allows us to pass through all provider costs at zero markup.",
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
    a: "Hobby plans have access to Lite/Fast models (efficient and affordable). Pro and Max plans unlock Expert/Premium models including Claude Sonnet 4.5, Claude Opus 4.6, GPT-5.2, Gemini 2.5 Pro, and more.",
  },
  {
    q: "Is there a free trial?",
    a: "First-time subscribers get a 10% signup bonus (the platform fee is waived on your first month), giving you extra credits to explore.",
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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pb-16">
        <PricingContent
          plans={plans}
          enterpriseFeatures={enterpriseFeatures}
          aiModels={aiModels}
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
