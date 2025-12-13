"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-200/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-200/30 rounded-full blur-[80px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            IT Student @ Ngee Ann Polytechnic
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight mb-6"
        >
          <span className="block">Tam Shi Ying</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Crafting digital experiences through code, creativity, and curiosity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#about"
            className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            Discover My Journey
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-white border border-gray-200 rounded-full text-gray-900 font-semibold hover:bg-gray-50 transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}