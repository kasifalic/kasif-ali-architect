
import React, { useState, useEffect } from "react";
import { Mail, Twitter, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background change
      setScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      let currentSection = "home";
      
      sections.forEach((section) => {
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

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://instagram.com/kasifal", 
      icon: <Instagram className="w-5 h-5" />
    },
    { 
      name: "Medium", 
      href: "https://medium.com/@kasifaliwdr", 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M4.37,7.46h0a.49.49,0,0,0-.17-.4L2.33,4.75V4.5h5.2l4,8.85,3.53-8.85h5v.25L18.32,6.7a.29.29,0,0,0-.11.29v10a.29.29,0,0,0,.11.28l1.69,1.95v.25h-8.5v-.25L13.29,17a.58.58,0,0,0-.17-.29V8.39L9,19.21H8.43L3.87,8.39v7.22a.83.83,0,0,0,.22.6L6,19.15v.25H0v-.25L1.89,16.2a.81.81,0,0,0,.21-.6V7.46Z"/>
            </svg>
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/kasifmuthu", 
      icon: <Twitter className="w-5 h-5" />
    },
    { 
      name: "Email", 
      href: "mailto:kasifaliwdr@gmail.com", 
      icon: <Mail className="w-5 h-5" />
    }
  ];

  return (
    <header className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          container mx-auto px-4 md:px-8
          ${scrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
          transition-all duration-300 rounded-xl
        `}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Portfolio
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-1 py-2 text-sm font-medium transition-colors duration-300
                    ${activeSection === item.href.substring(1) ? 'text-primary' : 'text-muted-foreground hover:text-primary'}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-muted/20 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
                    ${activeSection === item.href.substring(1) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-4 border-t border-muted/20 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
