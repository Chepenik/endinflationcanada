"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-press">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center">

          {/* Cursive Title – slightly smaller + a bit higher */}
          <h1
            className="mt-[-32px] text-4xl md:text-5xl mb-6 font-fancy text-orange-500"
          >
            End Inflation Canada
          </h1>

          {/* New subtitle copy */}
          <p className="text-slate-300 mb-10 text-[11px] md:text-xs">
            Help us choose our first e-pamphlet and physical pamphlet by voting below.
          </p>

          {/* Options */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 text-[10px]">

            {/* Option 1 */}
            <a
              href="/one"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A]"
            >
              Option 1
            </a>

            {/* Option 2 */}
            <a
              href="/two"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A]"
            >
              Option 2
            </a>

            {/* Option 3 */}
            <a
              href="/three"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A]"
            >
              Option 3
            </a>

            {/* Option 4 */}
            <a
              href="/four"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A]"
            >
              Option 4
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        A project by the Canadian Orange Party
      </footer>
    </main>
  );
}
