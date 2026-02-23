"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "E2B",
    role: "Cloud Sandboxes",
    href: "https://e2b.dev",
    description: "Isolated microVMs. Own filesystem and process tree.",
  },
  {
    name: "Neon",
    role: "Serverless Postgres",
    href: "https://neon.tech",
    description: "Real Postgres with branching, pooling, and autoscaling.",
  },
  {
    name: "Vercel",
    role: "Edge Deployments",
    href: "https://vercel.com",
    description: "One-click deploy. Custom domains and edge middleware.",
  },
  {
    name: "Cloudflare",
    role: "CDN & DNS",
    href: "https://cloudflare.com",
    description: "Global edge network. DDoS protection and smart routing.",
  },
  {
    name: "Resend",
    role: "Transactional Email",
    href: "https://resend.com",
    description: "Developer-first email API. Reliable delivery and analytics.",
  },
  {
    name: "Upstash",
    role: "Redis & Queues",
    href: "https://upstash.com",
    description: "Serverless Redis for caching, rate limiting, and pub/sub.",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              variants={itemVariants}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-5 sm:p-6 lg:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/5 dark:hover:shadow-black/20 text-center"
            >
              {/* Partner name */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:scale-[1.02] transition-transform duration-200">
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
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
