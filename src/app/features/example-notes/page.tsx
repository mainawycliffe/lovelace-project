import { PageHeader } from "@/components/ui";
import { NotesBoard } from "./NotesBoard";

// Reference feature page. Each of your feature pages should look roughly like
// this: a PageHeader, then your client component.
export default function ExampleNotesPage() {
  return (
    <div>
      <PageHeader
        title="Notes (example)"
        subtitle="Reference implementation — study the code, then build your own feature the same way."
      />
      <NotesBoard />
    </div>
  );
}
