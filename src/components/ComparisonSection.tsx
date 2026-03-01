"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  craft: string | boolean;
  others: string | boolean;
}

interface ComparisonGroup {
  label: string;
  rows: ComparisonRow[];
}

const groups: ComparisonGroup[] = [
  {
    label: "Pricing & Transparency",
    rows: [
      {
        feature: "AI pricing model",
        craft: "Exact provider cost",
        others: "Opaque credits",
      },
      {
        feature: "Markup on AI usage",
        craft: "0% on subscriptions",
        others: "Up to 10x hidden markup",
      },
      {
        feature: "Top-up fee",
        craft: "10% flat, always disclosed",
        others: "Never disclosed",
      },
    ],
  },
  {
    label: "Infrastructure",
    rows: [
      {
        feature: "Isolated Postgres per project",
        craft: "Neon - serverless Postgres",
        others: false,
      },
      {
        feature: "Cloud sandbox (isolated VM)",
        craft: "E2B - real isolated VM",
        others: "Browser-based or shared",
      },
      {
        feature: "Object storage",
        craft: "Cloudflare R2 - included free",
        others: false,
      },
      {
        feature: "Transactional email",
        craft: "Resend - included",
        others: false,
      },
      {
        feature: "Managed cache / Redis",
        craft: "Upstash Redis - included",
        others: false,
      },
      {
        feature: "Production deployment",
        craft: "Vercel - auto-deploy on save",
        others: "Manual or export only",
      },
    ],
  },
  {
    label: "AI Flexibility",
    rows: [
      {
        feature: "Model choice",
        craft: "Anthropic, OpenAI, Google, xAI",
        others: "1-2 providers, locked-in",
      },
      {
        feature: "Switch models mid-conversation",
        craft: true,
        others: false,
      },
      {
        feature: "Full-stack generation",
        craft: "UI + API + DB + infra",
        others: "UI only or IDE plugin",
      },
      {
        feature: "Self-hostable",
        craft: true,
        others: false,
      },
    ],
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
            Why Craft is different
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-2">
            Other tools hide costs and lock you in. Craft is transparent,
            full-stack, and built to give you real infrastructure - not toy
            sandboxes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_90px_72px] sm:grid-cols-[1fr_150px_120px] lg:grid-cols-[1fr_180px_140px] gap-2 px-3 sm:px-6 pb-3 mb-1">
            <div />
            <div className="text-center">
              <span className="inline-block text-xs font-bold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                Craft
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                Others
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {groups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900/50"
              >
                {/* Group label */}
                <div className="px-4 sm:px-6 py-2.5 bg-neutral-50 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-800">
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {group.label}
                  </span>
                </div>

                {group.rows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-[1fr_90px_72px] sm:grid-cols-[1fr_150px_120px] lg:grid-cols-[1fr_180px_140px] gap-2 items-center px-3 sm:px-6 py-2.5 sm:py-3.5 ${
                      i < group.rows.length - 1
                        ? "border-b border-neutral-100 dark:border-neutral-800/60"
                        : ""
                    }`}
                  >
                    <div className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                      {row.feature}
                    </div>

                    {/* Craft */}
                    <div className="flex justify-center px-1 sm:px-2">
                      {typeof row.craft === "boolean" ? (
                        row.craft ? (
                          <div className="w-5 h-5 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-white dark:text-neutral-900" />
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
                        )
                      ) : (
                        <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-foreground text-center leading-snug">
                          {row.craft}
                        </span>
                      )}
                    </div>

                    {/* Others */}
                    <div className="flex justify-center px-1 sm:px-2">
                      {typeof row.others === "boolean" ? (
                        row.others ? (
                          <div className="w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
                          </div>
                        ) : (
                          <X className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
                        )
                      ) : (
                        <span className="text-[10px] sm:text-xs lg:text-sm text-neutral-400 dark:text-neutral-500 text-center leading-snug">
                          {row.others}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center text-xs text-neutral-400 dark:text-neutral-600 mt-4"
          >
            Based on publicly available pricing and feature pages as of March
            2026.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
