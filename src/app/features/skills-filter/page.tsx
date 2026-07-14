"use client";

import { PageHeader, Card, Badge, Button } from "@/components/ui";
import { members } from "@/lib/mock-data";
import { useLocalStorage } from "@/lib/useLocalStorage";
import type { Member } from "@/lib/types";

export default function SkillsFilterPage() {
  const [selectedSkill, setSelectedSkill] = useLocalStorage<string>(
    "skills-filter-selected",
    "",
  );

  const allSkills = Array.from(
    new Set(members.flatMap((m: Member) => m.skills)),
  );

  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      setSelectedSkill("");
    } else {
      setSelectedSkill(skill);
    }
  };

  const filteredMembers = selectedSkill
    ? members.filter((m: Member) => m.skills.includes(selectedSkill))
    : members;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Filter by Skill"
        subtitle="Find members by what they do."
      />

      <div className="flex flex-wrap gap-2 items-center p-4 bg-muted/20 rounded-lg">
        <span className="text-sm font-medium text-muted-foreground mr-2">
          Skills:
        </span>

        <Button
          onClick={() => setSelectedSkill("")}
          className={`px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${
            selectedSkill === ""
              ? "bg-primary text-primary-foreground font-semibold"
              : "bg-transparent border border-input text-foreground hover:bg-accent"
          }`}
        >
          All
        </Button>

        {allSkills.map((skill) => {
          const isActive = selectedSkill === skill;
          return (
            <Button
              key={skill}
              onClick={() => handleSkillClick(skill)}
              className={`capitalize px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-transparent border border-input text-foreground hover:bg-accent"
              }`}
            >
              {skill}
            </Button>
          );
        })}
      </div>

      {filteredMembers.length === 0 ? (
        <div className="text-center p-8 border border-dashed rounded-lg bg-muted/10">
          <h3 className="text-lg font-bold text-foreground">
            No members found
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Nobody has the skill "{selectedSkill}" yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMembers.map((member: Member) => (
            <Card
              key={member.id}
              className="p-4 flex flex-col justify-between h-full border rounded-lg shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {member.role}
                </p>
                <div className="text-xs text-muted-foreground mt-1 bg-muted px-2 py-0.5 inline-block rounded">
                  {member.team}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mt-4">
                {member.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className={`text-xs capitalize px-2 py-0.5 rounded ${
                      selectedSkill === skill
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
