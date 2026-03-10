import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ArrowDown, Linkedin } from "lucide-react";

// Terminal Command Interface
interface TerminalLine {
  type: 'command' | 'output' | 'prompt';
  text: string;
  delay?: number;
}

// Interactive Terminal Component
const Terminal = () => {
  const [lines, setLines] = useState<{ type: string; text: string; visible: boolean }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isRestarting, setIsRestarting] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const terminalScript: TerminalLine[] = [
    { type: 'command', text: '$ whoami', delay: 45 },
    { type: 'output', text: 'Kasif Ali', delay: 25 },
    { type: 'command', text: '$ cat current_role.txt', delay: 45 },
    { type: 'output', text: '→ AI & IT Systems Architect @ Amagi', delay: 20 },
    { type: 'command', text: '$ ls ~/ai-projects/', delay: 45 },
    { type: 'output', text: 'rag-systems/  llm-automation/  agentic-workflows/  genai-buildathon-winner/', delay: 18 },
    { type: 'command', text: '$ echo $EXPERIENCE', delay: 45 },
    { type: 'output', text: '10+ years shipping production systems', delay: 25 },
    { type: 'command', text: '$ cat mission.txt', delay: 45 },
    { type: 'output', text: '"Building AI systems that outlast me"', delay: 22 },
  ];

  // Reset and restart the terminal
  const restartTerminal = () => {
    setIsRestarting(true);
    setTimeout(() => {
      setLines([]);
      setCurrentLineIndex(0);
      setCurrentCharIndex(0);
      setIsTyping(true);
      setIsRestarting(false);
    }, 500);
  };

  useEffect(() => {
    if (currentLineIndex >= terminalScript.length) {
      setIsTyping(false);
      // Wait 4 seconds, then restart
      const restartTimeout = setTimeout(() => {
        restartTerminal();
      }, 4000);
      return () => clearTimeout(restartTimeout);
    }

    const currentLine = terminalScript[currentLineIndex];
    const typingSpeed = currentLine.delay || 50;

    if (currentCharIndex === 0) {
      // Add new line placeholder
      setLines(prev => [...prev, { type: currentLine.type, text: '', visible: true }]);
    }

    if (currentCharIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setLines(prev => {
          const newLines = [...prev];
          newLines[newLines.length - 1] = {
            ...newLines[newLines.length - 1],
            text: currentLine.text.slice(0, currentCharIndex + 1)
          };
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Line complete, pause then move to next
      const pauseDuration = currentLine.type === 'command' ? 350 : 500;
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Terminal Window */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(42, 34, 24, 0.97) 0%, rgba(30, 24, 18, 0.98) 100%)',
          border: '1px solid rgba(201, 168, 108, 0.35)',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(201, 168, 108, 0.15)'
        }}
      >
        {/* Title Bar */}
        <div
          className="flex items-center gap-3 px-5 py-3.5"
          style={{
            background: 'linear-gradient(180deg, rgba(201, 168, 108, 0.12) 0%, rgba(201, 168, 108, 0.04) 100%)',
            borderBottom: '1px solid rgba(201, 168, 108, 0.2)'
          }}
        >
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400/90 hover:bg-red-400 transition-colors cursor-pointer" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400/90 hover:bg-amber-400 transition-colors cursor-pointer" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-400/90 hover:bg-green-400 transition-colors cursor-pointer" />
          </div>
          {/* Title */}
          <div className="flex-1 text-center">
            <span
              className="text-sm font-medium tracking-wide"
              style={{ color: 'rgba(201, 168, 108, 0.8)', fontFamily: "'JetBrains Mono', monospace" }}
            >
              kasif@architect:~/portfolio
            </span>
          </div>
          {/* Spacer for symmetry */}
          <div className="w-16" />
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className={`p-6 font-mono leading-loose transition-opacity duration-500 ${isRestarting ? 'opacity-0' : 'opacity-100'}`}
          style={{
            height: '280px',
            minHeight: '280px',
            maxHeight: '280px',
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: '15px',
            overflow: 'hidden'
          }}
          role="region"
          aria-label="Terminal animation showing developer information"
          aria-live="polite"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={`mb-2 ${line.type === 'command' ? 'text-amber-200' : 'text-emerald-400/90'}`}
            >
              {line.text}
              {/* Blinking cursor only while typing */}
              {index === lines.length - 1 && isTyping && (
                <span className="animate-pulse text-amber-400 ml-0.5">▌</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Subtle reflection */}
      <div
        className="h-6 mx-6 rounded-b-xl opacity-20"
        style={{
          background: 'linear-gradient(180deg, rgba(42, 34, 24, 0.4) 0%, transparent 100%)',
          filter: 'blur(6px)',
          transform: 'scaleY(-0.25) translateY(-100%)'
        }}
      />
    </div>
  );
};


const HeroNew = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Image scale in
      tl.from(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
        },
        "+=0.2"
      );

      // Subtle floating animation for portrait (continuous, pauses on scroll)
      const portraitFloatAnim = gsap.to(".portrait-float", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Pause animations during scroll for better performance
      let scrollTimeout: ReturnType<typeof setTimeout>;
      const handleScroll = () => {
        portraitFloatAnim.pause();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          portraitFloatAnim.play();
        }, 150); // Resume after 150ms of no scrolling
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Terminal slides up
      tl.from(
        terminalRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      );

      // Buttons fade in
      tl.from(
        ".hero-btn",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
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

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen warm-gradient relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">

        {/* Portrait - Centered and prominent */}
        <div
          ref={imageRef}
          className="relative flex-shrink-0 z-10 mb-6 portrait-float"
          style={{
            width: 'clamp(300px, 45vw, 520px)',
            height: 'clamp(400px, 65vh, 620px)'
          }}
        >
          {/* Glow behind image - optimized blur */}
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 200, 150, 0.4) 0%, rgba(255, 220, 180, 0.15) 50%, transparent 70%)',
              transform: 'scale(1.2)'
            }}
            aria-hidden="true"
          />
          {/* Portrait image */}
          <img
            src="/kasif-hero-new.png"
            alt="Kasif Ali - AI Systems Architect"
            width="520"
            height="620"
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(201, 168, 108, 0.2))',
              willChange: 'transform'
            }}
          />
        </div>

        {/* Static value prop — visible immediately without animation */}
        <h1 className="text-center mb-2 px-4">
          <span className="block text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Sora', sans-serif", color: '#2a2218' }}>
            Kasif Ali
          </span>
          <span className="block text-base sm:text-lg md:text-xl mt-2 font-medium" style={{ fontFamily: "'Outfit', sans-serif", color: '#5a4a3a' }}>
            AI & IT Systems Architect — 10+ Years Shipping Production Systems
          </span>
        </h1>

        {/* Terminal Section - The interactive detail */}
        <div ref={terminalRef} className="w-full max-w-3xl px-4 mb-8">
          <Terminal />
        </div>

        {/* CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/kasif-ali/", "_blank")
            }
            className="hero-btn btn-golden-enhanced group flex items-center gap-2"
            aria-label="Connect on LinkedIn (opens in new window)"
          >
            <Linkedin size={18} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span>Let's Connect</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator - fixed at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="scroll-indicator group flex flex-col items-center gap-1.5"
          aria-label="Scroll to projects section"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-amber-600/50 group-hover:text-amber-700 transition-colors">
            Scroll
          </span>
          <div className="scroll-arrow-container">
            <ArrowDown size={14} className="text-amber-600/60 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroNew;
