"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/home" className="flex items-center gap-3">
          <Image
            src="/logo-new.png"
            alt="SarvAI Logo"
            width={46}
            height={46}
            className="object-contain"
          />

          <h1 className="text-3xl font-bold tracking-wide text-white">
            Sarv<span className="text-cyan-400">AI</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-white md:flex">
          <li>
            <a
              href="/home"
              className="transition hover:text-cyan-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="transition hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/events"
              className="transition hover:text-cyan-400"
            >
              Events
            </a>
          </li>

          <li>
            <a
              href="/team"
              className="transition hover:text-cyan-400"
            >
              Team
            </a>
          </li>

          <li>
            <a
              href="/gallery"
              className="transition hover:text-cyan-400"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Register */}
        <a
          href="/register"
          className="hidden rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400 md:block"
        >
          Register
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5 text-center text-white">

            <a
              href="/home"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="/events"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Events
            </a>

            <a
              href="/team"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Team
            </a>

            <a
              href="/gallery"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Gallery
            </a>

            <a
              href="/contact"
              onClick={closeMenu}
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>

            <a
              href="/register"
              onClick={closeMenu}
              className="mx-auto rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Register
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}