const trustItems = [
  { icon: "✓", text: "This reduces friction massively." },
  { icon: "✓", text: "No credit card required for free trial" },
  { icon: "✓", text: "30 day money-back guarantee" },
  { icon: "✓", text: "Cancel anytime" },
  { icon: "✓", text: "Data secured & encrypted" },
];

export default function TrustSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-black rounded-2xl p-8 shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
          <h3 className="text-2xl font-bold mb-6 text-center">Trust Section Under Pricing</h3>

          <div className="space-y-4">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-black rounded-xl p-4 flex items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-bold text-green-600 flex-shrink-0">{item.icon}</span>
                <span className="text-lg font-semibold text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
