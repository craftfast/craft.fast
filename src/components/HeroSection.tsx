"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Play, X, ChevronRight } from "lucide-react";
import { ACCOUNTS_URL } from "@/lib/constants";
import { E2BLogo, NeonLogo, VercelLogo } from "@/components/PartnerLogos";
import { AnimatedBuildFlow } from "./AnimatedBuildFlow";

function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-5xl"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl shadow-black/50 aspect-video">
              {/* Replace the src below with your actual demo video URL */}
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
                title="Craft Demo Video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:h-svh lg:flex lg:items-center lg:pb-0">
        {/* ── Background ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0_0_0/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0_0_0/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-size-[64px_64px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[60vw] max-w-175 h-[60vw] max-h-125 rounded-full bg-[radial-gradient(ellipse,oklch(0.75_0_0/0.1),transparent_65%)] dark:bg-[radial-gradient(ellipse,oklch(0.35_0_0/0.15),transparent_65%)] blur-3xl animate-glow-pulse" />
          <div className="absolute top-[5%] right-[-10%] w-[55vw] max-w-150 h-[55vw] max-h-150 rounded-full bg-[radial-gradient(ellipse,oklch(0.8_0_0/0.07),transparent_65%)] dark:bg-[radial-gradient(ellipse,oklch(0.3_0_0/0.12),transparent_65%)] blur-3xl animate-glow-pulse [animation-delay:2s]" />
          <div className="absolute inset-0 noise-overlay opacity-40 dark:opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* ── Left column: copy ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="flex flex-col items-start"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="mb-6"
              >
                <a
                  href="/pricing"
                  className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-sm"
                >
                  <Sparkles className="w-3 h-3 shrink-0" />
                  <span>Now in public beta</span>
                  <span className="w-px h-3 bg-neutral-200 dark:bg-neutral-700" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                    Free to start
                  </span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-tight text-foreground mb-5">
                Ship the app,
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.45 }}
                  className="text-neutral-400 dark:text-neutral-500"
                >
                  not a prototype.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed mb-8"
              >
                Write a prompt. Craft generates the backend, database, and
                frontend — then spins it up live in a cloud sandbox. No setup.
                No markup.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42 }}
                className="flex flex-wrap items-center gap-3 mb-10"
              >
                <a
                  href={`${ACCOUNTS_URL}/signup`}
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-neutral-900/20 dark:shadow-neutral-100/8"
                >
                  Start Building
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:border-neutral-400 dark:hover:border-neutral-600 rounded-full transition-all duration-200"
                >
                  <Play className="w-3.5 h-3.5" />
                  Watch demo
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center gap-5"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 shrink-0">
                  Powered by
                </p>
                {[
                  {
                    name: "E2B",
                    href: "https://e2b.dev/startups",
                    Logo: E2BLogo,
                    className: "h-5 w-auto",
                  },
                  {
                    name: "Neon",
                    href: "https://neon.com",
                    Logo: NeonLogo,
                    className: "h-5 w-auto",
                  },
                  {
                    name: "Vercel",
                    href: "https://vercel.com",
                    Logo: VercelLogo,
                    className: "h-4 w-auto",
                  },
                ].map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-35 hover:opacity-60 dark:opacity-30 dark:hover:opacity-55 transition-opacity duration-200 text-neutral-900 dark:text-neutral-100"
                  >
                    <tech.Logo className={tech.className} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right column: Build flow ── */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative w-full"
            >
              <AnimatedBuildFlow />
            </motion.div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={videoOpen} onClose={closeVideo} />
    </>
  );
}
