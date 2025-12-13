import React from "react";
import FloatingNav from "@/components/portfolio/FloatingNav";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationTimeline from "@/components/portfolio/EducationTimeline";
import CCASection from "@/components/portfolio/CCASection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="h-screen bg-[#0a0a0f] text-white overflow-y-scroll snap-y snap-mandatory">
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <EducationTimeline />
      <CCASection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
