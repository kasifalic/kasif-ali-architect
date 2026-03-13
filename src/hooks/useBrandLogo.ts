import { useState, useEffect } from 'react';

interface BrandLogo {
  logoUrl: string | null;
  iconUrl: string | null;
  brandColor: string | null;
  isLoading: boolean;
  error: string | null;
}

interface BrandfetchLogo {
  type: string;
  theme: string;
  formats: Array<{
    src: string;
    format: string;
    size?: number;
  }>;
}

interface BrandfetchResponse {
  logos?: BrandfetchLogo[];
  colors?: Array<{
    hex: string;
    type: string;
  }>;
}

const CACHE_KEY = 'brandfetch_logos_cache';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

// Get cached data
const getCache = (): Record<string, { data: BrandLogo; timestamp: number }> => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch {
    return {};
  }
};

// Set cache
const setCache = (domain: string, data: BrandLogo) => {
  try {
    const cache = getCache();
    cache[domain] = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Ignore cache errors
  }
};

// Check if cache is valid
const getCachedData = (domain: string): BrandLogo | null => {
  const cache = getCache();
  const cached = cache[domain];
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

export const useBrandLogo = (domain: string): BrandLogo => {
  const [state, setState] = useState<BrandLogo>({
    logoUrl: null,
    iconUrl: null,
    brandColor: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchBrand = async () => {
      // Check cache first
      const cached = getCachedData(domain);
      if (cached) {
        setState({ ...cached, isLoading: false });
        return;
      }

      const apiKey = import.meta.env.VITE_BRANDFETCH_API_KEY;

      if (!apiKey) {
        // Fallback to Clearbit if no API key
        const fallbackData: BrandLogo = {
          logoUrl: `https://logo.clearbit.com/${domain}`,
          iconUrl: `https://logo.clearbit.com/${domain}`,
          brandColor: null,
          isLoading: false,
          error: null,
        };
        setState(fallbackData);
        setCache(domain, fallbackData);
        return;
      }

      try {
        const response = await fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch brand: ${response.status}`);
        }

        const data: BrandfetchResponse = await response.json();

        // Find the best logo (prefer SVG, then PNG)
        let logoUrl: string | null = null;
        let iconUrl: string | null = null;

        if (data.logos && data.logos.length > 0) {
          // Find primary/logo type with light theme
          const primaryLogo = data.logos.find(
            (l) => (l.type === 'logo' || l.type === 'symbol') && l.theme === 'light'
          ) || data.logos.find(
            (l) => l.type === 'logo' || l.type === 'symbol'
          ) || data.logos[0];

          // Find icon/symbol
          const iconLogo = data.logos.find(
            (l) => (l.type === 'icon' || l.type === 'symbol') && l.theme === 'light'
          ) || data.logos.find(
            (l) => l.type === 'icon' || l.type === 'symbol'
          );

          if (primaryLogo?.formats) {
            // Prefer SVG, then PNG
            const svgFormat = primaryLogo.formats.find((f) => f.format === 'svg');
            const pngFormat = primaryLogo.formats.find((f) => f.format === 'png');
            logoUrl = svgFormat?.src || pngFormat?.src || primaryLogo.formats[0]?.src || null;
          }

          if (iconLogo?.formats) {
            const svgFormat = iconLogo.formats.find((f) => f.format === 'svg');
            const pngFormat = iconLogo.formats.find((f) => f.format === 'png');
            iconUrl = svgFormat?.src || pngFormat?.src || iconLogo.formats[0]?.src || null;
          }
        }

        // Get brand color
        let brandColor: string | null = null;
        if (data.colors && data.colors.length > 0) {
          const primaryColor = data.colors.find((c) => c.type === 'accent') || data.colors[0];
          brandColor = primaryColor?.hex || null;
        }

        const result: BrandLogo = {
          logoUrl: logoUrl || `https://logo.clearbit.com/${domain}`,
          iconUrl: iconUrl || logoUrl || `https://logo.clearbit.com/${domain}`,
          brandColor,
          isLoading: false,
          error: null,
        };

        setState(result);
        setCache(domain, result);
      } catch (err) {
        // Fallback to Clearbit on error
        const fallbackData: BrandLogo = {
          logoUrl: `https://logo.clearbit.com/${domain}`,
          iconUrl: `https://logo.clearbit.com/${domain}`,
          brandColor: null,
          isLoading: false,
          error: err instanceof Error ? err.message : 'Unknown error',
        };
        setState(fallbackData);
        setCache(domain, fallbackData);
      }
    };

    fetchBrand();
  }, [domain]);

  return state;
};

