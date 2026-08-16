export default function Gallery() {
  return (
    <section id="gallery" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Gallery
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Moments from
            <span className="text-cyan-400"> SarvAI.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            A glimpse into our events, ideas, people and experiences.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="h-72 rounded-3xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-500">
            Image Coming Soon
          </div>

          <div className="h-72 rounded-3xl border border-white/10 bg-cyan-400/[0.04] flex items-center justify-center text-gray-500">
            Image Coming Soon
          </div>

          <div className="h-72 rounded-3xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-500">
            Image Coming Soon
          </div>
        </div>

      </div>
    </section>
  );
}