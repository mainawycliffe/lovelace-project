import { PageHeader } from "@/components/ui";
import { MemberSearch } from "./MemberSearch";

export default function MemberSearchPage() {
  return (
    <div>
      <PageHeader title="Member Search" subtitle="Find a teammate by name." />
      <MemberSearch />
    </div>
  );
}
