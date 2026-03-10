"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Prompt",
    description: "Describe what you want in plain English or paste a spec.",
  },
  {
    number: "02",
    title: "Preview",
    description:
      "Craft writes code and starts the dev server in a cloud sandbox to preview.",
  },
  {
    number: "03",
    title: "Publish",
    description:
      "Talk to the running app, point out issues, and deploy when it's ready.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-neutral-50/80 dark:bg-neutral-900/30 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            How it actually works
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 px-2">
            Three steps. No surprises.
          </p>
        </motion.div>

        {/* Steps timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="h-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 origin-left mx-[17%]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="text-center relative"
              >
                {/* Step circle */}
                <div className="relative mx-auto mb-5 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-foreground text-background rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto text-xs sm:text-sm font-bold relative z-10">
                    {step.number}
                  </div>
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-foreground/20 dark:bg-foreground/10 animate-ping [animation-duration:3s]"
                    style={{ animationDelay: `${index}s` }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Vertical connecting line (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6 sm:mt-8">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-px h-8 sm:h-10 bg-linear-to-b from-neutral-300 to-transparent dark:from-neutral-700 origin-top"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
