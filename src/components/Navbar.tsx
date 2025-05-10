
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="text-xl font-bold text-gradient">Kasi</div>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#home" className="text-sm hover:text-primary transition-colors">Home</a></li>
          <li><a href="#about" className="text-sm hover:text-primary transition-colors">About</a></li>
          <li><a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a></li>
          <li><a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a></li>
          <li><a href="#services" className="text-sm hover:text-primary transition-colors">Services</a></li>
          <li><a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a></li>
        </ul>
        <Button className="bg-primary hover:bg-primary/90">Contact Me</Button>
      </nav>
    </header>
  );
};

export default Navbar;
