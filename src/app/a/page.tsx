"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { src: "/P.A.1.PNG", alt: "Pamphlet B Page 1", label: "P.A.1" },
  { src: "/P.A.2.PNG", alt: "Pamphlet B Page 2", label: "P.A.2" },
  { src: "/P.A.3.PNG", alt: "Pamphlet B Page 3", label: "P.A.3" },
  { src: "/P.A.4.PNG", alt: "Pamphlet B Page 4", label: "P.A.4" },
  { src: "/P.A.5.PNG", alt: "Pamphlet B Page 5", label: "P.A.5" },
  { src: "/P.A.6.PNG", alt: "Pamphlet B Page 6", label: "P.A.6" },
];

export default function PamphletB() {
  const [pageIndex, setPageIndex] = useState(0);
  const current = pages[pageIndex];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Top Bar */}
      <header className="w-full px-4 py-3 border-b border-slate-800 flex justify-between items-center">
        <Link
          href="/"
          className="text-xs border border-slate-600 px-3 py-1 rounded
                     hover:border-[#F7931A] hover:text-[#F7931A] transition font-press"
        >
          ← Back
        </Link>

        <span className="text-slate-400 text-[10px] font-press">
          Plan B · {current.label} ({pageIndex + 1}/{pages.length})
        </span>
      </header>

      {/* Image Viewer – NO BORDER */}
      <section className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="relative w-full max-w-5xl h-[85vh] rounded-lg bg-black">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority={pageIndex === 0}
            className="object-contain p-2 md:p-4"
          />
        </div>
      </section>

      {/* Navigation */}
      <footer className="w-full px-4 py-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-300 font-press">

        <button
          onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
          disabled={pageIndex === 0}
          className="px-3 py-1 border border-slate-600 rounded disabled:opacity-40 disabled:cursor-not-allowed
                     hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          ← Previous
        </button>

        <span>Page {pageIndex + 1} of {pages.length}</span>

        <button
          onClick={() => setPageIndex(Math.min(pages.length - 1, pageIndex + 1))}
          disabled={pageIndex === pages.length - 1}
          className="px-3 py-1 border border-slate-600 rounded disabled:opacity-40 disabled:cursor-not-allowed
                     hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          Next →
        </button>

      </footer>

    </main>
  );
}
