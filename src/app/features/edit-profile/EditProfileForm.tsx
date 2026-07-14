"use client";

import { useState, type FormEvent } from "react";
import { Card, Button, Input } from "@/components/ui";
import { members } from "@/lib/mock-data";

interface FormErrors {
  name?: string;
  email?: string;
}

export function EditProfileForm() {
  const member = members[0];

  const [name, setName] = useState(member.name);
  const [role, setRole] = useState(member.role);
  const [email, setEmail] = useState(member.email);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = "Name is required";
    }

    if (!email.includes("@")) {
      nextErrors.email = "Email must contain @";
    }

    return nextErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(false);

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />

          <Input
            id="role"
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <Input
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Button type="submit">Save Profile</Button>
        </form>
      </Card>

      {success && (
        <Card>
          <h3 className="font-semibold mb-2">Profile Updated</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Role:</strong> {role}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </Card>
      )}
    </div>
  );
}
