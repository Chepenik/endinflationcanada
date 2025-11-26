"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-press">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-fancy text-orange-500">
            Thank you 🇨🇦
          </h1>

          <p className="text-slate-300 text-xs md:text-sm">
            Your vote and feedback have been recorded.
            <br />
            You’re helping shape our first Canadian Orange Party pamphlet.
          </p>

          <div className="space-y-3 text-[11px] md:text-xs text-slate-400">
            <p>
              We’ll use your comments to refine both the print versions and the
              e-pamphlet so they hit harder, explain inflation clearly, and help more
              Canadians opt out of the scam.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Link
              href="/"
              className="px-5 py-2 rounded-lg border border-slate-600 bg-slate-800 text-xs
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] transition"
            >
              ← Back to voting
            </Link>

            <Link
              href="/b"
              className="px-5 py-2 rounded-lg border border-slate-700 bg-slate-900 text-xs
                         hover:border-[#F7931A] hover:text-[#F7931A] transition"
            >
              View Plan B again
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
