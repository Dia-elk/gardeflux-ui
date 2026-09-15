"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { cn } from "../utils";

export function Checkbox({
  checked,
  onChange,
  label,
  id,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  id?: string;
}) {
  return (
    <label htmlFor={id} className="flex items-center gap-2.5 cursor-pointer select-none">
      <button
        id={id}
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
          checked ? "bg-accent border-accent" : "border-border-strong bg-surface",
        )}
      >
        {checked && <CheckIcon className="h-3 w-3 text-accent-foreground" strokeWidth={2.5} />}
      </button>
      <span className="text-sm text-muted">{label}</span>
    </label>
  );
}
