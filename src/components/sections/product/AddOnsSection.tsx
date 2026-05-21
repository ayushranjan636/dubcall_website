import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";

const addOns = [
  { title: "Videos", description: "Custom video content for your campaigns" },
  { title: "Batch Phone Numbers", description: "Dedicated phone numbers per country" },
  { title: "Dedicated Support", description: "Dedicated support contact per region" },
  { title: "Advanced Analytics", description: "Deep insights into call performance" },
  { title: "Custom Language Models", description: "Fine-tuned AI models for your industry" },
  { title: "White Label", description: "Full white-label solution available" },
];

export default function AddOnsSection() {
  return (
    <section className="border-t border-line bg-surface-2 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Optional add-ons</h3>
          <p className="mt-2 text-sm text-fg-muted">(if needed)</p>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2">
          {addOns.map((a) => (
            <StaggerItem
              key={a.title}
              className="rounded-2xl border border-line bg-bg p-6 transition-colors hover:border-fg/20"
            >
              <h4 className="font-semibold">{a.title}</h4>
              <p className="mt-1 text-sm text-fg-muted">{a.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
