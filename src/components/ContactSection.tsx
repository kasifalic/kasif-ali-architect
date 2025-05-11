
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact Me</span>
          <h2 className="text-3xl font-bold mt-1">Let's Work Together</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-primary/10 bg-secondary/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                  <Input id="name" type="text" placeholder="Your Name" className="bg-secondary border-primary/20" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-secondary border-primary/20" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <Textarea id="message" placeholder="How can I help you?" className="bg-secondary border-primary/20 min-h-32" />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90 w-full rounded-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6">Ready to transform your IT infrastructure?</h3>
              <p className="text-muted-foreground mb-8">
                Looking for expert guidance on IT architecture, automation, or GenAI implementation? 
                Let's connect and discuss how I can help you achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span>k***@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin size={18} className="text-primary" />
                  </div>
                  <a href="#" className="hover:text-primary transition-colors">linkedin.com/in/kasif-ali</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
