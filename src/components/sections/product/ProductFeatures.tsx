import { Target, Repeat, Plug2, LineChart } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const features = [
  { Icon: Target, title: "Intelligent Routing", description: "Routes calls to the right agent, department, or system based on intent & context." },
  { Icon: Repeat, title: "Multi-turn Conversations", description: "Handles complex, multi-step flows with context retention." },
  { Icon: Plug2, title: "Deep Integrations", description: "Connects to CRM, calendar, payments, and custom APIs." },
  { Icon: LineChart, title: "Real-time Analytics", description: "Monitor call quality, success rates, and AI performance." },
];

export default function ProductFeatures() {
  return (
    <section className="border-t border-line bg-surface-2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Core Capabilities</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Core features
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, description }) => (
            <StaggerItem
              key={title}
              className="card group p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-line bg-bg transition-all group-hover:border-fg/30 group-hover:bg-fg group-hover:text-bg">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
