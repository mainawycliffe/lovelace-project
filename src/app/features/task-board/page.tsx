"use client";

import React, { useState } from "react";
import { PageHeader, Card, Button, Input } from "@/components/ui";
import { useLocalStorage } from "@/lib/useLocalStorage";

type TaskStatus = "todo" | "doing" | "done";

type BackgroundTheme =
  | "default"
  | "graphite"
  | "amber"
  | "indigo"
  | "emerald"
  | "ruby"
  | "rose"
  | "purple"
  | "fuchsia"
  | "violet"
  | "sky"
  | "cyan"
  | "teal"
  | "lime"
  | "slate";

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
  theme: BackgroundTheme;
  linkUrl?: string;
}

interface ColumnConfig {
  id: TaskStatus;
  label: string;
  indicatorColor: string;
}

const COLUMNS: ColumnConfig[] = [
  { id: "todo", label: "To Do", indicatorColor: "#ef4444" },
  { id: "doing", label: "Doing", indicatorColor: "#3b82f6" },
  { id: "done", label: "Done", indicatorColor: "#22c55e" },
];

const THEMES: {
  id: BackgroundTheme;
  label: string;
  bg: string;
  border: string;
}[] = [
  { id: "default", label: "Default", bg: "#18181b", border: "#27272a" },
  { id: "graphite", label: "Graphite", bg: "#2d2d30", border: "#3f3f46" },
  { id: "amber", label: "Amber", bg: "#2d2212", border: "#78350f" },
  { id: "indigo", label: "Indigo", bg: "#15162c", border: "#1e1b4b" },
  { id: "emerald", label: "Emerald", bg: "#0d2417", border: "#064e3b" },
  { id: "ruby", label: "Ruby", bg: "#2d1515", border: "#7f1d1d" },
  { id: "rose", label: "Rose", bg: "#2e121b", border: "#881337" },
  { id: "purple", label: "Purple", bg: "#221434", border: "#581c87" },
  { id: "fuchsia", label: "Fuchsia", bg: "#2b102f", border: "#701a75" },
  { id: "violet", label: "Violet", bg: "#1b132e", border: "#4c1d95" },
  { id: "sky", label: "Sky", bg: "#0c2332", border: "#0369a1" },
  { id: "cyan", label: "Cyan", bg: "#082529", border: "#0e7490" },
  { id: "teal", label: "Teal", bg: "#062421", border: "#0f766e" },
  { id: "lime", label: "Lime", bg: "#1a230c", border: "#4d7c0f" },
  { id: "slate", label: "Slate", bg: "#1e293b", border: "#334155" },
];

