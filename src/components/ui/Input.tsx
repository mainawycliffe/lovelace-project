import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

// Labelled text input. Pass a `label` for accessibility (it wires up htmlFor/id).
export function Input({
  label,
  id,
  error,
  className,
  ...props
}: {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} className="block text-sm">
      {label && (
        <span className="mb-1 block font-medium text-neutral-700 dark:text-neutral-200">
          {label}
        </span>
      )}
      <input
        id={id}
        className={cn(
          "w-full rounded-lg border border-black/15 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-white/20 dark:bg-neutral-800 dark:text-white",
          error && "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30",
          className,
        )}
        aria-invalid={error ? true : undefined}
        {...props}
      />
      {error && <span className="mt-1 block text-xs text-rose-600">{error}</span>}
    </label>
  );
}
