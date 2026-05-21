const teamMembers = [
  {
    name: "Pretam Ram",
    role: "FOUNDER & CEO",
    bio: "Former Software Developer at Deepnap Softech. Built scalable SaaS. Owns core AI voice platform, reliability, and delivery. Led end-to-end product development.",
    image: "/images/pretam-Kumar-Ram.png",
  },
  {
    name: "Piyush Modi",
    role: "CO-FOUNDER & CBO",
    bio: "Led go-to-market strategy. Closed first revenue. Owns GTM & sales. Drives customer growth. Performance marketing across Google & Meta Ads.",
    image: "/images/Piyush-Modi.png",
  },
];

export default function CompanyTeam() {
  return (
    <section className="py-16 px-4 bg-white border-t border-black/10">
      <style>{`
        @keyframes fadeInUpTeam {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            TEAM
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="border-2 border-black rounded-2xl overflow-hidden bg-white shadow-[8px_10px_0px_0px_rgba(0,0,0,0.08)] hover:shadow-[12px_14px_0px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `fadeInUpTeam 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Team member image */}
              <div className="w-full aspect-square bg-gray-100 border-b-2 border-black/20 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">{member.role}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
