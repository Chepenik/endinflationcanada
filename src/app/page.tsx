"use client";

import { useState } from "react";

export default function Home() {
  const [choice, setChoice] = useState<"A" | "B" | "">("");
  const [feedback, setFeedback] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [showForm, setShowForm] = useState(false);

  const MAX_CHARS = 121;

  function handleFeedbackChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;

    if (value.length <= MAX_CHARS) {
      setFeedback(value);
      setCharCount(value.length);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setStatus("");

    const trimmed = feedback.trim();

    if (!choice || trimmed.length === 0) {
      e.preventDefault();
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-press">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Title */}
          <div>
            <h1 className="mt-[-32px] text-4xl md:text-5xl mb-4 font-fancy text-orange-500">
              End Inflation Canada
            </h1>

            <p className="text-slate-300 text-[6px] md:text-[10px] leading-tight whitespace-nowrap">
              Help us AB get our first paper pamphlet by voting below ❤️
            </p>
          </div>

          {/* Pamphlet links */}
          <div className="grid gap-4 grid-cols-3 text-[10px]">
            <a
              href="/a"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A]"
            >
              Print A
            </a>

            <a
              href="/b"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A]"
            >
              Print B
            </a>

            <a
              href="/c"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 transition 
                         hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A]"
            >
              E-pamphlet
            </a>
          </div>

          {/* Toggle button */}
          {!showForm && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setShowForm(true);
                  setStatus("");
                }}
                className="mt-2 text-xs px-6 py-2 rounded-lg border border-slate-600 bg-slate-800 
                           hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] transition"
              >
                Vote & submit feedback
              </button>
            </div>
          )}

          {/* Feedback form */}
          {showForm && (
            <form
              action="https://formsubmit.co/CanadianOrangeParty@protonmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="mt-4 text-left bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 space-y-4"
            >
              <input type="hidden" name="_subject" value="EndInflationCanada feedback" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/success" />
              <input type="hidden" name="_template" value="table" />

              {/* Vote A/B */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-xs">
                <span className="text-slate-300 text-center md:text-left">
                  Which print pamphlet do you prefer?
                </span>
                <div className="flex items-center justify-center gap-4">
                  <label className="inline-flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="choice"
                      value="A"
                      checked={choice === "A"}
                      onChange={() => setChoice("A")}
                      className="accent-[#F7931A]"
                      required
                    />
                    <span>Print A</span>
                  </label>
                  <label className="inline-flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="choice"
                      value="B"
                      checked={choice === "B"}
                      onChange={() => setChoice("B")}
                      className="accent-[#F7931A]"
                      required
                    />
                    <span>Print B</span>
                  </label>
                </div>
              </div>

              {/* Feedback textarea */}
              <div className="space-y-2">
                <label className="block text-xs text-slate-300">
                  Feedback on the e-pamphlet (max {MAX_CHARS} characters)
                </label>
                <textarea
                  name="feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  rows={6}
                  maxLength={MAX_CHARS}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 text-xs p-3 outline-none 
                             focus:border-[#F7931A] focus:ring-1 focus:ring-[#F7931A] resize-vertical"
                  placeholder="Tell us why you prefer A or B, and what you think of the e-pamphlet."
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>{charCount} / {MAX_CHARS} characters</span>
                </div>
              </div>

              {/* Status */}
              {status === "error" && (
                <p className="text-[10px] text-red-400">
                  Please pick Print A or Print B and write something in the feedback box.
                </p>
              )}
              {status === "success" && (
                <p className="text-[10px] text-emerald-400">
                  Sending your feedback… 🍁
                </p>
              )}

              <div className="flex items-center justify-between pt-2 text-[10px]">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setStatus("");
                  }}
                  className="text-slate-500 hover:text-slate-300 underline-offset-2 hover:underline"
                >
                  Close feedback form
                </button>

                <button
                  type="submit"
                  className="text-xs px-5 py-2 rounded-lg border border-slate-600 bg-slate-800 
                             hover:border-[#F7931A] hover:text-[#F7931A] hover:shadow-[0_0_10px_#F7931A] transition"
                >
                  Submit feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <footer className="w-full border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        A project by the Canadian Orange Party
      </footer>
    </main>
  );
}
