
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hybrid Infra Stack for Genomics Workflows",
      description: "AWS + Proxmox + Synology with ZTNA & automation, reduced costs by 40%",
      image: "/lovable-uploads/ae7211d6-4c92-4305-92e6-ddfadd908b24.png"
    },
    {
      title: "AI-native IT Agentic System",
      description: "Implemented Make, CrewAI, Freddy AI for automated support & workflows",
      image: "/lovable-uploads/5acc5096-b806-4e21-bcd1-35bf9b13715f.png"
    },
    {
      title: "Remote-First Infra for Extreme Networks",
      description: "Reduced infra footprint while increasing uptime and support SLAs",
      image: "/lovable-uploads/f504a97a-fc4e-431e-a158-d1412245dd65.png"
    },
    {
      title: "Global Onboarding Automation System",
      description: "Zoho → Freshservice → JumpCloud → Workspace integration with scheduled JumpCloud email triggers",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl font-bold mt-1">Featured Work</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-primary/10 bg-secondary/50 hover:bg-secondary/80 transition-colors backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-48 bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
