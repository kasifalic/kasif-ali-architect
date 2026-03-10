import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectArticle } from '@/data/projectsData';

interface ProjectNavigationProps {
  prevProject: ProjectArticle | null;
  nextProject: ProjectArticle | null;
}

const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-16 pt-8 border-t border-gray-200"
    >
      {/* Back to Projects Button */}
      <div className="flex justify-center mb-8">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <Home className="w-5 h-5" />
          Back to Works
        </Link>
      </div>

      {/* Previous / Next Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous Project */}
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Previous Project
              </span>
            </div>
            <h3 className="font-sora text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
              {prevProject.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{prevProject.tagline}</p>
          </Link>
        ) : (
          <div className="hidden md:block" /> // Empty space if no prev project
        )}

        {/* Next Project */}
        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 md:text-right"
          >
            <div className="flex items-center justify-end gap-3 mb-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Next Project
              </span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
            </div>
            <h3 className="font-sora text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
              {nextProject.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{nextProject.tagline}</p>
          </Link>
        ) : (
          <div className="hidden md:block" /> // Empty space if no next project
        )}
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Built with Claude Code • React • TypeScript • TailwindCSS</p>
      </div>
    </motion.div>
  );
};

export default ProjectNavigation;
