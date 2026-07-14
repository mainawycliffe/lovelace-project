import { PageHeader } from "@/components/ui";
import { PollWidget } from "./PollWidget";

export default function PollPage() {
  return (
    <div>
      <PageHeader title="Team Poll" subtitle="Cast your vote and see the results." />
      <PollWidget />
    </div>
  );
}