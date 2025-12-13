"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Mic, Code, Camera, Music } from 'lucide-react';

export default function CCASection() {
  const ccas = [
    {
      title: "ICT Society",
      role: "Member",
      period: "2023 - 2024",
      description: "Active member of NP's ICT Society, contributing to the tech community at Ngee Ann Polytechnic. Assisted in organizing and supporting WorldSkills ASEAN Singapore 2023, a prestigious regional competition showcasing professional and technical skills across ASEAN member countries. Participated in various tech events, workshops, and activities organized by the society.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      achievements: ["WorldSkills ASEAN 2023", "Tech Events & Workshops"],
    },
    {
      title: "ORION",
      role: "Member",
      period: "2023 - 2024",
      description: "Member of ORION, a student interest group within NP's School of InfoComm Technology focused on emerging technologies and hands-on learning. Assisted in the ORION recruitment exercise, helping to attract and onboard new members. Participated in activities covering Data Science, Immersive Media, and other cutting-edge tech domains.",
      icon: Users,
      color: "from-violet-500 to-purple-500",
      achievements: ["Recruitment Exercise", "Tech Interest Group"],
    },
  ];

  return (
    <section id="cca" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-100/50 rounded-full blur-[128px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Beyond Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Co-Curricular Activities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ccas.map((cca, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 border border-gray-200 hover:border-pink-300 transition-all duration-500 relative overflow-hidden shadow-sm">
                {/* Hover glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${cca.color} blur-3xl -z-10`} style={{ opacity: 0.05 }} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cca.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cca.icon className="w-7 h-7 text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-gray-600 text-sm">{cca.period}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{cca.title}</h3>
                  <p className="text-pink-500 font-medium">{cca.role}</p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {cca.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cca.achievements.map((achievement, aIndex) => (
                    <span
                      key={aIndex}
                      className="px-3 py-1 bg-gray-50 rounded-full text-xs text-gray-700 border border-gray-200"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}