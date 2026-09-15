import { cn } from "../utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full rounded-md border border-border-strong bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors",
          "focus:border-accent focus:ring-1 focus:ring-accent",
          className,
        )}
        {...props}
      />
    </div>
  );
}
