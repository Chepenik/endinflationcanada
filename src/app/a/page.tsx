"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const pages = [
  {
    src: "/P1.PNG.png",
    alt: "Pamphlet A – Page 1",
    label: "P.1",
  },
  {
    src: "/P2.PNG.png",
    alt: "Pamphlet A – Page 2",
    label: "P.2",
  },
  {
    src: "/P3.PNG.png",
    alt: "Pamphlet A – Page 3",
    label: "P.3",
  },
  {
    src: "/P4.PNG.png",
    alt: "Pamphlet A – Page 4",
    label: "P.4",
  },
];

export default function PamphletA() {
  const [pageIndex, setPageIndex] = useState(0);
  const current = pages[pageIndex];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Top bar */}
      <header className="w-full px-4 py-3 border-b border-slate-800 flex justify-between items-center">
        <Link
          href="/"
          className="text-xs border border-slate-600 px-3 py-1 rounded hover:border-[#F7931A] hover:text-[#F7931A] transition font-press"
        >
          ← Back
        </Link>

        <span className="text-slate-400 text-[10px] font-press">
          Plan A · {current.label} ({pageIndex + 1}/{pages.length})
        </span>
      </header>

      {/* Image viewer */}
      <section className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="relative w-full max-w-4xl aspect-[3/2] border border-slate-800 rounded-lg bg-black">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            priority={pageIndex === 0}
          />
        </div>
      </section>

      {/* Navigation */}
      <footer className="w-full px-4 py-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-300 font-press">
        <button
          onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
          disabled={pageIndex === 0}
          className="px-3 py-1 border border-slate-600 rounded disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          ← Previous
        </button>

        <span>
          Page {pageIndex + 1} of {pages.length}
        </span>

        <button
          onClick={() => setPageIndex(Math.min(pages.length - 1, pageIndex + 1))}
          disabled={pageIndex === pages.length - 1}
          className="px-3 py-1 border border-slate-600 rounded disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          Next →
        </button>
      </footer>
    </main>
  );
}
