import Link from "next/link";
import { LINKS, EMAILS, APP_URL, DOCS_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                <a
                  href={`${DOCS_URL}/blog`}
                  className="text-neutral-500 hover:text-foreground transition-colors"
                >
                  Blog
                </a>
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
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded-md flex items-center justify-center">
              <span className="text-background text-xs font-bold">C</span>
            </div>
            <span className="text-sm font-medium text-foreground">
              craft.fast
            </span>
          </div>
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Nextcrafter Labs (OPC) Private
            Limited. All rights reserved.
          </p>
          <a
            href={`mailto:${EMAILS.HELLO}`}
            className="text-sm text-neutral-500 hover:text-foreground transition-colors"
          >
            {EMAILS.HELLO}
          </a>
        </div>
      </div>
    </footer>
  );
}
