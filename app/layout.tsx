import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Always Found — Build trust. Get seen.',
  description: 'Ongoing upkeep for your website, Google Business Profile, and reviews—so you stay current and get chosen.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-charcoal antialiased">{children}</body>
    </html>
  );
}
