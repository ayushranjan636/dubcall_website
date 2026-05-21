import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const advisors = [
  { name: "Advisor 1", title: "Former Senior Executive", description: "Industry veteran with deep expertise in voice technology and enterprise solutions." },
  { name: "Advisor 2", title: "AI/ML Expert", description: "Leading researcher in conversational AI with 10+ years of experience." },
  { name: "Advisor 3", title: "Sales & Scale Expert", description: "Founded and scaled multiple SaaS startups to unicorn status." },
  { name: "Advisor 4", title: "Product Strategy", description: "Built products used by millions of users worldwide." },
  { name: "Advisor 5", title: "Business Development", description: "Closed enterprise deals worth billions for Fortune 500 companies." },
  { name: "Advisor 6", title: "Venture Capital", description: "Partner at leading VC firm with successful exits portfolio." },
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

        <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((a) => (
            <StaggerItem
              key={a.name}
              className="card p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft"
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-br from-accent to-fg" />
              <h3 className="font-semibold">{a.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                {a.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{a.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
