import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ProjectArticle } from '@/data/projectsData';
import ScreenshotGallery from './ScreenshotGallery';

interface ArticleHeaderProps {
  project: ProjectArticle;
}


const ArticleHeader = ({ project }: ArticleHeaderProps) => {
  // Generate gradient hero placeholder based on project color
  const getGradientStyle = () => {
    const colorMap: Record<string, string> = {
      'bg-amber-500': 'from-amber-400 via-yellow-300 to-amber-500',
      'bg-emerald-500': 'from-emerald-400 via-green-300 to-emerald-500',
      'bg-violet-500': 'from-violet-400 via-purple-300 to-violet-500',
      'bg-blue-500': 'from-blue-400 via-cyan-300 to-blue-500',
      'bg-rose-500': 'from-rose-400 via-pink-300 to-rose-500',
      'bg-indigo-500': 'from-indigo-400 via-blue-300 to-indigo-500',
      'bg-sky-500': 'from-sky-400 via-blue-300 to-sky-500',
      'bg-green-500': 'from-green-400 via-emerald-300 to-green-500',
      'bg-orange-500': 'from-orange-400 via-amber-300 to-orange-500',
      'bg-cyan-500': 'from-cyan-400 via-teal-300 to-cyan-500',
      'bg-lime-500': 'from-lime-400 via-green-300 to-lime-500',
      'bg-teal-500': 'from-teal-400 via-cyan-300 to-teal-500',
      'bg-pink-500': 'from-pink-400 via-rose-300 to-pink-500',
      'bg-purple-500': 'from-purple-400 via-violet-300 to-purple-500',
      'bg-yellow-500': 'from-yellow-400 via-amber-300 to-yellow-500',
      'bg-red-500': 'from-red-400 via-rose-300 to-red-500',
    };

    return colorMap[project.color] || 'from-gray-400 via-gray-300 to-gray-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="/#projects">Works</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Project Type Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4"
      >
        <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold uppercase tracking-wider">
          {project.type}
        </span>
      </motion.div>

      {/* Project Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
      >
        {project.name}
      </motion.h1>

      {/* Tagline and Organization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-6"
      >
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          {project.tagline}
        </p>
        <p className="text-sm text-gray-500">
          {project.organization === 'Personal' ? 'Personal Project' : project.organization}
        </p>
      </motion.div>

      {/* Metadata: Read time, Date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-6 text-sm text-gray-500 mb-8"
      >
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{project.readTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{project.publishDate}</span>
        </div>
      </motion.div>

      {/* Hero Image - Screenshot, Custom Hero Image, or Gradient Fallback */}
      {project.screenshots && project.screenshots.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          {/* Browser-chrome hero with first screenshot */}
          <div className="rounded-2xl overflow-hidden bg-gray-950 border border-gray-200 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-800 rounded-md px-3 py-1 text-[11px] text-gray-400 font-mono text-center">
                  {project.slug}.app
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.screenshots[0].src}
                alt={project.screenshots[0].alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      ) : project.heroImage && !project.heroImage.startsWith('gradient-') ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={project.heroImage}
              alt={`${project.name} hero`}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`relative w-full h-64 md:h-80 lg:h-96 rounded-3xl bg-gradient-to-br ${getGradientStyle()} overflow-hidden shadow-2xl mb-12`}
        >
          {/* Floating Monogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.25 }}
              transition={{
                duration: 1,
                delay: 0.7,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 2,
              }}
              className="relative"
            >
              <span className="font-sora text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-white tracking-tight select-none">
                {project.monogram}
              </span>
            </motion.div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-3xl" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ArticleHeader;
