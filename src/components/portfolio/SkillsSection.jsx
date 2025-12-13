"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Palette, Terminal, Brain, Users, MessageSquare, Lightbulb } from 'lucide-react';

export default function SkillsSection() {
  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 85 },
        { name: "Kotlin", level: 88 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      category: "Mobile & Web Development",
      icon: Globe,
      skills: [
        { name: "Android Studio", level: 85 },
        { name: "React.js", level: 75 },
        { name: "Node.js / Express", level: 75 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      category: "Database & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 75 },
      ],
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain, description: "Breaking down complex issues and debugging effectively" },
    { name: "Team Collaboration", icon: Users, description: "Working effectively with technical and non-technical teams" },
    { name: "Time Management", icon: Terminal, description: "Meeting deadlines and managing multiple priorities" },
    { name: "Adaptability", icon: Lightbulb, description: "Quick to learn and adapt to new technologies" },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-[128px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills & Abilities
          </h2>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technicalSkills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-pink-300 transition-all duration-500 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-pink-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + sIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Soft Skills</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-300 transition-all duration-300 text-center shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-pink-500" />
                </div>
                <h4 className="text-gray-900 font-semibold mb-2">{skill.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}