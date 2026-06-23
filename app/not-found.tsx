import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="paper-grain flex min-h-[60vh] items-center justify-center px-5 py-20">
        <div className="text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            Error 404
          </span>
          <h1 className="mt-3 font-display text-5xl font-black uppercase tracking-tight text-ink sm:text-6xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-xl bg-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-paper shadow-[3px_3px_0_0_var(--color-lime)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
            >
              Go home
            </Link>
            <Link
              href="/guides"
              className="rounded-xl border border-ink/20 px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink hover:bg-paper-2"
            >
              Browse guides
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
