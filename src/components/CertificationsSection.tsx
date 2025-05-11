
import React from "react";
import {
  Cloud,
  Network,
  CloudCog,
  KeyRound
} from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    { name: "Microsoft", icon: <Cloud size={28} className="text-primary" /> },
    { name: "Cisco", icon: <Network size={28} className="text-primary" /> },
    { name: "AWS", icon: <CloudCog size={28} className="text-primary" /> },
    { name: "Azure", icon: <Cloud size={28} className="text-primary" /> },
    { name: "JumpCloud", icon: <KeyRound size={28} className="text-primary" /> },
  ];

  return (
    <section id="certifications" className="py-16 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Certifications</span>
          <h2 className="text-3xl font-bold mt-1">Industry Certifications</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-secondary/60 flex items-center justify-center mb-3">
                {cert.icon}
              </div>
              <span className="text-sm font-medium">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
