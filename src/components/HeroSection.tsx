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
    let timer: NodeJS.Timeout;
    
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

    timer = setTimeout(typeEffect, typingSpeed);
    
    // Cleanup function to prevent memory leaks
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [displayedRole, isDeleting, roleIndex, roles]);

  const resumeUrl = "https://drive.google.com/file/d/1vwn6GV7cExB_LPBhDO56BgyXHnr_x9gA/view?usp=sharing";

  const handleDownloadResume = () => {
    // Fallback in case the a tag doesn't work
    window.open(resumeUrl, "_blank");
  };

  // Brands for the marquee
  const heroBrands = [
    "AWS", "Azure", "GCP", "Cisco", "Datadog", "Dell", "HPE", "Lenovo", "Nutanix", 
    "Prometheus", "Proxmox", "VMware", "Zabbix", "Aruba", "Cyberhaven", "Fortinet", 
    "Juniper", "Meraki", "Netgear", "Ruckus", "Sophos", "Twingate", "Ubiquiti", 
    "Ceph", "Hitachi", "NetApp", "Synology", "TrueNAS", "Intune", "Jamf", "Jira", 
    "Jumpcloud", "Manage Engine", "Okta", "Zoho"
  ];

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
      
      <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 xl:gap-32 items-center px-4 md:px-8">
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
          
          <div className="relative overflow-hidden my-2">
            <h2 className="text-3xl font-medium font-calibri flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="relative group">
                <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Automation-First</span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
              
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs">|</span>
              
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">GenAI Evangelist</span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 to-purple-600 transform origin-left animate-shimmer bg-[length:400%_100%]"></span>
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 pt-6">
            {/* LinkedIn Button with modern design */}
            <div className="group relative w-full sm:w-auto overflow-hidden">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
              
              <Button 
                className="relative w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 border-0 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base px-7 py-6 font-medium z-10 transition-all duration-300 shadow-xl group-hover:shadow-blue-500/30"
                onClick={() => window.open("https://www.linkedin.com/in/kasif-ali/", "_blank")}
              >
                <span className="relative">
                  <Linkedin size={18} className="absolute left-0 top-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 group-hover:-translate-x-2 transition-all duration-300" />
                  <Linkedin size={18} className="opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" />
                </span>
                <span className="ml-6">Connect on LinkedIn</span>
              </Button>
            </div>
            
            {/* Resume Button with modern design */}
            <div className="group relative w-full sm:w-auto overflow-hidden">
              {/* Button subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-violet-400/30 to-violet-600/30 opacity-0 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <a 
                href={resumeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
                onClick={handleDownloadResume}
              >
                <Button 
                  variant="outline" 
                  className="relative w-full bg-background/30 backdrop-blur-md border border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 rounded-xl flex items-center justify-center gap-3 text-sm sm:text-base px-7 py-6 font-medium z-10 transition-all duration-300 shadow-lg group-hover:shadow-violet-500/20"
                >
                  <span className="relative">
                    <Download size={18} className="absolute left-0 top-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 transition-all duration-300" />
                    <Download size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[2px] transition-all duration-300" />
                  </span>
                  <span className="ml-6">Download Resume</span>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Scroll down text removed to prevent overlap with brand marquee */}
        </div>
        
        <div className="relative z-10 flex justify-center md:justify-end">
          {/* Decorative line removed as requested */}
          
          {/* Experience badge removed from this position */}
          
          {/* Profile image container with shimmering border */}
          <div className="relative w-full max-w-[400px] flex items-center">
            {/* Experience badge positioned to overlay the top of the profile image */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex justify-center">
              <div 
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/80 border border-primary/40 backdrop-blur-md shadow-lg shadow-primary/10 hover:scale-105 transition-transform duration-300 flex items-center gap-1.5 md:gap-2"
                aria-label="10+ Years Experience badge"
                role="text"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5a1 1 0 01-1.414 1.414L13 5.414V8a1 1 0 01-2 0V5.414L9.707 6.707a1 1 0 01-1.414-1.414L10 3.586l.707-.707A1 1 0 0112 2z" clipRule="evenodd" />
                  <path d="M8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                </svg>
                <p className="text-xs md:text-lg font-extrabold text-gradient animate-pulse-slow tracking-wide">10+ Years Experience</p>
              </div>
            </div>
            
            <div className="relative rounded-full overflow-hidden">
              {/* Shimmering border effect - make it thicker */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:400%_100%]"></div>
              
              {/* Image container with no gap - adjust scale to completely fill border */}
              <div className="relative z-10 rounded-full overflow-hidden" style={{ transform: 'scale(1)' }}>
                <img 
                  alt="Kasi" 
                  className="w-full h-auto object-cover"
                  src="/lovable-uploads/f5664741-af6b-48d6-9aac-4c68ac9ee2b6.png" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Center label for brands - positioned lower to avoid overlap with profile image */}
      <div className="absolute bottom-20 sm:bottom-28 left-0 right-0 flex justify-center">
        <span className="px-4 py-1 bg-background/50 backdrop-blur-md rounded-full text-xs text-muted-foreground/70 border border-primary/10">
          Brands I Worked On
        </span>
      </div>
      
      {/* Brands marquee at the bottom of hero section - positioned with proper spacing below the image */}
      <div className="absolute -bottom-24 sm:bottom-0 left-0 right-0 py-6 bg-secondary/10 backdrop-blur-sm overflow-hidden w-[100vw] -translate-x-[calc((100vw-100%)/2)]">
        <div className="hero-brands-marquee">
          <div className="hero-brands-track">
            {/* All brands in a single line */}
            {[...heroBrands, ...heroBrands].map((brand, index) => (
              <span key={`hero-brand-${index}`} className="hero-brand-tag">{brand}</span>
            ))}
          </div>
        </div>

        {/* Scoped CSS for hero brands with performance optimizations and browser compatibility */}
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-brands-marquee {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          
          .hero-brands-track {
            display: inline-block;
            white-space: nowrap;
            animation: hero-brands-scroll 60s linear infinite;
            will-change: transform;
            transform: translateZ(0);
          }
          
          @media (prefers-reduced-motion: reduce) {
            .hero-brands-track {
              animation-duration: 120s;
            }
          }
          
          .hero-brand-tag {
            display: inline-block;
            padding: 8px 16px;
            margin: 0 8px;
            border-radius: 8px;
            background: linear-gradient(to right, rgba(252, 165, 241, 0.1), rgba(191, 245, 255, 0.1));
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: relative;
            overflow: hidden;
            color: rgba(255, 255, 255, 0.9);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-size: 300% 100%;
            background-image: linear-gradient(to right, #a78bfa, #93c5fd, #67e8f9, #93c5fd, #a78bfa);
            animation: hero-brand-shimmer 8s linear infinite;
            font-family: 'Tahoma', 'Arial', sans-serif;
            font-weight: 700;
            text-rendering: optimizeLegibility;
          }
          
          /* Fallback for browsers that don't support background-clip: text */
          @supports not (background-clip: text) {
            .hero-brand-tag {
              color: rgba(255, 255, 255, 0.9);
              background: rgba(100, 100, 255, 0.2);
              text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            }
          }
          
          .hero-brand-tag::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg, 
              transparent, 
              rgba(255, 255, 255, 0.2), 
              transparent
            );
            animation: hero-brand-shine 3s infinite;
          }
          
          @keyframes hero-brands-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes hero-brand-shine {
            100% { left: 100%; }
          }
          
          @keyframes hero-brand-shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 300% 50%; }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .hero-brand-tag {
              animation-duration: 16s;
            }
            .hero-brand-tag::before {
              animation-duration: 6s;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default HeroSection;

