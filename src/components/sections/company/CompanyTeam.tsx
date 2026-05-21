import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const teamMembers = [
  {
    name: "Pretam Ram",
    role: "Founder & CEO",
    bio: "Former Software Developer at Deepnap Softech. Built scalable SaaS. Owns core AI voice platform, reliability, and delivery.",
    image: "/images/pretam-Kumar-Ram.png",
  },
  {
    name: "Piyush Modi",
    role: "Co-Founder & CBO",
    bio: "Led go-to-market strategy. Closed first revenue. Owns GTM & sales. Drives customer growth across Google & Meta Ads.",
    image: "/images/Piyush-Modi.png",
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
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {teamMembers.map((m) => (
            <StaggerItem
              key={m.name}
              className="card overflow-hidden transition-all duration-500 ease-apple hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-square w-full overflow-hidden border-b border-line surface-2">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-apple hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{m.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
