
import React from "react";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  const certifications = [
    { name: "Microsoft" },
    { name: "Cisco" },
    { name: "AWS" },
    { name: "Azure" },
    { name: "JumpCloud" },
  ];

  return (
    <section id="certifications" className="py-16 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Certifications</span>
          <h2 className="text-3xl font-bold mt-1">Industry Certifications</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {certifications.map((cert, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="px-5 py-3 text-base font-medium border-2 border-primary hover:bg-primary/10 transition-colors"
            >
              {cert.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
