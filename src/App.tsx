
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TopCollegesPage from "./pages/colleges/CollegesPage";
import CollegesByState from "./pages/colleges/CollegesByState";
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
          {/* College routes - fix routing issue */}
          <Route path="/colleges" element={<TopCollegesPage />} />
          <Route path="/top-colleges" element={<TopCollegesPage />} />
          <Route path="/colleges/:stateId" element={<CollegesByState />} />
          <Route path="/top-colleges/:stateId" element={<CollegesByState />} />
          <Route path="/colleges/:stateId/:collegeId" element={<CollegeDetail />} />
          <Route path="/top-colleges/:stateId/:collegeId" element={<CollegeDetail />} />
          {/* These routes will be implemented in future iterations */}
          <Route path="/scholarships" element={<NotFound />} />
          <Route path="/courses" element={<NotFound />} />
          <Route path="/trending-courses" element={<NotFound />} />
          <Route path="/exams" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/study-abroad" element={<NotFound />} />
          <Route path="/skill-development" element={<NotFound />} />
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
