import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SkillsFilterPage from "./page";
import { members } from "@/lib/mock-data";

describe("SkillsFilterPage", () => {
  it("renders all skill filter buttons and initial member directory entries", () => {
    render(<SkillsFilterPage />);
    
    expect(screen.getByText("Filter by Skill")).toBeInTheDocument();

    const sampleSkill = members[0].skills[0];
    expect(screen.getByRole("button", { name: new RegExp(`^${sampleSkill}$`, "i") })).toBeInTheDocument();
  });

  it("filters down the visible member list when clicking on a skill button", () => {
    render(<SkillsFilterPage />);

    const targetedSkill = members[0].skills[0];
    const skillButton = screen.getByRole("button", { name: new RegExp(`^${targetedSkill}$`, "i") });

    fireEvent.click(skillButton);

    const matchingMembers = members.filter(m => m.skills.includes(targetedSkill));
    const nonMatchingMembers = members.filter(m => !m.skills.includes(targetedSkill));

    matchingMembers.forEach(member => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
    });

    if (nonMatchingMembers.length > 0) {
      nonMatchingMembers.forEach(member => {
        expect(screen.queryByText(member.name)).not.toBeInTheDocument();
      });
    }
  });
});
