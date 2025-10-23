import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="container py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-sm text-[var(--muted)]">
        <div>
          <div className="font-bold text-white">Aftab • SRE & DevOps</div>
          <p className="mt-2">Building scalable, reliable cloud infrastructure & automation.</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Navigation</div>
          <ul className="space-y-1">
            <li><Link href="#skills" className="hover:text-white">Skills</Link></li>
            <li><Link href="#projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="#testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Connect</div>
          <ul className="space-y-1">
            <li><a href="https://www.linkedin.com/in/aftab-sre-devops/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
            <li><a href="mailto:contact@aftab.dev" className="hover:text-white">contact@aftab.dev</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container py-6 text-xs text-[var(--muted)]">© {new Date().getFullYear()} Aftab. All rights reserved.</div>
      </div>
    </footer>
  );
}
