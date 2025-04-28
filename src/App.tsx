
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CollegesPage from "./pages/colleges/CollegesPage";
import CollegesByCity from "./pages/colleges/CollegesByCity";
import CollegeDetail from "./pages/colleges/CollegeDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* College routes */}
          <Route path="/colleges" element={<CollegesPage />} />
          <Route path="/colleges/:cityId" element={<CollegesByCity />} />
          <Route path="/colleges/:cityId/:collegeId" element={<CollegeDetail />} />
          {/* These routes will be implemented in future iterations */}
          <Route path="/scholarships" element={<NotFound />} />
          <Route path="/courses" element={<NotFound />} />
          <Route path="/trending-courses" element={<NotFound />} />
          <Route path="/exams" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/top-colleges" element={<NotFound />} />
          <Route path="/skill-development" element={<NotFound />} />
          <Route path="/study-abroad" element={<NotFound />} />
          <Route path="/news" element={<NotFound />} />
          <Route path="/success-stories" element={<NotFound />} />
          <Route path="/resources" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/explore" element={<NotFound />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
