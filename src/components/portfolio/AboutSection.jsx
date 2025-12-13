"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, Zap } from 'lucide-react';

export default function AboutSection() {
  const traits = [
    { icon: Zap, label: "Problem Solver", color: "from-amber-500 to-orange-500" },
    { icon: Heart, label: "Passionate Learner", color: "from-rose-500 to-pink-500" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main about card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 group"
          >
            <div className="h-full bg-white rounded-3xl p-8 md:p-10 border border-gray-200 hover:border-pink-300 transition-all duration-500 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                {/* Profile Image - Replace with your photo */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-pink-400/30 bg-gradient-to-br from-pink-500 to-rose-500 flex-shrink-0">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/c65efe938_image.png" 
                    alt="Tam Shi Ying"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Tam Shi Ying</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>Singapore</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I'm a Year 3 student pursuing a Diploma in Information Technology with a specialisation in Software Engineering at Ngee Ann Polytechnic. My journey into IT began out of curiosity about how computers and systems work, which has since grown into a genuine passion for building real-world applications that prioritise usability, functionality, and user experience.
              </p>

              <p className="text-gray-600 leading-relaxed">
                As a hands-on learner, I thrive when applying concepts through projects and real development work. I've gained practical experience through a 1-year internship at OCBC Bank, where I worked on their HIP (HR in Your Pocket) mobile application, contributing to production features and learning professional development workflows in an enterprise environment. I'm also actively involved in ICT Society and ORION clubs at NP.
              </p>
            </div>
          </motion.div>

          {/* Side cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 border border-pink-200"
            >
              <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-pink-500" />
                Quick Facts
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span className="text-gray-600">Year of Study</span>
                  <span className="font-medium">Year 3</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Programme</span>
                  <span className="font-medium">Diploma in IT</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Specialisation</span>
                  <span className="font-medium">Software Eng.</span>
                </li>
              </ul>
            </motion.div>

            {/* Traits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {traits.map((trait, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-pink-300 transition-all duration-300 group shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${trait.color} flex items-center justify-center mb-3`}>
                    <trait.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-900 font-medium text-sm">{trait.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Fun element */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm"
            >
              <p className="text-gray-600 text-sm mb-2">Internship Experience</p>
              <p className="text-gray-900 font-semibold text-lg">OCBC Bank (1 Year) 🏦</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}