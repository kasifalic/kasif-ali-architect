/**
 * Get technology logo URL from Simple Icons CDN
 * @param techName - The name of the technology (e.g., "React", "FastAPI", "PostgreSQL")
 * @param iconSlug - Optional custom slug override for Simple Icons
 * @returns URL to the technology logo SVG from jsDelivr CDN
 */
export const getTechLogo = (techName: string, iconSlug?: string): string => {
  // Use provided slug or normalize tech name to Simple Icons slug format
  const slug = iconSlug || techName.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');

  // Simple Icons CDN via jsDelivr
  return `https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${slug}.svg`;
};

/**
 * Check if a tech logo exists by attempting to load it
 * This is useful for implementing fallback logic in components
 * @param url - The logo URL to check
 * @returns Promise<boolean> indicating if the logo exists
 */
export const checkLogoExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Common tech logo mappings for edge cases
 * Use this when the tech name doesn't map cleanly to Simple Icons slugs
 */
export const TECH_LOGO_OVERRIDES: Record<string, string> = {
  'FastAPI': 'fastapi',
  'PostgreSQL': 'postgresql',
  'AWS': 'amazonaws',
  'AWS RDS': 'amazonrds',
  'AWS EC2': 'amazonec2',
  'AWS Amplify': 'awsamplify',
  'AWS Lambda': 'awslambda',
  'AWS S3': 'amazons3',
  'AWS API Gateway': 'amazonapigateway',
  'AWS Secrets Manager': 'amazonaws',
  'AWS EventBridge': 'amazonaws',
  'OpenAI GPT-4': 'openai',
  'OpenAI GPT-4 Vision': 'openai',
  'OpenAI Embeddings': 'openai',
  'TailwindCSS': 'tailwindcss',
  'React': 'react',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'Python': 'python',
  'Vite': 'vite',
  'Nginx': 'nginx',
  'Redis': 'redis',
  'Firebase': 'firebase',
  'Docker': 'docker',
  'GitHub': 'github',
  'Pandas': 'pandas',
  'SQLAlchemy': 'sqlalchemy',
  'Recharts': 'react', // Uses React logo as fallback (React charting lib)
  'Uvicorn': 'gunicorn', // Closest ASGI/WSGI server icon
  'shadcn/ui': 'shadcnui',
  'Lucide Icons': 'lucide',
  'pgvector': 'postgresql',
  'AI/LLM': 'openai',
  'Framer Motion': 'framer',
  'Gmail': 'gmail',
  'Celery': 'celery',
};

/**
 * Get tech logo with fallback handling
 * @param techName - The name of the technology
 * @param customSlug - Optional custom slug
 * @returns Object with logo URL and whether it's a fallback
 */
export const getTechLogoWithFallback = (techName: string, customSlug?: string) => {
  const override = TECH_LOGO_OVERRIDES[techName];
  const slug = override || customSlug || techName.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');

  return {
    url: getTechLogo(techName, slug),
    slug,
    isFallback: !override && !customSlug,
  };
};

/**
 * Get category color for tech stack badges
 * Used for fallback badges when logo doesn't exist
 */
export const getTechCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    frontend: 'bg-blue-500',
    backend: 'bg-green-500',
    database: 'bg-purple-500',
    infrastructure: 'bg-orange-500',
    ai: 'bg-pink-500',
  };

  return colors[category] || 'bg-gray-500';
};
