// vite.config.ts
import { defineConfig } from "file:///C:/Users/MOSTAFA%20AMIR/Downloads/uniteda-supply-hub-performance-optimization/uniteda-supply-hub-performance-optimization/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/MOSTAFA%20AMIR/Downloads/uniteda-supply-hub-performance-optimization/uniteda-supply-hub-performance-optimization/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/MOSTAFA%20AMIR/Downloads/uniteda-supply-hub-performance-optimization/uniteda-supply-hub-performance-optimization/node_modules/lovable-tagger/dist/index.js";
import viteCompression from "file:///C:/Users/MOSTAFA%20AMIR/Downloads/uniteda-supply-hub-performance-optimization/uniteda-supply-hub-performance-optimization/node_modules/vite-plugin-compression/dist/index.mjs";
import { ViteImageOptimizer } from "file:///C:/Users/MOSTAFA%20AMIR/Downloads/uniteda-supply-hub-performance-optimization/uniteda-supply-hub-performance-optimization/node_modules/vite-plugin-image-optimizer/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\MOSTAFA AMIR\\Downloads\\uniteda-supply-hub-performance-optimization\\uniteda-supply-hub-performance-optimization";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      webp: { quality: 80 },
      avif: { quality: 70 },
      png: { quality: 80 },
      jpeg: { quality: 80 }
    }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br"
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz"
    }),
    {
      name: "api-simulator",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.includes("emailjs.com") || req.url.startsWith("/api") || req.url.includes(".php"))) {
            let body = "";
            req.on("data", (chunk) => {
              body += chunk;
            });
            req.on("end", async () => {
              try {
                const isEmailJS = req.url.includes("emailjs");
                console.log(`[Local API] Intercepted ${isEmailJS ? "EmailJS" : "Legacy API"} request`);
                await new Promise((resolve) => setTimeout(resolve, 800));
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({
                  success: true,
                  status: 200,
                  text: "OK",
                  message: "SIMULATED: Email dispatched to yasserfarghal33@gmail.com"
                }));
              } catch (e) {
                res.statusCode = 500;
                res.end("Simulator Error");
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
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-core": ["react", "react-dom"],
          "vendor-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-label",
            "@radix-ui/react-menubar",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group",
            "@radix-ui/react-tooltip",
            "lucide-react"
          ],
          "vendor-base": ["@tanstack/react-query", "react-router-dom", "i18next", "clsx", "tailwind-merge", "date-fns"],
          "vendor-animation": ["framer-motion"]
        }
      }
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: true
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNT1NUQUZBIEFNSVJcXFxcRG93bmxvYWRzXFxcXHVuaXRlZGEtc3VwcGx5LWh1Yi1wZXJmb3JtYW5jZS1vcHRpbWl6YXRpb25cXFxcdW5pdGVkYS1zdXBwbHktaHViLXBlcmZvcm1hbmNlLW9wdGltaXphdGlvblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTU9TVEFGQSBBTUlSXFxcXERvd25sb2Fkc1xcXFx1bml0ZWRhLXN1cHBseS1odWItcGVyZm9ybWFuY2Utb3B0aW1pemF0aW9uXFxcXHVuaXRlZGEtc3VwcGx5LWh1Yi1wZXJmb3JtYW5jZS1vcHRpbWl6YXRpb25cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL01PU1RBRkElMjBBTUlSL0Rvd25sb2Fkcy91bml0ZWRhLXN1cHBseS1odWItcGVyZm9ybWFuY2Utb3B0aW1pemF0aW9uL3VuaXRlZGEtc3VwcGx5LWh1Yi1wZXJmb3JtYW5jZS1vcHRpbWl6YXRpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcclxuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbic7XHJcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogXCI6OlwiLFxyXG4gICAgcG9ydDogODA4MCxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXHJcbiAgICBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xyXG4gICAgICB3ZWJwOiB7IHF1YWxpdHk6IDgwIH0sXHJcbiAgICAgIGF2aWY6IHsgcXVhbGl0eTogNzAgfSxcclxuICAgICAgcG5nOiB7IHF1YWxpdHk6IDgwIH0sXHJcbiAgICAgIGpwZWc6IHsgcXVhbGl0eTogODAgfSxcclxuICAgIH0pLFxyXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcclxuICAgICAgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLFxyXG4gICAgICBleHQ6ICcuYnInLFxyXG4gICAgfSksXHJcbiAgICB2aXRlQ29tcHJlc3Npb24oe1xyXG4gICAgICBhbGdvcml0aG06ICdnemlwJyxcclxuICAgICAgZXh0OiAnLmd6JyxcclxuICAgIH0pLFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYXBpLXNpbXVsYXRvcicsXHJcbiAgICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXI6IGFueSkge1xyXG4gICAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoKHJlcTogYW55LCByZXM6IGFueSwgbmV4dDogYW55KSA9PiB7XHJcbiAgICAgICAgICAvLyBJbnRlcmNlcHQgRW1haWxKUyBzdWJtaXNzaW9ucyBhbmQgYW55IHJlbWFpbmluZyBsZWdhY3kgQVBJIGNhbGxzXHJcbiAgICAgICAgICBpZiAocmVxLnVybCAmJiAocmVxLnVybC5pbmNsdWRlcygnZW1haWxqcy5jb20nKSB8fCByZXEudXJsLnN0YXJ0c1dpdGgoJy9hcGknKSB8fCByZXEudXJsLmluY2x1ZGVzKCcucGhwJykpKSB7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gJyc7XHJcbiAgICAgICAgICAgIHJlcS5vbignZGF0YScsIChjaHVuazogYW55KSA9PiB7IGJvZHkgKz0gY2h1bms7IH0pO1xyXG4gICAgICAgICAgICByZXEub24oJ2VuZCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNFbWFpbEpTID0gcmVxLnVybC5pbmNsdWRlcygnZW1haWxqcycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtMb2NhbCBBUEldIEludGVyY2VwdGVkICR7aXNFbWFpbEpTID8gJ0VtYWlsSlMnIDogJ0xlZ2FjeSBBUEknfSByZXF1ZXN0YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgcHJvY2Vzc2luZyBkZWxheVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDgwMCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgdGV4dDogJ09LJyxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NJTVVMQVRFRDogRW1haWwgZGlzcGF0Y2hlZCB0byB5YXNzZXJmYXJnaGFsMzNAZ21haWwuY29tJ1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgcmVzLmVuZCgnU2ltdWxhdG9yIEVycm9yJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICAndmVuZG9yLWNvcmUnOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxyXG4gICAgICAgICAgJ3ZlbmRvci11aSc6IFtcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1hY2NvcmRpb24nLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWFsZXJ0LWRpYWxvZycsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtYXNwZWN0LXJhdGlvJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1hdmF0YXInLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWNoZWNrYm94JyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1jb2xsYXBzaWJsZScsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtY29udGV4dC1tZW51JyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1kaWFsb2cnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWhvdmVyLWNhcmQnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWxhYmVsJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1tZW51YmFyJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1uYXZpZ2F0aW9uLW1lbnUnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXInLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXByb2dyZXNzJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1yYWRpby1ncm91cCcsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3Qtc2Nyb2xsLWFyZWEnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXNlbGVjdCcsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3Qtc2VwYXJhdG9yJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zbGlkZXInLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXNsb3QnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXN3aXRjaCcsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtdGFicycsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtdG9hc3QnLFxyXG4gICAgICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXRvZ2dsZScsXHJcbiAgICAgICAgICAgICdAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlLWdyb3VwJyxcclxuICAgICAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJyxcclxuICAgICAgICAgICAgJ2x1Y2lkZS1yZWFjdCdcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICAndmVuZG9yLWJhc2UnOiBbJ0B0YW5zdGFjay9yZWFjdC1xdWVyeScsICdyZWFjdC1yb3V0ZXItZG9tJywgJ2kxOG5leHQnLCAnY2xzeCcsICd0YWlsd2luZC1tZXJnZScsICdkYXRlLWZucyddLFxyXG4gICAgICAgICAgJ3ZlbmRvci1hbmltYXRpb24nOiBbJ2ZyYW1lci1tb3Rpb24nXSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDYwMCxcclxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxyXG4gIH1cclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFpQixTQUFTLG9CQUFvQjtBQUNsa0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUNoQyxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLDBCQUEwQjtBQUxuQyxJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxJQUMxQyxtQkFBbUI7QUFBQSxNQUNqQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDcEIsTUFBTSxFQUFFLFNBQVMsR0FBRztBQUFBLE1BQ3BCLEtBQUssRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNuQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsSUFDdEIsQ0FBQztBQUFBLElBQ0QsZ0JBQWdCO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxnQkFBZ0I7QUFBQSxNQUNkLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNEO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixnQkFBZ0IsUUFBYTtBQUMzQixlQUFPLFlBQVksSUFBSSxDQUFDLEtBQVUsS0FBVSxTQUFjO0FBRXhELGNBQUksSUFBSSxRQUFRLElBQUksSUFBSSxTQUFTLGFBQWEsS0FBSyxJQUFJLElBQUksV0FBVyxNQUFNLEtBQUssSUFBSSxJQUFJLFNBQVMsTUFBTSxJQUFJO0FBQzFHLGdCQUFJLE9BQU87QUFDWCxnQkFBSSxHQUFHLFFBQVEsQ0FBQyxVQUFlO0FBQUUsc0JBQVE7QUFBQSxZQUFPLENBQUM7QUFDakQsZ0JBQUksR0FBRyxPQUFPLFlBQVk7QUFDeEIsa0JBQUk7QUFDRixzQkFBTSxZQUFZLElBQUksSUFBSSxTQUFTLFNBQVM7QUFDNUMsd0JBQVEsSUFBSSwyQkFBMkIsWUFBWSxZQUFZLFlBQVksVUFBVTtBQUdyRixzQkFBTSxJQUFJLFFBQVEsYUFBVyxXQUFXLFNBQVMsR0FBRyxDQUFDO0FBRXJELG9CQUFJLGFBQWE7QUFDakIsb0JBQUksVUFBVSxnQkFBZ0Isa0JBQWtCO0FBQ2hELG9CQUFJLElBQUksS0FBSyxVQUFVO0FBQUEsa0JBQ3JCLFNBQVM7QUFBQSxrQkFDVCxRQUFRO0FBQUEsa0JBQ1IsTUFBTTtBQUFBLGtCQUNOLFNBQVM7QUFBQSxnQkFDWCxDQUFDLENBQUM7QUFBQSxjQUNKLFNBQVMsR0FBRztBQUNWLG9CQUFJLGFBQWE7QUFDakIsb0JBQUksSUFBSSxpQkFBaUI7QUFBQSxjQUMzQjtBQUFBLFlBQ0YsQ0FBQztBQUNEO0FBQUEsVUFDRjtBQUNBLGVBQUs7QUFBQSxRQUNQLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0YsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixlQUFlLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDcEMsYUFBYTtBQUFBLFlBQ1g7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxlQUFlLENBQUMseUJBQXlCLG9CQUFvQixXQUFXLFFBQVEsa0JBQWtCLFVBQVU7QUFBQSxVQUM1RyxvQkFBb0IsQ0FBQyxlQUFlO0FBQUEsUUFDdEM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsSUFDdkIsc0JBQXNCO0FBQUEsRUFDeEI7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
