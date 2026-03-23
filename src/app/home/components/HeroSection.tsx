'use client';

import { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

function SteamCupIllustration() {
  return (
    <svg
      width="80"
      height="100"
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60"
    >
      <path
        d="M15 30 Q20 20 25 30 Q30 40 35 30 Q40 20 45 30"
        stroke="#C8A96E"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 38 L70 38 L60 85 Q40 92 20 85 Z"
        stroke="#C8A96E"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M60 50 Q80 50 80 62 Q80 74 60 70"
        stroke="#C8A96E"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="40" cy="38" rx="30" ry="5" stroke="#C8A96E" strokeWidth="1.5" fill="none" />
      <path
        d="M25 55 Q30 60 35 55"
        stroke="#C8A96E"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

function LeafIllustration() {
  return (
    <svg
      width="60"
      height="70"
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-50"
    >
      <path
        d="M30 65 Q5 45 8 20 Q12 5 30 5 Q48 5 52 20 Q55 45 30 65Z"
        stroke="#E8D4A8"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M30 65 L30 5" stroke="#E8D4A8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <path
        d="M30 40 Q18 35 15 28"
        stroke="#E8D4A8"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M30 30 Q42 25 45 18"
        stroke="#E8D4A8"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function StarRowIllustration() {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[10, 35, 60, 85, 110].map((x, index) => (
        <g key={x} transform={`translate(${x}, ${index % 2 === 0 ? 15 : 30})`}>
          <path
            d="M0 -6 L1.5 -2 L6 -2 L2.5 1 L4 5.5 L0 3 L-4 5.5 L-2.5 1 L-6 -2 L-1.5 -2 Z"
            stroke="#C8A96E"
            strokeWidth="0.8"
            fill="none"
            opacity={0.4 + 0.1 * index}
          />
        </g>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end justify-start overflow-hidden"
      aria-label="Hero"
    >
      <div ref={backgroundRef} className="absolute inset-0 scale-110">
        <AppImage
          src="/assets/images/landing/hero-cafe.png"
          alt="Cozy Korean cafe interior with warm lighting, wooden tables, and coffee cups"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: '150px 150px',
        }}
      />

      <div className="absolute top-28 right-12 hidden lg:block float-anim">
        <SteamCupIllustration />
      </div>
      <div className="absolute top-40 right-36 hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <LeafIllustration />
      </div>
      <div className="absolute top-24 left-1/2 hidden -translate-x-1/2 md:block">
        <StarRowIllustration />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-espresso/40 px-4 py-2 backdrop-blur-sm">
          <span className="pulse-dot block h-2 w-2 rounded-full bg-gold" />
          <span className="kr-badge text-xs font-semibold uppercase tracking-widest text-gold">
            {'Now Open \u00B7 \uCE74\uD398 \u00B7 Rodriguez, Rizal'}
          </span>
        </div>

        <h1 className="mb-4 max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Where Every Sip Feels <span className="gold-shimmer italic">Like Home.</span>
        </h1>

        <p className="mb-8 max-w-xl text-lg font-light leading-relaxed text-white/70 sm:text-xl">
          {
            'Korean-inspired cafe serving egg drop sandwiches, authentic ramyeon, and hand-crafted espresso \u2014 open daily until midnight.'
          }
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#menu"
            className="group inline-flex items-center justify-center gap-2 rounded-sketch bg-gold px-7 py-4 text-sm font-bold text-espresso shadow-sketch transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 11l19-9-9 19-2-8-8-2z" />
            </svg>
            Explore Our Menu
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#location"
            className="inline-flex items-center justify-center gap-2 rounded-sketch border border-white/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            681 Ipil St, Rodriguez
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 animate-bounce md:flex">
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/40"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
