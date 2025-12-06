"use client";

import { useState } from "react";

const E_PAMPHLET_URL = "https://www.endinflationcanada.com/e-pamphlet";

type PageMeta = {
  label: string;
  counter: string;
};

const pages: PageMeta[] = [
  { label: "E1", counter: "1/7" },
  { label: "E2", counter: "2/7" },
  { label: "E3", counter: "3/7" },
  { label: "E4", counter: "4/7" },
  { label: "E5", counter: "5/7" },
  { label: "E6", counter: "6/7" },
  { label: "E7", counter: "7/7" },
];

export default function PamphletE() {
  const [pageIndex, setPageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const meta = pages[pageIndex];

  const isFirst = pageIndex === 0;
  const isLast = pageIndex === pages.length - 1;

  const goPrev = () => {
    if (!isFirst) setPageIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (!isLast) setPageIndex((prev) => prev + 1);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(E_PAMPHLET_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-3 py-4 md:px-4 md:py-8 text-white">
      {/* Phone-style card that always fits inside the viewport */}
      <section className="w-full max-w-[420px]">
        <div
          className="relative w-full mx-auto h-[95vh] max-h-[800px]
                     rounded-[2rem]
                     bg-gradient-to-br from-[#050509] via-[#050509] to-[#080910]
                     shadow-[0_0_40px_rgba(0,0,0,0.9)]
                     overflow-hidden"
        >
          <div className="h-full w-full px-5 pt-8 pb-5 flex flex-col">
            {/* CONTENT AREA (scrolls if needed, buttons stay pinned) */}
            <div className="flex-1 space-y-6 overflow-y-auto pr-1">
              {/* PAGE 1 */}
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

                  <div className="mt-12 text-[0.95rem] leading-relaxed text-slate-100 font-body max-w-[90%]">
                    <p>
                      This resource contains instructions on how to stop
                      yourself and others from being robbed by the fraud of
                      inflation.
                    </p>
                  </div>
                </>
              )}

              {/* PAGE 2 */}
              {pageIndex === 1 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-[#ff3b30] uppercase"
                  >
                    INFLATION
                    <br />
                    IS THEFT
                  </h1>

                  <div className="mt-12 space-y-6 text-[0.95rem] leading-loose text-slate-100 font-body max-w-[92%]">
                    <p>
                      Currency inflation steals our time and makes life more
                      expensive.
                    </p>
                    <p>
                      This pamphlet contains the truth about inflation and how
                      you can protect yourself from theft by saving in sound
                      money.
                    </p>
                  </div>
                </>
              )}

              {/* PAGE 3 – LIES / TRUTH */}
              {pageIndex === 2 && (
                <>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-title text-[2rem] leading-none tracking-[0.22em]
                                 text-[#ff3b30] uppercase"
                    >
                      LIES
                    </span>
                    <span className="font-body text-[0.9rem] text-slate-100">
                      We&apos;re told
                    </span>
                  </div>

                  <div className="mt-12 space-y-8 text-[0.95rem] font-body max-w-[95%]">
                    <div>
                      <p className="font-semibold text-slate-100">
                        LIE: &quot;Inflation is necessary&quot;
                      </p>
                      <p className="mt-1 text-[#f9d44a]">
                        TRUTH: Theft is never necessary and it&apos;s always
                        wrong.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-100">
                        LIE: It&apos;s only 1–2% per year
                      </p>
                      <p className="mt-1 text-[#f9d44a]">
                        TRUTH: Over the past 5 years the government has stolen
                        an annual average of 8.5% of our purchasing power.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-100">
                        LIE: It&apos;s normal and fine
                      </p>
                      <p className="mt-1 text-[#f9d44a]">
                        TRUTH: It&apos;s evil, immoral, wrong, harmful and
                        fraudulent.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 4 – Fiat vs Sound Money */}
              {pageIndex === 3 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-[#ff3b30] uppercase"
                  >
                    FIAT CURRENCY
                  </h1>

                  <div className="mt-12 space-y-4 text-[0.95rem] leading-relaxed font-body text-slate-100 max-w-[96%]">
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

              {/* PAGE 5 – 3 steps */}
              {pageIndex === 4 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-white uppercase"
                  >
                    3 STEPS TO
                    <br />
                    PROTECT YOURSELF
                  </h1>

                  <div className="mt-12 space-y-6 text-[0.95rem] font-body text-slate-100 max-w-[96%]">
                    <div>
                      <p className="font-semibold">
                        1.{" "}
                        <span className="text-[#f9d44a] font-semibold">
                          Study
                        </span>{" "}
                        Money{" "}
                        <a
                          href="/money-101"
                          className="text-sky-400 underline underline-offset-4"
                        >
                          Learn more
                        </a>
                      </p>
                      <p className="mt-2">
                        Learn the difference between money that erodes your time
                        and money that protects your time.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">
                        2.{" "}
                        <span className="text-[#f97373]">
                          Avoid &quot;CRYPTO&quot;
                        </span>
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold">
                        3. Save in{" "}
                        <span className="text-[#F7931A] font-semibold">
                          Bitcoin
                        </span>{" "}
                        <a
                          href="/bitcoin-101"
                          className="text-sky-400 underline underline-offset-4"
                        >
                          Learn more
                        </a>
                      </p>
                      <p className="mt-2">
                        Save your time in a global, finite, transparent form of
                        money bound by energy called Bitcoin.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 6 – 2 ways to help others */}
              {pageIndex === 5 && (
                <>
                  <h1
                    className="font-title text-[2rem] leading-snug tracking-[0.18em]
                               text-white uppercase"
                  >
                    2 WAYS TO HELP
                    <br />
                    OTHERS
                  </h1>

                  <div className="mt-12 space-y-6 text-[0.95rem] font-body text-slate-100 max-w-[96%]">
                    <div>
                      <p className="font-semibold text-[#f9d44a]">
                        1. Share this resource
                      </p>
                      <p className="mt-2">
                        Help a family member or friend by{" "}
                        <button
                          onClick={handleShare}
                          className="text-sky-400 underline underline-offset-4 cursor-pointer"
                        >
                          sharing
                        </button>{" "}
                        this e-pamphlet.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#f9d44a]">
                        2. Educate your politician
                      </p>
                      <p className="mt-2">
                        <button
                          onClick={handleShare}
                          className="text-sky-400 underline underline-offset-4 cursor-pointer"
                        >
                          Share
                        </button>{" "}
                        this e-pamphlet with your politician or send them the{" "}
                        <a
                          href="/politician"
                          className="text-sky-400 underline underline-offset-4"
                        >
                          letter
                        </a>{" "}
                        found here.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* PAGE 7 – Sponsors (shifted down slightly so it's not clipped) */}
              {pageIndex === 6 && (
                <>
                  <h1 className="mt-3 font-fancy text-[2.2rem] leading-none text-slate-100">
                    Sponsors
                  </h1>

                  <div className="mt-10 space-y-6 font-press text-[0.95rem] tracking-[0.2em] text-slate-200">
                    <div>
                      <p className="font-title text-[1.5rem] uppercase text-[#e5e5e5]">
                        The Bitcoin Coloring Book
                      </p>
                      <a
                        href="https://bitcoincoloring.com"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 font-body text-sm uppercase tracking-[0.12em] text-[#c4c4c4] block"
                      >
                        bitcoincoloring.com
                      </a>
                    </div>
                    <p>SPONSOR 2 LOGO</p>
                    <p>SPONSOR 3 LOGO</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-10 pr-1">
                    <span className="font-fancy text-[1.4rem] text-[#f97316]">
                      Canadian Orange Party
                    </span>
                    <div className="relative w-11 h-11 rounded-md overflow-hidden bg-black">
                      <img
                        src="https://i.nostr.build/mt5lXdK20ge85YW9.png"
                        alt="Canadian Orange Party maple leaf"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* BOTTOM CONTROLS – always visible, no page scroll needed */}
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

              <button
                onClick={handleShare}
                className="font-body text-[0.95rem] text-sky-400 underline-offset-4 underline mx-auto cursor-pointer"
              >
                {copied ? "Copied!" : "Share"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
