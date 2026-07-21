// import { PageHeader } from "@/components/ui";
// import { FeatureStub } from "@/components/FeatureStub";

// // Issue #10: Give Kudos
// // TODO: build this feature, then delete <FeatureStub /> below.
// // See ISSUES.md for the full spec, and src/app/features/example-notes for the pattern.
// export default function GiveKudosPage() {
//   return (
//     <div>
//       <PageHeader title="Give Kudos" subtitle="Recognise a teammate." />
//       <FeatureStub slug="give-kudos" />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui";
import { members } from "@/lib/mock-data";
import { useLocalStorage } from "@/lib/useLocalStorage";

export default function GiveKudosPage() {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const [kudosList, setKudosList] = useLocalStorage("kudos_list", []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!recipient) {
      setError("Please pick a teammate.");
      return;
    }
    if (message.trim() === "") {
      setError("Message cannot be empty.");
      return;
    }

    const newKudos = {
      id: (kudosList.length + 1).toString(), 
      recipient: recipient,
      message: message.trim(),
    };

    
    setKudosList([newKudos, ...kudosList]);

    setRecipient("");
    setMessage("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <PageHeader title="Give Kudos" subtitle="Recognise a teammate." />

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
        {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Recipient:</label>
          <select 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">-- Choose a teammate --</option>
            {}
            {members.map((member) => {
              const name = member.name || member;
              const id = member.id || name;
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a nice message..."
            style={{ width: "100%", padding: "8px", minHeight: "80px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px", background: "pink", color: "black", cursor: "pointer" }}>
          Submit Kudos
        </button>
      </form>

      <div style={{ marginTop: "40px" }}>
        <h3>Kudos Board</h3>
        
        {kudosList.length === 0 ? (
          <p>No kudos sent yet!</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {kudosList.map((item) => (
              <li key={item.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
                <strong>To: {item.recipient}</strong>
                <p style={{ margin: "5px 0 0 0" }}>{item.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


