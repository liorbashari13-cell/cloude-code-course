import { ScrollAnimation } from "./scroll-animation";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollAnimation className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollAnimation>
  );
}
