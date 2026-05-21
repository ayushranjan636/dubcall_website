import { Reveal } from "@/lib/motion";

const pillars = [
  {
    title: "Redefine Customer Conversations",
    desc: "AI-powered voice agents that understand context, adapt in real-time, and deliver human-like interactions at scale.",
  },
  {
    title: "Empower Every Team",
    desc: "Sales, support, and success teams spend less time on repetitive calls and more time on strategy. We handle the volume.",
  },
  {
    title: "Enterprise-Grade Reliability",
    desc: "Security, compliance, and performance built from day one. Your conversations, your rules, your data.",
  },
  {
    title: "Innovation Through Simplicity",
    desc: "No complexity. Just powerful AI that integrates seamlessly with your workflows.",
  },
];

export default function CompanyVision() {
  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-14">
              <Reveal>
                <span className="eyebrow">Vision & Mission</span>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
                  What drives us.
                </h2>
              </Reveal>
              <div className="mt-8 space-y-6">
                {pillars.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                      {p.desc}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="relative min-h-96 surface-2">
              <img
                src="/images/vision.png"
                alt="Vision"
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
