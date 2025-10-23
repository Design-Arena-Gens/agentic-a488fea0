"use client";
import Link from 'next/link';
import { useState } from 'react';
import { clsx } from 'clsx';

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/75 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/60 border-b border-white/5">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-extrabold text-lg sm:text-xl tracking-tight">
          <span className="text-tealAccent">Aftab</span>
          <span className="text-white"> DevOps</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--fg)]/90">
          <Link href="#skills" className="hover:text-white">Skills</Link>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#testimonials" className="hover:text-white">Testimonials</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
          <a href="/Aftab_Resume.pdf" className="btn-secondary">Download CV</a>
        </nav>
        <button aria-label="Menu" className="md:hidden text-white/90" onClick={() => setOpen(v => !v)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="container py-4 flex flex-col gap-3 text-[var(--fg)]/90">
            <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
            <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="#testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
            <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
            <a href="/Aftab_Resume.pdf" className="btn-secondary w-max" onClick={() => setOpen(false)}>Download CV</a>
          </div>
        </div>
      )}
    </header>
  );
}
