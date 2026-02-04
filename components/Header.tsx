'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CTAButton } from './CTAButton';

interface Props { onBook: () => void; }

export function Header({ onBook }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition border-b ${
        scrolled ? 'border-black/5 bg-white/80' : 'border-transparent bg-white/60'
      }`}
    >
      <div className="container-tight flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-3 text-lg font-semibold text-charcoal">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal text-white">
            <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden>
              <path d="M8 32c12-8 20-8 32 0v6l-16 8-16-8z" fill="currentColor" opacity="0.9" />
              <path d="M24 20c6-6 14-8 26-4l-8 6c-4 2-9 6-12 12l-6-14z" fill="currentColor" opacity="0.6" />
              <rect x="30" y="34" width="14" height="10" rx="2" fill="currentColor" opacity="0.9" />
            </svg>
          </div>
          BrickBird
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal/80 md:flex">
          {['Services', 'Proof', 'Pricing', 'Process', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-charcoal">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton onClick={onBook}>Book a Call</CTAButton>
        </div>
        <button
          className="md:hidden rounded-full border border-charcoal/10 px-3 py-2 text-sm"
          onClick={onBook}
        >
          Book
        </button>
      </div>
    </header>
  );
}
