"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Play, X } from "lucide-react";
import { ACCOUNTS_URL } from "@/lib/constants";
import { E2BLogo, NeonLogo, VercelLogo } from "@/components/PartnerLogos";

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
      <section className="relative overflow-hidden min-h-svh flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#00000012_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px]" />
          <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[80vw] max-w-200 h-[60vw] max-h-150 bg-[radial-gradient(ellipse,oklch(0.8_0_0/0.15),transparent_70%)] dark:bg-[radial-gradient(ellipse,oklch(0.3_0_0/0.2),transparent_70%)] animate-glow-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] max-w-125 h-[50vw] max-h-125 bg-[radial-gradient(circle,oklch(0.85_0_0/0.1),transparent_70%)] dark:bg-[radial-gradient(circle,oklch(0.25_0_0/0.15),transparent_70%)] animate-glow-pulse [animation-delay:2s]" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-6 sm:mb-12 leading-relaxed text-center px-2"
          >
            Describe what you want. Craft writes the backend, database, and
            frontend — then runs it in a cloud sandbox. Zero markup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-20 px-4 sm:px-0"
          >
            <a
              href={`${ACCOUNTS_URL}/signup`}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium bg-foreground text-background rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-neutral-900/10 dark:shadow-neutral-100/5"
            >
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium border border-neutral-300 dark:border-neutral-700 text-foreground rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </motion.div>

          {/* Powered by */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-[10px] sm:text-xs font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.2em] pb-4">
              Powered by
            </p>
            <div className="flex flex-wrap justify-center place-items-center gap-8 opacity-70">
              {[
                {
                  name: "E2B",
                  href: "https://e2b.dev",
                  Logo: E2BLogo,
                  className: "h-6 w-auto", // viewBox 409×140 → ~82px wide
                },
                {
                  name: "Neon",
                  href: "https://neon.com",
                  Logo: NeonLogo,
                  className: "h-6 w-auto", // viewBox 494×140 → ~85px wide
                },
                {
                  name: "Vercel",
                  href: "https://vercel.com",
                  Logo: VercelLogo,
                  className: "h-5 w-auto", // viewBox 699×140 → ~90px wide
                },
              ].map((tech) => (
                <a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-24 sm:w-32 opacity-40 hover:opacity-70 dark:opacity-50 dark:hover:opacity-80 transition-opacity duration-150 text-neutral-900 dark:text-neutral-100"
                >
                  <tech.Logo className={tech.className} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <VideoModal isOpen={videoOpen} onClose={closeVideo} />
    </>
  );
}
