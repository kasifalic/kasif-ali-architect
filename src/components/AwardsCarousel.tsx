
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, X, ExternalLink } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AwardsCarousel = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  
  const awards = [
    {
      id: 1,
      image: "/lovable-uploads/f504a97a-fc4e-431e-a158-d1412245dd65.png",
      caption: "Certificate for 1st place in GenAI Buildathon"
    },
    {
      id: 2,
      image: "/lovable-uploads/5acc5096-b806-4e21-bcd1-35bf9b13715f.png",
      caption: "Team celebration after winning the GenAI competition"
    },
    {
      id: 3,
      image: "/lovable-uploads/ae7211d6-4c92-4305-92e6-ddfadd908b24.png",
      caption: "Award ceremony at 100x Engineers GenAI Buildathon"
    },
    {
      id: 4,
      image: "/lovable-uploads/66a85f01-28e5-4853-a273-d88d884b2d25.png",
      caption: "Winner's cap - selected from 1502 applicants"
    }
  ];

  return (
    <section id="awards" className="py-16 container mx-auto px-4 md:px-8">
      <div className="bg-secondary/20 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Award Winning</span>
          <h2 className="text-2xl font-bold mt-1 flex items-center gap-2">
            <Trophy className="text-amber-400" size={20} />
            <span className="shimmer-text">India's First GenAI Buildathon Achievement</span>
          </h2>
        </div>
        
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {awards.map((award, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card 
                    className="overflow-hidden border border-primary/10 backdrop-blur-sm transition-all duration-300 
                      hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/30
                      cursor-pointer group relative"
                    onClick={() => setCurrentImage(award.image)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-0 relative">
                      <div className="h-56 overflow-hidden flex items-center justify-center">
                        <img 
                          src={award.image} 
                          alt={award.caption}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3 bg-background/80 backdrop-blur-sm">
                        <p className="text-sm text-center">{award.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative mr-2 static transform-none" />
              <CarouselNext className="relative ml-2 static transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="flex flex-col items-center mt-6 gap-4">
          <p className="text-sm italic text-muted-foreground">
            Won 1st place in India's First 100x Engineers Generative AI Buildathon, selected from 1502 applicants.
          </p>
          
          <div className="flex justify-center w-full mt-4">
            <a 
              href="https://investoaitest.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
            >
              <Button 
                variant="default" 
                size="lg"
                className="font-bold text-lg w-full sm:w-auto px-10 py-6 bg-gradient-to-r from-violet-500 to-purple-700 hover:from-violet-600 hover:to-purple-800 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 rounded-xl flex items-center gap-2 h-auto"
              >
                <span className="mr-2">Try Investo MVP</span>
                <ExternalLink size={20} className="animate-pulse" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      <Dialog open={!!currentImage} onOpenChange={() => setCurrentImage(null)}>
        <DialogContent className="sm:max-w-3xl border-primary/20 bg-secondary/50 backdrop-blur-sm">
          <DialogClose className="absolute right-4 top-4 rounded-full bg-primary/10 hover:bg-primary/20 p-2 transition-colors">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {currentImage && (
            <div className="p-2 flex justify-center">
              <img 
                src={currentImage} 
                alt="GenAI Buildathon Achievement" 
                className="rounded-md object-contain max-h-[70vh]"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AwardsCarousel;
