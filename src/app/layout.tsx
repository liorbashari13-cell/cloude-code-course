import type { ReactNode } from "react";
import { getLocale } from "next-intl/server";
import { heebo, inter } from "@/lib/fonts";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const isRtl = locale === "he";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${heebo.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
