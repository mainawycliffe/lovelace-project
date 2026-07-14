import { PageHeader } from "@/components/ui";
import { Card, Badge } from "@/components/ui";
import { members } from "@/lib/mock-data";

export default function MemberDirectoryPage() {
  return (
    <div>
      <PageHeader title="Member Directory" subtitle="Everyone on the team." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {members.map((member) => (
          <Card key={member.id}>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-500">{member.team}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {member.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}











