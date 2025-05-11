
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Briefcase, Award, GraduationCap } from "lucide-react";

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
    <section id="experience" className="py-20 bg-secondary/30 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 bottom-1/4 -right-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl font-bold mt-1">Professional Journey</h2>
        </div>
        
        {/* Timeline with modern design */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-16 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              {/* Date badge - centered between timeline items */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/10 backdrop-blur-sm">
                  <span className="text-sm font-bold">{exp.period.split('–')[0]}</span>
                </div>
              </div>
              
              {/* Content card - alternating sides */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}></div>
              
              <Card className={`w-full md:w-5/12 border border-primary/10 bg-secondary/50 backdrop-blur-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 animate-fade-in ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-medium text-gradient">{exp.position}</h3>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
