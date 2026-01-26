import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'api-simulator',
      configureServer(server: any) {
        server.middlewares.use((req: any, res: any, next: any) => {
          if (req.url && (req.url.startsWith('/api') || req.url.includes('.php'))) {
            let body = '';
            req.on('data', (chunk: any) => { body += chunk; });
            req.on('end', async () => {
              try {
                const data = JSON.parse(body);
                const isRFQ = req.url.includes('rfq');
                const subject = isRFQ ? `Live RFQ: ${data.company}` : `Live Support: ${data.subject}`;

                // Note: Resend Free tier only allows sending to the verified domain or account email.
                // We will attempt to send to the designated targets.
                const targetEmail = isRFQ ? 'sales-team@united-ffv.com' : 'support@united-ffv.com';

                console.log(`[Local API] Attempting real mail via Resend to ${targetEmail}...`);

                const { error } = await resend.emails.send({
                  from: 'UNITED System <onboarding@resend.dev>',
                  to: [targetEmail],
                  subject: subject,
                  html: `<h3>New Web Lead (Local Test)</h3><pre>${JSON.stringify(data, null, 2)}</pre>`,
                });

                if (error) {
                  console.error('[Resend Error]', error);
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: 'Resend rejected the call. Likely domain not verified or recipient restricted.' }));
                } else {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, message: 'Email DISPATCHED from local environment!' }));
                }
              } catch (e) {
                res.statusCode = 500;
                res.end('Server Error');
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
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-select', '@radix-ui/react-slot'],
          'vendor-animation': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-http-backend'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
}));
