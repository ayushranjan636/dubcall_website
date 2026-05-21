const advisors = [
  {
    name: "Advisor 1",
    title: "Former Senior Executive",
    description: "Industry veteran with deep expertise in voice technology and enterprise solutions.",
  },
  {
    name: "Advisor 2",
    title: "AI/ML Expert",
    description: "Leading researcher in conversational AI with 10+ years of experience.",
  },
  {
    name: "Advisor 3",
    title: "Sales & Scale Expert",
    description: "Founded and scaled multiple SaaS startups to unicorn status.",
  },
  {
    name: "Advisor 4",
    title: "Product Strategy",
    description: "Built products used by millions of users worldwide.",
  },
  {
    name: "Advisor 5",
    title: "Business Development",
    description: "Closed enterprise deals worth billions for Fortune 500 companies.",
  },
  {
    name: "Advisor 6",
    title: "Venture Capital",
    description: "Partner at leading VC firm with successful exits portfolio.",
  },
];

export default function CompanyAdvisors() {
  return (
    <section className="py-24 px-4 bg-gray-50 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Board/Advisors
          </h2>
          <p className="text-lg text-gray-600">
            Built for Innovation. Backed by Success.
          </p>
        </div>

        <div className="border-2 border-black rounded-2xl p-8 md:p-12 bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="border border-black/20 rounded-lg p-6 hover:border-black/50 hover:bg-gray-50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-1">{advisor.name}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-3">{advisor.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{advisor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
