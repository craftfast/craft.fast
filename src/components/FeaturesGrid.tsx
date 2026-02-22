"use client";

import { motion } from "framer-motion";
import { Code, Globe, Zap, Layers, Terminal, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  span?: string; // grid span class
}

const features: Feature[] = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Full-Stack, Not Just Frontend",
    description:
      "Most AI tools stop at the UI. Craft writes API routes, database queries, auth middleware, and server actions — the code you'd actually have to write yourself.",
    span: "md:col-span-2",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Real Sandbox, Not an Iframe",
    description:
      "Each project runs in an isolated E2B microVM with its own Node.js process. npm install works. Environment variables work. It behaves like a real machine.",
    span: "md:col-span-1",
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Postgres Out of the Box",
    description:
      "Every project gets a Neon database. The AI writes real SQL migrations, not toy schemas. Branching and connection pooling included.",
    span: "md:col-span-1",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Deploy Without the Yak Shave",
    description:
      "One click to Vercel. No CI/CD config, no environment variable juggling, no DNS setup. It just works because the template already handles it.",
    span: "md:col-span-1",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Context That Actually Persists",
    description:
      "The AI reads your whole codebase on every turn. It knows what it built last Tuesday. No re-explaining, no context loss between sessions.",
    span: "md:col-span-1",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Opinionated Defaults, Zero Lock-in",
    description:
      "Every project starts as a standard Next.js 16 app with TypeScript, Tailwind v4, and App Router. Eject anytime — it's just a normal repo.",
    span: "md:col-span-2",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function FeaturesGrid() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            What you actually get
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-2">
            Not a list of features. A list of problems you won&apos;t have.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/5 dark:hover:shadow-black/20 ${feature.span ? "sm:col-span-2 md:col-span-2" : ""}`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,oklch(0.9_0_0/0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,oklch(0.3_0_0/0.15),transparent_70%)] pointer-events-none" />

              <div className="relative">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-fit mb-5 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
