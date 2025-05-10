
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  // Animation references
  const sectionRef = useRef<HTMLElement>(null);
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  // List of roles to cycle through
  const roles = [
    "GenAI Architect",
    "Infra Architect", 
    "Cloud Architect", 
    "Security Architect", 
    "Network Architect", 
    "Storage Architect"
  ];

  useEffect(() => {
    // Add animation classes on component mount
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('[data-animate]');
      
      // Remove initial hidden state
      setTimeout(() => {
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('in-view');
          }, i * 200); // Stagger animations
        });
      }, 300);
    }
    
    // Simulate typing completion after 3 seconds
    const typingTimer = setTimeout(() => {
      setTypingComplete(true);
    }, 3000);
    
    return () => {
      clearTimeout(typingTimer);
    };
  }, []);
  
  // Handle role cycling
  useEffect(() => {
    if (!typingComplete) return;
    
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000); // Match this with the fadeIn animation duration
    
    return () => clearInterval(roleInterval);
  }, [typingComplete, roles.length]);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden section-reveal"
    >
      <div className="absolute inset-0 overflow-hidden -z-10 bg-grid">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 -top-20 -left-20 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 -bottom-32 -right-32 blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold whitespace-nowrap">
              <span className="inline-block typing-container">
                <span className="typing-text">Hello, I'm Kasif Ali</span>
              </span>
            </h1>
            
            {typingComplete && (
              <h2 className="text-xl font-medium text-muted-foreground role-animation whitespace-nowrap">
                <span className="text-gradient">{roles[currentRoleIndex]}</span>
              </h2>
            )}
          </div>
          
          <div 
            className="flex gap-4 opacity-0" 
            data-animate
            style={{animationDelay: "0.8s"}}
          >
            <Button className="bg-primary hover:bg-primary/80 text-white">
              View Portfolio
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-primary/20 hover:bg-primary/10 transition-all">
              <Download size={16} /> Download Resume
            </Button>
          </div>
        </div>
        
        <div className="relative opacity-0 animate-fade-in animation-delay-500">
          <div className="absolute w-72 h-72 rounded-full bg-accent/20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl animate-pulse-slow"></div>
          <div className="absolute w-64 h-64 rounded-full border border-primary/20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow"></div>
          
          <div className="relative w-80 h-80 mx-auto flex items-center justify-center animate-float">
            <img 
              alt="Kasif Ali" 
              className="w-72 h-72 rounded-full object-cover border-4 border-primary/30 shadow-[0_0_40px_rgba(142,81,255,0.2)]" 
              src="/lovable-uploads/670c51f8-10c7-4095-bf8a-fc6925cc396c.jpg" 
            />
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-full shadow-[0_0_20px_rgba(142,81,255,0.3)] animate-bounce-soft">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Mail size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
