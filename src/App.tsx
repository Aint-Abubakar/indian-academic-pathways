
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TopCollegesPage from "./pages/colleges/CollegesPage";
import CollegesByState from "./pages/colleges/CollegesByState";
import CollegeDetail from "./pages/colleges/CollegeDetail";
import CareersPage from "./pages/careers/CareersPage";
import StudyAbroadPage from "./pages/studyabroad/StudyAbroadPage";
import CountryCollegesPage from "./pages/studyabroad/CountryCollegesPage";
import CollegeDetailPage from "./pages/studyabroad/CollegeDetailPage";
import ExamsPage from "./pages/exams/ExamsPage";
import FreeCoursesPage from "./pages/freecourses/FreeCoursesPage";
import TrendingCoursesPage from "./pages/trending/TrendingCoursesPage";

import ScholarshipsPage from "./pages/scholarships/ScholarshipsPage";
import ScholarshipDetail from "./pages/scholarships/ScholarshipDetail";
import SmartStudyPage from "./pages/smartstudy/SmartStudyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Redirect /colleges to /top-colleges */}
          <Route path="/colleges" element={<Navigate to="/top-colleges" replace />} />
          <Route path="/top-colleges" element={<TopCollegesPage />} />
          
          {/* Redirect college state routes */}
          <Route path="/colleges/:stateId" element={<Navigate to="/top-colleges/:stateId" replace />} />
          <Route path="/top-colleges/:stateId" element={<CollegesByState />} />
          <Route path="/colleges/:stateId/:collegeId" element={<Navigate to="/top-colleges/:stateId/:collegeId" replace />} />
          <Route path="/top-colleges/:stateId/:collegeId" element={<CollegeDetail />} />
          
          {/* Careers page */}
          <Route path="/careers" element={<CareersPage />} />
          
          {/* Study Abroad routes */}
          <Route path="/study-abroad" element={<StudyAbroadPage />} />
          <Route path="/study-abroad/:countryId" element={<CountryCollegesPage />} />
          <Route path="/study-abroad/:countryId/:collegeId" element={<CollegeDetailPage />} />
          
          {/* Exams page */}
          <Route path="/exams" element={<ExamsPage />} />

          {/* Courses routes */}
          <Route path="/free-courses" element={<FreeCoursesPage />} />
          <Route path="/courses" element={<Navigate to="/free-courses" replace />} />
          
          {/* Trending Courses */}
          <Route path="/trending-courses" element={<TrendingCoursesPage />} />
          <Route path="/best-courses" element={<Navigate to="/trending-courses" replace />} />
          
          
          {/* Scholarships */}
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
          
          {/* Smart Study */}
          <Route path="/smart-study" element={<SmartStudyPage />} />
          
          {/* These routes will be implemented in future iterations */}
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
