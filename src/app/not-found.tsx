"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-press">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* 404 Number */}
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-bold text-orange-500 font-fancy leading-none">
              404
            </h1>
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-orange-500/20"></div>
              <p className="relative text-2xl md:text-3xl font-fancy text-orange-400">
                Page Not Found
              </p>
            </div>
          </div>

          {/* Maple Leaf */}
          <div className="flex justify-center mt-6">
            <div className="h-24 w-24 rounded-md overflow-hidden bg-black shadow-[0_0_20px_rgba(247,147,26,0.3)] border border-orange-500/30">
              <img
                src="https://i.nostr.build/mt5lXdK20ge85YW9.png"
                alt="Canadian Orange Party maple leaf"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Looks like this page has been inflated away! 💸
            </p>
            <p className="text-slate-400 text-xs md:text-sm">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg border border-slate-600 bg-slate-800 text-sm
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] transition"
            >
              ← Return Home
            </Link>
            <Link
              href="/e-pamphlet"
              className="px-6 py-3 rounded-lg border border-slate-600 bg-slate-800 text-sm
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] transition"
            >
              View Pamphlets
            </Link>
          </div>

          {/* Fun fact */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-[10px] text-slate-500 italic">
              &quot;Inflation is taxation without legislation.&quot; — Milton Friedman
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        A project by the Canadian Orange Party
      </footer>
    </main>
  );
}

