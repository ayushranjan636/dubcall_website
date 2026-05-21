import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const items = [
  "No credit card required for free trial",
  "30-day money-back guarantee",
  "Cancel anytime",
  "Data secured & encrypted",
  "SOC 2 compliance in progress",
];

export default function PricingTrust() {
  return (
    <section className="border-t border-line bg-bg py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Why teams trust DubCall
          </h2>
        </Reveal>
        <StaggerGroup
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          step={0.05}
        >
          {items.map((t) => (
            <StaggerItem
              key={t}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-fg/20"
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
