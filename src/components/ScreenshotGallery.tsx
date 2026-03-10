import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Maximize2 } from 'lucide-react';
import { Screenshot } from '@/data/projectsData';

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goTo = (index: number) => {
    setActiveIndex((index + screenshots.length) % screenshots.length);
  };

  const current = screenshots[activeIndex];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Image */}
        <div className="relative group rounded-2xl overflow-hidden bg-gray-950 border border-gray-200 shadow-xl">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border-b border-gray-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-800 rounded-md px-3 py-1 text-[11px] text-gray-400 font-mono text-center truncate">
                {screenshots[0]?.src.split('/')[2] || 'app'}.app / {current.alt.toLowerCase().replace(/\s+/g, '-')}
              </div>
            </div>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-1 rounded hover:bg-gray-800 transition-colors"
              aria-label="View full size"
            >
              <Maximize2 className="w-3.5 h-3.5 text-gray-500" />
            </button>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={current.src}
                alt={current.alt}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover object-top cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
            </AnimatePresence>

            {/* Nav arrows - visible on hover */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={() => goTo(activeIndex - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => goTo(activeIndex + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Counter badge */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[11px] font-mono">
              {activeIndex + 1} / {screenshots.length}
            </div>
          </div>
        </div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-gray-500 mt-3 text-center leading-relaxed"
          >
            {current.caption}
          </motion.p>
        </AnimatePresence>

        {/* Thumbnail strip */}
        {screenshots.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center flex-wrap">
            {screenshots.map((shot, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 w-16 h-10 sm:w-20 sm:h-[50px] flex-shrink-0 ${
                  index === activeIndex
                    ? 'border-amber-500 shadow-md shadow-amber-200/30 scale-105'
                    : 'border-gray-200 hover:border-gray-300 opacity-60 hover:opacity-100'
                }`}
                aria-label={`View ${shot.alt}`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close hint */}
            <div className="absolute top-4 right-4 text-white/60 text-sm font-mono">
              Click anywhere to close
            </div>

            {/* Nav arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goTo(activeIndex - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goTo(activeIndex + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Full image */}
            <motion.img
              key={activeIndex}
              src={current.src}
              alt={current.alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-lg text-center">
              <p className="text-white/80 text-sm">{current.caption}</p>
              <p className="text-white/40 text-xs mt-1 font-mono">{activeIndex + 1} / {screenshots.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScreenshotGallery;
