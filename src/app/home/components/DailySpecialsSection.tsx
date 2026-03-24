'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const specials = [
  {
    day: 'Mon – Wed',
    name: 'Morning Brew Deal',
    description:
      'Any espresso drink + egg drop sandwich combo at a special bundled price. Start your week right.',
    price: '₱149',
    originalPrice: '₱164',
    image: 'https://images.unsplash.com/photo-1675655093081-0d81aa060375',
    alt: 'Morning coffee and sandwich combo on a wooden table',
    accent: 'bg-gold/10 border-gold/30',
    tagColor: 'bg-gold text-espresso',
  },
  {
    day: 'Thu – Fri',
    name: 'Ramyeon Happy Hour',
    description:
      'Korean ramyeon with extra egg topping + any cold drink. Perfect for the end-of-week wind-down.',
    price: '₱129',
    originalPrice: '₱198',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_106de2260-1772205781259.png',
    alt: 'Spicy Korean ramyeon noodle soup in a red bowl',
    accent: 'bg-bark/5 border-bark/20',
    tagColor: 'bg-bark text-white',
  },
  {
    day: 'Sat – Sun',
    name: 'Weekend Bingsu Set',
    description:
      'Large bingsu shaved ice dessert paired with iced matcha or strawberry milk. Weekends only!',
    price: '₱179',
    originalPrice: '₱215',
    image: 'https://images.unsplash.com/photo-1705283748904-42332817bb3c',
    alt: 'Colorful bingsu shaved ice dessert with toppings in a bowl',
    accent: 'bg-latte/10 border-latte/30',
    tagColor: 'bg-latte text-white',
  },
];

// Hand-drawn frame SVG
function SketchFrame({ color = '#C8A96E' }: { color?: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 300 400"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8 Q6 6 10 6 L290 6 Q294 6 292 8 L292 392 Q294 394 290 394 L10 394 Q6 394 8 392 Z"
        stroke={color}
        strokeWidth="1.2"
        strokeDasharray="4 3"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );
}

export default function DailySpecialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="specials"
      ref={ref}
      className="py-20 sm:py-28 px-5 sm:px-8 bg-parchment relative overflow-hidden"
    >
      {/* Background doodle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L20 40 M0 20 L40 20' stroke='%232C1A0E' stroke-width='0.5'/%3E%3C/svg%3E\")",
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative coffee ring stain */}
      <div className="absolute top-10 right-20 w-24 h-24 rounded-full border-2 border-espresso/5 hidden lg:block" />
      <div className="absolute top-12 right-22 w-20 h-20 rounded-full border border-espresso/3 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 reveal ${visible ? '' : 'hidden-init'}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-muted">
              Daily Specials
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-espresso tracking-tight mb-3">
            This Week&#39;s Picks
          </h2>
          <p className="text-muted text-base max-w-md mx-auto leading-relaxed">
            Rotating deals curated just for you. Come back often - something new is always brewing.
          </p>
        </div>

        {/* Specials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {specials.map((special, i) => (
            <div
              key={special.name}
              className={`relative group bg-white border ${special.accent} rounded-sketch overflow-hidden hover:-translate-y-2 hover:shadow-warm-lg transition-all duration-500 reveal ${visible ? '' : 'hidden-init'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Sketch frame overlay */}
              <SketchFrame color="#C8A96E" />

              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <AppImage
                  src={special.image}
                  alt={special.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />

                {/* Day badge */}
                <div
                  className={`absolute top-3 left-3 ${special.tagColor} text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sketch shadow-sketch`}
                >
                  {special.day}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-espresso mb-2 leading-tight">
                  {special.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{special.description}</p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-espresso">
                      {special.price}
                    </span>
                    <span className="text-muted/50 text-sm line-through">
                      {special.originalPrice}
                    </span>
                  </div>
                  <button className="bg-espresso text-gold px-4 py-2 rounded-sketch text-xs font-bold shadow-sketch hover:bg-bark transition-colors duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
