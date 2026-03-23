"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FileText, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollAnimation } from "@/components/shared/scroll-animation";

const steps = [
  {
    icon: FileText,
    titleKey: "step1.title",
    descKey: "step1.description",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    num: "01",
  },
  {
    icon: Code2,
    titleKey: "step2.title",
    descKey: "step2.description",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    num: "02",
  },
  {
    icon: Rocket,
    titleKey: "step3.title",
    descKey: "step3.description",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    num: "03",
  },
];

export function MethodSection() {
  const t = useTranslations("method");

  return (
    <section id="method" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("heading")} subtitle={t("subheading")} />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-indigo-500/50 via-violet-500/50 to-cyan-500/50" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollAnimation key={step.titleKey} delay={i * 0.2}>
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative z-10 w-20 h-20 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-4 border border-current/20`}
                  >
                    <Icon className="h-9 w-9" />
                  </motion.div>
                  <span className={`text-xs font-mono font-bold ${step.color} mb-2`}>
                    {step.num}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
