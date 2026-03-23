"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "he" ? "en" : "he";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="gap-1.5"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {locale === "he" ? "EN" : "עב"}
      </span>
    </Button>
  );
}
