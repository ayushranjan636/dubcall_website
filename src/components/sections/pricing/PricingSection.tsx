import { useState } from "react";
import { Check, Sparkles, ExternalLink } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";
import { useTalkToUs } from "@/lib/talk-to-us";
import { CONSOLE_URL } from "@/lib/links";
import { cn } from "@/lib/cn";

const plans = [
  {
    name: "Free",
    free: true,
    price: { monthly: 0, annual: 0 },
    usdHint: "",
    description: "Try DubCall risk-free",
    features: [
      "10 plan credits per month",
      "1 prebuilt agent",
      "Browser-based testing only",
      "Community support",
    ],
    popular: false,
    cta: "Start free",
  },
  {
    name: "Starter",
    price: { monthly: 2000, annual: 1600 },
    usdHint: "~$20",
    description: "For solo founders & SMBs",
    features: [
      "200 plan credits per month",
      "10 custom agents",
      "5 SIP trunk providers",
      "Knowledge base 200 MB",
      "Email support, < 24 h SLA",
    ],
    popular: false,
    cta: "Subscribe",
  },
  {
    name: "Pro",
    price: { monthly: 5000, annual: 4000 },
    usdHint: "~$49",
    description: "For growing teams running live ops",
    features: [
      "600 plan credits per month",
      "30 custom agents",
      "15 SIP trunk providers",
      "Knowledge base 1 GB",
      "Priority chat support",
      "Call recordings & analytics export",
    ],
    popular: true,
    cta: "Subscribe",
  },
  {
    name: "Scale",
    price: { monthly: 10000, annual: 8000 },
    usdHint: "~$99",
    description: "For teams scaling outbound ops",
    features: [
      "2000 plan credits per month",
      "100 custom agents",
      "50 SIP trunk providers",
      "Knowledge base 5 GB",
      "Dedicated CSM",
      "SLA-backed uptime",
      "SSO (Google / Microsoft)",
    ],
    popular: false,
    cta: "Subscribe",
  },
];

const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function PricingSection() {
  const [cycle, setCycle] = useState<"monthly" | "annual">("monthly");
  const { open: openTalkToUs } = useTalkToUs();

  return (
    <section className="relative isolate overflow-hidden bg-bg py-24" id="pricing">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px] dc-mesh-blob-1" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">
            <Sparkles size={12} className="text-accent" />
            Pricing
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            Pricing that <span className="gradient-text">scales</span> with you.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-fg-muted">
            Start free. Upgrade only when your AI agents are taking real
            calls. Cancel any time.
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
                {c === "annual" && (
                  <span className="ml-1 text-[10px] text-success">-20%</span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                  {plan.free ? (
                    <span className="text-4xl font-semibold tracking-tight">Free</span>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold tracking-tight">
                        {formatINR(plan.price[cycle])}
                      </span>
                      <span className="text-sm text-fg-muted">
                        {cycle === "annual" ? "/mo billed annually" : "/mo"}
                      </span>
                      {plan.usdHint && cycle === "monthly" && (
                        <span className="text-xs text-fg-subtle">({plan.usdHint})</span>
                      )}
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
              <a
                href={CONSOLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-7 inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-semibold transition-all",
                  plan.popular
                    ? "bg-fg text-bg hover:-translate-y-0.5"
                    : "border border-line text-fg hover:bg-fg/5"
                )}
              >
                {plan.free
                  ? plan.cta
                  : `Subscribe — ${formatINR(plan.price[cycle])}/mo`}{" "}
                <ExternalLink size={12} />
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12 text-center text-sm text-fg-muted">
          Need something custom?{" "}
          <button
            type="button"
            onClick={openTalkToUs}
            className="font-semibold text-fg underline underline-offset-2 hover:text-fg"
          >
            Contact us
          </button>
        </Reveal>
      </div>
    </section>
  );
}
