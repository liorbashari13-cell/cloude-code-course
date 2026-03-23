import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-t border-white/5 bg-[#060b18]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white text-sm font-black">LB</span>
              </div>
              <span className="text-white font-bold">Lior Bashari</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Full-Stack Developer המתמחה בבניית מוצרים דיגיטליים מתקדמים.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">יצירת קשר</h4>
            <div className="space-y-2">
              <a href="mailto:lior@example.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                <Mail className="h-4 w-4" />
                lior@example.com
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">ניווט</h4>
            <div className="space-y-2">
              {["services", "method", "tech", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block text-sm text-slate-500 hover:text-indigo-400 transition-colors capitalize"
                >
                  {section === "services" ? "שירותים"
                    : section === "method" ? "השיטה"
                    : section === "tech" ? "טכנולוגיות"
                    : "צור קשר"}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Lior Bashari. {t("rights")}
          </p>
          <p className="text-xs text-slate-600">{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
