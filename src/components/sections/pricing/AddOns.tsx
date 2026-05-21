import {
  Video,
  Phone,
  Headphones,
  BarChart4,
  Cpu,
  Sparkles,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const addOns = [
  { Icon: Video, title: "Videos", description: "Custom video content for your campaigns" },
  { Icon: Phone, title: "Dedicated Numbers", description: "Region-specific phone numbers" },
  { Icon: Headphones, title: "Dedicated Support", description: "Named support contact per region" },
  { Icon: BarChart4, title: "Advanced Analytics", description: "Deep insights into call performance" },
  { Icon: Cpu, title: "Custom LLMs", description: "Fine-tuned AI models for your industry" },
  { Icon: Sparkles, title: "White Label", description: "Full white-label solution available" },
];

export default function AddOns() {
  return (
    <section className="border-t border-line bg-surface-2 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Optional add-ons
          </h2>
          <p className="mt-3 text-sm text-fg-muted">
            Extend your plan with what you need.
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map(({ Icon, title, description }) => (
            <StaggerItem
              key={title}
              className="group rounded-2xl border border-line bg-bg p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl border border-line transition-colors group-hover:border-fg/30 group-hover:bg-fg group-hover:text-bg">
                <Icon size={16} />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-fg-muted">{description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
