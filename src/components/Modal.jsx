"use client";

import { useEffect, useRef, useCallback } from "react";

export function Modal({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const handleBackdropClick = useCallback((e) => {
    const dialog = dialogRef.current;
    if (dialog && e.target === dialog) {
      dialog.close();
    }
  }, []);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="rounded-lg p-0 shadow-2xl w-full max-w-md bg-[#1A1A1A] text-white border border-gray-700"
      aria-labelledby="modal-title"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-xl font-semibold">
            {title}
          </h2>
          <button
            onClick={() => dialogRef.current?.close()}
            className="text-gray-400 hover:text-white transition-colors text-lg"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>
        <div className="text-gray-300">{children}</div>
      </div>
    </dialog>
  );
}