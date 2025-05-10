
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
    <section id="skills" className="py-12 bg-secondary/5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Professional Skills</span>
          <h2 className="text-3xl font-bold mt-1">Areas of Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border border-primary/10 backdrop-blur-sm hover:shadow-md hover:shadow-primary/5 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <Separator className="mb-4 bg-border/30" />
                
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
