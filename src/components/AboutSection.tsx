import React, { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Sparkles,
  TrendingUp,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  X,
  PenLine,
  ExternalLink,
} from "lucide-react";

const buildathonGalleries = [
  {
    label: "ZapGap — 1st Place, Agents",
    edition: "1st Edition",
    thumbnail: "/buildathon/1/1734468930822.webp",
    images: [
      { src: "/buildathon/1/1734468930822.webp", caption: "Team with certificates on stage — 1st Place, Agents Category" },
      { src: "/buildathon/1/1734468929514.webp", caption: "Winners Reveal — 100xEngineers GenAI Buildathon, 1st Edition" },
      { src: "/buildathon/1/1734468930778.webp", caption: "Certificate of Achievement — 1st Position, Agents Category" },
      { src: "/buildathon/1/1734468948571.webp", caption: "Winner's cap — #1 out of 1,502 participants" },
    ],
  },
  {
    label: "Investo (Nivesha) — 1st Place, Open",
    edition: "2nd Edition",
    thumbnail: "/buildathon/1/2/1750749629775.webp",
    images: [
      { src: "/buildathon/1/2/1750749629775.webp", caption: "On stage with certificates — 1st Place, Open Category" },
      { src: "/buildathon/1/2/1750749613073.webp", caption: "Certificate of Achievement — 1st Position, Open Category" },
      { src: "/buildathon/1/2/1750749627715.webp", caption: "Prize haul — 100xEngineers tee, certificate, cap, gift basket" },
      { src: "/buildathon/1/2/1750749614731.webp", caption: "Winner's cap — #1 out of 3,497 participants" },
    ],
  },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{ galleryIndex: number; imageIndex: number } | null>(null);

  const openLightbox = (galleryIndex: number) => setLightbox({ galleryIndex, imageIndex: 0 });
  const closeLightbox = () => setLightbox(null);
  const goToImage = (delta: number) => {
    if (!lightbox) return;
    const gallery = buildathonGalleries[lightbox.galleryIndex];
    const next = (lightbox.imageIndex + delta + gallery.images.length) % gallery.images.length;
    setSlideDirection(delta > 0 ? 1 : -1);
    setLightbox({ ...lightbox, imageIndex: next });
  };

  // Swipe support for lightbox
  const [slideDirection, setSlideDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  }, []);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);
  const onTouchEnd = useCallback(() => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) >= 50) {
      goToImage(distance > 0 ? 1 : -1);
    }
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToImage(-1);
      if (e.key === 'ArrowRight') goToImage(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  // Key milestones from PROJECT_INVENTORY - real numbers
  const milestones = [
    { number: "$300M+", label: "Revenue Processed", sublabel: "SPOG - Databricks financial platform" },
    { number: "121K+", label: "Emails AI-Classified", sublabel: "GPT-4 powered billing intelligence" },
    { number: "5,800+", label: "Identities Managed", sublabel: "SAP → GWS → OneLogin automation" },
    { number: "80%+", label: "Automation Rate", sublabel: "L1 tickets auto-resolved via Freddy AI" },
  ];

  // Core expertise derived from PROJECT_INVENTORY - AI-first focus
  const expertise = [
    { num: "01", title: "LLM Systems & RAG", desc: "LangChain, LlamaIndex, Weaviate, ChromaDB, PGVector, GPT-4 MultiModals, Gemini MultiModals, Hybrid Semantic Search, Vector Embeddings" },
    { num: "02", title: "Agentic AI & Orchestration", desc: "Multi-Agent Orchestration, CrewAI, AutoGen, LangGraph, Python Agents, Google ADK, ReAct Agents, Autonomous Agents, Tool Calling" },
    { num: "03", title: "Vision & Multimodal AI", desc: "GPT-4 Vision, Gemini Agentic Vision, Document Intelligence, OCR + LLM, Vision-Language Models, Multimodal RAG" },
    { num: "04", title: "Enterprise Data Pipelines", desc: "PySpark, Databricks, Delta Lake at $300M+ scale" },
    { num: "05", title: "LLM Deployment & Operations", desc: "vLLM Serving, Ollama, Ray Serve, LiteLLM Gateway, Production LLM Operations, Cost Optimization, Model Serving" },
    { num: "06", title: "LLM Fine-tuning & Safety", desc: "NVIDIA NeMo, Mistral Models, Llama Models, LoRA/PEFT, Instruction Tuning, NeMo Guardrails, Responsible AI, Model Quantization" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main statement
      gsap.from(".about-statement", {
        scrollTrigger: {
          trigger: ".about-statement",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animate the portrait
      gsap.from(".about-portrait", {
        scrollTrigger: {
          trigger: ".about-portrait",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        x: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Batch multiple animations into single ScrollTrigger for better performance
      ScrollTrigger.batch(".bento-item", {
        onEnter: batch => gsap.from(batch, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }),
        start: "top 75%",
        once: true
      });

      ScrollTrigger.batch(".expertise-item", {
        onEnter: batch => gsap.from(batch, {
          x: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out"
        }),
        start: "top 80%",
        once: true
      });

      ScrollTrigger.batch(".milestone-card", {
        onEnter: batch => gsap.from(batch, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out"
        }),
        start: "top 75%",
        once: true
      });

      // Floating animations (pause on scroll for better performance)
      const trophyFloatAnim = gsap.to(".trophy-float", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      const portraitFloatAnim = gsap.to(".portrait-float", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Pause animations during scroll for better performance
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        trophyFloatAnim.pause();
        portraitFloatAnim.pause();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          trophyFloatAnim.play();
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
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFBF5 50%, #FFFFFF 100%)'
      }}
      aria-labelledby="about-heading"
    >
      {/* Subtle decorative elements - optimized */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-amber-100/20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-orange-100/15 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 max-w-7xl">

        {/* Top Section: Statement on Left, Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Left: Opening Statement */}
          <div className="about-statement">
            <span className="inline-block text-amber-600/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              The Architect
            </span>
            <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
              <span className="text-[#2a2218]">I build systems that </span>
              <span
                className="italic"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  background: 'linear-gradient(135deg, #8B7355 0%, #C4A87C 50%, #8B7355 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                outlast me.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#5a4a3a]/80 leading-relaxed mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Shipping production LLM systems at enterprise scale—RAG-powered document intelligence processing 100K+ records, GPT-4 Vision automating multimodal workflows, and multi-agent orchestration driving operational efficiency. Building where GenAI meets infrastructure reliability.
            </p>

            {/* Expertise from PROJECT_INVENTORY - AI-first */}
            <div className="expertise-list">
              <span className="text-amber-600/60 text-xs font-semibold tracking-[0.15em] uppercase mb-4 block">
                What I Ship
              </span>
              <div className="space-y-3">
                {expertise.map((item, index) => (
                  <div key={index} className="expertise-item flex items-start gap-4 py-2 group">
                    <span
                      className="text-xs font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(201, 168, 108, 0.25) 0%, rgba(232, 213, 163, 0.35) 100%)',
                        color: '#8B7355'
                      }}
                    >
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <span className="text-[#2a2218] text-sm font-semibold block" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {item.title}
                      </span>
                      <span className="text-[#5a4a3a]/60 text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="about-portrait flex justify-center lg:justify-end" ref={imageRef}>
            <div
              className="relative portrait-float"
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
                alt="Kasif Ali - AI Systems Architect with 10+ years of experience"
                width="520"
                height="620"
                loading="lazy"
                className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(201, 168, 108, 0.2))',
                  willChange: 'transform'
                }}
              />
            </div>
          </div>
        </div>

        {/* Bento Grid - Asymmetric, interesting */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mb-20">

          {/* Large Feature: 2x Buildathon Winner */}
          <div className="bento-item md:col-span-7 relative group">
            <div
              className="h-full min-h-[320px] md:min-h-[380px] rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.15) 100%)',
                border: '1px solid rgba(201, 168, 108, 0.3)'
              }}
            >
              {/* Decorative gradient blob */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-60 blur-2xl transition-all duration-500 group-hover:scale-110"
                style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)' }}
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-amber-600 trophy-float" />
                      <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">Recognition</span>
                    </div>
                    <h3
                      className="text-3xl md:text-4xl font-bold text-[#2a2218]"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      2x Buildathon Winner
                    </h3>
                    <p className="text-[#5a4a3a]/70 mt-2 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      India's First GenAI Buildathon by 100xEngineers
                    </p>
                  </div>
                </div>

                {/* Buildathon photo thumbnails */}
                <div className="flex-1 flex items-end">
                  <div className="flex gap-3 w-full">
                    {buildathonGalleries.map((gallery, idx) => (
                      <button
                        key={idx}
                        onClick={() => openLightbox(idx)}
                        className="flex-1 h-40 md:h-48 rounded-2xl relative overflow-hidden group/img cursor-pointer"
                        aria-label={`View ${gallery.label} gallery`}
                      >
                        <img
                          src={gallery.thumbnail}
                          alt={gallery.label}
                          className="w-full h-full object-cover object-[center_30%] transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <span className="text-white text-xs font-semibold tracking-wide uppercase opacity-80">{gallery.edition}</span>
                          <span className="block text-white text-sm font-bold mt-0.5 drop-shadow-lg">{gallery.label.split(' — ')[1]}</span>
                        </div>
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-mono opacity-0 group-hover/img:opacity-100 transition-opacity">
                          {gallery.images.length} photos
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - stacked items */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">

            {/* Years of Experience */}
            <div className="bento-item flex-1">
              <div
                className="h-full min-h-[160px] rounded-3xl p-6 relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(201, 168, 108, 0.25)'
                }}
              >
                <div className="relative z-10">
                  <span
                    className="text-6xl md:text-7xl font-bold"
                    style={{
                      fontFamily: 'Sora, sans-serif',
                      background: 'linear-gradient(135deg, #8B7355 0%, #C4A87C 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    10+
                  </span>
                  <p className="text-[#5a4a3a] text-lg font-medium mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Years shipping production systems
                  </p>
                  <p className="text-[#5a4a3a]/60 text-sm mt-1">
                    From startup (21 users) to enterprise ($300M+)
                  </p>
                </div>
                {/* Subtle decorative */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-amber-200/20 blur-xl" />
              </div>
            </div>

            {/* Philosophy snippet */}
            <div className="bento-item flex-1">
              <div
                className="h-full min-h-[160px] rounded-3xl p-6 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #2a2218 0%, #3d3428 100%)'
                }}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <Sparkles className="w-6 h-6 text-amber-400/80" />
                  <div>
                    <p
                      className="text-white/90 text-lg md:text-xl leading-relaxed"
                      style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
                    >
                      "The best AI systems don't replace workflows—they make impossible workflows possible."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Cards - Real metrics from PROJECT_INVENTORY */}
        <div className="milestones-container mb-16">
          <div className="text-center mb-10">
            <span className="text-amber-600/80 text-sm font-semibold tracking-[0.2em] uppercase">
              Production Impact
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="milestone-card group"
              >
                <div
                  className="h-full p-5 md:p-6 rounded-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid rgba(201, 168, 108, 0.2)'
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="w-4 h-4 text-amber-600/60" />
                    </div>
                    <span
                      className="text-2xl md:text-3xl font-bold block"
                      style={{
                        fontFamily: 'Sora, sans-serif',
                        color: '#2a2218'
                      }}
                    >
                      {milestone.number}
                    </span>
                    <span className="text-[#5a4a3a] font-semibold text-sm block mt-1">
                      {milestone.label}
                    </span>
                    <span className="text-[#5a4a3a]/50 text-xs block mt-1 leading-snug">
                      {milestone.sublabel}
                    </span>
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: 'linear-gradient(90deg, #C9A86C, #E8D5A3)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Writing row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Education */}
          <div className="bento-item">
            <div
              className="p-6 rounded-2xl text-center h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(201, 168, 108, 0.08) 0%, rgba(232, 213, 163, 0.12) 100%)',
                border: '1px solid rgba(201, 168, 108, 0.2)'
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-amber-700" />
                <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">Education</span>
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="text-xl font-bold text-[#2a2218]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    M.Sc. Computer Science
                  </h4>
                  <p className="text-[#5a4a3a]/70 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>2016</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2a2218]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    B.Sc. Computer Science
                  </h4>
                  <p className="text-[#5a4a3a]/70 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>2012</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Writing */}
          <div className="bento-item">
            <div
              className="p-6 rounded-2xl h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(201, 168, 108, 0.08) 0%, rgba(232, 213, 163, 0.12) 100%)',
                border: '1px solid rgba(201, 168, 108, 0.2)'
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <PenLine className="w-5 h-5 text-amber-700" />
                <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">Featured Writing</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: "India's Lifeline — The Largest Railway Network", url: "https://medium.com/@kasifaliwdr/indias-lifeline-the-largest-railway-network-in-the-world-10b066f56acb" },
                  { title: "The Science Behind the Golden State Killer's Capture", url: "https://medium.com/@kasifaliwdr/the-science-behind-the-golden-state-killers-capture-ffac9e61bb6d" },
                  { title: "LGBTQA+ — All the Colors of the Rainbow", url: "https://medium.com/@kasifaliwdr/lgbtqa-all-the-colors-of-the-rainbow-64d2631f5ded" },
                ].map((article, i) => (
                  <a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-700/60 mt-0.5 shrink-0 group-hover:text-amber-700 transition-colors" />
                    <span
                      className="text-sm text-[#2a2218]/80 group-hover:text-amber-700 transition-colors leading-snug"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {article.title}
                    </span>
                  </a>
                ))}
              </div>
              <a
                href="https://medium.com/@kasifaliwdr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs text-amber-700/50 hover:text-amber-700 transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                View all on Medium →
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Buildathon Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute top-16 right-4 text-white/40 text-xs font-mono md:hidden">
              Swipe to navigate
            </div>

            {/* Title */}
            <div className="absolute top-4 left-4 md:left-1/2 md:-translate-x-1/2 text-white">
              <p className="text-sm font-semibold opacity-80">
                {buildathonGalleries[lightbox.galleryIndex].label}
              </p>
            </div>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToImage(-1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToImage(1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.img
                key={`${lightbox.galleryIndex}-${lightbox.imageIndex}`}
                src={buildathonGalleries[lightbox.galleryIndex].images[lightbox.imageIndex].src}
                alt={buildathonGalleries[lightbox.galleryIndex].images[lightbox.imageIndex].caption}
                custom={slideDirection}
                variants={{
                  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

            {/* Caption + dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white/80 text-sm max-w-md">
                {buildathonGalleries[lightbox.galleryIndex].images[lightbox.imageIndex].caption}
              </p>
              <div className="flex gap-2 justify-center mt-3">
                {buildathonGalleries[lightbox.galleryIndex].images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSlideDirection(i > lightbox.imageIndex ? 1 : -1); setLightbox({ ...lightbox, imageIndex: i }); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === lightbox.imageIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
              <p className="text-white/40 text-xs mt-2 font-mono">
                {lightbox.imageIndex + 1} / {buildathonGalleries[lightbox.galleryIndex].images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
