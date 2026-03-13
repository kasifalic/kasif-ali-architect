import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { ProjectArticle } from '@/data/projectsData';
import { getTechLogoWithFallback, getTechCategoryColor } from '@/utils/getTechLogo';

interface TechStackSectionProps {
  project: ProjectArticle;
}

const categoryMeta: Record<string, { label: string; dot: string }> = {
  frontend: { label: 'Frontend', dot: 'bg-blue-400' },
  backend: { label: 'Backend', dot: 'bg-emerald-400' },
  database: { label: 'Database', dot: 'bg-violet-400' },
  infrastructure: { label: 'Infrastructure', dot: 'bg-amber-400' },
  ai: { label: 'AI / ML', dot: 'bg-rose-400' },
};

const TechStackSection = ({ project }: TechStackSectionProps) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Group technologies by category
  const groupedTech = project.techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof project.techStack>);

  const handleImageError = (techName: string) => {
    setImageErrors((prev) => ({ ...prev, [techName]: true }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <Code2 className="w-6 h-6 text-gray-400" />
        <h2 className="font-sora text-3xl font-bold text-gray-900">
          Technology Stack
        </h2>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5">
        <div className="space-y-4">
          {Object.entries(groupedTech).map(([category, techs]) => {
            const meta = categoryMeta[category] || { label: category, dot: 'bg-gray-400' };

            return (
              <div key={category} className="flex flex-wrap items-center gap-2">
                {/* Category label */}
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 mr-1 min-w-[90px]">
                  <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                  {meta.label}
                </span>

                {/* Tech chips */}
                {techs.map((tech, index) => {
                  const { url } = getTechLogoWithFallback(tech.name, tech.icon);
                  const hasError = imageErrors[tech.name];

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-gray-50 border border-gray-100 hover:border-gray-300 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      {!hasError ? (
                        <img
                          src={url}
                          alt={tech.name}
                          className="w-4 h-4 object-contain group-hover:scale-110 transition-transform duration-200"
                          onError={() => handleImageError(tech.name)}
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={`${getTechCategoryColor(tech.category)} w-4 h-4 rounded flex items-center justify-center`}
                        >
                          <span className="text-white font-bold text-[8px]">
                            {tech.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="text-xs text-gray-600 font-medium leading-none">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStackSection;
