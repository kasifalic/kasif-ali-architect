
import React from "react";
import { Mail, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/70 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-bold font-space-grotesk text-gradient mb-4 md:mb-0">Portfolio</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#certifications" className="text-sm hover:text-primary transition-colors">Certifications</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="flex justify-center gap-6 mt-6">
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
        
        <div className="border-t border-muted/20 mt-6 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
