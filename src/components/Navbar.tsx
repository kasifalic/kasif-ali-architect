import React, { useState, useEffect } from "react";
import { Mail, Menu, X, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Debounced scroll handler for better performance
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Debounce section detection to reduce reflows
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll("section[id]");
        let currentSection = "home";

        sections.forEach((section) => {
          const htmlSection = section as HTMLElement;
          const rect = htmlSection.getBoundingClientRect();

          // Use getBoundingClientRect instead of offsetTop (no forced reflow)
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = section.getAttribute("id") || "home";
          }
        });

        setActiveSection(currentSection);
      }, 100); // Debounce by 100ms
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Works", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold"
            style={{
              fontFamily: 'Sora, sans-serif',
              background: 'linear-gradient(135deg, #2a2218 0%, #8B7355 50%, #C4A87C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            aria-label="Kasif Ali - Home"
          >
            Kasif Ali
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.substring(1) ? "active" : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="section-container py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 font-medium ${
                    activeSection === item.href.substring(1)
                      ? "text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kasif-ali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-900"
                  aria-label="LinkedIn profile (opens in new window)"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="mailto:kasifaliwdr@gmail.com"
                  className="p-2 text-gray-500 hover:text-gray-900"
                  aria-label="Send email to kasifaliwdr@gmail.com"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
