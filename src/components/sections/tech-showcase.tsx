"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechIcon } from "@/components/shared/tech-icon";
import { TECH_STACK } from "@/lib/constants";

export function TechShowcase() {
  const t = useTranslations("tech");

  return (
    <section id="tech" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("heading")} subtitle={t("subheading")} />

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {TECH_STACK.map((tech, i) => (
            <TechIcon
              key={tech.name}
              name={tech.name}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
