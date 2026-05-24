import { ArrowRight, BookOpen, FileText, Scale, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Reveal, StaggerGroup, StaggerItem } from "@/lib/motion";
import { useTalkToUs } from "@/lib/talk-to-us";

const resources = [
  {
    Icon: FileText,
    category: "Blog",
    description: "Insights on AI voice automation, industry trends, and best practices.",
    href: "/contact",
    items: [
      "How AI Voice Agents Are Transforming Customer Support",
      "5 Ways to Automate Your Sales Calls with AI",
      "The Future of Voice AI in Healthcare",
    ],
  },
  {
    Icon: BookOpen,
    category: "Guides",
    description: "Step-by-step guides to help you get the most out of DubCall.",
    href: "/contact",
    items: [
      "Getting Started with DubCall",
      "Setting Up Your First AI Voice Agent",
      "Integrating DubCall with Your CRM",
    ],
  },
  {
    Icon: Shield,
    category: "Industry Policies",
    description: "Compliance and regulatory information for various industries.",
    href: "/contact",
    items: [
      "Healthcare & HIPAA Compliance",
      "Financial Services Regulations",
      "Telemarketing Compliance Guide",
    ],
  },
  {
    Icon: Scale,
    category: "Terms",
    description: "Legal terms governing the use of DubCall services.",
    href: "/privacy",
    items: ["Terms of Service", "Acceptable Use Policy", "Data Processing Agreement"],
  },
];

export default function ResourcesPage() {
  const { open: openTalkToUs } = useTalkToUs();
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main className="pt-24">
        <section className="relative overflow-hidden py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] dc-mesh-blob-1" />
          </div>

          <Reveal className="mx-auto max-w-3xl px-6 text-center">
            <span className="eyebrow">Resources</span>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
              Everything you need to succeed.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-fg-muted">
              From getting-started guides to industry compliance — built to help
              you scale voice automation.
            </p>
          </Reveal>
        </section>

        <section className="border-t border-line bg-surface-2 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <StaggerGroup className="grid gap-5 md:grid-cols-2">
              {resources.map(({ Icon, category, description, href, items }) => (
                <StaggerItem
                  key={category}
                  className="card group flex flex-col gap-5 p-8 transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-fg/20 hover:shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-bg text-fg transition-colors group-hover:bg-fg group-hover:text-bg">
                      <Icon size={18} />
                    </div>
                    <h2 className="text-xl font-semibold">{category}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-fg-muted">{description}</p>
                  <ul className="flex flex-col gap-2.5 border-t border-line pt-4">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-fg-muted"
                      >
                        <span className="mt-1 text-fg">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={href}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-all group-hover:gap-2.5"
                  >
                    Browse {category} <ArrowRight size={14} />
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="py-16">
          <Reveal className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Can't find what you need?
            </h2>
            <p className="mt-3 text-fg-muted">
              Our support team is here to help. We respond within 24 hours.
            </p>
            <button onClick={openTalkToUs} className="btn-primary mt-7 inline-flex">
              Contact support <ArrowRight size={16} />
            </button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
