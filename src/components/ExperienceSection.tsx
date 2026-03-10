import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  Rocket,
  Globe,
  Dna,
  Sparkles,
  ExternalLink,
  MapPin
} from "lucide-react";
import CompanyWidget from "./CompanyWidget";

gsap.registerPlugin(ScrollTrigger);

interface Chapter {
  number: string;
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  industry: string;
  accentColor: string;
  accentBg: string;
  icon: React.ElementType;
  theShift: string;
  milestones: string[];
  techStack: string[];
  signatureMetric: { value: string; label: string };
  isCurrent?: boolean;
  // Company widget data
  stockSymbol?: string;
  stockExchange?: string;
  newsSearchTerm?: string; // Override company name for news search
  isPrivate?: boolean;
  privateMessage?: string;
}

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const chapters: Chapter[] = [
    {
      number: "05",
      company: "Amagi",
      companyUrl: "https://www.amagi.com/",
      role: "Architect - AI & IT Systems",
      period: "2025 - Present",
      duration: "Current Chapter",
      location: "Bengaluru",
      industry: "Media & Streaming Tech",
      accentColor: "#C9A86C",
      accentBg: "rgba(201, 168, 108, 0.15)",
      icon: Sparkles,
      theShift: "From building AI-native IT to architecting enterprise-wide AI strategy and intelligent automation at scale.",
      milestones: [
        "Shipped 12+ AI-powered internal tools—RAG pipelines, GPT-4 Vision invoice extraction, agentic workflows",
        "Built VendorLens & Billing Dashboard saving ₹40L+/yr in vendor spend & invoice processing",
        "Deployed Identity Lifecycle automating 100% of provisioning/offboarding across 370+ engineers"
      ],
      techStack: ["LLMs", "RAG", "Databricks", "Terraform", "AWS", "Azure", "Python", "Langchain", "Weaviate"],
      signatureMetric: { value: "12+", label: "AI Tools Shipped" },
      isCurrent: true,
      stockSymbol: "AMAGI.NS",
      stockExchange: "NSE"
    },
    {
      number: "04",
      company: "Strand Life Sciences",
      companyUrl: "https://us.strandls.com/",
      role: "Head of Information Systems",
      period: "2021 - 2025",
      duration: "3 years 5 months",
      location: "Bengaluru",
      industry: "Genomics & Life Sciences",
      accentColor: "#059669",
      accentBg: "rgba(5, 150, 105, 0.15)",
      icon: Dna,
      theShift: "The AI awakening—transforming traditional IT into an AI-native, automation-first operation that won India's GenAI Buildathon.",
      milestones: [
        "Architected hybrid infra across AWS, Proxmox, Hetzner—retired VMware",
        "Deployed Freddy AI & Kubiya for GenAI-powered L1 automation",
        "Won India's first GenAI Buildathon—2x recognition"
      ],
      techStack: ["AWS", "Proxmox", "Hetzner", "Terraform", "Freddy AI", "Kubiya", "JumpCloud", "Okta", "Twingate", "Intune", "Wazuh"],
      signatureMetric: { value: "40%", label: "Cost Reduction" },
      isPrivate: true,
      privateMessage: "Private — Genomics & Precision Medicine",
      newsSearchTerm: "Strand Life Sciences genomics"
    },
    {
      number: "03",
      company: "Extreme Networks",
      companyUrl: "https://www.extremenetworks.com/",
      role: "Site Lead - IT Operations",
      period: "2020 - 2021",
      duration: "1 year 5 months",
      location: "Bengaluru",
      industry: "Network Infrastructure",
      accentColor: "#4f46e5",
      accentBg: "rgba(79, 70, 229, 0.15)",
      icon: Globe,
      theShift: "Leading through crisis—architected the company's shift to fully remote-first infrastructure during the pandemic.",
      milestones: [
        "Decommissioned 5+ physical offices, redesigned core IT for distributed teams",
        "Implemented secure remote access with VPN segmentation & RBAC",
        "Maintained 100% infrastructure uptime throughout global transition"
      ],
      techStack: ["Jamf", "Intune", "ServiceNow", "O365", "Azure AD", "VPN", "MDM", "SASE", "DLP"],
      signatureMetric: { value: "100%", label: "Uptime" },
      stockSymbol: "EXTR",
      stockExchange: "NASDAQ"
    },
    {
      number: "02",
      company: "Jifflenow",
      companyUrl: "https://www.jifflenow.com/",
      role: "Senior IT Engineer",
      period: "2016 - 2019",
      duration: "3 years 8 months",
      location: "Bengaluru",
      industry: "SaaS / Meeting Automation",
      accentColor: "#0d9488",
      accentBg: "rgba(13, 148, 136, 0.15)",
      icon: Rocket,
      theShift: "Building from zero—constructed the entire IT infrastructure from scratch, scaling a hypergrowth SaaS from 21 to 350+ users.",
      milestones: [
        "Built IT from ground up across 4 global offices—zero consultants",
        "Designed hybrid cloud architecture with AWS, Azure, VMware",
        "Led 2 office relocations with zero downtime or data loss"
      ],
      techStack: ["AWS", "Azure", "VMware", "JumpCloud", "Okta", "Jamf", "Freshservice", "Sophos", "Juniper", "G Suite"],
      signatureMetric: { value: "21→350+", label: "Users Scaled" },
      isPrivate: true,
      privateMessage: "Private — Acquired by Cvent (Blackstone)",
      newsSearchTerm: "Cvent meeting automation"
    },
    {
      number: "01",
      company: "CenturyLink",
      companyUrl: "https://www.lumen.com/",
      role: "System Administrator",
      period: "2014 - 2016",
      duration: "1 year 5 months",
      location: "Bengaluru",
      industry: "Telecommunications",
      accentColor: "#475569",
      accentBg: "rgba(71, 85, 105, 0.15)",
      icon: Building2,
      theShift: "The foundation—mastering enterprise-scale operations, automation fundamentals, and the discipline of managing critical infrastructure.",
      milestones: [
        "Managed 2000+ device fleet—servers, endpoints, IP phones",
        "Automated OS deployment with WDS, SCCM, and Jamf",
        "Administered Exchange & Lync for company-wide communications"
      ],
      techStack: ["SCCM", "WDS", "Jamf", "Exchange", "Lync", "VMware", "Hyper-V", "Active Directory", "Windows Server"],
      signatureMetric: { value: "2000+", label: "Devices Managed" },
      stockSymbol: "LUMN",
      stockExchange: "NYSE",
      newsSearchTerm: "Lumen Technologies"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(".evolution-header", {
        scrollTrigger: {
          trigger: ".evolution-header",
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Animate chapter cards with alternating directions
      const chapters = document.querySelectorAll(".chapter-card");
      chapters.forEach((card, index) => {
        const direction = index % 2 === 0 ? -60 : 60;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          x: direction,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out"
        });
      });


      // Animate the evolution line
      gsap.from(".evolution-line", {
        scrollTrigger: {
          trigger: ".chapters-container",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
        ease: "power2.out"
      });

      // Pulse animation for current role indicator
      gsap.to(".current-pulse", {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBF5 30%, #FFF8F0 100%)'
      }}
      aria-labelledby="experience-heading"
    >
      {/* Subtle decorative elements - optimized */}
      <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-amber-100/15 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-orange-100/12 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="evolution-header text-center mb-20">
          <span className="inline-block text-amber-600/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            The Evolution
          </span>
          <h2 id="experience-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
            <span className="text-[#2a2218]">From sysadmin to </span>
            <span
              className="italic"
              style={{
                fontFamily: 'Playfair Display, serif',
                background: 'linear-gradient(135deg, #8B7355 0%, #C4A87C 50%, #8B7355 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              architect.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#5a4a3a]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
            10 years. 5 chapters. Building systems that scale from startup to enterprise.
          </p>
        </div>

        {/* Chapters Container */}
        <div className="chapters-container relative">

          {/* Evolution Line - the connecting thread */}
          <div className="evolution-line absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(201, 168, 108, 0.3) 5%, rgba(201, 168, 108, 0.5) 50%, rgba(201, 168, 108, 0.8) 95%, #C9A86C 100%)'
            }}
          />

          {/* Chapter Cards */}
          <div className="space-y-12 lg:space-y-16">
            {chapters.map((chapter, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={chapter.number}
                  className={`chapter-card relative ${isEven ? 'lg:pr-[52%]' : 'lg:pl-[52%]'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center">
                    <div
                      className="w-4 h-4 rounded-full border-2 relative"
                      style={{
                        borderColor: chapter.accentColor,
                        background: chapter.isCurrent ? chapter.accentColor : 'white'
                      }}
                    >
                      {chapter.isCurrent && (
                        <>
                          <div
                            className="current-pulse absolute inset-0 rounded-full"
                            style={{ background: chapter.accentColor }}
                          />
                          <div
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{ background: chapter.accentColor, opacity: 0.4 }}
                          />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Company Widget - positioned on opposite side */}
                  {(chapter.stockSymbol || chapter.isPrivate) && (
                    <div
                      className={`absolute top-0 bottom-0 hidden lg:flex ${
                        isEven ? 'left-[52%] pl-8' : 'right-[52%] pr-8'
                      }`}
                      style={{ width: '44%' }}
                    >
                      <CompanyWidget
                        company={chapter.company}
                        stockSymbol={chapter.stockSymbol}
                        exchange={chapter.stockExchange}
                        accentColor={chapter.accentColor}
                        isPrivate={chapter.isPrivate}
                        privateMessage={chapter.privateMessage}
                        newsSearchTerm={chapter.newsSearchTerm}
                      />
                    </div>
                  )}

                  {/* Card */}
                  <div
                    className={`relative rounded-3xl p-6 md:p-8 transition-all duration-500 group hover:-translate-y-1 ${
                      chapter.isCurrent ? 'ring-2 ring-amber-300/50 shadow-xl shadow-amber-200/30' : ''
                    }`}
                    style={{
                      background: chapter.isCurrent
                        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 240, 0.98) 100%)'
                        : 'rgba(255, 255, 255, 0.9)',
                      border: `1px solid ${chapter.isCurrent ? 'rgba(201, 168, 108, 0.4)' : 'rgba(201, 168, 108, 0.2)'}`
                    }}
                  >
                    {/* Chapter Number - Large Background */}
                    <div
                      className="absolute top-4 right-4 md:top-6 md:right-6 text-6xl md:text-7xl font-bold opacity-10 select-none"
                      style={{
                        fontFamily: 'Sora, sans-serif',
                        color: chapter.accentColor
                      }}
                    >
                      {chapter.number}
                    </div>

                    {/* Top Row: Role & Company */}
                    <div className="relative z-10 mb-6">
                      {/* Current Badge */}
                      {chapter.isCurrent && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                          style={{
                            background: 'linear-gradient(135deg, rgba(201, 168, 108, 0.2) 0%, rgba(232, 213, 163, 0.3) 100%)',
                            color: '#8B7355'
                          }}
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Current Chapter
                        </div>
                      )}

                      {/* Role Title */}
                      <h3
                        className="text-2xl md:text-3xl font-bold text-[#2a2218] mb-2"
                        style={{ fontFamily: 'Sora, sans-serif' }}
                      >
                        {chapter.role}
                      </h3>

                      {/* Company Row */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <a
                          href={chapter.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:opacity-80"
                          style={{ color: chapter.accentColor }}
                          aria-label={`${chapter.company} website (opens in new window)`}
                        >
                          {chapter.company}
                          <ExternalLink className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
                        </a>
                        <span className="text-[#5a4a3a]/50 text-sm">•</span>
                        <span className="text-[#5a4a3a]/60 text-sm">{chapter.industry}</span>
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#5a4a3a]/60">
                        <span
                          className="px-3 py-1 rounded-full"
                          style={{ background: chapter.accentBg, color: chapter.accentColor }}
                        >
                          {chapter.period}
                        </span>
                        <span>{chapter.duration}</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {chapter.location}
                        </span>
                      </div>
                    </div>

                    {/* The Shift */}
                    <div className="relative z-10 mb-6">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#5a4a3a]/40 mb-2 block">
                        The Shift
                      </span>
                      <p
                        className="text-[#5a4a3a]/80 text-base md:text-lg leading-relaxed"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {chapter.theShift}
                      </p>
                    </div>

                    {/* Milestones */}
                    <div className="relative z-10 mb-6">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#5a4a3a]/40 mb-3 block">
                        Key Milestones
                      </span>
                      <div className="space-y-2">
                        {chapter.milestones.map((milestone, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: chapter.accentColor }}
                            />
                            <span className="text-[#5a4a3a]/70 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                              {milestone}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Row: Tech Stack & Signature Metric */}
                    <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-4 border-t border-[#5a4a3a]/10">

                      {/* Tech Stack */}
                      <div className="flex-1">
                        <span className="text-xs font-semibold tracking-wider uppercase text-[#5a4a3a]/40 mb-2 block">
                          Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {chapter.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 hover:scale-105"
                              style={{
                                background: chapter.accentBg,
                                color: chapter.accentColor,
                                borderColor: `${chapter.accentColor}30`
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Signature Metric */}
                      <div className="flex-shrink-0 text-right">
                        <div
                          className="text-3xl md:text-4xl font-bold"
                          style={{
                            fontFamily: 'Sora, sans-serif',
                            color: chapter.accentColor
                          }}
                        >
                          {chapter.signatureMetric.value}
                        </div>
                        <div className="text-xs text-[#5a4a3a]/50 uppercase tracking-wide">
                          {chapter.signatureMetric.label}
                        </div>
                      </div>
                    </div>

                    {/* Hover accent bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: `linear-gradient(90deg, ${chapter.accentColor}, ${chapter.accentColor}80)` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Summary */}
        <div className="mt-20 text-center">
          <div
            className="inline-flex items-center gap-6 px-8 py-5 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(201, 168, 108, 0.1) 0%, rgba(232, 213, 163, 0.15) 100%)',
              border: '1px solid rgba(201, 168, 108, 0.25)'
            }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#2a2218]" style={{ fontFamily: 'Sora, sans-serif' }}>
                10+
              </div>
              <div className="text-xs text-[#5a4a3a]/60 uppercase tracking-wide">Years</div>
            </div>
            <div className="w-px h-10 bg-amber-300/40" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#2a2218]" style={{ fontFamily: 'Sora, sans-serif' }}>
                5
              </div>
              <div className="text-xs text-[#5a4a3a]/60 uppercase tracking-wide">Companies</div>
            </div>
            <div className="w-px h-10 bg-amber-300/40" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#2a2218]" style={{ fontFamily: 'Sora, sans-serif' }}>
                4
              </div>
              <div className="text-xs text-[#5a4a3a]/60 uppercase tracking-wide">Industries</div>
            </div>
            <div className="w-px h-10 bg-amber-300/40" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Sora, sans-serif', color: '#C9A86C' }}>
                1
              </div>
              <div className="text-xs text-[#5a4a3a]/60 uppercase tracking-wide">Mission</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
