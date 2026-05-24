import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { useTalkToUs } from "@/lib/talk-to-us";

const faqs = [
  {
    question: "How fast can I deploy a voice agent?",
    answer:
      "Most teams ship their first agent in under a day using Agent Studio — pick a voice, define goals, connect integrations, and go live. No code required.",
  },
  {
    question: "What languages does DubCall support?",
    answer:
      "32+ languages including English, Hindi, and regional Indian dialects. Agents support real-time code-switching mid-conversation.",
  },
  {
    question: "How natural do the conversations sound?",
    answer:
      "Sub-second latency with emotion, interruption handling, and contextual memory. Most callers can't tell they're speaking with an AI.",
  },
  {
    question: "Can the agent take real actions, not just talk?",
    answer:
      "Yes — DubCall agents update your CRM, book calendar slots, send emails or SMS, trigger Zapier/Make flows, and call any REST API in real time.",
  },
  {
    question: "Is my data secure?",
    answer:
      "All calls are end-to-end encrypted and we're SOC 2 compliance in progress. Your data is never used to train shared models — it stays in your tenant.",
  },
  {
    question: "Does DubCall integrate with my existing stack?",
    answer:
      "Out-of-the-box connectors for HubSpot, Salesforce, Pipedrive, Zoho, Google/Outlook Calendar, Slack, Gmail, and Stripe — plus a universal REST + Webhook bridge.",
  },
];

export default function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { open: openTalkToUs } = useTalkToUs();

  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Product questions, answered.
          </h2>
          <p className="mt-3 text-fg-muted">
            Everything about how DubCall works.
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
          <button onClick={openTalkToUs} className="btn-secondary mt-5 inline-flex">
            Contact support
          </button>
        </Reveal>
      </div>
    </section>
  );
}
