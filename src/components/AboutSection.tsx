
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Cloud, Server, Network, Database, Layers } from "lucide-react";

const AboutSection = () => {
  const strengths = [
    "Stakeholder collaboration",
    "Blueprinting",
    "Cost optimization",
    "Uptime improvement",
    "GenAI-powered automation",
    "Security framework implementation"
  ];
  
  const brands = {
    "Cloud": ["AWS", "Azure", "GCP", "Hetzner", "Digital Ocean", "Linode"],
    "Infrastructure": ["Cisco", "Datadog", "Dell", "HPE", "Lenovo", "Nutanix", "Prometheus", "Proxmox", "VMware", "Zabbix"],
    "Network": ["Aruba", "Cisco", "Cyberhaven", "Fortinet", "Juniper", "Meraki", "Netgear", "Ruckus", "Sophos", "Twingate", "Ubiquiti"],
    "Storage": ["Ceph", "Hitachi", "HPE", "NetApp", "Synology", "TrueNAS"],
    "SaaS": ["Intune", "Jamf", "Jira", "Jumpcloud", "Manage Engine", "Okta", "Zoho"]
  };
  
  const getBrandIcon = (category: string) => {
    switch(category) {
      case "Cloud":
        return <Cloud className="w-6 h-6" />;
      case "Infrastructure":
        return <Server className="w-6 h-6" />;
      case "Network":
        return <Network className="w-6 h-6" />;
      case "Storage":
        return <Database className="w-6 h-6" />;
      case "SaaS":
        return <Layers className="w-6 h-6" />;
      default:
        return <Cloud className="w-6 h-6" />;
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 bottom-1/4 -right-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1">Who I Am</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 mb-12">
            <div className="text-muted-foreground font-calibri text-lg leading-relaxed">
              <p className="mb-6">
                IT Systems Architect with 10+ years of experience driving enterprise IT transformations 
                across infrastructure, cloud, security, and business systems. Proven expertise in designing 
                and implementing scalable, secure, and automation-first environments in SaaS and hybrid 
                operational models.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {strengths.map((strength, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 bg-secondary/30 backdrop-blur-sm p-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-md duration-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-calibri">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Education Section - Moved below the summary */}
          <div>
            <Card className="bg-background/60 backdrop-blur-sm border-primary/20 overflow-hidden shadow-lg relative max-w-xl mx-auto">
              <CardContent className="p-6 relative">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full z-0"></div>
                
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-tahoma font-bold">Education</h3>
                </div>
                
                <div className="pl-4 border-l-2 border-primary/30">
                  <div className="shimmer-text text-xl mb-2">M.Sc. Computer Science</div>
                  <p className="text-muted-foreground font-calibri text-lg">
                    <a 
                      href="https://www.alagappauniversity.ac.in/homepage" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
                    >
                      Alagappa University
                    </a>, 2016
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Removed Brands Experience Section */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
