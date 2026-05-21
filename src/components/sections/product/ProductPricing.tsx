import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";
import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter",
    subtitle: "For Small Teams",
    price: "$999",
    period: "/month",
    description: "Best for startups & pilots",
    features: [
      "2 AI Voice Agents",
      "1 Campaign",
      "500 Contacts",
      "100 Included Credits",
      "1 Integration",
      "1 Knowledge Base",
      "Email Support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Most Popular",
    price: "$2,999",
    period: "/month",
    description: "For growing teams",
    features: [
      "10 AI Voice Agents",
      "5 Campaigns",
      "5,000 Contacts",
      "500 Included Credits",
      "5 Integrations",
      "3 Knowledge Bases",
      "Priority Support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Professional",
    subtitle: "For Enterprises",
    price: "Custom",
    period: "",
    description: "Best for large-scale operations",
    features: [
      "Unlimited AI Voice Agents",
      "Unlimited Campaigns",
      "Unlimited Contacts",
      "2,000 Included Credits",
      "Unlimited Integrations",
      "Unlimited Knowledge Bases",
      "24/7 Dedicated Support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const creditPacks = [
  { tier: "Starter", credits: 100, price: "$999", costPerCredit: "$9.99" },
  { tier: "Business", credits: 1000, price: "$7,999", costPerCredit: "$7.99" },
  { tier: "Professional", credits: 3500, price: "$24,999", costPerCredit: "$7.14" },
  { tier: "Enterprise", credits: 10000, price: "$79,999", costPerCredit: "$7.00" },
];

export default function ProductPricing() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-fg-muted">
            Flat monthly platform fee + usage-based credits. No hidden costs.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <div className="inline-flex rounded-full border border-line bg-surface p-1">
            {(["monthly", "yearly"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={cn(
                  "rounded-full px-5 py-1.5 text-xs font-semibold capitalize transition-colors",
                  cycle === c ? "bg-fg text-bg" : "text-fg-muted hover:text-fg"
                )}
              >
                {c}
                {c === "yearly" && (
                  <span className="ml-1 text-[10px] text-success">save 20%</span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem
              key={plan.name}
              className={cn(
                "card relative p-8 transition-all duration-500 ease-apple hover:-translate-y-1",
                plan.popular ? "border-fg/40 shadow-glow" : ""
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-fg px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-bg">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-xs text-fg-subtle">{plan.subtitle}</p>
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-sm text-fg-muted">{plan.period}</span>}
                </div>
                <p className="mt-2 text-xs text-fg-muted">{plan.description}</p>
              </div>
              <ul className="mt-7 space-y-3 border-t border-line pt-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-success/15 text-success">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <span className="text-fg-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "mt-7 w-full rounded-full py-2.5 text-sm font-semibold transition-all",
                  plan.popular
                    ? "bg-fg text-bg hover:-translate-y-0.5"
                    : "border border-line text-fg hover:bg-fg/5"
                )}
              >
                {plan.cta}
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-20 border-t border-line pt-12 text-center">
          <p className="text-base font-medium">
            You only pay more when your AI does more work.
          </p>
        </Reveal>

        <Reveal className="card mt-10 overflow-hidden">
          <div className="grid grid-cols-4 gap-4 border-b border-line bg-fg p-5 text-xs font-bold uppercase tracking-wider text-bg">
            <div>Tier</div>
            <div>Credits</div>
            <div>Price</div>
            <div>Cost / credit</div>
          </div>
          {creditPacks.map((p) => (
            <div
              key={p.tier}
              className="grid grid-cols-4 items-center gap-4 border-b border-line px-5 py-4 text-sm last:border-b-0 transition-colors hover:bg-surface-2"
            >
              <div className="font-semibold">{p.tier}</div>
              <div className="text-fg-muted">{p.credits.toLocaleString()}</div>
              <div className="font-semibold">{p.price}</div>
              <div className="text-xs text-fg-muted">{p.costPerCredit} /min</div>
            </div>
          ))}
        </Reveal>

        <p className="mt-6 text-center text-xs text-fg-subtle">
          Volume discounts automatically applied as you scale.
        </p>
      </div>
    </section>
  );
}
