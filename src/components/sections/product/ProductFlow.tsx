const steps = [
  {
    number: 1,
    title: "Understand",
    description: "AI listens, detects intent, and responds naturally in 80+ languages.",
  },
  {
    number: 2,
    title: "Decide",
    description: "Agent evaluates context, business rules, and customer data.",
  },
  {
    number: 3,
    title: "Act",
    description: "Books appointments, updates CRM, sends messages, triggers workflows.",
  },
];

export default function ProductFlow() {
  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="border-2 border-black rounded-2xl p-8 md:p-12 bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)] mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            From Conversation to Action — In Seconds
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-base">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">Step {step.number} — {step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Flow diagram */}
        <div className="border-2 border-black rounded-2xl p-8 bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm font-semibold overflow-x-auto pb-4">
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-lg">📞</span>
              <span>Customer Call</span>
            </div>
            <div className="text-gray-400 text-xl hidden md:block">→</div>
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-lg">🧠</span>
              <span>AI Brain</span>
            </div>
            <div className="text-gray-400 text-xl hidden md:block">→</div>
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-lg">📊</span>
              <span>CRM Update</span>
            </div>
            <div className="text-gray-400 text-xl hidden md:block">→</div>
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-lg">✓</span>
              <span>Confirmation Sent</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center mt-4">
            This happens in seconds
          </p>
        </div>
      </div>
    </section>
  );
}
