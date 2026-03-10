"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { APP_URL, ACCOUNTS_URL, LINKS } from "@/lib/constants";
import { useSession } from "@/lib/auth-client";
import { LogoSymbol, LogoExtended } from "@/components/Logo";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Support", href: "/support" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, isPending } = useSession();

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLoggedIn = !isPending && session?.user;
  const user = session?.user;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled || pathname !== "/"
            ? "bg-background/90 dark:bg-background/95 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <LogoSymbol />
              <LogoExtended className="hidden sm:block" />
            </Link>

            {/* Desktop Nav — absolutely centered */}
            <nav className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isExternal = "external" in link && link.external;
                const isActive = !isExternal && pathname === link.href;
                const Component = isExternal ? "a" : Link;
                const extraProps = isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <Component
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-1.5 text-sm rounded-full transition-colors",
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-800 text-foreground font-medium"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-foreground",
                    )}
                    {...extraProps}
                  >
                    {link.label}
                  </Component>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-0.5 ml-auto pr-1">
              <a
                href={LINKS.SUDHEER_WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400 hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Talk to Founder
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={LINKS.GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={LINKS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center w-8 h-8 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Discord"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.128 18.115a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>

              {/* Divider */}
              <div className="hidden md:block w-px h-4 bg-neutral-200 dark:bg-neutral-700 mx-1.5" />

              {mounted && !isPending && isLoggedIn && user ? (
                <a
                  href={APP_URL}
                  className="inline-flex items-center px-4 py-1.5 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full hover:opacity-90 transition-opacity"
                >
                  Go to App
                </a>
              ) : mounted ? (
                <>
                  <a
                    href={`${ACCOUNTS_URL}/signin`}
                    className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                  >
                    Log in
                  </a>
                  <a
                    href={`${ACCOUNTS_URL}/signup`}
                    className="inline-flex items-center px-4 py-1.5 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Sign up
                  </a>
                </>
              ) : null}

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden ml-1 flex items-center justify-center w-8 h-8 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu — inline accordion ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden border-t border-neutral-100 dark:border-neutral-800/60 bg-background/95 backdrop-blur-xl"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-0.5">
                {navLinks.map((link) => {
                  const isExternal = "external" in link && link.external;
                  const Component = isExternal ? "a" : Link;
                  const extraProps = isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Component
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-4 py-2.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                      {...extraProps}
                    >
                      {link.label}
                    </Component>
                  );
                })}
                <a
                  href={LINKS.SUDHEER_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                >
                  Talk to Founder
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 border-t border-neutral-100 dark:border-neutral-800/60 pt-3">
                {!isPending && isLoggedIn ? (
                  <a
                    href={APP_URL}
                    className="flex items-center w-full px-4 py-2.5 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl justify-center transition-opacity hover:opacity-90"
                  >
                    Go to App
                  </a>
                ) : (
                  <div className="flex gap-2">
                    <a
                      href={`${ACCOUNTS_URL}/signin`}
                      className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      Log in
                    </a>
                    <a
                      href={`${ACCOUNTS_URL}/signup`}
                      className="flex-1 text-center px-4 py-2.5 text-sm font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Sign up
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
