import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import RFQ from "./pages/RFQ";
import Operations from "./pages/Operations";
import Seasonal from "./pages/Seasonal";
import Contact from "./pages/Contact";
import FeatureStandby from "./pages/FeatureStandby";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
