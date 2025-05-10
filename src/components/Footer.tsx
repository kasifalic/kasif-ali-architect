
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary/70 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-bold text-gradient mb-4 md:mb-0">Kasi</div>
          <div className="flex gap-8">
            <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
            <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-muted/20 mt-6 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kasi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
