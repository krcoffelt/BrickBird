'use client';
import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" aria-modal>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-card">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="chip">Book a call</p>
            <h3 className="text-2xl font-semibold text-charcoal">{title}</h3>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="focus-ring rounded-full p-2 text-charcoal/60 hover:bg-sand"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
