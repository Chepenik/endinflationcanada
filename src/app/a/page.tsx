"use client";

import Link from "next/link";

export default function PamphletBComingSoon() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-black via-[#050814] to-black text-white flex flex-col">
      {/* Top Bar */}
      <header className="w-full px-4 py-3 border-b border-slate-800 flex justify-between items-center">
        <Link
          href="/"
          className="text-xs border border-slate-600 px-3 py-1 rounded hover:border-[#F7931A] hover:text-[#F7931A] transition font-press"
        >
          ← Back
        </Link>

        <span className="text-[10px] text-slate-400 font-press tracking-[0.18em] uppercase">
          Plan B · Pamphlet A
        </span>
      </header>

      {/* Center Content */}
      <section className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b0a22] via-[#050814] to-[#0b1024] shadow-[0_0_60px_rgba(247,147,26,0.25)] px-8 py-10 text-center">
          <p className="font-press text-[11px] tracking-[0.28em] uppercase text-slate-300">
            Canadian Orange Party
          </p>

          <h1 className="mt-4 font-press text-2xl sm:text-3xl md:text-4xl tracking-[0.08em] text-white">
            Plan A Pamphlet · Coming Soon
          </h1>

          <p className="mt-5 text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            We&apos;re polishing the first official{" "}
            <span className="text-[#F7931A] font-press tracking-[0.14em]">
              Canadian Orange Party
            </span>{" "}
            pamphlet. It will break down inflation, Bitcoin, and how everyday
            Canadians can opt out of the fiat clown show.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 text-[11px] text-slate-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#F7931A] animate-pulse" />
              <span className="font-press tracking-[0.18em] uppercase">
                In layout &amp; review
              </span>
            </div>

            <p className="max-w-sm">
              Check back soon or head to the hub to see everything else we&apos;re
              building for orange-pilled Canadians.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://www.canadianorangeparty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-press tracking-[0.12em] text-xs sm:text-sm rounded-full border border-[#F7931A]/70 bg-[#F7931A]/10 px-6 py-3 hover:bg-[#F7931A]/20 transition"
            >
              Visit the Canadian Orange Party Hub
            </Link>

            <Link
              href="/"
              className="font-press tracking-[0.12em] text-xs sm:text-sm rounded-full border border-white/15 px-6 py-3 hover:bg-white/5 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom border to frame the page */}
      <footer className="w-full h-4 bg-gradient-to-r from-transparent via-[#F7931A]/40 to-transparent blur-[2px]" />
    </main>
  );
}
