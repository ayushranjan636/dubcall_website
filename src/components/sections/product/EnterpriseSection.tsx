export default function EnterpriseSection() {
  return (
    <section className="py-16 px-4 bg-white border-t border-black/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-4">
            Enterprise / Custom
          </p>
          <h3 className="text-3xl font-bold mb-6">Need Custom Pricing?</h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            For large-scale deployments and enterprise requirements, we offer fully customized solutions tailored to your specific needs.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg border-2 border-black font-bold hover:bg-black hover:text-white transition-colors duration-200"
          >
            Need Custom Pricing?
          </a>
        </div>
      </div>
    </section>
  );
}
