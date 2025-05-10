
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const AwardsCarousel = () => {
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

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
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
};

export default AwardsCarousel;
