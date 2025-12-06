"use client";

import { useState } from "react";

const LETTER_TEXT = `Dear [MP Name],

As a constituent, I urge you to end the deceptive currency inflation that erodes my family's savings and makes life less affordable.

For the sake of the Canadians you represent, please advocate for sound money policies that end currency debasement.

I ask you to please confront the problem of manipulated currency that steals my time (and yours too).

We deserve better. Will you do the right thing and help us restore a sound money standard in Canada?`;

export default function ContactMP() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LETTER_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleFindMP = () => {
    window.open("https://www.ourcommons.ca/members/en/search", "_blank");
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-press">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full space-y-6">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl mb-2 font-fancy text-orange-500">
              Contact Your MP
            </h1>
            <p className="text-slate-300 text-xs">
              Help restore sound money in Canada
            </p>
          </div>

          {/* Letter Preview */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6">
            <h2 className="text-sm font-semibold text-[#F7931A] mb-3">
              Letter Template
            </h2>
            <div className="text-slate-200 text-xs leading-relaxed whitespace-pre-line font-mono">
              {LETTER_TEXT}
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6">
            <h2 className="text-sm font-semibold text-[#F7931A] mb-4">
              How to Send
            </h2>
            <ol className="space-y-3 text-slate-300 text-xs">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  1
                </span>
                <span>Find your MP and their email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  2
                </span>
                <span>Open your email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  3
                </span>
                <span>Press the copy button here</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  4
                </span>
                <span>Paste the letter into your email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  5
                </span>
                <span>Enter your MP&apos;s email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  6
                </span>
                <span>Click send</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  7
                </span>
                <span>Share this with as many people as you can</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F7931A] text-white flex items-center justify-center text-[10px] font-bold">
                  8
                </span>
                <span>
                  Pat yourself on the back knowing you helped create a better
                  Canada ❤️
                </span>
              </li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleFindMP}
              className="flex-1 border border-slate-600 bg-slate-800 text-slate-200 py-3 px-4 rounded-lg transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] text-xs"
            >
              ↗ Find Your Member of Parliament
            </button>

            <button
              onClick={handleCopy}
              className="flex-1 border border-slate-600 bg-slate-800 text-slate-200 py-3 px-4 rounded-lg transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] text-xs"
            >
              {copied ? "✓ Copied!" : "📋 Copy Letter Text"}
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        A project by the Canadian Orange Party
      </footer>
    </main>
  );
}