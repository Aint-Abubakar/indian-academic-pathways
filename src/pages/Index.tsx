
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
  Heart, 
  Download,
  Bot
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    title: "Ask AI",
    description: "Get instant answers to your education and career questions using AI assistant",
    icon: Bot,
    link: "/ask-ai",
    color: "nextstep-purple"
  },
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
    title: "Success Stories",
    description: "Inspiring stories of successful entrepreneurs, students, and professionals with their journeys",
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
        
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-secondary/20">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
              {categories.map((category, i) => (
                <CategoryCard
                  key={i}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  link={category.link}
                  color={category.color}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
