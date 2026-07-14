import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// Shared surface container. Use this instead of hand-rolling bordered <div>s
// so every feature looks consistent.
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
}
