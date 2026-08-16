export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Our Team
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            The people behind
            <span className="text-cyan-400"> SarvAI.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A team of young minds working together to make AI more
            accessible, creative and meaningful for everyone.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
              F
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Founder
            </h3>

            <p className="mt-2 text-cyan-400">
              SarvAI
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Leading the vision, direction and growth of SarvAI.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
              D
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Developer
            </h3>

            <p className="mt-2 text-cyan-400">
              Technology
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Building the technology and digital experiences behind SarvAI.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
              T
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Team
            </h3>

            <p className="mt-2 text-cyan-400">
              SarvAI
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Collaborating across ideas, design, technology and execution.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}