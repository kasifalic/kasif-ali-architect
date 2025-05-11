
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, Code, Shield, Users, LayoutDashboard, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "IT Architecture Consulting",
      description: "Design of scalable, hybrid/multi-cloud environments",
      icon: <LayoutDashboard className="w-10 h-10 text-primary" />
    },
    {
      title: "AI-Native IT Automation",
      description: "Integrating Freddy AI, Kubiya, n8n, LLM workflows into IT operations",
      icon: <Star className="w-10 h-10 text-primary" />
    },
    {
      title: "Infra as Code (IaC)",
      description: "Provisioning via Terraform, config via Ansible, monitored by Zabbix",
      icon: <Code className="w-10 h-10 text-primary" />
    },
    {
      title: "Security Engineering",
      description: "Implementation of Zero Trust, Wazuh, JumpCloud, ZTNA",
      icon: <Shield className="w-10 h-10 text-primary" />
    },
    {
      title: "IT Lifecycle Automation",
      description: "Complete employee onboarding/offboarding orchestration",
      icon: <Users className="w-10 h-10 text-primary" />
    },
    {
      title: "Cost Optimization Advisory",
      description: "FinOps, SaaS spend reviews, vendor negotiations",
      icon: <BriefcaseIcon className="w-10 h-10 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 bottom-1/4 -right-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Services</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1">What I Offer</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-background/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 overflow-hidden shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1
                animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  {/* Accent background element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full z-0"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="font-tahoma font-bold text-xl">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground font-calibri ml-2 border-l-2 border-primary/30 pl-4">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;



