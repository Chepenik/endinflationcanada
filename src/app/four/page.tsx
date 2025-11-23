"use client";

import { useState } from "react";
import Link from "next/link";

export default function PageFour() {
  const pages = [
    // P.4.1 — Protect yourself
    (
      <div className="flex flex-col items-center justify-between h-full py-10 text-center font-press">
        <h2 className="text-[#F7931A] text-lg mb-6">Protect yourself</h2>

        <div className="flex flex-col items-center gap-8 mt-4">
          {/* Study money */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#F7931A] text-xs">Study money</p>
            <div className="w-32 h-32 bg-white text-black flex items-center justify-center text-[10px] rounded">
              QR CODE
            </div>
          </div>

          {/* Avoid Crypto */}
          <Link
            href="https://www.canadianorangeparty.com/"
            target="_blank"
            className="w-full max-w-xs bg-red-600 text-white py-3 text-sm rounded flex items-center justify-center 
                       hover:bg-red-500 transition"
          >
            🚫 Avoid Crypto
          </Link>

          {/* Save in Bitcoin */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#F7931A] text-xs">Save in Bitcoin</p>
            <div className="w-32 h-32 bg-white text-black flex items-center justify-center text-[10px] rounded">
              QR CODE
            </div>
          </div>
        </div>

        <p className="text-slate-500 text-[10px] mt-8">P.4.1</p>
      </div>
    ),

    // P.4.2 — Protect others
    (
      <div className="flex flex-col items-center justify-center h-full py-10 text-center font-press gap-8">
        <h2 className="text-[#F7931A] text-lg">Protect others</h2>

        <Link
          href="https://www.canadianorangeparty.com/"
          target="_blank"
          className="text-blue-400 underline text-xs hover:text-blue-300"
        >
          Share this resource
        </Link>

        <Link
          href="https://www.canadianorangeparty.com/"
          target="_blank"
          className="text-blue-400 underline text-xs hover:text-blue-300"
        >
          Email your politician
        </Link>

        <p className="text-slate-500 text-[10px] mt-8">P.4.2</p>
      </div>
    ),

    // P.4.3 — Sponsors
    (
      <div className="flex flex-col items-center justify-between h-full py-10 text-center font-press">
        <h2 className="text-gray-300 text-lg tracking-wide mb-6">Sponsors</h2>

        <ul className="flex flex-col gap-4 text-gray-400 text-sm mt-4">
          <li>SPONSOR 1</li>
          <li>SPONSOR 2</li>
          <li>SPONSOR 3</li>
          <li>SPONSOR 4</li>
        </ul>

        <div className="flex flex-col items-center gap-1 mt-8">
          <p className="text-slate-400 text-[10px]">Created by</p>
          <div className="w-12 h-12 bg-orange-600 rounded-full opacity-70" />
          <p className="text-[#F7931A] text-[10px]">Canadian Orange Party</p>
        </div>

        <p className="text-slate-500 text-[10px] mt-8">P.4.3</p>
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
                     hover:border-[#F7931A] hover:text-[#F7931A] transition font-press"
        >
          ← Back
        </Link>

        <span className="text-slate-400 text-[10px] font-press">
          P.4.{pageIndex + 1}
        </span>
      </header>

      {/* Page content */}
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-lg w-full">{pages[pageIndex]}</div>
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

        <span>
          Page {pageIndex + 1} of {pages.length}
        </span>

        <button
          onClick={() =>
            setPageIndex(Math.min(pages.length - 1, pageIndex + 1))
          }
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
