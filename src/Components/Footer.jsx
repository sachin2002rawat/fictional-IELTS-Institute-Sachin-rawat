// FooterSection.jsx
import React from "react";
import { Twitter, Instagram } from "lucide-react";

export default function FooterSection() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left: Brand Info */}
        <div>
          <h3
            className="text-2xl sm:text-3xl font-extrabold text-transparent 
                       bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                       tracking-wide uppercase transform transition-all duration-300 hover:scale-110"
            style={{
              textShadow: "0 0 10px #3B82F6, 0 0 20px #8B5CF6, 0 0 30px #EC4899",
            }}
          >
            IELTS Pro
          </h3>
          <p className="mt-4 text-blue-200 text-sm sm:text-base tracking-wide leading-relaxed font-medium">
            Smart prep for IELTS Academic and General. <span className="text-pink-300">Learn, practice, and improve</span> with guidance.
          </p>
        </div>

        {/* Middle: Links */}
        <div>
          <h3
            className="text-lg sm:text-xl font-semibold text-transparent 
                       bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400
                       tracking-wide uppercase transform transition-all duration-300 hover:scale-110"
            style={{
              textShadow: "0 0 8px #10B981, 0 0 15px #06B6D4, 0 0 25px #3B82F6",
            }}
          >
            Links
          </h3>
          <ul className="mt-4 space-y-2 text-green-200 text-sm sm:text-base tracking-wide font-medium">
            {["features", "testimonials", "enroll"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleScroll(e, item)}
                  className="relative group hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3
            className="text-lg sm:text-xl font-semibold text-transparent 
                       bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400
                       tracking-wide uppercase transform transition-all duration-300 hover:scale-110"
            style={{
              textShadow: "0 0 8px #EC4899, 0 0 15px #F43F5E, 0 0 25px #FBBF24",
            }}
          >
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-pink-200 text-sm sm:text-base tracking-wide font-medium">
            <li className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
              Email: <span className="text-blue-300">hello@ieltspro.fake</span>
            </li>
            <li className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
              Phone: <span className="text-green-300">+1-234-567-8901</span>
            </li>
            <li className="text-purple-200">Mon–Sat, 9am–7pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-gray-500 text-sm sm:text-base text-center md:text-left tracking-wide">
          © 2025 IELTS Pro. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-start">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 transition transform hover:scale-110 duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-pink-400 hover:text-pink-500 transition transform hover:scale-110 duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
