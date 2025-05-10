
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Strand Life Sciences",
      position: "Head of Information Systems",
      period: "2021–2025",
      achievements: [
        "Architected hybrid infra across AWS, Proxmox, Hetzner",
        "Reduced infra spend by 40%",
        "Built end-to-end automated onboarding via Freshservice, JumpCloud",
        "Enabled AI-native IT workflows (LLMs, Freddy AI, Kubiya)"
      ]
    },
    {
      company: "Extreme Networks",
      position: "Site Lead – IT Operations",
      period: "2020–2021",
      achievements: [
        "Transitioned infra from 7 offices to 2 hubs",
        "Designed secure remote work infra",
        "Decommissioned assets and designed DR readiness"
      ]
    },
    {
      company: "Jifflenow",
      position: "Senior IT Engineer",
      period: "2016–2019",
      achievements: [
        "Built IT from scratch for hypergrowth SaaS",
        "Implemented Freshservice, AWS, Azure hybrid cloud",
        "Enabled SSO, DLP for SOC 2 readiness"
      ]
    },
    {
      company: "CenturyLink",
      position: "System Administrator",
      period: "2014–2016",
      achievements: [
        "Managed asset fleet, deployed SCCM/Jamf automation",
        "Administered Exchange, Lync, and testbed virtual labs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl font-bold mt-1">Professional Journey</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-primary/10 bg-secondary/50 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                  <div className="bg-primary/10 p-6">
                    <span className="text-sm text-primary font-medium block">{exp.period}</span>
                    <h3 className="text-xl font-medium mt-1">{exp.position}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-2 h-2 mt-1.5 rounded-full bg-primary"></span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
