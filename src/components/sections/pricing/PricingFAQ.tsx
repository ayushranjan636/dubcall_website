import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/lib/motion";

const faqs = [
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
          {faqs.map((faq, i) => {
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-line px-6 py-4 text-sm leading-relaxed text-fg-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
