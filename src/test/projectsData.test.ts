import { describe, it, expect } from 'vitest';
import { projectsData } from '@/data/projectsData';

describe('projectsData integrity', () => {
  it('has no duplicate slugs', () => {
    const slugs = projectsData.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has no duplicate IDs', () => {
    const ids = projectsData.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every project has required fields populated', () => {
    for (const p of projectsData) {
      expect(p.name, `${p.slug} missing name`).toBeTruthy();
      expect(p.slug, `id:${p.id} missing slug`).toBeTruthy();
      expect(p.overview, `${p.slug} missing overview`).toBeTruthy();
      expect(p.challenge, `${p.slug} missing challenge`).toBeTruthy();
      expect(p.solution, `${p.slug} missing solution`).toBeTruthy();
      expect(p.features.length, `${p.slug} has no features`).toBeGreaterThan(0);
      expect(p.techStack.length, `${p.slug} has no techStack`).toBeGreaterThan(0);
      expect(p.metrics.length, `${p.slug} has no metrics`).toBeGreaterThan(0);
    }
  });

  it('techStack categories are valid', () => {
    const validCategories = ['frontend', 'backend', 'database', 'infrastructure', 'ai'];
    for (const p of projectsData) {
      for (const tech of p.techStack) {
        expect(validCategories, `${p.slug}: invalid category "${tech.category}" on ${tech.name}`)
          .toContain(tech.category);
      }
    }
  });

  it('screenshots use src field (not url)', () => {
    for (const p of projectsData) {
      if (p.screenshots) {
        for (const s of p.screenshots) {
          expect(s).toHaveProperty('src');
          expect(s).toHaveProperty('alt');
          expect(s).toHaveProperty('caption');
        }
      }
    }
  });
});
