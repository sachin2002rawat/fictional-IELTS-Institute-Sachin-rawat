import React from "react";
import { Mic, FileText, Sparkles, HelpCircle } from "lucide-react";

const features = [
  { icon: <Mic className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400" />, title: "Speaking Practice", desc: "Daily topics, model answers, and live fluency rooms." },
  { icon: <FileText className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />, title: "Mock Tests", desc: "Full-length tests with detailed analytics and feedback." },
  { icon: <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400" />, title: "AI Band Score", desc: "Instant scoring for essays and speaking using AI." },
  { icon: <HelpCircle className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400" />, title: "Live Doubt Clearing", desc: "Quick help from mentors when you get stuck." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Animated Bounce + Glow Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white
                         animate-bounce drop-shadow-lg hover:drop-shadow-[0_0_20px_#3B82F6] transition-all duration-500">
            Why students pick us
          </h2>
          <p className="mt-3 sm:mt-4  text-sm sm:text-base
                        bg-gradient-to-r from-blue-400 via-green-400 to-purple-400
                        bg-clip-text text-transparent font-medium tracking-wide
                        animate-pulse">
            Tools and practice that make your IELTS prep faster and smarter
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl
                         ${idx % 4 === 0 ? "bg-blue-800" : idx % 4 === 1 ? "bg-green-800" : idx % 4 === 2 ? "bg-yellow-800" : "bg-purple-800"}`}
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-gray-200 mt-2 text-xs sm:text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
