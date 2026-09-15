import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "../utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export function Select({ label, id, className, children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={cn(
            "w-full appearance-none rounded-md border border-border-strong bg-surface px-3.5 py-2.5 pr-9 text-sm text-foreground outline-none transition-colors",
            "focus:border-accent focus:ring-1 focus:ring-accent",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDownIcon
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}
