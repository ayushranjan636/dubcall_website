import {
  MessageCircle,
  Globe2,
  BarChart3,
  Plug,
  Mic,
  Clock,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const features = [
  {
    Icon: Mic,
    title: "Natural conversations",
    desc: "Ultra-low-latency voice with emotion, interruption, and contextual memory.",
    big: true,
  },
  {
    Icon: Globe2,
    title: "32+ languages",
    desc: "English, Hindi, regional dialects with seamless code-switching.",
  },
  {
    Icon: BarChart3,
    title: "Real-time analytics",
    desc: "Sentiment, intent, and conversion in live dashboards.",
  },
  {
    Icon: Plug,
    title: "Smart integrations",
    desc: "CRM, calendar, helpdesk, any REST API — synced in real time.",
  },
  {
    Icon: MessageCircle,
    title: "Custom voice agents",
    desc: "Train with your brand voice, scripts, and knowledge base.",
  },
  {
    Icon: Clock,
    title: "24/7 availability",
    desc: "Never miss a call. Agents work around the clock.",
  },
];

export default function Features() {
  return (
    <section className="bg-bg py-24" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Everything an agent needs.
          </h2>
          <p className="mt-4 text-lg text-fg-muted">
            One platform for voice, reasoning, actions, and analytics.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, desc, big }) => (
            <StaggerItem
              key={title}
              className={`group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft ${
                big ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-line bg-bg text-fg transition-all group-hover:border-fg/30 group-hover:bg-fg group-hover:text-bg">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
