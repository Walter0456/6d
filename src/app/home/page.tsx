import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import MenuSection from './components/MenuSection';
import DailySpecialsSection from './components/DailySpecialsSection';
import BrandStorySection from './components/BrandStorySection';
import LocationSection from './components/LocationSection';

export const metadata: Metadata = {
  title: '6D Cafe | Korean Cafe in Rodriguez, Rizal',
  description:
    'Cozy Korean-inspired cafe in Rodriguez, Rizal. Authentic egg drop sandwiches, ramyeon, espresso drinks, and frappes. Open daily from 12:30 PM to midnight.',
  openGraph: {
    title: '6D Cafe | Korean Cafe',
    description: 'Authentic Korean cafe experience in Rodriguez, Rizal.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-cream">
      <Header />
      <HeroSection />
      <StatsBar />
      <MenuSection />
      <DailySpecialsSection />
      <BrandStorySection />
      <LocationSection />
    </main>
  );
}
