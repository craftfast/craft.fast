"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  DocsSidebar,
  MobileDocsSidebar,
  TableOfContents,
} from "@/components/docs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/docs" || pathname === "/docs/";

  // Landing page: full-width without sidebar
  if (isLandingPage) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 pt-14 sm:pt-16">{children}</main>
        <Footer />
      </div>
    );
  }

  // Article pages: sidebar layout
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <div className="flex-1 flex pt-14 sm:pt-16">
        {/* Left Sidebar - Desktop */}
        <aside className="hidden lg:flex lg:flex-col w-60 shrink-0 overflow-y-auto scrollbar-thin border-r border-border bg-background sticky top-16 h-[calc(100vh-64px)]">
          <div className="p-4">
            <DocsSidebar />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">{children}</main>

        {/* Right Sidebar - Table of Contents */}
        <aside className="hidden xl:flex xl:flex-col w-60 shrink-0 overflow-y-auto scrollbar-thin bg-background sticky top-16 h-[calc(100vh-64px)]">
          <div className="p-4">
            <TableOfContents />
          </div>
        </aside>
      </div>

      <Footer />

      {/* Mobile Sidebar */}
      <MobileDocsSidebar />
    </div>
  );
}
