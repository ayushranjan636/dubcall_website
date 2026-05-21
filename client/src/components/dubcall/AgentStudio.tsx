import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Create the Agent",
    description:
      "Define your AI agent's name, voice, language, and persona. Set it up in minutes with our guided wizard.",
  },
  {
    number: "02",
    title: "Define Goals & Behavior",
    description:
      "Configure what the agent should do — qualify leads, schedule appointments, answer FAQs, or run collections.",
  },
  {
    number: "03",
    title: "Connect Integrations",
    description:
      "Plug in your CRM, calendar, helpdesk, or any REST API. DubCall syncs data in real time.",
  },
  {
    number: "04",
    title: "Design Workflows",
    description:
      "Build call flows, set fallback logic, define escalations, and automate follow-ups with a visual editor.",
  },
  {
    number: "05",
    title: "Launch & Monitor",
    description:
      "Deploy instantly, monitor live calls, review transcripts, and optimise agent performance — all from one dashboard.",
  },
];

export default function DubCallAgentStudio() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-black text-white" id="agent-studio">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg border border-white/20 grid grid-cols-2 gap-[3px] p-1.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-[2px]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Agent Studio
          </h2>
        </div>
        <p className="text-gray-400 text-sm mb-2 max-w-md">
          The fastest way to create, deploy, and manage AI voice agents that take real business actions.
        </p>
        <p className="text-gray-600 text-xs mb-12 tracking-widest uppercase">
          Build. Automate. Scale.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Accordion */}
          <div className="flex flex-col gap-1">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left w-full px-5 py-4 rounded-xl border transition-all duration-200 group ${
                  active === i
                    ? "border-white bg-white text-black"
                    : "border-white/10 bg-white/5 hover:border-white/30 text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold transition-colors duration-200 ${
                        active === i ? "text-black/40" : "text-white/30"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-semibold text-sm">{step.title}</span>
                  </div>
                  <span
                    className={`text-lg transition-transform duration-200 ${
                      active === i ? "rotate-90" : ""
                    }`}
                  >
                    →
                  </span>
                </div>
                {active === i && (
                  <p className="mt-3 text-xs text-black/60 leading-relaxed pl-9">
                    {step.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Right: Visual Preview */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden aspect-[4/3] flex flex-col">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <span className="ml-4 text-xs text-white/30 font-mono">
                agent-studio.dubcall.ai
              </span>
            </div>

            {/* Preview content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8">
              {/* Step indicator */}
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-200 rounded-full ${
                      active === i
                        ? "w-6 h-2 bg-white"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Active step visual */}
              <div className="text-center">
                <div className="text-5xl font-black text-white/10 font-mono">
                  {steps[active].number}
                </div>
                <div className="text-white font-bold text-lg mt-2">
                  {steps[active].title}
                </div>
                <div className="text-white/40 text-xs mt-2 max-w-[220px] leading-relaxed">
                  {steps[active].description}
                </div>
              </div>

              {/* Decorative waveform */}
              <div className="flex items-end gap-1 h-10">
                {[3, 6, 9, 12, 8, 14, 10, 6, 11, 7, 13, 5, 9, 12, 7].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-full bg-white/20"
                      style={{ height: `${h * 2.5}px` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-[11px] text-gray-600 text-center max-w-lg mx-auto leading-relaxed">
          Deploy conversations, monitor performance, optimise workflows, and deploy improvements instantly — without writing code.
        </p>
      </div>
    </section>
  );
}
