


"use client"

import { PageHeader } from "@/components/ui";
import {announcements} from "@/lib/mock-data";

import type { Announcement} from "@/lib/types";
import { useLocalStorage } from "@/lib/useLocalStorage";



import { useState } from "react";


interface announcement {
  id: string;
  title: string;
  body: string;
  author: string;
}

export default function AnnouncementsFeedPage() {

  const [list] = useState<announcement[]>([
    { id: "1", title: "Code Merge", body: "Reminder to you all that we are meeting tonight to merge our branches and prep for the peer review. Please push your latest changes before the call.", author: "Shamimu" },
    { id: "2", title: "Update", body: "I have shared google slides for our presentation.Everyone needs to add one slide about your component by Friday night", author: "Achiro" }
  ]);

  const styles = {
    container: {
      padding: "24px",
      maxWidth: "42rem",
      margin: "0 auto",
    },
    feedWrapper: {
      marginTop: "32px",
      display: "flex",
      flexDirection: "column" as const,
      gap: "16px",
    },
    card: {
      padding: "16px",
      border: "1px solid #0a0b0c",
      borderRadius: "8px",
      backgroundColor: "#a50b15",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: "0 0 4px 0",
      color: "#050505",
    },
    author: {
      fontSize: "14px",
      color: "#dee1e7",
      margin: "0 0 8px 0",
    },
    body: {
      fontSize: "16px",
      color: "#e7ecf5",
      margin: "0",
      
    }}
  return (
    <div style={styles.container}>
      <PageHeader title="ANNOUNCEMENT" subtitle="What's new on the team." />
      
      <div className="mt-8 space-y-4">
        {list.map((post) => (
          <div key={post.id} style={styles.card}>
            <h3 style={styles.title}>{post.title}</h3>
            <p style={styles.author}>By {post.author}</p>
            <p style={styles.body}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}





















































































