import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { useTalkToUs } from "@/lib/talk-to-us";

export const pricingFaqs = [
  {
    question: "How much does DubCall cost?",
    answer:
      "DubCall has a Free plan (10 credits/month) to try the platform. Paid plans are Starter at ₹2,000/month (~$20), Pro at ₹5,000/month (~$49), and Scale at ₹10,000/month (~$99). Annual billing saves 20%. Extra credits start at a ₹5/credit base rate, with discounts of up to 30% on larger packs.",
  },
  {
    question: "Can I start with a free trial?",
    answer:
      "Yes — every plan includes a 14-day free trial. No credit card required. You can explore all features and decide which plan works best.",
  },
  {
    question: "What are included credits and how do they work?",
    answer:
      "Each plan includes a monthly credit allowance. Calls consume credits based on duration and complexity. When you've used your allowance, additional calls are billed at your tier's per-credit rate.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes — upgrade or downgrade anytime. Changes take effect immediately and we prorate your billing.",
  },
  {
    question: "Do you offer custom pricing?",
    answer:
      "Absolutely. Enterprise customers get tailored pricing, dedicated support, white-label, and custom SLAs. Contact sales to discuss.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "All major credit cards (Visa, Mastercard, Amex). Wire transfer / ACH available for annual enterprise contracts.",
  },
  {
    question: "Is there a setup fee or long-term contract?",
    answer:
      "No setup fees. Monthly plans have no long-term commitment. Annual plans get a 20% discount.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { open: openTalkToUs } = useTalkToUs();

  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Pricing questions
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {pricingFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-2"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-line text-fg">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {/* Always mounted (animated open/closed) so FAQ text is crawlable and matches FAQPage JSON-LD */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <p className="border-t border-line px-6 py-4 text-sm leading-relaxed text-fg-muted">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        <Reveal className="card mt-12 p-8 text-center">
          <h3 className="text-xl font-semibold">Still curious about pricing?</h3>
          <p className="mt-2 text-sm text-fg-muted">
            Our team will craft a plan around your usage.
          </p>
          <button onClick={openTalkToUs} className="btn-secondary mt-5 inline-flex">
            Talk to sales
          </button>
        </Reveal>
      </div>
    </section>
  );
}
