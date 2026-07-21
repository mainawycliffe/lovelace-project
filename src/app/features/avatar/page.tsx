"use client";

import { members } from "@/lib/mock-data";
import { Card, PageHeader, EmptyState } from "@/components/ui";

interface AvatarProps {
  id?: string | number;
  name: string;
  size?: number;
}

export function Avatar({ id, name, size = 50 }: AvatarProps) {
  // Extract initials safely
  const initials = name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);


  const professionalPalette = [
    { bg: "#1E1E24", text: "#F43F5E", border: "#F43F5E" },
    { bg: "#E11D48", text: "#FFFFFF", border: "#E11D48" }, 
    { bg: "#0F172A", text: "#FDA4AF", border: "#334155" }, 
    { bg: "#F43F5E", text: "#0F172A", border: "#F43F5E" }, 
    { bg: "#111827", text: "#E2E8F0", border: "#F43F5E" }, 
  ];

  
  const stringIdentifier = typeof id === 'string' ? id.length : (id || 0);
  const colorIndex = (name.length + stringIdentifier) % professionalPalette.length;
  const design = professionalPalette[colorIndex];

  return (
    <div
      className="flex items-center justify-center rounded-full font-bold shrink-0 transition-transform duration-200 hover:scale-105"
      style={{
        backgroundColor: design.bg,
        color: design.text,
        border: `2px solid ${design.border}`,
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size * 0.36}px`,
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      {initials}
    </div>
  );
}

export default function AvatarFeaturePage() {
  return (
    <div className="space-y-6 p-6 w-full max-w-7xl mx-auto min-h-screen bg-zinc-950 text-white">
      <PageHeader 
        title="Avatar Gallery" 
      />

      {!members || members.length === 0 ? (
        <EmptyState message="No members found in the team." />
      ) : (
        <Card className="p-8 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl shadow-2xl">
          <div className="flex flex-wrap gap-8 justify-start items-start">
            {members.map((member) => (
              <div key={member.id} className="flex flex-col items-center space-y-3 w-20 text-center group">
                <Avatar 
                  id={member.id}
                  name={member.name} 
                  size={60} 
                />
                <span className="text-xs font-semibold text-zinc-400 group-hover:text-rose-400 transition-colors duration-200 break-words w-full line-clamp-2">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
