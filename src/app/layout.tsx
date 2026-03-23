import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:4028';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '6D Cafe | Korean Cafe in Rodriguez, Rizal',
    template: '%s | 6D Cafe',
  },
  description:
    'Cozy Korean-inspired cafe in Rodriguez, Rizal. Authentic egg drop sandwiches, ramyeon, espresso drinks, and frappes. Open daily from 12:30 PM to midnight.',
  icons: {
    icon: [{ url: '/assets/images/favicon.ico', type: 'image/x-icon' }],
    shortcut: ['/assets/images/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-espresso antialiased">{children}</body>
    </html>
  );
}
