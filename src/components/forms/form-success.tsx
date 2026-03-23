"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function FormSuccess() {
  const t = useTranslations("contact.form");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
      <p className="text-xl font-semibold">{t("success")}</p>
    </motion.div>
  );
}
