import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { APP_URL, ACCOUNTS_URL, DOCS_URL, LINKS } from "@/lib/constants";
import {
  ArrowRight,
  Zap,
  Code,
  Globe,
  Layers,
  Sparkles,
  Terminal,
  Shield,
  GitBranch,
  MessageSquare,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 sm:pt-32 sm:pb-36 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-600 dark:text-neutral-400 mb-8 border border-neutral-200 dark:border-neutral-700">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Development Platform</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-[1.08] tracking-tight">
              Describe it.
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">
                Build it.
              </span>
              <br />
              <span className="text-neutral-300 dark:text-neutral-600">
                Ship it.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Craft transforms your ideas into production-ready Next.js apps. No
              boilerplate. No setup. Just describe what you want and watch it
              come to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href={`${ACCOUNTS_URL}/signup`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-all shadow-lg shadow-neutral-900/10 dark:shadow-neutral-100/5"
              >
                Start Building Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={DOCS_URL}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-neutral-300 dark:border-neutral-700 text-foreground rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Read the Docs
              </a>
            </div>

            {/* Mock browser window */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-900 dark:bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-neutral-700" />
                    <div className="w-3 h-3 rounded-full bg-neutral-700" />
                    <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-neutral-800 rounded-lg text-xs text-neutral-400 font-mono">
                      craft.fast
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 text-left">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-neutral-400" />
                    </div>
                    <div className="bg-neutral-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                      <p className="text-sm text-neutral-300">
                        Build me a SaaS dashboard with user analytics, revenue
                        charts, and a settings page. Use a clean, minimal
                        design.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 ml-11">
                    <div className="flex gap-1 items-center text-neutral-500 text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-mono">Generating 12 files...</span>
                      <span className="inline-block w-2 h-4 bg-neutral-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-12 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-neutral-500 mb-8">
              Powered by the best in modern development
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-neutral-400 dark:text-neutral-500">
              {[
                { name: "Next.js", version: "16" },
                { name: "React", version: "19" },
                { name: "TypeScript", version: "5" },
                { name: "Tailwind CSS", version: "4" },
                { name: "Vercel", version: "" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <span>{tech.name}</span>
                  {tech.version && (
                    <span className="text-xs px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-500">
                      v{tech.version}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Everything you need to ship
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                From idea to production in minutes, not months.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="w-5 h-5" />,
                  title: "AI Code Generation",
                  description:
                    "Describe your feature and watch production-quality code appear. React, TypeScript, and the full Next.js stack.",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  title: "Live Preview",
                  description:
                    "See changes in real-time with an integrated cloud sandbox. No local dev environment needed.",
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  title: "One-Click Deploy",
                  description:
                    "Deploy to Vercel with a single click. Your app goes live on the web in seconds.",
                },
                {
                  icon: <Layers className="w-5 h-5" />,
                  title: "Full-Stack Templates",
                  description:
                    "Start with professional templates for landing pages, dashboards, SaaS apps, and more.",
                },
                {
                  icon: <Terminal className="w-5 h-5" />,
                  title: "Database & APIs",
                  description:
                    "Neon Postgres databases, managed through natural language. Schema design, queries, migrations.",
                },
                {
                  icon: <Sparkles className="w-5 h-5" />,
                  title: "Iterative Refinement",
                  description:
                    "Refine your app through conversation. The AI understands context and improves with every prompt.",
                },
                {
                  icon: <GitBranch className="w-5 h-5" />,
                  title: "Version History",
                  description:
                    "Full git-backed version history. Roll back changes, branch features, and track progress.",
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "Enterprise Ready",
                  description:
                    "SSO, audit logs, private model routing, and SLA guarantees for teams that need them.",
                },
                {
                  icon: <MessageSquare className="w-5 h-5" />,
                  title: "Project Memory",
                  description:
                    "The AI remembers your project's context, design decisions, and codebase across conversations.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl hover:border-neutral-400 dark:hover:border-neutral-500 transition-all duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-fit mb-4 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Three steps to your next project
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                No configuration. No boilerplate. Just results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  step: "01",
                  title: "Describe",
                  description:
                    "Tell Craft what you want to build in plain English. Be as simple or detailed as you like — the AI adapts to your level.",
                },
                {
                  step: "02",
                  title: "Generate",
                  description:
                    "AI creates your full project — components, pages, styles, database schema, and business logic — in real-time.",
                },
                {
                  step: "03",
                  title: "Ship",
                  description:
                    "Preview your app in a live sandbox, iterate with AI, and deploy to production with a single click.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-foreground text-background rounded-2xl flex items-center justify-center mx-auto mb-6 text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Models Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  The best AI models,{" "}
                  <span className="text-neutral-400">zero markup</span>
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                  Craft routes your requests to the optimal model for each task.
                  Use Claude, GPT-5, Gemini, Grok, and more — all at provider
                  cost, with zero markup.
                </p>
                <ul className="space-y-4">
                  {[
                    "Automatic model selection based on task type",
                    "Premium models for Pro & Max plans",
                    "Context-aware routing for best results",
                    "Transparent per-token pricing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Claude Sonnet 4", provider: "Anthropic" },
                  { name: "GPT-5", provider: "OpenAI" },
                  { name: "Gemini 2.5 Pro", provider: "Google" },
                  { name: "Grok 4", provider: "xAI" },
                ].map((model) => (
                  <div
                    key={model.name}
                    className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl"
                  >
                    <p className="text-xs text-neutral-500 mb-1">
                      {model.provider}
                    </p>
                    <p className="font-semibold text-foreground text-sm">
                      {model.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Plans that scale with you
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
              Simple credit-based pricing. No hidden fees. Start building and
              upgrade when you need more.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              {[
                { name: "Hobby", price: "$10", desc: "For side projects" },
                {
                  name: "Pro",
                  price: "$50",
                  desc: "For professionals",
                  popular: true,
                },
                { name: "Max", price: "$100", desc: "For power users" },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`p-6 rounded-2xl border ${
                    plan.popular
                      ? "bg-foreground text-background border-transparent"
                      : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
                  }`}
                >
                  <p
                    className={`text-sm font-medium mb-1 ${plan.popular ? "text-neutral-300 dark:text-neutral-600" : "text-neutral-500"}`}
                  >
                    {plan.name}
                  </p>
                  <p className="text-3xl font-bold mb-1">{plan.price}</p>
                  <p
                    className={`text-sm ${plan.popular ? "text-neutral-400 dark:text-neutral-500" : "text-neutral-500"}`}
                  >
                    /month
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
            >
              View full pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to build something
              <br />
              <span className="text-neutral-400">amazing?</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
              Join thousands of developers building with AI. Start for free, no
              credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${ACCOUNTS_URL}/signup`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-all shadow-lg shadow-neutral-900/10 dark:shadow-neutral-100/5"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={LINKS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium border border-neutral-300 dark:border-neutral-700 text-foreground rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
