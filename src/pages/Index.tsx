
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  Award, 
  FileText, 
  Briefcase, 
  Globe, 
  BookUser,
  Star, 
  Bell, 
  Heart, 
  Download
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    title: "Scholarships",
    description: "National & international scholarships with eligibility criteria & deadlines",
    icon: Award,
    link: "/scholarships",
    color: "nextstep-blue"
  },
  {
    title: "Free Courses",
    description: "Complete list of free academic and vocational courses in various fields",
    icon: BookOpen,
    link: "/free-courses",
    color: "nextstep-indigo"
  },
  {
    title: "Best Courses Now",
    description: "Updated list of trending and high-demand courses for today's job market",
    icon: Star,
    link: "/trending-courses",
    color: "nextstep-yellow"
  },
  {
    title: "Entrance Exams",
    description: "Detailed information about major exams with syllabus and preparation tips",
    icon: FileText,
    link: "/exams",
    color: "nextstep-red"
  },
  {
    title: "Career Paths",
    description: "Guidance on various career options after 10th, 12th, and graduation",
    icon: Briefcase,
    link: "/careers",
    color: "nextstep-green"
  },
  {
    title: "Top Colleges",
    description: "Lists of top colleges for specific fields with rankings and placement data",
    icon: GraduationCap,
    link: "/top-colleges",
    color: "nextstep-teal"
  },
  {
    title: "Study Abroad",
    description: "Resources for studying in USA, UK, Canada, Australia, and Europe",
    icon: Globe,
    link: "/study-abroad",
    color: "nextstep-purple"
  },
  {
    title: "Education News",
    description: "Latest updates on exam patterns, policies, and scholarship announcements",
    icon: Bell,
    link: "/news",
    color: "nextstep-orange"
  },
  {
    title: "Motivational Stories",
    description: "Success stories of students cracking exams and winning scholarships",
    icon: Heart,
    link: "/success-stories",
    color: "nextstep-red"
  },
  {
    title: "Free Resources",
    description: "Downloadable eBooks, mock tests, free courses, and study materials",
    icon: Download,
    link: "/resources",
    color: "nextstep-green"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
