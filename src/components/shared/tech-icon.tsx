"use client";

import { motion } from "framer-motion";

interface TechIconProps {
  name: string;
  delay?: number;
}

const techColors: Record<string, string> = {
  nextjs: "#000000",
  react: "#61DAFB",
  typescript: "#3178C6",
  nodejs: "#339933",
  tailwind: "#06B6D4",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  python: "#3776AB",
};

export function TechIcon({ name, delay = 0 }: TechIconProps) {
  const color = techColors[name.toLowerCase().replace(/[.\s]/g, "")] || "#888";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="flex flex-col items-center gap-2 p-4"
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg"
        style={{ backgroundColor: color }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </motion.div>
  );
}
