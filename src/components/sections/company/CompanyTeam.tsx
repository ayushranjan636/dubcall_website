import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/Brand";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const teamMembers = [
  {
    name: "Pretam Ram",
    role: "Founder & CEO",
    bio: "Former Software Developer at Deepnap Softech. Built scalable SaaS. Owns the core AI voice platform, reliability, and delivery.",
    image: "/images/pretam-Kumar-Ram.png",
    tags: ["AI Platform", "Reliability", "Delivery"],
    linkedin: "#",
    email: "pretam@dubcall.com",
  },
  {
    name: "Piyush Modi",
    role: "Co-Founder & CBO",
    bio: "Led go-to-market strategy and closed first revenue. Owns GTM & sales. Drives customer growth across Google & Meta Ads.",
    image: "/images/Piyush-Modi.png",
    tags: ["GTM", "Sales", "Growth"],
    linkedin: "#",
    email: "piyush@dubcall.com",
  },
];

export default function CompanyTeam() {
  return (
    <section className="border-t border-line bg-surface-2 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Team</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            The builders.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-fg-muted">
            Operators and engineers who've shipped real software at scale.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2">
          {teamMembers.map((m) => (
            <StaggerItem
              key={m.name}
              className="card group relative overflow-hidden transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-soft"
            >
              {/* gradient ring on hover */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="grid sm:grid-cols-[180px_1fr]">
                {/* Portrait */}
                <div className="relative aspect-square overflow-hidden surface-2 sm:aspect-auto sm:h-full">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-fg/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Body */}
                <div className="flex flex-col gap-4 p-6 sm:p-7">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {m.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                          {m.role}
                        </p>
                      </div>
                      <a
                        href={m.linkedin}
                        aria-label={`${m.name} on LinkedIn`}
                        className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-line text-fg-muted transition-all hover:bg-fg hover:text-bg"
                      >
                        <LinkedInIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-fg-muted">{m.bio}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-bg px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fg-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:${m.email}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-fg-muted transition-colors hover:text-fg"
                  >
                    <Mail size={12} />
                    {m.email}
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
