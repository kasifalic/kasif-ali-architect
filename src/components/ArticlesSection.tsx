import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Calendar, Brain, Server, CloudCog, Shield, Users2, Cpu, Train, FileSearch, Rainbow } from "lucide-react";
import { motion } from "framer-motion";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  gradient: string;
  icon: React.ElementType;
  thumbnail?: string; // Optional thumbnail image URL
  categories: string[];
  readingTime: string;
}

const ArticlesSection = () => {
  // Static articles data from Medium
  const articles: Article[] = [
    {
      title: "India's Lifeline—The Largest Railway Network in the World",
      link: "https://medium.com/@kasifaliwdr/indias-lifeline-the-largest-railway-network-in-the-world-10b066f56acb",
      pubDate: "Sep 13, 2022",
      description: "The smells are overwhelming. A journey through India's massive railway system and what it means for the country's infrastructure and people...",
      gradient: "from-orange-600 to-amber-600",
      icon: Train,
      thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*JDlzBV3HS_sjZ0Ro",
      categories: ["Travel", "Infrastructure"],
      readingTime: "5 min read"
    },
    {
      title: "The Science Behind the Golden State Killer's Capture",
      link: "https://medium.com/@kasifaliwdr/the-science-behind-the-golden-state-killers-capture-ffac9e61bb6d",
      pubDate: "Jun 8, 2022",
      description: "I remember that I spent most of my childhood and adolescence years scribbling away—countless essays and articles on forensic science and criminal psychology...",
      gradient: "from-blue-700 to-indigo-700",
      icon: FileSearch,
      thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*wpgZPspMztdTBtopkdmUTw.jpeg",
      categories: ["Forensics", "True Crime"],
      readingTime: "7 min read"
    },
    {
      title: "LGBTQA+—All the Colors of the Rainbow",
      link: "https://medium.com/@kasifaliwdr/lgbtqa-all-the-colors-of-the-rainbow-64d2631f5ded",
      pubDate: "Jun 28, 2022",
      description: "We are all as unique snowflakes. But, snowflakes isn't the right term to use here. They are not as colorful as humans. -Kasif Ali",
      gradient: "from-red-500 via-yellow-500 to-purple-500",
      icon: Rainbow,
      thumbnail: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L7KgaGOPmYBFIIGKthuydQ.jpeg",
      categories: ["LGBTQ+", "Equality"],
      readingTime: "4 min read"
    },
    {
      title: "The Future of IT Leadership: Navigating the AI Revolution",
      link: "https://www.linkedin.com/pulse/ai-leadership-revolution-10-ways-changing-governance-2025-mehra-v3imc/",
      pubDate: "Apr 26, 2025",
      description: "As AI continues to transform the technology landscape, IT leaders must adapt their strategies to harness its potential while mitigating risks...",
      gradient: "from-purple-600 to-indigo-600",
      icon: Brain,
      thumbnail: "https://media.licdn.com/dms/image/v2/D5612AQHe1JDPua3vjw/article-cover_image-shrink_600_2000/B56ZVAwkoPHQAQ-/0/1740548230412?e=2147483647&v=beta&t=4ovsGN5nQjhcFOAIcIJNqzGrG4n7ypqrVgQM6tdUJ64",
      categories: ["Leadership", "AI"],
      readingTime: "6 min read"
    },
    {
      title: "Building Resilient IT Infrastructure in a Remote-First World",
      link: "https://www.ntiva.com/blog/the-ultimate-guide-to-remote-work",
      pubDate: "Mar 15, 2025",
      description: "The shift to remote work has fundamentally changed how we approach IT infrastructure. Here's how to build systems that can withstand the challenges of a distributed workforce...",
      gradient: "from-blue-600 to-cyan-600",
      icon: Server,
      thumbnail: "https://www.ntiva.com/hs-fs/hubfs/remote%20work%20best%20practices.jpg?width=580&name=remote%20work%20best%20practices.jpg",
      categories: ["Infrastructure", "Remote Work"],
      readingTime: "8 min read"
    },
    {
      title: "Optimizing Cloud Costs: Strategies for Modern Enterprises",
      link: "https://www.nops.io/blog/cloud-cost-optimization/",
      pubDate: "Feb 18, 2025",
      description: "Cloud spending continues to rise, but are companies getting the most value from their investments? Discover proven strategies to optimize your cloud costs without sacrificing performance...",
      gradient: "from-cyan-600 to-teal-600",
      icon: CloudCog,
      thumbnail: "https://www.nops.io/wp-content/uploads/2024/05/aws-data-transfer-img-2048x1081.png",
      categories: ["Cloud", "FinOps"],
      readingTime: "7 min read"
    }
  ];
  
  // No loading or error states needed for static implementation
  const loading = false;
  const error = null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const [activeArticle, setActiveArticle] = useState<number | null>(0);
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  // Reference for the scrollable container
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Handle wheel event for horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="articles" className="py-20 overflow-hidden relative bg-gradient-to-b from-background to-background/95">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full bg-primary/5 -bottom-1/4 -left-1/4 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-accent/5 -top-1/4 -right-1/4 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Floating title with 3D effect */}
        <div className="relative z-10 mb-16">
          <motion.div 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-8xl font-black text-primary/5 uppercase tracking-widest whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ARTICLES
          </motion.div>
          <motion.div 
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">My Thoughts</span>
            <h2 className="text-3xl md:text-4xl font-tahoma font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Featured Publications
            </h2>
            <motion.div 
              className="h-px w-24 bg-gradient-to-r from-primary to-accent mt-3 relative"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full w-8 bg-white/50"
                animate={{ x: [0, 96, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive article showcase */}
        <div className="relative">
          {/* Main featured article */}
          <motion.div 
            className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {activeArticle !== null && (
              <div className="relative aspect-video md:aspect-[21/9] w-full overflow-hidden">
                {/* Background image with parallax effect */}
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center scale-110"
                  style={{ backgroundImage: `url(${articles[activeArticle].thumbnail})` }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: hoveredArticle === activeArticle ? 1.05 : 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full md:w-2/3 lg:w-1/2 p-6 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm">
                          {articles[activeArticle].pubDate}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent backdrop-blur-sm">
                          {articles[activeArticle].readingTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                        {articles[activeArticle].title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 text-sm md:text-base max-w-xl">
                        {articles[activeArticle].description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {articles[activeArticle].categories.map((category, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-foreground"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg"
                        onClick={() => window.open(articles[activeArticle].link, "_blank")}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Read Article
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                        </span>
                        <motion.div 
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        />
                      </Button>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating icon */}
                <motion.div 
                  className="absolute bottom-6 right-6 md:bottom-12 md:right-12 p-4 rounded-full bg-background/30 backdrop-blur-md border border-white/10 text-white shadow-xl"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {React.createElement(articles[activeArticle].icon, { className: "w-8 h-8 md:w-10 md:h-10" })}
                </motion.div>
              </div>
            )}
          </motion.div>
          
          {/* Article selection strip */}
          <div 
            className="relative overflow-x-auto hide-scrollbar pb-4"
            ref={scrollContainerRef}
            onWheel={handleWheel}
          >
            <motion.div 
              className="flex gap-4 w-max"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {articles.map((article, index) => (
                <motion.div 
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-300 ${activeArticle === index ? 'scale-100' : 'scale-95 opacity-80'}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveArticle(index)}
                  onMouseEnter={() => setHoveredArticle(index)}
                  onMouseLeave={() => setHoveredArticle(null)}
                >
                  <div className="relative w-64 h-36 overflow-hidden rounded-xl shadow-md">
                    {/* Thumbnail */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${article.thumbnail})` }}
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeArticle === index ? 'bg-gradient-to-t from-primary/80 to-transparent' : 'bg-gradient-to-t from-black/80 to-transparent group-hover:from-primary/60'}`}></div>
                    
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h4 className="text-white text-sm font-medium line-clamp-2 group-hover:text-white/90 transition-colors">
                        {article.title}
                      </h4>
                    </div>
                    
                    {/* Active indicator */}
                    {activeArticle === index && (
                      <motion.div 
                        className="absolute inset-x-0 bottom-0 h-1 bg-white"
                        layoutId="activeArticleIndicator"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Scroll hint */}
          <motion.div 
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div 
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ←
            </motion.div>
            <span>Scroll to explore</span>
            <motion.div 
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Add custom CSS for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default ArticlesSection;
