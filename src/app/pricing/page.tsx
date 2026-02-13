import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { APP_URL } from "@/lib/constants";

export const metadata = {
  title: "Pricing - Craft",
  description:
    "Simple, transparent pricing for everyone. Choose the plan that fits your needs.",
};

const plans = [
  {
    name: "Hobby",
    description: "Perfect for side projects and learning",
    monthlyPrice: 10,
    annualPrice: 120,
    monthlyCredits: "$9",
    annualCredits: "$108",
    features: [
      "10 projects",
      "1 concurrent sandbox",
      "Lite AI models",
      "30-day git history",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For professionals and growing teams",
    monthlyPrice: 50,
    annualPrice: 600,
    monthlyCredits: "$45",
    annualCredits: "$540",
    features: [
      "Unlimited projects",
      "3 concurrent sandboxes",
      "Lite + Premium AI models",
      "30-day git history",
      "Memory & context",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Max",
    description: "For power users who need more",
    monthlyPrice: 100,
    annualPrice: 1200,
    monthlyCredits: "$90",
    annualCredits: "$1,080",
    features: [
      "Unlimited projects",
      "5 concurrent sandboxes",
      "Lite + Premium AI models",
      "90-day git history",
      "Memory & context",
      "Priority support",
      "Early access to features",
    ],
    cta: "Get Started",
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

const faqs = [
  {
    q: "How do credits work?",
    a: "Credits are used to pay for AI usage, sandbox compute, deployments, and managed services. Each plan includes a monthly credit allowance. A 10% platform fee applies to all purchases — the remaining 90% becomes your usable credits.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Credits are valid for 1 year from the date of purchase. Monthly subscription credits reset each cycle and do not roll over.",
  },
  {
    q: "What AI models are available?",
    a: "Hobby plans have access to Lite models (fast, efficient). Pro and Max plans unlock Premium models including Claude Sonnet 4, GPT-5, Gemini 2.5 Pro, and more.",
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
    a: "Yes, you can cancel your subscription at any time. Your plan remains active until the end of the current billing period.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1 pb-16">
        {/* Hero */}
        <section className="text-center py-16 sm:py-20 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Start building for free. Choose the plan that scales with you. All
            plans include a 10% signup bonus on your first month.
          </p>
        </section>

        {/* Plan Cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white dark:bg-neutral-900 rounded-2xl border ${
                  plan.popular
                    ? "border-neutral-900 dark:border-neutral-100 shadow-lg"
                    : "border-neutral-200 dark:border-neutral-700"
                } p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      ${plan.monthlyPrice}
                    </span>
                    <span className="text-neutral-500">/mo</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">
                    {plan.monthlyCredits} in credits/month
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <svg
                        className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`${APP_URL}/signup`}
                  className={`w-full py-3 px-6 text-center font-medium rounded-full transition-colors ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200"
                      : "bg-neutral-100 dark:bg-neutral-800 text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Enterprise
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Custom plans for large teams and organizations. Get dedicated
                  infrastructure, premium support, and advanced security
                  features.
                </p>
                <Link
                  href="mailto:enterprise@craft.fast"
                  className="inline-flex px-8 py-3 bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full font-medium transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {enterpriseFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <svg
                      className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Usage-Based Pricing Overview */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pay only for what you use
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Credits cover AI usage, sandbox compute, deployments, databases,
              and more. Zero markup on AI model costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Models",
                desc: "Zero markup on all AI providers — Anthropic, OpenAI, Google, xAI, and more.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.55 2.55a2.25 2.25 0 01-1.591.659H8.341a2.25 2.25 0 01-1.591-.659L4.2 14.5m15.6 0l.402.401a2.25 2.25 0 010 3.182l-2.685 2.685a2.25 2.25 0 01-3.182 0l-.401-.402m0 0l-.402.401a2.25 2.25 0 01-3.182 0l-2.685-2.685a2.25 2.25 0 010-3.182L4.2 14.5"
                  />
                ),
              },
              {
                title: "Sandbox Compute",
                desc: "CPU at $0.128/hr, memory at $0.0106/GB-hr. Auto-pause after 5 min idle.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7"
                  />
                ),
              },
              {
                title: "Deployments",
                desc: "Vercel-powered with serverless functions, edge requests, and data transfer.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                ),
              },
              {
                title: "Database",
                desc: "Neon Postgres with compute at $0.106/CU-hr, storage at $0.35/GB-mo.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                ),
              },
              {
                title: "File Storage",
                desc: "Railway object storage at $0.015/GB-mo. API operations & egress free.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                ),
              },
              {
                title: "Email",
                desc: "Resend transactional email at $0.00055/email. Custom domains at $2/mo.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-foreground">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to start building?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">
              Join thousands of developers building with AI. Get your first
              month signup bonus today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`${APP_URL}/signup`}
                className="px-8 py-3 bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full font-medium transition-colors"
              >
                Start Building
              </Link>
              <Link
                href="mailto:enterprise@craft.fast"
                className="px-8 py-3 bg-neutral-100 dark:bg-neutral-800 text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full font-medium transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
