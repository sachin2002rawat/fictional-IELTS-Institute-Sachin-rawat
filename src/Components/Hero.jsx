// HeroSection.jsx
import React from "react";
import sachinbro from '../assets/sachinbro.jpg';

export default function Hero() {
  const firstLine = ["Crack", "IELTS", "with"];
  const secondLine = ["Confidence"];

  return (
    <section id="enroll" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Content */}
        <div>
          {/* Batch Info */}
          <span className="inline-block mb-4 bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            Next batch starts Monday
          </span>

          {/* Animated Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug">
            {/* First Line */}
            <div className="flex flex-wrap h-16 overflow-hidden">
              {firstLine.map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-2 animate-fade-slide"
                  style={{ animationDelay: `${idx * 1.2}s` }}
                >
                  {word}
                </span>
              ))}
            </div>

            {/* Second Line */}
            <div className="flex flex-wrap h-16 overflow-hidden mt-2">
              {secondLine.map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-2 animate-fade-slide"
                  style={{ animationDelay: `${idx * 1.2}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>

          {/* Subtext */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-md">
            Train with focused practice, realistic mocks, and AI-powered feedback that actually helps you improve.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get Started
            </button>
            <button className="bg-gray-800 border border-gray-600 hover:border-gray-400 text-gray-200 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow hover:shadow-md transform transition-all duration-300 hover:scale-105">
              Try a Free Mock
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={sachinbro}
            alt="Person holding stack of books"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
          />
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fade-slide {
            0% { opacity: 0; transform: translateY(20px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
          .animate-fade-slide {
            display: inline-block;
            animation: fade-slide 5s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
