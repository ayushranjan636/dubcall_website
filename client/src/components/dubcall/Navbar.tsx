import { useState } from "react";
import { useLocation } from "wouter";
import TalkToUs from "./TalkToUs";

export default function DubCallNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [talkToUsOpen, setTalkToUsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4">
      {/* Outer pill container */}
      <nav className="w-full max-w-4xl bg-white border border-black rounded-2xl px-4 py-2.5 flex items-center justify-between shadow-sm">

        {/* LEFT: Logo + Nav Links */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <a href="/" className="flex items-center group pr-2">
            <img
              src="/dubcall/dubcall-logo.png"
              alt="DubCall"
              width={96}
              height={96}
              className="rounded-md object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/product"
              className={`text-sm font-medium px-3.5 py-1.5 rounded-lg border transition-colors duration-200 ${
                isActive("/product")
                  ? "border-black bg-black text-white"
                  : "border-black hover:bg-black hover:text-white"
              }`}
            >
              Product
            </a>
            <a
              href="/company"
              className={`text-sm font-medium px-3.5 py-1.5 rounded-lg border transition-colors duration-200 ${
                isActive("/company")
                  ? "border-black bg-black text-white"
                  : "border-black hover:bg-black hover:text-white"
              }`}
            >
              Company
            </a>
          </div>
        </div>

        {/* RIGHT: CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/contact"
            className="text-sm font-medium px-3.5 py-1.5 rounded-lg hover:underline underline-offset-4 transition-all"
          >
            Get Started
          </a>
          <button
            onClick={() => setTalkToUsOpen(true)}
            className="text-sm font-medium px-3.5 py-1.5 rounded-lg border border-black bg-white hover:bg-black hover:text-white transition-colors duration-200"
          >
            Talk to us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-black transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 max-w-4xl mx-auto bg-white border border-black rounded-2xl px-5 py-4 flex flex-col gap-3 shadow-sm md:hidden">
          <a
            href="/product"
            className={`text-sm font-medium px-3.5 py-1.5 rounded-lg border ${
              isActive("/product")
                ? "bg-black text-white border-black"
                : "border-black"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Product
          </a>
          <a
            href="/company"
            className={`text-sm font-medium px-3.5 py-1.5 rounded-lg border ${
              isActive("/company")
                ? "bg-black text-white border-black"
                : "border-black"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Company
          </a>
          <div className="flex gap-2 pt-1">
            <a
              href="/contact"
              className="text-sm font-medium px-3.5 py-1.5 rounded-lg border border-black hover:bg-black hover:text-white transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
            <button
              onClick={() => {
                setTalkToUsOpen(true);
                setMenuOpen(false);
              }}
              className="text-sm font-medium px-3.5 py-1.5 rounded-lg border border-black bg-black text-white hover:bg-gray-900 transition-colors duration-200"
            >
              Talk to us
            </button>
          </div>
        </div>
      )}

      {/* Talk to us modal */}
      <TalkToUs isOpen={talkToUsOpen} onClose={() => setTalkToUsOpen(false)} />
    </header>
  );
}
