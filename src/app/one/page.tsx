"use client";

import { useState } from "react";
import Link from "next/link";

export default function PamphletOne() {
  const pages = [
    // PAGE 1 — Cover
    (
      <div className="pamphlet-panel flex flex-col items-center h-full py-10 text-center font-press">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold tracking-wider uppercase leading-tight mb-8">
          YOU’RE BEING<br />STOLEN FROM
        </h1>

        <p className="text-slate-300 text-xs max-w-xs leading-relaxed">
          This resource contains instructions on how to stop yourself
          and others from being robbed by the fraud of inflation.
        </p>

        <div className="mt-auto flex flex-col items-center gap-2">
          <p className="text-slate-400 text-[10px]">
            www.EndInflationCanada.com
          </p>
          <p className="text-slate-500 text-[10px]">P.1.1</p>
        </div>
      </div>
    ),

    // PAGE 2 — First flap open
    (
      <div className="pamphlet-panel flex flex-col items-center h-full py-10 text-center font-press">

        {/* FIXED spacing, smaller top headline, tighter line-height */}
        <h1 className="text-red-600 text-2xl md:text-3xl font-bold uppercase tracking-wider leading-snug mb-8">
          INFLATION IS A FRAUD<br />
          CAUSED BY BANKERS<br />
          INCREASING THE<br />
          CURRENCY SUPPLY
        </h1>

        {/* FIXED: smaller gap + no huge margin */}
        <div className="flex flex-col gap-4 text-slate-300 text-xs max-w-xs leading-relaxed">
          <p>If you or I counterfeit a $100 bill, it’s a crime.</p>
          <p>If the government counterfeits currency, they call it “inflation.”</p>
        </div>

        <div className="mt-auto">
          <p className="text-slate-500 text-[10px]">P.1.2</p>
        </div>
      </div>
    ),

    // PAGE 3 — Fully opened
    (
      <div className="pamphlet-panel flex flex-col items-center h-full py-10 text-center font-press">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold uppercase tracking-wider leading-tight mb-8">
          INFLATION IS<br />THEFT
        </h1>

        <div className="flex flex-col gap-4 text-slate-300 text-xs max-w-xs leading-relaxed">
          <p>It steals our time and makes life more expensive.</p>
          <p>It’s worse than you know.</p>
          <p>Sound money is the solution.</p>
        </div>

        <div className="mt-auto">
          <p className="text-slate-500 text-[10px]">P.1.3</p>
        </div>
      </div>
    ),
  ];

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Top bar */}
      <header className="w-full px-4 py-3 border-b border-slate-800 flex justify-between items-center">
        <Link
          href="/"
          className="text-xs border border-slate-600 px-3 py-1 rounded hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          ← Back
        </Link>

        <span className="text-slate-400 text-[10px]">
          Pamphlet · P.{pageIndex + 1}
        </span>
      </header>

      {/* 3D pamphlet container */}
      <section className="flex-1 flex items-center justify-center px-6 perspective-1000">
        <div
          className="relative w-[320px] h-[480px] transform-style-preserve-3d transition-transform duration-700"
          style={{
            transform:
              pageIndex === 0
                ? "rotateY(0deg)"
                : pageIndex === 1
                ? "rotateY(-90deg)"
                : "rotateY(-180deg)",
          }}
        >
          {/* LEFT PANEL */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black border border-slate-800 backface-hidden"
            style={{ transform: "rotateY(0deg)" }}
          >
            {pages[0]}
          </div>

          {/* MIDDLE PANEL */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black border border-slate-800 backface-hidden"
            style={{ transform: "rotateY(90deg)" }}
          >
            {pages[1]}
          </div>

          {/* RIGHT PANEL */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-black border border-slate-800 backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            {pages[2]}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <footer className="w-full px-4 py-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-300">
        <button
          onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
          disabled={pageIndex === 0}
          className="px-3 py-1 border border-slate-600 rounded disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          ← Previous
        </button>

        <span>Page {pageIndex + 1} of 3</span>

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
