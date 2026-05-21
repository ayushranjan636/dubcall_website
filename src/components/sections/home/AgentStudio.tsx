import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronRight, Wand2, Target, Plug, GitBranch, Rocket } from "lucide-react";
import { Reveal } from "@/lib/motion";
import { cn } from "@/lib/cn";

const steps = [
  {
    Icon: Wand2,
    number: "01",
    title: "Create the agent",
    description: "Pick voice, language, persona, and tone in a guided wizard.",
  },
  {
    Icon: Target,
    number: "02",
    title: "Define goals & behavior",
    description: "Qualify leads, book meetings, resolve tickets, or run collections.",
  },
  {
    Icon: Plug,
    number: "03",
    title: "Connect integrations",
    description: "CRM, calendar, helpdesk, any REST API — synced in real time.",
  },
  {
    Icon: GitBranch,
    number: "04",
    title: "Design workflows",
    description: "Visual editor for flows, fallbacks, escalations & follow-ups.",
  },
  {
    Icon: Rocket,
    number: "05",
    title: "Launch & monitor",
    description: "Deploy instantly. Live transcripts, sentiment & retraining loop.",
  },
];

export default function AgentStudio() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 4500);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section className="bg-surface-2 py-24" id="agent-studio">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <span className="eyebrow">Agent Studio</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Build. Automate. Scale.
          </h2>
          <p className="mt-4 max-w-xl text-fg-muted">
            The fastest way to ship voice agents that take real business actions —
            no engineering required.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: step list */}
          <div className="flex flex-col gap-2">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={step.number}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 ease-apple",
                    isActive
                      ? "border-fg/20 bg-bg shadow-soft"
                      : "border-line bg-surface hover:border-fg/15"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="studio-bar"
                      className="absolute inset-y-2 left-0 w-1 rounded-full bg-fg"
                    />
                  )}
                  <div className="flex items-center gap-3 pl-3">
                    <div
                      className={cn(
                        "grid h-9 w-9 place-items-center rounded-lg border transition-all",
                        isActive
                          ? "border-fg/20 bg-fg text-bg"
                          : "border-line text-fg-muted group-hover:text-fg"
                      )}
                    >
                      <step.Icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[10px] text-fg-subtle">
                          {step.number}
                        </span>
                        <span className="text-sm font-semibold">{step.title}</span>
                      </div>
                    </div>
                    <ChevronRight
                      size={16}
                      className={cn(
                        "text-fg-subtle transition-transform duration-300",
                        isActive ? "translate-x-1 text-fg" : ""
                      )}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-15 pt-2 text-sm text-fg-muted"
                      >
                        <span className="ml-15 block pl-1">{step.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Right: preview canvas */}
          <div className="relative">
            <div className="card overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
                <span className="ml-3 font-mono text-[10px] text-fg-subtle">
                  studio.dubcall.ai
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-[10px] text-fg-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-success dc-pulse" />
                  Live
                </span>
              </div>

              {/* Canvas content (different per step) */}
              <div className="relative h-[360px] overflow-hidden bg-surface">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center"
                  >
                    {/* Step 1 — voice picker */}
                    {active === 0 && (
                      <>
                        <div className="grid grid-cols-3 gap-3">
                          {["Aria", "Kai", "Noor"].map((n, i) => (
                            <div
                              key={n}
                              className={cn(
                                "flex flex-col items-center gap-2 rounded-2xl border p-4",
                                i === 0 ? "border-fg/30 bg-bg" : "border-line"
                              )}
                            >
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-fg" />
                              <span className="text-xs font-semibold">{n}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-fg-muted">Pick a voice persona</p>
                      </>
                    )}
                    {/* Step 2 — goals */}
                    {active === 1 && (
                      <div className="flex flex-wrap justify-center gap-2">
                        {["Qualify leads", "Book meetings", "Resolve tickets", "Upsell", "Follow up"].map(
                          (g, i) => (
                            <span
                              key={g}
                              className={cn(
                                "rounded-full border px-3 py-1.5 text-xs font-medium",
                                i < 3 ? "border-fg/20 bg-fg text-bg" : "border-line text-fg-muted"
                              )}
                            >
                              {g}
                            </span>
                          )
                        )}
                      </div>
                    )}
                    {/* Step 3 — integrations */}
                    {active === 2 && (
                      <div className="grid grid-cols-3 gap-4">
                        {["CRM", "Calendar", "Slack", "Email", "Webhook", "REST"].map((c) => (
                          <div
                            key={c}
                            className="grid h-16 w-20 place-items-center rounded-xl border border-line bg-bg text-xs font-medium"
                          >
                            {c}
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Step 4 — flow */}
                    {active === 3 && (
                      <svg viewBox="0 0 320 180" className="w-full max-w-sm">
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="6"
                            markerHeight="6"
                            refX="5"
                            refY="3"
                            orient="auto"
                          >
                            <path d="M0,0 L0,6 L6,3 z" fill="rgb(var(--fg))" />
                          </marker>
                        </defs>
                        {[
                          { x: 20, y: 70, l: "Start" },
                          { x: 130, y: 30, l: "Qualify" },
                          { x: 130, y: 110, l: "FAQ" },
                          { x: 240, y: 70, l: "Book" },
                        ].map((n) => (
                          <g key={n.l}>
                            <rect
                              x={n.x}
                              y={n.y}
                              width="70"
                              height="38"
                              rx="10"
                              fill="rgb(var(--bg))"
                              stroke="rgb(var(--fg) / 0.2)"
                            />
                            <text
                              x={n.x + 35}
                              y={n.y + 23}
                              textAnchor="middle"
                              className="fill-fg"
                              style={{ font: "600 11px Inter, sans-serif" }}
                            >
                              {n.l}
                            </text>
                          </g>
                        ))}
                        <motion.path
                          d="M 90 89 Q 110 50 130 49"
                          fill="none"
                          stroke="rgb(var(--fg) / 0.5)"
                          strokeWidth="1.5"
                          markerEnd="url(#arrowhead)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        <motion.path
                          d="M 90 89 Q 110 130 130 129"
                          fill="none"
                          stroke="rgb(var(--fg) / 0.5)"
                          strokeWidth="1.5"
                          markerEnd="url(#arrowhead)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <motion.path
                          d="M 200 49 Q 220 70 240 89"
                          fill="none"
                          stroke="rgb(var(--fg) / 0.5)"
                          strokeWidth="1.5"
                          markerEnd="url(#arrowhead)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        <motion.path
                          d="M 200 129 Q 220 110 240 89"
                          fill="none"
                          stroke="rgb(var(--fg) / 0.5)"
                          strokeWidth="1.5"
                          markerEnd="url(#arrowhead)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                      </svg>
                    )}
                    {/* Step 5 — dashboard */}
                    {active === 4 && (
                      <div className="grid w-full max-w-sm grid-cols-3 gap-3">
                        {[
                          { l: "Calls", v: "847" },
                          { l: "Resolved", v: "92%" },
                          { l: "Avg", v: "1.4m" },
                        ].map((m) => (
                          <div
                            key={m.l}
                            className="rounded-xl border border-line bg-bg p-3 text-left"
                          >
                            <div className="text-[10px] uppercase tracking-wider text-fg-subtle">
                              {m.l}
                            </div>
                            <div className="mt-1 text-xl font-semibold tracking-tight">
                              {m.v}
                            </div>
                          </div>
                        ))}
                        <div className="col-span-3 flex h-16 items-end gap-1.5 rounded-xl border border-line bg-bg p-3">
                          {[40, 60, 45, 75, 90, 65, 80, 95, 70, 88].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{
                                duration: 0.6,
                                delay: i * 0.04,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="flex-1 rounded-sm bg-fg/80"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
