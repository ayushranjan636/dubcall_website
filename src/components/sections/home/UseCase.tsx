import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Stethoscope,
  Home,
  Landmark,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/lib/motion";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

const industries = [
  {
    id: "healthcare",
    Icon: Stethoscope,
    label: "Healthcare",
    fullName: "Healthcare & Medical Services",
    image: "/images/healthcare.jpg",
    tagline: "From triage to follow-ups, automated.",
    stats: [
      { v: "92%", l: "Show-up rate" },
      { v: "24/7", l: "Triage" },
      { v: "8min", l: "Avg call" },
    ],
    benefits: [
      "Automated appointment reminders & scheduling",
      "Patient follow-up calls and consultations",
      "Insurance eligibility verification",
      "Prescription refill requests",
      "24/7 symptom assessment for triage",
    ],
  },
  {
    id: "realestate",
    Icon: Home,
    label: "Real Estate",
    fullName: "Real Estate & Property Management",
    image: "/images/Real-Estate.jpg",
    tagline: "Every lead, qualified within minutes.",
    stats: [
      { v: "2.4×", l: "Lead conv." },
      { v: "<5min", l: "Response" },
      { v: "100%", l: "Reach rate" },
    ],
    benefits: [
      "Lead qualification and property inquiries",
      "Showing reminders and confirmations",
      "Tenant communication and support",
      "Property maintenance requests",
      "Follow-up calls for abandoned leads",
    ],
  },
  {
    id: "finance",
    Icon: Landmark,
    label: "Finance",
    fullName: "Finance & Banking",
    image: "/images/finance.png",
    tagline: "Compliant outreach at enterprise scale.",
    stats: [
      { v: "3.1×", l: "Collections" },
      { v: "99.9%", l: "Uptime" },
      { v: "SOC 2", l: "Compliant" },
    ],
    benefits: [
      "Loan application follow-ups",
      "Payment reminders and collection",
      "Credit card activation calls",
      "Fraud alert notifications",
      "Customer support for account queries",
    ],
  },
  {
    id: "ecommerce",
    Icon: ShoppingBag,
    label: "E-commerce",
    fullName: "E-commerce & Retail",
    image: "/images/ecommerce.png",
    tagline: "Recover carts. Delight customers.",
    stats: [
      { v: "+38%", l: "Cart recovery" },
      { v: "4.9★", l: "CSAT" },
      { v: "<300ms", l: "Latency" },
    ],
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
  const reduce = useReducedMotion();
  const current = industries[active];

  return (
    <section className="relative isolate overflow-hidden bg-bg py-24" id="use-cases">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px] dc-mesh-blob-1" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <span className="eyebrow">Use cases</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Built for every industry.
          </h2>
          <p className="mt-4 text-fg-muted">
            Domain-tuned agents that already speak your business — from triage
            to collections to cart recovery.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]">
          {/* Left: vertical tabs */}
          <div className="flex flex-col gap-2">
            {industries.map((ind, i) => {
              const isActive = active === i;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex-1 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 ease-apple",
                    isActive
                      ? "border-fg/20 bg-surface shadow-soft"
                      : "border-line bg-surface/40 hover:border-fg/15 hover:bg-surface"
                  )}
                >
                  {isActive && !reduce && (
                    <motion.span
                      layoutId="usecase-bar"
                      className="absolute inset-y-3 left-0 w-1 rounded-full bg-fg"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    />
                  )}
                  <div className="flex items-center gap-3 pl-3">
                    <div
                      className={cn(
                        "grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border transition-all duration-500",
                        isActive
                          ? "border-fg/20 bg-fg text-bg"
                          : "border-line text-fg-muted group-hover:text-fg"
                      )}
                    >
                      <ind.Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{ind.label}</div>
                      <div className="mt-0.5 truncate text-[11px] text-fg-subtle">
                        {ind.fullName}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Progress meter */}
            <div className="mt-1 px-1">
              <div className="flex items-center gap-1">
                {industries.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to ${industries[i].label}`}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-all duration-500 ease-apple",
                      active === i ? "bg-fg" : "bg-line"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: spotlight */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="card flex h-full flex-col overflow-hidden"
              >
                {/* Hero image with overlay */}
                <div className="relative aspect-[21/9] w-full overflow-hidden">
                  <motion.img
                    key={`img-${current.id}`}
                    initial={reduce ? false : { scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: EASE }}
                    src={current.image}
                    alt={current.label}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* Color wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fg/40 via-fg/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

                  {/* Floating chip — top-left */}
                  <motion.div
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                    className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-semibold"
                  >
                    <current.Icon size={12} />
                    {current.label}
                  </motion.div>

                  {/* Tagline + name */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <motion.h3
                      key={`t-${current.id}`}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                      className="text-xl font-semibold tracking-tight sm:text-2xl"
                    >
                      {current.tagline}
                    </motion.h3>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 border-y border-line">
                  {current.stats.map((s, i) => (
                    <motion.div
                      key={`${current.id}-stat-${i}`}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.07, ease: EASE }}
                      className={cn(
                        "px-4 py-3.5 text-center",
                        i < 2 && "border-r border-line"
                      )}
                    >
                      <div className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {s.v}
                      </div>
                      <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                        {s.l}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                      What the agent handles
                    </h4>
                    <span className="font-mono text-[11px] text-fg-subtle">
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(industries.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="grid flex-1 gap-2 sm:grid-cols-2">
                    {current.benefits.map((b, i) => (
                      <motion.li
                        key={`${current.id}-b-${i}`}
                        initial={reduce ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.3 + i * 0.05,
                          ease: EASE,
                        }}
                        className="group flex items-start gap-2 rounded-lg border border-line bg-surface/60 px-2.5 py-2 text-[13px] leading-snug text-fg-muted transition-colors hover:border-fg/15 hover:bg-surface hover:text-fg"
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 flex-shrink-0 text-accent"
                          strokeWidth={2.2}
                        />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
