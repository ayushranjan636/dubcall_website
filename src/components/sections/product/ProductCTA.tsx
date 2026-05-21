export default function ProductCTA() {
  return (
    <section className="py-24 px-4 bg-black text-white border-t border-black/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
          Ready to Put Your Calls on <span className="italic">Autopilot</span>?
        </h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of companies automating their customer interactions at scale. Start your free trial today, no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
          >
            [ Start Free Trial ]
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
          >
            [ Book a Demo ]
          </a>
        </div>

        <p className="text-sm text-gray-400 mb-12">
          Setup in under 5 minutes. No code required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300 border-t border-gray-700 pt-8">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">✓</span>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">✓</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
