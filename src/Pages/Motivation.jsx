import React, { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Lightbulb, TrendingUp } from "lucide-react";

// Data untuk teks motivasi dengan animasi
const motivationText = [
  {
    text: "Continuously growing, creating new innovations, and building beneficial work.",
    icon: Lightbulb,
  },
  {
    text: "The path of technology is a continuous journey of learning and adaptation.",
    icon: TrendingUp,
  },
  {
    text: "My vision is to contribute to a better future through impactful technology.",
    icon: ArrowRight,
  },
];

const Motivation = () => {
  return (
    <div className="py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="text-center lg:mb-12 mb-8 px-[5%]">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            My Vision & Motivation
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Words that drive me forward in the world of IT
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      <div className="container mx-auto max-w-4xl space-y-8">
        {motivationText.map((item, index) => (
          <div
            key={index}
            className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 relative flex items-center gap-4 transition-all duration-300 hover:border-[#6366f1]/50 hover:shadow-xl hover:shadow-[#6366f1]/10"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex-shrink-0 animate-pulse-slow" />
            <p className="text-lg sm:text-xl font-medium text-gray-200">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Motivation;
