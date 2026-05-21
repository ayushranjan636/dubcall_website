import {
  Calendar,
  Mail,
  Database,
  CreditCard,
  Cloud,
  MessageSquare,
  Globe2,
  Code2,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const integrations = [
  { name: "Google", Icon: Globe2 },
  { name: "Slack", Icon: MessageSquare },
  { name: "Calendar", Icon: Calendar },
  { name: "Mail", Icon: Mail },
  { name: "Salesforce", Icon: Cloud },
  { name: "Stripe", Icon: CreditCard },
  { name: "Postgres", Icon: Database },
  { name: "REST API", Icon: Code2 },
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
          {integrations.map(({ name, Icon }) => (
            <StaggerItem
              key={name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-bg p-6 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-line transition-colors group-hover:border-fg/30 group-hover:bg-fg group-hover:text-bg">
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <span className="text-sm font-semibold">{name}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mx-auto mt-10 max-w-md text-center text-xs text-fg-subtle">
          + custom REST APIs, Webhooks, SIP trunks, and major CRMs (HubSpot, Pipedrive, Zoho).
        </Reveal>
      </div>
    </section>
  );
}
