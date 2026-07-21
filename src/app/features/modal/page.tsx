"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui";
import { Modal } from "@/components/Modal";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <PageHeader
        title="Accessible Modal"
        subtitle="A focus-trapping dialog."
      />

      <div className="p-6">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          aria-haspopup="dialog"
        >
          Open Modal
        </button>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Action"
        >
          <p className="mb-6">
            This is an accessible modal dialog. It traps focus, supports Escape
            to close, and returns focus to the trigger button.
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            >
              Confirm
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}