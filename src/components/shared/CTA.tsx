export default function DubCallCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Ready to Transform Your Calls?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses using DubCall to automate their voice
          communications and scale effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Start Free Trial
          </a>
          <a
            href="/contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
          >
            Schedule a Demo
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span>Free 14-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-lg">✓</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
