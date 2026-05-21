import { Ear, Brain, Zap, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const steps = [
  { Icon: Ear, number: 1, title: "Understand", description: "AI listens, detects intent, and responds naturally in 32+ languages." },
  { Icon: Brain, number: 2, title: "Decide", description: "Agent evaluates context, business rules, and customer data." },
  { Icon: Zap, number: 3, title: "Act", description: "Books appointments, updates CRM, sends messages, triggers workflows." },
];

const pipeline = [
  { Icon: Phone, label: "Customer Call" },
  { Icon: Brain, label: "AI Brain" },
  { Icon: Zap, label: "CRM Update" },
  { Icon: CheckCircle2, label: "Confirmation Sent" },
];

export default function ProductFlow() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="card p-10 md:p-14">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            From conversation to action — in seconds
          </h2>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(({ Icon, number, title, description }) => (
              <StaggerItem key={number} className="text-center">
                <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-bg">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">Step {number} — {title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 card p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 overflow-x-auto">
            {pipeline.map(({ Icon, label }, i) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1.5">
                  <Icon size={14} />
                  <span className="text-xs font-semibold">{label}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight size={14} className="text-fg-subtle" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-fg-subtle">
            All of this happens in seconds.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
