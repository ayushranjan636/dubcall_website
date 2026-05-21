import { Zap, Bot, ShieldCheck } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";
import { useCountUp } from "@/lib/useCountUp";

const stats = [
  { value: 1, suffix: "M+", label: "Calls Capacity", desc: "Scalable AI infrastructure for high-volume operations" },
  { value: 2, suffix: "×", label: "Lead Conversion", desc: "Instant follow-ups boost closure rates" },
  { value: 32, suffix: "+", label: "Languages", desc: "English, Hindi & regional dialects with code-switching" },
  { value: 85, suffix: "%+", label: "Task Automation", desc: "AI completes workflows — not just conversations" },
];

const features = [
  { Icon: Zap, title: "< 1 Day Setup", desc: "Go live without enterprise complexity" },
  { Icon: Bot, title: "Custom AI Agents", desc: "Built for BFSI, healthcare, real estate & more" },
  { Icon: ShieldCheck, title: "Enterprise Security", desc: "SOC 2 in progress · end-to-end encrypted calls" },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const { value, ref } = useCountUp({ end });
  return (
    <span ref={ref} className="text-4xl font-semibold tracking-tight sm:text-5xl">
      {value}
      <span className="text-fg-muted">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-t border-line bg-bg py-24" id="product">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent dc-pulse" />
              Trusted · Live · Delivering
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl">
              Built for scale.
              <br />
              <span className="text-fg-muted">Designed for action.</span>
            </h2>
            <p className="mt-3 text-fg-muted">
              Proven in production for support, lead generation, and sales motions.
            </p>

            <StaggerGroup className="mt-10 flex flex-col gap-3">
              {features.map(({ Icon, title, desc }) => (
                <StaggerItem
                  key={title}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-fg/20"
                >
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-line bg-bg transition-colors group-hover:border-fg/30">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="mt-0.5 text-xs text-fg-muted">{desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>

          <StaggerGroup className="grid grid-cols-2 gap-3" step={0.08}>
            {stats.map((s, i) => (
              <StaggerItem
                key={s.label}
                className={`group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all hover:border-fg/20 hover:shadow-soft ${
                  i % 3 === 0 ? "sm:col-span-1" : ""
                }`}
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CountUp end={s.value} suffix={s.suffix} />
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-fg-muted">{s.desc}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
