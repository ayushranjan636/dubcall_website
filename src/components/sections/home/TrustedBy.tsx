const logos = [
  { name: "Rivet Global", image: "/images/rivet-global.png" },
  { name: "SlateMate", image: "/images/SlateMate-logo-2.png" },
  { name: "Franchise Batao", image: "/images/Franchise-batao-logo-newww.jpg" },
  { name: "The HNH", image: "/images/the-hnh-logo-scaled.jpg" },
];

const trail = [...logos, ...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="border-y border-line bg-bg py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">
          Trusted by teams building the next wave of AI calling
        </p>

        <div className="relative overflow-hidden">
          {/* edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-bg to-transparent" />

          <div className="dc-animate-marquee flex w-max items-center gap-16 whitespace-nowrap">
            {trail.map((logo, i) => (
              <div
                key={i}
                className="flex h-20 w-32 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:invert dark:hover:invert-0"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-subtle">
            Supported by
          </p>
          <img
            src="/images/cartesia-startups.png"
            alt="Cartesia Startups"
            className="h-6 w-auto opacity-70 transition hover:opacity-100 dark:invert"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
