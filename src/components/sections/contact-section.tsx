"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, Linkedin, Github, Clock, CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/components/shared/scroll-animation";
import { ContactForm } from "@/components/forms/contact-form";
import { SOCIAL_LINKS } from "@/lib/constants";

const perks = [
  { icon: Clock, text: "מענה תוך 24 שעות" },
  { icon: CheckCircle2, text: "ייעוץ ראשוני ללא עלות" },
  { icon: CheckCircle2, text: "הצעת מחיר מפורטת" },
];

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section label */}
        <ScrollAnimation className="text-center mb-16">
          <span className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            צור קשר
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            {t("heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t("subheading")}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-start">

          {/* Left: Info */}
          <ScrollAnimation className="lg:col-span-2 space-y-8" direction="right">
            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="mailto:lior@example.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">אימייל</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-indigo-400 transition-colors">lior@example.com</p>
                </div>
              </a>

              <a
                href="tel:+972500000000"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">טלפון</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-violet-400 transition-colors dir-ltr">050-000-0000</p>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 text-muted-foreground hover:text-white transition-all text-sm font-medium"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 text-muted-foreground hover:text-white transition-all text-sm font-medium"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            {/* Perks */}
            <div className="space-y-3 pt-2">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div key={perk.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 text-emerald-400 shrink-0" />
                    {perk.text}
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>

          {/* Right: Form */}
          <ScrollAnimation className="lg:col-span-3" direction="left">
            <div className="p-6 md:p-8 rounded-3xl border border-white/8 bg-white/2 backdrop-blur-sm">
              <ContactForm />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
