"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code, Server, Zap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollAnimation } from "@/components/shared/scroll-animation";

const services = [
  {
    icon: Code,
    titleKey: "custom.title",
    descKey: "custom.description",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    glow: "hover:shadow-indigo-500/10",
  },
  {
    icon: Server,
    titleKey: "systems.title",
    descKey: "systems.description",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/50",
    glow: "hover:shadow-violet-500/10",
  },
  {
    icon: Zap,
    titleKey: "automation.title",
    descKey: "automation.description",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    glow: "hover:shadow-cyan-500/10",
  },
];

export function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title={t("heading")} subtitle={t("subheading")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={service.titleKey} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`h-full p-6 rounded-2xl border bg-card ${service.border} shadow-lg ${service.glow} transition-all duration-300 cursor-default`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-5`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
