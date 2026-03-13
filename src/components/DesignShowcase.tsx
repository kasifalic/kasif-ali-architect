import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Layers, Eye, ChevronRight, Paintbrush } from 'lucide-react';
import { DesignSection, Screenshot } from '@/data/projectsData';

interface DesignShowcaseProps {
  design: DesignSection;
  screenshots?: Screenshot[];
}

const DesignShowcase = ({ design, screenshots }: DesignShowcaseProps) => {
  const [activePrinciple, setActivePrinciple] = useState(0);

  const currentPrinciple = design.principles[activePrinciple];
  const linkedScreenshot = screenshots?.[currentPrinciple.screenshotIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Philosophy Statement */}
      <div className="relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-violet-500 via-purple-400 to-fuchsia-500" />
        <p className="text-lg text-gray-600 leading-relaxed pl-4 italic">
          "{design.philosophy}"
        </p>
      </div>

      {/* Design Principles — Interactive */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Eye className="w-5 h-5 text-violet-500" />
          <h3 className="font-sora text-xl font-semibold text-gray-800">
            Design Principles
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Principle selector */}
          <div className="space-y-2">
            {design.principles.map((principle, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePrinciple(index)}
                className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-300 ${
                  index === activePrinciple
                    ? 'bg-violet-50 border-violet-200 shadow-sm'
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                }`}
                whileHover={{ x: index === activePrinciple ? 0 : 4 }}
                transition={{ duration: 0.15 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    index === activePrinciple
                      ? 'bg-violet-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm ${
                      index === activePrinciple ? 'text-violet-700' : 'text-gray-700'
                    }`}>
                      {principle.title}
                    </p>
                    {index === activePrinciple && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-gray-500 mt-1 leading-relaxed"
                      >
                        {principle.description}
                      </motion.p>
                    )}
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    index === activePrinciple ? 'rotate-90 text-violet-400' : 'text-gray-300'
                  }`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Screenshot with callout */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {linkedScreenshot && (
                <motion.div
                  key={activePrinciple}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-gray-950"
                >
                  {/* Mini browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-900 border-b border-gray-800">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/70" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <div className="w-2 h-2 rounded-full bg-green-500/70" />
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={linkedScreenshot.src}
                      alt={linkedScreenshot.alt}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle overlay to indicate it's illustrative */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Highlight callout */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="text-[11px] text-violet-300 font-medium font-mono tracking-wide uppercase mb-0.5">
                          Look for
                        </p>
                        <p className="text-xs text-white/90 leading-relaxed">
                          {currentPrinciple.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Palette className="w-5 h-5 text-violet-500" />
          <h3 className="font-sora text-xl font-semibold text-gray-800">
            Color System
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {design.colorPalette.map((token, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div
                className="w-10 h-10 rounded-lg shrink-0 shadow-inner ring-1 ring-inset ring-black/10 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: token.hex }}
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-800">{token.name}</p>
                  <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">
                    {token.hex}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{token.usage}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Component Patterns */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Layers className="w-5 h-5 text-violet-500" />
          <h3 className="font-sora text-xl font-semibold text-gray-800">
            Component Patterns
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {design.componentPatterns.map((pattern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-white hover:border-violet-100 hover:bg-violet-50/30 transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                <Paintbrush className="w-3.5 h-3.5 text-violet-500" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{pattern}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DesignShowcase;
