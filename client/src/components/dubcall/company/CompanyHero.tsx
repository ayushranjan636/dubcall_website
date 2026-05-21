export default function CompanyHero() {
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
        About Us
      </div>

      {/* Heading */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.1] max-w-6xl mb-6 z-10">
        Company
      </h1>

      {/* Sub */}
      <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-10 z-10 leading-relaxed">
        DubCall falls under NextSens Global Pvt. Ltd.
      </p>
    </section>
  );
}
