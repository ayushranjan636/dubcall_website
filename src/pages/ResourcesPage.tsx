import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const resources = [
  {
    category: "Blog",
    icon: "📝",
    description: "Insights on AI voice automation, industry trends, and best practices.",
    href: "/contact",
    items: [
      "How AI Voice Agents Are Transforming Customer Support",
      "5 Ways to Automate Your Sales Calls with AI",
      "The Future of Voice AI in Healthcare",
    ],
  },
  {
    category: "Guides",
    icon: "📖",
    description: "Step-by-step guides to help you get the most out of DubCall.",
    href: "/contact",
    items: [
      "Getting Started with DubCall",
      "Setting Up Your First AI Voice Agent",
      "Integrating DubCall with Your CRM",
    ],
  },
  {
    category: "Industry Policies",
    icon: "🏛️",
    description: "Compliance and regulatory information for various industries.",
    href: "/contact",
    items: [
      "Healthcare & HIPAA Compliance",
      "Financial Services Regulations",
      "Telemarketing Compliance Guide",
    ],
  },
  {
    category: "Terms of Service",
    icon: "📋",
    description: "Legal terms and conditions governing the use of DubCall services.",
    href: "/privacy",
    items: [
      "Terms of Service",
      "Acceptable Use Policy",
      "Data Processing Agreement",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="dubcall-page min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-4 bg-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 border border-black rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Resources
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Resources & Guides
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to succeed with DubCall — from getting started guides to industry compliance resources.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 bg-gray-50 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.category}
                className="border-2 border-black rounded-2xl p-8 bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)] hover:shadow-[12px_14px_0px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{resource.icon}</span>
                  <h2 className="text-2xl font-bold">{resource.category}</h2>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{resource.description}</p>
                <ul className="space-y-3 mb-6">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-black font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={resource.href}
                  className="inline-block px-6 py-2.5 border-2 border-black rounded-lg font-semibold text-sm hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Browse {resource.category}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white border-t border-black/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Can't find what you need?</h2>
          <p className="text-gray-600 mb-8">
            Our support team is here to help. Reach out and we'll respond within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-black text-white border-2 border-black rounded-lg font-bold hover:bg-white hover:text-black transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
