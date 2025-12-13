"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function EducationTimeline() {
  const education = [
    {
      year: "2023 - Present",
      title: "Ngee Ann Polytechnic",
      subtitle: "Diploma in Information Technology",
      description: "Specialising in Software Engineering with a focus on mobile and web development. Maintaining consistent academic performance with emphasis on practical skills and applied learning through hands-on projects. Active member of ICT Society and ORION clubs. Participated in an Overseas Immersion Program to Shenzhen, China in 2023, gaining exposure to the tech industry and innovation ecosystem in one of China's leading technology hubs.",
      icon: GraduationCap,
      highlights: ["Year 3 Student", "Software Engineering", "Shenzhen Immersion 2023"],
      current: true,
    },
    {
      year: "2019 - 2022",
      title: "Sengkang Secondary School",
      subtitle: "O-Level Certificate",
      description: "Developed foundational interest in technology and computing. Active member of Guzheng CCA and served in the EXCO as Peer Support Leader, demonstrating leadership and dedication to student wellbeing.",
      icon: BookOpen,
      highlights: ["Pure Physics", "Pure Chemistry", "A Math", "Math", "English", "Combined Humanities", "Chinese", "Guzheng CCA", "Peer Support Leader EXCO"],
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-400 via-rose-400 to-transparent" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4">
                  <div className={`w-4 h-4 rounded-full ${
                    item.current 
                      ? 'bg-pink-500 ring-4 ring-pink-500/30' 
                      : 'bg-gray-600 ring-4 ring-gray-600/30'
                  }`} />
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className={`bg-white rounded-3xl p-8 border ${
                    item.current ? 'border-pink-300' : 'border-gray-200'
                  } hover:border-pink-400 transition-all duration-500 shadow-sm`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${
                        item.current 
                          ? 'bg-gradient-to-br from-pink-500 to-rose-500' 
                          : 'bg-gradient-to-br from-gray-600 to-gray-700'
                      } flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-pink-500 text-sm font-medium">{item.year}</span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{item.title}</h3>
                        <p className="text-gray-600">{item.subtitle}</p>
                      </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6">
                      {item.description}
                      </p>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700 border border-gray-200"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}