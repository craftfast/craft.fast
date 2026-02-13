"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { APP_URL, DOCS_URL } from "@/lib/constants";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: DOCS_URL, external: true },
  { label: "Support", href: "/support" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background text-sm font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">craft</span>
            <span className="text-xl font-light text-neutral-400">.fast</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
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
          <div className="flex items-center gap-3">
            {mounted && (
              <>
                <a
                  href={`${APP_URL}/sign-in`}
                  className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                >
                  Sign in
                </a>
                <a
                  href={`${APP_URL}/sign-up`}
                  className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                >
                  Get Started
                </a>
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
        {mobileOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-1">
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
            <a
              href={`${APP_URL}/sign-in`}
              className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
            >
              Sign in
            </a>
            <a
              href={`${APP_URL}/sign-up`}
              className="block px-3 py-2 text-sm font-medium text-foreground"
            >
              Get Started
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
