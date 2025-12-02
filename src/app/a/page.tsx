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
  { label: "P.A.1", counter: "1/6" },
  { label: "P.A.2", counter: "2/6" },
  { label: "P.A.3", counter: "3/6" },
  { label: "P.A.4", counter: "4/6" },
  { label: "P.A.5", counter: "5/6" },
  { label: "P.A.6", counter: "6/6" },
];

export default function PamphletE() {
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
              {/* PAGE 1 – YOU'RE BEING STOLEN FROM */}
              {pageIndex === 0 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-[#ff3b30] uppercase"
                  >
                    YOU&apos;RE BEING
                    <br />
                    STOLEN FROM
                  </h1>

                  <div className="mt-6 text-[0.95rem] leading-relaxed text-slate-100 font-body max-w-[90%]">
                    <p>
                      This pamphlet contains instructions on how to stop
                      yourself and others from being robbed by the fraud of
                      inflation.
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

              {/* PAGE 2 – Inflation is a FRAUD */}
              {pageIndex === 1 && (
                <>
                  <h1 className="font-title text-[1.6rem] leading-snug tracking-[0.12em] uppercase">
                    <span className="text-white">Inflation is a </span>
                    <span className="text-[#ff3b30]">FRAUD</span>
                  </h1>

                  <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-slate-100 font-body max-w-[92%]">
                    <p>
                      Inflation is a fraud committed by bankers who increase the
                      currency supply.
                    </p>
                    <p>
                      If you or I counterfeit $100 bills or hack into the
                      banking system and add $10,000 to our bank account, it&apos;s
                      a crime.
                    </p>
                    <p>
                      If the government creates currency or adds billions to
                      their bank account, it&apos;s called &quot;inflation&quot;.
                    </p>
                    <p>
                      Inflating currency is an immoral, harmful, unfair crime
                      that steals from citizens to fund wasteful government
                      spending.
                    </p>
                    <p>Help us end the fraud.</p>
                  </div>
                </>
              )}

              {/* PAGE 3 – Fiat vs Sound Money */}
              {pageIndex === 2 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-[#ff3b30] uppercase"
                  >
                    FIAT CURRENCY
                  </h1>

                  <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed font-body text-slate-100 max-w-[96%]">
                    <p>
                      Corrupt, deceptive, steals our purchasing power, is
                      immoral, fraudulent and downright evil.
                    </p>
                    <p>Makes life harder for all citizens.</p>
                    <p>
                      A tool used by government to secretly exploit citizens.
                    </p>
                  </div>

                  <div className="mt-7 rounded-xl bg-[#f9d44a] px-4 py-4 text-[0.95rem] leading-relaxed font-body text-[#222] max-w-[100%]">
                    <h2 className="font-title text-[1.4rem] tracking-[0.12em] text-[#f97316] uppercase mb-2">
                      SOUND MONEY
                    </h2>
                    <p>
                      Pure, honest, protects our purchasing power, is a moral
                      imperative, is fair and good.
                    </p>
                    <p className="mt-2">Makes life easier for all citizens.</p>
                    <p className="mt-2">
                      A tool of freedom used by citizens to protect us from
                      government theft.
                    </p>
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

                  <div className="mt-7 space-y-6 text-[0.95rem] font-body text-slate-100 max-w-[96%]">
                    <div>
                      <p className="font-semibold">
                        1.{" "}
                        <span className="text-[#f9d44a] font-semibold">
                          Study Money
                        </span>
                      </p>
                      <p className="mt-2">
                        Learn the difference between money that erodes your time
                        and money that protects your time.
                      </p>
                      <a
                        href="https://www.endinflationcanada.com/"
                        className="mt-2 inline-block text-sky-400 underline underline-offset-4"
                      >
                        Learn more
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold">
                        2.{" "}
                        <span className="text-[#ff3b30]">
                          Avoid scams, schemes and untested
                          technologies/tokens known as &quot;CRYPTO&quot;
                        </span>
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">
                        3. Save in{" "}
                        <span className="text-[#F7931A] font-semibold">
                          Bitcoin
                        </span>
                      </p>
                      <p className="mt-2">
                        Save your time in a global, finite, transparent form of
                        money bound by energy called Bitcoin.
                      </p>
                      <a
                        href="https://www.endinflationcanada.com/"
                        className="mt-2 inline-block text-sky-400 underline underline-offset-4"
                      >
                        Learn more
                      </a>
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

                  <div className="mt-7 space-y-6 text-[0.95rem] font-body text-slate-100 max-w-[96%]">
                    <div>
                      <p className="font-semibold text-[#f9d44a]">
                        Share this resource
                      </p>
                      <p className="mt-2">
                        Help a family member or friend by giving them this
                        pamphlet or sending them to:
                      </p>
                      <p className="mt-2 font-semibold">
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
                        politician or copy and paste the letter made available
                        at:
                      </p>
                      <p className="mt-2 font-semibold">
                        <span className="text-white">www.Stop</span>
                        <span className="text-[#ff3b30]">Inflation</span>
                        <span className="text-white">
                          Canada.com/politician
                        </span>
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 6 – Sponsors */}
              {pageIndex === 5 && (
                <>
                  <h1 className="font-fancy text-[2.2rem] leading-none text-[#f97316] mt-4">
                    Sponsors
                  </h1>

                  <div className="mt-16 space-y-10 font-title text-[1.5rem] uppercase text-[#e5e5e5]">
                    <div>
                      <p>The Bitcoin Coloring Book</p>
                      <p className="mt-2 font-body text-sm uppercase tracking-[0.12em] text-[#c4c4c4]">
                        www.bitcoincoloring.com
                      </p>
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
