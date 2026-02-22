import Link from "next/link";
import { LINKS, EMAILS, APP_URL, DOCS_URL } from "@/lib/constants";
import { LogoSymbol } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={APP_URL}
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Open Craft
                </a>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={DOCS_URL}
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Community
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={LINKS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={LINKS.DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href={LINKS.TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href={LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={LINKS.YOUTUBE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          {/* Powered by infrastructure */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
            <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              Powered by
            </span>
            {[
              { name: "E2B", href: "https://e2b.dev" },
              { name: "Neon", href: "https://neon.tech" },
              { name: "Vercel", href: "https://vercel.com" },
            ].map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-neutral-500 hover:text-foreground transition-colors"
              >
                {partner.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <LogoSymbol className="h-5 w-auto" />
              <span className="text-sm font-medium text-foreground">
                craft.fast
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 text-center">
              &copy; {new Date().getFullYear()} Nextcrafter Labs (OPC) Private
              Limited. All rights reserved.
            </p>
            <a
              href={`mailto:${EMAILS.HELLO}`}
              className="text-xs sm:text-sm text-neutral-500 hover:text-foreground transition-colors"
            >
              {EMAILS.HELLO}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
