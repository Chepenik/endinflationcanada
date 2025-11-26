"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageTwo() {
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
        <span className="text-slate-400 text-[10px] font-press">P.2</span>
      </header>
      <br />
      <h1
        className="text-4xl text-center md:text-5xl mb-4 font-fancy text-orange-500"
        >E-phamplet goes here?</h1>
      {/* Footer */}
      <footer className="w-full border-t border-slate-800 py-3 text-center text-[10px] text-slate-500 font-press">
        A project by the Canadian Orange Party 
      </footer>
    </main>
  );
}
