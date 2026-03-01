"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: "$10",
    credits: "$10 in credits",
    desc: "For side projects and learning.",
    popular: false,
  },
  {
    name: "Pro",
    price: "$50",
    credits: "$50 in credits",
    desc: "For daily use. Zero platform fee.",
    popular: true,
  },
  {
    name: "Max",
    price: "$250",
    credits: "$250 in credits",
    desc: "5 sandboxes, early access.",
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export function PricingTeaser() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-neutral-50/80 dark:bg-neutral-900/30 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Honest pricing
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4 px-2">
            Your subscription converts to credits. No markups, no opaque token
            systems.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 max-w-xl mx-auto mb-10 sm:mb-14 px-2">
            10% fee on top-ups only &middot; Zero fee on subscription credits
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative p-5 sm:p-7 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-foreground text-background border-transparent shadow-xl shadow-neutral-900/10 dark:shadow-black/30 scale-[1.02]"
                  : "bg-white dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg hover:shadow-neutral-900/5"
              }`}
            >
              {/* Popular shimmer border */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-linear-to-r from-transparent via-neutral-400/20 to-transparent dark:via-neutral-600/20 animate-shimmer pointer-events-none" />
              )}

              <div className="relative">
                <p
                  className={`text-sm font-medium mb-2 ${
                    plan.popular
                      ? "text-neutral-400 dark:text-neutral-500"
                      : "text-neutral-500"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="text-3xl font-bold mb-1">{plan.price}</p>
                <p
                  className={`text-sm ${
                    plan.popular
                      ? "text-neutral-400 dark:text-neutral-500"
                      : "text-neutral-500"
                  }`}
                >
                  /month
                </p>
                <p
                  className={`text-xs font-medium mt-2 ${
                    plan.popular
                      ? "text-neutral-300 dark:text-neutral-400"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {plan.credits}
                </p>
                <p
                  className={`text-xs mt-2 leading-relaxed ${
                    plan.popular
                      ? "text-neutral-400 dark:text-neutral-500"
                      : "text-neutral-500"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
          >
            View full pricing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
