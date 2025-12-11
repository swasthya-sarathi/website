interface SectionHeaderProps {
  title: string;
  highlight: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  highlight,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  const alignmentClass = centered ? "text-center" : "text-center lg:text-left";

  return (
    <div className={`mb-8 sm:mb-12 ${alignmentClass} ${className}`}>
      <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-3 sm:mb-4 text-foreground px-2 tracking-tight">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground text-[0.875rem] sm:text-[1.05rem] md:text-lg max-w-2xl mx-auto px-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
