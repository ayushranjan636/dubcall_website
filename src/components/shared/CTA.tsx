import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-bg py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-surface-2 px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl dc-mesh-blob-1" />
              <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl dc-mesh-blob-2" />
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
              Ready to put an{" "}
              <span className="gradient-text">AI agent</span> on every call?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-fg-muted">
              Join teams using DubCall to automate support, qualify leads, and
              close sales — at scale.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get a live demo
                <ArrowRight size={16} />
              </Link>
              <Link href="/pricing" className="btn-secondary">
                See pricing
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-fg-muted">
              {["No credit card required", "Free 14-day trial", "Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check size={12} className="text-success" strokeWidth={3} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
