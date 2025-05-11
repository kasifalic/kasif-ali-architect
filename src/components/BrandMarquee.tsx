import React from 'react';
import { motion } from 'framer-motion';
import { brandIcons } from './BrandIcons';

interface BrandMarqueeProps {
  brands: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ 
  brands, 
  speed = 40, 
  direction = 'left' 
}) => {
  // Double the brands to create a seamless loop
  const duplicatedBrands = [...brands, ...brands];
  
  return (
    <div className="relative w-full overflow-hidden py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' 
            ? [0, -80 * brands.length] 
            : [-80 * brands.length, 0]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: brands.length * (100 / speed),
        }}
      >
        {duplicatedBrands.map((brand, index) => {
          // Get the brand icon component
          const BrandIcon = brandIcons[brand] || brandIcons['AWS']; // Fallback to AWS icon
          
          return (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center mx-8 h-16 group"
            >
              <div className="flex items-center justify-center w-10 h-10 mb-2 text-muted-foreground/70 group-hover:text-primary transition-colors duration-300">
                <BrandIcon width={28} height={28} />
              </div>
              <span className="text-xs text-muted-foreground/70 group-hover:text-primary transition-colors duration-300 font-medium">
                {brand}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BrandMarquee;
