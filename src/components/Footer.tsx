import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-[#2a140a] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl text-gold-light">6D Cafe</p>
          <p className="mt-1 uppercase tracking-[0.12em] text-white/60">
            Ipil St, Rodriguez, Rizal
          </p>
          <p className="mt-2 text-white/55">
            Open daily 12:30 PM - Midnight. We brew for night owls too.
          </p>
        </div>

        <div className="flex items-center gap-5 uppercase tracking-[0.14em] text-white/70">
          <Link href="#menu" className="hover:text-gold-light">
            Menu
          </Link>
          <Link href="#specials" className="hover:text-gold-light">
            Daily Specials
          </Link>
          <Link href="#story" className="hover:text-gold-light">
            Our Story
          </Link>
          <Link href="#location" className="hover:text-gold-light">
            Contact
          </Link>
        </div>

        <div className="text-right text-white/45">
          <p>{new Date().getFullYear()} 6D Cafe. All rights reserved.</p>
          <p className="mt-1">Privacy • Terms</p>
        </div>
      </div>
    </footer>
  );
}
