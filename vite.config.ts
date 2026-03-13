import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/yahoo': {
        target: 'https://query2.finance.yahoo.com',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api\/yahoo/, ''),
        headers: { 'User-Agent': 'Mozilla/5.0' },
      },
      '/api/news': {
        target: 'https://news.google.com',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api\/news/, ''),
        headers: { 'User-Agent': 'Mozilla/5.0' },
        followRedirects: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
}));
