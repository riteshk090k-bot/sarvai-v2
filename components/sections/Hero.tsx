export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 pt-20">
      
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
          Artificial Intelligence For Everyone
        </p>
        <h1 className="mx-auto max-w-6xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl lg:text-[78px]">
          Empowering Every Child
          <br />
          With{" "}
          <span className="text-cyan-400">AI</span>
          </h1>
    

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          SarvAI is building a future where every child can learn,
          explore and create with artificial intelligence.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300">
            Register Now
          </button>

          <button className="rounded-xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400">
            Explore SarvAI
          </button>
        </div>

      </div>
    </section>
  );
}