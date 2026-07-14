import Link from "next/link";
import { Card, Badge, PageHeader } from "@/components/ui";
import {
  CATEGORY_ORDER,
  featuresByCategory,
  type Difficulty,
  type Feature,
} from "@/lib/features";

const difficultyTone: Record<Difficulty, "green" | "amber" | "red"> = {
  easy: "green",
  medium: "amber",
  hard: "red",
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Link href={`/features/${feature.slug}`} className="group">
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <div className="mb-2 flex items-center gap-2">
          <Badge tone="neutral">#{feature.issue}</Badge>
          <Badge tone={difficultyTone[feature.difficulty]}>{feature.difficulty}</Badge>
          {feature.kind === "fix" && <Badge tone="violet">bug fix</Badge>}
        </div>
        <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 dark:text-white">
          {feature.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {feature.description}
        </p>
      </Card>
    </Link>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Team Hub"
        subtitle="27 features, one product. Claim an issue and light up your feature."
      />
      <div className="space-y-8">
        {CATEGORY_ORDER.map((category) => (
          <section key={category}>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-400">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuresByCategory(category).map((feature) => (
                <FeatureCard key={feature.slug} feature={feature} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
