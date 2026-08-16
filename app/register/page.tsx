export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            SarvAI Registration
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            Register for
            <span className="text-cyan-400"> SarvAI.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Choose your registration category to participate in the
            upcoming SarvAI Tech Fest.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">

          <h2 className="text-2xl font-semibold">
            Registration Categories
          </h2>

          <p className="mt-4 text-gray-400">
            Registration categories and participation types will be
            announced soon.
          </p>

          <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">
            <p className="text-cyan-400 font-medium">
              Coming Soon
            </p>

            <p className="mt-2 text-gray-500">
              Details will be updated after the final event structure
              is confirmed.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}