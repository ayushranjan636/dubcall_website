import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/lib/motion";
import { cn } from "@/lib/cn";

const industries = [
  {
    label: "Healthcare",
    fullName: "Healthcare & Medical Services",
    image: "/images/healthcare.jpg",
    benefits: [
      "Automated appointment reminders & scheduling",
      "Patient follow-up calls and consultations",
      "Insurance eligibility verification",
      "Prescription refill requests",
      "24/7 symptom assessment for triage",
    ],
  },
  {
    label: "Real Estate",
    fullName: "Real Estate & Property Management",
    image: "/images/Real-Estate.jpg",
    benefits: [
      "Lead qualification and property inquiries",
      "Showing reminders and confirmations",
      "Tenant communication and support",
      "Property maintenance requests",
      "Follow-up calls for abandoned leads",
    ],
  },
  {
    label: "Finance",
    fullName: "Finance & Banking",
    image: "/images/finance.png",
    benefits: [
      "Loan application follow-ups",
      "Payment reminders and collection",
      "Credit card activation calls",
      "Fraud alert notifications",
      "Customer support for account queries",
    ],
  },
  {
    label: "E-commerce",
    fullName: "E-commerce & Retail",
    image: "/images/ecommerce.png",
    benefits: [
      "Order status updates and tracking",
      "Return & refund processing",
      "Customer feedback collection",
      "Upsell and cross-sell opportunities",
      "Abandoned cart recovery calls",
    ],
  },
];

export default function UseCase() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + industries.length) % industries.length);
  const next = () => setActive((a) => (a + 1) % industries.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = industries[active];

  return (
    <section className="bg-bg py-24" id="use-cases">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 text-center">
          <span className="eyebrow">Use cases</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Built for every industry
          </h2>
          <p className="mt-4 text-fg-muted">
            Domain-tuned agents that already speak your business.
          </p>
        </Reveal>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {industries.map((ind, i) => (
            <button
              key={ind.label}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
                active === i
                  ? "bg-fg text-bg"
                  : "border border-line text-fg-muted hover:text-fg"
              )}
            >
              {ind.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="surface-2 flex flex-col items-center justify-center gap-5 p-10">
                  <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-line shadow-soft">
                    <img
                      src={current.image}
                      alt={current.label}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-center text-sm font-semibold">{current.fullName}</p>
                </div>
                <div className="p-10">
                  <h3 className="mb-6 text-lg font-semibold">Key benefits</h3>
                  <ul className="flex flex-col gap-3.5">
                    {current.benefits.map((b, i) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="flex items-start gap-2.5 text-sm text-fg-muted"
                      >
                        <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-success/15 text-success">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="previous"
            className="absolute -left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg text-fg shadow-soft transition-colors hover:bg-fg hover:text-bg sm:-left-5"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="next"
            className="absolute -right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg text-fg shadow-soft transition-colors hover:bg-fg hover:text-bg sm:-right-5"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
