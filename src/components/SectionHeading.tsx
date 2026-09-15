import { cn } from "../utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl text-foreground text-balance max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-sm sm:text-base max-w-xl text-balance">{description}</p>
      )}
    </div>
  );
}
