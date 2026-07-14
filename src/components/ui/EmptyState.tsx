import { Card } from "./Card";

export function EmptyState({ message }: { message: string }) {
  return (
    <Card className="border-dashed text-center text-sm text-neutral-500 dark:text-neutral-400">
      {message}
    </Card>
  );
}
