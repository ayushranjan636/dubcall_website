import { Reveal } from "@/lib/motion";

const creditPacks = [
  { tier: "Starter", credits: 100, price: "$999", costPerCredit: "$9.99" },
  { tier: "Business", credits: 1000, price: "$7,999", costPerCredit: "$7.99" },
  { tier: "Professional", credits: 3500, price: "$24,999", costPerCredit: "$7.14" },
  { tier: "Enterprise", credits: 10000, price: "$79,999", costPerCredit: "$7.00" },
];

export default function CreditPacks() {
  return (
    <section className="border-t border-line bg-bg py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Credits</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Pay only for what you use.
          </h2>
          <p className="mt-3 text-fg-muted">
            Buy credits in bulk. Save more as you scale.
          </p>
        </Reveal>

        <Reveal className="card mt-12 overflow-hidden">
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
