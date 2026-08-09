import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
  <Image
    src="/logo.jpg"
    alt="SarvAI Logo"
    width={46}
    height={46}
    className="rounded-full object-cover"
  />

  <h1 className="text-3xl font-bold tracking-wide text-white">
    Sarv<span className="text-cyan-400">AI</span>
  </h1>
</div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-white md:flex">
          <li className="cursor-pointer transition hover:text-cyan-400">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            About
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Events
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Team
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Gallery
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Contact
          </li>
        </ul>

        {/* Register Button */}
        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
          Register
        </button>

      </div>
    </nav>
  );
}