export default function ProductHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 bg-white relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 border border-black rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white z-10">
        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
        Product Overview
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mb-6 z-10">
        AI Voice Agents That Talk,{" "}
        <span className="italic font-extrabold">Think,</span>{" "}
        and Take Action
      </h1>

      {/* Sub */}
      <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-10 z-10 leading-relaxed">
        Build, deploy, and scale intelligent voice agents that automate calls, update systems, and execute real workflows—24/7.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <a
          href="/contact"
          className="px-8 py-3 rounded-full border-2 border-black font-semibold text-base hover:bg-black hover:text-white transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Book a Demo
        </a>
        <a
          href="/contact"
          className="px-8 py-3 rounded-full border-2 border-black bg-black text-white font-semibold text-base hover:bg-white hover:text-black transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
        >
          Try Free
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <span className="w-px h-8 bg-black/20" />
      </div>
    </section>
  );
}
