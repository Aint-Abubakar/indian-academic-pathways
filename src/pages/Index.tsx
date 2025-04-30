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
  // Colleges option removed, only keeping Top Colleges
  {
    title: "Courses",
    description: "Complete list of academic and vocational courses in various fields",
    icon: BookOpen,
    link: "/courses",
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
    title: "Skill Development",
    description: "Short-term certifications in trending technical and soft skills",
    icon: BookUser,
    link: "/skill-development",
    color: "nextstep-blue"
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
        
        <section className="py-16 md:py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Explore NextStep Resources</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                All the tools and information you need to make informed academic and career decisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div key={index} style={{animationDelay: `${index * 0.1}s`}}>
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-nextstep-blue/10 px-3 py-1 text-sm text-nextstep-blue">
                  Why Choose NextStep?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Guiding You Towards The Right Path</h2>
                <p className="text-muted-foreground">
                  NextStep is designed specifically for Indian students navigating the complex education system. 
                  We provide reliable information, expert guidance, and comprehensive resources to help you make 
                  confident decisions about your academic and professional future.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <svg className="w-4 h-4 text-nextstep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Comprehensive and updated information</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <svg className="w-4 h-4 text-nextstep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Personalized guidance for your unique journey</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <svg className="w-4 h-4 text-nextstep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Free resources to support your preparation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-100 p-1 rounded-full mr-2">
                      <svg className="w-4 h-4 text-nextstep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Regular updates on education news and opportunities</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <div className="text-center space-y-4">
                  <div className="inline-flex rounded-full bg-nextstep-blue/10 p-6">
                    <GraduationCap className="h-10 w-10 text-nextstep-blue" />
                  </div>
                  <h3 className="text-2xl font-semibold">Get Personalized Guidance</h3>
                  <p className="text-muted-foreground">
                    Answer a few questions about your interests, academic background, and career goals, 
                    and we'll provide tailored recommendations just for you.
                  </p>
                  <div className="pt-4">
                    <div className="flex flex-col space-y-3">
                      <button className="w-full bg-gradient-to-r from-nextstep-blue to-nextstep-purple text-white rounded-md px-4 py-3 text-center font-medium hover:opacity-90 transition-opacity">
                        Take the Career Quiz
                      </button>
                      <button className="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-3 text-center font-medium">
                        Speak to a Counselor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-20 bg-gradient-to-r from-nextstep-blue to-nextstep-purple text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Next Step?</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8 text-white/90">
              Join thousands of students who have found their path with our guidance and resources.
            </p>
            <button className="bg-white text-nextstep-blue hover:bg-white/90 px-8 py-3 rounded-md font-medium">
              Start Exploring
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
