import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CompanyHero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate flex flex-col items-center justify-center overflow-hidden bg-bg px-6 py-32 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px] dc-mesh-blob-1" />
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
        <span className="h-1.5 w-1.5 rounded-full bg-accent dc-pulse" />
        About Us
      </motion.span>

      <motion.h1
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="mt-6 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl md:text-8xl"
      >
        Building the future of <span className="gradient-text">voice AI</span>.
      </motion.h1>

      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
        className="mt-6 max-w-xl text-fg-muted"
      >
        DubCall is a product of NextSens Global Pvt. Ltd. — building agentic AI
        for support, leads, and sales at enterprise scale.
      </motion.p>
    </section>
  );
}
