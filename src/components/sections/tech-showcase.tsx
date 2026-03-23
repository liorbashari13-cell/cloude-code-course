"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechIcon } from "@/components/shared/tech-icon";
import { TECH_STACK } from "@/lib/constants";

export function TechShowcase() {
  const t = useTranslations("tech");

  return (
    <section id="tech" className="py-28 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <SectionHeading title={t("heading")} subtitle={t("subheading")} />

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto">
          {TECH_STACK.map((tech, i) => (
            <TechIcon
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
