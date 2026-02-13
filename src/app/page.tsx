import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { APP_URL, DOCS_URL, LINKS } from "@/lib/constants";
import {
  ArrowRight,
  Zap,
  Code,
  Globe,
  Layers,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-600 dark:text-neutral-400 mb-8">
              <Sparkles className="w-4 h-4" />
              AI-Powered Development
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Build apps with
              <br />
              <span className="text-neutral-400">just words.</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
              Craft is the AI-powered development platform that turns your ideas
              into production-ready Next.js applications. Describe what you want
              and watch it come to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${APP_URL}/sign-up`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "AI Code Generation",
                  description:
                    "Describe your feature and watch production-quality code appear. Supports React, TypeScript, and the full Next.js stack.",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Live Preview",
                  description:
                    "See your changes in real-time with our integrated sandbox. No need to set up a local dev environment.",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Instant Deployment",
                  description:
                    "Deploy to production with a single click. Your apps are live on the web in seconds.",
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: "Full-Stack Templates",
                  description:
                    "Start with professionally designed templates for landing pages, dashboards, SaaS apps, and more.",
                },
                {
                  icon: <Terminal className="w-6 h-6" />,
                  title: "Database Integration",
                  description:
                    "Connect to databases, manage schemas, and run queries — all through natural language.",
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "AI-Powered Iteration",
                  description:
                    "Refine your app iteratively through conversation. The AI understands context and improves with every prompt.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
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
                How it works
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Three steps to your next project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Describe",
                  description:
                    "Tell Craft what you want to build in plain English. Be as simple or detailed as you like.",
                },
                {
                  step: "02",
                  title: "Generate",
                  description:
                    "AI creates your full project — components, pages, styles, and logic — in real-time.",
                },
                {
                  step: "03",
                  title: "Ship",
                  description:
                    "Preview your app instantly and deploy to production with a single click.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mx-auto mb-6 text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
              Join thousands of developers building with AI. Start for free, no
              credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${APP_URL}/sign-up`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
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
