const testimonials = [
  {
    id: 1,
    name: "Jennifer Kim",
    role: "Marketing Manager at TechStartups Inc.",
    content:
      "Converting manual calls to AI used to take hours. Now it takes just 20 seconds with perfect results.",
    highlight: "Now it takes just 20 seconds with perfect results.",
    avatar: "👩🏻‍💼",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rivera",
    role: "Marketing Director at GrandFirst Agency",
    content:
      "Brand consistency across all channels requires AI agents. Dubcall makes this effortless for our team. Professional quality calls for every campaign.",
    highlight: "Professional quality calls for every campaign.",
    avatar: "👨🏽‍💼",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Owner at PrintPerfect Solutions",
    content:
      "As a sales director, Dubcall saves me from constantly training agents on scripts. Perfect call quality every time, from leads to closings!",
    highlight: "Perfect call quality every time, from leads to closings!",
    avatar: "👨🏼‍💻",
    rating: 5,
  },
  {
    id: 4,
    name: "David Chen",
    role: "Operations Manager at ScaleUp Ventures",
    content:
      "Our support team needed AI assistance for handling high volume. Dubcall solved this problem completely. Perfect responses for customer inquiries.",
    highlight: "Perfect responses for customer inquiries.",
    avatar: "👨🏻‍💻",
    rating: 5,
  },
  {
    id: 5,
    name: "Tom Williams",
    role: "VP of Sales at GlobalTech",
    content:
      "Enterprise AI calling requires perfect agents, and Dubcall delivers every time. No more manual training. Crisp conversations and perfect customer handling.",
    highlight: "Crisp conversations and perfect customer handling.",
    avatar: "👨🏼‍💼",
    rating: 5,
  },
  {
    id: 6,
    name: "Lisa Rodriguez",
    role: "Brand Manager at Fashion Forward",
    content:
      "Our call center needed automation for outbound campaigns. Dubcall understands our needs perfectly. Clean, professional results that work beautifully every time.",
    highlight: "Clean, professional results that work beautifully every time.",
    avatar: "👩🏽‍💻",
    rating: 5,
  },
  {
    id: 7,
    name: "James Patterson",
    role: "Creative Lead at Ad Agency Plus",
    content:
      "Dubcall looks perfect on any screen size. Essential for modern customer engagement. ROI paid for itself in the first month.",
    highlight: "ROI paid for itself in the first month.",
    avatar: "👨🏾‍💼",
    rating: 5,
  },
  {
    id: 8,
    name: "Robert Garcia",
    role: "Web Developer at PixelPerfect",
    content:
      "Our outreach needed automated calls for lead generation. Dubcall solved this completely. Increased our conversion rate by 40%.",
    highlight: "Increased our conversion rate by 40%.",
    avatar: "👨🏽‍💻",
    rating: 5,
  },
  {
    id: 9,
    name: "Rachel Green",
    role: "Product Designer at StartupX",
    content:
      "Creating product demos requires perfect AI voices. Dubcall makes this effortless for our team. From concept to demo in seconds, not hours.",
    highlight: "From concept to demo in seconds, not hours.",
    avatar: "👩🏼‍💼",
    rating: 5,
  },
  {
    id: 10,
    name: "Amanda Thompson",
    role: "Customer Success at ServiceFirst",
    content:
      "Customer inquiries come in various forms, but we need consistent responses for reliability. Dubcall's AI is simply the best. Maintains service quality while handling perfect responses.",
    highlight: "Maintains service quality while handling perfect responses.",
    avatar: "👩🏻‍💻",
    rating: 5,
  },
  {
    id: 11,
    name: "Sarah Martinez",
    role: "Creative Director at BrandCraft",
    content:
      "As a creative director, I'm always looking for ways to elevate our output. Dubcall delivers perfectly. Our productivity has increased dramatically.",
    highlight: "Our productivity has increased dramatically.",
    avatar: "👩🏽‍💼",
    rating: 5,
  },
  {
    id: 12,
    name: "Maria Gonzalez",
    role: "Owner at Custom Apparel Co",
    content:
      "Dubcall has saved our team 10+ hours per week on customer calls. Essential for any growing business. Streamlined our entire sales process.",
    highlight: "Streamlined our entire sales process.",
    avatar: "👩🏾‍💻",
    rating: 5,
  },
];

export default function DubCallTestimonials() {
  const columns = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9),
    testimonials.slice(9, 12),
  ];

  return (
    <section
      className="py-24 px-4 bg-[#0a0a0a] text-white overflow-hidden relative"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight inline-block relative">
            What our customers are saying
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-white rounded-full"></div>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              {col.map((testimonial) => {
                const parts = testimonial.content.split(testimonial.highlight);
                return (
                  <div
                    key={testimonial.id}
                    className="bg-white text-black p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-4"
                  >
                    <p className="text-sm leading-relaxed text-gray-700">
                      {parts[0]}
                      <span className="text-orange-500 font-medium">
                        {testimonial.highlight}
                      </span>
                      {parts[1]}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl border border-gray-200">
                        {testimonial.avatar}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{testimonial.name}</span>
                        <span className="text-xs text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
