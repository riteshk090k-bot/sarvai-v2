import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="flex h-screen items-center justify-center">
        <h1 className="text-6xl font-bold text-white">
          Welcome to <span className="text-cyan-400">SarvAI</span>
        </h1>
      </section>
    </main>
  );
}