"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageThree() {
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

        <span className="text-slate-400 text-[10px] font-press">P.3</span>
      </header>

      {/* Image Container */}
      <section className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="relative w-full max-w-5xl aspect-[3/2] border border-slate-800 rounded">
          <Image
            src="/P3.PNG.png"
            alt="Pamphlet Page 3"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-800 py-3 text-center text-[10px] text-slate-500 font-press">
        A project by the Canadian Orange Party
      </footer>
    </main>
  );
}
