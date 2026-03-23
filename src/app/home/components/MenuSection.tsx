'use client';

import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const filters = ['All', 'Coffee', 'Drinks', 'Food', 'Desserts'];

const menuItems = [
  {
    id: 1,
    name: 'Korean Egg Drop Sandwich',
    category: 'Food',
    price: '\u20B189',
    description:
      'Fluffy scrambled egg, mayo, and fresh veggies on toasted brioche \u2014 our signature item.',
    tag: 'Bestseller',
    image: '/assets/images/landing/menu-egg-drop.png',
    alt: 'Korean egg drop sandwich with fluffy scrambled eggs on toasted brioche',
    span: 'col-span-1 md:col-span-2',
    height: 'h-56 md:h-72',
  },
  {
    id: 2,
    name: 'Espresso Latte',
    category: 'Coffee',
    price: '\u20B175',
    description: 'Double shot espresso with velvety steamed milk and latte art.',
    tag: 'Classic',
    image: '/assets/images/landing/menu-espresso-latte.png',
    alt: 'Espresso latte with latte art in a ceramic cup',
    span: 'col-span-1',
    height: 'h-56 md:h-72',
  },
  {
    id: 3,
    name: 'Korean Ramyeon',
    category: 'Food',
    price: '\u20B199',
    description: 'Spicy instant noodles Korean-style, topped with egg, seaweed, and green onion.',
    tag: 'Hot Pick',
    image: '/assets/images/landing/menu-korean-ramyeon.jpg',
    alt: 'Spicy Korean ramyeon noodles topped with egg and seaweed in a bowl',
    span: 'col-span-1',
    height: 'h-56',
  },
  {
    id: 4,
    name: 'Matcha Frappe',
    category: 'Drinks',
    price: '\u20B195',
    description: 'Blended premium matcha with milk and cream \u2014 earthy, sweet, and refreshing.',
    tag: 'Fan Fave',
    image: '/assets/images/landing/menu-matcha-frappe.jpg',
    alt: 'Matcha frappe topped with whipped cream in a tall glass',
    span: 'col-span-1',
    height: 'h-56',
  },
  {
    id: 5,
    name: 'Caramel Macchiato',
    category: 'Coffee',
    price: '\u20B185',
    description: 'Espresso layered over vanilla milk with rich caramel drizzle.',
    tag: null,
    image: '/assets/images/landing/menu-caramel-macchiato.png',
    alt: 'Caramel macchiato with caramel drizzle in a glass cup',
    span: 'col-span-1 md:col-span-2',
    height: 'h-56',
  },
  {
    id: 6,
    name: 'Bingsu Shaved Ice',
    category: 'Desserts',
    price: '\u20B1120',
    description: 'Korean shaved ice dessert with sweet red bean, mochi, and condensed milk.',
    tag: 'Summer Special',
    image: '/assets/images/landing/menu-bingsu.png',
    alt: 'Korean bingsu shaved ice dessert topped with red bean and mochi',
    span: 'col-span-1',
    height: 'h-56',
  },
];

function ArrowDoodle() {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-30"
    >
      <path
        d="M5 20 Q20 5 35 20 Q50 35 55 20"
        stroke="#2C1A0E"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 14 L55 20 L48 24"
        stroke="#2C1A0E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filteredItems =
    activeFilter === 'All' ? menuItems : menuItems.filter((item) => item.category === activeFilter);

  return (
    <section id="menu" ref={sectionRef} className="doodle-bg bg-cream px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div
          className={`reveal mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
            isVisible ? '' : 'hidden-init'
          }`}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted">
                Our Menu
              </span>
              <ArrowDoodle />
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
              Crafted with <span className="italic text-bark"> Love.</span>
            </h2>
            <p className="mt-2 max-w-sm text-base leading-relaxed text-muted">
              Korean flavors, Filipino heart. Every item made fresh daily.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 rounded-sketch border border-espresso/10 bg-parchment p-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-sketch px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-espresso text-gold shadow-sketch'
                    : 'text-muted hover:bg-espresso/5 hover:text-espresso'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`${item.span} menu-card group relative overflow-hidden rounded-sketch border border-espresso/10 bg-white sketch-border reveal ${
                isVisible ? '' : 'hidden-init'
              }`}
              style={{ transitionDelay: `${80 * index}ms` }}
            >
              <div className={`${item.height} relative overflow-hidden`}>
                <AppImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {item.tag ? (
                  <div className="absolute left-3 top-3 rounded-sketch bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-espresso shadow-sketch">
                    {item.tag}
                  </div>
                ) : null}
                <div className="absolute right-3 top-3 rounded-sketch bg-espresso/80 px-3 py-1 text-sm font-bold text-gold backdrop-blur-sm">
                  {item.price}
                </div>
              </div>

              <div className="p-5">
                <h3 className="mb-1.5 font-display text-lg font-semibold leading-tight text-espresso">
                  {item.name}
                </h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted/60">
                    {item.category}
                  </span>
                  <button
                    type="button"
                    className="group/btn flex h-8 w-8 items-center justify-center rounded-full border border-espresso/10 bg-parchment text-espresso transition-all duration-200 hover:border-gold hover:bg-gold hover:text-white"
                    aria-label={`Add ${item.name}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`reveal mt-10 text-center ${isVisible ? '' : 'hidden-init'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href="https://6dcafe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-bark transition-colors hover:text-espresso"
          >
            View Full Menu
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
    </section>
  );
}
