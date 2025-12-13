"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, GraduationCap, FolderOpen, Zap, Trophy, Mail, Users, Sparkles } from 'lucide-react';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", icon: User },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "CCA", href: "#cca", icon: Users },
    { label: "Projects", href: "#projects", icon: FolderOpen },
    { label: "Skills", href: "#skills", icon: Zap },
    { label: "Achievements", href: "#achievements", icon: Trophy },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <div className={`relative flex items-center gap-1 px-3 py-3 rounded-full border transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-pink-300 shadow-xl shadow-pink-200/50' 
            : 'bg-white/80 backdrop-blur-sm border-gray-200'
        }`}>
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/0 via-pink-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Logo/Initial on left */}
          <div className="mr-2 px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full">
            <span className="text-white font-bold text-sm">SY</span>
          </div>
          
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-full transition-all duration-200 group/item"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 opacity-70 group-hover/item:opacity-100 transition-opacity" />
                {item.label}
              </span>
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-rose-50 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
            </a>
          ))}
          
          {/* Decorative sparkle */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="ml-2 text-pink-400"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/30 relative overflow-hidden group"
      >
        {/* Animated ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-2 border-white rounded-full"
        />
        {isOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 bottom-28 z-40 md:hidden bg-white backdrop-blur-xl rounded-3xl border border-pink-200 p-6 shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/30 rounded-3xl" />
              
              <div className="relative grid grid-cols-2 gap-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 px-4 py-4 bg-gray-50 rounded-2xl text-gray-700 hover:text-gray-900 hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 transition-all duration-200 border border-gray-200 hover:border-pink-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-pink-500" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}