import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getMessages, getTranslations } from "next-intl/server";
import { Providers } from "@/components/providers";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "he" ? "he_IL" : "en_US",
      type: "website",
    },
    alternates: {
      languages: {
        he: "/he",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <Providers locale={locale} messages={messages}>
      {children}
    </Providers>
  );
}
