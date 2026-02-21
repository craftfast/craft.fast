"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { APP_URL, ACCOUNTS_URL, DOCS_URL } from "@/lib/constants";
import { useSession, signOut } from "@/lib/auth-client";
import { LogoSymbol, LogoExtended } from "@/components/Logo";

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
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="px-4">
        <div className="relative flex items-center h-12">
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
          <div className="flex items-center gap-3 ml-auto">
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
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Open Craft
                          </a>
                          <a
                            href={`${APP_URL}/settings/account`}
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            Manage account
                          </a>
                          <button
                            onClick={handleSignOut}
                            className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
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
                      className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                    >
                      Sign in
                    </a>
                    <a
                      href={`${ACCOUNTS_URL}/signup`}
                      className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
                    >
                      Get Started
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
                  className="block px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors"
                >
                  Sign in
                </a>
                <a
                  href={`${ACCOUNTS_URL}/signup`}
                  className="block px-3 py-2 text-sm font-medium text-foreground"
                >
                  Get Started
                </a>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
