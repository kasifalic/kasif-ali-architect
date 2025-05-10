
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-64 h-64 rounded-full bg-primary/20 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 rounded-full bg-accent/20 bottom-1/4 -right-32 blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">
            Hello, I'm <span className="text-gradient">Kasif Ali</span>
          </h1>
          <h2 className="text-2xl font-medium text-muted-foreground">
            IT Systems Architect | Automation-First IT | GenAI Evangelist
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Architecting scalable, secure, and AI-native IT systems
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary/90">
              View Portfolio
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={16} /> Download Resume
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-80 h-80 mx-auto bg-gradient-to-r from-primary/30 to-accent/30 rounded-full flex items-center justify-center animate-float">
            <img 
              src="/placeholder.svg" 
              alt="Kasif Ali" 
              className="w-72 h-72 rounded-full object-cover border-4 border-primary/50"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-full shadow-lg">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Mail size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
