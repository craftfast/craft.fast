"use client";

import { motion } from "framer-motion";

const models = [
  { name: "Claude Opus 4.6", provider: "Anthropic" },
  { name: "GPT-5.2", provider: "OpenAI" },
  { name: "Gemini 2.5 Pro", provider: "Google" },
  { name: "Grok 4", provider: "xAI" },
];

const benefits = [
  "Switch models mid-conversation",
  "$1 credit = $1 of AI cost",
  "Auto-fallback on rate limits",
  "Every model sees your full codebase",
  "New models added without deploys",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function AIModels() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Your choice of model.
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">
                No vendor lock-in.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-10 leading-relaxed">
              Pick any model per request. We bill at exactly what the provider
              charges. No markup, no opaque credit systems.
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400" />
                  </div>
                  <span className="text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — model cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {models.map((model, i) => (
              <div
                key={model.name}
                className={`group relative p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/5 dark:hover:shadow-black/20 ${
                  i % 2 === 0 ? "animate-float" : "animate-float-delayed"
                }`}
              >
                {/* Subtle top glow */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,oklch(0.9_0_0/0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_0%,oklch(0.3_0_0/0.15),transparent_60%)] pointer-events-none" />

                <div className="relative">
                  <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500 mb-2 uppercase tracking-wider">
                    {model.provider}
                  </p>
                  <p className="font-semibold text-foreground">{model.name}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
