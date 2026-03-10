import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Lightbulb, TrendingUp, Network, HelpCircle, ArrowRight, Monitor, Figma } from 'lucide-react';
import { ProjectArticle } from '@/data/projectsData';
import ArchitectureDiagram from './ArchitectureDiagram';
import ScreenshotGallery from './ScreenshotGallery';
import DesignShowcase from './DesignShowcase';

interface ArticleContentProps {
  project: ProjectArticle;
}

const ArticleContent = ({ project }: ArticleContentProps) => {
  return (
    <div className="space-y-12 mb-16">
      {/* The Challenge Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-rose-500" />
          <h2 className="font-sora text-3xl font-bold text-gray-900">
            The Challenge
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {project.challenge}
        </p>

        {/* User Story - Highlighted */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6">
          <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
            User Story
          </span>
          <p className="text-gray-700 mt-2 italic text-lg">
            "{project.userStory}"
          </p>
        </div>
      </motion.section>

      {/* The Solution Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          <h2 className="font-sora text-3xl font-bold text-gray-900">
            The Solution
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {project.solution}
        </p>

        {/* Architecture Diagram (visual for supported projects, text fallback for others) */}
        {project.architecture && (
          <ArchitectureDiagram
            slug={project.slug}
            textDescription={project.architecture}
          />
        )}
      </motion.section>

      {/* Product Screenshots Section (if exists) */}
      {project.screenshots && project.screenshots.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-6 h-6 text-sky-500" />
            <h2 className="font-sora text-3xl font-bold text-gray-900">
              Product Screenshots
            </h2>
          </div>
          <p className="text-gray-500 mb-6">
            Explore the key screens and features of the application.
          </p>

          <ScreenshotGallery screenshots={project.screenshots} />
        </motion.section>
      )}

      {/* Design Philosophy Section (if exists) */}
      {project.design && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.47 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Figma className="w-6 h-6 text-violet-500" />
            <h2 className="font-sora text-3xl font-bold text-gray-900">
              Design Philosophy
            </h2>
          </div>

          <DesignShowcase design={project.design} screenshots={project.screenshots} />
        </motion.section>
      )}

      {/* Features & Capabilities Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
          <h2 className="font-sora text-3xl font-bold text-gray-900">
            Features & Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-300"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* System Integrations Section (if exists) */}
      {project.integrations && project.integrations.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Network className="w-6 h-6 text-blue-500" />
            <h2 className="font-sora text-3xl font-bold text-gray-900">
              System Integrations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-sora text-xl font-bold text-gray-900">
                    {integration.system}
                  </h3>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {integration.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {integration.dataFlow}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Key Decisions Section (if exists) */}
      {project.keyDecisions && project.keyDecisions.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-amber-500" />
            <h2 className="font-sora text-3xl font-bold text-gray-900">
              Key Decisions
            </h2>
          </div>
          <p className="text-gray-500 mb-6">
            The reasoning behind critical architectural and technical choices.
          </p>

          <div className="space-y-4">
            {project.keyDecisions.map((decision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-sora text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {decision.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {decision.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Before / After Section (if exists) */}
      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <ArrowRight className="w-6 h-6 text-emerald-500" />
            <h2 className="font-sora text-3xl font-bold text-gray-900">
              Before & After
            </h2>
          </div>
          <p className="text-gray-500 mb-6">
            How this project changed day-to-day operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.75 + index * 0.08 }}
                className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Label */}
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="font-sora text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
                <div className="p-5 space-y-3">
                  {/* Before */}
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                    </span>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-400">Before</span>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.before}</p>
                    </div>
                  </div>
                  {/* After */}
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </span>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">After</span>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Impact & Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-violet-500" />
          <h2 className="font-sora text-3xl font-bold text-gray-900">
            Impact & Results
          </h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {project.impact}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 text-center"
            >
              <div className="font-sora text-2xl md:text-3xl font-bold text-amber-600 mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default ArticleContent;
