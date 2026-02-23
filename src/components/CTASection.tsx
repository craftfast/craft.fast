"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ACCOUNTS_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 border-t border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-150 h-[50vw] max-h-100 bg-[radial-gradient(ellipse,oklch(0.85_0_0/0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse,oklch(0.25_0_0/0.2),transparent_70%)] animate-glow-pulse" />
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            You&apos;ve read this far.
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">
              Now build something real.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed px-2"
        >
          From $10/mo. Every dollar becomes AI credits at provider cost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`${ACCOUNTS_URL}/signup`}
            className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-medium bg-foreground text-background rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-neutral-900/10 dark:shadow-neutral-100/5"
          >
            Start Building &mdash; From $10/mo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
