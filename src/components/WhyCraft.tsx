"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, DollarSign, Shield, Server } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Zero Markup on AI",
    description:
      "We charge you exactly what AI providers charge us. $50 plan = $50 of AI usage.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "See Costs Before You Run",
    description:
      "Every generation shows an estimated cost before it runs. $1 credit = $1 of real AI cost. No opaque token systems.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "No Free Tier Tax",
    description:
      "Free tiers are paid for by overcharging everyone else. We skip it so your money goes to your usage, not subsidizing others.",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Real Infrastructure",
    description:
      "Each project gets its own Postgres database, cloud sandbox, and deployment pipeline. Not a demo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function WhyCraft() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-neutral-50/80 dark:bg-neutral-900/30 border-t border-border relative overflow-hidden">
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
            Why we don&apos;t offer a free plan
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-2">
            Because free tiers hide costs. We&apos;d rather be upfront.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/5 dark:hover:shadow-black/20"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,oklch(0.9_0_0/0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,oklch(0.3_0_0/0.15),transparent_70%)] pointer-events-none" />
              <div className="relative">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-fit mb-5 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors duration-200">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center px-2"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-neutral-100/80 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/80 text-center sm:text-left w-full sm:w-auto max-w-sm sm:max-w-none">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-foreground">
                $50/mo Pro plan
              </span>{" "}
              = $50 of real AI credits at exact provider cost
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-foreground hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group shrink-0"
            >
              See full pricing
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
