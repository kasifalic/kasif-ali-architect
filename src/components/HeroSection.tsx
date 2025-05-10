import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown, Linkedin } from "lucide-react";
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
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-72 h-72 rounded-full bg-primary/20 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 rounded-full bg-accent/20 bottom-1/4 -right-32 blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute w-16 h-16 rounded-full bg-primary/30 top-1/3 left-1/4 blur-xl animate-float"></div>
        <div className="absolute w-24 h-24 rounded-full bg-accent/30 bottom-1/3 right-1/4 blur-xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 z-10">
          <div className="inline-block px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full mb-2 border border-primary/20">
            <p className="text-xl font-medium typewriter-cursor text-gradient">{displayedRole}</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block">Hello, I'm</span> 
            <span className="shimmer-text">
              Kasi
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
            </span>
          </h1>
          
          <h2 className="text-2xl font-medium text-muted-foreground">Automation-First | GenAI Evangelist</h2>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90 transition-all shadow-lg shadow-[#0077B5]/20 flex items-center gap-2" onClick={() => window.open("https://www.linkedin.com/in/kasif-ali/", "_blank")}>
              <Linkedin size={18} /> Connect on LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center gap-2 backdrop-blur-sm border-primary/20 hover:bg-primary/10 transition-all">
              <Download size={16} /> Download Resume
            </Button>
          </div>
          
          <div className="pt-6 hidden md:block">
            <a href="#about" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              Scroll down to learn more <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="relative w-80 h-80 mx-auto bg-gradient-to-r from-primary/30 to-accent/30 rounded-full flex items-center justify-center animate-float shadow-xl shadow-primary/10">
            {/* Orbit decoration */}
            <div className="absolute w-full h-full rounded-full border border-primary/20 animate-spin-slow"></div>
            <div className="absolute w-[110%] h-[110%] rounded-full border border-accent/20 animate-spin-slow animation-delay-2000 opacity-70"></div>
            
            <img alt="Kasi" className="w-72 h-72 rounded-full object-cover border-4 border-primary/50 shadow-lg hover:scale-105 transition-transform duration-300" src="/lovable-uploads/7ae6d604-a516-4f4a-a0bb-92c21f30ab34.jpg" />
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-background/50 backdrop-blur-md p-3 rounded-full shadow-lg border border-primary/20 hover:scale-110 transition-transform cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center">
              <Mail size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
