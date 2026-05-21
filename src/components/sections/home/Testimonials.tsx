import { Star } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const testimonials = [
  {
    name: "Jennifer Kim",
    role: "Marketing Manager, TechStartups Inc.",
    avatar: "JK",
    content: "Converting manual calls to AI used to take hours. Now it takes 20 seconds.",
    highlight: "20 seconds",
  },
  {
    name: "Carlos Rivera",
    role: "Marketing Director, GrandFirst",
    avatar: "CR",
    content: "Brand-consistent conversations across every campaign — effortless for our team.",
    highlight: "every campaign",
  },
  {
    name: "Mike Johnson",
    role: "Owner, PrintPerfect",
    avatar: "MJ",
    content: "Perfect call quality every time — from leads to closings.",
    highlight: "from leads to closings",
  },
  {
    name: "David Chen",
    role: "Ops Manager, ScaleUp",
    avatar: "DC",
    content: "Our support team needed AI assist for high volume. DubCall solved it completely.",
    highlight: "solved it completely",
  },
  {
    name: "Tom Williams",
    role: "VP Sales, GlobalTech",
    avatar: "TW",
    content: "Enterprise calling requires perfect agents — DubCall delivers every time.",
    highlight: "every time",
  },
  {
    name: "Lisa Rodriguez",
    role: "Brand Manager, Fashion Forward",
    avatar: "LR",
    content: "Clean, professional results that work beautifully — outbound is sorted.",
    highlight: "beautifully",
  },
  {
    name: "Rachel Green",
    role: "Product Designer, StartupX",
    avatar: "RG",
    content: "From concept to live demo in seconds, not hours.",
    highlight: "seconds, not hours",
  },
  {
    name: "Amanda Thompson",
    role: "Customer Success, ServiceFirst",
    avatar: "AT",
    content: "Maintains service quality while handling every kind of inquiry.",
    highlight: "every kind of inquiry",
  },
  {
    name: "Maria Gonzalez",
    role: "Owner, Custom Apparel Co",
    avatar: "MG",
    content: "Saves our team 10+ hours per week — essential for any growing business.",
    highlight: "10+ hours per week",
  },
];

export default function Testimonials() {
  const columns = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9),
  ];

  return (
    <section className="relative overflow-hidden bg-bg py-24" id="testimonials">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 text-center">
          <span className="eyebrow">Loved by teams</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
            What customers are saying
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-bg to-transparent" />

          {columns.map((col, ci) => (
            <StaggerGroup key={ci} className="flex flex-col gap-5">
              {col.map((t) => {
                const parts = t.content.split(t.highlight);
                return (
                  <StaggerItem
                    key={t.name}
                    className="card flex flex-col gap-4 p-6 transition-transform duration-500 ease-apple hover:-translate-y-1"
                  >
                    <div className="flex gap-0.5 text-warning">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-fg-muted">
                      {parts[0]}
                      <span className="font-semibold text-fg">{t.highlight}</span>
                      {parts[1]}
                    </p>
                    <div className="mt-2 flex items-center gap-3 border-t border-line pt-4">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-fg text-xs font-semibold text-bg">
                        {t.avatar}
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold">{t.name}</div>
                        <div className="text-[11px] text-fg-subtle">{t.role}</div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
