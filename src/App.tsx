import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { TranslationProvider } from "@/hooks/use-unified-translation";

// Route-based code splitting
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const RFQ = lazy(() => import("./pages/RFQ"));
const Operations = lazy(() => import("./pages/Operations"));
const Seasonal = lazy(() => import("./pages/Seasonal"));
const Contact = lazy(() => import("./pages/Contact"));
const FeatureStandby = lazy(() => import("./pages/FeatureStandby"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => null;

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Signal to the index.html loader that React has mounted
    window.dispatchEvent(new CustomEvent('react-mounted'));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LazyMotion features={domAnimation}>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Suspense fallback={<LoadingFallback />}>
              <TranslationProvider>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/rfq" element={<RFQ />} />
                  <Route path="/operations" element={<Operations />} />
                  <Route path="/seasonal" element={<Seasonal />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/standby" element={<FeatureStandby />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/quality" element={<FeatureStandby />} />
                  <Route path="/network" element={<FeatureStandby />} />
                  <Route path="/careers" element={<FeatureStandby />} />
                  <Route path="/solutions" element={<FeatureStandby />} />
                  <Route path="/programs" element={<FeatureStandby />} />
                  <Route path="/portal" element={<FeatureStandby />} />
                  <Route path="/faq" element={<FeatureStandby />} />
                  <Route path="/privacy" element={<FeatureStandby />} />
                  <Route path="/terms" element={<FeatureStandby />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </TranslationProvider>
            </Suspense>
          </BrowserRouter>
        </LazyMotion>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
