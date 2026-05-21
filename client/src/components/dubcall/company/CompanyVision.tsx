export default function CompanyVision() {
  return (
    <section className="py-24 px-4 bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="border-2 border-black rounded-2xl overflow-hidden bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left side - Vision & Mission */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8">Vision & Mission</h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold block mb-2">• Redefine Customer Conversations</span>
                  <span>AI-powered voice agents that understand context, adapt in real-time, and deliver human-like interactions at scale.</span>
                </p>
                <p>
                  <span className="font-bold block mb-2">• Empower Every Team</span>
                  <span>Sales, support, and success teams spend less time on repetitive calls and more time on strategy. We handle the volume.</span>
                </p>
                <p>
                  <span className="font-bold block mb-2">• Enterprise-Grade Reliability</span>
                  <span>Security, compliance, and performance built from day one. Your conversations, your rules, your data.</span>
                </p>
                <p>
                  <span className="font-bold block mb-2">• Innovation Through Simplicity</span>
                  <span>No complexity. Just powerful AI that integrates seamlessly with your workflows.</span>
                </p>
              </div>
            </div>

            {/* Right side - Vision Image */}
            <div className="relative bg-gray-50 min-h-96 md:min-h-full overflow-hidden">
              <img
                src="/dubcall/vision.png"
                alt="Vision"
                className="w-full h-full object-cover"
                style={{ minHeight: "384px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
