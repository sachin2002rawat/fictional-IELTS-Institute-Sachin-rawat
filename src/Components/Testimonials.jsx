// TestimonialsSection.jsx
import React from "react";

const testimonials = [
  {
    name: "Aarav",
    band: "Band 7.5",
    feedback:
      "The AI feedback on essays is on point. Helped me fix mistakes fast.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mia",
    band: "Band 8",
    feedback:
      "Mock tests felt just like the real thing. The analytics kept me motivated.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Hassan",
    band: "Band 7",
    feedback: "Speaking practice rooms boosted my confidence a lot.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                         text-transparent bg-clip-text bg-gradient-to-r 
                         from-blue-400 via-purple-400 to-pink-400
                         animate-[float_4s_ease-in-out_infinite]">
            What students say
          </h2>
          <p className="mt-3 sm:mt-4 text-transparent bg-clip-text 
                        bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300
                        text-lg sm:text-xl md:text-2xl font-semibold
                        tracking-wide max-w-xl mx-auto">
            Real stories from learners who took the leap
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-800 bg-opacity-70 rounded-3xl p-6 shadow-lg 
                         hover:shadow-2xl transform transition duration-500 hover:-translate-y-2"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base sm:text-lg">
                    {t.name}
                  </h3>
                  <p className="text-blue-400 text-xs sm:text-sm">{t.band}</p>
                </div>
              </div>
              {/* Feedback */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Tailwind CSS animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
}
