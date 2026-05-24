import { ExternalLink, Check } from "lucide-react";
import { consoleLinkProps } from "@/lib/links";
import { Reveal } from "@/lib/motion";

export default function ProductCTA() {
  return (
    <section className="border-t border-line bg-bg py-24">
      <Reveal>
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-surface-2 px-8 py-16 text-center sm:px-16">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl dc-mesh-blob-1" />
              <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl dc-mesh-blob-2" />
            </div>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Put your calls on <span className="gradient-text">autopilot</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-fg-muted">
              Hundreds of teams automate customer interactions at scale. Setup
              in under 5 minutes. No code.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a {...consoleLinkProps()} className="btn-primary">
                Start free trial <ExternalLink size={14} />
              </a>
              <a {...consoleLinkProps()} className="btn-secondary">
                Book a demo <ExternalLink size={14} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-fg-muted">
              {["14-day free trial", "No credit card required", "Cancel anytime"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <Check size={12} className="text-success" strokeWidth={3} />
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
