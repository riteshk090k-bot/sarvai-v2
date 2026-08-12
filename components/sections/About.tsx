export default function About() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About SarvAI
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Technology should be
            <span className="text-cyan-400"> accessible to everyone.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Our Mission
            </h3>

            <p className="leading-8 text-gray-400">
              SarvAI aims to make artificial intelligence easier to
              understand, explore and use. We want young minds to move
              beyond simply using technology and start building with it.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-8">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Our Vision
            </h3>

            <p className="leading-8 text-gray-400">
              We envision a future where curiosity becomes creation,
              students become innovators and AI becomes a tool for
              learning, creativity and meaningful problem solving.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}