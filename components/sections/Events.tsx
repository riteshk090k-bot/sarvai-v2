export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Events
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Where ideas become
            <span className="text-cyan-400"> reality.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Explore SarvAI events, challenges and opportunities built to
            help young innovators learn, create and collaborate.
          </p>
        </div>

        {/* Featured event */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 md:p-12">

          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10">

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
                Featured Event
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
                Upcoming
              </span>
            </div>

            <h3 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">
              SarvAI Tech Fest
            </h3>

            <p className="mt-5 max-w-2xl text-gray-400 leading-7">
              A technology-focused experience bringing together students,
              creators and innovators to explore artificial intelligence,
              build ideas and compete in exciting challenges.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-gray-300 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-gray-500">Date</p>
                <p className="mt-1 font-semibold text-white">
                  Coming Soon
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-gray-500">Venue</p>
                <p className="mt-1 font-semibold text-white">
                  Coming Soon
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-gray-500">Registration</p>
                <p className="mt-1 font-semibold text-cyan-400">
                  Open Soon
                </p>
              </div>
            </div>

            <button className="mt-8 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300">
              Register for Event
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}