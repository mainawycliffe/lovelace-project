import Link from "next/link";
import type { ReactNode } from "react";
import { CATEGORY_ORDER, featuresByCategory } from "@/lib/features";

// The shared application shell: sidebar navigation + main content area.
// The sidebar is generated from the feature registry, so every feature
// automatically shows up in the nav. You do not need to touch this file.
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <aside className="hidden w-64 shrink-0 border-r border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900 md:block">
        <Link href="/" className="mb-6 flex items-center gap-2 px-2 text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">
            TH
          </span>
          Team Hub
        </Link>
        <nav className="space-y-5">
          {CATEGORY_ORDER.map((category) => (
            <div key={category}>
              <p className="px-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                {category}
              </p>
              <ul className="mt-1 space-y-0.5">
                {featuresByCategory(category).map((f) => (
                  <li key={f.slug}>
                    <Link
                      href={`/features/${f.slug}`}
                      className="block rounded-md px-2 py-1.5 text-sm text-neutral-600 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
                    >
                      {f.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="mx-auto w-full max-w-5xl flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
