"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const socials = [
    { name: "Email", icon: Mail, href: "mailto:your.email@example.com", label: "your.email@example.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yourprofile", label: "/in/yourprofile" },
    { name: "GitHub", icon: Github, href: "https://github.com/yourusername", label: "@yourusername" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent" />
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-rose-100/50 rounded-full blur-[128px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - Message */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're a recruiter, fellow student, or just someone interested in tech, I'd love to hear from you. Feel free to reach out through any of the channels listed here.
              </p>
              
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span>Singapore</span>
              </div>
            </div>

            {/* Right side - Links */}
            <div className="space-y-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-pink-300 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:from-pink-500 group-hover:to-rose-500 transition-all duration-300">
                      <social.icon className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">{social.name}</p>
                      <p className="text-gray-600 text-sm">{social.label}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-pink-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}