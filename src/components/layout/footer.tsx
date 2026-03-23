import { useTranslations } from "next-intl";
import { Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start">
          <div>
            <h3 className="text-lg font-bold mb-2">Lior Bashari</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-3">
              lior@example.com
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>{t("accessibility")}</p>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Lior Bashari. {t("rights")}
          </p>
          <p>{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
