import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Brain,
  DollarSign,
  Shield,
  Mail,
  Bot,
  BarChart3,
  Cloud,
  GraduationCap,
  RefreshCw,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  name: string;
  tagline: string;
  type: string;
  organization: string;
  description: string;
  userStory: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  icon: React.ElementType;
  color: string;
  tier: "hero" | "featured" | "mention";
}

const projects: Project[] = [
  {
    id: 1,
    name: "VendorLens",
    tagline: "Smart Vendor Spend Management",
    type: "FinOps",
    organization: "Amagi Media",
    description:
      "Comprehensive SaaS vendor management platform tracking $27M+ in software spending across 300+ vendors with renewal alerts and department analytics.",
    userStory:
      "As a Finance Director, I want to see all vendor renewals in one place so I can negotiate better contracts and avoid surprise charges.",
    techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Spend Tracked", value: "$27M+" },
      { label: "Vendors", value: "306" },
      { label: "Tools", value: "373" },
      { label: "Departments", value: "13" },
    ],
    icon: DollarSign,
    color: "bg-amber-500",
    tier: "hero",
  },
  {
    id: 2,
    name: "Unified Posture Hub",
    tagline: "IT Compliance Dashboard",
    type: "Security",
    organization: "Amagi Media",
    description:
      "Real-time compliance monitoring tracking ManageEngine, Trend Micro, and Cloudflare WARP installations across 1,178+ company assets.",
    userStory:
      "As an IT Security Manager, I want real-time visibility into which devices are missing security software so I can remediate before audits.",
    techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "FreshService"],
    metrics: [
      { label: "Assets", value: "1,178" },
      { label: "Compliance", value: "70.2%" },
      { label: "Tools Monitored", value: "3" },
      { label: "Departments", value: "All" },
    ],
    icon: Shield,
    color: "bg-emerald-500",
    tier: "hero",
  },
  {
    id: 3,
    name: "Billing Dashboard",
    tagline: "AI-Powered Invoice Management",
    type: "AI/Finance",
    organization: "Amagi Media",
    description:
      "Comprehensive billing email management with AI classification (GPT-5.2), multi-stage invoice extraction, and hybrid semantic search.",
    userStory:
      "As a Billing Analyst, I want AI to automatically classify and extract invoice data from emails so I can focus on exceptions, not data entry.",
    techStack: ["React", "FastAPI", "pgvector", "GPT-5.2", "Vision API"],
    metrics: [
      { label: "AI Model", value: "GPT-5.2" },
      { label: "Search", value: "Semantic" },
      { label: "Currencies", value: "5" },
      { label: "Regions", value: "4" },
    ],
    icon: Brain,
    color: "bg-violet-500",
    tier: "hero",
  },
  {
    id: 4,
    name: "Payable Dashboard",
    tagline: "Email Analytics Platform",
    type: "AI/Operations",
    organization: "Amagi Media",
    description:
      "Email monitoring and analytics for Accounts Payable with AI-powered semantic search and team productivity tracking.",
    userStory:
      "As an AP Manager, I want to track team response times and identify vendors with repeated queries to improve our SLA compliance.",
    techStack: ["React", "TypeScript", "FastAPI", "pgvector", "OpenAI"],
    metrics: [
      { label: "Emails", value: "21,226" },
      { label: "Team Size", value: "10" },
      { label: "Search", value: "Hybrid" },
      { label: "SLA Target", value: "48hrs" },
    ],
    icon: Mail,
    color: "bg-blue-500",
    tier: "featured",
  },
  {
    id: 5,
    name: "ZapGap Cloud Sidekick",
    tagline: "AI Agent Platform",
    type: "AI Agents",
    organization: "Personal",
    description:
      "AI-powered cloud operations platform with autonomous agents for SRE auto-remediation, DevOps self-service, and cost optimization.",
    userStory:
      "As an SRE, I want AI agents to automatically detect memory leaks and restart services so I don't get woken up at 2 AM.",
    techStack: ["React", "TypeScript", "Framer Motion", "AI/LLM"],
    metrics: [
      { label: "MTTR", value: "<1min" },
      { label: "Ticket Reduction", value: "40%" },
      { label: "Use Cases", value: "3" },
      { label: "Status", value: "Live" },
    ],
    icon: Bot,
    color: "bg-rose-500",
    tier: "featured",
  },
  {
    id: 6,
    name: "Cursor AI Dashboard",
    tagline: "AI Usage Analytics",
    type: "AI Analytics",
    organization: "Amagi Media",
    description:
      "Analytics dashboard for monitoring Cursor AI usage across organization since Cursor doesn't provide native analytics.",
    userStory:
      "As an IT Admin, I want to track which AI models our developers use most so I can optimize our Cursor subscription.",
    techStack: ["Python", "Streamlit", "Cursor API"],
    metrics: [
      { label: "Models Tracked", value: "4+" },
      { label: "Metrics", value: "Real-time" },
      { label: "Export", value: "CSV/JSON" },
      { label: "Users", value: "All" },
    ],
    icon: BarChart3,
    color: "bg-indigo-500",
    tier: "featured",
  },
  {
    id: 7,
    name: "Cost Savvy Cloud Chat",
    tagline: "Cloud Cost Intelligence",
    type: "AI/FinOps",
    organization: "Personal",
    description: "Upload cloud bills and chat with AI for cost optimization insights.",
    userStory:
      "As a CTO, I want to ask natural language questions about cloud spending.",
    techStack: ["React", "TypeScript", "Tailwind", "AI/LLM"],
    metrics: [
      { label: "Interface", value: "Chat" },
      { label: "Analysis", value: "AI" },
    ],
    icon: Cloud,
    color: "bg-sky-500",
    tier: "mention",
  },
  {
    id: 8,
    name: "Sahayak",
    tagline: "AI Learning Platform",
    type: "Education",
    organization: "Personal",
    description: "AI-powered learning platform with multi-language support.",
    userStory: "As a learner, I want an AI tutor that adapts to my pace.",
    techStack: ["React", "JavaScript", "Firebase", "i18n"],
    metrics: [
      { label: "Languages", value: "Multi" },
      { label: "AI Tutor", value: "Yes" },
    ],
    icon: GraduationCap,
    color: "bg-green-500",
    tier: "mention",
  },
  {
    id: 9,
    name: "Rydoo India Sync",
    tagline: "Expense Automation",
    type: "Automation",
    organization: "Amagi Media",
    description: "Automated expense management synchronization system.",
    userStory: "As a Finance Manager, I want expenses to sync automatically.",
    techStack: ["Python", "API Integration"],
    metrics: [
      { label: "Type", value: "Sync" },
      { label: "Automation", value: "Full" },
    ],
    icon: RefreshCw,
    color: "bg-orange-500",
    tier: "mention",
  },
];

