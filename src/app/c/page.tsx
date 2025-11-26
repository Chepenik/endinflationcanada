"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// NEW E-PAMPHLET FILES
const pages = [
  { src: "/E1.PNG", alt: "E-Pamphlet Page 1", label: "E1" },
  { src: "/E2.PNG", alt: "E-Pamphlet Page 2", label: "E2" },
  { src: "/E3.PNG", alt: "E-Pamphlet Page 3", label: "E3" },
  { src: "/E4.PNG", alt: "E-Pamphlet Page 4", label: "E4" },
  { src: "/E5.PNG", alt: "E-Pamphlet Page 5", label: "E5" },
  { src: "/E6.PNG", alt: "E-Pamphlet Page 6", label: "E6" },
  { src: "/E7.PNG", alt: "E-Pamphlet Page 7", label: "E7" },
];

export default function PamphletE() {
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
          E-Pamphlet · {current.label} ({pageIndex + 1}/{pages.length})
        </span>
      </header>

      {/* Image Viewer – Full Size */}
      <section className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="relative w-full max-w-5xl h-[85vh] bg-black">
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
