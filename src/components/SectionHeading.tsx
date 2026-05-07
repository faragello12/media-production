interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <div className="text-xs sm:text-sm text-mp-faint uppercase tracking-[0.3em] text-white/70">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 font-display text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-mp-muted sm:text-lg">
          {description}
        </p>
      ) : null}
      <div className="mx-auto mt-6 h-px w-48 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
