import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      webp: { quality: 80 },
      avif: { quality: 70 },
      png: { quality: 80 },
      jpeg: { quality: 80 },
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    {
      name: 'api-simulator',
      configureServer(server: any) {
        server.middlewares.use((req: any, res: any, next: any) => {
          // Intercept EmailJS submissions and any remaining legacy API calls
          if (req.url && (req.url.includes('emailjs.com') || req.url.startsWith('/api') || req.url.includes('.php'))) {
            let body = '';
            req.on('data', (chunk: any) => { body += chunk; });
            req.on('end', async () => {
              try {
                const isEmailJS = req.url.includes('emailjs');
                console.log(`[Local API] Intercepted ${isEmailJS ? 'EmailJS' : 'Legacy API'} request`);

                // Simulate processing delay
                await new Promise(resolve => setTimeout(resolve, 800));

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: true,
                  status: 200,
                  text: 'OK',
                  message: 'SIMULATED: Email dispatched to yasserfarghal33@gmail.com'
                }));
              } catch (e) {
                res.statusCode = 500;
                res.end('Simulator Error');
              }
            });
            return;
          }
          next();
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-core': ['react', 'react-dom'],
          'vendor-base': ['@tanstack/react-query', 'react-router-dom', 'i18next', 'clsx', 'tailwind-merge', 'date-fns', '@radix-ui/react-slot', '@radix-ui/react-label', 'lucide-react'],
          'vendor-animation': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: true,
  }
}));
