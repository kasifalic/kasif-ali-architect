import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Screenshot } from '@/data/projectsData';

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) onSwipeLeft();
      else onSwipeRight();
    }
  }, [onSwipeLeft, onSwipeRight]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}

const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goTo = useCallback((index: number) => {
    const newIndex = (index + screenshots.length) % screenshots.length;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  }, [activeIndex, screenshots.length]);

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const gallerySwipe = useSwipe(goNext, goPrev);
  const lightboxSwipe = useSwipe(goNext, goPrev);

  const current = screenshots[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

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

          {/* Screenshot with swipe */}
          <div
            className="relative aspect-[16/10] overflow-hidden touch-pan-y"
            {...gallerySwipe}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={activeIndex}
                src={current.src}
                alt={current.alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="w-full h-full object-cover object-top cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
                draggable={false}
              />
            </AnimatePresence>

            {/* Nav arrows - always visible on mobile, hover on desktop */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
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

        {/* Thumbnail strip - horizontally scrollable on mobile */}
        {screenshots.length > 1 && (
          <div className="flex gap-2 mt-4 justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-hide">
            {screenshots.map((shot, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
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
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Lightbox with swipe */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setIsLightboxOpen(false)}
            {...lightboxSwipe}
          >
            {/* Close hint */}
            <div className="absolute top-4 right-4 text-white/60 text-sm font-mono">
              <span className="hidden md:inline">Click anywhere to close</span>
              <span className="md:hidden">Tap to close &middot; Swipe to navigate</span>
            </div>

            {/* Nav arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Full image */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={activeIndex}
                src={current.src}
                alt={current.alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />
            </AnimatePresence>

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
