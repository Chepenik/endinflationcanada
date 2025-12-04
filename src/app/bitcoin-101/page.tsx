export default function Bitcoin101() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-3 py-4 md:px-4 md:py-8 text-white">
      <section className="w-full max-w-4xl">
        <div className="bg-gradient-to-br from-[#050509] via-[#050509] to-[#080910] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.9)] p-8 md:p-12">
          <h1 className="font-title text-4xl md:text-5xl leading-snug tracking-[0.18em] text-[#F7931A] uppercase mb-8">
            Bitcoin 101
          </h1>
          
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-100 font-body">
            <p className="text-slate-400 italic">
              Content coming soon...
            </p>
          </div>

          <div className="mt-12">
            <a
              href="/c"
              className="inline-block text-sky-400 underline underline-offset-4 hover:text-sky-300 transition"
            >
              ← Back to e-pamphlet
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

