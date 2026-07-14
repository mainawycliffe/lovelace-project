import { PageHeader } from "@/components/ui";
import { Accordion } from "./Accordion";

export default function AccordionPage() {
  return (
    <div>
      <PageHeader title="FAQ" subtitle="Frequently asked questions." />
      <Accordion />
    </div>
  );
}
