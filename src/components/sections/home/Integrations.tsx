import { Code2, Webhook, Phone } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

type Brand =
  | { name: string; logo: string }
  | { name: string; Icon: typeof Code2 };

const integrations: Brand[] = [
  { name: "Google", logo: "/images/brands/google.png" },
  { name: "Slack", logo: "/images/brands/slack.png" },
  { name: "Calendar", logo: "/images/brands/calendar.png" },
  { name: "Gmail", logo: "/images/brands/gmail.png" },
  { name: "Salesforce", logo: "/images/brands/salesforce.png" },
  { name: "Stripe", logo: "/images/brands/stripe.png" },
  { name: "Postgres", logo: "/images/brands/postgres.png" },
  { name: "REST API", Icon: Code2 },
];

const extras = [
  { Icon: Webhook, label: "Webhooks" },
  { Icon: Phone, label: "SIP Trunks" },
  { Icon: Code2, label: "Custom APIs" },
];

export default function Integrations() {
  return (
    <section className="bg-surface-2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <span className="eyebrow">Integrations</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
            Plug into your stack
          </h2>
          <p className="mt-4 text-fg-muted">
            Native connectors plus a universal REST + Webhook bridge.
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {integrations.map((b) => (
            <StaggerItem
              key={b.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-bg p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft"
            >
              <div className="grid h-14 w-14 place-items-center">
                {"logo" in b ? (
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="h-10 w-10 object-contain transition-transform duration-500 ease-apple group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line text-fg transition-colors group-hover:border-fg/30 group-hover:bg-fg group-hover:text-bg">
                    <b.Icon size={20} strokeWidth={1.8} />
                  </span>
                )}
              </div>
              <span className="text-sm font-semibold">{b.name}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-fg-muted">
          {extras.map(({ Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5">
              <Icon size={14} />
              {label}
            </span>
          ))}
          <span className="text-fg-subtle">·</span>
          <span>HubSpot</span>
          <span className="text-fg-subtle">·</span>
          <span>Pipedrive</span>
          <span className="text-fg-subtle">·</span>
          <span>Zoho</span>
        </Reveal>
      </div>
    </section>
  );
}
