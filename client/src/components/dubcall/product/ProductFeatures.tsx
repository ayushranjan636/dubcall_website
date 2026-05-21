const features = [
  {
    icon: "🎯",
    title: "Intelligent Routing",
    description: "Automatically routes calls to the right agent, department, or system based on intent & context.",
  },
  {
    icon: "🔄",
    title: "Multi-turn Conversations",
    description: "Handles complex, multi-step conversations with context retention and natural flow.",
  },
  {
    icon: "🔗",
    title: "Deep Integrations",
    description: "Connects directly to your CRM, calendar, payment systems, and custom APIs.",
  },
  {
    icon: "📈",
    title: "Real-time Analytics",
    description: "Monitor call quality, success rates, customer satisfaction, and AI performance metrics.",
  },
];

export default function ProductFeatures() {
  return (
    <section className="py-24 px-4 bg-white border-t border-black/10">
      <style>{`
        @keyframes fadeInUpPF {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Core Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="border-2 border-black rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
              style={{
                animation: `fadeInUpPF 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
