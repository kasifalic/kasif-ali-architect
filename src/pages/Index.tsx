
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AwardsCarousel from "@/components/AwardsCarousel";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import AwardBanner from "@/components/AwardBanner";
import ChatWidget from "@/components/ChatWidget";

// Import custom animations
import "@/styles/animations.css";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Navbar />
      <AwardBanner />
      <main className="pt-16 overflow-x-hidden relative z-10">
        <HeroSection />
        <AwardsCarousel />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ServicesSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
