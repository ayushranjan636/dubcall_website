import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProductHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-bg px-6 py-24 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px] dc-mesh-blob-1" />
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

      <motion.span
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="eyebrow"
      >
        <Sparkles size={12} className="text-accent" />
        Product Overview
      </motion.span>

      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-7xl"
      >
        Voice agents that talk,{" "}
        <span className="gradient-text">think,</span> and take action.
      </motion.h1>

      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
        className="mt-6 max-w-xl text-fg-muted"
      >
        Build, deploy, and scale intelligent voice agents that automate calls,
        update systems, and execute real workflows — 24/7.
      </motion.p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
        className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Link href="/contact" className="btn-primary">
          Book a demo <ArrowRight size={16} />
        </Link>
        <Link href="/contact" className="btn-secondary">
          Try free
        </Link>
      </motion.div>
    </section>
  );
}
