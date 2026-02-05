'use client';
import { CSSProperties } from 'react';
import { useReveal } from '../lib/useReveal';

export function Reveal({
  children,
  className = '',
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style: CSSProperties = delayMs ? { animationDelay: `${delayMs}ms` } : {};
  return (
    <div ref={ref} className={`reveal ${className}`} data-visible={visible} style={style}>
      {children}
    </div>
  );
}
