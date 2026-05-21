import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";
import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Starter",
    price: { monthly: 99, annual: 79 },
    description: "Perfect for small businesses getting started",
    features: [
      "1,000 minutes/month",
      "5 voice agents",
      "Basic integrations",
      "Email support",
      "Call analytics",
      "Multi-language support",
    ],
    popular: false,
    cta: "Start free trial",
  },
  {
    name: "Professional",
    price: { monthly: 299, annual: 239 },
    description: "Best for growing teams and businesses",
    features: [
      "5,000 minutes/month",
      "20 voice agents",
      "Advanced integrations",
      "Priority support",
      "Advanced analytics",
      "Custom voice training",
      "API access",
      "Team collaboration",
    ],
    popular: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: { monthly: 0, annual: 0 },
    custom: true,
    description: "For large-scale operations",
    features: [
      "Unlimited minutes",
      "Unlimited agents",
      "Custom integrations",
      "24/7 dedicated support",
      "White-label options",
      "SLA guarantee",
      "Custom deployment",
      "Account manager",
    ],
    popular: false,
    cta: "Contact sales",
  },
];

export default function PricingSection() {
  const [cycle, setCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="bg-bg py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-6xl">
            Pricing that scales with you.
          </h2>
          <p className="mt-4 text-fg-muted">
            Start free. Upgrade when you're ready.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex justify-center" delay={0.1}>
          <div className="inline-flex rounded-full border border-line bg-surface p-1">
            {(["monthly", "annual"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={cn(
                  "rounded-full px-5 py-1.5 text-xs font-semibold capitalize transition-colors",
                  cycle === c ? "bg-fg text-bg" : "text-fg-muted hover:text-fg"
                )}
              >
                {c}
                {c === "annual" && <span className="ml-1 text-[10px] text-success">-20%</span>}
              </button>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
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
                  Most popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1.5 text-xs text-fg-muted">{plan.description}</p>
                <div className="mt-6 flex items-baseline justify-center gap-1">
                  {plan.custom ? (
                    <span className="text-4xl font-semibold tracking-tight">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold tracking-tight">
                        ${plan.price[cycle]}
                      </span>
                      <span className="text-sm text-fg-muted">/month</span>
                    </>
                  )}
                </div>
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

        <Reveal className="mt-12 text-center text-sm text-fg-muted">
          Need something custom?{" "}
          <a href="/contact" className="font-semibold text-fg underline">
            Contact us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
