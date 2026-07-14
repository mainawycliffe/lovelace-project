import { PageHeader } from "@/components/ui";
import { Pagination } from "./Pagination";

export default function PaginationPage() {
  return (
    <div>
      <PageHeader title="Members (paged)" subtitle="Browse members a page at a time." />
      <Pagination />
    </div>
  );
}
