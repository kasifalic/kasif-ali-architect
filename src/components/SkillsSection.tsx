
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Cloud, Database, Server, Shield, Users, Briefcase, ChartBar, FileText, Globe } from "lucide-react";

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
        "IT Budgeting, FinOps & SaaS Consolidation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Professional Skills</span>
          <h2 className="text-3xl font-bold mt-1">Areas of Expertise</h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="snap-center"
                style={{ flex: '0 0 300px' }}
              >
                <Card 
                  className="overflow-hidden border border-primary/10 backdrop-blur-sm transition-all duration-300 
                  hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/30
                  animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    
                    <Separator className="mb-4 bg-border/30" />
                    
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li 
                          key={skillIndex} 
                          className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                          <span className="text-muted-foreground text-sm">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {skillCategories.map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-primary/30"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
