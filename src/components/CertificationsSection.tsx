
import React from "react";
import { 
  Windows, 
  Network, 
  CloudCog, 
  Cloud, 
  KeyRound 
} from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    { name: "Microsoft", Icon: Windows },
    { name: "Cisco", Icon: Network },
    { name: "AWS", Icon: CloudCog },
    { name: "Azure", Icon: Cloud },
    { name: "JumpCloud", Icon: KeyRound }
  ];

  return (
    <section id="certifications" className="py-16 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Certifications</span>
          <h2 className="text-3xl font-bold mt-1">Professional Credentials</h2>
        </div>
        
        <div className="flex justify-center items-center flex-wrap gap-10 md:gap-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-secondary/50 rounded-full p-3 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-primary/20 transition-all hover:scale-110">
                <cert.Icon className="text-primary h-8 w-8" />
              </div>
              <span className="mt-2 text-sm font-medium">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
