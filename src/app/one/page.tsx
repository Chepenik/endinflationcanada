"use client";

import { useState } from "react";
import Link from "next/link";

export default function PamphletOne() {
  const pages = [
    // PAGE 1
    (
      <div className="flex flex-col items-center justify-between h-full py-10 text-center font-press">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold tracking-wider uppercase">
          YOU’RE BEING<br />STOLEN FROM
        </h1>

        <p className="text-slate-300 text-xs mt-10 max-w-xs">
          This resource contains instructions on how to stop yourself
          and others from being robbed by the fraud of inflation.
        </p>

        <p className="text-slate-400 text-[10px] mt-10">www.EndInflationCanada.com</p>

        <p className="text-slate-500 text-[10px] mt-8">P.1.1</p>
      </div>
    ),

    // PAGE 2
    (
      <div className="flex flex-col items-center justify-between h-full py-10 text-center font-press">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold uppercase tracking-wider">
          INFLATION IS A FRAUD<br />CAUSED BY BANKERS<br />INCREASING THE<br />CURRENCY SUPPLY
        </h1>

        <div className="flex flex-col gap-6 text-slate-300 text-xs max-w-xs mt-10">
          <p>If you or I counterfeit a $100 bill, it’s a crime.</p>
          <p>If the government counterfeits currency, they call it “inflation.”</p>
        </div>

        <p className="text-slate-500 text-[10px] mt-8">P.1.2</p>
      </div>
    ),

    // PAGE 3
    (
      <div className="flex flex-col items-center justify-between h-full py-10 text-center font-press">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold uppercase tracking-wider">
          INFLATION IS<br />THEFT
        </h1>

        <div className="flex flex-col gap-6 text-slate-300 text-xs max-w-xs mt-10">
          <p>It steals our time and makes life more expensive.</p>
          <p>It’s worse than you know.</p>
          <p>Sound money is the solution.</p>
        </div>

        <p className="text-slate-500 text-[10px] mt-8">P.1.3</p>
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
          className="text-xs border border-slate-600 px-3 py-1 rounded
                     hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          ← Back
        </Link>

        <span className="text-slate-400 text-[10px]">
          Pamphlet · P.{pageIndex + 1}
        </span>
      </header>

      {/* Page content */}
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-lg w-full">{pages[pageIndex]}</div>
      </section>

      {/* Navigation */}
      <footer className="w-full px-4 py-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-300">
        <button
          onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
          disabled={pageIndex === 0}
          className="px-3 py-1 border border-slate-600 rounded disabled:opacity-40 disabled:cursor-not-allowed
                     hover:border-[#F7931A] hover:text-[#F7931A] transition"
        >
          ← Previous
        </button>

        <span>
          Page {pageIndex + 1} of {pages.length}
        </span>

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
