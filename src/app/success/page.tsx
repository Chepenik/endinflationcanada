"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-slate-100 flex flex-col font-press">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl md:text-3xl font-fancy text-orange-400 leading-snug">
            Thank you for your feedback and for spreading truth about the fraud
            of currency inflation
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-16 w-16 rounded-md overflow-hidden bg-black shadow-[0_0_18px_rgba(0,0,0,0.8)]">
              <img
                src="https://i.nostr.build/mt5lXdK20ge85YW9.png"
                alt="Canadian Orange Party maple leaf"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <Link
              href="/"
              className="px-5 py-2 rounded-lg border border-slate-600 bg-slate-900 text-xs
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] transition"
            >
              ← Return home
            </Link>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        A project by the Canadian Orange Party
      </footer>
    </main>
  );
}
