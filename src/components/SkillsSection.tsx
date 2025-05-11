
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Code, Server, Briefcase } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Strategy & Leadership",
      icon: Briefcase,
      skills: [
        "IT Strategy & Org Design",
        "Team Building & Remote Leadership",
        "IT Governance & Compliance (SOC2, ISO27001)",
        "Cultural Enablement (GenAI Training, Async-first Delivery)"
      ]
    },
    {
      title: "Architecture & Infrastructure",
      icon: Server,
      skills: [
        "Infrastructure Architecture (Cloud, Hybrid, On-Prem)",
        "Cloud Platforms: AWS, Azure, Hetzner, Proxmox",
        "Terraform, Ansible, Docker, Zabbix",
        "DR/BCP Planning & Resilience Engineering"
      ]
    },
    {
      title: "Operations & Automation",
      icon: Code,
      skills: [
        "Automation-First IT Operations",
        "AI/LLM Workflow Integration",
        "Process Optimization & Lifecycle Automation",
        "ITSM Platform Automation (Freshservice)"
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      skills: [
        "SaaS & Identity Management (Google Workspace, JumpCloud)",
        "Endpoint & Network Security (ZTNA, Twingate, Ubiquiti, Wazuh)",
        "CI/CD Readiness & Tooling",
        "Remote Workforce Enablement & Asset Lifecycle"
      ]
    },
    {
      title: "Service Management",
      icon: Users,
      skills: [
        "IT Service Delivery & Global Support Ops",
        "Vendor Strategy & Cost Optimization (30%+ YoY Savings)",
        "IT Budgeting, FinOps & SaaS Consolidation",
        "Stakeholder Management & Cross-functional Coordination"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 bottom-1/4 -right-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Professional Skills</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1">Areas of Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-secondary/80 backdrop-blur-sm border border-primary/10 overflow-hidden shadow-lg shadow-primary/5 
                animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6 justify-center">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-tahoma font-bold text-xl text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center gap-3 transition-all duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                      <span className="font-calibri text-sm text-foreground/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
