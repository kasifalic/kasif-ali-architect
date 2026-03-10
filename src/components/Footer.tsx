import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail, Twitter, Instagram, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage) return; // Let default anchor behavior work on home page
    e.preventDefault();
    navigate('/' + href);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kasif-ali/",
      label: "LinkedIn",
      color: "#0A66C2"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/kasifmuthu",
      label: "Twitter",
      color: "#1DA1F2"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/kasifal",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: Github,
      href: "https://github.com/kasifaliwdr",
      label: "GitHub",
      color: "#2a2218"
    },
    {
      icon: Mail,
      href: "mailto:kasifaliwdr@gmail.com",
      label: "Email",
      color: "#C9A86C"
    },
  ];

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBF5 50%, #FFF8F0 100%)',
        borderTop: '1px solid rgba(201, 168, 108, 0.2)'
      }}
    >
      {/* Subtle decorative blob - optimized */}
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-amber-100/15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">

          {/* Brand Section */}
          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: 'Sora, sans-serif',
                background: 'linear-gradient(135deg, #2a2218 0%, #8B7355 50%, #C4A87C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Kasif Ali
            </h3>
            <p
              className="text-[#5a4a3a]/70 text-sm leading-relaxed"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              AI Systems Architect building production systems that scale from startup to enterprise. 10+ years of shipping solutions that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold text-[#5a4a3a] uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={isHomePage ? link.href : `/${link.href}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-[#5a4a3a]/70 hover:text-amber-700 transition-colors text-sm"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4
              className="text-sm font-semibold text-[#5a4a3a] uppercase tracking-wide mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Connect
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)',
                      border: '1px solid rgba(201, 168, 108, 0.2)'
                    }}
                    aria-label={`${social.label} ${social.href.startsWith('http') ? '(opens in new window)' : ''}`}
                  >
                    <SocialIcon
                      className="w-4 h-4 transition-colors"
                      style={{ color: social.color }}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
            <p
              className="text-[#5a4a3a]/60 text-xs mt-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Open to collaborations, consulting, and interesting conversations.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            borderTop: '1px solid rgba(201, 168, 108, 0.15)'
          }}
        >
          <p
            className="text-[#5a4a3a]/60 text-sm flex items-center gap-1.5"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            © {currentYear} Kasif Ali. Crafted with
            <Heart className="w-4 h-4 text-amber-600 fill-amber-600 inline-block" aria-label="love" />
            in Bengaluru.
          </p>

          <p
            className="text-[#5a4a3a]/50 text-xs"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Built with React, TypeScript & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
