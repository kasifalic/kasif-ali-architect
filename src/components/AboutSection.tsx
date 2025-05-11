
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
    <section id="about" className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1">Who I Am</h2>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="max-w-2xl space-y-6 text-center">
            <p className="text-muted-foreground font-calibri">
              IT Systems Architect with 10+ years of experience driving enterprise IT transformations 
              across infrastructure, cloud, security, and business systems. Proven expertise in designing 
              and implementing scalable, secure, and automation-first environments in SaaS and hybrid 
              operational models.
            </p>
            
            <div>
              <h3 className="text-xl font-tahoma font-medium mb-3">Education</h3>
              <p className="text-muted-foreground font-calibri">
                M.Sc. Computer Science, Alagappa University, 2016
              </p>
            </div>
            <div>
              <h3 className="text-xl font-tahoma font-medium mb-3">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                {strengths.map((strength, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 hover:border-primary/30 transition-all"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-muted-foreground text-sm font-calibri">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button className="rounded-full bg-primary hover:bg-primary/90 font-calibri">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
