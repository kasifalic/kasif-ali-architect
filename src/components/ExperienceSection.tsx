
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Amagi",
      companyUrl: "https://www.amagi.com/",
      companyNote: "",
      position: "Architect - AI & IT Systems",
      period: "2025 - Present",
      achievements: [
        "IT & AI Systems Strategy Leadership",
        "Intelligent Automation & Infrastructure Modernization",
        "Cross-Functional Collaboration on AI & Data Initiatives",
        "Enabling Enterprise AI Readiness"
      ]
    },
    {
      company: "Strand Life Sciences",
      companyUrl: "https://us.strandls.com/",
      companyNote: "(A Reliance Company)",
      position: "Head of Information Systems",
      period: "2021–2025",
      achievements: [
        "Architected hybrid infra across AWS, Proxmox, Hetzner",
        "Reduced infra spend by 40% with cloud optimization",
        "Built end-to-end automated onboarding systems",
        "Enabled AI-native IT workflows with LLMs and automation"
      ]
    },
    {
      company: "Extreme Networks",
      companyUrl: "https://www.extremenetworks.com/",
      companyNote: "",
      position: "Site Lead – IT Operations",
      period: "2020–2021",
      achievements: [
        "Transitioned infra from 7 offices to 2 hubs",
        "Designed secure remote work infrastructure",
        "Implemented disaster recovery protocols",
        "Decommissioned legacy assets across locations"
      ]
    },
    {
      company: "Jifflenow",
      companyUrl: "https://www.jifflenow.com/",
      companyNote: "(A Cvent Company)",
      position: "Senior IT Engineer",
      period: "2016–2019",
      achievements: [
        "Built IT from scratch for hypergrowth SaaS",
        "Implemented Freshservice, AWS, Azure hybrid cloud",
        "Enabled SSO, DLP for SOC 2 readiness",
        "Designed scalable network infrastructure"
      ]
    },
    {
      company: "CenturyLink",
      companyUrl: "https://www.centurylink.com/",
      companyNote: "",
      position: "System Administrator",
      period: "2014–2016",
      achievements: [
        "Managed asset fleet of 2000+ devices",
        "Deployed SCCM/Jamf automation workflows",
        "Administered Exchange, Lync server environments",
        "Maintained testbed virtual labs for R&D"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/10 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 bottom-1/4 -right-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1">Professional Journey</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className={`bg-background/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 overflow-hidden shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in animation-delay-2000'}`}>
              <div className="relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0"></div>
                <Badge variant="outline" className="absolute top-4 right-4 bg-primary/10 font-tahoma px-3 py-1 rounded-full z-10">
                  {exp.period}
                </Badge>
              </div>
              
              <CardContent className="p-8 relative">
                <div className="space-y-6">
                  {/* Position as main heading with Tahoma font */}
                  <h3 className="text-2xl font-tahoma font-bold text-foreground mb-1">{exp.position}</h3>
                  
                  {/* Company name with shimmer effect and Calibri font */}
                  <div className="shimmer-text font-calibri text-xl mb-6">
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {exp.company}
                    </a>
                    {exp.companyNote && <span className="ml-2 text-muted-foreground">{exp.companyNote}</span>}
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-muted-foreground font-calibri">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;



