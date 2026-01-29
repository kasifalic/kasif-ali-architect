import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ArrowDown, Linkedin, FileText } from "lucide-react";

// Typewriter animation component for roles
// Pattern: AI Architect alternates with each other role
const TypewriterRoles = () => {
  const otherRoles = [
    "DevOps Architect",
    "Security Architect",
    "Network Architect",
    "Cloud Architect",
    "Infra Architect",
    "Storage Architect",
    "Solutions Architect"
  ];
  
  // Build alternating pattern: AI, Other1, AI, Other2, AI, Other3...
  const roles = otherRoles.flatMap((role) => ["AI Architect", role]);
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Pause at end, then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);
  
  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{displayText}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
};


const HeroNew = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLSpanElement>(null);
  const thereRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // "Hello" from left
      tl.from(helloRef.current, {
        x: -120,
        opacity: 0,
        duration: 1.2,
      }, "-=0.8");

      // "There" from right
      tl.from(
        thereRef.current,
        {
          x: 120,
          opacity: 0,
          duration: 1.2,
        },
        "-=1"
      );

      // Image scale in
      tl.from(
        imageRef.current,
        {
          scale: 0.85,
          opacity: 0,
          duration: 1.4,
        },
        "-=1.2"
      );

      // Name animation
      tl.from(
        ".hero-name-word",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.6"
      );

      // Role badge
      tl.from(
        roleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      );

      // Buttons
      tl.from(
        ".hero-fade-in",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.3"
      );

      // Scroll indicator
      tl.from(
        ".scroll-indicator",
        {
          y: 15,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.2"
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="h-screen warm-gradient relative overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center px-4 pt-8">
        {/* "Hello [IMAGE] There" row */}
        <div className="relative flex items-center justify-center w-full flex-1 min-h-0">
          {/* "Hello" positioned near the head on left */}
          <span
            ref={helloRef}
            className="absolute left-[15%] md:left-[18%] lg:left-[22%] hero-greeting text-5xl md:text-7xl lg:text-8xl xl:text-9xl z-20"
            style={{ top: '8%' }}
          >
            Hello
          </span>

          {/* Large profile image in center */}
          <div
            ref={imageRef}
            className="relative flex-shrink-0 z-10"
            style={{
              width: 'clamp(350px, 52vw, 720px)',
              height: 'clamp(420px, 60vh, 700px)'
            }}
          >
            <img
              src="/kasif-hero.png"
              alt="Kasif Ali"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* "There" positioned near the head on right */}
          <span
            ref={thereRef}
            className="absolute right-[12%] md:right-[15%] lg:right-[18%] hero-greeting text-5xl md:text-7xl lg:text-8xl xl:text-9xl z-20"
            style={{ top: '8%' }}
          >
            There
          </span>
        </div>

        {/* Bottom section - Name and animated roles */}
        <div className="bottom-content-section relative flex flex-col items-center pb-16">
          {/* "I'm Kasif !" - prominent dark text with exclamation */}
          <div className="relative text-center mb-3">
            <h1 ref={nameRef} className="hero-name-large leading-none flex items-center justify-center gap-3 md:gap-5">
              <span className="hero-name-word inline-block">I'm</span>
              <span className="hero-name-word inline-block hero-name-highlight">Kasif</span>
              <span className="hero-name-word inline-block hero-name-highlight">!</span>
            </h1>
          </div>

          {/* Animated role typewriter */}
          <div ref={roleRef} className="mb-6">
            <TypewriterRoles />
          </div>

          {/* CTA Buttons */}
          <div className="hero-fade-in flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() =>
                window.open("https://www.linkedin.com/in/kasif-ali/", "_blank")
              }
              className="btn-golden-enhanced group flex items-center gap-2"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              <span>Let's Connect</span>
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1MH0Lj4LMVx5sSJiSFj9a1cTGYfh-VXUy/view",
                  "_blank"
                )
              }
              className="btn-elegant-enhanced group flex items-center gap-2"
            >
              <FileText size={18} className="group-hover:scale-110 transition-transform" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - fixed at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hero-fade-in z-30">
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="scroll-indicator group flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-amber-600/50 group-hover:text-amber-700 transition-colors">
            Scroll
          </span>
          <div className="scroll-arrow-container">
            <ArrowDown size={14} className="text-amber-600/60 group-hover:text-amber-700 transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroNew;
