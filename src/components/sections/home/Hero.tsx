import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Headphones, Target, TrendingUp, ExternalLink } from "lucide-react";
import { consoleLinkProps } from "@/lib/links";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

type Pillar = "support" | "leads" | "sales";

const SCRIPTS: Record<
  Pillar,
  { label: string; icon: typeof Headphones; lines: { who: "agent" | "caller"; text: string }[] }
> = {
  support: {
    label: "Support Agent",
    icon: Headphones,
    lines: [
      { who: "agent", text: "Hi! This is Aria from DubCall Support. How can I help today?" },
      { who: "caller", text: "My subscription wasn't upgraded after payment." },
      { who: "agent", text: "I see the charge — refreshing your plan now. ✓ Done." },
      { who: "agent", text: "Anything else I can resolve for you?" },
    ],
  },
  leads: {
    label: "Lead Agent",
    icon: Target,
    lines: [
      { who: "agent", text: "Hey Priya, thanks for downloading our guide! Got 2 minutes?" },
      { who: "caller", text: "Sure, what's this about?" },
      { who: "agent", text: "Quick qualification — are you exploring AI calling for support or sales?" },
      { who: "agent", text: "Great. Booking a 15-min slot with Rohan tomorrow at 3pm. ✓" },
    ],
  },
  sales: {
    label: "Sales Agent",
    icon: TrendingUp,
    lines: [
      { who: "agent", text: "Hi Marco, following up on your trial — any blockers?" },
      { who: "caller", text: "Just wondering about pricing for 50 seats." },
      { who: "agent", text: "Sending a tailored quote now and looping in your AE. ✓" },
      { who: "agent", text: "Want me to schedule the contract review call?" },
    ],
  },
};

const PILLARS: Pillar[] = ["support", "leads", "sales"];

export default function Hero() {
  const reduce = useReducedMotion();
  const [pillar, setPillar] = useState<Pillar>("support");
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (reduce) {
      setVisible(SCRIPTS[pillar].lines.length);
      return;
    }
    setVisible(0);
    const t = setInterval(() => {
      setVisible((v) => {
        if (v >= SCRIPTS[pillar].lines.length) {
          clearInterval(t);
          return v;
        }
        return v + 1;
      });
    }, 1100);
    return () => clearInterval(t);
  }, [pillar, reduce]);

  // Auto-rotate pillars
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setPillar((p) => PILLARS[(PILLARS.indexOf(p) + 1) % PILLARS.length]);
    }, 9000);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section className="relative isolate overflow-hidden bg-bg pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Animated gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px] dc-mesh-blob-1" />
        <div className="absolute right-[-10%] top-[20%] -z-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] dc-mesh-blob-2" />
        <div className="absolute left-[-10%] bottom-[10%] -z-10 h-[420px] w-[420px] rounded-full bg-fg/[0.04] blur-[120px] dc-mesh-blob-1" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--fg)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--fg)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="eyebrow mx-auto lg:mx-0"
            >
              <Sparkles size={12} className="text-accent" />
              Agentic AI · Live & Production-Ready
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Voice agents that{" "}
              <span className="gradient-text">think,</span>
              <br className="hidden sm:block" /> talk, and take action.
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted lg:mx-0"
            >
              DubCall builds agentic AI for{" "}
              <span className="text-fg">Support, Leads & Sales</span> — calling,
              qualifying, resolving, and closing 24×7 at enterprise scale.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a {...consoleLinkProps()} className="btn-primary">
                Get a live demo
                <ExternalLink size={14} />
              </a>
              <a {...consoleLinkProps()} className="btn-secondary">
                Explore the platform
                <ExternalLink size={14} />
              </a>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-fg-subtle lg:justify-start"
            >
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success dc-pulse" />
                320ms avg response
              </span>
              <span>·</span>
              <span>32+ languages</span>
              <span>·</span>
              <span>SOC 2 in progress</span>
              <span>·</span>
              <span>99.9% uptime</span>
            </motion.div>
          </div>

          {/* Live Call Simulator */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Glow */}
            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-accent/15 blur-3xl" />

            <div className="card overflow-hidden p-1.5 shadow-glow">
              <div className="rounded-[18px] surface p-5">
                {/* Pillar tabs */}
                <div className="mb-5 flex items-center justify-between gap-2 rounded-full bg-fg/5 p-1">
                  {PILLARS.map((p) => {
                    const Icon = SCRIPTS[p].icon;
                    const active = pillar === p;
                    return (
                      <button
                        key={p}
                        onClick={() => setPillar(p)}
                        className={cn(
                          "relative flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors",
                          active ? "text-bg" : "text-fg-muted hover:text-fg"
                        )}
                      >
                        {active && (
                          <motion.span
                            layoutId="pillar-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-fg"
                            transition={{ type: "spring", stiffness: 320, damping: 28 }}
                          />
                        )}
                        <Icon size={12} />
                        {p}
                      </button>
                    );
                  })}
                </div>

                {/* Call header */}
                <div className="mb-4 flex items-center justify-between rounded-xl border border-line px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-fg" />
                      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-success dc-pulse" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-semibold">DubCall · {SCRIPTS[pillar].label}</div>
                      <div className="text-[10px] text-fg-subtle">Live · 00:42</div>
                    </div>
                  </div>
                  {/* Mini waveform */}
                  <div className="flex items-end gap-[3px]">
                    {[6, 10, 14, 8, 12, 16, 9].map((h, i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-full bg-fg/70 dc-bar"
                        style={{ height: h, animationDelay: `${i * 0.08}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Transcript */}
                <div className="space-y-2.5 min-h-[230px]">
                  {SCRIPTS[pillar].lines.slice(0, visible).map((line, i) => (
                    <motion.div
                      key={`${pillar}-${i}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className={cn(
                        "flex",
                        line.who === "agent" ? "justify-start" : "justify-end"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-snug",
                          line.who === "agent"
                            ? "bg-fg/5 text-fg"
                            : "bg-accent/15 text-fg"
                        )}
                      >
                        {line.text}
                      </div>
                    </motion.div>
                  ))}
                  {visible < SCRIPTS[pillar].lines.length && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex"
                    >
                      <div className="flex items-center gap-1 rounded-2xl bg-fg/5 px-3.5 py-2">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-fg/40 dc-pulse"
                            style={{ animationDelay: `${i * 0.18}s` }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Action chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["Update CRM", "Book meeting", "Send recap", "Create ticket"].map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-line bg-bg/40 px-2.5 py-1 text-[10px] font-medium text-fg-muted"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
