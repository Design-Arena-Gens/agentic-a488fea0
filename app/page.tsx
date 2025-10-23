import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-24">
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <CTA />
    </div>
  );
}
