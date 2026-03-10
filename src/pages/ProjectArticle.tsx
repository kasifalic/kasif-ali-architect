import { useEffect, useState, useCallback } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import ArticleHeader from '@/components/ArticleHeader';
import ArticleContent from '@/components/ArticleContent';
import TechStackSection from '@/components/TechStackSection';
import ProjectNavigation from '@/components/ProjectNavigation';

// ───────────────────────────────────────────────────
// Reading Progress Bar
// ───────────────────────────────────────────────────

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      setProgress(Math.min((scrollTop / docHeight) * 100, 100));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/50">
      <motion.div
        className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-r-full"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.05 }}
      />
    </div>
  );
};

// ───────────────────────────────────────────────────
// SEO: JSON-LD + Open Graph meta tags
// ───────────────────────────────────────────────────

const useArticleSEO = (project: { name: string; tagline: string; overview: string; publishDate: string; readTime: string; slug: string; type: string }) => {
  useEffect(() => {
    // Update page title
    const prevTitle = document.title;
    document.title = `${project.name} — ${project.tagline} | Kasif Ali`;

    // JSON-LD structured data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${project.name}: ${project.tagline}`,
      description: project.overview.slice(0, 160),
      author: {
        '@type': 'Person',
        name: 'Kasif Ali',
        jobTitle: 'AI Systems Architect',
        url: 'https://kasifali.dev',
      },
      datePublished: project.publishDate,
      articleSection: project.type,
      wordCount: Math.round(project.overview.length / 5),
      timeRequired: `PT${parseInt(project.readTime)}M`,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-jsonld';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Open Graph meta tags
    const metaTags: Record<string, string> = {
      'og:title': `${project.name} — ${project.tagline}`,
      'og:description': project.overview.slice(0, 200),
      'og:type': 'article',
      'og:url': `https://kasifali.dev/projects/${project.slug}`,
      'article:author': 'Kasif Ali',
      'article:section': project.type,
      'twitter:card': 'summary_large_image',
      'twitter:title': `${project.name} — ${project.tagline}`,
      'twitter:description': project.overview.slice(0, 200),
    };

    const createdMeta: HTMLMetaElement[] = [];
    Object.entries(metaTags).forEach(([property, content]) => {
      // Remove existing tag if any
      const existing = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
      if (existing) existing.remove();

      const meta = document.createElement('meta');
      if (property.startsWith('twitter:')) {
        meta.setAttribute('name', property);
      } else {
        meta.setAttribute('property', property);
      }
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
      createdMeta.push(meta);
    });

    // Also set meta description
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
      createdMeta.push(descMeta);
    }
    descMeta.setAttribute('content', project.overview.slice(0, 160));

    return () => {
      document.title = prevTitle;
      const jsonLdEl = document.getElementById('article-jsonld');
      if (jsonLdEl) jsonLdEl.remove();
      createdMeta.forEach((el) => el.remove());
    };
  }, [project]);
};

// ───────────────────────────────────────────────────
// End-of-Article CTA
// ───────────────────────────────────────────────────

const ArticleCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200/60 text-center"
  >
    <h3 className="font-sora text-2xl md:text-3xl font-bold text-gray-900 mb-3">
      Interested in working together?
    </h3>
    <p className="text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
      I build enterprise AI systems that deliver measurable business impact. Let's discuss how I can help your team.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <Link
        to="/#contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        <Mail className="w-4 h-4" />
        Let's Connect
      </Link>
      <a
        href="https://www.linkedin.com/in/kasif-ali/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-amber-400 text-amber-700 rounded-xl font-semibold transition-all duration-300 hover:bg-amber-50 hover:shadow-md"
      >
        <Linkedin className="w-4 h-4" />
        Connect on LinkedIn
      </a>
    </div>
  </motion.div>
);

// ───────────────────────────────────────────────────
// Main Page Component
// ───────────────────────────────────────────────────

const ProjectArticle = () => {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find project by slug
  const project = projectsData.find((p) => p.slug === slug);

  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // SEO meta tags + JSON-LD
  useArticleSEO(project);

  // Find previous and next projects for navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-gradient-to-b from-white to-gray-50"
      >
        {/* Article Container - Medium-style max-width */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Header with Breadcrumbs */}
          <ArticleHeader project={project} />

          {/* Quick Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.metrics.slice(0, 4).map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="font-sora text-2xl font-bold text-amber-600">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Article Content Sections */}
          <ArticleContent project={project} />

          {/* Technology Stack Section */}
          <TechStackSection project={project} />

          {/* End-of-Article CTA */}
          <ArticleCTA />

          {/* Navigation Footer */}
          <ProjectNavigation
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </div>
      </motion.div>
    </>
  );
};

export default ProjectArticle;
