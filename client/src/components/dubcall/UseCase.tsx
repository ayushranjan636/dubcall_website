import { useState, useEffect, useRef } from "react";

const industries = [
  {
    id: 1,
    label: "Healthcare",
    fullName: "Healthcare & Medical Services",
    image: "/dubcall/healthcare.jpg",
    benefits: [
      "Automated appointment reminders & scheduling",
      "Patient follow-up calls and consultations",
      "Insurance eligibility verification",
      "Prescription refill requests",
      "24/7 symptom assessment for triage",
    ],
  },
  {
    id: 2,
    label: "Real Estate",
    fullName: "Real Estate & Property Management",
    image: "/dubcall/Real-Estate.jpg",
    benefits: [
      "Lead qualification and property inquiries",
      "Showing reminders and confirmations",
      "Tenant communication and support",
      "Property maintenance requests",
      "Follow-up calls for abandoned leads",
    ],
  },
  {
    id: 3,
    label: "Finance",
    fullName: "Finance & Banking",
    image: "/dubcall/finance.png",
    benefits: [
      "Loan application follow-ups",
      "Payment reminders and collection",
      "Credit card activation calls",
      "Fraud alert notifications",
      "Customer support for account queries",
    ],
  },
  {
    id: 4,
    label: "E-commerce",
    fullName: "E-commerce & Retail",
    image: "/dubcall/ecommerce.png",
    benefits: [
      "Order status updates and tracking",
      "Return & refund processing",
      "Customer feedback collection",
      "Upsell and cross-sell opportunities",
      "Abandoned cart recovery calls",
    ],
  },
];

export default function DubCallUseCase() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, [active]);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(industries.length - 1, a + 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="pt-36 pb-24 px-4 bg-white"
      id="use-cases"
      style={{ scrollMarginTop: 180 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Use Case</h2>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {industries.map((industry, i) => (
                <div key={industry.id} className="min-w-full px-6">
                  <div className="border-2 border-black rounded-2xl bg-white overflow-hidden shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)]">
                    <div className="text-center py-3 border-b border-transparent">
                      <span className="font-semibold">
                        {i + 1}. {industry.label}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="flex flex-col items-center justify-center p-12 bg-gray-50 border-r md:border-r-2">
                        <div className="w-52 h-52 rounded-2xl flex items-center justify-center mb-6 border-2 border-black shadow-md overflow-hidden bg-white">
                          <img
                            src={industry.image}
                            alt={industry.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm font-bold text-center px-6">
                          {industry.fullName}
                        </div>
                      </div>
                      <div className="p-12 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
                        <ul className="flex flex-col gap-4">
                          {industries[active].benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-green-600 font-bold text-lg mt-1">
                                ✓
                              </span>
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-black rounded-full w-10 h-10 flex items-center justify-center shadow-sm"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white border border-black rounded-full w-10 h-10 flex items-center justify-center shadow-sm"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