// Batch fetch for multiple domains (to reduce re-renders)
export const useBrandLogos = (domains: string[]): Record<string, BrandLogo> => {
  const [logos, setLogos] = useState<Record<string, BrandLogo>>({});

  useEffect(() => {
    const fetchAll = async () => {
      const apiKey = import.meta.env.VITE_BRANDFETCH_API_KEY;
      const results: Record<string, BrandLogo> = {};

      for (const domain of domains) {
        // Check cache first
        const cached = getCachedData(domain);
        if (cached) {
          results[domain] = { ...cached, isLoading: false };
          continue;
        }

        if (!apiKey) {
          results[domain] = {
            logoUrl: `https://logo.clearbit.com/${domain}`,
            iconUrl: `https://logo.clearbit.com/${domain}`,
            brandColor: null,
            isLoading: false,
            error: null,
          };
          setCache(domain, results[domain]);
          continue;
        }

        try {
          const response = await fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch brand: ${response.status}`);
          }

          const data: BrandfetchResponse = await response.json();

          let logoUrl: string | null = null;
          let iconUrl: string | null = null;

          if (data.logos && data.logos.length > 0) {
            const primaryLogo = data.logos.find(
              (l) => (l.type === 'logo' || l.type === 'symbol') && l.theme === 'light'
            ) || data.logos.find(
              (l) => l.type === 'logo' || l.type === 'symbol'
            ) || data.logos[0];

            const iconLogo = data.logos.find(
              (l) => (l.type === 'icon' || l.type === 'symbol') && l.theme === 'light'
            ) || data.logos.find(
              (l) => l.type === 'icon' || l.type === 'symbol'
            );

            if (primaryLogo?.formats) {
              const svgFormat = primaryLogo.formats.find((f) => f.format === 'svg');
              const pngFormat = primaryLogo.formats.find((f) => f.format === 'png');
              logoUrl = svgFormat?.src || pngFormat?.src || primaryLogo.formats[0]?.src || null;
            }

            if (iconLogo?.formats) {
              const svgFormat = iconLogo.formats.find((f) => f.format === 'svg');
              const pngFormat = iconLogo.formats.find((f) => f.format === 'png');
              iconUrl = svgFormat?.src || pngFormat?.src || iconLogo.formats[0]?.src || null;
            }
          }

          let brandColor: string | null = null;
          if (data.colors && data.colors.length > 0) {
            const primaryColor = data.colors.find((c) => c.type === 'accent') || data.colors[0];
            brandColor = primaryColor?.hex || null;
          }

          results[domain] = {
            logoUrl: logoUrl || `https://logo.clearbit.com/${domain}`,
            iconUrl: iconUrl || logoUrl || `https://logo.clearbit.com/${domain}`,
            brandColor,
            isLoading: false,
            error: null,
          };
          setCache(domain, results[domain]);
        } catch (err) {
          results[domain] = {
            logoUrl: `https://logo.clearbit.com/${domain}`,
            iconUrl: `https://logo.clearbit.com/${domain}`,
            brandColor: null,
            isLoading: false,
            error: err instanceof Error ? err.message : 'Unknown error',
          };
          setCache(domain, results[domain]);
        }
      }

      setLogos(results);
    };

    fetchAll();
  }, [domains.join(',')]);

  return logos;
};