export default function TaskBoardPage() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("team-tasks", []);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskTheme, setTaskTheme] = useState<BackgroundTheme>("default");
  const [taskLink, setTaskLink] = useState("");

  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editTheme, setEditTheme] = useState<BackgroundTheme>("default");
  const [editLink, setEditLink] = useState("");

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const formattedLink = taskLink.trim()
      ? taskLink.startsWith("http")
        ? taskLink.trim()
        : `https://${taskLink.trim()}`
      : undefined;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle.trim(),
      status: "todo",
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      theme: taskTheme,
      linkUrl: formattedLink,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskTheme("default");
    setTaskLink("");
  };

  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
    setEditTheme(task.theme);
    setEditLink(task.linkUrl || "");
  };

  const handleSaveEdit = (id: string) => {
    if (!editTitle.trim()) return;

    const formattedLink = editLink.trim()
      ? editLink.startsWith("http")
        ? editLink.trim()
        : `https://${editLink.trim()}`
      : undefined;

    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          title: editTitle.trim(),
          theme: editTheme,
          linkUrl: formattedLink,
        };
      }
      return t;
    });

    setTasks(updatedTasks);
    setEditingTaskId(null);
  };

  const moveTask = (id: string, direction: "forward" | "backward") => {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== id) return task;

      let newStatus = task.status;
      if (task.status === "todo" && direction === "forward")
        newStatus = "doing";
      else if (task.status === "doing" && direction === "forward")
        newStatus = "done";
      else if (task.status === "doing" && direction === "backward")
        newStatus = "todo";
      else if (task.status === "done" && direction === "backward")
        newStatus = "doing";

      return { ...task, status: newStatus };
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <PageHeader title="Task Board" subtitle="Track your work effortlessly." />

      <form onSubmit={handleAddTask} style={{ display: "flex", gap: "10px", margin: "20px 0", flexWrap: "wrap", background: "#18181b", padding: "16px", borderRadius: "8px", border: "1px solid #27272a" }}>
        <div style={{ flex: "1 1 100%", display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <Input
              type="text"
              placeholder="New task title..."
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <Button type="submit">Add Task</Button>
        </div>
        
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", width: "100%", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "11px", color: "#a1a1aa" }}>Task Theme</span>
            <select
              value={taskTheme}
              onChange={(e) => setTaskTheme(e.target.value as BackgroundTheme)}
              style={{ background: "#09090b", color: "#f4f4f5", border: "1px solid #27272a", borderRadius: "6px", padding: "6px 12px", fontSize: "13px", height: "36px" }}
            >
              {THEMES.map((theme) => (
                <option key={theme.id} value={theme.id}>{theme.label}</option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: "150px" }}>
            <span style={{ fontSize: "11px", color: "#a1a1aa" }}>Attachment URL (Optional)</span>
            <Input
              type="text"
              placeholder="e.g. google.com"
              value={taskLink}
              onChange={(e) => setTaskLink(e.target.value)}
            />
          </div>
        </div>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {COLUMNS.map((col) => {
          const columnTasks = tasks.filter((t) => t.status === col.id);
          return (
            <div key={col.id} style={{ border: "1px solid #27272a", padding: "15px", borderRadius: "8px", background: "#09090b" }}>
              
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: col.indicatorColor }} />
                  <h3 style={{ color: "#f4f4f5", fontWeight: "600", margin: 0 }}>{col.label}</h3>
                </div>
                <span style={{ fontSize: "12px", color: "#a1a1aa", background: "#18181b", padding: "2px 8px", borderRadius: "10px" }}>
                  {columnTasks.length}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {columnTasks.map((task) => {
                  const activeTheme = THEMES.find((t) => t.id === task.theme) || THEMES[0];
                  const isEditing = editingTaskId === task.id;
                  
                  return (
                    <div 
                      key={task.id} 
                      style={{ 
                        padding: "12px", 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "10px", 
                        background: activeTheme.bg, 
                        borderRadius: "8px", 
                        border: `1px solid ${activeTheme.border}` 
                      }}
                    >
                      <Card>
                        {isEditing ? (
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <Input
                              type="text"
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                            />
                            
                            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span style={{ fontSize: "11px", color: "#a1a1aa" }}>Task Theme</span>
                              <select
                                value={editTheme}
                                onChange={(e) => setEditTheme(e.target.value as BackgroundTheme)}
                                style={{ background: "#09090b", color: "#f4f4f5", border: "1px solid #27272a", borderRadius: "6px", padding: "6px", fontSize: "12px", width: "100%" }}
                              >
                                {THEMES.map((theme) => (
                                  <option key={theme.id} value={theme.id}>{theme.label}</option>
                                ))}
                              </select>
                            </div>

                            <Input
                              type="text"
                              placeholder="Edit link..."
                              value={editLink}
                              onChange={(e) => setEditLink(e.target.value)}
                            />

                            <div style={{ display: "flex", gap: "6px", justifyContent: "end" }}>
                              <Button variant="secondary" onClick={() => setEditingTaskId(null)}>Cancel</Button>
                              <Button onClick={() => handleSaveEdit(task.id)}>Save</Button>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <p style={{ color: "#f4f4f5", fontSize: "14px", fontWeight: "500", margin: 0, wordBreak: "break-all" }}>
                              {task.title}
                            </p>

                            {task.linkUrl && (
                              <a 
                                href={task.linkUrl} 
                                target="_blank" 
                                rel="noreferrer" 
                                style={{ fontSize: "12px", color: "#6366f1", textDecoration: "underline", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", display: "block" }}
                              >
                                🔗 {task.linkUrl}
                              </a>
                            )}
                            
                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "4px" }}>
                              <span style={{ fontSize: "11px", color: "#71717a" }}>{task.createdAt}</span>
                            </div>
                          </div>
                        )}

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "8px", marginTop: "8px" }}>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <button
                              type="button"
                              onClick={() => deleteTask(task.id)}
                              style={{ background: "none", border: "none", color: "#f87171", fontSize: "12px", cursor: "pointer" }}
                            >
                              Delete
                            </button>
                            {!isEditing && (
                              <button
                                type="button"
                                onClick={() => startEditing(task)}
                                style={{ background: "none", border: "none", color: "#a1a1aa", fontSize: "12px", cursor: "pointer" }}
                              >
                                Edit
                              </button>
                            )}
                          </div>
                          
                          <div style={{ display: "flex", gap: "5px" }}>
                            {task.status !== "todo" && (
                              <Button 
                                onClick={() => moveTask(task.id, "backward")}
                                style={{ background: "#27272a", color: "#ffffff", border: "1px solid #3f3f46", fontSize: "10px", padding: "0 10px" }}
                              >
                                ◀
                              </Button>
                            )}
                            {task.status !== "done" && (
                              <Button 
                                onClick={() => moveTask(task.id, "forward")}
                                style={{ background: "#27272a", color: "#ffffff", border: "1px solid #3f3f46", fontSize: "10px", padding: "0 10px" }}
                              >
                                ▶
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
                {columnTasks.length === 0 && (
                  <p style={{ textAlign: "center", color: "#52525b", fontSize: "12px", margin: "20px 0" }}>No tasks</p>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
