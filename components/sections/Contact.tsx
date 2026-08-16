export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Let's build the
            <span className="text-cyan-400"> future.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have a question, idea or collaboration in mind?
            Get in touch with the SarvAI team.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm text-gray-500">Email</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Coming Soon
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <p className="text-sm text-gray-500">Social</p>
              <p className="mt-2 text-lg font-semibold text-white">
                SarvAI
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}