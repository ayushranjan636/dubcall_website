import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/motion";

export default function EnterpriseSection() {
  return (
    <section className="border-t border-line bg-bg py-16">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <span className="eyebrow">Enterprise · Custom</span>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight">
          Need custom pricing?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-fg-muted">
          For large-scale deployments and enterprise requirements, we offer
          fully customized solutions tailored to your needs.
        </p>
        <Link href="/contact" className="btn-primary mt-7 inline-flex">
          Talk to sales <ArrowRight size={16} />
        </Link>
      </Reveal>
    </section>
  );
}
