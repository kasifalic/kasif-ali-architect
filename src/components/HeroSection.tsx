
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Linkedin } from "lucide-react";

const HeroSection = () => {
  const roles = ["IT Architect", "Cloud Architect", "Network Architect", "GenAI Architect", "Storage Architect", "Infra Architect"];
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const typeEffect = () => {
      if (!isDeleting) {
        // Typing
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause at end before deleting
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (displayedRole.length > 0) {
          setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
          setTypingSpeed(50);
        } else {
          // Change to next role
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/20 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/20 bottom-1/4 -right-32 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute w-20 h-20 rounded-full bg-primary/30 top-1/3 left-1/4 blur-xl animate-float"></div>
        <div className="absolute w-28 h-28 rounded-full bg-accent/30 bottom-1/3 right-1/4 blur-xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-block px-6 py-3 bg-secondary/50 backdrop-blur-sm rounded-full mb-4 border border-primary/20">
            <p className="text-2xl font-medium typewriter-cursor text-gradient">{displayedRole}</p>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="block mb-2">Hello, I'm</span> 
            <span className="name-highlight animate-shimmer bg-shimmer bg-clip-text text-transparent">
              Kasi
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
            </span>
          </h1>
          
          <h2 className="text-3xl font-medium text-muted-foreground">Automation-First | GenAI Evangelist</h2>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90 transition-all shadow-lg shadow-[#0077B5]/20 flex items-center gap-2 text-lg px-6 py-6" onClick={() => window.open("https://www.linkedin.com/in/kasif-ali/", "_blank")}>
              <Linkedin size={20} /> Connect on LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center gap-2 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all text-lg px-6 py-6">
              <Download size={18} /> Download Resume
            </Button>
          </div>
          
          <div className="pt-6 hidden md:block">
            <a href="#about" className="flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors">
              Scroll down to learn more <ArrowDown size={16} className="animate-bounce" />
            </a>
          </div>
        </div>
        
        <div className="relative z-10">
          {/* Decorative element between image and text */}
          <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 z-10">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          
          {/* Profile image container - smaller size */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              alt="Kasi" 
              className="w-full h-auto max-w-[450px] object-contain"
              src="/lovable-uploads/f5664741-af6b-48d6-9aac-4c68ac9ee2b6.png" 
            />
          </div>
          
          {/* Enhanced experience badge */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-1.5 h-10 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            <div className="px-8 py-3 rounded-full bg-secondary/70 border border-primary/30 backdrop-blur-md shadow-lg shadow-primary/10 hover:scale-105 transition-transform duration-300">
              <p className="text-base md:text-lg font-semibold text-gradient animate-pulse-slow">10+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
