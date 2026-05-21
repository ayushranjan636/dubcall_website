import { Quote } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/Brand";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const advisors = [
  {
    initials: "AB",
    name: "Advisor 1",
    title: "Former Senior Executive",
    description:
      "Industry veteran with deep expertise in voice technology and enterprise solutions.",
    expertise: "Voice Tech",
  },
  {
    initials: "CD",
    name: "Advisor 2",
    title: "AI/ML Expert",
    description:
      "Leading researcher in conversational AI with 10+ years of experience.",
    expertise: "Conv. AI",
  },
  {
    initials: "EF",
    name: "Advisor 3",
    title: "Sales & Scale Expert",
    description:
      "Founded and scaled multiple SaaS startups to unicorn status.",
    expertise: "SaaS Scale",
  },
  {
    initials: "GH",
    name: "Advisor 4",
    title: "Product Strategy",
    description: "Built products used by millions of users worldwide.",
    expertise: "Product",
  },
  {
    initials: "IJ",
    name: "Advisor 5",
    title: "Business Development",
    description:
      "Closed enterprise deals worth billions for Fortune 500 companies.",
    expertise: "Enterprise",
  },
  {
    initials: "KL",
    name: "Advisor 6",
    title: "Venture Capital",
    description: "Partner at a leading VC firm with a successful exits portfolio.",
    expertise: "Capital",
  },
];

export default function CompanyAdvisors() {
  return (
    <section className="border-t border-line bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Board & Advisors</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            Built for innovation.
          </h2>
          <p className="mt-3 text-fg-muted">Backed by industry leaders.</p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((a) => (
            <StaggerItem
              key={a.name}
              className="card group relative overflow-hidden p-7 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft"
            >
              {/* Quote watermark */}
              <Quote
                size={56}
                className="pointer-events-none absolute -right-3 -top-3 text-fg/[0.05] transition-colors duration-500 group-hover:text-fg/[0.1]"
                strokeWidth={1}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="relative">
                    {/* Animated ring */}
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-fg/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-fg text-sm font-bold tracking-wider text-bg">
                      {a.initials}
                    </div>
                  </div>
                  <a
                    href="#"
                    aria-label={`${a.name} on LinkedIn`}
                    className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-line text-fg-muted transition-all hover:bg-fg hover:text-bg"
                  >
                    <LinkedInIcon className="h-3 w-3" />
                  </a>
                </div>

                <h3 className="mt-5 text-base font-semibold tracking-tight">
                  {a.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                  {a.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  {a.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-fg-subtle">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {a.expertise}
                  </span>
                  <span className="font-mono text-[10px] text-fg-subtle">
                    Board
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
