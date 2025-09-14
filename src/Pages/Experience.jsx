import React, { useEffect } from "react";
import { Briefcase, Code, Sparkles, Server } from "lucide-react";

// Data for experience timeline
const experienceData = [
  {
    icon: Briefcase,
    title: "Independent Study (Data Analyst)",
    period: "Agustus 2023 - Desember 2023",
    tasks: [
      "Learning data processing by study cases that given.",
      "Visualizing data based on processed data.",
      "Completing team projects by using all learned knowledge and tools."
    ],
    delay: 300,
  },
  {
    icon: Code,
    title: "Freelance Programmer",
    period: "Januari 2025 - Sekarang",
    tasks: [
      "Creating an employee attendance system using cameras for 75 employees.",
      "Creating a mobile application for a motorbike queue system of 10-15 per day.",
      "Creating a company profile website to manage 11 workshop branches.",
      "Creating a website system for company needs management with 5 administrative roles."
    ],
    delay: 600,
  },
  {
    icon: Server,
    title: "Fullstack Web & Mobile Programmer (GG Suspension)",
    period: "Februari 2025 - Sekarang",
    tasks: [
      "Creating an employee attendance system using cameras for 75 employees.",
      "Creating a mobile application for a motorbike queue system of 10-15 per day.",
      "Creating a company profile website to manage 11 workshop branches.",
      "Creating a website system for company needs management with 5 administrative roles."
    ],
    delay: 900,
  },
];

// Reusable component for each timeline item
const ExperienceItem = ({ icon: Icon, title, period, tasks, delay }) => (
  <div
    className="relative pl-8 sm:pl-12 py-6 group"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay={delay}
  >
    {/* Line */}
    <div className="absolute top-0 left-0 sm:left-4 w-1 h-full bg-gradient-to-b from-[#6366f1] to-[#a855f7] rounded-full group-last:h-1/2 transition-all duration-500"></div>
    
    {/* Icon */}
    <div className="absolute -left-1 sm:left-3 -top-1 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black border-2 border-[#a855f7] z-10">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#a855f7]" />
    </div>
    
    <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 relative z-20 transition-all duration-300 hover:border-[#6366f1]/50 hover:shadow-xl hover:shadow-[#6366f1]/10">
      <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400 mb-4">{period}</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        {tasks.map((task, index) => (
          <li key={index} className="text-sm sm:text-base">{task}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  useEffect(() => {
    // AOS will be initialized from the main App.jsx
  }, []);

  return (
    <div id="Experience" className="py-20 md:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="text-center lg:mb-12 mb-8 px-[5%]">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            My Experience
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          A journey through my professional milestones
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="lg:w-1/4 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" data-aos="fade-right" data-aos-duration="1000">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-full blur-2xl opacity-10 z-0"></div>
            <img 
              src="/me-excited.png" 
              alt="Pose Semangat" 
              className="relative w-full h-full object-contain rounded-full p-10 z-10"
            />
          </div>
        </div>
        <div className="lg:w-full">
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <ExperienceItem
                key={index}
                icon={item.icon}
                title={item.title}
                period={item.period}
                tasks={item.tasks}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
