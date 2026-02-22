"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ACCOUNTS_URL, DOCS_URL } from "@/lib/constants";

const TYPING_PROMPT =
  "Add a Stripe webhook handler, update the billing schema, and show usage on the settings page";

const FILE_TABS = [
  "api/webhook/route.ts",
  "schema.prisma",
  "Settings.tsx",
  "UsageChart.tsx",
  "billing.ts",
  "middleware.ts",
];

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showFiles, setShowFiles] = useState(false);
  const [visibleFiles, setVisibleFiles] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < TYPING_PROMPT.length) {
        setTypedText(TYPING_PROMPT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowFiles(true);
          let f = 0;
          const fileInterval = setInterval(() => {
            f++;
            setVisibleFiles(f);
            if (f >= FILE_TABS.length) clearInterval(fileInterval);
          }, 200);
        }, 600);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-svh flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#00000012_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* Radial glow blobs — responsive sizing */}
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[80vw] max-w-200 h-[60vw] max-h-150 bg-[radial-gradient(ellipse,oklch(0.8_0_0/0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse,oklch(0.3_0_0/0.2),transparent_70%)] animate-glow-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] max-w-125 h-[50vw] max-h-125 bg-[radial-gradient(circle,oklch(0.85_0_0/0.1),transparent_70%)] dark:bg-[radial-gradient(circle,oklch(0.25_0_0/0.15),transparent_70%)] animate-glow-pulse [animation-delay:2s]" />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center mb-6 sm:mb-8 lg:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur-sm text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-neutral-700/80">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span>Full-stack Next.js — not just UI components</span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-tight"
          >
            Ship the app,
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-neutral-400 dark:text-neutral-500"
            >
              not a prototype.
            </motion.span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed text-center px-2"
        >
          Other tools generate UI. Craft generates the API routes, database
          schema, auth, and deployment config too. Each project runs in its own
          cloud sandbox, with a real Postgres database attached.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0"
        >
          <a
            href={`${ACCOUNTS_URL}/signup`}
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium bg-foreground text-background rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-neutral-900/10 dark:shadow-neutral-100/5"
          >
            Try It — Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={DOCS_URL}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium border border-neutral-300 dark:border-neutral-700 text-foreground rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Read the Docs
          </a>
        </motion.div>

        {/* Animated terminal demo */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl sm:rounded-2xl border border-neutral-800 shadow-2xl shadow-neutral-900/30 dark:shadow-black/50 overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-neutral-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 sm:px-4 py-1 bg-neutral-800 rounded-lg text-[10px] sm:text-xs text-neutral-400 font-mono">
                  craft.fast
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-3.5 sm:p-6 md:p-8">
              {/* User message */}
              <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] sm:text-xs text-neutral-400 font-medium">
                    Y
                  </span>
                </div>
                <div className="bg-neutral-800 rounded-2xl rounded-tl-sm px-3 sm:px-4 py-2 sm:py-3 min-w-0 flex-1 max-w-lg">
                  <p className="text-xs sm:text-sm text-neutral-300 font-mono wrap-break-words">
                    {typedText}
                    <span className="inline-block w-0.5 h-3 sm:h-4 bg-neutral-400 ml-0.5 align-middle animate-cursor-blink" />
                  </p>
                </div>
              </div>

              {/* AI response with file generation */}
              {showFiles && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="ml-8 sm:ml-11"
                >
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-500" />
                    <span className="text-xs sm:text-sm text-neutral-400 font-mono">
                      Generating {FILE_TABS.length} files...
                    </span>
                  </div>

                  {/* File tabs appearing one by one */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {FILE_TABS.map((file, i) => (
                      <motion.div
                        key={file}
                        initial={{ opacity: 0, scale: 0.8, y: 8 }}
                        animate={
                          i < visibleFiles
                            ? { opacity: 1, scale: 1, y: 0 }
                            : { opacity: 0, scale: 0.8, y: 8 }
                        }
                        transition={{
                          duration: 0.3,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-neutral-800 border border-neutral-700 rounded-md sm:rounded-lg text-[10px] sm:text-xs text-neutral-300 font-mono"
                      >
                        {file}
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  {visibleFiles > 0 && (
                    <div className="mt-3 sm:mt-4 h-1 bg-neutral-800 rounded-full overflow-hidden max-w-xs">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{
                          width: `${(visibleFiles / FILE_TABS.length) * 100}%`,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="h-full bg-neutral-500 rounded-full"
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
