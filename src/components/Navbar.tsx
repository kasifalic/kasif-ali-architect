
import React, { useState, useEffect } from "react";
import { Mail, Twitter, Instagram } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = "home";
      
      sections.forEach((section) => {
        // Cast section to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || "home";
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="max-w-5xl w-full mx-6 px-6 py-3 rounded-full bg-background/90 backdrop-blur-md border border-muted/20 shadow-sm flex items-center justify-between">
        <div className="text-xl font-bold font-space-grotesk">Portfolio</div>
        <ul className="hidden md:flex items-center gap-6 overflow-x-auto scrollbar-hide">
          <li><a href="#home" className={`text-sm transition-colors ${activeSection === "home" ? "text-primary" : "hover:text-primary"}`}>Home</a></li>
          <li><a href="#about" className={`text-sm transition-colors ${activeSection === "about" ? "text-primary" : "hover:text-primary"}`}>About</a></li>
          <li><a href="#skills" className={`text-sm transition-colors ${activeSection === "skills" ? "text-primary" : "hover:text-primary"}`}>Skills</a></li>
          <li><a href="#experience" className={`text-sm transition-colors ${activeSection === "experience" ? "text-primary" : "hover:text-primary"}`}>Experience</a></li>
          <li><a href="#services" className={`text-sm transition-colors ${activeSection === "services" ? "text-primary" : "hover:text-primary"}`}>Services</a></li>
          <li><a href="#certifications" className={`text-sm transition-colors ${activeSection === "certifications" ? "text-primary" : "hover:text-primary"}`}>Certifications</a></li>
          <li><a href="#contact" className={`text-sm transition-colors ${activeSection === "contact" ? "text-primary" : "hover:text-primary"}`}>Contact</a></li>
        </ul>
        <div className="flex items-center gap-4">
          {/* WhatsApp Icon - Added */}
          <a href="https://wa.me/+923064612677" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm3.5 0a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm3.5 0a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
            </svg>
          </a>
          
          {/* Instagram Icon */}
          <a href="https://instagram.com/kasifal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          
          {/* Medium Icon */}
          <a href="https://medium.com/@kasifaliwdr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M4.37,7.46h0a.49.49,0,0,0-.17-.4L2.33,4.75V4.5h5.2l4,8.85,3.53-8.85h5v.25L18.32,6.7a.29.29,0,0,0-.11.29v10a.29.29,0,0,0,.11.28l1.69,1.95v.25h-8.5v-.25L13.29,17a.58.58,0,0,0-.17-.29V8.39L9,19.21H8.43L3.87,8.39v7.22a.83.83,0,0,0,.22.6L6,19.15v.25H0v-.25L1.89,16.2a.81.81,0,0,0,.21-.6V7.46Z"/>
            </svg>
          </a>
          
          {/* Twitter Icon */}
          <a href="https://twitter.com/kasifmuthu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          
          {/* Mail Icon */}
          <a href="mailto:kasifaliwdr@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