const ProjectCard = ({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      });
    }
  }, [index]);

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="group project-card cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {project.type}
        </span>
        <h3 className="font-sora text-xl font-bold text-gray-900">
          {project.name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">
          {project.tagline}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-600 rounded"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-600 rounded">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

const ProjectDetail = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className={`w-14 h-14 ${project.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              {project.organization} · {project.type}
            </span>
            <h2 className="font-sora text-2xl font-bold text-gray-900 mt-1">
              {project.name}
            </h2>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="bg-amber-50 rounded-2xl p-5 mb-6">
          <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
            User Story
          </span>
          <p className="text-gray-700 mt-2 italic">"{project.userStory}"</p>
        </div>

        <div className="mb-6">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Impact Metrics
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-gray-50 rounded-xl p-4 text-center">
                <span className="font-sora text-xl font-bold text-gray-900 block">
                  {metric.value}
                </span>
                <span className="text-xs text-gray-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 font-mono text-sm bg-gray-100 text-gray-700 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }
  }, []);

  const heroProjects = projects.filter((p) => p.tier === "hero");
  const featuredProjects = projects.filter((p) => p.tier === "featured");
  const otherProjects = projects.filter((p) => p.tier === "mention");

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-white">
      <div className="section-container">
        <div ref={titleRef} className="mb-16">
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Featured Work
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl">
            9 production applications built for enterprise scale across AI, FinOps, and Security.
          </p>
        </div>

        {/* Hero Projects */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Enterprise Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            AI & Automation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 3}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Additional Work
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 6}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
