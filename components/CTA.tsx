"use client";
import Link from 'next/link';
import { useState } from 'react';

export function CTA() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      setStatus('submitting');
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch (e) {
      setStatus('error');
    }
  }
  return (
    <section id="contact" className="space-y-6">
      <h2 className="section-title">Let’s work together</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <p className="text-[var(--muted)]">Have a project in mind or need help with reliability, cloud, or automation? I’d love to hear from you.</p>
          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <input required name="name" placeholder="Your name" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none" />
            <input required type="email" name="email" placeholder="Your email" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none" />
            <textarea required name="message" placeholder="Your message" rows={4} className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none" />
            <button type="submit" disabled={status==='submitting'} className="btn-primary w-max">
              {status==='submitting' ? 'Sending…' : 'Send Message'}
            </button>
            {status==='success' && <div className="text-tealAccent text-sm">Message sent! Thanks — I will get back soon.</div>}
            {status==='error' && <div className="text-red-300 text-sm">Something went wrong. Please try again.</div>}
          </form>
        </div>
        <div className="card p-5 space-y-3">
          <div className="text-white font-semibold">Other ways to connect</div>
          <ul className="text-[var(--muted)]">
            <li><a href="mailto:contact@aftab.dev" className="hover:text-white">contact@aftab.dev</a></li>
            <li><a href="https://www.linkedin.com/in/aftab-sre-devops/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
          </ul>
          <a href="/Aftab_Resume.pdf" className="btn-secondary inline-flex w-max">Download CV</a>
        </div>
      </div>
    </section>
  );
}
