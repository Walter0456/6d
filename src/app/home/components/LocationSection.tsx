'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

const openingHours = [
  { day: 'Monday \u2013 Sunday', time: '12:30 PM \u2013 12:00 AM', note: 'Open Daily' },
];

const contactRows: { icon: ReactNode; label: string; value: string; link: string | null }[] = [
  {
    icon: (
      <svg
        width="18"
        height="18"
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
    ),
    label: 'Address',
    value: '681 Ipil Street, San Jose, Rodriguez (Montalban), Rizal, Philippines',
    link: 'https://maps.app.goo.gl/ctaGZhkdW6pmrYeLA',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Email',
    value: '6dcafeph@gmail.com',
    link: 'mailto:6dcafeph@gmail.com',
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Hours',
    value: 'Daily 12:30 PM \u2013 Midnight',
    link: null,
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    label: 'Services',
    value: 'Dine-in \u00B7 Takeout \u00B7 Delivery \u00B7 Drive-thru',
    link: null,
  },
];

export default function LocationSection() {
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
      id="location"
      ref={sectionRef}
      className="relative overflow-hidden bg-espresso px-5 py-20 sm:px-8 sm:py-28"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-80 w-80 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#C8A96E 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#C8A96E 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className={`reveal mb-14 text-center ${isVisible ? '' : 'hidden-init'}`}>
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold/60">
              Find Us
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>

          <h2 className="mb-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Come Visit Us
          </h2>

          <p className="mx-auto max-w-md text-base leading-relaxed text-white/50">
            Near Montalban Sports Center Gate. Street parking available. We&apos;ll be waiting with
            a warm cup.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          <div
            className={`reveal overflow-hidden rounded-sketch border border-white/10 shadow-warm-lg lg:col-span-3 ${
              isVisible ? '' : 'hidden-init'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8!2d121.1374!3d14.7436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8e8e8e8e8e8%3A0x0!2s681+Ipil+Street%2C+Rodriguez%2C+Rizal!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={'6D Cafe \uCE74\uD398 location map at 681 Ipil Street, Rodriguez, Rizal'}
              className="min-h-[320px] h-[300px] w-full sm:h-[400px] lg:h-full"
            />
          </div>

          <div
            className={`reveal flex flex-col gap-4 lg:col-span-2 ${isVisible ? '' : 'hidden-init'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex-1 rounded-sketch border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-gold">
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Opening Hours
              </h3>

              {openingHours.map((hours) => (
                <div
                  key={hours.day}
                  className="flex items-center justify-between border-b border-white/10 py-3 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-white/80">{hours.day}</p>
                    <p className="text-xs text-gold/60">{hours.note}</p>
                  </div>
                  <span className="text-sm font-semibold text-white">{hours.time}</span>
                </div>
              ))}

              <div className="mt-4 flex items-center gap-2">
                <span className="pulse-dot block h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-green-400">Open Now</span>
              </div>
            </div>

            <div className="flex-1 rounded-sketch border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-gold">
                Contact &amp; Info
              </h3>
              <div className="flex flex-col gap-4">
                {contactRows.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 text-gold/60">{item.icon}</div>
                    <div>
                      <p className="mb-0.5 text-[10px] uppercase tracking-widest text-white/40">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-relaxed text-white/80 transition-colors hover:text-gold"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm leading-relaxed text-white/80">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/ctaGZhkdW6pmrYeLA"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-sketch bg-gold px-6 py-4 text-sm font-bold text-espresso shadow-sketch transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
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
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Get Directions
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
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
