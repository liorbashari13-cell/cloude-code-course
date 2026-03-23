"use client";

import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  const isRtl = locale === "he";

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        <Toaster position={isRtl ? "top-left" : "top-right"} richColors />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
