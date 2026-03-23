'use client';

import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const storyPoints = [
  {
    num: '01',
    title: 'Born in Rodriguez',
    desc: 'Founded in December 2021 right in the heart of Montalban, Rizal \u2014 a neighborhood cafe for the neighborhood.',
  },
  {
    num: '02',
    title: 'Korean Soul, Filipino Heart',
    desc: 'We blend authentic Korean cafe culture with the warmth and hospitality that Filipinos are known for.',
  },
  {
    num: '03',
    title: 'Open Until Midnight',
    desc: "We know late nights happen. That's why we stay open until midnight, every single day.",
  },
  {
    num: '04',
    title: 'A Community Hangout',
    desc: 'Over 16,800 fans and 1,300+ check-ins later \u2014 6D Cafe is where Rodriguez comes together.',
  },
];

function CoffeeDoodle() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-15"
    >
      <rect
        x="40"
        y="60"
        width="60"
        height="50"
        rx="4"
        stroke="#2C1A0E"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse cx="70" cy="60" rx="30" ry="8" stroke="#2C1A0E" strokeWidth="1.5" fill="none" />
      <path
        d="M100 75 Q120 75 120 87 Q120 99 100 95"
        stroke="#2C1A0E"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M55 50 Q58 42 55 35"
        stroke="#C8A96E"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 50 Q73 40 70 32"
        stroke="#C8A96E"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M85 50 Q88 42 85 35"
        stroke="#C8A96E"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 25 L16.5 20 L18 25 L23 26.5 L18 28 L16.5 33 L15 28 L10 26.5 Z"
        stroke="#C8A96E"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M118 30 L119 27 L120 30 L123 31 L120 32 L119 35 L118 32 L115 31 Z"
        stroke="#C8A96E"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      <circle cx="20" cy="100" r="6" stroke="#2C1A0E" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="20" cy="90" r="4" stroke="#2C1A0E" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="20" cy="110" r="4" stroke="#2C1A0E" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="12" cy="100" r="4" stroke="#2C1A0E" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="28" cy="100" r="4" stroke="#2C1A0E" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}

export default function BrandStorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="overflow-hidden bg-cream px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={`reveal group relative ${isVisible ? '' : 'hidden-init'}`}>
            <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-sketch bg-gold/20 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-sketch border-2 border-gold/30" />

            <div className="relative overflow-hidden rounded-sketch shadow-warm-lg">
              <AppImage
                src="/assets/images/landing/story-cafe-interior.jpg"
                alt="Cozy cafe interior with warm lighting, wooden furniture, and Korean-inspired decor"
                width={600}
                height={700}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-sketch border border-gold/20 bg-espresso/90 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">100% Recommended</p>
                    <p className="text-xs text-white/50">by our Rodriguez community</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 -top-8 hidden lg:block">
              <CoffeeDoodle />
            </div>
          </div>

          <div
            className={`reveal ${isVisible ? '' : 'hidden-init'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted">
                Our Story
              </span>
            </div>

            <h2 className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight text-espresso sm:text-5xl">
              A Little Cafe with a <span className="italic text-bark">Big Heart.</span>
            </h2>

            <p className="mb-10 text-base leading-relaxed text-muted">
              {
                '6D Cafe \uCE74\uD398 started as a small dream on Ipil Street in Rodriguez \u2014 a place where neighbors could gather, students could study, and everyone could enjoy a good cup of coffee without breaking the bank. Inspired by Korean cafe culture, we brought the cozy, aesthetic-driven coffee experience to Rizal.'
              }
            </p>

            <div className="stagger-children flex flex-col gap-4">
              {storyPoints.map((item, index) => (
                <div
                  key={item.num}
                  className={`reveal group flex items-start gap-4 rounded-sketch border border-espresso/8 bg-surface p-4 transition-all duration-300 hover:border-gold/50 hover:shadow-warm ${
                    isVisible ? '' : 'hidden-init'
                  }`}
                  style={{ transitionDelay: `${200 + 100 * index}ms` }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sketch border border-gold/20 bg-gold/15 transition-colors duration-300 group-hover:bg-gold">
                    <span className="font-display text-sm font-bold text-espresso">{item.num}</span>
                  </div>

                  <div>
                    <h3 className="mb-1 text-base font-semibold text-espresso">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
