import { describe, it, expect } from 'vitest';
import { getTechLogo, getTechLogoWithFallback, getTechCategoryColor, TECH_LOGO_OVERRIDES } from '@/utils/getTechLogo';

describe('getTechLogo', () => {
  it('generates CDN URL from tech name', () => {
    expect(getTechLogo('React')).toBe(
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg'
    );
  });

  it('uses custom slug when provided', () => {
    expect(getTechLogo('AWS', 'amazonaws')).toBe(
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/amazonaws.svg'
    );
  });

  it('strips spaces and dots from name', () => {
    expect(getTechLogo('Next.js')).toContain('/nextjs.svg');
  });
});

describe('getTechLogoWithFallback', () => {
  it('uses override when available', () => {
    const result = getTechLogoWithFallback('PostgreSQL');
    expect(result.slug).toBe('postgresql');
    expect(result.isFallback).toBe(false);
  });

  it('marks unknown tech as fallback', () => {
    const result = getTechLogoWithFallback('SomeObscureLib');
    expect(result.isFallback).toBe(true);
  });
});

describe('getTechCategoryColor', () => {
  it('returns correct color per category', () => {
    expect(getTechCategoryColor('frontend')).toBe('bg-blue-500');
    expect(getTechCategoryColor('ai')).toBe('bg-pink-500');
  });

  it('returns gray for unknown category', () => {
    expect(getTechCategoryColor('unknown')).toBe('bg-gray-500');
  });
});

describe('TECH_LOGO_OVERRIDES', () => {
  it('covers common AWS services', () => {
    expect(TECH_LOGO_OVERRIDES['AWS']).toBe('amazonaws');
    expect(TECH_LOGO_OVERRIDES['AWS Lambda']).toBe('awslambda');
    expect(TECH_LOGO_OVERRIDES['AWS S3']).toBe('amazons3');
  });
});
