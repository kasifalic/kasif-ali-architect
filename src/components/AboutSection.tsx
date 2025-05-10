
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const strengths = [
    "Stakeholder collaboration",
    "Blueprinting",
    "Cost optimization (40%)",
    "Uptime improvement",
    "GenAI-powered automation"
  ];

  return (
    <section id="about" className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl font-bold mt-1">Who I Am</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              IT Systems Architect with 10+ years of experience driving enterprise IT transformations 
              across infrastructure, cloud, security, and business systems. Proven expertise in designing 
              and implementing scalable, secure, and automation-first environments in SaaS and hybrid 
              operational models.
            </p>
            <div>
              <h3 className="text-xl font-medium mb-3">Education</h3>
              <p className="text-muted-foreground">
                M.Sc. Computer Science, Alagappa University, 2016
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Key Strengths</h3>
              <ul className="grid grid-cols-2 gap-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <Card className="bg-secondary/50 border border-primary/20 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">My Journey</h3>
                <div className="relative pl-6 border-l border-primary/30 space-y-8">
                  {[
                    {
                      year: "2021-2025",
                      title: "Head of Information Systems",
                      company: "Strand Life Sciences"
                    },
                    {
                      year: "2020-2021",
                      title: "Site Lead – IT Operations",
                      company: "Extreme Networks"
                    },
                    {
                      year: "2016-2019",
                      title: "Senior IT Engineer",
                      company: "Jifflenow"
                    },
                    {
                      year: "2014-2016",
                      title: "System Administrator",
                      company: "CenturyLink"
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[1.6rem] w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                      <span className="text-sm text-primary font-medium block">{item.year}</span>
                      <h4 className="font-medium mt-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.company}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
