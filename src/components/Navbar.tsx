
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="text-xl font-bold text-gradient animate-fade-in">Kasif Ali</div>
        <ul className="hidden md:flex items-center gap-8">
          {[
            { href: "#home", label: "Home", delay: "100ms" },
            { href: "#about", label: "About", delay: "200ms" },
            { href: "#experience", label: "Experience", delay: "300ms" },
            { href: "#services", label: "Services", delay: "400ms" },
            { href: "#projects", label: "Projects", delay: "500ms" },
            { href: "#contact", label: "Contact", delay: "600ms" }
          ].map((item, index) => (
            <li key={index} className="animate-fade-in" style={{ animationDelay: item.delay }}>
              <a 
                href={item.href} 
                className="text-sm hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button className="bg-primary hover:bg-primary/80 text-white animate-fade-in animation-delay-700">
          Contact Me
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
