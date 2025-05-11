
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
          
          {/* Profile image container with shimmering border */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative rounded-full overflow-hidden p-1">
              {/* Shimmering border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:400%_100%] rounded-full"></div>
              
              {/* Image container with padding to prevent top cropping */}
              <div className="relative z-10 rounded-full overflow-hidden bg-background p-0.5">
                <img 
                  alt="Kasi" 
                  className="w-full h-auto max-w-[400px] object-cover rounded-full"
                  src="/lovable-uploads/f5664741-af6b-48d6-9aac-4c68ac9ee2b6.png" 
                />
              </div>
            </div>
          </div>
          
          {/* Enhanced experience badge */}
          <div className="absolute -bottom-10 right-0 md:right-10">
            <div className="px-4 py-2 rounded-full bg-secondary/70 border border-primary/30 backdrop-blur-md shadow-lg shadow-primary/10 hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5a1 1 0 01-1.414 1.414L13 5.414V8a1 1 0 01-2 0V5.414L9.707 6.707a1 1 0 01-1.414-1.414L10 3.586l.707-.707A1 1 0 0112 2z" clipRule="evenodd" />
                <path d="M8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              </svg>
              <p className="text-base font-semibold text-gradient animate-pulse-slow">10+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
