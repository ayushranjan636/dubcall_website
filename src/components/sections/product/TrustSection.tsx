import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const items = [
  "This reduces friction massively.",
  "No credit card required for free trial",
  "30-day money-back guarantee",
  "Cancel anytime",
  "Data secured & encrypted",
];

export default function TrustSection() {
  return (
    <section className="bg-bg py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h3 className="text-center text-xl font-semibold tracking-tight">
            Why teams trust DubCall
          </h3>
        </Reveal>
        <StaggerGroup className="mt-8 space-y-3" step={0.05}>
          {items.map((t) => (
            <StaggerItem
              key={t}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-3.5 transition-colors hover:border-fg/20"
            >
              <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-success/15 text-success">
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-sm font-medium">{t}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
