"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { APP_URL, ACCOUNTS_URL, DOCS_URL } from "@/lib/constants";
import { useSession, signOut } from "@/lib/auth-client";
import { LogoSymbol, LogoExtended } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ExternalLink, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: DOCS_URL, external: true },
  { label: "Support", href: "/support" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const { data: session, isPending } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close profile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    };
    if (profileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuOpen]);

  const handleSignOut = async () => {
    setProfileMenuOpen(false);
    await signOut();
  };

  const isLoggedIn = !isPending && session?.user;
  const user = session?.user;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-4 pt-3 sm:pt-4">
      <div className="max-w-4xl mt-4 mx-auto bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800/80 rounded-xl sm:rounded-2xl shadow-lg shadow-neutral-900/5 dark:shadow-black/20 px-3 sm:px-4 md:px-6">
        <div className="relative flex items-center h-11 sm:h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoSymbol />
            <LogoExtended className="hidden sm:block" />
          </Link>

          {/* Desktop Nav — absolutely centered */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
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
                    "px-4 py-2 text-sm rounded-full transition-colors",
                    isActive
                      ? "bg-neutral-100 dark:bg-neutral-800 text-foreground font-medium"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-foreground",
                  )}
                  {...extraProps}
                >
                  {link.label}
                </Component>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-1 ml-auto">
            <ThemeToggle />
            {mounted && (
              <>
                {isPending ? (
                  <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                ) : isLoggedIn && user ? (
                  <div ref={profileMenuRef} className="relative">
                    <button
                      onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                      className="flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label="User menu"
                    >
                      {user.image ? (
                        <div className="w-8 h-8 rounded-full overflow-hidden relative ring-2 ring-neutral-200 dark:ring-neutral-700">
                          <img
                            src={user.image}
                            alt={user.name || "User"}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-semibold text-neutral-700 dark:text-neutral-300 ring-2 ring-neutral-200 dark:ring-neutral-700">
                          {user.name?.[0]?.toUpperCase() ||
                            user.email?.[0]?.toUpperCase() ||
                            "U"}
                        </div>
                      )}
                    </button>

                    {/* Profile Dropdown — matches app UserMenu */}
                    {profileMenuOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 z-50">
                        <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-800">
                          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                            {user.name || "User"}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                            {user.email}
                          </p>
                        </div>
                        <div className="border-t border-neutral-200 dark:border-neutral-800 py-1">
                          <a
                            href={APP_URL}
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open Craft
                          </a>
                          <a
                            href={`${APP_URL}/settings/account`}
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                          >
                            <User className="w-4 h-4" />
                            Manage account
                          </a>
                          <button
                            onClick={handleSignOut}
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <a
                      href={`${ACCOUNTS_URL}/signin`}
                      className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                    >
                      Log in
                    </a>
                  </>
                )}
              </>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
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

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden border-t border-neutral-200/60 dark:border-neutral-800/60"
            >
              <div className="py-4 space-y-1">
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
                      className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground rounded-lg transition-colors"
                      {...extraProps}
                    >
                      {link.label}
                    </Component>
                  );
                })}
                {isLoggedIn ? (
                  <>
                    <a
                      href={APP_URL}
                      className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                    >
                      Open Craft
                    </a>
                    <a
                      href={`${APP_URL}/settings/account`}
                      className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                    >
                      Manage account
                    </a>
                    <a
                      href={`${APP_URL}/signin`}
                      className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                    >
                      Add another account
                    </a>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href={`${ACCOUNTS_URL}/signin`}
                      className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground rounded-lg transition-colors"
                    >
                      Sign in
                    </a>
                    <a
                      href={`${ACCOUNTS_URL}/signup`}
                      className="block mx-3 mt-2 px-4 py-2.5 text-sm font-medium text-center bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </a>
                  </>
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
