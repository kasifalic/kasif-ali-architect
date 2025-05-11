
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, Code, Shield, Users, LayoutDashboard, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "IT Architecture Consulting",
      description: "Design of scalable, hybrid/multi-cloud environments",
      icon: <LayoutDashboard className="w-6 h-6 text-primary" />
    },
    {
      title: "AI-Native IT Automation",
      description: "Integrating Freddy AI, Kubiya, n8n, LLM workflows into IT operations",
      icon: <Star className="w-6 h-6 text-primary" />
    },
    {
      title: "Infra as Code (IaC)",
      description: "Provisioning via Terraform, config via Ansible, monitored by Zabbix",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      title: "Security Engineering",
      description: "Implementation of Zero Trust, Wazuh, JumpCloud, ZTNA",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "IT Lifecycle Automation",
      description: "Complete employee onboarding/offboarding orchestration",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Cost Optimization Advisory",
      description: "FinOps, SaaS spend reviews, vendor negotiations",
      icon: <BriefcaseIcon className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Services</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1">What I Offer</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border border-primary/10 bg-secondary/50 hover:bg-secondary/80 transition-colors backdrop-blur-sm
                animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-tahoma font-medium mb-2">{service.title}</h3>
                <p className="text-muted-foreground font-calibri">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
