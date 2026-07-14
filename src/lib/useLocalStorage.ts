"use client";

import { useEffect, useRef, useState } from "react";

// Shared hook: state that persists to localStorage under `key`.
// Many features need to "save" data — reuse this instead of writing your own.
//
//   const [notes, setNotes] = useLocalStorage<string[]>("my-notes", []);
//
// It behaves like useState but survives page reloads.
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  // Tracks whether we've done the initial read, so the write effect below
  // doesn't clobber stored data on the very first render.
  const hydrated = useRef(false);

  // Read the persisted value once, on mount (localStorage is browser-only).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      // Syncing state FROM an external store (localStorage) on mount is a valid
      // use of setState-in-effect, so we opt out of the lint rule here.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {
      // ignore malformed values
    }
  }, [key]);

  // Persist on change — but skip the first run so we don't overwrite storage
  // before the read above has had a chance to load it.
  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota / serialization errors
    }
  }, [key, value]);

  return [value, setValue] as const;
}
