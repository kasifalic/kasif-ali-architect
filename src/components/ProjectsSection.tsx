import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "@/data/projectsData";

// Numbered text component - minimal editorial style
const NumberLabel = ({
  number,
}: {
  number: number;
}) => {
  const displayNumber = number.toString().padStart(2, '0');

  return (
    <span className="font-sora text-lg font-bold text-amber-500 w-8 flex-shrink-0 group-hover:text-amber-600 transition-colors">
      {displayNumber}
    </span>
  );
};

// Compact project card for single-screen layout
const CompactProjectCard = ({
  project,
  displayNumber,
}: {
  project: typeof projectsData[0];
  displayNumber: number;
}) => {
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="project-card group cursor-pointer p-4 rounded-2xl bg-white hover:bg-gray-50 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 relative">
        {project.award && (
          <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300 shadow-sm z-10">
            <Trophy className="w-3 h-3 text-amber-600" />
            <span className="text-[10px] font-bold text-amber-700 whitespace-nowrap">Winner</span>
          </div>
        )}
        {!project.award && project.liveUrl && (
          <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 shadow-sm z-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-700 whitespace-nowrap">Live</span>
          </div>
        )}
        <div className="flex items-center gap-4">
          <NumberLabel number={displayNumber} />
          <div className="flex-1 min-w-0">
            <h3 className="font-sora text-sm font-bold text-gray-900 truncate group-hover:text-amber-700 transition-colors">
              {project.name}
            </h3>
            <p className="text-xs text-gray-500 truncate">
              {project.tagline}
            </p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
        </div>
      </div>
    </Link>
  );
};


const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const enterpriseRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Segregate projects by organization type
  const enterpriseProjects = projectsData.filter(p => p.organization === "Amagi Media");
  const personalProjects = projectsData.filter(p => p.organization === "Personal");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Hero image animation
      gsap.fromTo(imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Enterprise section title
      if (enterpriseRef.current) {
        const enterpriseTitle = enterpriseRef.current.querySelector('.section-title');
        gsap.fromTo(enterpriseTitle,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Batch enterprise project cards for better performance
        const enterpriseCards = enterpriseRef.current.querySelectorAll('.project-card');
        if (enterpriseCards.length > 0) {
          ScrollTrigger.batch(enterpriseCards, {
            onEnter: batch => gsap.fromTo(batch,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
            ),
            start: "top 80%",
            once: true
          });
        }
      }

      // Personal section
      if (personalRef.current) {
        const personalTitle = personalRef.current.querySelector('.section-title');
        gsap.fromTo(personalTitle,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Batch personal project cards
        const personalCards = personalRef.current.querySelectorAll('.project-card');
        if (personalCards.length > 0) {
          ScrollTrigger.batch(personalCards, {
            onEnter: batch => gsap.fromTo(batch,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
            ),
            start: "top 80%",
            once: true
          });
        }
      }

      // Batch stats row animation
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item');
        if (statItems.length > 0) {
          ScrollTrigger.batch(statItems, {
            onEnter: batch => gsap.fromTo(batch,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
            ),
            start: "top 85%",
            once: true
          });
        }
      }

      // Subtle floating animation for portrait (continuous, pauses on scroll)
      const portraitFloatAnim = gsap.to(".projects-portrait-float", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Pause animations during scroll for better performance
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        portraitFloatAnim.pause();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          portraitFloatAnim.play();
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative"
      aria-labelledby="projects-heading"
    >
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side - Hero image */}
        <div className="hidden md:flex md:w-[35%] lg:w-[30%] items-end justify-center pb-0 sticky top-0 h-screen">
          <div
            ref={imageRef}
            className="relative projects-portrait-float"
            style={{
              width: 'clamp(300px, 45vw, 520px)',
              height: 'clamp(400px, 65vh, 620px)',
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
              src="/kasif-hero-new.webp"
              alt="Kasif Ali - AI Systems Architect"
              width="520"
              height="620"
              loading="lazy"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(201, 168, 108, 0.2))',
                willChange: 'transform'
              }}
            />
          </div>
        </div>

        {/* Right side - Projects content */}
        <div className="w-full md:w-[65%] lg:w-[70%] px-6 md:px-12 py-16">
          {/* Header */}
          <div ref={headerRef} className="mb-8">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
              Portfolio
            </span>
            <h2 id="projects-heading" className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              Featured Work
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Production systems powering enterprise operations
            </p>
          </div>

          {/* Enterprise Projects Section */}
          <div ref={enterpriseRef} className="mb-8">
            <div className="section-title flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <h3 className="font-sora text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Enterprise Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {enterpriseProjects.map((project, index) => (
                <CompactProjectCard
                  key={project.id}
                  project={project}
                  displayNumber={index + 1}
                />
              ))}
            </div>
          </div>

          {/* Personal Projects Section */}
          <div ref={personalRef} className="mb-8">
            <div className="section-title flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              <h3 className="font-sora text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Personal Projects
              </h3>
              <span className="text-xs text-gray-400">Open Source & Side Projects</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {personalProjects.map((project, index) => (
                <CompactProjectCard
                  key={project.id}
                  project={project}
                  displayNumber={index + 1}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Stats row */}
          <div ref={statsRef} className="mt-8 pt-6 border-t border-gray-200" role="region" aria-label="Project impact statistics">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              <div className="stat-item text-center p-3 rounded-xl bg-white border border-gray-100">
                <span className="font-sora text-xl font-bold text-amber-600" aria-label="15 plus projects shipped">15+</span>
                <p className="text-xs text-gray-500">Projects Shipped</p>
              </div>
              <div className="stat-item text-center p-3 rounded-xl bg-white border border-gray-100">
                <span className="font-sora text-xl font-bold text-amber-600" aria-label="$300 million plus">$300M+</span>
                <p className="text-xs text-gray-500">Revenue Processed</p>
              </div>
              <div className="stat-item text-center p-3 rounded-xl bg-white border border-gray-100">
                <span className="font-sora text-xl font-bold text-amber-600" aria-label="$30 million plus">$30M+</span>
                <p className="text-xs text-gray-500">Spend Managed</p>
              </div>
              <div className="stat-item text-center p-3 rounded-xl bg-white border border-gray-100">
                <span className="font-sora text-xl font-bold text-amber-600" aria-label="121 thousand plus">121K+</span>
                <p className="text-xs text-gray-500">Emails AI-Processed</p>
              </div>
              <div className="stat-item text-center p-3 rounded-xl bg-white border border-gray-100">
                <span className="font-sora text-xl font-bold text-amber-600" aria-label="5,800 plus">5,800+</span>
                <p className="text-xs text-gray-500">Accounts Managed</p>
              </div>
              <div className="stat-item text-center p-3 rounded-xl bg-white border border-gray-100">
                <span className="font-sora text-xl font-bold text-amber-600" aria-label="1,800 plus">1,800+</span>
                <p className="text-xs text-gray-500">Endpoints Tracked</p>
              </div>
              <div className="stat-item text-center p-3 rounded-xl bg-white border border-gray-100">
                <span className="font-sora text-xl font-bold text-amber-600" aria-label="above 80 percent">80%+</span>
                <p className="text-xs text-gray-500">Automation Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
