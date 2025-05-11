
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";

// List of common country codes
const countryCodes = [
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+91", label: "India (+91)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+86", label: "China (+86)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+33", label: "France (+33)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+7", label: "Russia (+7)" },
  { value: "+55", label: "Brazil (+55)" },
  { value: "+27", label: "South Africa (+27)" },
  { value: "+971", label: "United Arab Emirates (+971)" },
  { value: "+39", label: "Italy (+39)" },
  { value: "+34", label: "Spain (+34)" },
  { value: "+82", label: "South Korea (+82)" },
  { value: "+52", label: "Mexico (+52)" },
  { value: "+60", label: "Malaysia (+60)" },
  { value: "+65", label: "Singapore (+65)" },
  { value: "+31", label: "Netherlands (+31)" },
  { value: "+46", label: "Sweden (+46)" },
  { value: "+47", label: "Norway (+47)" },
  { value: "+64", label: "New Zealand (+64)" },
  { value: "+966", label: "Saudi Arabia (+966)" },
  { value: "+358", label: "Finland (+358)" },
  { value: "+420", label: "Czech Republic (+420)" },
];

const ContactSection = () => {
  const isMobile = useIsMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    countryCode: z.string({ required_error: "Please select a country code" }),
    phoneNumber: z.string()
      .min(5, { message: "Phone number must be at least 5 digits" })
      .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "+1",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      setIsSubmitting(true);
      console.log("Submitting form data:", data);
      
      const fullPhoneNumber = `${data.countryCode} ${data.phoneNumber}`;
      
      const { error, data: insertedData } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: data.name, 
            email: data.email,
            phone_number: fullPhoneNumber,
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem className="md:col-span-4">
                          <FormLabel className="text-sm font-medium text-muted-foreground">Country</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-secondary border-primary/20">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="max-h-[300px]">
                              {countryCodes.map((code) => (
                                <SelectItem key={code.value} value={code.value}>
                                  {code.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem className="md:col-span-8">
                          <FormLabel className="text-sm font-medium text-muted-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Phone Number" 
                              className="bg-secondary border-primary/20" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
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
              <div className="flex flex-col space-y-4">
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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                    +1 (123) 456-7890
                  </a>
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
