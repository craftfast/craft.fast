"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "E2B",
    role: "Cloud Sandboxes",
    href: "https://e2b.dev",
    description:
      "Your code runs in isolated microVMs, not a shared container. Each sandbox gets its own filesystem and process tree.",
  },
  {
    name: "Neon",
    role: "Serverless Postgres",
    href: "https://neon.tech",
    description:
      "Real Postgres — not SQLite. Branching, connection pooling, and autoscaling included. Your data persists.",
  },
  {
    name: "Vercel",
    role: "Edge Deployments",
    href: "https://vercel.com",
    description:
      "One-click deploy to production. Custom domains, edge middleware, and the same infra used by Next.js itself.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function InfraBar() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-500 mb-8 sm:mb-12 tracking-wide uppercase"
        >
          The infrastructure behind every Craft project
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 max-w-5xl mx-auto"
        >
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              variants={itemVariants}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/5 dark:hover:shadow-black/20 text-center"
            >
              {/* Partner name */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 group-hover:scale-[1.02] transition-transform duration-200">
                {partner.name}
              </h3>

              {/* Role label */}
              <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-500 mb-2 sm:mb-3">
                {partner.role}
              </p>

              {/* Description */}
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {partner.description}
              </p>

              {/* Horizontal connecting line (desktop only) */}
              {i < partners.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <div
                    className="w-5 lg:w-6 h-px bg-linear-to-r from-neutral-300 to-neutral-300 dark:from-neutral-700 dark:to-neutral-700"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, currentColor 0, currentColor 4px, transparent 4px, transparent 8px)",
                    }}
                  />
                </div>
              )}

              {/* Vertical connecting line (mobile only) */}
              {i < partners.length - 1 && (
                <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
                  <div className="w-px h-3 bg-neutral-300 dark:bg-neutral-700" />
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
