"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LangToggle } from "@/components/shared/lang-toggle";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const sections = ["services", "method", "tech", "contact"];

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sections);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = sections.map((id) => ({
    id,
    label: t(id),
    href: `#${id}`,
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          LB
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeId === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="md:hidden"
              render={<Button variant="ghost" size="icon" />}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium py-2 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
