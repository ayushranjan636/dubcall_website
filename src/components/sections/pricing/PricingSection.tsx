import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
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
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
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
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
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
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-24 px-4 bg-gray-50" id="pricing">
      <style>{`
        @keyframes fadeInUpPricing {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-white border-2 border-black/10 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingPeriod === "annual"
                  ? "bg-black text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Annual <span className="text-xs text-green-500 ml-1">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-4 border-black shadow-2xl scale-105"
                  : "border-2 border-black/10 shadow-lg"
              }`}
              style={{
                animation: `fadeInUpPricing 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-green-500 text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border-2 border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 mt-12">
          All plans include access to our core features. Need a custom solution?{" "}
          <a href="/contact" className="text-black font-semibold underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
