"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  craft: string | boolean;
  others: string | boolean;
  highlight?: boolean;
}

const comparisons: ComparisonRow[] = [
  {
    feature: "AI pricing model",
    craft: "USD at provider cost",
    others: "Opaque credits",
    highlight: true,
  },
  {
    feature: "Markup on AI models",
    craft: "0%",
    others: "Hidden (estimated 3â€“10Ã—)",
    highlight: true,
  },
  {
    feature: "Full-stack code generation",
    craft: true,
    others: "UI only or IDE only",
  },
  {
    feature: "Real Postgres per project",
    craft: true,
    others: false,
  },
  {
    feature: "Cloud sandbox (isolated VM)",
    craft: true,
    others: "Shared or browser-based",
  },
  {
    feature: "Multi-model support",
    craft: true,
    others: "Limited or locked",
  },
  {
    feature: "Switch models mid-conversation",
    craft: true,
    others: false,
  },
  {
    feature: "Cost visible before generation",
    craft: true,
    others: false,
  },
  {
    feature: "Self-hostable architecture",
    craft: true,
    others: false,
  },
  {
    feature: "Managed email, storage, cache",
    craft: true,
    others: false,
  },
];

export function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Craft vs. the rest
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-2">
            How Craft stacks up against other AI development tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900/50">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-3 gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-neutral-50 dark:bg-neutral-800/50 border-b border-neutral-200 dark:border-neutral-800">
              <div className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider" />
              <div className="text-xs sm:text-sm font-semibold text-foreground text-center min-w-20 sm:min-w-30">
                Craft
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 text-center min-w-20 sm:min-w-30">
                Others
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_auto_auto] sm:grid-cols-3 gap-4 px-4 sm:px-6 py-3 sm:py-4 ${
                  i < comparisons.length - 1
                    ? "border-b border-neutral-100 dark:border-neutral-800/60"
                    : ""
                } ${row.highlight ? "bg-neutral-50/50 dark:bg-neutral-800/20" : ""}`}
              >
                <div className="text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                  {row.feature}
                </div>
                <div className="flex justify-center min-w-20 sm:min-w-30">
                  {typeof row.craft === "boolean" ? (
                    row.craft ? (
                      <div className="w-5 h-5 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white dark:text-neutral-900" />
                      </div>
                    ) : (
                      <Minus className="w-5 h-5 text-neutral-300 dark:text-neutral-700" />
                    )
                  ) : (
                    <span className="text-xs sm:text-sm font-medium text-foreground text-center">
                      {row.craft}
                    </span>
                  )}
                </div>
                <div className="flex justify-center min-w-20 sm:min-w-30">
                  {typeof row.others === "boolean" ? (
                    row.others ? (
                      <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                        <Check className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                      </div>
                    ) : (
                      <Minus className="w-5 h-5 text-neutral-300 dark:text-neutral-700" />
                    )
                  ) : (
                    <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 text-center">
                      {row.others}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center text-xs text-neutral-400 dark:text-neutral-600 mt-4"
          >
            Based on publicly available pricing and feature pages as of February
            2026.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
