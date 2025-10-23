import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-a488fea0.vercel.app'),
  title: {
    default: 'Aftab • SRE & DevOps Engineer',
    template: '%s • Aftab | SRE & DevOps'
  },
  description: 'SRE & DevOps engineer building scalable, reliable cloud infrastructure and automation.',
  openGraph: {
    title: 'Aftab • SRE & DevOps Engineer',
    description: 'SRE & DevOps engineer building scalable, reliable cloud infrastructure and automation.',
    url: 'https://agentic-a488fea0.vercel.app',
    siteName: 'Aftab DevOps',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Aftab — SRE & DevOps'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aftab • SRE & DevOps Engineer',
    description: 'SRE & DevOps engineer building scalable, reliable cloud infrastructure and automation.',
    images: ['/og.png']
  },
  alternates: {
    canonical: 'https://agentic-a488fea0.vercel.app'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="container py-10 sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
