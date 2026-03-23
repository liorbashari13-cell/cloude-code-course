"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a0f1e] dark:bg-[#0a0f1e]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          Full-Stack Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            nativeButton={false}
            className="text-base px-8 py-6 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30"
            render={<a href="#contact" />}
          >
            {t("cta")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="text-base px-8 py-6 rounded-full border-white/20 text-white hover:bg-white/10"
            render={<a href="#services" />}
          >
            הכירו את השירותים
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-5 w-5 text-slate-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
