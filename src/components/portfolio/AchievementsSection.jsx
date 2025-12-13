"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, FileCheck, Target } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: "OCBC Hackathon - 2nd Position",
      organization: "OCBC Bank",
      year: "2024",
      icon: Trophy,
      color: "from-amber-400 to-yellow-500",
      description: "Secured 2nd place with team for developing an innovative ATM system with multiple authentication methods including NFC, face recognition, and QR code withdrawal",
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Achievements & Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl p-8 border border-gray-200 hover:border-pink-300 transition-all duration-500 relative overflow-hidden shadow-sm">
                {/* Background glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${achievement.color}`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>

                <span className="text-gray-600 text-sm">{achievement.year}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{achievement.title}</h3>
                <p className="text-pink-500 text-sm font-medium mb-3">{achievement.organization}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}