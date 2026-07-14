import { PageHeader } from "@/components/ui";
import { SortableTable } from "./SortableTable";

export default function SortableTablePage() {
  return (
    <div>
      <PageHeader
        title="Members Table"
        subtitle="Click a column header to sort."
      />
      <SortableTable />
    </div>
  );
}
