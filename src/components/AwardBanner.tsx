import React from 'react';
import { motion } from 'framer-motion';

const AwardBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black border-b border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-center py-2 text-white transition-colors duration-300 relative"
          >
            <div className="flex items-center gap-2 z-10">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider mr-2">AWARD WINNER</span>
                <span className="hidden md:inline-block h-1 w-1 rounded-full bg-violet-500 mx-2"></span>
                <a href="#awards" className="text-sm font-medium relative text-violet-400 hover:text-violet-300 transition-colors cursor-pointer group">
                  India's First GenAI Buildathon
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1px] overflow-hidden">
                    <span className="block w-full h-full bg-gradient-to-r from-primary to-accent animate-shimmer bg-[length:400%_100%] group-hover:animate-pulse"></span>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AwardBanner;
