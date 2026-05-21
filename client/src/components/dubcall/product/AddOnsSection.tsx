const addOns = [
  { title: "Videos", description: "Custom video content for your campaigns" },
  { title: "Batch Phone Numbers", description: "Dedicated phone numbers per country" },
  { title: "Dedicated Support", description: "Dedicated support contact per country" },
  { title: "Advanced Analytics", description: "Deep insights into call performance" },
  { title: "Custom Language Models", description: "Fine-tuned AI models for your industry" },
  { title: "White Label", description: "Full white-label solution available" },
];

export default function AddOnsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50 border-t border-black/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-3">Optional Add-ons</h3>
          <p className="text-gray-600">(If needed)</p>
        </div>

        <div className="border-2 border-black rounded-2xl p-8 bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="border border-black/20 rounded-lg p-6 hover:border-black/50 transition-colors"
              >
                <h4 className="font-bold text-lg mb-2">{addon.title}</h4>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
