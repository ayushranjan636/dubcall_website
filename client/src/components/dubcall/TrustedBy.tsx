const logos = [
  { name: "Rivet Global", image: "/dubcall/rivet-global.png" },
  { name: "SlateMate", image: "/dubcall/SlateMate-logo-2.png" },
  { name: "Franchise Batao", image: "/dubcall/Franchise-batao-logo-newww.jpg" },
  { name: "The HNH", image: "/dubcall/the-hnh-logo-scaled.jpg" },
  { name: "Rivet Global", image: "/dubcall/rivet-global.png" },
  { name: "SlateMate", image: "/dubcall/SlateMate-logo-2.png" },
  { name: "Franchise Batao", image: "/dubcall/Franchise-batao-logo-newww.jpg" },
  { name: "The HNH", image: "/dubcall/the-hnh-logo-scaled.jpg" },
];

export default function DubCallTrustedBy() {
  return (
    <section className="py-14 bg-white border-y border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center justify-center mb-8">
          <span className="px-5 py-1.5 text-xs font-semibold tracking-widest uppercase border border-black rounded-full">
            Trusted By
          </span>
        </div>

        {/* Marquee wrapper */}
        <div className="overflow-hidden border border-black/10 rounded-2xl bg-white py-4 relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex dc-animate-marquee whitespace-nowrap gap-0">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex items-center mx-12 py-2 min-w-max"
              >
                <div className="relative w-28 h-28 flex-shrink-0">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
