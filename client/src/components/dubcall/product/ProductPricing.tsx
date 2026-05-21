import { useState } from "react";

const pricingPlans = [
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
    ctaStyle: "border-black text-black hover:bg-black hover:text-white",
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
    ctaStyle: "border-black bg-black text-white hover:bg-white hover:text-black",
    popular: true,
  },
  {
    name: "Professional",
    subtitle: "For Enterprises",
    price: "Custom",
    period: "",
    description: "Best for large scale operations",
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
    ctaStyle: "border-black text-black hover:bg-black hover:text-white",
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
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="py-24 px-4 bg-white">
      <style>{`
        @keyframes fadeInUpPP {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 italic">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Start Free. Scale as You Grow.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Flat monthly platform fee + usage-based credits. No hidden costs.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-2 border-black rounded-full p-1 bg-white">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                billingCycle === "monthly"
                  ? "bg-black text-white"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                billingCycle === "yearly"
                  ? "bg-black text-white"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Yearly <span className="text-xs text-green-600 ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`border-2 border-black rounded-2xl p-8 transition-all duration-300 relative ${
                plan.popular
                  ? "shadow-[12px_14px_0px_0px_rgba(0,0,0,0.12)] scale-105 bg-white"
                  : "shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)] bg-white hover:-translate-y-1"
              }`}
              style={{
                animation: `fadeInUpPP 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 text-sm">{plan.period}</span>}
                </div>
                <p className="text-xs text-gray-600 mb-4">{plan.description}</p>
              </div>

              <div className="border-t border-black/20 pt-6 mb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="text-base font-bold mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-lg border-2 font-bold text-sm transition-all duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="text-center mb-16 border-t border-black/20 pt-12">
          <p className="text-lg font-semibold text-gray-800">
            You only pay more when your AI does more work.
          </p>
        </div>

        {/* Credit Packs Table */}
        <div className="border-2 border-black rounded-2xl overflow-hidden shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
          <div className="bg-black text-white">
            <div className="grid grid-cols-4 gap-4 p-6 font-bold text-sm">
              <div>Tier</div>
              <div>Credits</div>
              <div>Price</div>
              <div>Cost Per Credit</div>
            </div>
          </div>

          <div className="divide-y divide-black/20">
            {creditPacks.map((pack) => (
              <div
                key={pack.tier}
                className="grid grid-cols-4 gap-4 p-6 text-sm hover:bg-gray-50 transition-colors"
              >
                <div className="font-semibold">{pack.tier}</div>
                <div className="text-gray-700">{pack.credits.toLocaleString()}</div>
                <div className="font-bold">{pack.price}</div>
                <div className="text-gray-700 text-xs">{pack.costPerCredit} /min</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Volume discounts automatically applied as you scale.
        </p>
      </div>
    </section>
  );
}
