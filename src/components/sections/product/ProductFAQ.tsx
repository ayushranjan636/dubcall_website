import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/lib/motion";

const faqs = [
  {
    question: "Can I start with a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required.",
  },
  {
    question: "What are included credits and how do they work?",
    answer: "Included credits are part of your monthly plan. Each AI call uses credits based on duration and complexity.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes — upgrade or downgrade anytime. Changes are immediate and prorated.",
  },
  {
    question: "Do you offer custom plans?",
    answer: "Absolutely. For enterprise needs we offer custom plans. Contact sales to discuss.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "All major credit cards plus wire transfer / ACH for enterprise customers.",
  },
  {
    question: "Is there a setup fee or contract?",
    answer: "No setup fees. Monthly plans have no long-term contract.",
  },
];

export default function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Frequently asked
          </h2>
          <p className="mt-3 text-fg-muted">
            Everything you need to know about pricing and product.
          </p>
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

        <Reveal className="card mt-12 p-8 text-center">
          <h3 className="text-xl font-semibold">Still have questions?</h3>
          <p className="mt-2 text-sm text-fg-muted">
            We respond within 24 hours.
          </p>
          <a href="mailto:support@dubcall.com" className="btn-secondary mt-5 inline-flex">
            Contact support
          </a>
        </Reveal>
      </div>
    </section>
  );
}
