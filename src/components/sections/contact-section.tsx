"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("heading")} subtitle={t("subheading")} />

        <ScrollAnimation className="max-w-xl mx-auto">
          <Card className="p-6 md:p-8">
            <ContactForm />
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  );
}
