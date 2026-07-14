// Tiny className helper — joins truthy class strings together.
// Usage: cn("p-4", isActive && "bg-blue-500", className)
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
