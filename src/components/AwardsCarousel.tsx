
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from "@/components/ui/dialog";

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
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-6">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Award Winning</span>
          <h2 className="text-2xl font-bold mt-1 flex items-center gap-2">
            <Trophy className="text-amber-400" size={20} />
            <span className="shimmer-text">India's First GenAI Buildathon Achievement</span>
          </h2>
        </div>
        
        <div className="relative">
          <div className="flex gap-6 pb-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide justify-center">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="snap-center"
                style={{ flex: '0 0 280px' }}
              >
                <Card 
                  className="overflow-hidden border border-primary/10 backdrop-blur-sm transition-all duration-300 
                    hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/30
                    cursor-pointer group relative"
                  onClick={() => setCurrentImage(award.image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-0 relative">
                    <div className="h-44 overflow-hidden flex items-center justify-center">
                      <img 
                        src={award.image} 
                        alt={award.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 bg-background/80 backdrop-blur-sm">
                      <p className="text-sm text-center">{award.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        <div className="flex justify-center mt-2">
          <p className="text-sm italic text-muted-foreground">
            Won 1st place in India's First 100x Engineers Generative AI Buildathon, selected from 1502 applicants.
          </p>
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
