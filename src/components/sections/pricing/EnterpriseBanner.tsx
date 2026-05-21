import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/motion";

export default function EnterpriseBanner() {
  return (
    <section className="border-t border-line bg-surface-2 py-16">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <span className="eyebrow">Enterprise · Custom</span>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
          Need custom pricing?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-fg-muted">
          For large-scale deployments and enterprise requirements, we offer
          fully tailored plans, dedicated support, SLAs, and white-label.
        </p>
        <Link href="/contact" className="btn-primary mt-7 inline-flex">
          Talk to sales <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
