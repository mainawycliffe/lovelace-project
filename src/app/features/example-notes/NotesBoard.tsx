"use client";

// ─────────────────────────────────────────────────────────────────────────────
// REFERENCE IMPLEMENTATION — study this before starting your issue.
//
// It demonstrates the patterns we want in every feature:
//   • "use client" for interactive components
//   • shared UI from "@/components/ui"
//   • the shared useLocalStorage hook for persistence
//   • an empty state
//   • accessible labels on inputs
//   • small, testable pieces (see NotesBoard.test.tsx)
//
// This is NOT one of the 27 issues — it is just an example to copy the style of.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, type FormEvent } from "react";
import { Card, Button, Input, EmptyState } from "@/components/ui";
import { useLocalStorage } from "@/lib/useLocalStorage";

interface Note {
  id: string;
  text: string;
}

export function NotesBoard() {
  const [notes, setNotes] = useLocalStorage<Note[]>("example-notes", []);
  const [draft, setDraft] = useState("");

  function addNote(e: FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    // A stable-enough id without Date.now/Math.random dependence in render.
    const id = `${text.length}-${notes.length}-${text.slice(0, 4)}`;
    setNotes([{ id, text }, ...notes]);
    setDraft("");
  }

  function removeNote(id: string) {
    setNotes(notes.filter((n) => n.id !== id));
  }

  return (
    <div className="space-y-4">
      <Card>
        <form onSubmit={addNote} className="flex items-end gap-2">
          <div className="flex-1">
            <Input
              id="note-input"
              label="New note"
              placeholder="Write something…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          </div>
          <Button type="submit">Add</Button>
        </form>
      </Card>

      {notes.length === 0 ? (
        <EmptyState message="No notes yet. Add your first one above." />
      ) : (
        <ul className="space-y-2">
          {notes.map((note) => (
            <li key={note.id}>
              <Card className="flex items-center justify-between">
                <span>{note.text}</span>
                <Button
                  variant="ghost"
                  onClick={() => removeNote(note.id)}
                  aria-label={`Delete note: ${note.text}`}
                >
                  Delete
                </Button>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
