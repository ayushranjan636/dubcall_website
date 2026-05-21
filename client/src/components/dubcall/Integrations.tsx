const integrations = [
  { name: "Google", icon: "🔵", color: "bg-blue-50" },
  { name: "Slack", icon: "💬", color: "bg-red-50" },
  { name: "Pinterest", icon: "📌", color: "bg-rose-50" },
  { name: "Notion", icon: "⬛", color: "bg-gray-50" },
  { name: "Facebook", icon: "📘", color: "bg-blue-100" },
  { name: "Salesforce", icon: "☁️", color: "bg-cyan-50" },
  { name: "Dribbble", icon: "🏀", color: "bg-pink-50" },
  { name: "Stripe", icon: "💳", color: "bg-indigo-50" },
];

export default function DubCallIntegrations() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50/30 via-orange-50/20 to-purple-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Integrate with
          </h2>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-blue-100/40 via-orange-100/30 to-purple-100/40 rounded-3xl p-12 border border-black/5 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className={`${integration.color} border-2 border-black/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 hover:shadow-lg cursor-pointer group bg-white/80 backdrop-blur-sm`}
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {integration.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
