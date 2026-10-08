"use client";

import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1E293B] bg-[#08111F]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">

        {/* Main navbar */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-bold tracking-tight text-[#F1F5F9]"
          >
            Likitha<span className="text-[#2DD4BF]">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-[#2DD4BF]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1E293B] text-slate-300 transition hover:border-[#2DD4BF] hover:text-[#2DD4BF] md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-xl border border-[#1E293B] bg-[#0D1726] p-3">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-[#111E30] hover:text-[#2DD4BF]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/cv/Likitha_Shivananjegowda_CV.pdf"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-lg bg-[#2DD4BF] px-4 py-3 text-center text-sm font-semibold text-[#08111F] transition hover:opacity-90"
            >
              Download CV
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}