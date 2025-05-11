
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Server, Shield, Users, Briefcase, ChartBar, FileText, Globe, Router, Network, Wifi, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
  gradient: string;
  proficiency: number;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Strategy & Leadership",
      icon: Briefcase,
      skills: [
        "IT Strategy & Org Design",
        "Team Building & Remote Leadership",
        "IT Governance & Compliance (SOC2, ISO27001)",
        "Cultural Enablement (GenAI Training, Async-first Delivery)"
      ],
      color: "text-purple-500",
      gradient: "from-purple-500/20 to-indigo-500/10",
      proficiency: 95
    },
    {
      title: "Architecture & Infrastructure",
      icon: Server,
      skills: [
        "Infrastructure Architecture (Cloud, Hybrid, On-Prem)",
        "Cloud Platforms: AWS, Azure, Hetzner, Proxmox",
        "Terraform, Ansible, Docker, Zabbix",
        "DR/BCP Planning & Resilience Engineering"
      ],
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-cyan-500/10",
      proficiency: 98
    },
    {
      title: "Operations & Automation",
      icon: Code,
      skills: [
        "Automation-First IT Operations",
        "AI/LLM Workflow Integration",
        "Process Optimization & Lifecycle Automation",
        "ITSM Platform Automation (Freshservice)"
      ],
      color: "text-indigo-500",
      gradient: "from-indigo-500/20 to-purple-500/10",
      proficiency: 92
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      skills: [
        "SaaS & Identity Management (Google Workspace, JumpCloud)",
        "Endpoint & Network Security (ZTNA, Twingate, Ubiquiti, Wazuh)",
        "CI/CD Readiness & Tooling",
        "Remote Workforce Enablement & Asset Lifecycle"
      ],
      color: "text-red-500",
      gradient: "from-red-500/20 to-orange-500/10",
      proficiency: 90
    },
    {
      title: "Service Management",
      icon: Users,
      skills: [
        "IT Service Delivery & Global Support Ops",
        "Vendor Strategy & Cost Optimization (30%+ YoY Savings)",
        "IT Budgeting, FinOps & SaaS Consolidation",
        "Stakeholder Management & Cross-functional Coordination"
      ],
      color: "text-amber-500",
      gradient: "from-amber-500/20 to-yellow-500/10",
      proficiency: 94
    },
    {
      title: "Networking",
      icon: Router,
      skills: [
        "Network Architecture & Implementation (LAN/WAN/SD-WAN)",
        "Secure Remote Access Solutions & VPN Management",
        "Mesh Networks & Multi-site Connectivity Design",
        "Network Monitoring & Performance Optimization"
      ],
      color: "text-cyan-500",
      gradient: "from-cyan-500/20 to-blue-500/10",
      proficiency: 88
    }
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      y: -8,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 8px 10px -6px rgba(124, 58, 237, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 5, color: "#8b5cf6" }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/10 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/10 top-1/4 -left-32 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-accent/10 bottom-1/4 -right-32 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Professional Skills</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Areas of Expertise</h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-3"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              className="cursor-pointer"
            >
              <Card className={`bg-background/60 backdrop-blur-sm border border-primary/10 overflow-hidden shadow-lg relative h-full transition-all duration-500 ${activeCategory === index ? 'ring-2 ring-primary/50' : ''}`}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 transition-opacity duration-300 ${activeCategory === index ? 'opacity-30' : ''}`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="relative mb-6">
                    {/* Accent corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full z-0"></div>
                    
                    <div className="flex items-center gap-3 relative z-10">
                      <motion.div 
                        className={`p-3 rounded-lg ${category.color} bg-background/80 transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                        animate={activeCategory === index ? { scale: [1, 1.2, 1], rotate: [0, 5, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon className="w-6 h-6" />
                      </motion.div>
                      <h3 className={`font-tahoma font-bold text-xl transition-colors duration-300 ${activeCategory === index ? category.color : ''}`}>
                        {category.title}
                      </h3>
                    </div>
                    
                    {/* Proficiency bar */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1 text-xs">
                        <span className="font-medium">Proficiency</span>
                        <span className={`${category.color} font-semibold`}>{category.proficiency}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r from-primary to-accent rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${category.proficiency}%` }}
                          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="flex items-start gap-2 group"
                        variants={skillItemVariants}
                        whileHover="hover"
                        custom={skillIndex}
                      >
                        <div className={`mt-1 ${category.color} transition-colors duration-300`}>
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="font-calibri text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Shine effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none"
                    initial={{ x: "-100%" }}
                    animate={activeCategory === index ? { x: "200%" } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;



