import { Card, Badge } from "@/components/ui";
import { featureBySlug } from "@/lib/features";

// Placeholder shown on features that haven't been built yet.
// When you implement your feature, DELETE this component from your page.tsx
// and replace it with your real UI.
export function FeatureStub({ slug }: { slug: string }) {
  const feature = featureBySlug(slug);
  return (
    <Card className="border-dashed">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="amber">Not built yet</Badge>
        {feature && <Badge tone="blue">Issue #{feature.issue}</Badge>}
        {feature && (
          <Badge tone={feature.kind === "fix" ? "red" : "violet"}>{feature.kind}</Badge>
        )}
      </div>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
        This feature is waiting for you. Open{" "}
        <code className="rounded bg-black/5 px-1 dark:bg-white/10">ISSUES.md</code> (or the
        matching GitHub issue), then edit this file:
      </p>
      <pre className="mt-2 overflow-x-auto rounded-lg bg-neutral-900 p-3 text-xs text-neutral-100">
        src/app/features/{slug}/page.tsx
      </pre>
    </Card>
  );
}
