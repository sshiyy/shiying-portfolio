"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Globe, Smartphone } from 'lucide-react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "ATM Withdrawal System",
      description: "A secure ATM withdrawal system with a strong focus on usability and modern banking features.",
      fullDescription: "This project involved developing a secure ATM withdrawal system with a strong focus on usability and modern banking features. Users can authenticate using multiple methods, including NFC login, face recognition, and QR code withdrawal.\n\nThe system supports digital receipts to reduce paper usage, pre-withdrawal flows to speed up transactions, a chatbot for user assistance, and foreign exchange functionality. Through this project, I gained experience working across the full stack and learned how to design secure, user-friendly financial systems.",
      images: ["https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/744b80da6_image.png"],
      tags: ["Node.js", "Express", "Firebase", "React"],
      category: "web",
      duration: "3 months",
      team: "Team",
      role: "Full-Stack Developer",
      links: { github: "#" },
    },
    {
      title: "F&B Mobile App",
      description: "A mobile application developed to support food ordering and menu management in an F&B context.",
      fullDescription: "This mobile application was developed to support food ordering and menu management in an F&B context. Users are able to create accounts, place orders, earn points from purchases, and redeem rewards. A shop locator feature was also implemented to help users find nearby outlets.\n\nOn the backend, Firebase was used to manage user data, orders, and point balances in real time. I focused on ensuring smooth navigation between screens and maintaining a clean, user-friendly interface. This project strengthened my mobile development skills and taught me how to integrate cloud-based databases into Android applications.",
      images: ["https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"],
      tags: ["Java", "Android Studio", "Firebase"],
      category: "mobile",
      duration: "3 months",
      team: "Team",
      role: "Mobile Developer",
      links: { github: "#" },
    },
    {
      title: "Movie Application",
      description: "A web application designed to highlight Southeast Asian films while providing users with an engaging and interactive browsing experience.",
      fullDescription: "This project was designed to highlight Southeast Asian films while providing users with an engaging and interactive browsing experience. I worked on both the frontend interface and the backend data management, ensuring that movie information was presented clearly and consistently.\n\nKey features include a movie listing page with detailed descriptions, ratings, and embedded trailers. Users are able to explore different movies and participate in discussions through a community feature, encouraging interaction between users with similar interests. From a development perspective, I implemented database-driven CRUD operations that allow developers or administrators to add, update, and remove movie entries efficiently. This project strengthened my understanding of how frontend components interact with backend databases and improved my ability to structure data-driven applications.",
      images: ["https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"],
      tags: ["HTML", "CSS", "MySQL"],
      category: "web",
      duration: "2 months",
      team: "Team",
      role: "Full-Stack Developer",
      links: { github: "#" },
    },
    {
      title: "Ice Cream Shop Ordering System",
      description: "A desktop-based ordering system for an ice cream shop, focusing on the cashier's workflow.",
      fullDescription: "This project involved building a desktop-based ordering system for an ice cream shop, focusing on the cashier's workflow. The system allows cashiers to take customer orders, check membership status, and manage loyalty points.\n\nI implemented logic to calculate total costs, apply discounts through point redemption, and generate receipts for customers. The system also stores order history, allowing staff to review past transactions. This project improved my understanding of object-oriented programming, control flow, and data handling in C#, while also reinforcing the importance of creating systems that are efficient and easy for staff to use.",
      images: ["https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80"],
      tags: ["C#"],
      category: "web",
      duration: "6 weeks",
      team: "Solo",
      role: "Developer",
      links: { github: "#" },
    },
    {
      title: "F&B Queuing App",
      description: "A prototype for an F&B queuing and pre-ordering application aimed at improving customer waiting experiences.",
      fullDescription: "This project involved designing a prototype for an F&B queuing and pre-ordering application aimed at improving customer waiting experiences. Users can receive a queue number, track their position in real time, and place orders ahead of time.\n\nThe prototype includes flows for account creation, dine-in or self-pickup selection, queue tracking, and notifications. I focused on user journey mapping and interaction design, ensuring that the process felt intuitive and reduced uncertainty for users while waiting.",
      images: [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/48ef57cf3_image.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/65ea7051f_image.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/e269287a1_image.png"
      ],
      tags: ["Figma"],
      category: "mobile",
      duration: "3 weeks",
      team: "Team",
      role: "UI/UX Designer",
      links: { demo: "#" },
    },
    {
      title: "Studying App",
      description: "A studying app designed to help students build consistent study habits through gamification and social motivation.",
      fullDescription: "This studying app was designed to help students build consistent study habits through gamification and social motivation. One of the core features is a virtual pet that grows based on the user's study progress, encouraging regular study sessions.\n\nAdditional features include a built-in study timer, a 'Study with Me' focus mode, and group study sessions that allow users to study together virtually. The design focuses on reducing procrastination while making studying feel more engaging and rewarding. This project strengthened my skills in UX thinking, feature ideation, and user-centered design.",
      images: [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/8ec5ce12c_image.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/b221129ea_image.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/b879f0053_image.png"
      ],
      tags: ["Figma"],
      category: "mobile",
      duration: "3 weeks",
      team: "Team",
      role: "UI/UX Designer",
      links: { demo: "#" },
    },
    {
      title: "Eric Chou Café",
      description: "A café-themed website that combines creativity with functionality, simulating a café experience inspired by the artist Eric Chou.",
      fullDescription: "The Eric Chou Café project combines creativity with functionality by simulating a café-themed website inspired by the artist Eric Chou. The focus of this project was on user experience and visual design, ensuring that the site felt engaging and intuitive.\n\nUsers can browse the café menu, place orders, and participate in a simple game that allows them to earn points. These points are tied to a rewards concept, encouraging repeat interaction. I also designed content sections featuring Eric Chou's music and albums to enhance the theme. Through this project, I developed stronger frontend layout skills and learned how to structure interactive user flows using only HTML and CSS.",
      images: [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/9c9f08c3a_image.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/68ccd1223_image.png"
      ],
      tags: ["HTML", "CSS"],
      category: "web",
      duration: "4 weeks",
      team: "Solo",
      role: "Web Developer",
      links: { github: "#" },
    },
    {
      title: "Beauty & Skincare Web",
      description: "A clean and simple e-commerce browsing experience for beauty and skincare products.",
      fullDescription: "This project focuses on designing a clean and simple e-commerce browsing experience for beauty and skincare products. Users can browse products, view descriptions and prices, and understand key product details before purchasing.\n\nThe emphasis was on layout, visual hierarchy, and ease of navigation rather than complex backend logic. Through this project, I refined my frontend design skills and learned how to present information in a way that is visually appealing and easy for users to understand.",
      images: [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/28f706f2d_image.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693aca9d5e1b223baf27d4d8/8fe516b7f_image.png"
      ],
      tags: ["HTML", "CSS"],
      category: "web",
      duration: "3 weeks",
      team: "Solo",
      role: "Web Developer",
      links: { github: "#" },
    },
  ];



  const filters = [
    { id: 'all', label: 'All Projects', icon: Layers },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-pink-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & Schoolwork
          </h2>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"

              >
                <div className="h-full bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-pink-300 transition-all duration-500 shadow-sm">
                  {/* Project image(s) */}
                  <div className="relative h-80 overflow-hidden bg-white">
                    <div className={`grid h-full gap-0.5 ${
                      project.images.length === 1 ? 'grid-cols-1' :
                      project.images.length === 2 ? 'grid-cols-2' :
                      project.images.length === 3 ? 'grid-cols-3' :
                      'grid-cols-2 grid-rows-2'
                    }`}>
                      {project.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                    


                    {/* Links - always visible for PDF */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-pink-500 hover:text-white transition-colors shadow-md border border-gray-200"
                          title="View Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-pink-500 hover:text-white transition-colors shadow-md border border-gray-200"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                      {project.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm border border-pink-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
}