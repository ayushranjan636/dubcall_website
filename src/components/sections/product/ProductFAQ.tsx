import { useState } from "react";

const faqs = [
  {
    question: "Can I start with a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features and decide which plan works best for your needs.",
  },
  {
    question: "What are included credits and how do they work?",
    answer: "Included credits are part of your monthly plan. Each AI call uses a certain amount of credits based on call duration and complexity. When you use all included credits, additional calls are billed at your tier's rate.",
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "Do you offer custom plans?",
    answer: "Absolutely! For enterprise needs, we offer custom plans tailored to your specific requirements. Contact our sales team to discuss your needs.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and can set up wire transfers or ACH payments for enterprise customers.",
  },
  {
    question: "Is there a setup fee or contract?",
    answer: "No setup fees. For monthly plans, there's no long-term contract. Enterprise customers may have annual agreements with special terms.",
  },
];

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-white border-t border-black/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our pricing and product
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-black rounded-2xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-left">{faq.question}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <span className="text-sm font-bold">+</span>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-black/20 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 border-2 border-black rounded-2xl bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:support@dubcall.com"
            className="inline-block px-8 py-3 rounded-lg border-2 border-black font-bold hover:bg-black hover:text-white transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
