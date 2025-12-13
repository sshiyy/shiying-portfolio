"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Users, Tag } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-[#0d0d12] border border-pink-400/20 shadow-2xl shadow-pink-500/20 pointer-events-auto"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                {/* Hero Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/50 to-transparent" />
                  
                  {/* Project type badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  {/* Title and tags */}
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm border border-pink-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {project.duration && (
                      <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-pink-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="text-white font-medium">{project.duration}</p>
                        </div>
                      </div>
                    )}
                    {project.team && (
                      <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-rose-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Team</p>
                          <p className="text-white font-medium">{project.team}</p>
                        </div>
                      </div>
                    )}
                    {project.role && (
                      <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                          <Tag className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Role</p>
                          <p className="text-white font-medium">{project.role}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">About This Project</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                            <span className="text-gray-300 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Challenges & Learnings */}
                  {project.learnings && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">What I Learned</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.learnings}
                      </p>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}