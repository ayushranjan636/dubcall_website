const features = [
  {
    title: "Natural Conversations",
    description:
      "Advanced AI that understands context and responds naturally, making every interaction feel human.",
    icon: "💬",
    color: "bg-blue-50",
  },
  {
    title: "Multi-Language Support",
    description:
      "Communicate with customers in their preferred language with support for 50+ languages.",
    icon: "🌍",
    color: "bg-green-50",
  },
  {
    title: "Real-time Analytics",
    description:
      "Track call performance, sentiment analysis, and conversion rates in real-time dashboards.",
    icon: "📊",
    color: "bg-purple-50",
  },
  {
    title: "Smart Integrations",
    description:
      "Seamlessly connect with your CRM, calendar, and business tools for automated workflows.",
    icon: "🔗",
    color: "bg-orange-50",
  },
  {
    title: "Custom Voice Agents",
    description:
      "Train AI agents with your brand voice, scripts, and business-specific knowledge.",
    icon: "🎯",
    color: "bg-pink-50",
  },
  {
    title: "24/7 Availability",
    description:
      "Never miss a call. Your AI agents work around the clock to handle customer inquiries.",
    icon: "⏰",
    color: "bg-yellow-50",
  },
];

export default function DubCallFeatures() {
  return (
    <section className="py-24 px-4 bg-white" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate and scale your voice communications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="border-2 border-black/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
