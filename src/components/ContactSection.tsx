
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/sonner";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const isMobile = useIsMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      setIsSubmitting(true);
      console.log("Submitting form data:", data);
      
      const { error, data: insertedData } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: data.name, 
            email: data.email, 
            message: data.message 
          }
        ])
        .select();
      
      if (error) {
        console.error('Error submitting to Supabase:', error);
        throw error;
      }
      
      console.log('Success! Inserted data:', insertedData);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("kasifaliwdr@gmail.com");
    toast.success("Email address copied to clipboard!");
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 top-1/4 -left-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 bottom-1/4 -right-32 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Contact Me</span>
          <h2 className="text-3xl font-tahoma font-bold mt-1">Let's Work Together</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border border-primary/10 bg-secondary/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            className="bg-secondary border-primary/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="bg-secondary border-primary/20" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you?" 
                            className="bg-secondary border-primary/20 min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 w-full rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className={`flex flex-col justify-center ${isMobile ? 'mt-4' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 -z-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6">Ready to transform your IT infrastructure?</h3>
              <p className="text-muted-foreground mb-8">
                Looking for expert guidance on IT architecture, automation, or GenAI implementation? 
                Let's connect and discuss how I can help you achieve your goals.
              </p>
              <div className="flex items-center gap-3">
                <button 
                  onClick={copyToClipboard} 
                  className="flex items-center gap-3 hover:text-primary transition-colors group"
                  aria-label="Copy email to clipboard"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span>Click to copy email address</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
