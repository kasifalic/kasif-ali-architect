
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element is in view
            const elements = entry.target.querySelectorAll('[data-animate]');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.add('in-view');
              }, i * 100);
            });
            
            // Allow for retriggering animations when element leaves viewport 
            // and comes back by not unobserving
          }
        });
      },
      {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
      }
    );

    // Observe all sections with animation elements
    document.querySelectorAll('.section-reveal').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Clean up observer when component unmounts
      document.querySelectorAll('.section-reveal').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
