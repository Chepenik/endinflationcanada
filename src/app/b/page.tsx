"use client";

import { useState } from "react";

const SHARE_URL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
  "https://www.endinflationcanada.com/"
)}&text=${encodeURIComponent(
  "You’re being stolen from by inflation. Read this free e-pamphlet:"
)}`;

type PageMeta = {
  label: string;
  counter: string;
};

const pages: PageMeta[] = [
  { label: "P.B.1", counter: "1/6" },
  { label: "P.B.2", counter: "2/6" },
  { label: "P.B.3", counter: "3/6" },
  { label: "P.B.4", counter: "4/6" },
  { label: "P.B.5", counter: "5/6" },
  { label: "P.B.6", counter: "6/6" },
];

export default function PamphletB() {
  const [pageIndex, setPageIndex] = useState(0);
  const meta = pages[pageIndex];

  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;

  const goPrev = () => {
    if (!isFirst) setPageIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (!isLast) setPageIndex((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-3 py-4 md:px-4 md:py-8 text-white">
      {/* Phone-style card that always fits inside the viewport */}
      <section className="w-full max-w-[420px]">
        <div
          className="relative w-full mx-auto h-[90vh] max-h-[720px]
                     rounded-[2rem]
                     bg-gradient-to-br from-[#050509] via-[#050509] to-[#080910]
                     shadow-[0_0_40px_rgba(0,0,0,0.9)]
                     overflow-hidden"
        >
          <div className="h-full w-full px-5 pt-7 pb-5 flex flex-col">
            {/* CONTENT AREA (scrolls if needed, buttons stay pinned) */}
            <div className="flex-1 space-y-6 overflow-y-auto pr-1">
              {/* PAGE 1 – INFLATION IS THEFT */}
              {pageIndex === 0 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-[#ff3b30] uppercase"
                  >
                    INFLATION IS
                    <br />
                    THEFT
                  </h1>

                  <div className="mt-12 text-[0.95rem] leading-relaxed text-slate-100 font-body max-w-[90%]">
                    <p>
                      Currency inflation steals our time and makes life more
                      expensive.
                    </p>
                    <p className="mt-10">
                      This pamphlet contains the truth about inflation and how
                      you can protect yourself from theft by saving in sound
                      money.
                    </p>
                  </div>

                  <div className="mt-10 font-body text-sm">
                    <p>
                      <span className="text-white">www.End</span>
                      <span className="text-[#ff3b30]">Inflation</span>
                      <span className="text-white">Canada.com</span>
                    </p>
                  </div>
                </>
              )}

              {/* PAGE 2 – LIES We’re told */}
              {pageIndex === 1 && (
                <>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-title text-[2.3rem] leading-none tracking-[0.22em]
                                 text-[#ff3b30] uppercase"
                    >
                      LIES
                    </span>
                    <span className="font-body text-[0.9rem] text-slate-100">
                      We&apos;re told
                    </span>
                  </div>

                  <div className="mt-20 space-y-9 text-[0.95rem] font-body max-w-[96%]">
                    <div>
                      <p className="text-[#ff3b30] font-semibold">
                        “Inflation is necessary”
                      </p>
                      <p className="mt-2 text-[#f9d44a]">
                        Truth: Theft is never necessary and it&apos;s always
                        wrong.
                      </p>
                    </div>

                    <div>
                      <p className="text-[#ff3b30] font-semibold">
                        “It&apos;s only 1–2% per year”
                      </p>
                      <p className="mt-2 text-[#f9d44a]">
                        Truth: Over the past 5 years the government has stolen
                        an annual average of 8.5% of our purchasing power.
                      </p>
                    </div>

                    <div>
                      <p className="text-[#ff3b30] font-semibold">
                        “It&apos;s normal and fine”
                      </p>
                      <p className="mt-2 text-[#f9d44a]">
                        Truth: It&apos;s evil, immoral, wrong, harmful and
                        fraudulent.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 3 – FRAUDULENT CURRENCY vs SOUND MONEY */}
              {pageIndex === 2 && (
                <>
                  <div className="mt-2 flex h-[70vh] rounded-xl overflow-hidden border border-black/40">
                    {/* Left side – Fraudulent currency */}
                    <div className="w-1/2 bg-black px-4 py-5 flex flex-col">
                      <h2 className="font-title text-[1.2rem] leading-tight tracking-[0.14em] text-[#ff3b30] uppercase mb-8">
                        FRAUDULENT
                        <br />
                        CURRENCY
                      </h2>

                      <div className="space-y-4 font-body text-sm text-[#ff3b30]">
                        <p>Corrupt</p>
                        <p>Immoral</p>
                        <p>Deceptive</p>
                        <p>Theft</p>
                        <p>Erodes purchasing power</p>
                        <p>Evil</p>
                      </div>
                    </div>

                    {/* Right side – Sound money */}
                    <div className="w-1/2 bg-[#f97316] px-4 py-5 flex flex-col">
                      <h2 className="font-title text-[1.3rem] leading-tight tracking-[0.14em] text-white uppercase mb-8">
                        SOUND
                        <br />
                        MONEY
                      </h2>

                      <div className="space-y-4 font-body text-sm text-white">
                        <p>Incorruptible</p>
                        <p>Moral</p>
                        <p>Honest</p>
                        <p>Protection</p>
                        <p>Increases purchasing power</p>
                        <p>Good</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 4 – 3 Steps to Protect Yourself */}
              {pageIndex === 3 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-[#f9d44a] uppercase"
                  >
                    3 STEPS TO
                    <br />
                    PROTECT YOURSELF
                  </h1>

                  <div className="mt-7 space-y-8 text-[0.95rem] font-body text-slate-100 max-w-[96%]">
                    <div>
                      <p className="font-semibold text-[#f9d44a]">
                        1. Study Money
                      </p>
                      <p className="mt-2">
                        Learn the difference between money that erodes your time
                        and money that protects your time.
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span>Learn more</span>
                        <span className="text-xl">→</span>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-[#ff3b30]">
                        2. Avoid scams, schemes and untested
                        technologies/tokens known as “CRYPTO”
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#F7931A]">
                        3. Save in Bitcoin
                      </p>
                      <p className="mt-2">
                        Save your time in a global, finite, transparent form of
                        money bound by energy called Bitcoin.
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm">
                        <span>Learn more</span>
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 5 – Help Others */}
              {pageIndex === 4 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-[#f9d44a] uppercase"
                  >
                    HELP OTHERS
                  </h1>

                  <div className="mt-14 space-y-8 text-[0.95rem] font-body text-slate-100 max-w-[96%]">
                    <div>
                      <p className="font-semibold text-[#f9d44a]">
                        Share this resource
                      </p>
                      <p className="mt-2">
                        Help a family member or friend by giving them this
                        pamphlet or sending them to:
                      </p>
                      <p className="mt-3 font-semibold">
                        <span className="text-white">www.End</span>
                        <span className="text-[#ff3b30]">Inflation</span>
                        <span className="text-white">Canada.com</span>
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#f9d44a]">
                        Educate your politician
                      </p>
                      <p className="mt-2">
                        Send the digital version of this pamphlet to your
                        politician or copy and paste this letter in an email:
                      </p>
                      <p className="mt-3 font-semibold text-[#f97316]">
                        www.EndInflationCanada.com/politician
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 6 – Sponsors (same layout as before) */}
              {pageIndex === 5 && (
                <>
                  <h1 className="font-fancy text-[2.2rem] leading-none text-[#f97316] mt-4">
                    Sponsors
                  </h1>

                  <div className="mt-16 space-y-10 font-title text-[1.5rem] uppercase text-[#e5e5e5]">
                    <div>
                      <p>The Bitcoin Coloring Book</p>
                      <a rel="stylesheet" href="https://bitcoincoloring.com">                       
                        <p className="mt-2 font-body text-sm uppercase tracking-[0.12em] text-[#c4c4c4]">
                          bitcoincoloring.com
                        </p>
                      </a>
                    </div>

                    <div>
                      <p>SPONSOR 2</p>
                      <p className="mt-2 font-body text-sm uppercase tracking-[0.12em] text-[#c4c4c4]">
                        www.sponsor2.com
                      </p>
                    </div>

                    <div>
                      <p>SPONSOR 3</p>
                      <p className="mt-2 font-body text-sm uppercase tracking-[0.12em] text-[#c4c4c4]">
                        www.sponsor3.com
                      </p>
                    </div>
                  </div>

                  <div className="mt-20 flex justify-end">
                    <div className="relative w-24 h-28 rounded-md overflow-hidden bg-black">
                      <img
                        src="https://i.nostr.build/mt5lXdK20ge85YW9.png"
                        alt="Maple leaf"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* BOTTOM CONTROLS – always visible */}
            <div className="mt-3 flex flex-col gap-3">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-press">
                <button
                  onClick={goPrev}
                  disabled={isFirst}
                  className="lowercase px-2 py-1 rounded disabled:opacity-30 disabled:cursor-not-allowed
                             hover:text-[#F7931A] hover:brightness-125 transition"
                >
                  previous
                </button>

                <span>{meta.counter}</span>

                <button
                  onClick={goNext}
                  disabled={isLast}
                  className="lowercase px-2 py-1 rounded disabled:opacity-30 disabled:cursor-not-allowed
                             hover:text-[#F7931A] hover:brightness-125 transition"
                >
                  next
                </button>
              </div>

              <a
                href={SHARE_URL}
                target="_blank"
                rel="noreferrer"
                className="font-body text-[0.95rem] text-sky-400 underline-offset-4 underline mx-auto"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
