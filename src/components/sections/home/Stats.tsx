const stats = [
  {
    value: "1M+",
    label: "Calls Capacity",
    description: "Scalable AI infrastructure built for high-volume operations",
    shape: "rounded-2xl",
  },
  {
    value: "2X",
    label: "Lead Conversion Potential",
    description: "24×7 follow-ups and instant responses increase closure rates",
    shape: "rounded-full",
  },
  {
    value: "32+",
    label: "Supported Languages",
    description: "English, Hindi & regional dialects with code-switching",
    shape: "rounded-2xl",
  },
  {
    value: "85%+",
    label: "Task Automation",
    description: "AI completes workflows — not just conversations",
    shape: "rounded-full",
  },
];

const features = [
  { icon: "⚡", title: "< 1 Day Setup", desc: "Go live without enterprise complexity" },
  { icon: "🤖", title: "Custom AI Agents", desc: "Built for BFSI, healthcare, real estate & more" },
  { icon: "🔒", title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encrypted calls" },
];

export default function DubCallStats() {
  return (
    <section className="py-20 bg-white" id="product">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3">
              Trusted.{" "}
              <span className="italic">Live.</span>{" "}
              Delivering Results.
            </h2>
            <p className="text-gray-500 text-sm mb-10 max-w-sm">
              Built for scale. Designed for action. Proven in production.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 border border-black/10 rounded-xl hover:border-black transition-colors duration-200 group cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-lg group-hover:bg-black group-hover:border-black transition-colors duration-200">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{f.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`border-2 border-black p-6 flex flex-col items-center justify-center text-center gap-2 hover:bg-black hover:text-white transition-all duration-300 group cursor-default ${s.shape}`}
              >
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight dc-count-pulse">
                  {s.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {s.label}
                </span>
                <span className="text-[11px] text-gray-500 group-hover:text-gray-300 leading-snug max-w-[140px]">
                  {s.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
