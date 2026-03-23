import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-5 py-10">
      <section className="w-full max-w-lg rounded-sketch border border-espresso/10 bg-surface p-8 text-center shadow-warm">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">404</p>
        <h1 className="mt-3 font-display text-4xl text-espresso">Page Not Found</h1>
        <p className="mt-4 text-sm text-muted">
          The page you were looking for moved or does not exist yet. Head back to the cafe homepage.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-sketch border border-espresso/20 bg-espresso px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-bark"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
