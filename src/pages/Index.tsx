
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import HeroNew from "@/components/HeroNew";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Scroll to hash section on navigation (e.g. from article page breadcrumb → /#projects)
  useEffect(() => {
    if (location.hash) {
      // Small delay to let sections render before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip Navigation Link for Keyboard Users */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="overflow-x-hidden">
        <HeroNew />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
