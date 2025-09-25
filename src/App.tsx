import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuraLanding from "./pages/AuraLanding";
import OurStory from "./pages/OurStory";
import AuraInsights from "./pages/AuraInsights";
import UseCases from "./pages/UseCases";
import TechSpecs from "./pages/TechSpecs";
import AuraReveal from "./pages/AuraReveal";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AuraLanding />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/insights" element={<AuraInsights />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/tech-specs" element={<TechSpecs />} />
          <Route path="/reveal" element={<AuraReveal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
