
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const AwardsCarousel = () => {
  const [expandedView, setExpandedView] = useState(false);
  
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
    }
  ];

  const toggleExpand = () => setExpandedView(!expandedView);

  if (expandedView) {
    return (
      <div className="space-y-4">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={toggleExpand}
        >
          <Trophy className="text-amber-400" size={20} />
          <h3 className="text-xl font-medium">Award Winning Achievement</h3>
        </div>
        
        <Card className="border border-primary/20 bg-secondary/30 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-0">
            <Carousel className="w-full">
              <CarouselContent>
                {awards.map((award) => (
                  <CarouselItem key={award.id}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-md">
                        <img 
                          src={award.image} 
                          alt={`GenAI Buildathon Award ${award.id}`}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        <div className="p-3 bg-black/60 backdrop-blur-sm">
                          <p className="text-sm text-center text-white">{award.caption}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 absolute bottom-2 right-2 z-10">
                <CarouselPrevious className="h-7 w-7 static" />
                <CarouselNext className="h-7 w-7 static" />
              </div>
            </Carousel>
          </CardContent>
        </Card>
        
        <p className="text-sm italic text-muted-foreground">
          Won 1st place in 100x Engineers Generative AI Buildathon, showcasing expertise in creating AI-powered solutions.
        </p>
      </div>
    );
  }

  return (
    <div className="my-4">
      <div 
        onClick={toggleExpand}
        className="inline-flex items-center gap-3 py-2 px-4 bg-secondary/30 backdrop-blur-sm rounded-full 
          cursor-pointer transition-all hover:scale-105 relative overflow-hidden group"
      >
        <div className="absolute -inset-px bg-gradient-to-r from-primary via-accent to-primary rounded-full 
          animate-shimmer bg-[length:200%_100%] z-0"></div>
        <div className="bg-background/80 backdrop-blur-sm rounded-full p-2 z-10 relative">
          <Trophy className="text-amber-400" size={18} />
        </div>
        <span className="font-medium text-sm z-10 relative">GenAI Buildathon Winner</span>
      </div>
      
      {/* Hover preview */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <span className="text-xs text-primary/60 ml-4 cursor-help">View achievement</span>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex flex-col space-y-2">
            <img 
              src="/lovable-uploads/f504a97a-fc4e-431e-a158-d1412245dd65.png" 
              alt="GenAI Buildathon Award"
              className="rounded-md aspect-[4/3] object-cover"
            />
            <p className="text-sm text-center">
              Won 1st place in 100x Engineers Generative AI Buildathon
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default AwardsCarousel;
