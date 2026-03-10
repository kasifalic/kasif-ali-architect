import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';

// Minimal wrapper matching App.tsx providers
const TestWrapper = ({ children, initialEntries = ['/'] }: { children: React.ReactNode; initialEntries?: string[] }) => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MemoryRouter initialEntries={initialEntries}>
          {children}
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

describe('App routing', () => {
  it('renders 404 page for unknown routes', async () => {
    const NotFound = (await import('@/pages/NotFound')).default;
    render(
      <TestWrapper initialEntries={['/does-not-exist']}>
        <NotFound />
      </TestWrapper>
    );
    expect(screen.getByText(/404/)).toBeInTheDocument();
  });

  it('renders project article page without crashing for a valid slug', async () => {
    const { Routes, Route } = await import('react-router-dom');
    const ProjectArticle = (await import('@/pages/ProjectArticle')).default;
    const { container } = render(
      <TestWrapper initialEntries={['/projects/vendorlens']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectArticle />} />
        </Routes>
      </TestWrapper>
    );
    expect(container.querySelector('.min-h-screen')).toBeInTheDocument();
  });
});
