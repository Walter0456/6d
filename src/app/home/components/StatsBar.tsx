'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: '\u2764\uFE0F', value: '16,800+', label: 'Facebook Fans' },
  { icon: '\u{1F4CD}', value: '1,300+', label: 'Check-ins' },
  { icon: '\u2B50', value: '100%', label: 'Recommended' },
  { icon: '\u2615', value: '2021', label: 'Est. in Rizal' },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      ref={sectionRef}
      className="doodle-bg border-y border-white/5 bg-espresso px-5 py-10 sm:px-8"
      aria-label="Statistics"
    >
      <div className="mx-auto max-w-7xl">
        <div className="stagger-children grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal flex flex-col items-center gap-1.5 ${
                isVisible ? '' : 'hidden-init'
              }`}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <span className="text-2xl">{stat.icon}</span>
              <span className="font-display text-3xl font-semibold tracking-tight text-gold">
                {stat.value}
              </span>
              <span className="text-center text-xs uppercase tracking-widest text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
