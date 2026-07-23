import { Star } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const testimonials = [
  {
    name: "Rohit Khandelwal",
    role: "Operations Lead, Rivet Global",
    avatar: "RK",
    stars: 5,
    content:
      "We moved first-line support to DubCall over a weekend. It now clears around 70% of tickets before a human touches them — setup was mostly pasting in our FAQ.",
    highlight: "clears around 70% of tickets",
  },
  {
    name: "Sneha Iyer",
    role: "Founder's Office, SlateMate",
    avatar: "SI",
    stars: 5,
    content:
      "Parents call at odd hours. The agent picks up at 11 pm, switches between Hindi and English, books the counsellor slot and sends a WhatsApp recap. That used to be my job.",
    highlight: "switches between Hindi and English",
  },
  {
    name: "Aman Verma",
    role: "Growth Head, Franchise Batao",
    avatar: "AV",
    stars: 5,
    content:
      "We qualify 400+ franchise leads a month. DubCall calls back within a minute of form-fill — our connect rate went from 31% to 58% in six weeks.",
    highlight: "connect rate went from 31% to 58%",
  },
  {
    name: "Priya Nair",
    role: "Customer Experience, The HNH",
    avatar: "PN",
    stars: 5,
    content:
      "Honestly, I expected another robotic IVR. In the first week it handled a refund escalation more calmly than our trainee did.",
    highlight: "handled a refund escalation",
  },
  {
    name: "Karthik Reddy",
    role: "Sales Director, PropVista Realty",
    avatar: "KR",
    stars: 5,
    content:
      "Site-visit reminders and follow-ups run on autopilot now. Saturday no-shows dropped by roughly a third in the first month.",
    highlight: "no-shows dropped by roughly a third",
  },
  {
    name: "Dr. Neha Kulkarni",
    role: "Director, Sparsh Dental Clinics",
    avatar: "NK",
    stars: 4,
    content:
      "Rescheduling calls used to eat up our front desk's mornings — the agent handles them and syncs the calendar. Took us two tries to get the script right, but their team helped on a call.",
    highlight: "handles them and syncs the calendar",
  },
  {
    name: "Arjun Mehta",
    role: "Co-founder, Vayu Botanicals",
    avatar: "AM",
    stars: 5,
    content:
      "COD confirmation at scale — it called nearly 2,000 orders during our Diwali sale and RTO came down about 18%. Paid for itself in one campaign.",
    highlight: "RTO came down about 18%",
  },
  {
    name: "Sana Shaikh",
    role: "Support Manager, Kredil Finserv",
    avatar: "SS",
    stars: 4,
    content:
      "Voice quality in Hinglish is genuinely good and customers rarely notice it's AI. The analytics dashboard could go deeper — though two of my feature requests shipped within a month.",
    highlight: "customers rarely notice it's AI",
  },
  {
    name: "Vivek Joshi",
    role: "Director, Northline BPO Services",
    avatar: "VJ",
    stars: 5,
    content:
      "Our scripts were a mess when we started — their team basically rewrote them with us. Clients now think we run a night shift. We don't.",
    highlight: "Clients now think we run a night shift",
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
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill="currentColor"
                          strokeWidth={0}
                          className={i < t.stars ? "text-warning" : "text-line"}
                        />
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
