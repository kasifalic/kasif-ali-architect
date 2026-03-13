import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Linkedin,
  Twitter,
  MapPin,
  Send,
  CheckCircle2,
  Instagram
} from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Batch contact cards for better performance
      ScrollTrigger.batch(".contact-card", {
        onEnter: batch => gsap.from(batch, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }),
        start: "top 80%",
        once: true
      });

      // Form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Batch social links animation
      ScrollTrigger.batch(".social-link", {
        onEnter: batch => gsap.from(batch, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }),
        start: "top 85%",
        once: true
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "kasifaliwdr@gmail.com",
      href: "mailto:kasifaliwdr@gmail.com",
      color: "#C9A86C",
      bgColor: "rgba(201, 168, 108, 0.15)"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kasif-ali",
      href: "https://www.linkedin.com/in/kasif-ali/",
      color: "#0A66C2",
      bgColor: "rgba(10, 102, 194, 0.15)"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@kasifmuthu",
      href: "https://twitter.com/kasifmuthu",
      color: "#1DA1F2",
      bgColor: "rgba(29, 161, 242, 0.15)"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null,
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.15)"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFBF5 50%, #FFFFFF 100%)'
      }}
      aria-labelledby="contact-heading"
    >
      {/* Subtle decorative elements - optimized */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-amber-100/20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-orange-100/15 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="contact-header text-center mb-16">
          <span className="inline-block text-amber-600/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
            <span className="text-[#2a2218]">Let's build something </span>
            <span
              className="italic"
              style={{
                fontFamily: 'Playfair Display, serif',
                background: 'linear-gradient(135deg, #8B7355 0%, #C4A87C 50%, #8B7355 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              remarkable.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#5a4a3a]/70 max-w-2xl mx-auto" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Whether you're looking to collaborate on AI systems, discuss enterprise architecture, or just want to connect—I'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="contact-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="contact-card group cursor-pointer"
                onClick={() => {
                  if (method.href) {
                    if (method.href.startsWith('mailto:') || method.href.startsWith('http')) {
                      window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self');
                    }
                  } else {
                    copyToClipboard(method.value, method.label);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={method.href ? `${method.label}: ${method.value} (click to ${method.href.startsWith('http') ? 'open' : 'email'})` : `${method.label}: ${method.value} (click to copy)`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (method.href) {
                      window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self');
                    } else {
                      copyToClipboard(method.value, method.label);
                    }
                  }
                }}
              >
                <div
                  className="h-full p-5 rounded-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid rgba(201, 168, 108, 0.2)'
                  }}
                >
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: method.bgColor }}
                    >
                      <Icon className="w-6 h-6" style={{ color: method.color }} aria-hidden="true" />
                    </div>
                    <span className="text-xs text-[#5a4a3a]/50 uppercase tracking-wide block mb-1">
                      {method.label}
                    </span>
                    <span
                      className="text-sm font-semibold text-[#2a2218] block"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {method.value}
                    </span>
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: `linear-gradient(90deg, ${method.color}, ${method.color}80)` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout: Form + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <div className="contact-form">
            <div
              className="p-8 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(201, 168, 108, 0.25)'
              }}
            >
              <h3
                className="text-2xl font-bold text-[#2a2218] mb-2"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Send a Message
              </h3>
              <p className="text-[#5a4a3a]/60 text-sm mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                I typically respond within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#5a4a3a] mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.name ? 'border-red-400' : 'border-amber-200/50'
                    } bg-white/50 focus:bg-white focus:border-amber-400 focus:outline-none transition-all duration-300`}
                    placeholder="John Doe"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                    aria-invalid={!!formErrors.name}
                    aria-describedby={formErrors.name ? "name-error" : undefined}
                  />
                  {formErrors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#5a4a3a] mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.email ? 'border-red-400' : 'border-amber-200/50'
                    } bg-white/50 focus:bg-white focus:border-amber-400 focus:outline-none transition-all duration-300`}
                    placeholder="john@example.com"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                    aria-invalid={!!formErrors.email}
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                  />
                  {formErrors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#5a4a3a] mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.message ? 'border-red-400' : 'border-amber-200/50'
                    } bg-white/50 focus:bg-white focus:border-amber-400 focus:outline-none transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project or how I can help..."
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                  />
                  {formErrors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    background: isSubmitting
                      ? 'linear-gradient(135deg, #C9A86C 0%, #E8D5A3 100%)'
                      : 'linear-gradient(135deg, #C9A86C 0%, #E8D5A3 40%, #D4BC8A 60%, #C9A86C 100%)',
                    color: '#2a2218',
                    boxShadow: '0 4px 20px rgba(201, 168, 108, 0.4)'
                  }}
                  aria-label={isSubmitting ? "Sending message" : "Send message"}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#2a2218] border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: CTA & Social */}
          <div className="flex flex-col justify-center space-y-8">

            {/* CTA Card */}
            <div
              className="p-8 rounded-3xl relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(201, 168, 108, 0.1) 0%, rgba(232, 213, 163, 0.15) 100%)',
                border: '1px solid rgba(201, 168, 108, 0.3)'
              }}
            >
              {/* Decorative blob */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30 blur-2xl transition-all duration-500 group-hover:scale-110"
                style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <CheckCircle2 className="w-12 h-12 text-amber-600 mb-4" aria-hidden="true" />
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#2a2218] mb-4"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Ready to Transform Your Infrastructure?
                </h3>
                <p className="text-[#5a4a3a]/80 leading-relaxed mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  I specialize in building AI-first systems, enterprise cloud architecture, and automation that scales. Whether you're looking to modernize your infrastructure or explore GenAI solutions, let's connect.
                </p>
                <ul className="space-y-3">
                  {[
                    'AI Systems & LLM Integration',
                    'Cloud Architecture & Migration',
                    'Automation & DevOps',
                    'Enterprise IT Strategy'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: '#C9A86C' }}
                        aria-hidden="true"
                      />
                      <span className="text-[#5a4a3a] text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <span className="text-xs font-semibold text-[#5a4a3a]/50 uppercase tracking-wide block mb-4">
                Connect on Social
              </span>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kasif-ali/", label: "LinkedIn", color: "#0A66C2" },
                  { icon: Twitter, href: "https://twitter.com/kasifmuthu", label: "Twitter", color: "#1DA1F2" },
                  { icon: Instagram, href: "https://instagram.com/kasifal", label: "Instagram", color: "#E4405F" },
                ].map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        background: 'rgba(255, 255, 255, 0.85)',
                        border: '1px solid rgba(201, 168, 108, 0.2)'
                      }}
                      aria-label={`${social.label} profile (opens in new window)`}
                    >
                      <SocialIcon className="w-5 h-5" style={{ color: social.color }} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
